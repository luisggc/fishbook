import Image from "next/image";
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";
import { FlagIcon, PlayIcon, SearchIcon, ShoppingCartIcon } from "@heroicons/react/outline";
import HeaderIcon from "./HeaderIcon";
import { signOut, useSession } from "next-auth/react";

export default function Header() {
  const { data } = useSession();
  return (
    <div className="sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md">
      {/* Left */}
      <div className="flex items-center">
        <Image
          src="https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-facebook-2019-circle-512.png"
          width={40}
          height={40}
          layout="fixed"
        />
        <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
          <SearchIcon className="h-6 text-gray-600" />
          <input
            className="hidden md:inline-flex bg-transparent outline-none placeholder-gray-500 "
            type="text"
            placeholder="Search"
          />
        </div>
      </div>
      {/* Middle */}
      <div className="flex justify-center flex-grow">
        <div className="flex space-x-6 md:space-x-2">
          <HeaderIcon Icon={HomeIcon} active />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>
      {/* Right */}
      <div className="flex items-center sm:space-x-2 justify-end">
        <Image
          onClick={signOut}
          className="rounded-full cursor-pointer"
          src={data?.user?.image}
          width={40}
          height={40}
          layout="fixed"
        />
        <p className="whitespace-nowrap font-semibold pr-3">{data?.user?.name}</p>
        <ViewGridIcon className="icon" />
        <ChatIcon className="icon" />
        <BellIcon className="icon" />
        <ChevronDownIcon className="icon" />
      </div>
    </div>
  );
}
