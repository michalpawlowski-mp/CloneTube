export interface VideoItem {
  id: {
    videoId: string;
  };
  snippet: {
    title: string;
    thumbnails: {
      medium: {
        url: string;
      };
    };
  };
}

export interface VideoGridProps {
  selectedCategory: string;
}

export interface VideoListProps {
  videos: VideoItem[];
  onSelectVideo: (videoId: string) => void;
}

export interface VideoModalProps {
  videoId: string;
  onClose: () => void;
}

export interface searchVideosProps {
  query: string;
  pageToken: string | null;
}
