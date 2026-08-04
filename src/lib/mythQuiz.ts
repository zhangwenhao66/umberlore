import type { MythQuizItem } from '../data/mythQuiz';

/**
 * Picks a random, non-repeating subset of quiz items so a visitor doesn't see the same
 * small deck in the same order every time they load /fact-or-fiction/.
 *
 * Fisher-Yates shuffle-then-slice, not items.sort(() => Math.random() - 0.5) -- the
 * sort-based shuffle is a well-known non-uniform trick (V8's sort isn't a fair coin flip
 * per comparison), Fisher-Yates has no such bias. Ported from WarCrumbs's
 * src/lib/mythQuiz.ts, which this same function and its reasoning is taken from verbatim.
 *
 * `rng` defaults to Math.random but is injectable so tests can assert exact, reproducible
 * output instead of only "the result looks statistically plausible".
 */
export function pickQuizSet(
	items: readonly MythQuizItem[],
	count: number,
	rng: () => number = Math.random,
): MythQuizItem[] {
	if (items.length === 0 || count <= 0) return [];

	const pool = items.slice();
	for (let i = pool.length - 1; i > 0; i--) {
		const j = Math.floor(rng() * (i + 1));
		[pool[i], pool[j]] = [pool[j], pool[i]];
	}

	return pool.slice(0, Math.min(count, pool.length));
}

/**
 * Renders the small subset of markdown FAQ answers actually use (**bold**, *italic* --
 * UmberLore's guides.ts FAQ answers use single-asterisk italics for work titles like
 * *The Kiss*, which WarCrumbs's FAQ text never needed -- and [text](url) links) as HTML,
 * so explanation text pulled verbatim from guides.ts keeps its citation links clickable
 * and its italicised titles italicised instead of showing literal asterisks.
 *
 * Same three regexes as the `md()` helper already used in src/pages/[slug].astro (bold,
 * then italic, then links) -- kept here as an exported pure function specifically so it's
 * unit-testable, same as the WarCrumbs original this was ported from.
 */
export function renderInlineMarkdown(text: string): string {
	return text
		.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
		.replace(/\*(.*?)\*/g, '<em>$1</em>')
		.replace(/\[([^\]]+)\]\(((?:[^()]|\([^()]*\))*)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');
}
