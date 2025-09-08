"use client";

import { useEffect, useState } from "react";
import { FEEDS } from "@/lib/feeds";

interface FeedEntry {
  id: string;
  title: string;
  link: string;
  content: string;
  published: string;
}

export default function Home() {
  const [feedId, setFeedId] = useState(FEEDS[0].id);
  const [entries, setEntries] = useState<FeedEntry[]>([]);
  const [loading, setLoading] = useState(false);

  async function loadFeed(id: string) {
    setLoading(true);
    try {
      const res = await fetch(`/api/feed/${id}`);
      const data = await res.json();
      setEntries(data);
    } catch (err) {
      console.error(err);
      setEntries([]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadFeed(feedId);
  }, [feedId]);

  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">RSS Feed Reader</h1>

      {/* Dropdown */}
      <div className="mb-6">
        <label className="block text-sm font-medium mb-2">
          Select Feed:
        </label>
        <select
          value={feedId}
          onChange={(e) => setFeedId(e.target.value)}
          className="p-2 border rounded-lg"
        >
          {FEEDS.map((f) => (
            <option key={f.id} value={f.id}>
              {f.name}
            </option>
          ))}
        </select>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="space-y-6">
          {entries.map((entry) => (
            <article
              key={entry.id}
              className="p-4 border rounded-xl shadow-sm hover:shadow-md transition"
            >
              <h2
                className="text-xl font-semibold mb-2"
                dangerouslySetInnerHTML={{ __html: entry.title }}
              />

              <p
                className="dark:text-gray-300 text-gray-700 mb-3"
                dangerouslySetInnerHTML={{ __html: entry.content }}
              />

              <div className="flex justify-between items-center text-sm text-gray-500">
                <time>
                  {entry.published
                    ? new Date(entry.published).toLocaleString()
                    : "Unknown"}
                </time>
                <a
                  href={entry.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Read More →
                </a>
              </div>
            </article>
          ))}
        </div>
      )}
    </main>
  );
}
