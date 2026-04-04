"use client";

import Image from "next/image";
import { VideoListProps } from "@/types/video";

export default function VideoList({ videos, onSelectVideo }: VideoListProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 p-4">
      {videos.map((video) => (
        <div
          key={video.id.videoId}
          className="cursor-pointer hover:bg-gray-400/20 p-1 rounded-lg"
          onClick={() => onSelectVideo(video.id.videoId)}
        >
          <div className="relative aspect-video rounded-xl overflow-hidden">
            <Image
              src={video.snippet.thumbnails.medium.url}
              alt={video.snippet.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="flex gap-3 mt-3">
            <div className="w-9 h-9 rounded-full bg-neutral-600 overflow-hidden shrink-0 flex items-center justify-center text-white text-xs font-bold">
              {video.snippet.channelTitle?.charAt(0).toUpperCase()}
            </div>

            <div className="flex-1">
              <h3 className="text-sm font-semibold line-clamp-2">
                {video.snippet.title}
              </h3>

              <p className="text-xs text-gray-500 mt-1">{video.snippet.channelTitle}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
