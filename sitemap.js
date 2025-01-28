require('dotenv').config();
const fs = require('fs');
const path = require('path');

// This is where your portfolio data will be located in the `out` folder after export
const portfolioDataPath = path.resolve(__dirname, 'out', 'data', 'portfolio.json');

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

async function generateSitemap() {
  try {
    // Read portfolio data from the `out` folder (it should be part of the export output)
    const workItems = JSON.parse(fs.readFileSync(portfolioDataPath, 'utf-8'));
    
    // Generate dynamic pages from work items
    const dynamicPages = workItems.map(item => `work/${item.slug}/`); // Assuming `slug` is the dynamic part

    // Static pages
    const pages = [
      '',
      'work/',
      'contact/',
    ];

    // Combine static and dynamic pages
    const allPages = [...pages, ...dynamicPages];

    // Generate the sitemap XML content
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${allPages
        .map((page) => {
          return ` 
          <url>
            <loc>${baseUrl}${page}</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
          </url>
        `;
        })
        .join('')}
    </urlset>`;

    // Write sitemap to the 'out' folder (created by `next export`)
    const sitemapPath = path.resolve(__dirname, 'out', 'sitemap.xml');
    fs.writeFileSync(sitemapPath, sitemap);
    console.log('Sitemap generated at /out/sitemap.xml');
  } catch (error) {
    console.error('Error generating sitemap:', error);
  }
}

generateSitemap();