import { searchVideos } from "../../lib/searchVideos";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get("q") || "";
  const pageToken = searchParams.get("pageToken");

  const data = await searchVideos(q, pageToken);
  return Response.json(data);
}
