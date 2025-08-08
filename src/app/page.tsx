"use client";

import { useState } from "react";
import Header from "./Header/Header";
import Nav from "./Nav/Nav";
import VideoGrid from "./VideoGrid/VideoGrid";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("js");

  const handleSearch = (query: string) => {
    setSelectedCategory(query);
  };

  return (
    <>
      <Header onSearch={handleSearch} />
      <div className="w-full h-full flex flex-col lg:flex-row">
        <Nav
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <VideoGrid selectedCategory={selectedCategory} />
      </div>
    </>
  );
}
