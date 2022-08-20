import { useSession } from "next-auth/react";
import Image from "next/image";
import { CameraIcon, VideoCameraIcon } from "@heroicons/react/solid";
import { EmojiHappyIcon } from "@heroicons/react/outline";
import { useEffect, useRef, useState } from "react";
import { db, storage } from "../firebase";
import { getDownloadURL, ref, uploadBytesResumable, uploadString } from "firebase/storage";
import { serverTimestamp, collection, addDoc, setDoc, doc, updateDoc } from "firebase/firestore";

export default function InputBox() {
  const { data } = useSession();
  const inputRef = useRef(null);
  const mediaRef = useRef(null);
  const [imageToPost, setImageToPost] = useState(null);
  let imagePreview = imageToPost && URL.createObjectURL(imageToPost);

  const sendPost = (e) => {
    e.preventDefault();
    const inputMessage = inputRef.current.value;
    if (!inputMessage) return;
    if (imageToPost) removeImage();

    addDoc(collection(db, "posts"), {
      message: inputMessage,
      name: data.user.name,
      email: data.user.email,
      image: data.user.image,
      timestamp: serverTimestamp(),
    }).then((postDoc) => {
      if (!imageToPost) return;
      const storageRef = ref(storage, `posts/${postDoc.id}`);
      const uploadTask = uploadBytesResumable(storageRef, imageToPost);
      removeImage();
      uploadTask.on(
        "state_change",
        null,
        (error) => console.error(error),
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            updateDoc(postDoc, {
              postImage: downloadURL,
            });
          });
        }
      );
    });
    inputRef.current.value = "";
  };

  const addImageToPost = (e) => {
    const fileImage = e.target.files[0];
    if (fileImage) {
      setImageToPost(fileImage);
    }
  };

  const removeImage = () => {
    setImageToPost(null);
  };

  return (
    <div className="bg-white p-2 rounded-2xl shadow-md text-gray font-medium mt-6">
      <div className="flex space-x-4 p-4 items-center">
        <Image
          className="rounded-full"
          src={data.user.image}
          width={40}
          height={40}
          layout="fixed"
        />
        <form action="" className="flex flex-1">
          <input
            type="text"
            ref={inputRef}
            className="rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none"
            placeholder={`What's on your mind, ${data.user.name}?`}
          />
          <button hidden onClick={sendPost} type="submit">
            Submit
          </button>
          {imagePreview && (
            <div
              onClick={removeImage}
              className="flex flex-col filter hover:brightness-110 transition duration-150 transform hover:scale-105 cursor-pointer"
            >
              <img
                src={imagePreview}
                alt="image"
                accept="image/*"
                className="h-10 object-contain"
              />
              <p className="text-xs text-red-500 text-center">Remove</p>
            </div>
          )}
        </form>
      </div>
      <div className="flex justify-evenly p-3 border-t">
        <div className="inputIcon">
          <VideoCameraIcon className="h-7 text-red-500" />
          <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
        </div>
        <div
          className="inputIcon"
          onClick={() => {
            mediaRef.current.click();
          }}
        >
          <CameraIcon className="h-7 text-green-400" />
          <p className="text-xs sm:text-sm xl:text-base">Photo/Video</p>
          <input ref={mediaRef} type="file" onChange={addImageToPost} hidden />
        </div>
        <div className="inputIcon">
          <EmojiHappyIcon className="h-7 text-yellow-300" />
          <p className="text-xs sm:text-sm xl:text-base">Feeling/Activity</p>
        </div>
        <div></div>
      </div>
    </div>
  );
}
