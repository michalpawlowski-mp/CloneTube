import { SearchVideosResponse } from "@/types/video";

const apiKey = process.env.API_KEY;

export async function searchVideos(
  selectedCategory: string,
  pageToken: string | null = null,
): Promise<SearchVideosResponse> {
  if (!apiKey) {
    console.error("Brakuje klucza API");
    return { items: [], nextPageToken: null };
  }

  const baseUrl = "https://www.googleapis.com/youtube/v3/search";

  const params = new URLSearchParams({
    part: "snippet",
    type: "video",
    maxResults: "24",
    key: apiKey,
  });

  if (selectedCategory && selectedCategory !== "All") {
    params.append("q", selectedCategory);
  }

  if (pageToken) {
    params.append("pageToken", pageToken);
  }

  const url = `${baseUrl}?${params.toString()}`;

  try {
    const res = await fetch(url);

    if (!res.ok) {
      console.error("Błąd YouTube API:", res.status);
      return { items: [], nextPageToken: null };
    }

    const data = await res.json();

    return {
      items: data.items || [],
      nextPageToken: data.nextPageToken || null,
    };
  } catch (error) {
    console.error("Błąd podczas pobierania filmów:", error);
    return { items: [], nextPageToken: null };
  }
}
