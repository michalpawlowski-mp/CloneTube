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
        isNewCategory ? null : nextPageToken,
      );

      setVideos(
        isNewCategory ? data.items || [] : (prev) => [...prev, ...(data.items || [])],
      );
      setNextPageToken(data.nextPageToken || null);
      setLoading(false);
    },
    [selectedCategory, nextPageToken, loading],
  );

  useEffect(() => {
    setVideos([]);
    setNextPageToken(null);
    fetchVideos(true);
  }, [selectedCategory]);

  useEffect(() => {
    if (!observerRef.current || !nextPageToken) return;

    const observer = new IntersectionObserver(
      (entries) => entries[0].isIntersecting && fetchVideos(false),
      { rootMargin: "300px" },
    );

    observer.observe(observerRef.current);
    return () => observer.disconnect();
  }, [nextPageToken, fetchVideos]);

  return (
    <main className="flex-1 overflow-y-auto hide-scrollbar p-4 lg:p-6 pb-20">
      {selectedVideoId && (
        <VideoModal videoId={selectedVideoId} onClose={() => setSelectedVideoId(null)} />
      )}

      <VideoList videos={videos} onSelectVideo={setSelectedVideoId} />

      <div ref={observerRef} className="h-10 w-full" />

      {loading && (
        <div className="text-center py-8 text-neutral-400">
          Ładowanie kolejnych filmów...
        </div>
      )}
    </main>
  );
}
