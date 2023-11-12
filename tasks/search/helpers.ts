import axios from "../../axiosInterceptor";

export type ArchiveLink = {
  title: string;
  url: string;
  info: string;
  date: string;
};

export async function getArchiveLinks(
  url: string,
  limit = 300
): Promise<ArchiveLink[]> {
  const { data } = await axios.get(url);
  return data.slice(0, limit);
}
