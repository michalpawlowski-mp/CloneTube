"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { searchVideos } from "../../lib/searchVideos";
import { VideoItem, VideoGridProps } from "../../types/video";
import VideoModal from "./VideoModal";
import VideoList from "./VideoList";

export default function VideoView({ selectedCategory }: VideoGridProps) {
  const [videos, setVideos] = useState<VideoItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [nextPageToken, setNextPageToken] = useState<string | null>(null);
  const [selectedVideoId, setSelectedVideoId] = useState<string | null>(null);
  const observerRef = useRef<HTMLDivElement | null>(null);
  const loadingRef = useRef(false);

  const fetchMoreVideos = useCallback(async () => {
    if (loadingRef.current || !nextPageToken) return;
    loadingRef.current = true;
    setLoading(true);

    const data = await searchVideos(selectedCategory, nextPageToken);

    setVideos((prev) => [...prev, ...(data.items ?? [])]);
    setNextPageToken(data.nextPageToken ?? null);
    loadingRef.current = false;
    setLoading(false);
  }, [selectedCategory, nextPageToken]);

  useEffect(() => {
    let cancelled = false;

    setVideos([]);
    setNextPageToken(null);
    setLoading(true);
    loadingRef.current = true;

    searchVideos(selectedCategory, null).then((data) => {
      if (!cancelled) {
        setVideos(data.items ?? []);
        setNextPageToken(data.nextPageToken ?? null);
        loadingRef.current = false;
        setLoading(false);
      }
    });

    return () => {
      cancelled = true;
      loadingRef.current = false;
    };
  }, [selectedCategory]);

  // Infinite scroll observer
  useEffect(() => {
    if (!observerRef.current || !nextPageToken) return;

    const observer = new IntersectionObserver(
      (entries) => entries[0].isIntersecting && fetchMoreVideos(),
      { rootMargin: "300px" },
    );

    observer.observe(observerRef.current);
    return () => observer.disconnect();
  }, [nextPageToken, fetchMoreVideos]);

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
