import Image from "next/image";
import { useState } from "react";

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

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <header className="bg-neutral-900 w-full h-max shadow flex items-center justify-between py-4 px-2">
      <div className=" flex items-center cursor-pointer" onClick={onResetCategory}>
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

      <div className="flex w-full max-w-lg mx-auto">
        <input
          type="text"
          placeholder="Szukaj"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 bg-neutral-800 border border-neutral-700 text-white px-4 py-2 rounded-l-full focus:outline-none focus:border-blue-500"
        />

        <button
          type="button"
          onClick={handleSearch}
          className="bg-neutral-700 border border-l-0 border-neutral-700 px-5 rounded-r-full flex items-center justify-center hover:bg-neutral-600 transition"
        >
          <Image
            src="/search.svg"
            alt="Szukaj"
            width={24}
            height={24}
            className="invert"
          />
        </button>
      </div>
    </header>
  );
}
