import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import apiExtract from './vite-plugin-api-extract.js'

export default defineConfig({
  base: '/liverpool-tracker/',
  plugins: [
    react(),
    apiExtract({
      tracker: 'liverpool',
      team: { name: 'Liverpool FC', abbreviation: 'LIV' },
      league: 'EPL',
      sources: [
        { from: './src/playerData.js', exportName: 'PLAYERS',      resource: 'squad' },
        { from: './src/playerData.js', exportName: 'NEWS_DIGEST',  resource: 'news-digest' },
        { from: './src/playerData.js', exportName: 'RESULTS',      resource: 'results' },
        { from: './src/playerData.js', exportName: 'NEXT_MATCH',   resource: 'next-match' },
        { from: './src/playerData.js', exportName: 'STANDINGS',    resource: 'standings' },
        { from: './src/lineupData.js', exportName: ['FORMATIONS', 'ALTERNATIVES', 'PREDICTION_NOTE', 'SLOT_CONFIDENCE', 'SLOT_RATIONALE', 'DEFAULT_FORMATION'], resource: 'lineup' },
      ],
    }),
    {
      name: 'rss-proxy',
      configureServer(server) {
        server.middlewares.use('/api/rss', async (req, res) => {
          const url = new URL(req.url, 'http://localhost').searchParams.get('url');
          if (!url) {
            res.statusCode = 400;
            res.end('Missing url param');
            return;
          }
          try {
            const resp = await fetch(url, {
              headers: { 'User-Agent': 'Mozilla/5.0 LFC-Tracker/1.0' },
            });
            const text = await resp.text();
            res.setHeader('Content-Type', 'application/xml; charset=utf-8');
            res.end(text);
          } catch (e) {
            res.statusCode = 502;
            res.end('Feed fetch failed: ' + e.message);
          }
        });
      },
    },
  ],
  server: {
    port: 3000,
    open: true,
  },
})
