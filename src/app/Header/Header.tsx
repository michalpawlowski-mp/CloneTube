import Image from "next/image";
import { useState } from "react";

interface HeaderProps {
  onSearch: (query: string) => void;
  onResetCategory: () => void; // nowy props
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
      <div
        className=" flex items-center cursor-pointer"
        onClick={onResetCategory}
      >
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

      <div className="flex mx-auto">
        <input
          type="text"
          placeholder="Szukaj"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          className="border-2 border-r-0 rounded-l-xl border-white  bg-transparent focus:outline-none px-2 py-2"
        />
        <button
          onClick={handleSearch}
          className="cursor-pointer rounded-r-xl bg-white flex items-center justify-center py-1 px-2"
          aria-label="Szukaj"
        >
          <Image src="/search.svg" alt="Wyszukaj" width={25} height={25} />
        </button>
      </div>
    </header>
  );
}
