import { getFirestore, collection, query, orderBy, limit } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../firebase";
import Post from "./Post";

export default function Posts() {
  const postsRef = collection(db, "posts");
  const q = query(postsRef, orderBy("timestamp"), limit(3));
  const [realTimePosts, loading, error] = useCollection(q);
  console.log(realTimePosts?.docs);

  return (
    <div>
      {realTimePosts?.docs?.map((doc) => {
        console.log(doc.data());
        return <Post key={doc.id} {...doc.data()} />;
      })}
    </div>
  );
}
