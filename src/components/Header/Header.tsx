"use client";

import Image from "next/image";
import { useState } from "react";
import SearchBar from "./SearchBar"; // ← import nowego komponentu

interface HeaderProps {
  onSearch: (query: string) => void;
  onResetCategory: () => void;
}

export default function Header({ onSearch, onResetCategory }: HeaderProps) {
  const [inputValue, setInputValue] = useState("");

  const handleSearch = () => {
    if (!inputValue.trim()) return;
    onSearch(inputValue.trim());
  };

  return (
    <header className="bg-neutral-900 w-full h-max shadow flex items-center justify-between py-4 px-2">
      <div className="flex items-center cursor-pointer" onClick={onResetCategory}>
        <Image
          src="/yt-logo.svg"
          alt="CloneTube Logo"
          width={30}
          height={30}
          className="mr-1 bg-white rounded-full"
        />
        <h1 className="text-2xl font-bold">CloneTube</h1>
        <p className="text-neutral-500 text-xs ml-1">PL</p>
      </div>

      {/* SearchBar przejął: input, button, handleKeyDown */}
      <SearchBar value={inputValue} onChange={setInputValue} onSearch={handleSearch} />
    </header>
  );
}
