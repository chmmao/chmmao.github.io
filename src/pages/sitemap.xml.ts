import type { APIRoute } from 'astro';
import {getCollection} from 'astro:content';
export const GET: APIRoute=async({site})=>{const posts=await getCollection('blog',({data})=>!data.draft);const paths=['/','/blog/','/projects/','/tools/','/tools/text-counter/','/about/',...posts.map(p=>`/blog/${p.id}/`)];return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${paths.map(p=>`<url><loc>${new URL(p,site)}</loc></url>`).join('')}</urlset>`,{headers:{'Content-Type':'application/xml'}});};
