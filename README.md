# Next.js 15 RSS Feed Reader

A simple Next.js 15 app to read multiple RSS feeds with a dropdown selector.

## Getting Started

1. Clone the repo
   ```bash
   git clone https://github.com/victorolayemi/Rss-feed-reader.git
   cd rss-feed-app
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Configure feeds in `lib/feeds.ts`
   ```ts
   export const FEEDS = [
     {
       id: "ai",
       name: "Google Alerts – AI",
       url: "https://www.google.com.ng/alerts/feeds/01356211685743590593/14160684763275808373",
     },
     {
       id: "googlenews",
       name: "Google News",
       url: "https://news.google.com/rss?hl=en-US&gl=US&ceid=US:en",
     },
   ];
   ```

4. Run development server
   ```bash
   npm run dev
   ```
   Open http://localhost:3000 in your browser.

## Project Structure

```
rss-feed-app/
│── app/
│   ├── api/feed/[id]/route.ts   # API route for fetching feeds
│   ├── page.tsx                 # Home page with dropdown + feed UI
│── lib/
│   ├── feeds.ts                 # Feed list config
│   ├── fetchFeed.ts             # Fetch + parse RSS logic
│── public/                      # Static assets
│── styles/                      # Tailwind setup
│── tailwind.config.js           # Tailwind config
```

## Tech Stack

- Next.js 15
- TypeScript
- TailwindCSS
- rss-parser

## License

MIT License
