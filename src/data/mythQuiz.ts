export interface MythQuizItem {
	claim: string;
	verdict: boolean;
	explanation: string;
	sourceSlug: string;
	sourceTitle: string;
}

// Curated from src/data/guides.ts FAQ entries -- see the WarCrumbs implementation this was
// ported from (传说与史实判断题-实施方案_20260804.md) for the original method. Each claim/
// explanation is the FAQ question/answer verbatim, not rewritten. verdict was hand-judged by
// reading each answer's full context (not keyword-matched); FAQs whose answers were genuinely
// mixed/nuanced (e.g. "only partly", "neither, conclusively", "it is disputed") were excluded
// rather than forced into a binary verdict, and FAQs that weren't phrased as a yes/no claim in
// the first place (how many, why, who, where) were excluded too, since they don't fit the
// "true or false" mechanic. UmberLore is a much thinner site than WarCrumbs -- 12 articles,
// roughly 76 FAQ pairs total -- so this deck is intentionally small (21 items) rather than
// padded to a round number; every one of the site's 12 articles is represented at least once.
export const mythQuizItems: MythQuizItem[] = [
	{
		claim: 'Are the gargoyles on Notre-Dame de Paris medieval?',
		verdict: false,
		explanation:
			'Mostly not. The best-known figures, the hybrid creatures along the gallery between the west towers, are chimeras added during the restoration run by Eugène Viollet-le-Duc and Jean-Baptiste-Antoine Lassus between 1843 and 1864, and they drain nothing at all. The genuine waterspouts, concentrated on the flying buttresses of the choir, are largely nineteenth-century replacements as well: Friends of Notre-Dame de Paris records that during that campaign "many of the original gargoyles were replaced with new sculptures." The twelfth- and thirteenth-century originals had weathered badly.',
		sourceSlug: 'what-is-a-gargoyle',
		sourceTitle: 'What Is a Gargoyle? The Test Is Whether It Drains',
	},
	{
		claim: 'Did gargoyles have a religious or protective purpose?',
		verdict: false,
		explanation:
			'Their documented purpose is drainage. Readings that treat them as warnings against sin or as wards against evil are repeated constantly but rest on very little contemporary evidence, since medieval builders left almost no written explanation of what the figures were meant to signify. What can be checked is placement, and placement follows the roof drainage plan: a spout has to go where the gutter falls, not where a theological scheme would want it. Treat the moral interpretations as later readings rather than as recorded intent.',
		sourceSlug: 'what-is-a-gargoyle',
		sourceTitle: 'What Is a Gargoyle? The Test Is Whether It Drains',
	},
	{
		claim: 'Are gargoyles only found on Gothic buildings?',
		verdict: false,
		explanation:
			'No. Carved waterspouts long predate Gothic architecture. Greek temples discharged roof water through lion-head spouts set into the sima, the upturned lip at the eaves. The Museum of Classical Archaeology in Cambridge describes one from Bassae of about 420 BC as "a waterspout for throwing rainwater from the roof clear of the temple\'s walls and columns", and the J. Paul Getty Museum holds a South Italian terracotta version made between 425 and 400 BC. Egyptian and Roman builders used carved outlets too. Gothic masons inherited the device, extended its reach, and widened the range of creatures enormously.',
		sourceSlug: 'what-is-a-gargoyle',
		sourceTitle: 'What Is a Gargoyle? The Test Is Whether It Drains',
	},
	{
		claim: 'Do gargoyles still work as drains today?',
		verdict: true,
		explanation:
			'Many do, and on cathedrals they are still maintained as drainage rather than as sculpture. Where a channel has cracked, eroded, or silted up, water backs up over the parapet and runs down the wall face, which is the exact damage the spout was built to prevent, so blocked gargoyles are a routine item in fabric inspection reports. Depending on condition, conservators consolidate the original in place, take it down for storage and fit a carved copy, or install a plain lead spout where the carving is beyond honest replication.',
		sourceSlug: 'what-is-a-gargoyle',
		sourceTitle: 'What Is a Gargoyle? The Test Is Whether It Drains',
	},
	{
		claim: "Were the walls in Van Gogh's The Bedroom really purple?",
		verdict: true,
		explanation:
			'Yes. He listed the colours for Theo on 16 October 1888: "The walls are of a pale violet" and "The doors lilac" (letter 705). The Van Gogh Museum states that the walls and doors were originally purple and now read blue, because the unstable red lake in the mixture faded and left the blue component dominant. The floor was also a harder red than it is today.',
		sourceSlug: 'van-gogh-paintings',
		sourceTitle: 'Van Gogh Paintings: Reading the Palette, Then and Now',
	},
	{
		claim: 'Did Van Gogh really sell only one painting in his lifetime?',
		verdict: false,
		explanation:
			'No, and the Van Gogh Museum says so directly: the exact number is unknown, "but in any case, it was more than a couple." His uncle Cor commissioned nineteen cityscapes of The Hague, the Paris colourman Julien Tanguy bought a painting, and Theo sold one to a London gallery. *The Red Vineyard* was bought by Anna Boch after a public exhibition, which is the sale the myth compresses everything else into.',
		sourceSlug: 'van-gogh-paintings',
		sourceTitle: 'Van Gogh Paintings: Reading the Palette, Then and Now',
	},
	{
		claim: 'Did cataracts change the way Monet painted the Water Lilies?',
		verdict: true,
		explanation:
			'Yes, and the effect is documented rather than inferred. Monet complained around 1914 and 1915 that reds looked muddy and his painting was darkening, and he labelled his paint tubes to avoid picking the wrong colour. By 1922 Charles Coutela recorded light perception only in his right eye. After surgery in early 1923 and corrective lenses in 1924 and 1925 his palette returned to cooler blues and greens, and he destroyed or retouched work from the cataract years. The Orangerie panels were finalised after his sight was corrected, not during the worst of it.',
		sourceSlug: 'water-lilies-monet-series',
		sourceTitle: "Monet's Water Lilies Series: A Motif He Built Himself",
	},
	{
		claim: 'Was the Mona Lisa famous before it was stolen?',
		verdict: true,
		explanation:
			"Yes, though its standing rose sharply over the nineteenth century. In an 1849 valuation it was estimated at 90,000 francs, behind Titian's Supper at Emmaus at 150,000 and far behind Raphael's Holy Family at 600,000. Between 1851 and 1880 it was copied 71 times by artists at the Louvre, against 197 for Murillo's Immaculate Conception. By 1878 Baedeker was calling it the most celebrated Leonardo in the Louvre, and by 1907 the most celebrated female portrait in the world.",
		sourceSlug: 'mona-lisa',
		sourceTitle: 'Mona Lisa: Did the 1911 Theft Really Make It Famous?',
	},
	{
		claim: "Did the US Supreme Court order Austria to return Klimt’s Portrait of Adele Bloch-Bauer I?",
		verdict: false,
		explanation:
			'No. In *Republic of Austria v. Altmann*, decided on 7 June 2004 by six votes to three, the Court held only that the Foreign Sovereign Immunities Act of 1976 applies to conduct predating its enactment, which meant Maria Altmann’s suit against Austria could proceed in a US court. The Court expressly declined to reach the expropriation exception and said nothing about ownership. Title was settled separately, by a three-member Austrian arbitration panel whose award is dated 15 January 2006.',
		sourceSlug: 'gustav-klimt',
		sourceTitle: 'Gustav Klimt: The Gold Leaf and the Looted Portraits',
	},
	{
		claim: 'Did Klimt use real gold in his paintings?',
		verdict: true,
		explanation:
			'Yes, and more than gold. The Belvedere’s catalogue record for *The Kiss* lists gold leaf, silver leaf and platinum leaf in the figures, worked into resin oil colours on a primed canvas. The background is Schlagmetall, brass composition leaf, glazed with translucent colour and scattered with metal-leaf flakes. Klimt’s father, Ernst Klimt the elder, trained as a gold engraver in Vienna.',
		sourceSlug: 'gustav-klimt',
		sourceTitle: 'Gustav Klimt: The Gold Leaf and the Looted Portraits',
	},
	{
		claim: 'Is The Great Wave a painting?',
		verdict: false,
		explanation:
			'No. The Metropolitan Museum of Art classifies it under Prints and gives the medium as woodblock print, ink and colour on paper (accession [JP10](https://www.metmuseum.org/art/collection/search/36491)). It was published as part of the series Thirty-six Views of Mount Fuji around 1830 to 1832, and research by Capucine Korenberg for the [British Museum](https://www.britishmuseum.org/sites/default/files/2022-03/korenberg_article-for_hokusai%20_edited_volume_final-2020_accessible.pdf) reports that experts believe up to 8,000 impressions were made.',
		sourceSlug: 'famous-paintings',
		sourceTitle: 'Famous Paintings: What Their Catalogue Entries Say',
	},
	{
		claim: "Was Kandinsky's 1910 watercolour really the first abstract painting?",
		verdict: false,
		explanation:
			'Its own holding institution no longer dates it to 1910. The Centre Pompidou\'s collection record for the work (inventory AM 1976-864) gives its date as 1913, based on stylistic comparison with the rest of Kandinsky\'s output, even though the sheet itself carries his handwritten inscription "Kandinsky 1910 // Aquarelle 1910 / (abstraite)."',
		sourceSlug: 'abstract-art-first-painting',
		sourceTitle: "Abstract Art: The 'First' Painting Its Museum Backdated",
	},
	{
		claim: 'Did Kandinsky and af Klint know about each other\'s work?',
		verdict: false,
		explanation:
			'No. Tate\'s own magazine, Tate Etc, describes the two as having worked "without knowing of each other\'s existence", developing parallel bodies of abstract work independently and roughly simultaneously - af Klint from 1906, Kandinsky from about 1911 to 1913 on the corrected dating.',
		sourceSlug: 'abstract-art-first-painting',
		sourceTitle: "Abstract Art: The 'First' Painting Its Museum Backdated",
	},
	{
		claim: 'Is there a single settled answer to who painted the first abstract work?',
		verdict: false,
		explanation:
			"No, and that is a documented disagreement rather than an unresolved trivia question. By earliest dated non-representational work, af Klint currently holds priority. By earliest work to shape the exhibited, published conversation about abstraction as it was happening, Kandinsky still does, since af Klint's paintings did not reach that conversation until decades after both painters had died.",
		sourceSlug: 'abstract-art-first-painting',
		sourceTitle: "Abstract Art: The 'First' Painting Its Museum Backdated",
	},
	{
		claim: "Were Lichtenstein's Ben-Day dots printed mechanically?",
		verdict: false,
		explanation:
			"No. They were hand-applied with a perforated stencil - for Whaam!, a perforated aluminium screen with paint worked through the holes - lifted and repositioned by hand across the canvas. This is the reverse of Andy Warhol's approach: Warhol's silkscreens used a genuine mechanical printing process, while Lichtenstein's mechanical-looking dot pattern was produced by hand.",
		sourceSlug: 'pop-art',
		sourceTitle: "Pop Art: The Collage That Said 'Pop' Before the Movement Had a Name",
	},
	{
		claim: 'Was the Robie House almost demolished?',
		verdict: true,
		explanation:
			'Yes, twice. The Chicago Prairie-style house faced demolition threats in 1941 and again in 1957, and Wright personally campaigned both times to save it. In 1991 the American Institute of Architects named it one of the ten most significant structures of the twentieth century.',
		sourceSlug: 'frank-lloyd-wright',
		sourceTitle: 'Frank Lloyd Wright: Organic Architecture and the Cantilever That Nearly Failed',
	},
	{
		claim: "Is the bronze in Bernini's baldachin really from the Pantheon?",
		verdict: false,
		explanation:
			'Probably not, despite the popular legend. Pope Urban VIII did strip ancient bronze from the Pantheon\'s portico during his papacy, prompting the pasquinade "Quod non fecerunt barbari, fecerunt Barberini" ("what the barbarians didn\'t do, the Barberini did"). But per Wikipedia\'s account of the baldachin, historical records indicate about ninety percent of that Pantheon bronze was used for casting a cannon, while the baldachin\'s own bronze traces instead to Venice.',
		sourceSlug: 'st-peters-basilica',
		sourceTitle: "St. Peter's Basilica: What the 120-Year Design Fight Left Standing",
	},
	{
		claim: "Is Michelangelo's Pietà older than the current basilica building?",
		verdict: true,
		explanation:
			'Yes, by eight years. The Fabbrica di San Pietro dates it to 1498, when Michelangelo was 23, made for a now-demolished chapel in the old Constantinian basilica that stood on the site before Julius II laid the first stone of the present building in 1506.',
		sourceSlug: 'st-peters-basilica',
		sourceTitle: "St. Peter's Basilica: What the 120-Year Design Fight Left Standing",
	},
	{
		claim: 'Has The Scream been stolen?',
		verdict: true,
		explanation:
			"Yes, twice, and each theft hit a different version. The National Museum's 1893 painting was stolen on 12 February 1994, the opening morning of the Lillehammer Winter Olympics, and recovered undamaged that May. The Munch Museum's tempera version was taken at gunpoint along with Munch's Madonna in August 2004 and recovered, damaged, in August 2006; three men were convicted.",
		sourceSlug: 'edvard-munch-the-scream',
		sourceTitle: "Munch Wrote 'Painted by a Madman' on The Scream Himself",
	},
	{
		claim: 'Did Andy Warhol make a version of The Scream?',
		verdict: true,
		explanation:
			"Yes. In 1984, following a Munch retrospective he saw in New York, Warhol was commissioned to produce a series of canvases and later screenprints based on four of Munch's best-known prints, including The Scream, reproducing Munch's own lithograph in the bright, flat colour blocks he had used for Marilyn Monroe and Campbell's soup cans. The Museum of Modern Art holds one of the resulting prints, The Scream (After Munch), 1984.",
		sourceSlug: 'edvard-munch-the-scream',
		sourceTitle: "Munch Wrote 'Painted by a Madman' on The Scream Himself",
	},
	{
		claim: 'Were fake Frida Kahlo paintings really seized by police in 2025?',
		verdict: true,
		explanation:
			'Yes. On 27 October 2025, Bavarian police announced the seizure of forged works falsely attributed to Picasso, Rembrandt, Joan Miró, Amedeo Modigliani, and Kahlo, following raids across Germany, Switzerland, and Liechtenstein tied to a 77-year-old main suspect and ten accomplices. Investigations were ongoing at the time of the announcement.',
		sourceSlug: 'frida-kahlo-paintings',
		sourceTitle: "Frida Kahlo's Paintings: How a Career This Small Keeps Attracting Fakes",
	},
];
