import { SearchIcon } from "@heroicons/react/outline";
import { DotsHorizontalIcon, VideoCameraIcon } from "@heroicons/react/solid";
import Contact from "./Contact";

const contacts = [
  { name: "Davi", src: "/images/davi-feed-2.jpeg" },
  { name: "Jesus", src: "/images/jesus-story.jpg" },
  { name: "Salomão", src: "/images/salomao-story.jpg" },
  { name: "Golias", src: "/images/golias-story.jpg" },
  { name: "Davi", src: "/images/davi-story.jpg" },
];

export default function Widgets() {
  return (
    <div className="hidden lg:flex flex-col w-60 p-2 mt-5">
      <div className="flex justify-between items-center text-gray-500 mb-5">
        <h2 className="text-cl">Contact</h2>
        <div className="flex space-x-2">
          <VideoCameraIcon className="h-6" />
          <SearchIcon className="h-6" />
          <DotsHorizontalIcon className="h-6" />
        </div>
      </div>
      {contacts.map((contact) => (
        <Contact key={contact.src} {...contact} />
      ))}
    </div>
  );
}
