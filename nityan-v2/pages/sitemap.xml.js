const SITE = 'https://nityanexports.com';

const pages = [
  { path: '/', priority: '1.0', freq: 'weekly' },
  { path: '/about', priority: '0.8', freq: 'monthly' },
  { path: '/products', priority: '0.9', freq: 'weekly' },
  { path: '/services', priority: '0.8', freq: 'monthly' },
  { path: '/contact', priority: '0.7', freq: 'monthly' },
];

function generateSiteMap() {
  const today = new Date().toISOString().split('T')[0];
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    p => `  <url>
    <loc>${SITE}${p.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${p.freq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;
}

export async function getServerSideProps({ res }) {
  const sitemap = generateSiteMap();
  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();
  return { props: {} };
}

export default function SiteMap() {
  return null;
}