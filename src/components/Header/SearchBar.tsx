"use client";

import Image from "next/image";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  onSearch: () => void;
}

export default function SearchBar({ value, onChange, onSearch }: SearchBarProps) {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") onSearch();
  };

  return (
    <div className="flex w-full max-w-lg mx-auto ps-10">
      <input
        type="text"
        placeholder="Szukaj"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        className="flex-1 bg-neutral-800 border border-neutral-700 text-white px-4 py-2 rounded-l-full focus:outline-none focus:border-blue-500"
      />

      <button
        type="button"
        onClick={onSearch}
        className="bg-neutral-700  border-l-0 border-neutral-700 px-5 rounded-r-full flex items-center justify-center hover:bg-neutral-600 transition"
      >
        <Image src="/search.svg" alt="Szukaj" width={24} height={24} className="invert" />
      </button>
    </div>
  );
}
