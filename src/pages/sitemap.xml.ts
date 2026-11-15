import type { APIRoute } from 'astro';
import { research } from '../data/research';
export const GET: APIRoute = () => {
  const origin = import.meta.env.PUBLIC_SITE_URL;
  const base = import.meta.env.BASE_URL;
  const paths = ['', ...research.map(project => `research/${project.slug}/`)];
  const urls = origin ? paths.map(path => `<url><loc>${new URL(`${base}${path}`, origin).href.replaceAll('&', '&amp;')}</loc></url>`).join('') : '';
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`, { headers: { 'Content-Type': 'application/xml' } });
};
