import { searchVideosProps } from "@/types/video";

const apiKey = process.env.API_KEY;

export async function searchVideos({
  query,
  pageToken = null,
}: searchVideosProps) {
  if (!apiKey) {
    console.error("Brakuje klucza API");
    return [];
  }

  const baseUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=24&q=
  ${encodeURIComponent(query)}&key=${apiKey}`;

  const url = pageToken ? `${baseUrl}&pageToken=${pageToken}` : baseUrl;

  try {
    const res = await fetch(url);
    if (!res.ok) {
      console.error("Błąd API:", res.status, await res.text());
      return [];
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Błąd pobierania filmów z YouTube API:", error);
    return [];
  }
}
