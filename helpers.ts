import puppeteer from "puppeteer";
import axios from "./axiosInterceptor";
import { ArchiveLink } from "./types";

export async function getPageContent(
  url: string,
  timeout = 60000,
  retries = 3
) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  for (let i = 0; i < retries; i++) {
    console.log(
      `Attempt ${i + 1} of ${retries} to get page content from ${url}`
    );
    try {
      await page.goto(url, { timeout });
      return await page.content();
    } catch (error) {
      if (i === retries - 1) {
        throw new Error(`Failed to get page content from ${url}: ${error}`);
      }
    } finally {
      await browser.close();
    }
  }
}

export function stripHtml(html: string) {
  if (typeof html !== "string") {
    throw new TypeError("Expected a string");
  }
  return html.replace(/(<([^>]+)>)/gi, "");
}

export async function getArchiveLinks(
  url: string,
  limit = 300
): Promise<ArchiveLink[]> {
  const { data } = await axios.get(url);
  return data.slice(0, limit);
}
