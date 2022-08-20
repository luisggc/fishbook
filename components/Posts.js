import { getFirestore, collection, query, orderBy, limit } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../firebase";
import Post from "./Post";

export default function Posts({ posts }) {
  const postsRef = collection(db, "posts");
  const q = query(postsRef, orderBy("timestamp"), limit(3));
  const [realTimePosts, loading, error] = useCollection(q);
  const realTimePostsFormated = realTimePosts?.docs?.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  const renderedPost = realTimePosts ? realTimePostsFormated : posts;

  return (
    <div>
      {renderedPost?.map((post) => {
        return <Post key={post.id} {...post} />;
      })}
    </div>
  );
}
