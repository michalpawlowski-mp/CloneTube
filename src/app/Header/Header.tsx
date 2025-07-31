import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="bg-neutral-900 w-screen shadow flex items-center justify-between py-4 p-2">
      <Link href="/" className="text-white flex items-center">
        <Image src="/yt-logo.svg" alt="CloneTube Logo" width={40} height={40} className="mr-2 bg-white rounded-full" />
        <h1 className="text-3xl font-bold">CloneTube</h1>
      </Link>
      <div className="rounded-lg flex">
        <input
          type="text"
          placeholder="Szukaj"
          className="border-2 border-r-0 rounded-l-xl border-white text-white focus:outline-none px-2 py-2"
        />
        <div className="cursor-pointer rounded-r-xl bg-white flex items-center justify-center py-1 px-2">
          <Image src="/search.svg" alt="Wyszukaj" width={25} height={25} />
        </div>
      </div>
      <div className="bg-white flex items-center p-1 rounded-full">
        <button type="button" className="cursor-pointer">
          <Image src="/dark.svg" alt="Wyszukaj" width={25} height={25} />
          <Image src="/light.svg" alt="Wyszukaj" width={25} height={25} />
        </button>
      </div>
    </header>
  );
}
