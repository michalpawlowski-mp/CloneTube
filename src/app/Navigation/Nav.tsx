import Link from "next/link";
import React from "react";

export default function Nav() {
  return (
    <nav className="w-scren lg:w-2/12 lg:p-3 lg:bg-neutral-800 text-white  lg:h-screen lg:overflow-y-auto overflow-x-auto lg:border-r-2 lg:border-r-stone-700">
      <ul className="flex flex-row lg:flex-col min-w-max lg:min-w-0 lg:my-0 my-2">
        <li className="lg:mb-2 lg:ml-0 ml-2 bg-neutral-700 rounded-xl  min-w-[100px] lg:min-w-0">
          <Link href="/" className="hover:bg-neutral-700 p-2 rounded block text-center">
            Strona główna
          </Link>
        </li>
        <li className="lg:mb-2 lg:ml-0 ml-2 bg-neutral-700 rounded-xl  min-w-[100px] lg:min-w-0">
          <Link href="./popular" className="hover:bg-neutral-700 p-2 rounded block text-center">
            Na czasie
          </Link>
        </li>
        <li className="lg:mb-2 lg:ml-0 ml-2 bg-neutral-700 rounded-xl  min-w-[100px] lg:min-w-0">
          <Link href="./short" className="hover:bg-neutral-700 p-2 rounded block text-center">
            Short
          </Link>
        </li>
        <li className="lg:mb-2 lg:ml-0 ml-2 bg-neutral-700 rounded-xl  min-w-[100px] lg:min-w-0">
          <Link href="./live" className="hover:bg-neutral-700 p-2 rounded block text-center">
            Na żywo
          </Link>
        </li>
        <li className="lg:mb-2 lg:ml-0 ml-2 bg-neutral-700 rounded-xl  min-w-[100px] lg:min-w-0">
          <Link href="./music" className="hover:bg-neutral-700 p-2 rounded block text-center">
            Muzyka
          </Link>
        </li>
        <li className="lg:mb-2 lg:ml-0 ml-2 bg-neutral-700 rounded-xl  min-w-[100px] lg:min-w-0">
          <Link href="./film" className="hover:bg-neutral-700 p-2 rounded block text-center">
            Filmy
          </Link>
        </li>
        <li className="lg:mb-2 lg:ml-0 ml-2 bg-neutral-700 rounded-xl  min-w-[100px] lg:min-w-0">
          <Link href="./gaming" className="hover:bg-neutral-700 p-2 rounded block text-center">
            Gry
          </Link>
        </li>
        <li className="lg:mb-2 lg:ml-0 ml-2 bg-neutral-700 rounded-xl  min-w-[100px] lg:min-w-0">
          <Link href="./fitness" className="hover:bg-neutral-700 p-2 rounded block text-center">
            Fitness
          </Link>
        </li>
        <li className="lg:mb-2 lg:mx-0 mx-2 bg-neutral-700 rounded-xl  min-w-[100px] lg:min-w-0">
          <Link href="./podcast" className="hover:bg-neutral-700 p-2 rounded block text-center">
            Podcast
          </Link>
        </li>
      </ul>
    </nav>
  );
}
