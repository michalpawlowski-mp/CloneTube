"use client";

import { VideoModalProps } from "@/types/video";

export default function VideoModal({ videoId, onClose }: VideoModalProps) {
  if (!videoId) return null;

  return (
    <div
      className="fixed inset-0 bg-black/90 flex items-center justify-center z-[100] p-4"
      onClick={onClose}
    >
      <div
        className="bg-neutral-900 rounded-2xl overflow-hidden max-w-4xl w-full shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative pt-[56.25%]">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            className="absolute inset-0 w-full h-full"
            allowFullScreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          />
        </div>

        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-black/70 hover:bg-black text-white w-10 h-10 rounded-full flex items-center justify-center text-2xl transition-colors z-10"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
