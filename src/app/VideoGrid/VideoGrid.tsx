"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import Image from "next/image";
import { searchVideos } from "../API/route";

interface VideoGridProps {
  selectedCategory: string;
}

export default function VideoGrid({ selectedCategory }: VideoGridProps) {
  const [videos, setVideos] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [nextPageToken, setNextPageToken] = useState<string | null>(null);
  const [selectedVideoId, setSelectedVideoId] = useState<string | null>(null);
  const observerRef = useRef<HTMLDivElement | null>(null);

  const fetchVideos = useCallback(
    async (isNewCategory = false) => {
      if (loading) return;
      setLoading(true);
      const data = await searchVideos(
        selectedCategory,
        isNewCategory ? null : nextPageToken
      );
      if (isNewCategory) {
        setVideos(data.items || []);
      } else {
        setVideos((prev) => [...prev, ...(data.items || [])]);
      }
      setNextPageToken(data.nextPageToken || null);
      setLoading(false);
    },
    [selectedCategory, nextPageToken, loading]
  );

  useEffect(() => {
    fetchVideos(true);
  }, [selectedCategory]);

  useEffect(() => {
    if (!observerRef.current || !nextPageToken) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          fetchVideos(false);
        }
      },
      {
        root: null,
        rootMargin: "200px",
        threshold: 0,
      }
    );

    observer.observe(observerRef.current);
    return () => observer.disconnect();
  }, [nextPageToken, fetchVideos]);

  return (
    <main className="w-full lg:w-10/12 xl:w-11/12 h-[calc(100vh-128px)] lg:h-[calc(100vh-76px)] overflow-y-scroll hide-scrollbar p-4 pb-36">
      {selectedVideoId && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="bg-neutral-900 p-4 rounded-lg relative">
            <button
              className="absolute top-2 right-2 text-white text-2xl"
              onClick={() => setSelectedVideoId(null)}
            >
              &times;
            </button>
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${selectedVideoId}`}
              title="YouTube video player"
              className="rounded-lg"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
        {videos.map((video: any, i: number) => (
          <div
            key={i}
            className="bg-gray-200 aspect-video rounded-2xl flex items-center justify-center shadow relative overflow-hidden cursor-pointer"
            onClick={() => setSelectedVideoId(video.id.videoId)}
          >
            <Image
              src={video.snippet.thumbnails.medium.url}
              alt={video.snippet.title}
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 bg-black bg-opacity-60 w-full p-2 text-sm text-white">
              {video.snippet.title}
            </div>
          </div>
        ))}
      </div>

      {/* Observer Trigger */}
      <div ref={observerRef} className="h-1 w-full" />

      {loading && (
        <div className="text-white text-center mt-4">
          Ładowanie kolejnych filmów...
        </div>
      )}
    </main>
  );
}
