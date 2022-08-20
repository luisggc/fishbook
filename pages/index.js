import Head from "next/head";
import Header from "../components/Header";
import { getSession } from "next-auth/react";
import Login from "../components/Login";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import Widgets from "../components/Widgets";
import { collection, getDocs, limit, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";

export default function Home(props) {
  const { session, posts } = props;
  if (!session) return <Login />;
  return (
    <div className="h-screen bg-gray-100 overflow-hidden ">
      <Head>
        <title>FishBook</title>
        <meta name="description" content="Facebook Clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex">
        <Sidebar />
        <Feed posts={posts} />
        <Widgets />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  const postsRef = collection(db, "posts");
  const postQuery = query(postsRef, orderBy("timestamp"), limit(10));
  const postDocs = await getDocs(postQuery);
  const posts = postDocs.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
    timestamp: null,
  }));

  return {
    props: { session, posts },
  };
}
