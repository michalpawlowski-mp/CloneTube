"use client";
import { useEffect, useState, useRef, useCallback } from "react";
import { searchVideos } from "../lib/searchVideos";
import { VideoItem, VideoGridProps } from "../types/video";
import VideoModal from "./VideoModal";
import VideoList from "./VideoList";

export default function VideoView({ selectedCategory }: VideoGridProps) {
  const [videos, setVideos] = useState<VideoItem[]>([]);
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
      setVideos(
        isNewCategory
          ? data.items || []
          : (prev) => [...prev, ...(data.items || [])]
      );
      setNextPageToken(data.nextPageToken || null);
      setLoading(false);
    },
    [selectedCategory, nextPageToken, loading]
  );

  useEffect(() => {
    fetchVideos(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCategory]);

  useEffect(() => {
    if (!observerRef.current || !nextPageToken) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          fetchVideos(false);
        }
      },
      { root: null, rootMargin: "200px", threshold: 0 }
    );
    observer.observe(observerRef.current);
    return () => observer.disconnect();
  }, [nextPageToken, fetchVideos]);

  return (
    <main className="w-full lg:w-10/12 xl:w-11/12 h-[calc(100vh-128px)] lg:h-[calc(100vh-76px)] overflow-y-scroll hide-scrollbar p-4 pb-36">
      {selectedVideoId && (
        <VideoModal
          videoId={selectedVideoId}
          onClose={() => setSelectedVideoId(null)}
        />
      )}
      <VideoList videos={videos} onSelectVideo={setSelectedVideoId} />
      <div ref={observerRef} className="h-1 w-full" />
      {loading && (
        <div className="text-center mt-4">Ładowanie kolejnych filmów...</div>
      )}
    </main>
  );
}
