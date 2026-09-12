import type { APIRoute } from 'astro';
import { guides } from '../data/guides';
import { SITE_TITLE, SITE_DESCRIPTION, SITE_ORIGIN } from '../consts';

export const GET: APIRoute = () => {
	const sorted = [...guides].sort(
		(a, b) => a.category.localeCompare(b.category) || a.title.localeCompare(b.title),
	);

	const lines = [
		`# ${SITE_TITLE}`,
		'',
		`> ${SITE_DESCRIPTION}`,
		'',
		'## Pages',
		...sorted.map((g) => `- [${g.title}](${SITE_ORIGIN}/${g.slug}/): ${g.description}`),
		'',
		`RSS feed: ${SITE_ORIGIN}/rss.xml`,
		'',
	];

	return new Response(lines.join('\n'), {
		headers: { 'Content-Type': 'text/plain; charset=utf-8' },
	});
};
