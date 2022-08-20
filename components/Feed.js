import InputBox from "./InputBox";
import Posts from "./Posts";
import Stories from "./Stories";

export default function Feed() {
  return (
    <div className="flex-grow h-screen pb-44 pt-6 mr-4 xl:mr-40 overflow-y-auto">
      <div className="mx-auto max-w-md md:max_w_lg lg:max-w-2xl">
        <Stories />
        <InputBox />
        <Posts />
      </div>
    </div>
  );
}
