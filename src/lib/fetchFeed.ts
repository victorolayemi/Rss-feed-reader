/* eslint-disable @typescript-eslint/no-explicit-any */
import Parser from "rss-parser";
import { FEEDS } from "./feeds";

export interface FeedEntry {
  id: string;
  title: string;
  link: string;
  content: string;
  published: string;
}

export async function fetchFeed(feedId: string): Promise<FeedEntry[]> {
  const parser = new Parser({
    customFields: {
      item: [["published", "published"]],
    },
  });

  const feedConfig = FEEDS.find((f) => f.id === feedId);
  if (!feedConfig) throw new Error("Invalid feed ID");

  const feed = await parser.parseURL(feedConfig.url);

  return feed.items.map((item: any) => ({
    id: item.id ?? item.link ?? Math.random().toString(),
    title: item.title ?? "No title",
    link: item.link ?? "#",
    content: item.contentSnippet ?? "",
    published: item["published"] ?? item.pubDate ?? "",
  }));
}
