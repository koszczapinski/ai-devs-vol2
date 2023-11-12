import axios from "./axiosInterceptor";
import { ArchiveLink } from "./types";

export async function getArchiveLinks(
  url: string,
  limit = 300
): Promise<ArchiveLink[]> {
  const { data } = await axios.get(url);
  return data.slice(0, limit);
}
