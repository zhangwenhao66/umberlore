import rss from '@astrojs/rss';
import type { APIRoute } from 'astro';
import { guides } from '../data/guides';
import { SITE_TITLE, SITE_DESCRIPTION, SITE_ORIGIN } from '../consts';

// Titles/descriptions only; no article bodies (no content:encoded).
export const GET: APIRoute = async () => {
	const items = [...guides]
		.sort(
			(a, b) =>
				new Date(b.published ?? b.updated).getTime() - new Date(a.published ?? a.updated).getTime(),
		)
		.map((g) => ({
			title: g.title,
			description: g.description,
			link: `/${g.slug}/`,
			pubDate: new Date(g.published ?? g.updated),
			categories: [g.category],
		}));

	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: SITE_ORIGIN,
		items,
	});
};
