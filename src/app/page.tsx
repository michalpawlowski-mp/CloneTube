"use client";

import { useState } from "react";
import Header from "./Header/Header";
import Nav from "./Nav/Nav";
import VideoView from "./VideoView/VideoView";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("js");

  const handleSearch = (query: string) => {
    setSelectedCategory(query);
  };

  const resetCategory = () => {
    setSelectedCategory("js");
  };

  return (
    <>
      <Header onSearch={handleSearch} onResetCategory={resetCategory} />
      <div className="w-full h-full flex flex-col lg:flex-row">
        <Nav
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <VideoView selectedCategory={selectedCategory} />
      </div>
    </>
  );
}
