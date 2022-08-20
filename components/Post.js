import Image from "next/image";
import {
  ChatAltIcon,
  ChevronDownIcon,
  ShareIcon,
  ShoppingBagIcon,
  ThumbUpIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";

export default function Post({ name, message, postImage, image, timestamp }) {
  return (
    <div className="flex flex-col">
      <div className="p-5 bg-white mt-5 rounded-t-2xl shadow-sm">
        <div className="flex items-center space-x-2">
          <img className="rounded-full" src={image} width={40} height={40} alt="" />
        </div>
        <div>
          <p className="font-medium">{name}</p>
          <p className="text-cs text-gray-400">{new Date(timestamp?.toDate()).toLocaleString()}</p>
        </div>
        <p className="pt-4">{message}</p>
      </div>
      {postImage && (
        <div className="relative h-56 md:h-96 bg-white">
          <Image src={postImage} width={400} height={400} layout="fill" objectFit="cover" />
        </div>
      )}
      <div className="flex justify-between items-center rounded-b-2xl bg-white shadow-md text-gray-400 border-t">
        <div className="inputIcon p-3 rounded-none rounded-bl-2xl">
          <ThumbUpIcon className="h-5" />
          <p className="text-xs sm:text-base">Like</p>
        </div>
        <div className="inputIcon p-3 rounded-none">
          <ChatAltIcon className="h-5" />
          <p className="text-xs sm:text-base">Comment</p>
        </div>
        <div className="inputIcon p-3 rounded-none rounded-br-2xl">
          <ShareIcon className="h-5" />
          <p className="text-xs sm:text-base">Share</p>
        </div>
      </div>
    </div>
  );
}
