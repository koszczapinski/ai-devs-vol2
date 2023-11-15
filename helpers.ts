import puppeteer from "puppeteer";
import axios from "./axiosInterceptor";
import { ArchiveLink, Person } from "./types";

export async function getPageContent(url: string, timeout = 60000) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  try {
    await page.goto(url, { timeout });
    return await page.content();
  } catch (error) {
    console.error(error);
  } finally {
    await browser.close();
  }
}

export const delay = (ms: number): Promise<void> =>
  new Promise((res) => setTimeout(res, ms));

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

export async function getAllPeople(
  url: string,
  limit = 300
): Promise<Person[]> {
  const { data } = await axios.get(url);
  return data.slice(0, limit);
}

export async function getCountryPopulation(country: string): Promise<number> {
  const { data } = await axios.get(
    `https://restcountries.com/v3.1/name/${country}`
  );
  return data[0].population;
}

export async function getCurrencyExchangeRate(code: string): Promise<number> {
  const { data } = await axios.get(
    `http://api.nbp.pl/api/exchangerates/rates/A/${code}/?format=json`
  );
  return data.rates[0].mid;
}

export function getCurrentDate(): string {
  const date = new Date();
  const year = date.getFullYear();
  const month = ("0" + (date.getMonth() + 1)).slice(-2);
  const day = ("0" + date.getDate()).slice(-2);
  return `${year}-${month}-${day}`;
}
