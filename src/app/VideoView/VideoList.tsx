"use client";
import Image from "next/image";
import { VideoItem } from "../types/video";

interface VideoListProps {
  videos: VideoItem[];
  onSelectVideo: (videoId: string) => void;
}

export default function VideoList({ videos, onSelectVideo }: VideoListProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
      {videos.map((video, i) => (
        <div
          key={i}
          className="bg-gray-200 aspect-video rounded-2xl flex items-center justify-center shadow relative overflow-hidden cursor-pointer"
          onClick={() => onSelectVideo(video.id.videoId)}
        >
          <Image
            src={video.snippet.thumbnails.medium.url}
            alt={video.snippet.title}
            fill
            className="object-cover"
          />
          <div className="absolute bottom-0 bg-black bg-opacity-60 w-full p-2 text-sm">
            {video.snippet.title}
          </div>
        </div>
      ))}
    </div>
  );
}
