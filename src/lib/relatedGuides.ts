import { pickRelatedGuides } from '../../vendor/site-toolkit/packages/related-guides/src/index.ts';
import type { Guide } from '../data/guides';

const MAX = 6;

/**
 * Adds a cross-category fallback on top of site-toolkit's same-category
 * `pickRelatedGuides`, so singleton/thin categories still get a populated
 * related-guides sidebar (used by src/pages/[slug].astro).
 *
 * True singletons (the only article in their category) get a fixed
 * front-of-queue spot in every fallback instead of competing in the
 * rotation. Without this, a plain rotating cross-category fill can still
 * leave a singleton with zero inbound links if no triggering page's
 * rotation happens to land on it -- see trinity CLAUDE.md "单例分类需要跨
 * 分类兜底" for the gamma/deel-vs-rippling case this mirrors. Verified with
 * `verifyRelatedGuidesFallbackCoverage` below (2026-09-16: UmberLore's 4
 * singleton categories -- Data Studies, Photography, Resources, Sculpture
 * -- all reach 100% coverage with this priority queue in place).
 */
export function pickRelatedGuidesWithFallback<T extends Guide>(
	allGuides: T[],
	current: T,
	max = MAX,
): T[] {
	const related = pickRelatedGuides(allGuides, current, max);
	const crossCategoryPool = allGuides.filter((g) => g.slug !== current.slug && !related.includes(g));
	const remaining = max - related.length;
	const globalIndex = allGuides.findIndex((g) => g.slug === current.slug);

	const categoryCounts = new Map<string, number>();
	for (const g of allGuides) categoryCounts.set(g.category, (categoryCounts.get(g.category) ?? 0) + 1);
	const isSingleton = (g: T) => categoryCounts.get(g.category) === 1;

	const singletonPool = crossCategoryPool.filter(isSingleton);
	const rotationPool = crossCategoryPool.filter((g) => !isSingleton(g));
	const singletonPicks = singletonPool.slice(0, remaining);
	const rotationRemaining = remaining - singletonPicks.length;
	const rotationPicks =
		rotationRemaining > 0
			? Array.from(
					{ length: Math.min(rotationRemaining, rotationPool.length) },
					(_, k) => rotationPool[(globalIndex + k) % rotationPool.length],
				)
			: [];
	const crossCategory = remaining > 0 ? [...singletonPicks, ...rotationPicks] : [];
	return [...related, ...crossCategory];
}

export interface RelatedGuidesCoverageReport {
	total: number;
	linkedTo: number;
	coveragePct: number;
	emptySidebar: string[];
	neverLinked: string[];
}

/**
 * Verification helper: run after any change to `pickRelatedGuidesWithFallback`
 * (or `pickRelatedGuides` in site-toolkit) before shipping. `emptySidebar`
 * must be empty (every page renders a related-guides section) and
 * `neverLinked` must be empty (every guide gets at least one inbound link
 * from someone else's sidebar, so nothing is an orphan page).
 */
export function verifyRelatedGuidesFallbackCoverage<T extends Guide>(
	allGuides: T[],
	max = MAX,
): RelatedGuidesCoverageReport {
	const linkedTo = new Set<string>();
	const emptySidebar: string[] = [];
	for (const guide of allGuides) {
		const relatedFinal = pickRelatedGuidesWithFallback(allGuides, guide, max);
		if (relatedFinal.length === 0) emptySidebar.push(guide.slug);
		for (const r of relatedFinal) linkedTo.add(r.slug);
	}
	const neverLinked = allGuides.map((g) => g.slug).filter((slug) => !linkedTo.has(slug));
	return {
		total: allGuides.length,
		linkedTo: linkedTo.size,
		coveragePct: allGuides.length > 0 ? (linkedTo.size / allGuides.length) * 100 : 100,
		emptySidebar,
		neverLinked,
	};
}
