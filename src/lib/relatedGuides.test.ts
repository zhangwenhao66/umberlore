// Unit tests for src/lib/relatedGuides.ts.
// Run with: npm test (node --test src/lib/*.test.ts)

import test from 'node:test';
import assert from 'node:assert/strict';
import { pickRelatedGuidesWithFallback, verifyRelatedGuidesFallbackCoverage } from './relatedGuides.ts';
import type { Guide } from '../data/guides.ts';

function makeGuide(slug: string, category: string): Guide {
	return {
		slug,
		category,
		title: slug,
		description: slug,
		updated: '2026-01-01',
		coreSummary: slug,
		sections: [],
	};
}

test('pickRelatedGuidesWithFallback: a singleton category still gets a full sidebar', () => {
	const guides = [
		...Array.from({ length: 8 }, (_, i) => makeGuide(`painting-${i}`, 'Painting')),
		makeGuide('lone-sculpture', 'Sculpture'),
	];
	const result = pickRelatedGuidesWithFallback(guides, guides.find((g) => g.slug === 'lone-sculpture')!);
	assert.equal(result.length, 6);
	assert.ok(result.every((g) => g.category === 'Painting'));
});

test('verifyRelatedGuidesFallbackCoverage: multiple singletons all receive an inbound link', () => {
	// Regression guard for the gamma/deel-vs-rippling bug (documented in trinity
	// CLAUDE.md): a plain rotation-only cross-category fallback can leave a
	// singleton un-linked if no triggering page's rotation window happens to land
	// on it. Four singletons + several small categories reproduces that shape.
	const guides = [
		...Array.from({ length: 40 }, (_, i) => makeGuide(`painting-${i}`, 'Painting')),
		...Array.from({ length: 3 }, (_, i) => makeGuide(`decorative-${i}`, 'Decorative Arts')),
		...Array.from({ length: 4 }, (_, i) => makeGuide(`architecture-${i}`, 'Architecture')),
		...Array.from({ length: 5 }, (_, i) => makeGuide(`nonwestern-${i}`, 'Non-Western Art')),
		makeGuide('lone-sculpture', 'Sculpture'),
		makeGuide('lone-photo', 'Photography'),
		makeGuide('lone-data', 'Data Studies'),
		makeGuide('lone-resource', 'Resources'),
	];

	const report = verifyRelatedGuidesFallbackCoverage(guides);
	assert.deepEqual(report.emptySidebar, []);
	assert.deepEqual(report.neverLinked, []);
	assert.equal(report.coveragePct, 100);
});

test('pickRelatedGuidesWithFallback: never recommends the guide to itself', () => {
	const guides = Array.from({ length: 5 }, (_, i) => makeGuide(`solo-${i}`, `Category-${i}`));
	for (const guide of guides) {
		const result = pickRelatedGuidesWithFallback(guides, guide);
		assert.ok(!result.some((g) => g.slug === guide.slug));
	}
});
