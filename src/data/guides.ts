export interface SectionImage {
	/** Path under public/, e.g. '/images/mona-lisa-detail.jpg'. */
	src: string;
	/** Describes what the image shows. */
	alt: string;
	/** Attribution + license, supports markdown links. Omit only for self-made diagrams. */
	credit?: string;
}

export interface GuideSection {
	heading: string;
	body: string[];
	/** Optional in-body image, rendered after this section's paragraphs. */
	image?: SectionImage;
}

export interface FaqItem {
	question: string;
	answer: string;
}

export interface Source {
	label: string;
	url: string;
}

export interface Guide {
	slug: string;
	/**
	 * Free-form topic group, e.g. "Painting", "Architecture", "Pigments & Materials",
	 * "Art Crime", "Photography". UmberLore spans the whole of visual art history rather
	 * than a fixed set of pillars, so this is an open string rather than a union type.
	 */
	category: string;
	title: string;
	description: string;
	/** Original publication date. Falls back to `updated` when unset, so only articles that have since been edited need it. */
	published?: string;
	updated: string;
	/** One or two sentences summarizing the core finding/argument, surfaced above the fold for GEO/AI-search extraction. */
	coreSummary: string;
	sections: GuideSection[];
	faq?: FaqItem[];
	sources?: Source[];
	/** Path under public/, e.g. "/images/mona-lisa.jpg". Falls back to the site favicon when absent. */
	image?: string;
	/** Describes what the artwork/photo shows. Falls back to the article title when absent. */
	imageAlt?: string;
	/**
	 * Attribution line, supports [text](url) markdown. For artworks, name the holding
	 * institution and link its own collection page. See the copyright rules in the
	 * `umberlore-content-publishing` task: works by artists who died after 1955 are
	 * generally still in copyright and must NOT be reproduced here, however freely the
	 * artist may be written about.
	 */
	imageCredit?: string;
}

export function categorySlug(category: string): string {
	return category
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-+|-+$/g, '');
}

/** Earth-pigment palette, in keeping with the name (raw umber, burnt umber, ochre, sienna). */
const CATEGORY_PALETTE = ['#8a5a34', '#a6733f', '#6d4f3a', '#9c6b4f', '#7a6248', '#b08050'];

export function categoryColor(category: string): string {
	let hash = 0;
	for (let i = 0; i < category.length; i++) {
		hash = (hash * 31 + category.charCodeAt(i)) >>> 0;
	}
	return CATEGORY_PALETTE[hash % CATEGORY_PALETTE.length];
}

export const guides: Guide[] = [];
