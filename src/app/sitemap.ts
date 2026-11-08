import type {MetadataRoute} from 'next';
import {siteUrl} from '@/site-config';
export const dynamic='force-static';
export default function sitemap():MetadataRoute.Sitemap{return [{url:`${siteUrl}/`,changeFrequency:'monthly',priority:1},{url:`${siteUrl}/privacidade/`,changeFrequency:'yearly',priority:.2},{url:`${siteUrl}/termos/`,changeFrequency:'yearly',priority:.2}];}
