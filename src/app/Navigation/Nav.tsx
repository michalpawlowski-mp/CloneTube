import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function Nav() {
    return (
        <nav className="w-full lg:w-64 lg:bg-neutral-800 text-white lg:h-full lg:overflow-y-auto overflow-x-auto scrollbar-thin scrollbar-thumb-neutral-700 scrollbar-track-neutral-900">
            <ul className="flex flex-row lg:flex-col min-w-max lg:min-w-0 lg:my-0 my-2">
                <li className="lg:mb-2 lg:ml-0 ml-2 bg-neutral-700 rounded-xl  flex items-center hover:bg-neutral-700 lg:rounded p-2 min-w-[150px] lg:min-w-0">
                    <Image
                        src="/home.svg"
                        alt="Strona główna"
                        width={24}
                        height={24}
                        className="inline-block mr-2"
                    />
                    <Link href="/">Strona główna</Link>
                </li>
                <li className="lg:mb-2 lg:ml-0 ml-2 bg-neutral-700 rounded-xl  min-w-[100px] lg:min-w-0">
                    <Link href="./Navigation/popular" className="hover:bg-neutral-700 p-2 rounded block text-center">Na czasie</Link>
                </li>
                <li className="lg:mb-2 lg:ml-0 ml-2 bg-neutral-700 rounded-xl  min-w-[100px] lg:min-w-0">
                    <Link href="./Navigation/short" className="hover:bg-neutral-700 p-2 rounded block text-center">Short</Link>
                </li>
                <li className="lg:mb-2 lg:ml-0 ml-2 bg-neutral-700 rounded-xl  min-w-[100px] lg:min-w-0">
                    <Link href="./Navigation/live" className="hover:bg-neutral-700 p-2 rounded block text-center">Na żywo</Link>
                </li>
                <li className="lg:mb-2 lg:ml-0 ml-2 bg-neutral-700 rounded-xl  min-w-[100px] lg:min-w-0">
                    <Link href="./Navigation/music" className="hover:bg-neutral-700 p-2 rounded block text-center">Muzyka</Link>
                </li>
                <li className="lg:mb-2 lg:ml-0 ml-2 bg-neutral-700 rounded-xl  min-w-[100px] lg:min-w-0">
                    <Link href="./Navigation/film" className="hover:bg-neutral-700 p-2 rounded block text-center">Filmy</Link>
                </li>
                <li className="lg:mb-2 lg:ml-0 ml-2 bg-neutral-700 rounded-xl  min-w-[100px] lg:min-w-0">
                    <Link href="./Navigation/gaming" className="hover:bg-neutral-700 p-2 rounded block text-center">Gry</Link>
                </li>
                <li className="lg:mb-2 lg:ml-0 ml-2 bg-neutral-700 rounded-xl  min-w-[100px] lg:min-w-0">
                    <Link href="./Navigation/fitness" className="hover:bg-neutral-700 p-2 rounded block text-center">Fitness</Link>
                </li>
                <li className="lg:mb-2 lg:ml-0 ml-2 bg-neutral-700 rounded-xl  min-w-[100px] lg:min-w-0">
                    <Link href="./Navigation/podcast" className="hover:bg-neutral-700 p-2 rounded block text-center">Podcast</Link>
                </li>
            </ul>
        </nav>
    );
}