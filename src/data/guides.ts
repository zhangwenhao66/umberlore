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

export const guides: Guide[] = [
  {
    "slug": "what-is-a-gargoyle",
    "category": "Architecture",
    "title": "What Is a Gargoyle? The Test Is Whether It Drains",
    "description": "A gargoyle is a working waterspout. Here is the test that separates one from a grotesque, why Notre-Dame’s famous monsters fail it, and where the form began.",
    "published": "2026-08-02",
    "updated": "2026-08-02",
    "coreSummary": "A gargoyle is a waterspout: a carved figure with a channel cut through it that throws roof water clear of the wall below. A carved figure without that channel is a grotesque or a chimera, which is why the famous stone monsters along the tower gallery of Notre-Dame de Paris, installed during the 1843 to 1864 restoration, are not gargoyles.",
    "image": "/images/gargoyle-notre-dame-rainwater.jpg",
    "imageAlt": "A row of gargoyles on Notre-Dame de Paris discharging rainwater in jets from their mouths during a storm.",
    "imageCredit": "[Notre Dame Gargoyles as rain gutters](https://commons.wikimedia.org/wiki/File:Notre_Dame_Gargoyles_as_rain_gutters.jpg) by David.Clay.Photography, [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)",
    "sections": [
      {
        "heading": "The test is whether water comes out of it",
        "body": [
          "Ask most people to picture a gargoyle and you get a hunched stone demon squatting on a cathedral parapet. Ask a mason and you get something much less atmospheric. A gargoyle is a length of stone with a gutter cut along it, projecting from the top of a wall, with a hole at the far end for water to leave. Whatever has been carved around that channel is secondary.",
          "Washington National Cathedral, which was still commissioning new ones in the 1980s, states the rule plainly in its visitor guide: \"They function as drain spouts that direct rain and melted snow away from the building.\" The same guide gives the other category its name: the whimsical carvings on the exterior that have no drain spout are called grotesques.",
          "The proportions in that guide are worth holding onto. It counts 112 gargoyles on the building against roughly 1,200 stone grotesques. On a cathedral designed from scratch in the twentieth century by people who cared about the distinction, the great majority of carved figures still fail the test.",
          "Friends of Notre-Dame de Paris describes the French case in the same mechanical terms: \"Gargoyles are decorative elements with a practical purpose. Their function is to protect the walls from rainwater runoff which erodes the stone. They designate the end of the gutters to drain away water from the roof.\"",
          "So the definition is not a matter of style, period, or how frightening the face is. Water in at the parapet, water out at the mouth. No channel, no gargoyle."
        ]
      },
      {
        "heading": "The word began as plumbing",
        "body": [
          "French gargouille did not start out meaning a monster. The Trésor de la langue française records the first attestation in 1294, in the building accounts of Saint-Lazare at Autun, in the form gargoule, glossed \"conduit pour l'écoulement des eaux\", a conduit for water to run off through. The spelling gargouille appears at the end of 1313.",
          "The word is built from an onomatopoeic root garg- and Old French goule, the modern gueule, meaning throat or maw. The same root sits under gargariser, to gargle, and under English gurgle. It is the noise of liquid going down a gullet, applied to a fitting that makes exactly that noise in heavy rain.",
          "That sequence matters, because the story usually told about the word runs the other way. In the Rouen legend, Archbishop Romanus subdues a river dragon called La Gargouille and fixes its head to his church, where it becomes the first waterspout. As an origin for the word, this is backwards. The dragon is absent from the early accounts of Romanus, who died around 640, and the earliest surviving text carrying the story dates from 1394. By then Burgundian clerks had been writing gargoule in their fabric accounts for a century, for a plain piece of drainage. The legend explains the monster. It does not explain the word."
        ]
      },
      {
        "heading": "What the stone is actually doing up there",
        "body": [
          "A masonry wall does not fail all at once. It fails where water sits. Rain running down a face of ashlar finds the joints, soaks the mortar, and in a hard winter freezes inside the pores of the stone and spalls the surface off in flakes. Run that cycle for a few centuries and the bedding joints open, the wall carries water into its core, and any iron cramps buried inside it rust and force the stones apart.",
          "A large medieval roof shed an enormous volume of water and had nowhere sensible to put it. Behind the parapet ran a lead-lined gutter. The problem was getting the contents of that gutter past the wall without letting any of it touch the wall on the way down, and a pipe strapped down the face of a flying buttress was neither practical nor wanted. The answer was to build the pipe out of the masonry itself and throw the water into open air.",
          "That is why gargoyles are long. The projection is not display. It is the distance needed to clear the string courses, the buttress offsets, the plinth, and the heads of anyone standing below. Seen side-on, the sculpture reads as what it is: a stone beam cantilevered out of the wall head, held down by the masonry that traps its inner end, with a trough running the length of its back."
        ],
        "image": {
          "src": "/images/gargoyle-reims-cathedral.jpg",
          "alt": "A lion-shaped gargoyle projecting from Reims Cathedral, its body carved as a long stone beam with an open water channel running along the back.",
          "credit": "[Reims Cathedral Gargoyle 08](https://commons.wikimedia.org/wiki/File:Reims_Cathedral_Gargoyle_08.jpg) by Ad Meskens, [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)"
        }
      },
      {
        "heading": "The drain is cut first, the animal second",
        "body": [
          "Look at a good one closely and the order of decisions becomes legible. The block arrives as a rough rectangular baulk, long enough to reach from deep inside the wall to well beyond it. The channel is worked along the top or the back as a straight open trough, sometimes finished with a lead lining or a lead pipe seated in the groove so that water never sits against a joint. Only after that does the figure appear, and the figure has to accommodate the trough rather than the other way round.",
          "This is why so many gargoyles share a posture no free-standing sculpture would choose. The animal lies flat, forelegs braced on the cornice, neck extended, head down, mouth open at the end of a body far too long for it. The lion at Reims is stretched into something closer to a plank than a cat. Beasts get elongated spines. Human figures get thrust forward onto their elbows. The mouth ends up at the one point where the channel has to discharge, and everything else is arranged to make that look deliberate.",
          "Most of this work happened at ground level, in the lodge, on the banker, before the finished piece was hoisted up and bedded in. The mason was therefore cutting a drain to measurements taken off a wall he could not see while carving a face that would only ever be read from a hundred feet below and at a steep angle. The coarseness of the features on many surviving gargoyles is a response to viewing distance rather than a lapse of skill."
        ]
      },
      {
        "heading": "The Greeks got there sixteen centuries earlier",
        "body": [
          "None of this was a Gothic invention. Greek temple roofs ended in a sima, the upturned lip along the eaves, and the sima was pierced at intervals by spouts shaped as lion heads. The Museum of Classical Archaeology in Cambridge describes its cast of one from Bassae in terms a thirteenth-century French mason would have recognised at once: \"This lion’s head was a waterspout for throwing rainwater from the roof clear of the temple’s walls and columns.\" The same entry places it, with many others, \"at the end of the sloping sima, high above the sculptured frieze of the temple.\"",
          "The J. Paul Getty Museum holds a South Italian example from Metapontum, made between 425 and 400 BC in terracotta with polychromy (accession 71.AD.449). Its catalogue records that \"In the center of this sima (a projecting molding from the edge of a roof) is a waterspout fashioned in the shape of a lion’s head. The lion’s mouth is open, revealing its teeth, and its tongue projects.\" An open mouth with a projecting tongue is not only a snarl. It breaks the stream and stops water tracking back along the underside of the stone.",
          "Greek and Gothic builders reached the same solution with different animals. Cut an opening at the low point of the roof edge, run the water through it, and shape the opening into a head so that a hole in an expensive building reads as intentional. What changed in medieval Europe was the size of the bestiary and the length of the throw."
        ],
        "image": {
          "src": "/images/gargoyle-epidauros-lion-waterspouts.jpg",
          "alt": "A carved lion-head waterspout on a scrolled cornice from the sanctuary of Asklepios at Epidauros, displayed in the Archaeological Museum of Epidaurus.",
          "credit": "[Gargoyles, 3rd century BC, AM of Epidauros, 202574](https://commons.wikimedia.org/wiki/File:Gargoyles,_3rd_century_BC,_AM_of_Epidauros,_202574.jpg) by Zde, [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)"
        }
      },
      {
        "heading": "The most photographed gargoyles in the world are not gargoyles",
        "body": [
          "The figures that made the word famous are the ones that fail the test.",
          "Between 1843 and 1864, Eugène Viollet-le-Duc and Jean-Baptiste-Antoine Lassus rebuilt much of Notre-Dame de Paris; Lassus died in 1857 and Viollet-le-Duc carried the campaign on alone. Among the additions was a row of hybrid creatures set along the balustrade linking the two west towers, the Galerie des Chimères. The brooding horned figure resting its chin on its hands, the one that appears on every second postcard of Paris, belongs to this group. It has no channel. It drains nothing. It is a chimera, and it is younger than the Arc de Triomphe.",
          "The University of Chicago Press summarises Michael Camille’s study of them without hedging: most visitors \"probably do not realize that the legendary gargoyles adorning this medieval masterpiece were not constructed until the nineteenth century.\" Camille traces the campaign \"from 1843 to 1864, when the gargoyles were designed, sculpted by the little-known Victor Pyanet, and installed.\"",
          "The point extends past the chimeras. Friends of Notre-Dame de Paris records that during that restoration \"many of the original gargoyles were replaced with new sculptures.\" The twelfth- and thirteenth-century waterspouts had been weathering in Paris air for six hundred years and many were past saving. A visitor photographing the parapet today is generally looking at nineteenth-century stone whichever kind of figure is in the frame. The working gargoyles, mostly on the flying buttresses of the choir, are replacements. The celebrities on the tower gallery are inventions.",
          "This is not a gotcha about Viollet-le-Duc, who put the gargoyles back partly because removing them in earlier centuries had left the walls wet. It is a caution about what the camera selects. The chimeras sit at eye level on a public walkway. The gargoyles hang over a void where nobody stands. The gap between the photographed image and the documented record is a recurring problem in art history; the same gap runs through [how the Mona Lisa became famous](/mona-lisa/)."
        ],
        "image": {
          "src": "/images/gargoyle-notre-dame-chimeras.jpg",
          "alt": "Two chimeras on the gallery between the west towers of Notre-Dame de Paris, with the dome of Sacré-Cœur visible on the skyline behind.",
          "credit": "[F Paryz, kosc Notre Dame, fot I Nowicka (79)](https://commons.wikimedia.org/wiki/File:F_Paryz,_kosc_Notre_Dame,_fot_I_Nowicka_%2879%29.jpg) by Ivonna Nowicka, [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)"
        }
      },
      {
        "heading": "What happens when a gargoyle stops working",
        "body": [
          "A blocked gargoyle is worse than no gargoyle. Once the throat silts up with leaf litter, pigeon nest, or its own eroded grit, the parapet gutter backs up and spills over the wall head instead, laying a continuous sheet of water down precisely the surface the whole arrangement existed to keep dry. Clearing those outlets is ordinary maintenance rather than restoration, and it is the kind of job that gets deferred until the wall underneath starts to show it.",
          "The channels have also carried things other than rain. On 19 September 1914 the roof of Reims Cathedral caught fire while the city was under bombardment. The cathedral’s own history of the building records what followed: \"The heat from the flames melted the 400 tonnes of lead sheeting covering the roof. The molten metal flowed through the gargoyles.\" The drainage system worked exactly as designed, with the wrong fluid. When Henri Deneux rebuilt the roof structure, completed in 1938, he framed it in reinforced cement so that it could not happen a second time.",
          "Conservation faces a duller version of the same question every few decades. A gargoyle that has lost its face is still a functioning drain. A gargoyle that has lost its channel is a lump of weathered limestone cantilevered over a public pavement. Some are consolidated where they sit. Others come down, go into store, and are replaced on the wall by a carved copy. Where the sculpture is too far gone to copy honestly, a plain lead spout sometimes goes in instead, on the reasoning that the water matters more than the animal."
        ]
      },
      {
        "heading": "Telling them apart from the pavement",
        "body": [
          "You rarely need binoculars for this.",
          "Start with reach. A gargoyle has to clear everything below it, so it projects much further from the wall than an ornamental figure needs to, and it sits at a wall head, on a buttress, or at a cornice rather than tucked into a niche or standing on a plinth.",
          "Then the mouth. On a working spout the opening is a real hole, usually cut wider and rounder than the modelling of the face would suggest, and often noticeably coarser inside. Weathering gives it away too: below a live gargoyle the masonry frequently carries a pale washed streak or a dark stain where centuries of discharge have run down.",
          "Then position in the roof plan. Spouts appear at the low points of gutters, which puts them at regular intervals along a parapet or lined up with the ends of buttresses. Purely decorative carving is placed wherever it looks good, which is a different and more scattered logic.",
          "After that, wait for rain. Everything else is inference and the water is proof. The photograph at the top of this article was taken at Notre-Dame after a storm, and it settles the question for that particular row of figures in a way no amount of iconography can."
        ]
      }
    ],
    "faq": [
      {
        "question": "What is the difference between a gargoyle and a grotesque?",
        "answer": "A gargoyle carries water. It has a channel cut through the stone that takes rainwater from a roof gutter and discharges it clear of the wall, usually through the mouth. A grotesque is a carved figure with no such channel, so it is ornament only. Washington National Cathedral’s visitor guide draws the line the same way: gargoyles \"function as drain spouts that direct rain and melted snow away from the building\", while the exterior carvings that have no drain spout are called grotesques. A chimera is a grotesque of a particular kind, a hybrid creature assembled from parts of different animals or from human and animal parts."
      },
      {
        "question": "Are the gargoyles on Notre-Dame de Paris medieval?",
        "answer": "Mostly not. The best-known figures, the hybrid creatures along the gallery between the west towers, are chimeras added during the restoration run by Eugène Viollet-le-Duc and Jean-Baptiste-Antoine Lassus between 1843 and 1864, and they drain nothing at all. The genuine waterspouts, concentrated on the flying buttresses of the choir, are largely nineteenth-century replacements as well: Friends of Notre-Dame de Paris records that during that campaign \"many of the original gargoyles were replaced with new sculptures.\" The twelfth- and thirteenth-century originals had weathered badly."
      },
      {
        "question": "Where does the word gargoyle come from?",
        "answer": "From Old French, and originally from plumbing rather than mythology. The Trésor de la langue française records gargoule in 1294, in the building accounts of Saint-Lazare at Autun, meaning a conduit for water to run off through; gargouille follows at the end of 1313. It combines an onomatopoeic root garg-, imitating liquid moving through a throat, with Old French goule, the modern gueule, meaning throat or maw. English gargle and gurgle come from the same noise. The Rouen legend of a dragon called La Gargouille is first recorded in 1394, a century after the word was already in use for drainage, so the legend cannot be its source."
      },
      {
        "question": "Did gargoyles have a religious or protective purpose?",
        "answer": "Their documented purpose is drainage. Readings that treat them as warnings against sin or as wards against evil are repeated constantly but rest on very little contemporary evidence, since medieval builders left almost no written explanation of what the figures were meant to signify. What can be checked is placement, and placement follows the roof drainage plan: a spout has to go where the gutter falls, not where a theological scheme would want it. Treat the moral interpretations as later readings rather than as recorded intent."
      },
      {
        "question": "Are gargoyles only found on Gothic buildings?",
        "answer": "No. Carved waterspouts long predate Gothic architecture. Greek temples discharged roof water through lion-head spouts set into the sima, the upturned lip at the eaves. The Museum of Classical Archaeology in Cambridge describes one from Bassae of about 420 BC as \"a waterspout for throwing rainwater from the roof clear of the temple’s walls and columns\", and the J. Paul Getty Museum holds a South Italian terracotta version made between 425 and 400 BC. Egyptian and Roman builders used carved outlets too. Gothic masons inherited the device, extended its reach, and widened the range of creatures enormously."
      },
      {
        "question": "Do gargoyles still work as drains today?",
        "answer": "Many do, and on cathedrals they are still maintained as drainage rather than as sculpture. Where a channel has cracked, eroded, or silted up, water backs up over the parapet and runs down the wall face, which is the exact damage the spout was built to prevent, so blocked gargoyles are a routine item in fabric inspection reports. Depending on condition, conservators consolidate the original in place, take it down for storage and fit a carved copy, or install a plain lead spout where the carving is beyond honest replication."
      },
      {
        "question": "What is a chimera in architecture?",
        "answer": "A chimera is a carved hybrid used as architectural ornament, a creature made from parts of different animals or combining animal and human features. In the Notre-Dame context the word refers specifically to the figures Viollet-le-Duc placed along the gallery linking the west towers in the 1850s, a stretch now known as the Galerie des Chimères. Chimeras are a subset of grotesques, and because they carry no water channel they are not gargoyles, however often they are called that."
      }
    ],
    "sources": [
      {
        "label": "Trésor de la langue française informatise (CNRTL): etymology of gargouille",
        "url": "https://www.cnrtl.fr/etymologie/gargouille"
      },
      {
        "label": "Washington National Cathedral: visitor tour guide (PDF)",
        "url": "https://cathedral.org/wp-content/uploads/2024/02/Tour-Guide-English-.pdf"
      },
      {
        "label": "Friends of Notre-Dame de Paris: Gargoyles",
        "url": "https://www.friendsofnotredamedeparis.org/cathedral/artifacts/gargoyles/"
      },
      {
        "label": "University of Chicago Press: Michael Camille, The Gargoyles of Notre-Dame (2009)",
        "url": "https://press.uchicago.edu/ucp/books/book/chicago/G/bo5457467.html"
      },
      {
        "label": "Nineteenth-Century Art Worldwide: Laurinda S. Dixon reviews Camille",
        "url": "https://www.19thc-artworldwide.org/autumn10/the-gargoyles-of-notre-dame"
      },
      {
        "label": "Cathédrale Notre-Dame de Reims: history of the cathedral",
        "url": "https://www.cathedrale-reims.fr/en/discover/history-of-reims-cathedral"
      },
      {
        "label": "Museum of Classical Archaeology, Cambridge: Lion’s Head Waterspout (cast 631)",
        "url": "https://museum.classics.cam.ac.uk/collections/casts/lions-head-waterspout"
      },
      {
        "label": "J. Paul Getty Museum: Sima with Lion’s Head Waterspout, 71.AD.449",
        "url": "https://www.getty.edu/art/collection/object/103STZ"
      },
      {
        "label": "Bibliothèque nationale de France, Passerelles: la restauration par Viollet-le-Duc",
        "url": "https://passerelles.essentiels.bnf.fr/fr/chronologie/construction/5528aa47-6ab5-48d1-92fb-46ca5144731b-cathedrale-notre-dame-paris/article/6fb95620-687d-4024-8c91-47a080b277e3-restauration-par-viollet-le-duc"
      }
    ]
  },
  {
    "slug": "van-gogh-paintings",
    "category": "Painting",
    "title": "Van Gogh Paintings: Reading the Palette, Then and Now",
    "description": "Van Gogh painted for barely ten years. His palette dates the work almost to the season, and conservation research shows how much of that colour has since moved.",
    "published": "2026-08-02",
    "updated": "2026-08-02",
    "coreSummary": "Van Gogh's paintings can be dated by palette alone: the pigments he ordered from Paris in April 1888 are what separate the dark Dutch canvases from the Provençal ones. Several of those same pigments have since faded or darkened, so Van Gogh Museum research shows the work now reads bluer and paler than it did when he finished it.",
    "image": "/images/van-gogh-bedroom-arles-1888.jpg",
    "imageAlt": "Detail of Vincent van Gogh's The Bedroom, 1888, showing the yellow bedstead, wooden chairs and pale blue walls that were originally painted violet",
    "imageCredit": "[The Bedroom, 1888](https://commons.wikimedia.org/wiki/File:De_slaapkamer_-_s0047V1962_-_Van_Gogh_Museum.jpg), Van Gogh Museum, Amsterdam (Vincent van Gogh Foundation), public domain",
    "sections": [
      {
        "heading": "Two questions that place almost any Van Gogh",
        "body": [
          "Van Gogh painted for about ten years. His first attempt at a still life in oils dates from 1881, his last canvases from July 1890, and nearly everything the public recognises was made in the final four of those years. That compression is what makes his output confusing. Hang a room of it in chronological order and it looks like a group show.",
          "Most guides to his paintings sort them by fame. Sorting them by paint works better, because his materials changed on a schedule you can date, and he wrote the changes down while they were happening. The complete correspondence has been published and is searchable letter by letter, edited over fifteen years of work at the Van Gogh Museum and the Huygens Institute. Conservation scientists have separately measured what is physically sitting on the canvases.",
          "So two questions will place almost any painting of his. Where does it fall in the decade? And what has the paint done since he stopped touching it? The first has an answer in his own handwriting. The second has an answer in a laboratory report, and it is odder than most people expect."
        ]
      },
      {
        "heading": "The Dutch work is not a painter who had yet to learn colour",
        "body": [
          "*The Potato Eaters* is the picture people reach for when they want to show how far he travelled. The Van Gogh Museum dates it Nuenen, April to May 1885, oil on canvas, 82 by 114 cm. It is brown and dim, with shadows worked up towards green-black, and it was finished three years before the Sunflowers.",
          "The standard explanation is that he had not learned about colour yet. His own account of the painting says the opposite. Writing to Theo around 2 May 1885, he points out that the white in the picture contains almost no white paint: \"in the white, for instance, white has hardly been used at all but simply the neutral colour that occurs if one mixes red, blue, yellow together\" (letter 499). He names the three he mixed, vermilion, Paris blue and Naples yellow. The faces got the same treatment after he scraped back a first version he judged too light, ending up \"something like the colour of a really dusty potato, unpeeled of course\".",
          "That is a colour system, and a demanding one to hold together across a large canvas. He was deliberately mixing complementary pairs down to neutrals, which was the method he had absorbed from Anton Mauve and the Hague School painters, known at home as the Grey School. What the early work is missing is not theory. It is pigment."
        ],
        "image": {
          "src": "/images/van-gogh-potato-eaters-1885.jpg",
          "alt": "The Potato Eaters, 1885: five peasants around a table eating potatoes by lamplight, painted almost entirely in dark earth colours",
          "credit": "[The Potato Eaters, 1885](https://commons.wikimedia.org/wiki/File:De_aardappeleters_-_s0005V1962_-_Van_Gogh_Museum.jpg), Van Gogh Museum, Amsterdam (Vincent van Gogh Foundation), public domain"
        }
      },
      {
        "heading": "Paris turned the palette, and he described it in his own English",
        "body": [
          "He moved to Paris in 1886, where Theo managed a branch of the Goupil gallery on the Boulevard Montmartre. Theo introduced him to Monet's work and, through Fernand Cormon's studio, to a younger circle that included Toulouse-Lautrec and Emile Bernard.",
          "One letter from that autumn is worth more than any summary of the period, because Van Gogh wrote it in English himself, so nothing sits between his phrasing and ours. To the painter Horace Mann Livens, from Paris in September or October 1886: \"In Antwerp I did not even know what the Impressionists were, now I have seen them and though not being one of the club, yet I have much admired certain Impressionist pictures\" (letter 569). He then sets out what he is working on, and his own capitals survive in the manuscript. He is painting flowers, \"seeking oppositions of blue with orange, red and green, yellow and violet, seeking THE BROKEN AND NEUTRAL TONES\", and, a few lines later, \"Trying to render intense COLOUR and not a grey harmony.\"",
          "Set that last phrase against the Grey School and it stops sounding like a stylistic aside. He is naming the tradition he trained in and announcing that he is done with it. The same two years brought him Seurat, whose dotted technique he tried out and then loosened into his own alternation of dots and lines, and a large collection of Japanese woodcuts that he and Theo bought while the Paris market was flooded with them. Then the city wore him down. He took an overnight train south and reached Arles on 20 February 1888."
        ]
      },
      {
        "heading": "The April 1888 paint order is the hinge",
        "body": [
          "Six weeks after he arrived, a paint delivery caught up with him from Paris, and his thank-you note to Theo is probably the most useful dating document in the whole correspondence. Writing from Arles on or about 11 April 1888, he lists what came: \"the 3 chromes (the orange, the yellow, the lemon), the Prussian blue, the emerald, the madder lakes, the Veronese green, the orange lead, all of that is hardly found in the Dutch palette\" (letter 595). He then names the painters whose palettes lack them, Maris, Mauve and Israëls, which is to say the circle he had come out of.",
          "Most of these were products of nineteenth-century industry rather than of the traditional colourman. The chromes are lead chromates, cheap and startlingly bright. The lakes are organic dyes precipitated onto an inert base, which is exactly what makes them fugitive. And in the same letter, underlined in the manuscript, comes a sentence that reads very differently now than it did then: \"all the colours that Impressionism has made fashionable are unstable, all the more reason boldly to use them too raw, time will only soften them too much.\" In the decades that followed, another painter organised his materials around a single motif instead of a single palette, a programme traced in [Monet's Water Lilies series](/water-lilies-monet-series/).",
          "He knew. He bought them anyway, and his stated compensation was to lay them on unmixed and thick so that there would be more colour to lose.",
          "Nine months later he told the Dutch painter Arnold Koning precisely what had gone into the sunflower canvases of the previous summer: \"Painted with the three chrome yellows, yellow ochre and Veronese green and nothing else\" (letter 740, Arles, on or about 22 January 1889). Three yellows off that April invoice, one ochre, one green.",
          "This yields a rule that works standing in a gallery without a label. A canvas built on unmixed chrome yellow and Veronese green belongs to Arles or later. A canvas built on mixed earth neutrals is Dutch. The Paris pictures sit between the two, lighter than Nuenen and less flat than Arles."
        ],
        "image": {
          "src": "/images/van-gogh-sunflowers-1889.jpg",
          "alt": "Sunflowers, January 1889: sunflowers in a yellow earthenware vase against a yellow ground, with several flower heads now reading brown rather than yellow",
          "credit": "[Sunflowers, January 1889](https://commons.wikimedia.org/wiki/File:Zonnebloemen_-_s0031V1962_-_Van_Gogh_Museum.jpg), Van Gogh Museum, Amsterdam (Vincent van Gogh Foundation), public domain"
        }
      },
      {
        "heading": "What the paint has done since",
        "body": [
          "His own warning turned out to be accurate, and the museum holding the largest collection of his work has spent years quantifying how accurate.",
          "A project called REVIGO, short for REassessing VIncent van GOgh, ran for four years and finished in 2017. It brought together the Van Gogh Museum, the Cultural Heritage Agency of the Netherlands, Delft University of Technology, Tilburg University, the Rochester Institute of Technology and the paint manufacturer AkzoNobel, funded by the Dutch research council. The method was unusually literal. Pigments were identified on the canvas by X-ray fluorescence and from minute samples, the surface was recorded with a hyperspectral camera so that every pixel carried its own colour data, and then the pigments themselves were remade from old recipes and ground in linseed oil pressed specifically for the project. Those fresh paints were brushed onto opacity cards and measured, giving the team a reference for how each mixture looked when new. Software then ran the ageing backwards for each of about a million and a half points on one painting.",
          "*The Bedroom* is the easiest result to check for yourself, because Van Gogh sent Theo a written colour key with a sketch of the picture on 16 October 1888. \"The walls are of a pale violet.\" \"The bedstead and the chairs are fresh butter yellow.\" \"The doors lilac.\" (letter 705). Stand in front of the canvas today and the walls and doors are blue. The museum says so in its own catalogue entry: they were originally purple. The red lake he mixed into them faded out, and the blue left in the mixture took over the passage.",
          "*Field with Irises near Arles* received the full reconstruction. He described the motif to Emile Bernard around 22 May 1888 as \"that sea of yellow flowers with a line of purple irises\" (letter 612). The irises now read blue and the field behind them is weaker than he painted it. Even the scattered white dots in the background turned out to have started pink, with the red surviving only deeper in the paint layer where a microscope can find it. The reconstruction matches his written description better than the painting on the wall does.",
          "*Sunflowers* in Amsterdam went through a separate investigation beginning in 2016, led by the conservator Ella Hendriks with teams from Antwerp, Perugia, Toruń and the Dutch heritage agency. Her summary, in the museum press release of 24 January 2019: \"We now know that the colour changes in Sunflowers are mainly caused by a certain type of red paint (geranium lake) fading and a certain type of yellow paint (chrome yellow) darkening\". The chemistry behind the second half of that sentence was published in *Angewandte Chemie* in 2015. Van Gogh used more than one kind of chrome yellow, and the sulfur-rich variety reduces under light into chromium(III) compounds, which is what browns the paint film. The museum cut its maximum lighting level by two thirds in response, from 150 to 50 lux, and fitted LEDs with low output in the violet-blue-green part of the spectrum. It also announced that the painting would stop travelling.",
          "Geranium lake is in that April 1888 order. So are the chromes. The pigments that made the Arles paintings possible are the same ones that have been rearranging them ever since. Van Gogh saw it happening to an earlier generation and wrote it down at Arles on 30 April 1889, after remembering some Delacroix canvases in a municipal museum: \"The paintings fade like flowers\" (letter 765)."
        ]
      },
      {
        "heading": "Two things that get repeated about the body of work and are wrong",
        "body": [
          "The first is the line that he sold one painting in his life. The Van Gogh Museum's own answer is that the number is unknown, \"but in any case, it was more than a couple.\" His uncle Cor, an art dealer, commissioned nineteen cityscapes of The Hague. The Paris colourman Julien Tanguy bought a painting. Theo sold one to a London gallery. *The Red Vineyard* of 1888, now in the Pushkin Museum in Moscow, was bought by Anna Boch, sister of his friend Eugène Boch, and that is the transaction the myth is actually about: one sale out of a public exhibition to a buyer he was not related to. He also traded canvases for food and materials often enough that the museum counts it as selling.",
          "The second is dating. Most secondhand pages give the Amsterdam *Sunflowers* as 1888. The Van Gogh Museum dates it Arles, January 1889, and the recent technical study supports that reading, since the composition was laid in as though he already knew exactly how the finished picture would look. It repeats the summer 1888 version now in the National Gallery, London. Five large canvases of a bunch of sunflowers in a vase exist by the museum's count.",
          "If you want to verify anything about a specific painting, go to the object page at the institution that holds it. Each Van Gogh Museum entry carries an object number plus the two catalogue numbers used throughout the literature, an F-number and a JH-number. The Amsterdam *Sunflowers* is s0031V1962, F0458, JH1667. Searching one of those instead of a title removes most of the confusion, because he repeated subjects constantly and the versions ended up in different countries."
        ]
      },
      {
        "heading": "A short method for looking",
        "body": [
          "**Mixed earth neutrals, tonal modelling, no unbroken colour anywhere.** The Netherlands, before 1886. Complementary pairs are mixed down towards grey rather than set against each other.",
          "**A lightened palette, short broken strokes, and subjects that are cafés, riverbanks, flowers or himself.** Paris, 1886 to February 1888. Models cost money he did not have, which is a large part of why the self-portraits cluster here.",
          "**Unmixed chrome yellow and green, flat areas of colour, firm outlines, cropping borrowed from Japanese prints.** Arles onward, after February 1888.",
          "**Blue where the letters say violet, lilac or purple.** Assume a faded red lake and add the red back in your head. This applies to a great many of the French paintings, not only the famous two.",
          "**A brownish cast creeping in at the edge of a bright yellow passage.** Suspect chrome yellow reduction before you blame dirty varnish, though on the Amsterdam *Sunflowers* both are present at once.",
          "None of this needs equipment. It needs the habit of checking the letter and the museum record instead of the caption, which is roughly the same habit conservators apply with better instruments."
        ]
      }
    ],
    "faq": [
      {
        "question": "How can you tell an early Van Gogh painting from a late one?",
        "answer": "By the pigments. Before he left the Netherlands in 1886 he worked in earth colours and mixed his complementary pairs down to neutrals, the method behind *The Potato Eaters*. From April 1888 in Arles he was painting with chrome yellows, Prussian blue, emerald and Veronese green, which he told Theo were \"hardly found in the Dutch palette\" (letter 595). The Paris pictures of 1886 to early 1888 sit between the two, already lightened but not yet flat."
      },
      {
        "question": "Were the walls in Van Gogh's The Bedroom really purple?",
        "answer": "Yes. He listed the colours for Theo on 16 October 1888: \"The walls are of a pale violet\" and \"The doors lilac\" (letter 705). The Van Gogh Museum states that the walls and doors were originally purple and now read blue, because the unstable red lake in the mixture faded and left the blue component dominant. The floor was also a harder red than it is today."
      },
      {
        "question": "Did Van Gogh really sell only one painting in his lifetime?",
        "answer": "No, and the Van Gogh Museum says so directly: the exact number is unknown, \"but in any case, it was more than a couple.\" His uncle Cor commissioned nineteen cityscapes of The Hague, the Paris colourman Julien Tanguy bought a painting, and Theo sold one to a London gallery. *The Red Vineyard* was bought by Anna Boch after a public exhibition, which is the sale the myth compresses everything else into."
      },
      {
        "question": "Why are Van Gogh's Sunflowers turning brown?",
        "answer": "Two pigments are moving in opposite directions. Conservator Ella Hendriks summarised the 2016 research as showing \"the colour changes in Sunflowers are mainly caused by a certain type of red paint (geranium lake) fading and a certain type of yellow paint (chrome yellow) darkening\". Analysis published in *Angewandte Chemie* in 2015 found that the sulfur-rich chrome yellow he used reduces under light into chromium(III) compounds. The Van Gogh Museum cut its maximum light level from 150 to 50 lux in response and stopped lending the painting."
      },
      {
        "question": "How many versions of Sunflowers did Van Gogh paint?",
        "answer": "Five large canvases of a bunch of sunflowers in a vase, by the Van Gogh Museum's count, made in Arles in 1888 and 1889. The Amsterdam picture is dated January 1889 and repeats the summer 1888 version now in the National Gallery, London. He described the palette himself as \"the three chrome yellows, yellow ochre and Veronese green and nothing else\" (letter 740)."
      },
      {
        "question": "Which Van Gogh paintings have been digitally restored to their original colours?",
        "answer": "*The Bedroom* received an early digital colour reconstruction, and *Field with Irises near Arles* was the subject of the full REVIGO reconstruction completed in 2017. In the reconstruction the irises are purple rather than blue and the field behind them is more strongly yellow, which matches his own description of the motif as \"that sea of yellow flowers with a line of purple irises\" (letter 612)."
      },
      {
        "question": "Where can I check the date and dimensions of a specific Van Gogh painting?",
        "answer": "On the object page of the museum that owns it, since dates and measurements drift badly in secondhand sources. The Van Gogh Museum gives *The Potato Eaters* as Nuenen, April to May 1885, 82 by 114 cm (s0005V1962); *The Bedroom* as Arles, October 1888, 72.4 by 91.3 cm (s0047V1962); and *Sunflowers* as Arles, January 1889, 95 by 73 cm (s0031V1962)."
      }
    ],
    "sources": [
      {
        "label": "Van Gogh Museum, The Potato Eaters (s0005V1962) collection entry",
        "url": "https://www.vangoghmuseum.nl/en/collection/s0005V1962"
      },
      {
        "label": "Van Gogh Museum, The Bedroom (s0047V1962) collection entry",
        "url": "https://www.vangoghmuseum.nl/en/collection/s0047V1962"
      },
      {
        "label": "Van Gogh Museum, Sunflowers (s0031V1962) collection entry",
        "url": "https://www.vangoghmuseum.nl/en/collection/s0031V1962"
      },
      {
        "label": "Van Gogh Museum, Field with Irises near Arles (s0037V1962) collection entry",
        "url": "https://www.vangoghmuseum.nl/en/collection/s0037V1962"
      },
      {
        "label": "Van Gogh Museum, REVIGO: Research into Colours and Discolouration",
        "url": "https://www.vangoghmuseum.nl/en/about/knowledge-and-research/completed-research-projects/revigo"
      },
      {
        "label": "Van Gogh Museum, Research results REVIGO: paintings",
        "url": "https://www.vangoghmuseum.nl/en/about/knowledge-and-research/completed-research-projects/revigo/research-results-revigo-paintings"
      },
      {
        "label": "Van Gogh Museum press release, Van Gogh Museum to Keep Sunflowers in Amsterdam (24 January 2019)",
        "url": "https://www.vangoghmuseum.nl/en/about/news-and-press/press-releases/van-gogh-museum-to-keep-sunflowers-in-amsterdam"
      },
      {
        "label": "Van Gogh Museum FAQ, How Many Paintings Did Vincent Sell during His Lifetime?",
        "url": "https://www.vangoghmuseum.nl/en/art-and-stories/vincent-van-gogh-faq/how-many-paintings-did-vincent-sell-during-his-lifetime"
      },
      {
        "label": "Van Gogh Museum, Vincent van Gogh's Style: From Dark to Light, 1886-1888",
        "url": "https://www.vangoghmuseum.nl/en/art-and-stories/vincents-life-1853-1890/from-dark-to-light"
      },
      {
        "label": "Van Gogh Museum, Vincent's Colours",
        "url": "https://www.vangoghmuseum.nl/en/art-and-stories/stories/vincents-colours"
      },
      {
        "label": "Letter 499, to Theo van Gogh, Nuenen, on or about 2 May 1885 (Vincent van Gogh: The Letters)",
        "url": "https://vangoghletters.org/vg/letters/let499/letter.html"
      },
      {
        "label": "Letter 569, to Horace Mann Livens, Paris, September or October 1886",
        "url": "https://vangoghletters.org/vg/letters/let569/letter.html"
      },
      {
        "label": "Letter 595, to Theo van Gogh, Arles, on or about 11 April 1888",
        "url": "https://vangoghletters.org/vg/letters/let595/letter.html"
      },
      {
        "label": "Letter 612, to Emile Bernard, Arles, on or about 22 May 1888",
        "url": "https://vangoghletters.org/vg/letters/let612/letter.html"
      },
      {
        "label": "Letter 705, to Theo van Gogh, Arles, 16 October 1888",
        "url": "https://vangoghletters.org/vg/letters/let705/letter.html"
      },
      {
        "label": "Letter 740, to Arnold Koning, Arles, on or about 22 January 1889",
        "url": "https://vangoghletters.org/vg/letters/let740/letter.html"
      },
      {
        "label": "Letter 765, to Theo van Gogh, Arles, 30 April 1889",
        "url": "https://vangoghletters.org/vg/letters/let765/letter.html"
      },
      {
        "label": "Monico et al., Evidence for Degradation of the Chrome Yellows in Van Gogh's Sunflowers, Angewandte Chemie International Edition 54(47), 2015",
        "url": "https://doi.org/10.1002/anie.201505840"
      }
    ]
  },
  {
    "slug": "water-lilies-monet-series",
    "category": "Painting",
    "title": "Monet's Water Lilies Series: A Motif He Built Himself",
    "description": "The Water Lilies series is roughly 250 to 300 Monet canvases over 30 years. He had the pond dug first, sized the late panels to a spec and designed their room.",
    "updated": "2026-08-02",
    "coreSummary": "The Water Lilies series is a body of roughly 250 to 300 canvases Monet painted between about 1897 and 1926, working from a water garden he had built at Giverny in 1893 after winning a prefectural permit to divert a branch of the Epte. The cycle ends in twenty-one joined panels forming eight compositions, glued to the walls of two oval rooms at the Musée de l'Orangerie that opened in 1927, months after his death.",
    "image": "/images/water-lilies-orangerie-room.jpg",
    "imageAlt": "Two of Monet's Water Lilies compositions on the curved wall of an oval gallery at the Musée de l'Orangerie, with a visitor walking past for scale",
    "imageCredit": "[Monet's Water Lilies in the Musée de l'Orangerie](https://commons.wikimedia.org/wiki/File:Monets_water_lilies_in_the_Mus%C3%A9e_de_lOrangerie_03.jpg), photograph by Adrian Scottow, CC BY-SA 2.0. Paintings: Musée de l'Orangerie, Paris, public domain",
    "sections": [
      {
        "heading": "The pond was built before the paintings were",
        "body": [
          "Giverny had no water garden when Monet arrived in 1883. He rented the house, bought it in 1890, and in February 1893 acquired a separate plot at the south end of the property, across a road and a set of railway tracks. A small stream ran through it, the Ru, a branch of the Epte. Monet applied to the prefect of the Eure for permission to draw water off for a pond and to build two bridges.",
          "The application met resistance. Neighbouring farmers objected, on the grounds that his imported plants would foul water their animals drank. The Art Institute of Chicago's scholarly catalogue of its Monet holdings records his argument to the prefect: a water garden would be “agreeable and for the pleasure of the eyes”. He offered a second reason as well, that he intended to mine the setting for subject matter. The permits came through in July, and within a few months a pond of about a thousand square metres and a Japanese-style wooden bridge were finished. By May 1901 he had bought more land in order to enlarge it.",
          "MoMA, in its own publication on the Water Lilies, puts the consequence plainly. The garden may signify nature, but “it was not a purely natural site”. Monet spent heavily on the pond for the rest of his life and eventually kept six gardeners on it.",
          "The order of events matters for reading the series. Monet did not find this motif and return to it. He commissioned it, then painted the thing he had commissioned. The first canvases of the bridge date from 1895, two years after the water went in, and the Art Institute counts at least eight treatments of the water lily itself in 1897 and 1898."
        ],
        "image": {
          "src": "/images/water-lilies-japanese-bridge-1900.jpg",
          "alt": "Monet's Water Lily Pond of 1900, showing the green Japanese footbridge arching over a pond crowded with pink and white lilies",
          "credit": "[Water Lily Pond, 1900](https://commons.wikimedia.org/wiki/File:Claude_Monet_-_Water_Lily_Pond_-_1933.441_-_Art_Institute_of_Chicago.jpg), Art Institute of Chicago, Mr. and Mrs. Lewis Larned Coburn Memorial Collection, 1933.441, public domain"
        }
      },
      {
        "heading": "Two kinds of picture, and the point where they diverge",
        "body": [
          "The Orangerie describes two composition types that Monet fixed early in the cycle. The first takes in the bank of the pond with the dense planting around it, which covers the Bassins aux nymphéas of 1899 to 1900 and the Japanese bridge canvases. The second drops the bank and keeps only the sheet of water, its flowers and its reflections, which covers the Paysages d'eau of 1903 to 1908.",
          "The numbers behind the first type are unusually firm. Across the summers of 1899 and 1900 Monet produced eighteen paintings of the bridge and pond, twelve in the first year and six in the second. When Durand-Ruel showed his recent work in late 1900, twelve of the twenty-six pictures on the walls were water lilies. Reviewers were divided; some praised the light, others complained that the vantage point barely changed from canvas to canvas.",
          "From 1903 Monet began stripping out the conventional furniture of landscape painting, the horizon line, the sky and the ground, and worked directly on the water's surface. In May 1909 Durand-Ruel hung forty-eight of the resulting canvases under the title Les Nymphéas, série de paysages d'eau. The show sold well, and it marks the point where a set of pictures turns into a plan for a building.",
          "That plan predates the exhibition by a decade. In 1898 the journalist Maurice Guillemot reported that Monet had in mind a circular room whose walls, above the baseboard, would be covered with paintings of water “dotted with these plants to the very horizon.” In 1909 he told the critic Gustave Geffroy that he wanted the theme “carried along the walls.”"
        ]
      },
      {
        "heading": "Nobody can tell you exactly how many there are",
        "body": [
          "Search for a figure and you will be given one, usually 250, usually without qualification. The institutions that hold the paintings do not actually agree.",
          "The Musée de l'Orangerie, which holds the culminating panels, says the pond inspired “a colossal work composed of almost 300 paintings, over 40 of which were large format.” Its own teaching dossier repeats the figure in French. The Art Institute of Chicago, writing about its Water Lilies of 1906, gives a different one: “These paintings, numbering around 250”. Both are careful institutions writing about work they own.",
          "The gap has two causes. The first is that the boundary of the series was never defined. It is unsettled whether the Japanese bridge canvases of 1899 and 1900 belong to Water Lilies, or the bridge and rose garden pictures of 1918 to 1924, or the Agapanthus panels. Move that line and the total shifts by dozens.",
          "The second is that an unknown quantity no longer exists. The Orangerie's account of the gift to France says Monet was “prey to doubt” and “continually reworked his panels and even destroyed some.” MoMA says the same of the large canvases: “The paintings were sufficiently radical that Monet often doubted their worth, and he destroyed some canvases along the way.” He destroyed more after his cataract operation, once he could see what he had done. A range is the only defensible answer: somewhere between 250 and 300 paintings, of which more than forty are large studio panels, with no exact figure recoverable."
        ]
      },
      {
        "heading": "The late panels were manufactured to a specification",
        "body": [
          "In 1914, aged seventy-four and having just lost his son Jean, Monet committed himself to what he called his grande décoration. Work at that scale needed a building, so he had a third studio put up at Giverny with a concrete floor and a glass roof. The Orangerie dates the construction to 1914 through 1916 and MoMA dates it to 1915. Monet grumbled that he had added an eyesore to his own garden.",
          "The studio reorganised his year. MoMA's account describes the pattern: in summer he painted outdoors on smaller canvases, and in winter he retreated indoors to work on paintings roughly six and a half feet tall and up to twenty feet wide, moving between several panels at a time. Six and a half feet is about two metres, and that measurement is the whole specification. It is why separate canvases could later be butted together into continuous compositions, and why the two big MoMA canvases that never went to Paris share the same height as the Paris panels. MoMA's triptych of 1914 to 1926 measures 200 by 424.8 cm per panel and 200 by 1,276 cm overall; its single panel is 199.5 by 599 cm.",
          "Monet made more than forty of these large paintings. Twenty-one of them ended up in Paris, joined into eight compositions. The Orangerie's catalogue records describe each composition as panels joined edge to edge on canvas that was then marouflaged, glued directly onto the wall. Room one holds Les Nuages and Matin (three panels each, 200 by 1,275 cm), Reflets verts (two panels, 200 by 850 cm) and Soleil couchant (a single panel, 200 by 600 cm). Room two holds Les Deux Saules (four panels, 200 by 1,700 cm), Le Matin aux saules and Le Matin clair aux saules (three panels each, 200 by 1,275 cm) and Reflets d'arbres (two panels, 200 by 850 cm).",
          "Add the widths from those eight records and the ensemble comes to 91 metres of painting, 40 metres in the first room and 51 in the second, about 182 square metres of painted canvas. The museum rounds this in its public texts to nearly 100 linear metres and about 200 square metres, which counts the wall the panels sit in rather than the canvas alone.",
          "One inconsistency is worth naming, because the figure travels everywhere unchecked. MoMA's publication and the Orangerie's teaching dossier both state that the French state received twenty-two panels. The Orangerie's own eight catalogue records add up to twenty-one. Every panel but one is 425 cm wide; Soleil couchant is a single 600 cm canvas. The likeliest reading is that one canvas gets counted as two half-widths in the traditional tally, but the museum publishes both numbers and does not reconcile them."
        ],
        "image": {
          "src": "/images/water-lilies-reflets-verts.jpg",
          "alt": "Reflets verts, a Water Lilies composition 8.5 metres wide showing only the surface of the pond, with no bank, shore or horizon visible",
          "credit": "[Reflets verts, between 1914 and 1926, two joined panels, 200 × 850 cm](https://commons.wikimedia.org/wiki/File:Claude_Monet_-_The_Water_Lilies_-_Green_Reflections_-_Google_Art_Project.jpg), Musée de l'Orangerie, Paris, INV 20102, public domain"
        }
      },
      {
        "heading": "The room is part of the work",
        "body": [
          "On 12 November 1918, the day after the Armistice, Monet wrote to Georges Clemenceau. In the Orangerie's translation of the letter, he says: “I am on the verge of finishing two decorative panels which I want to sign on Victory Day, and am writing to ask you if they could be offered to the State with you acting as intermediary.” Clemenceau talked him up from two panels to the entire decorative cycle.",
          "Delivering it took another eight years. In September 1920 Monet reached an agreement with Paul Léon, director of the Beaux-Arts, covering twelve panels, with the state obliged to install them according to the painter's instructions in a building set aside for the purpose. The deed of gift was signed on 12 April 1922, for nineteen panels, and approved by decree that June. Monet kept reworking. Clemenceau wrote to him the same year that “you are well aware that you have reached the limit of what can be achieved with power of the brush and of the mind.” It changed nothing. On 19 March 1925 Monet wrote to the director of the Beaux-Arts floating a way out: he would destroy the panels and compensate France with part of his own collection of Cézannes and other pictures. That letter is itself in the Orangerie's collection. He kept the paintings until he died on 5 December 1926.",
          "What he had already fixed, in detail, was the room. Working with the architect Camille Lefèvre, Monet set the shape of the two oval galleries, the placement and rhythm of the panels and the gaps between them, the several openings that let a visitor wander rather than follow a route, and the overhead daylight that floods the space in sun and goes quiet under cloud. Sunrise colours face east and sunset colours west, so walking the rooms runs with the sun rather than against it. Seen in plan the two ellipses draw the mathematical sign for infinity.",
          "The result is a set of paintings that cannot be lent, cannot be rehung and cannot be seen anywhere else. Clemenceau presided over the opening in 1927. The public stayed away for decades. It took the arrival of postwar American abstraction, and André Masson's 1952 description of the rooms as the Sistine Chapel of Impressionism, before the ensemble was widely taken seriously. For a painter who worked at the opposite end of the scale, compressing an entire career into roughly a decade of ready-bought canvases, see [Van Gogh's paintings](/van-gogh-paintings/)."
        ]
      },
      {
        "heading": "The cataracts, without the myth",
        "body": [
          "Monet's eyesight is the part of this story most often told badly. The version in the medical literature is stranger and better documented than the one about a nearly blind old man daubing at a pond.",
          "The Orangerie's chronology places his first cataract symptoms in 1908; MoMA dates the diagnosis to 1912. In 1913 Monet travelled to London to consult the German ophthalmologist Richard Liebreich, who prescribed glasses and recommended surgery on the right eye. Monet refused. An account published in the British Journal of General Practice collects what he wrote as it worsened around 1914 and 1915: that “reds had begun to look muddy” and that “my painting was getting more and more darkened.” He started labelling his paint tubes and keeping a strict order on the palette so he would not reach for the wrong colour.",
          "He avoided the operation for years, having watched Honoré Daumier and Mary Cassatt come out of theirs badly. He argued: “I prefer to make the most of my poor sight, and even give up painting if necessary, but at least be able to see a little of these things that I love.” In 1922 the ophthalmologist Charles Coutela measured light perception only in the right eye and 6/60 in the left. Surgery on the right eye went ahead in early 1923, in two stages. Monet was a terrible patient and said so: “It is to my great chagrin that I regret having had this fatal operation.” His new aphakic spectacles left everything tinted blue. Only in 1925, after Jacques Mawas fitted him with tinted Zeiss lenses and his operated eye read 6/9, did he resume serious work.",
          "Two consequences run against the popular account. Once his colour vision was corrected he destroyed canvases painted before the operation and retouched others, which is part of why the series total is unrecoverable. And the Grandes Décorations were finished in that last corrected stretch, from 1925 until his death, rather than under the cataract. The most violently coloured of the late pictures, the red and green Japanese bridges now held mainly by the Musée Marmottan Monet, are precisely the canvases he did not send to Paris."
        ],
        "image": {
          "src": "/images/water-lilies-japanese-bridge-late.jpg",
          "alt": "A late Monet canvas of the Japanese bridge painted around 1918 to 1924 in slashing red, orange and green strokes, with the bridge barely legible",
          "credit": "[Le Pont japonais, c. 1918–1924](https://commons.wikimedia.org/wiki/File:Claude_Monet_-_Le_Pont_japonais_W1933_-_Mus%C3%A9e_Marmottan-Monet.jpg), Musée Marmottan Monet, Paris, public domain"
        }
      },
      {
        "heading": "The series was scattered before anyone could see it whole",
        "body": [
          "Nobody has ever seen the Water Lilies series assembled, and nobody will. The eight Orangerie compositions are glued to their walls. Everything else left Giverny by other routes and at wildly different moments.",
          "Monet sold steadily while he worked. The Art Institute's Water Lily Pond of 1900 went to the dealer Léonce Rosenberg around the time of the 1900 Durand-Ruel show, which is part of why the museum treats it as a finished picture rather than a study. The Metropolitan Museum's Bridge over a Pond of Water Lilies of 1899 came in through the Havemeyer bequest in 1929.",
          "The large studio panels moved much later, and in a hurry. MoMA's history of its own holdings records that in 1955 it became the first American museum to buy one, paying Michel Monet four million francs, then about $11,500. It added a smaller panel in 1956. On 15 April 1958 a fire broke out on the museum's second floor, where contractors were working on the air conditioning. An electrician was killed, around 550 paintings were exposed to smoke or water, and both Water Lilies panels were destroyed.",
          "When the curator Dorothy Miller telephoned Giverny looking for a replacement, Michel Monet's wife told her the studio was empty and everything had gone to the Paris dealer Katia Granoff. Miller found four large canvases in storage in another painter's studio. MoMA bought the triptych for the equivalent of $150,000 and a single panel for $83,000, more than seven times per painting what it had paid three years earlier for the canvas that burned.",
          "The rest of the family's pictures reached the Musée Marmottan Monet in 1966, when Michel Monet left the museum as his universal legatee. Over a hundred canvases arrived, among them the monumental water lily and garden paintings which, in the museum's own words, were never shown during the artist's lifetime and went on public view for the first time when they entered the collection. Forty years after the painter's death, most of the series was still coming out of storage."
        ]
      }
    ],
    "faq": [
      {
        "question": "How many Water Lilies paintings did Monet make?",
        "answer": "There is no agreed figure, and the museums that hold the work state different ones. The Musée de l'Orangerie describes almost 300 paintings, more than forty of them large format. The Art Institute of Chicago says around 250. The gap comes from an undefined boundary, because it is unsettled whether the Japanese bridge canvases and the late garden pictures count, and from the canvases Monet destroyed both while working and after his 1923 cataract surgery. A range of 250 to 300 is the honest answer."
      },
      {
        "question": "How many panels are in the Water Lilies rooms at the Musée de l'Orangerie, and how big are they?",
        "answer": "Eight compositions are installed across two oval rooms. The Orangerie's individual catalogue records describe them as twenty-one joined panels, all 200 cm high: Les Nuages, Matin, Le Matin aux saules and Le Matin clair aux saules at 200 × 1,275 cm (three panels each), Les Deux Saules at 200 × 1,700 cm (four panels), Reflets verts and Reflets d'arbres at 200 × 850 cm (two panels each), and Soleil couchant at 200 × 600 cm (one panel). Those widths total 91 metres. Note that MoMA and the Orangerie's own teaching dossier both give the traditional figure of twenty-two panels."
      },
      {
        "question": "Did Monet build the garden at Giverny himself?",
        "answer": "He had it built. Monet bought the land in February 1893, applied to the prefect of the Eure for permission to divert water from a branch of the Epte and to build two bridges, and got the permits in July over local objections that his plants would foul the water. The pond of about a thousand square metres and the Japanese-style bridge were finished within months, the pond was enlarged after he bought more land in 1901, and he eventually employed six gardeners to maintain it."
      },
      {
        "question": "Did cataracts change the way Monet painted the Water Lilies?",
        "answer": "Yes, and the effect is documented rather than inferred. Monet complained around 1914 and 1915 that reds looked muddy and his painting was darkening, and he labelled his paint tubes to avoid picking the wrong colour. By 1922 Charles Coutela recorded light perception only in his right eye. After surgery in early 1923 and corrective lenses in 1924 and 1925 his palette returned to cooler blues and greens, and he destroyed or retouched work from the cataract years. The Orangerie panels were finalised after his sight was corrected, not during the worst of it."
      },
      {
        "question": "Why can the Orangerie panels never go on tour?",
        "answer": "They are physically part of the building. The Orangerie's catalogue records describe each composition as oil panels joined edge to edge on canvas marouflaged onto the wall, meaning glued directly to it. Monet also specified the two oval rooms, the intervals between the panels, the several openings visitors move through and the overhead daylight, working with the architect Camille Lefèvre. Removing the panels would destroy the installation the gift was conditional on."
      },
      {
        "question": "Where else can you see paintings from the Water Lilies series?",
        "answer": "The largest concentration outside the Orangerie is the Musée Marmottan Monet in Paris, which inherited over a hundred canvases from Monet's son Michel in 1966, including monumental water lily and garden paintings never exhibited in the artist's lifetime. MoMA in New York holds a three-panel Water Lilies of 1914 to 1926 measuring 200 × 1,276 cm overall plus a single panel of 199.5 × 599 cm. The Art Institute of Chicago holds canvases from 1900, 1906 and 1917 to 1919, and the Metropolitan Museum of Art holds Bridge over a Pond of Water Lilies of 1899 and a Water Lilies of 1919."
      },
      {
        "question": "When did Monet start and finish the Water Lilies?",
        "answer": "The Orangerie dates the cycle to roughly three decades, from the late 1890s to his death on 5 December 1926 at the age of eighty-six. The first bridge canvases date from 1895, the concentrated pond campaigns from the summers of 1899 and 1900, the water-surface pictures from 1903 to 1908, and the large decorative panels from 1914 onward. He was still reworking the panels in 1925, and they were installed in Paris in 1927."
      }
    ],
    "sources": [
      {
        "label": "Musée de l'Orangerie, History of the Water Lilies cycle",
        "url": "https://www.musee-orangerie.fr/en/node/33"
      },
      {
        "label": "Musée de l'Orangerie, The Water Lilies by Claude Monet",
        "url": "https://www.musee-orangerie.fr/en/node/197502"
      },
      {
        "label": "Musée de l'Orangerie collection record, Reflets verts (INV 20102)",
        "url": "https://www.musee-orangerie.fr/en/artworks/reflets-verts-196304"
      },
      {
        "label": "Musée de l'Orangerie collection record, Les Deux Saules (INV 20104)",
        "url": "https://www.musee-orangerie.fr/en/artworks/les-deux-saules-196306"
      },
      {
        "label": "Musée de l'Orangerie, Les Nymphéas: dossier documentaire et pédagogique (PDF, 2024)",
        "url": "https://www.musee-orangerie.fr/sites/default/files/2024-08/Dossier_Pedagogique_Nympheas_2024_0.pdf"
      },
      {
        "label": "Art Institute of Chicago, Monet Paintings and Drawings, Cat. 37: Water Lily Pond, 1900",
        "url": "https://publications.artic.edu/monet/reader/paintingsanddrawings/section/135613"
      },
      {
        "label": "Art Institute of Chicago, Water Lilies, 1906 (1933.1157)",
        "url": "https://www.artic.edu/artworks/16568/water-lilies"
      },
      {
        "label": "Museum of Modern Art, Claude Monet: Water Lilies (PDF)",
        "url": "https://www.moma.org/momaorg/shared/pdfs/docs/learn/courses/Monet_WaterLilies.pdf"
      },
      {
        "label": "Museum of Modern Art, Water Lilies, 1914–26 (666.1959.a-c)",
        "url": "https://www.moma.org/collection/works/80220"
      },
      {
        "label": "Musée Marmottan Monet, the Claude Monet collection",
        "url": "https://www.marmottan.fr/en/collections/claude-monet/"
      },
      {
        "label": "The Metropolitan Museum of Art, Bridge over a Pond of Water Lilies, 1899 (29.100.113)",
        "url": "https://www.metmuseum.org/art/collection/search/437127"
      },
      {
        "label": "Gruener A, The effect of cataracts and cataract surgery on Claude Monet, Br J Gen Pract 2015;65(634):254–5",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC4408507/"
      }
    ],
    "published": "2026-08-02"
  },
  {
    "slug": "mona-lisa",
    "category": "Painting",
    "title": "Mona Lisa: Did the 1911 Theft Really Make It Famous?",
    "description": "The 1911 theft is the usual explanation for the Mona Lisa's fame. Guidebooks and Louvre copyist records from before the theft tell a more complicated story.",
    "published": "2026-08-02",
    "updated": "2026-08-02",
    "coreSummary": "The 1911 theft did not rescue the Mona Lisa from obscurity: Baedeker's 1907 Paris guidebook, printed four years before Vincenzo Peruggia walked out with the panel, already called it \"the most celebrated female portrait in the world\". What the two-year disappearance changed was the size of the audience, pushing a reputation held inside the art world into the new photographic mass press.",
    "image": "/images/mona-lisa.jpg",
    "imageAlt": "Leonardo da Vinci's portrait of Lisa Gherardini, oil on poplar panel, in the Musée du Louvre",
    "imageCredit": "[Mona Lisa, by Leonardo da Vinci, from C2RMF retouched](https://commons.wikimedia.org/wiki/File:Mona_Lisa,_by_Leonardo_da_Vinci,_from_C2RMF_retouched.jpg), Musée du Louvre (scan by the Centre de recherche et de restauration des musées de France), public domain",
    "sections": [
      {
        "heading": "Start with the Louvre's own record",
        "body": [
          "Almost every claim about this painting is worth checking against the museum that owns it, because the second-hand versions drift. The Louvre catalogues the work not as the Mona Lisa but as the Portrait de Lisa Gherardini, épouse de Francesco del Giocondo, dit La Joconde ou Monna Lisa, with La Joconde as the working title. Its support is listed as \"huile sur bois (peuplier)\": oil on poplar wood, not canvas. It measures 79.4 by 53.4 centimetres, which is smaller than most people picture, and it carries two inventory numbers, INV 779 and MR 316.",
          "The museum dates it to the first quarter of the sixteenth century, giving a range of 1503 to 1519 rather than a single year. On the identity of the sitter the Louvre is blunt, calling the modern hunt for alternative candidates a false problem. Its evidence is a marginal note that Agostino Vespucci, a colleague of Machiavelli in the Florentine chancery, wrote in a copy of Cicero in October 1503, discovered in a Heidelberg library in 2005. Vespucci recorded Leonardo at work on a head of Lisa del Giocondo, which corroborates what Giorgio Vasari published in 1550.",
          "The provenance runs: begun around 1503, probably for the silk merchant Francesco del Giocondo; kept by Leonardo until his death rather than delivered; \"très probablement acquis par François Ier en 1518\"; absorbed into the national collection in 1793. It hangs today in Room 711 of the Denon wing, level 1, which the Louvre's own catalogue now labels the Salle de la Joconde. Provenance is rarely this untroubled. For a case where the paper trail turned into decades of legal dispute, see [Gustav Klimt](/gustav-klimt/)."
        ]
      },
      {
        "heading": "The claim worth testing",
        "body": [
          "The popular account of how this particular panel became the most recognised image on earth is short and satisfying. On 21 August 1911 an Italian handyman named Vincenzo Peruggia carried it out of the Louvre under his coat. For two years nobody knew where it was. The press went berserk, crowds queued to stare at the bare wall, and when the painting came back it was no longer a Renaissance portrait but a celebrity. Fame by theft.",
          "It is a good story and it is not wrong in outline. But it rests on a premise that is rarely checked: that before August 1911 the painting was a quiet, respected, largely unremarked picture that only specialists cared about. That premise is testable. The valuations, the copying registers and the guidebooks of the period all survive, and they record what people at the time thought this painting was worth.",
          "Three kinds of evidence are available for the years before the theft. There is what it was estimated to be worth in money. There is how often artists chose to copy it, which is a direct measure of demand among people who had to physically travel to the gallery and book an easel. And there is what the mass-market travel guidebooks told ordinary visitors to go and look at. All three can be checked, and they do not all say the same thing."
        ]
      },
      {
        "heading": "What the money and the copyists say",
        "body": [
          "The historian Donald Sassoon, who wrote the standard study of how this painting became an icon, went through the nineteenth-century valuations. An 1849 estimate put the Mona Lisa on the market at 90,000 francs. That was serious money, roughly twice what a comfortable middle-class house in a good Paris district cost at the time. It was also well behind the competition inside the same building. Titian's Supper at Emmaus was valued at 150,000 francs. Raphael's Virgin and Child with St John came in at 400,000, and his Holy Family at 600,000.",
          "The copying registers point the same way. The Louvre began life as a museum intended mainly for artists to study and copy in, and it kept records of who copied what. Between 1851 and 1880, by Sassoon's count, the Mona Lisa was copied 71 times. Murillo's Immaculate Conception was copied 197 times over the same period, Correggio's Saint Catherine 186 times, Veronese's Wedding at Cana 167, and Titian's Entombment 130.",
          "So in the mid-nineteenth century the Mona Lisa sat somewhere in the second rank of Louvre attractions. Well known and routinely copied, but nowhere near the top of anyone's list. If the story stopped there, the theft explanation would look strong.",
          "The story does not stop there. Between the 1850s and 1911 something shifted, and the guidebooks recorded it."
        ]
      },
      {
        "heading": "The guidebook test, 1878 against 1907",
        "body": [
          "Karl Baedeker's handbooks were the closest thing the nineteenth century had to a mass-market ranking system for art. They used a star notation, and a double asterisk was the highest mark the firm gave. Both the 1878 and the 1907 English editions of Paris and its Environs are digitised in full, so the comparison can be made directly rather than taken on trust.",
          "The 1878 edition, in its survey of the Italian galleries, says: \"The most celebrated work of Leonardo in the Louvre is his Mona Lisa\". The catalogue entry itself, numbered 462, carries two asterisks and runs to a full paragraph, most of it given over to Vasari on the eyes and the mouth, followed by the editor's warning that these qualities \"are now concealed by the darkened shades\".",
          "The 1907 edition, printed four years before the theft, is stronger, not weaker. The painting is now number 1601, and the survey text describes it as \"the most celebrated female portrait in the world\", noting a sphinx-like smile that \"still fascinates in spite of the darkened condition of the canvas\". That is not the language of a neglected picture. It is the language of a headline attraction.",
          "It is sometimes pointed out that the 1907 catalogue entry is only two sentences long against the 1878 paragraph, and that this shows a demotion. Reading the surrounding pages kills that reading. Every entry in the 1907 edition is compressed. Titian, Velázquez, Veronese and Raphael all get one to three lines each, where the 1878 edition had quoted critics at length. The format changed across the whole book. The rating and the survey text, which are the parts that actually express a judgement, both went up.",
          "One detail in the 1907 wording is worth keeping. Baedeker calls the support a canvas. The Louvre's record says poplar panel. The standard guidebook of the era, on the eve of the most reported art theft in history, had the physical description of the object wrong. That is a useful reminder about where to source hard facts on this painting."
        ]
      },
      {
        "heading": "What happened in August 1911",
        "body": [
          "Peruggia was an Italian glazier who had worked at the Louvre on the job of fitting protective glass over prized paintings. He knew the building, and he knew that Monday was the day it closed to the public. On Monday 21 August 1911 he took the panel off its four iron hooks in the Salon Carré, removed it from its frame, and left.",
          "Nobody noticed for more than a day. The alarm was raised on Tuesday 22 August by the painter Louis Béroud, who made a speciality of painting the Louvre galleries themselves and had come to work on a view of the Salon Carré. He found four hooks and a pale rectangle. Museum staff initially assumed the painting had been taken upstairs to be photographed.",
          "The security context explains a lot. The Louvre of 1911 was an enormous building with a guard force far too small for the number of objects in it, and an Egyptian statuette had gone missing about a year earlier. The investigation that followed was chaotic enough that Guillaume Apollinaire was arrested and Pablo Picasso was hauled in for questioning, both over a separate affair involving stolen Iberian statuary, and both were released.",
          "The museum shut for a week. When it reopened, people came to look at the empty space, and enough of them came that the absence became an attraction in its own right. Sassoon records the wider reaction: postcards printed, cartoons mocking the museum's security, songs written, the French cabinet discussing it, and the Louvre's director of paintings resigning."
        ],
        "image": {
          "src": "/images/mona-lisa-empty-wall-1911.jpg",
          "alt": "The Mona Lisa's vacant place on the wall of the Salon Carré at the Louvre, photographed in August 1911 after the theft, with Veronese, Titian and Correggio still hanging around the gap",
          "credit": "[Mona Lisa stolen-1911](https://commons.wikimedia.org/wiki/File:Mona_Lisa_stolen-1911.jpg), photograph August 1911, reproduced in The Century Magazine, February 1914, public domain"
        }
      },
      {
        "heading": "The machinery that carried the story",
        "body": [
          "This is where the causal argument gets interesting, because 1911 was a specific moment in the history of printing, and that turns out to matter more than the burglary itself.",
          "For most of the nineteenth century a newspaper could describe a painting but could not cheaply show one. Illustration meant an engraver copying an image by hand onto a woodblock, which was slow, expensive and rationed. By 1911 halftone photographic reproduction had become fast and cheap enough for daily use, and the French illustrated supplements were selling around a million copies each. Excelsior, launched in Paris in November 1910 by Pierre Lafitte and billed on its own masthead as a Journal Illustré Quotidien, was built entirely around this: a daily that led with photographs rather than text, running twenty-five to thirty of them per issue.",
          "So the theft happened at the first moment in history when a single picture could be put in front of tens of millions of people within days, simultaneously, across several countries, without anyone having to visit a gallery or buy a book. The crime supplied a story that every paper wanted. The papers supplied a reason to print the image again and again, since a story about a missing painting is unreadable without a picture of the painting.",
          "Notice what this does to the usual formulation. The theft did not confer fame on the Mona Lisa the way a prize confers status. It fed an already well-regarded image into a distribution system that had just become capable of mass reproduction, and it kept feeding it for more than two years. A different painting stolen in 1911 would also have been reproduced everywhere. What made this one stick was that it arrived at the printing presses with a reputation already attached, which is exactly what Baedeker documents."
        ],
        "image": {
          "src": "/images/mona-lisa-excelsior-1913.jpg",
          "alt": "Front page of the Paris daily Excelsior, 14 December 1913, given over to a staged photographic reconstruction of the Mona Lisa theft, with a portrait of Vincenzo Peruggia at the centre",
          "credit": "[Excelsior - Vincenzo Peruggia - Vol de La Joconde - Mona Lisa](https://commons.wikimedia.org/wiki/File:Excelsior_-_Vincenzo_Peruggia_-_Vol_de_La_Joconde_-_Mona_Lisa.jpg), Excelsior, 14 December 1913, digitised by Gallica / Bibliothèque nationale de France, public domain"
        }
      },
      {
        "heading": "Florence, 1913, and the second wave",
        "body": [
          "Peruggia kept the panel in his Paris lodgings for two years. In December 1913 he took it to Florence and offered it to the antiques dealer Alfredo Geri, who involved Giovanni Poggi, the director of the Uffizi. Poggi authenticated it, and the police arrested Peruggia.",
          "What followed mattered as much as the theft. Before the painting went back to France it was put on public display in Florence, then shown in Rome and Milan, drawing large crowds and heavy press attention at every stop, and it was back on the Louvre wall by early January 1914. Peruggia stood trial in Florence in June 1914, claimed a patriotic motive, and received a sentence of a year and fifteen days, which was cut on appeal to a little over seven months. In Italy he attracted a certain amount of sympathy.",
          "The recovery gave the press a second saturation event, and this one came with a resolution and a face. The Excelsior front page of Sunday 14 December 1913 shows what that looked like in practice. Under the headline \"Ce fut sous une blouse que Mona Lisa fut enlevée\", the paper gave over its entire front to a staged photographic reconstruction of the crime, a ring of panels following a man in a workman's smock from the wall of the Salon Carré, down the small staircase, across the Cour Visconti and out onto the quay, with a portrait of Peruggia in the middle. There is almost no text on the page. The front is the pictures.",
          "Sassoon, whose own research supplies most of the pre-1911 numbers quoted above, is nonetheless careful about how much weight the theft can carry. He calls the conclusion that the theft was the main cause of the painting's popularity \"premature\". His grounds are specific. The publicity was real and the mass press exposure was real, but it did not, in his reading, lay down a durable collective memory. Between 1911 and 1913 the London Illustrated Weekly ran only three long features on the painting, and each time it had to remind readers who she was and why she mattered. Then the First World War rolled over the whole of European public attention."
        ]
      },
      {
        "heading": "So what did the theft actually do?",
        "body": [
          "A precise version of the causal claim looks something like this. By 1907 the Mona Lisa was already, in the judgement of the era's dominant guidebook, the most celebrated female portrait in the world, and it had climbed there over roughly sixty years on the strength of the Leonardo cult and a great deal of nineteenth-century French writing. What it did not have was recognition outside the population of people who visited museums or read about art.",
          "The theft, and more importantly the recovery, closed that gap. It attached to the image a story that required no art-historical literacy at all to follow and retell: a small man, a big museum, a missing picture, two years, Florence. Once a painting has a story like that, it can circulate through channels that art does not normally reach, and by 1913 the channels existed to circulate it fast.",
          "The theft also left a physical legacy inside the museum. It converted the painting from an artwork on a wall into a security object, and everything that has happened to it since, the glass and the crowd barriers included, follows from that reclassification.",
          "That reclassification is still generating consequences. The Louvre now caps admissions at thirty thousand people a day, a very large share of whom are in the building specifically for this one panel, and in January 2025 the museum announced plans under the Nouvelle Renaissance project to move it out of Room 711 into a dedicated space of its own by 2031, reached on a separate ticket. The problem the Louvre is solving in 2031 is the one that arrived in the autumn of 1911: too many people want to stand in front of a picture that is fifty-three centimetres wide.",
          "The gap between the object people photograph and the object actually doing the work is not unique to this painting. Gothic architecture has its own version of it: see [what actually makes a gargoyle a gargoyle](/what-is-a-gargoyle/), which turns out to have nothing to do with how frightening it looks."
        ]
      }
    ],
    "faq": [
      {
        "question": "Did the 1911 theft make the Mona Lisa famous?",
        "answer": "Only partly, and not in the way the story is usually told. The painting was already the highest-rated Leonardo in the Louvre for Baedeker's guidebooks, which in 1907 called it \"the most celebrated female portrait in the world\". The theft and the 1913 recovery took a reputation that existed inside the art-viewing public and pushed it into the general public, using an illustrated daily press that had only just become capable of mass photographic reproduction. The historian Donald Sassoon, who wrote the standard study of the painting's fame, calls the claim that the theft was the main cause \"premature\"."
      },
      {
        "question": "Was the Mona Lisa famous before it was stolen?",
        "answer": "Yes, though its standing rose sharply over the nineteenth century. In an 1849 valuation it was estimated at 90,000 francs, behind Titian's Supper at Emmaus at 150,000 and far behind Raphael's Holy Family at 600,000. Between 1851 and 1880 it was copied 71 times by artists at the Louvre, against 197 for Murillo's Immaculate Conception. By 1878 Baedeker was calling it the most celebrated Leonardo in the Louvre, and by 1907 the most celebrated female portrait in the world."
      },
      {
        "question": "Who stole the Mona Lisa, and how?",
        "answer": "Vincenzo Peruggia, an Italian glazier who had worked at the Louvre fitting protective glass over paintings. He took the panel on Monday 21 August 1911, the museum's closing day, lifted it off its hooks in the Salon Carré, removed the frame and walked out. The theft was discovered the next morning by the painter Louis Béroud, who had come to work on a view of that gallery. Guillaume Apollinaire was arrested and Pablo Picasso questioned during the investigation, over an unrelated matter, and both were released."
      },
      {
        "question": "How long was the Mona Lisa missing, and how was it recovered?",
        "answer": "It was gone for about two years and four months. Peruggia kept it in his Paris lodgings, then took it to Florence in December 1913 and tried to sell it to the dealer Alfredo Geri, who brought in Giovanni Poggi, director of the Uffizi. Poggi confirmed it was genuine and Peruggia was arrested. The painting was exhibited in Florence, Rome and Milan before returning to the Louvre wall in early January 1914."
      },
      {
        "question": "What sentence did Vincenzo Peruggia receive?",
        "answer": "He was tried in Florence in June 1914, argued that he had acted from patriotic motives to return the painting to Italy, and was sentenced to one year and fifteen days. On appeal the term was reduced to a little over seven months. He served a short sentence and was treated with some sympathy in Italy."
      },
      {
        "question": "What is the Mona Lisa painted on, and how big is it?",
        "answer": "The Louvre lists the medium as \"huile sur bois (peuplier)\", oil on poplar wood panel, not canvas. The panel measures 79.4 by 53.4 centimetres. Its inventory numbers are INV 779 and MR 316. Even standard sources get this wrong: Baedeker's 1907 Paris guidebook referred to the darkened condition of the canvas."
      },
      {
        "question": "Where is the Mona Lisa displayed now, and is it moving?",
        "answer": "It hangs in Room 711 of the Denon wing, level 1, which the Louvre catalogues as the Salle de la Joconde. In January 2025 the museum announced that under its Nouvelle Renaissance project the painting will be relocated to a dedicated room of its own, accessible on a separate ticket, targeted for 2031 alongside a new entrance."
      },
      {
        "question": "When was the Mona Lisa painted, and who is the sitter?",
        "answer": "The Louvre dates it to the first quarter of the sixteenth century, between 1503 and 1519. The sitter is Lisa Gherardini (1479 to 1542), wife of the Florentine silk merchant Francesco del Giocondo. The museum treats the identification as settled. A marginal note by Agostino Vespucci from October 1503, found in a Heidelberg library copy of Cicero in 2005, records Leonardo working on a head of Lisa del Giocondo and confirms the account Vasari published in 1550."
      }
    ],
    "sources": [
      {
        "label": "Musée du Louvre, collection record: Portrait de Lisa Gherardini, épouse de Francesco del Giocondo, dit La Joconde ou Monna Lisa (INV 779; MR 316)",
        "url": "https://collections.louvre.fr/en/ark:/53355/cl010062370"
      },
      {
        "label": "Donald Sassoon, \"The Mona Lisa\", Prospect Magazine (valuations, copyist counts, press circulation)",
        "url": "https://www.prospectmagazine.co.uk/essays/56325/the-mona-lisa"
      },
      {
        "label": "Karl Baedeker, Paris and its Environs, 1878 edition (full text), entry no. 462, \"The most celebrated work of Leonardo in the Louvre\"",
        "url": "https://archive.org/details/parisanditsenvi00baedgoog"
      },
      {
        "label": "Karl Baedeker, Paris and its Environs, 1907 edition (full text), entry no. 1601, \"the most celebrated female portrait in the world\"",
        "url": "https://archive.org/details/parisanditsenvi01firgoog"
      },
      {
        "label": "Smithsonian Magazine, \"Stolen: How the Mona Lisa Became the World's Most Famous Painting\"",
        "url": "https://www.smithsonianmag.com/arts-culture/stolen-how-the-mona-lisa-became-the-worlds-most-famous-painting-16406234/"
      },
      {
        "label": "National Geographic, \"The most audacious thefts at the Louvre in the last century\"",
        "url": "https://www.nationalgeographic.com/history/article/louvre-museum-robbery-mona-lisa"
      },
      {
        "label": "CNN, \"Mona Lisa will get its own room under a 10-year renovation of the Louvre in Paris\" (28 January 2025)",
        "url": "https://www.cnn.com/2025/01/28/style/mona-lisa-own-room-louvre-intl"
      },
      {
        "label": "Excelsior, 14 December 1913, front page reporting the recovery, digitised by Gallica, BnF",
        "url": "https://gallica.bnf.fr/ark:/12148/bpt6k4602479m"
      }
    ]
  },
  {
    "slug": "gustav-klimt",
    "category": "Painting",
    "title": "Gustav Klimt: The Gold Leaf and the Looted Portraits",
    "description": "Gustav Klimt used real gold, silver and platinum leaf. Three of his paintings burned in 1945, and the 2004 US Supreme Court case decided less than you think.",
    "updated": "2026-08-02",
    "coreSummary": "Gustav Klimt’s best-known works sit inside an unusually complete paper trail: the Vienna ministry file that bought The Kiss unfinished in 1908 for 25,000 crowns, an Austrian arbitration award dated 15 January 2006 that sent five Nazi-looted Bloch-Bauer paintings to Maria Altmann’s family, and black-and-white photographs of three ceiling paintings that burned in May 1945. The 2004 US Supreme Court ruling in that case decided only that Austria could be sued in an American court; it did not decide who owned the paintings.",
    "image": "/images/klimt-the-kiss-hero.jpg",
    "imageAlt": "Detail of Gustav Klimt’s The Kiss, showing the two embracing figures against a field of gold",
    "imageCredit": "[The Kiss (Lovers), detail](https://commons.wikimedia.org/wiki/File:Gustav_Klimt_-_Der_Kuss_%28Liebespaar%29_-_912_-_%C3%96sterreichische_Galerie_Belvedere_-_cropped_top_16_9.jpg), Gustav Klimt, c. 1907–1909, Belvedere, Vienna, inv. 912, public domain",
    "sections": [
      {
        "heading": "A gold engraver’s son, and what that meant for the paint",
        "body": [
          "Gustav Klimt was born on 14 July 1862 in Baumgarten, then a village on the western edge of Vienna. The Klimt Foundation’s research database records his father, Ernst Klimt the elder, as a man who came to Vienna from Prague as a child and trained as a gold engraver. The family lost its savings in the speculation around the Vienna World’s Fair of 1873 and moved repeatedly when rent went unpaid. Gustav and his younger brother Ernst were nonetheless sent to the Imperial-Royal School of Arts and Crafts, transferring in 1878 into the class that trained academic painters.",
          "The trade background matters, because Klimt’s gold is not a figure of speech. The Belvedere’s catalogue record for *The Kiss* reads like a metalworker’s docket: gold leaf, silver leaf and platinum leaf in the two figures, worked into resin oil colours on a primed canvas. The background is a different material altogether. The museum lists it as Schlagmetall, brass composition leaf, glazed with translucent colour and then dusted with loose flakes of metal leaf. The most famous gold field in European painting is largely brass.",
          "Klimt got the visual grammar for this from Ravenna. The Neue Galerie dates the decisive trip to December 1903, when he spent time in the sixth-century Church of San Vitale and studied the Byzantine mosaics of the Empress Theodora, and its account of *Portrait of Adele Bloch-Bauer I* traces the jewel-like inlays and layered metal of that portrait back to those walls. The gold pictures all fall in the years just after the trip. Klimt died in Vienna on 6 February 1918 at 55, after a January stroke left him partly paralysed and he caught pneumonia in hospital."
        ]
      },
      {
        "heading": "The Kiss was bought unfinished, and the ministry file says so",
        "body": [
          "*The Kiss* went on public view for the first time at the Kunstschau Wien 1908, open from 1 June to 15 November, where it hung under the title *Liebespaar*, Lovers, facing the entrance of the room Koloman Moser had designed for Klimt.",
          "It was not finished. A photograph Moriz Nähr took inside the exhibition shows bare patches in the lower left corner. That did not deter the Moderne Galerie’s committee, which resolved to buy the painting on 10 July 1908, with the Ministry of Culture and Education finding the money. The Belvedere’s catalogue essay by Franz Smola and Markus Fellinger quotes the note in the ministry’s acquisition file: „pro domo: die untere linke Ecke des Gemäldes von Klimt ist noch nicht ganz fertiggestellt.“ In translation, for internal purposes: the lower left corner of the painting by Klimt is not yet quite finished.",
          "Klimt, on holiday at the Attersee, wrote back undertaking to take the picture home the moment the show closed and deliver it as soon as he could. He kept the promise and then went further. Set Nähr’s photograph beside the painting as it hangs today and the revisions are legible: the flowers at the left of the meadow strip, stylised clumps in 1908, were brought into line with the even scatter across the rest of it. One correction shows up only under X-ray: Klimt lengthened the kneeling woman’s lower legs by a few centimetres, so that they now break through the wavy edge closing off the gold field on the right.",
          "The agreed price was 25,000 crowns in two instalments. The ministry ordered the second on 29 June 1909, and the Moderne Galerie took delivery on 22 July 1909, still as *Liebespaar*. A gallery catalogue of autumn 1909 used the title *Der Kuss* for the first time. Those 25,000 crowns were the highest sum the gallery had paid for a work by a living artist, against the roughly 15,000 crowns Klimt was then getting for a society portrait. The Belvedere’s own essay raises the possibility that the ministry was making amends for what Klimt had been put through over the faculty paintings."
        ]
      },
      {
        "heading": "Three ceiling paintings that no court can reach",
        "body": [
          "In 1894 the Imperial and Royal Ministry of Education commissioned Klimt and Franz Matsch to paint the ceiling of the ceremonial hall at the University of Vienna. Klimt took *Philosophy*, *Medicine* and *Jurisprudence*, each canvas around four metres by three. Matsch painted *Theology*, which the university still owns.",
          "When *Medicine* was shown at the tenth Secession exhibition in 1901, its nudes set off a public fight, and professors at the university signed a petition against installing the paintings at all. In 1905 Klimt withdrew from the commission and gave up his fee, which also meant repaying the advances he had drawn. MedUni Vienna’s account follows the canvases from there. August and Serena Lederer covered the debts and took *Philosophy*; Koloman Moser bought *Medicine* and *Jurisprudence* between 1910 and 1912, and his family sold both on in 1919, *Medicine* to the Austrian Gallery and *Jurisprudence* to the Lederers.",
          "The Lederers were Jewish, and after the Anschluss in 1938 their property was seized. For the duration of the war all three canvases were moved to Immendorf Castle in Lower Austria, an art depot. MedUni Vienna states what happened next: “On 8 May 1945, the castle and the artworks stored there were completely burnt out. Allegedly, retreating SS units set fire to the castle so as not to leave any works of art behind for the approaching Soviet troops.” Other accounts date the fire to 5 or 9 May. The day is unsettled. Nothing else about the outcome is.",
          "No colour record survives beyond a single detail, the figure of Hygieia from *Medicine* in red and gold. Everything else is black-and-white photography and preparatory drawings. In 2021 the Belvedere worked with Google on machine-learning recolourisations built from those photographs, and hung them beside X-rays of surviving canvases in *Gustav Klimt: Pigment & Pixel*, at the Lower Belvedere from 20 February to 7 September 2025. Those images are reconstructions, and the museum labels them as reconstructions. Restitution law has nothing to offer here, because there is no object left to return."
        ],
        "image": {
          "src": "/images/klimt-medicine-faculty-painting.jpg",
          "alt": "Black-and-white photograph of Gustav Klimt’s faculty painting Medicine, showing a drifting column of nude figures above the frontal figure of Hygieia holding a snake",
          "credit": "[Medicine (faculty painting), photographed before its destruction](https://commons.wikimedia.org/wiki/File:Klimtmedicinephoto.jpg), Gustav Klimt, 1901, burned at Immendorf Castle in May 1945, public domain"
        }
      },
      {
        "heading": "What Adele Bloch-Bauer’s will actually said",
        "body": [
          "Adele Bauer was born in Vienna on 9 August 1881, youngest of the banker Moritz Bauer’s seven children, and married the sugar industrialist Ferdinand Bloch on 19 December 1899, when he was seventeen years her senior. Her salon drew Gustav Mahler and the critic Berta Zuckerkandl. She died on 24 January 1925 at 43.",
          "Ferdinand commissioned the first portrait in the summer of 1903, meaning it as an anniversary present for Adele’s parents that October, and Klimt did not put it on public view until early 1907. The Neue Galerie catalogues it as oil, gold and silver on canvas; the entry by Elana Shapira in the Jewish Women’s Archive gives the size as 140 by 140 centimetres. Adele is the only person Klimt painted twice at full length.",
          "In 1923 Adele wrote a will asking Ferdinand to leave the Klimt paintings to the Austrian Gallery after his own death. Everything that happened eight decades later turned on how that sentence is read. It was addressed to her husband as a request, and the paintings were his property, bought with his money. A wish recorded in the will of someone who does not own the objects is not a bequest of them.",
          "Ferdinand fled Austria after the Anschluss in March 1938 and never returned. The collection was taken. Working through the Nazi-appointed administrator Erich Führer, *Portrait of Adele Bloch-Bauer I* went to the Austrian Gallery in 1941, *Portrait of Adele Bloch-Bauer II* was sold to the same gallery in 1943, and *Beechwood* went to a Vienna museum. Ferdinand died in Zurich in November 1945, leaving his estate to his nieces and nephew. One of them was Maria Altmann.",
          "In April 1948 the family’s lawyer accepted an arrangement: the heirs would treat Adele’s will as binding and leave six Klimts with the gallery, and in exchange the monuments authority would release export permits for other recovered works it was holding up. That agreement was the Austrian Gallery’s answer to the family for the next fifty years. The painting itself was renamed. The Neue Galerie, which owns it now, puts it this way on its own page: “For decades, the masterpiece was displayed in Vienna where it was renamed ‘Woman in Gold’ to conceal the sitter’s identity.”"
        ],
        "image": {
          "src": "/images/klimt-adele-bloch-bauer-photo-1910.jpg",
          "alt": "Photograph of Adele Bloch-Bauer, c. 1910, seated and looking towards the camera",
          "credit": "[Adele Bloch-Bauer, c. 1910](https://commons.wikimedia.org/wiki/File:Adele_Bloch_Bauer_ca_1910.jpg), photographer unknown, public domain"
        }
      },
      {
        "heading": "What the US Supreme Court actually decided in 2004",
        "body": [
          "Austria passed the Art Restitution Act in 1998, and the Belvedere’s provenance team began working systematically through every object made before 1945 and acquired since 1933, out of a collection of roughly 5,400 works. Dossiers go to the Commission for Provenance Research, then to the Art Restitution Committee, which recommends for or against return. The committee’s answer on the Bloch-Bauer Klimts was no. The Belvedere states it on its own provenance page: “In 16 cases involving 29 works of art, the Committee advised against restitution. Among these were the 5 Klimt pictures from the Bloch-Bauer collection, which have subsequently been restituted.” A far more famous disappearance, resolved in two years rather than decades and by a tip-off rather than a tribunal, is covered in [the Mona Lisa's 1911 theft](/mona-lisa/).",
          "Maria Altmann filed in Austria in September 1999 and withdrew, because the court fee was calculated on the value of the paintings and came to something near 1.6 million dollars. She sued in federal court in California on 22 August 2000 instead, won on jurisdiction on 4 May 2001, and held that win in the Ninth Circuit on 12 December 2002. Austria appealed.",
          "*Republic of Austria v. Altmann*, No. 03-13, was argued on 25 February 2004 and decided on 7 June 2004, by six votes to three, with Justice Stevens writing for the majority. The question was narrow. Does the Foreign Sovereign Immunities Act of 1976 reach conduct from before it was passed? The syllabus gives the holding in a single sentence: “The FSIA applies to conduct, like petitioners’ alleged wrongdoing, that occurred prior to the Act’s 1976 enactment and even prior to the United States’ 1952 adoption of the so-called ‘restrictive theory’ of sovereign immunity.”",
          "That is the whole of the holding. Altmann could sue a foreign state in an American court over conduct dating to 1948. The Court expressly declined to review whether the expropriation exception in section 1605(a)(3) applied. It said nothing about who owned the paintings and ordered nothing returned. The ruling unlocked a courtroom door, which is not the same as opening a crate.",
          "Retellings compress this, including the one published by the museum that owns the picture. The Neue Galerie’s page says: “In 2005, a panel hearing before the United States Supreme Court determined that the paintings were to be restituted to the heirs.” The Court ruled in June 2004, and what it ruled on was jurisdiction."
        ],
        "image": {
          "src": "/images/klimt-adele-bloch-bauer-i.jpg",
          "alt": "Gustav Klimt’s Portrait of Adele Bloch-Bauer I, 1907, a full-length figure in a gold robe against a gold ground",
          "credit": "[Portrait of Adele Bloch-Bauer I](https://commons.wikimedia.org/wiki/File:Gustav_Klimt,_1907,_Adele_Bloch-Bauer_I,_Neue_Galerie_New_York.jpg), Gustav Klimt, 1907, Neue Galerie New York, public domain"
        }
      },
      {
        "heading": "The decision that actually moved the paintings",
        "body": [
          "With the jurisdictional obstacle cleared, Altmann and Austria agreed to put the ownership question to binding arbitration in Austria under the 1998 Art Restitution Act. Three Austrian jurists sat on the panel: Peter Rummel as chair, with Andreas Nödl and Walter H. Rechberger. Their award is dated 15 January 2006 and was made public the following day. The full text sits in specialist arbitration databases rather than on the open web, so the reasoning is harder to check than the outcome.",
          "The outcome is not in doubt. The panel found for the heirs on five paintings: *Portrait of Adele Bloch-Bauer I* of 1907, *Portrait of Adele Bloch-Bauer II* of 1912, and three landscapes, *Beechwood*, *Apple Tree I* and *Houses at Unterach on the Attersee*. Austria complied. By 4 April 2006 all five hung at the Los Angeles County Museum of Art, which showed them until 30 June and noted they had never been exhibited together in the United States.",
          "A sixth Klimt in the claim went the other way. The unfinished *Portrait of Amalie Zuckerkandl* stayed in Vienna, because whose property it had last been, Bloch-Bauer’s or Zuckerkandl’s, could not be established. Austria’s Supreme Court rejected extraordinary appeals against that result in April 2008, and the painting is still at the Belvedere. Any account that has the family recovering the Klimts is a painting short."
        ]
      },
      {
        "heading": "135 million dollars, then 192.7 million",
        "body": [
          "On 19 June 2006, Ronald S. Lauder bought *Portrait of Adele Bloch-Bauer I* in a private sale for a reported 135 million dollars, the highest figure publicly reported for a painting to that date. It passed the 104.1 million dollars paid at auction for Picasso’s *Boy with a Pipe* in 2004. The portrait went to the Neue Galerie in New York, which Lauder co-founded and which credits the acquisition to Lauder, the heirs of the Bloch-Bauer estates and the Estée Lauder Fund.",
          "The other four were consigned to Christie’s in New York and sold on 8 November 2006. *Portrait of Adele Bloch-Bauer II* made 87,936,000 dollars. *Birch Forest* made 40,336,000, *Apple Tree I* 33,056,000 and *Houses at Unterach on the Attersee* 31,376,000. The four together came to 192,704,000 dollars inside an evening sale that totalled 491,472,000, then the largest auction result on record.",
          "These two events get welded into one constantly, including by search engines summarising the story. *Adele Bloch-Bauer I* never went under the hammer. It was sold privately in June and was not in the November auction. Oprah Winfrey bought *Adele Bloch-Bauer II* at Christie’s and sold it privately about a decade later, reported by Bloomberg in February 2017 at around 150 million dollars to a buyer in China; the Jewish Women’s Archive now records that painting’s location as a private collection in China. Private figures are reported rather than published, which is worth remembering whenever a Klimt appears in a ranking of the most expensive paintings sold."
        ]
      },
      {
        "heading": "Same collection, opposite outcome",
        "body": [
          "Restitution decisions do not run on one rule, and the Lederer collection points both ways. Klimt’s *Beethoven Frieze* was painted for the fourteenth Secession exhibition of 1902 and meant to be destroyed when the show came down. Carl Reininghaus bought it in 1903 and had it cut into eight pieces to get it off the wall, then sold it to August Lederer in 1915.",
          "The Secession’s own history records what followed. The Lederer family was expropriated in 1938 and the frieze passed into state administration. After the war it went back to the heir, Erich Lederer, by then living in Geneva. The Republic of Austria bought it in 1972, after Chancellor Bruno Kreisky intervened personally. In 2013 Erich Lederer’s heirs asked for it back, and in 2015 the Art Restitution Committee reviewed the claim under the amended Art Restitution Act and recommended against restitution. The frieze has been on permanent display in a purpose-built basement room at the Secession since 1986, in the building it was painted for.",
          "So one Klimt from the Lederer collection burned at Immendorf while another survived, went back to the heir, was bought by the state, and was refused when the next generation asked again. Five Bloch-Bauer Klimts were refused by the same committee and awarded to the family by arbitrators seven years later. A sixth stayed where it was.",
          "To check any of this rather than take it on trust, start with the Belvedere’s Sammlung Online records, which carry the inventory number, the full medium line and a footnoted catalogue essay with archival citations. *The Kiss* is inventory 912, in the Upper Belvedere; the Leopold Museum holds *Death and Life* and a group of Attersee landscapes. The Austrian federal provenance portal publishes the Art Restitution Committee’s recommendations, which is where a painting’s restitution history lives."
        ]
      }
    ],
    "faq": [
      {
        "question": "Did the US Supreme Court order Austria to return Klimt’s Portrait of Adele Bloch-Bauer I?",
        "answer": "No. In *Republic of Austria v. Altmann*, decided on 7 June 2004 by six votes to three, the Court held only that the Foreign Sovereign Immunities Act of 1976 applies to conduct predating its enactment, which meant Maria Altmann’s suit against Austria could proceed in a US court. The Court expressly declined to reach the expropriation exception and said nothing about ownership. Title was settled separately, by a three-member Austrian arbitration panel whose award is dated 15 January 2006."
      },
      {
        "question": "Where is Portrait of Adele Bloch-Bauer I now, and what did it sell for?",
        "answer": "It is on permanent view at the Neue Galerie New York. Ronald S. Lauder bought it in a private sale on 19 June 2006 for a reported 135 million dollars, then the highest publicly reported price for a painting. The museum credits the acquisition to Lauder, the heirs of the Bloch-Bauer estates and the Estée Lauder Fund."
      },
      {
        "question": "Did Klimt use real gold in his paintings?",
        "answer": "Yes, and more than gold. The Belvedere’s catalogue record for *The Kiss* lists gold leaf, silver leaf and platinum leaf in the figures, worked into resin oil colours on a primed canvas. The background is Schlagmetall, brass composition leaf, glazed with translucent colour and scattered with metal-leaf flakes. Klimt’s father, Ernst Klimt the elder, trained as a gold engraver in Vienna."
      },
      {
        "question": "What happened to Klimt’s University of Vienna ceiling paintings?",
        "answer": "*Philosophy*, *Medicine* and *Jurisprudence* were commissioned in 1894, attacked over their nudes after *Medicine* was shown in 1901, and abandoned by Klimt in 1905 when he withdrew from the commission and repaid his advances. All three burned at Immendorf Castle in Lower Austria in May 1945. MedUni Vienna dates the fire to 8 May and reports that retreating SS units are said to have started it. Only black-and-white photographs, preparatory drawings and one colour detail survive."
      },
      {
        "question": "How much did the Austrian state pay for The Kiss, and was it finished?",
        "answer": "25,000 crowns, in two instalments, after the Moderne Galerie committee resolved to buy on 10 July 1908. It was not finished at the time. The ministry’s acquisition file notes that the lower left corner was not yet complete, and Klimt wrote from the Attersee promising to finish the picture once the Kunstschau closed. The gallery took delivery on 22 July 1909."
      },
      {
        "question": "Which Bloch-Bauer Klimt did the family not get back?",
        "answer": "The unfinished *Portrait of Amalie Zuckerkandl*. It stayed at the Belvedere because it could not be established whether the painting had last belonged to Ferdinand Bloch-Bauer or to the Zuckerkandl family. Austria’s Supreme Court rejected extraordinary appeals against that outcome in April 2008."
      },
      {
        "question": "Is the Beethoven Frieze at the Belvedere?",
        "answer": "The Belvedere owns it, but it has been on permanent display in a purpose-built basement room at the Secession building since 1986, in the building it was painted for in 1902. Austria bought it from Erich Lederer in 1972 after Chancellor Bruno Kreisky intervened, and in 2015 the Art Restitution Committee recommended against returning it to Lederer’s heirs."
      }
    ],
    "sources": [
      {
        "label": "Belvedere, Sammlung Online: The Kiss (Lovers), inv. 912, with catalogue essay by Franz Smola and Markus Fellinger",
        "url": "https://sammlung.belvedere.at/objects/6678/der-kuss-liebespaar"
      },
      {
        "label": "Belvedere: Provenance Research (Art Restitution Committee outcomes, including the Bloch-Bauer Klimts)",
        "url": "https://www.belvedere.at/en/belvedere/provenance-research"
      },
      {
        "label": "Belvedere: Gustav Klimt – Pigment & Pixel, 20 February to 7 September 2025",
        "url": "https://www.belvedere.at/en/gustav-klimt-pigment-pixel"
      },
      {
        "label": "Neue Galerie New York: The Woman in Gold (Portrait of Adele Bloch-Bauer I)",
        "url": "https://www.neuegalerie.org/womaningold"
      },
      {
        "label": "Republic of Austria v. Altmann, No. 03-13, 541 U.S. 677 (2004), syllabus, Cornell Legal Information Institute",
        "url": "https://www.law.cornell.edu/supct/html/03-13.ZS.html"
      },
      {
        "label": "Medical University of Vienna: “The Medicine” by Gustav Klimt",
        "url": "https://www.meduniwien.ac.at/web/en/kunst-an-der-meduni-wien/the-medicine-by-gustav-klimt/"
      },
      {
        "label": "Secession, Vienna: Beethoven Frieze, history and ownership",
        "url": "https://secession.at/en/beethovenfrieze"
      },
      {
        "label": "LACMA: Gustav Klimt, Five Paintings from the Collection of Ferdinand and Adele Bloch-Bauer, 4 April to 30 June 2006",
        "url": "https://www.lacma.org/art/exhibition/gustav-klimt-five-paintings-collection-ferdinand-and-adele-bloch-bauer"
      },
      {
        "label": "Elana Shapira, “Adele Bloch-Bauer”, Shalvi/Hyman Encyclopedia of Jewish Women, Jewish Women’s Archive",
        "url": "https://jwa.org/encyclopedia/article/bloch-bauer-adele"
      },
      {
        "label": "Klimt Foundation, Gustav Klimt-Datenbank: The Klimt Family",
        "url": "https://www.klimt-database.com/en/network-vienna-1900/family-and-environment/the-klimt-family/"
      },
      {
        "label": "Leopold Museum: Gustav Klimt in the collection",
        "url": "https://www.leopoldmuseum.org/en/collection/gustav-klimt"
      },
      {
        "label": "Provenance Research and Restitution in the Austrian Federal Collections: the Art Restitution Act",
        "url": "https://provenienzforschung.gv.at/en/empfehlungen-des-beirats/kunstruckgabegesetze/"
      },
      {
        "label": "Al Jazeera, 19 June 2006: Klimt painting sold for record $135m",
        "url": "https://www.aljazeera.com/news/2006/6/19/klimt-painting-sold-for-record-135m"
      },
      {
        "label": "The Art Newspaper, 1 October 2006: Lauder raises $190m cash as Bloch-Bauer Klimts come up for sale",
        "url": "https://www.theartnewspaper.com/2006/10/01/lauder-raises-dollar190m-cash-as-bloch-bauer-klimts-come-up-for-sale"
      }
    ],
    "published": "2026-08-02"
  },
  {
    "slug": "famous-paintings",
    "category": "Painting",
    "title": "Famous Paintings: What Their Catalogue Entries Say",
    "description": "Six of the world's most famous paintings, read from the collection records of the museums that own them: support, technique, size, inventory number.",
    "published": "2026-08-02",
    "updated": "2026-08-02",
    "coreSummary": "Famous paintings circulate as images, and the descriptions attached to those images drift away from the objects. Read from the catalogue entries of the museums that hold them, The Great Wave is a woodblock print issued in thousands of impressions rather than a painting; the Night Watch in Amsterdam is a fragment, cut down in 1715 with 64.4 cm taken off the left edge alone; the 1893 Scream in Oslo is recorded as tempera and crayon on cardboard; and the Mona Lisa is an oil on a poplar panel measuring 79.4 by 53.4 cm.",
    "image": "/images/famous-paintings-night-watch-rijksmuseum.jpg",
    "imageAlt": "Rembrandt's Night Watch as it hangs today in the Rijksmuseum, showing the militia company advancing out of a dark archway.",
    "imageCredit": "[The Nightwatch by Rembrandt](https://commons.wikimedia.org/wiki/File:The_Nightwatch_by_Rembrandt_-_Rijksmuseum.jpg), Rijksmuseum (object SK-C-5), public domain",
    "sections": [
      {
        "heading": "Why the catalogue entry is worth reading",
        "body": [
          "Search for famous paintings and the first page returns much the same twenty works in much the same order, described in much the same words, because most of those pages were assembled from other pages. A description that gets copied often enough stops being checked against the thing it describes.",
          "Museums keep a different kind of record. A collection entry has to name the support the work is painted on, the technique, the measurements in centimetres, an inventory number, and how the institution came to own it. Those fields exist because the object has to be insured, conserved, hung and found again, and they are maintained by people who can walk up to it and look.",
          "Nearly every fact below comes from the catalogue entry of the museum that holds the work, or from technical research that museum published. In several cases the record is more specific, and occasionally more surprising, than the summary that travels with the picture."
        ]
      },
      {
        "heading": "Six works as their museums record them",
        "body": [
          "**Mona Lisa.** Leonardo da Vinci, about 1503 to 1519. Oil on a poplar panel, 0.794 by 0.534 m. Musée du Louvre, inventory INV 779 and MR 316. Catalogued as a portrait of Lisa Gherardini, wife of the Florentine silk merchant Francesco del Giocondo.",
          "**The Night Watch.** Rembrandt van Rijn, 1642. Oil on canvas, 379.5 by 453.5 cm. Rijksmuseum, object SK-C-5. The museum's full title is \"The Night Watch Militia Company of District II under the Command of Captain Frans Banninck Cocq\"; the popular name is a nickname that attached itself after centuries of darkening varnish.",
          "**Girl with a Pearl Earring.** Johannes Vermeer, about 1665. Oil on canvas, 44.5 by 39 cm, signed at the upper left. Mauritshuis, inventory 670.",
          "**The Birth of Venus.** Sandro Botticelli, about 1485. The Uffizi gives the technique as \"Tempera on canvas\", 172.5 by 278.5 cm, inventory 1890 n. 878.",
          "**The Scream.** Edvard Munch, 1893. The National Museum of Norway records the materials in Norwegian as \"Tempera og fettstift på papplate\", tempera and grease crayon on cardboard, 91 cm high by 73.5 cm wide, inventory NG.M.00939, a gift from Olaf Schou in 1910.",
          "**Under the Wave off Kanagawa.** Katsushika Hokusai, about 1830 to 1832. Woodblock print, ink and colour on paper, 24.4 by 35.7 cm overall. The Metropolitan Museum of Art, accession JP10, classified under Prints rather than Paintings."
        ]
      },
      {
        "heading": "The Night Watch on the wall is a fragment",
        "body": [
          "In 1715 the painting was moved to Amsterdam's town hall, now the Royal Palace on Dam Square. It did not fit the wall it was assigned, so it was cut down. The Rijksmuseum gives the widths of what came off: 64.4 cm from the left edge, 23.3 cm from the top, 11.3 cm from the bottom and 7 cm from the right. The offcuts were never recovered, and the museum calls their fate a mystery rather than assuming they were destroyed.",
          "Cropping the left edge changed the picture's character. In the full version the militia company advances across an open space with the archway set off to one side, and three figures stand on a bridge at the left: two militiamen and a young child. Removing them pushed Captain Banninck Cocq and his lieutenant into the centre and turned an off-balance procession into a more symmetrical arrangement. The painting admired for its dynamism is the tighter of the two versions.",
          "What was lost is known because a small copy survives, commissioned by Banninck Cocq himself and generally attributed to Gerrit Lundens. In 2021 the Rijksmuseum used that copy to reconstruct the missing edges, training neural networks on Rembrandt's handling and palette so the added strips would not read as a modern patch, and mounted the result around the original.",
          "One detail rewards the habit this article is arguing for. The Rijksmuseum's collection page gives the painting as 453.5 cm wide, while its own press release on the reconstruction gives the trimmed canvas as 436 cm and the reconstructed whole as 507.4 cm. Only the second figure adds up against the strip widths. Even primary sources are worth reading against each other."
        ],
        "image": {
          "src": "/images/famous-paintings-night-watch-lundens-copy.jpg",
          "alt": "Gerrit Lundens's small painted copy of The Night Watch, showing the full uncropped composition with the archway off-centre and figures at the left edge that no longer exist on the original.",
          "credit": "[Lundens - Nachtwache-Kopie](https://commons.wikimedia.org/wiki/File:Lundens_-_Nachtwache-Kopie.jpg), attributed to Gerrit Lundens after Rembrandt, National Gallery, London, public domain. This 17th-century copy records the composition before the 1715 cutting, not the painting as it hangs today."
        }
      },
      {
        "heading": "The most reproduced image on the list is not a painting",
        "body": [
          "The Met's own title for accession JP10 is \"Under the Wave off Kanagawa (Kanagawa oki nami ura), also known as The Great Wave, from the series Thirty-six Views of Mount Fuji (Fugaku sanjūrokkei)\". The medium field reads woodblock print, ink and colour on paper, and the classification is Prints. The measurement is about the size of a sheet of A4 paper turned sideways.",
          "It reaches lists of famous paintings anyway, and the consequence is that people expect a unique object hanging somewhere. There is no such object. The Great Wave was commercial publishing, printed to be sold cheaply and in quantity, and it sold well in its own time.",
          "Capucine Korenberg's study for the British Museum puts a figure on the print run: \"Presently, experts believe that up to 8,000 impressions were made of The Great Wave.\" That sits inside a normal range for the trade, and the same paper notes a publisher generally had to sell at least 2,000 impressions of a design to make a profit.",
          "The study also assembled a census of survivors. Photographs of 111 original impressions were gathered from museums, galleries, libraries and books, and comparing them showed at least seven separate woodblocks were used for the early printings, two of them later replaced by newly carved ones. That census is a floor rather than a final count, since impressions continue to surface. No two are quite alike, which is why collectors care which state they own. The blocks themselves are gone: \"None of the woodblocks used to produce The Great Wave in the 1830s have survived.\""
        ],
        "image": {
          "src": "/images/famous-paintings-great-wave-met.jpg",
          "alt": "Hokusai's Under the Wave off Kanagawa, a woodblock print showing a cresting wave over three fishing boats with Mount Fuji small in the distance.",
          "credit": "[Under the Wave off Kanagawa](https://www.metmuseum.org/art/collection/search/36491), Katsushika Hokusai, The Metropolitan Museum of Art, accession JP10, [CC0](https://creativecommons.org/publicdomain/zero/1.0/). One impression among the 111 gathered for the British Museum census."
        }
      },
      {
        "heading": "Supports get swapped in the retelling",
        "body": [
          "The support is the least glamorous field in a catalogue entry and the one most often lost in transmission. It also determines most of what is practical about a work: how it was made, how it ages, whether it can be lent, and what a conservator has to worry about.",
          "The 1893 Scream is a case in point. The National Museum of Norway leaves the materials line untranslated on its English page, and papplate means cardboard. That is why the work is fragile, why it is shown under controlled light, and why it does not travel the way a varnished panel painting can. Munch also returned to the motif more than once, in a second painted version, in pastel and crayon, and in an 1895 lithograph that let the image be printed and distributed; MUNCH in Oslo counts eight finished versions in its own collection.",
          "Botticelli runs the other way. Fifteenth-century Florentine painting on the scale of the Birth of Venus is usually associated with wooden panels, and the Primavera, which the Uffizi calls the \"Allegory of Spring\", is on wood. The Birth of Venus is not. The gallery notes that canvas was \"a support that was widely used throughout the 15th century for decorative works destined to noble houses\", which places the painting in a domestic setting rather than a church or a civic hall.",
          "The Mona Lisa's poplar panel matters for the same practical reason, since a panel responds to changes in humidity in ways a stretched canvas does not. Why that particular picture draws the queue it does is a separate question, and one [the 1911 theft only partly answers](/mona-lisa/). Van Gogh's canvases raise a third version of the problem, where [the pigments have not stayed the colours he mixed](/van-gogh-paintings/)."
        ],
        "image": {
          "src": "/images/famous-paintings-the-scream-nasjonalmuseet.jpg",
          "alt": "Munch's The Scream of 1893, the figure on a bridge under a blood-red sky, with the cardboard support visible through thin passages of paint.",
          "credit": "[The Scream, 1893](https://commons.wikimedia.org/wiki/File:Edvard_Munch,_1893,_The_Scream,_oil,_tempera_and_pastel_on_cardboard,_91_x_73_cm,_National_Gallery_of_Norway.jpg), Edvard Munch, [Nasjonalmuseet, Oslo (NG.M.00939)](https://www.nasjonalmuseet.no/en/collection/object/NG.M.00939), public domain. The Commons file title preserves an older materials description; the museum's current record gives tempera and grease crayon on cardboard."
        }
      },
      {
        "heading": "The girl who is not a portrait, sold for 2.30 guilders",
        "body": [
          "The Mauritshuis is direct about what its best-known picture is not: \"Girl with a Pearl Earring is Vermeer's most famous painting. It is not a portrait, but a 'tronie' – a painting of an imaginary figure.\" A tronie was a study of a head, a costume or a type, made for the open market rather than for a sitter who commissioned it. The long search for her identity is a search for someone who probably never existed.",
          "The earring is not what it seems either. The museum's note reads: \"This pearl is too large to be real. It is probably an imitation pearl.\" It goes on to describe the paint as two strokes of white, one at the bottom picking up the collar and a thicker dab at the top, with nothing else, not even a hook to hang it from.",
          "The provenance line is worth reading too. The painting surfaces at a sale in The Hague in 1881, where the record reads: \"Braams sale, The Hague, 1881 (day and month unknown) (for 2,30 guilders to Des Tombe)\". Arnoldus Andries des Tombe bought it for two guilders and thirty cents, lent it to the Mauritshuis in the same year, and left it to the museum in his bequest of 1903.",
          "The price says less about taste in 1881 than about how recently this canon settled. Vermeer had been largely out of view for two centuries, and the Mauritshuis notes that only 36 paintings by him are known. A list that feels permanent when you meet it was assembled work by work, most of it inside the last hundred and fifty years."
        ]
      },
      {
        "heading": "How to check any of this yourself",
        "body": [
          "Find out which institution holds the work, go to that institution's own collection pages rather than an aggregator, and search the title or the artist. What you want is the object record rather than the essay: the fields marked technique, material, dimensions, inventory or accession number, and provenance or acquisition. Those fields settle whether a work is panel or canvas, painting or print, what it actually measures, and when and from whom the museum got it. A page about a famous work that carries no inventory number is usually downstream of one that did.",
          "Museum sites often give the entry in the local language with an English page alongside, and the technical fields are sometimes left untranslated, as with the Norwegian materials line on The Scream. Titles differ between the catalogue and common usage, so search the artist as well. Where a museum has published conservation or technical research, as the British Museum did on The Great Wave, that supersedes the summary on its own object page. And an image being downloadable from a museum site does not mean it is free for any use; the Mauritshuis, for instance, offers high-resolution downloads for non-commercial use and asks you to contact its marketing department otherwise.",
          "Looking things up this way tends to make the objects more interesting. A cathedral carving turns out to be [a piece of drainage before it is a monster](/what-is-a-gargoyle/). A series of water lily paintings turns out to be studies of [a pond the painter dug himself](/water-lilies-monet-series/). In most cases the catalogue entry holds something the summary left out."
        ]
      }
    ],
    "faq": [
      {
        "question": "Is The Great Wave a painting?",
        "answer": "No. The Metropolitan Museum of Art classifies it under Prints and gives the medium as woodblock print, ink and colour on paper (accession [JP10](https://www.metmuseum.org/art/collection/search/36491)). It was published as part of the series Thirty-six Views of Mount Fuji around 1830 to 1832, and research by Capucine Korenberg for the [British Museum](https://www.britishmuseum.org/sites/default/files/2022-03/korenberg_article-for_hokusai%20_edited_volume_final-2020_accessible.pdf) reports that experts believe up to 8,000 impressions were made."
      },
      {
        "question": "Why is The Night Watch smaller than Rembrandt painted it?",
        "answer": "It was cut down in 1715, when it was moved to Amsterdam's town hall and did not fit the wall. The [Rijksmuseum](https://www.rijksmuseum.nl/en/press/press-releases/for-the-first-time-in-300-years-the-night-watch-is-complete-again) gives the removed widths as 64.4 cm on the left, 23.3 cm at the top, 11.3 cm at the bottom and 7 cm on the right. The offcuts have never been found, and the 2021 reconstruction of the missing edges was based on a 17th-century copy attributed to Gerrit Lundens."
      },
      {
        "question": "Who is the girl in Girl with a Pearl Earring?",
        "answer": "Probably no one in particular. The [Mauritshuis](https://www.mauritshuis.nl/en/our-collection/artworks/670-girl-with-a-pearl-earring) states that the work \"is not a portrait, but a 'tronie' – a painting of an imaginary figure\", a study of a type or a costume rather than a likeness of a known sitter. The museum also notes that the pearl is too large to be real and was probably an imitation."
      },
      {
        "question": "What is the quickest way to check a claim about a famous painting?",
        "answer": "Go to the collection page of the museum that holds it and read the object record rather than the essay. The technique, material, dimensions, inventory number and acquisition fields answer most questions directly, and a page about a famous work that carries no inventory number is usually copied from one that did."
      }
    ],
    "sources": [
      {
        "label": "Musée du Louvre, collection record: Portrait de Lisa Gherardini, dit La Joconde (INV 779)",
        "url": "https://collections.louvre.fr/en/ark:/53355/cl010062370"
      },
      {
        "label": "Rijksmuseum, collection record: The Night Watch, Rembrandt, 1642 (SK-C-5)",
        "url": "https://www.rijksmuseum.nl/en/collection/SK-C-5"
      },
      {
        "label": "Rijksmuseum press release: For the first time in 300 years The Night Watch is complete again",
        "url": "https://www.rijksmuseum.nl/en/press/press-releases/for-the-first-time-in-300-years-the-night-watch-is-complete-again"
      },
      {
        "label": "The Metropolitan Museum of Art, collection record: Under the Wave off Kanagawa, Hokusai (JP10)",
        "url": "https://www.metmuseum.org/art/collection/search/36491"
      },
      {
        "label": "Capucine Korenberg, \"The making and evolution of Hokusai's Great Wave\", British Museum",
        "url": "https://www.britishmuseum.org/sites/default/files/2022-03/korenberg_article-for_hokusai%20_edited_volume_final-2020_accessible.pdf"
      },
      {
        "label": "Nasjonalmuseet, collection record: Edvard Munch, The Scream, 1893 (NG.M.00939)",
        "url": "https://www.nasjonalmuseet.no/en/collection/object/NG.M.00939"
      },
      {
        "label": "MUNCH, Oslo: Where can I see The Scream",
        "url": "https://www.munch.no/en/The-Scream/where-can-i-see-the-scream/"
      },
      {
        "label": "Mauritshuis, collection record: Johannes Vermeer, Girl with a Pearl Earring (inv. 670)",
        "url": "https://www.mauritshuis.nl/en/our-collection/artworks/670-girl-with-a-pearl-earring"
      },
      {
        "label": "Gallerie degli Uffizi: Sandro Botticelli, The Birth of Venus (inv. 1890 n. 878)",
        "url": "https://www.uffizi.it/en/artworks/birth-of-venus"
      }
    ]
  },
  {
    "slug": "abstract-art-first-painting",
    "category": "Movements",
    "title": "Abstract Art: The 'First' Painting Its Museum Backdated",
    "description": "A Kandinsky watercolour signed 1910 was long called the first abstract painting. Its own museum now dates it 1913, after a Swedish painter got there first.",
    "published": "2026-08-03",
    "updated": "2026-08-03",
    "coreSummary": "The watercolour most often credited as the first fully abstract painting in Western art carries a handwritten inscription reading \"Kandinsky 1910\", but Centre Pompidou's own collection catalogue dates the sheet to 1913, meaning its own institution has dated the work three years later than the artist's inscription claims. Hilma af Klint, a Swedish painter working almost entirely outside the exhibiting art world, had already produced fully non-representational paintings by early 1907 in a series called The Ten Largest, five to seven years before Kandinsky's usually cited date, but her instruction that the work stay unseen kept it out of art history until decades after both painters were dead.",
    "image": "/images/abstract-art-kandinsky-untitled-watercolor.jpg",
    "imageAlt": "Kandinsky's Untitled watercolour, catalogued 1913, showing loosely floating patches of ink and colour with no legible object, held at the Centre Pompidou.",
    "imageCredit": "[Untitled (First Abstract Watercolor) by Wassily Kandinsky](https://commons.wikimedia.org/wiki/File:Untitled_(First_Abstract_Watercolor)_by_Wassily_Kandinsky.jpg), Centre Pompidou, Musée National d'Art Moderne, public domain",
    "sections": [
      {
        "heading": "What separates 'abstract' from merely simplified",
        "body": [
          "People use \"abstract\" loosely, for anything from a blurred landscape to a geometric print. Tate's own glossary is more exact: \"Abstract art is art that does not attempt to represent an accurate depiction of a visual reality but instead uses shapes, colours, forms and gestural marks to achieve its effect.\" That definition draws a real line rather than a stylistic one. A Cubist portrait that fractures a face into planes is still, technically, a picture of a face. A fully abstract work has given up that anchor: there is no object left to recognise underneath the paint, only the paint's own arrangement.",
          "Tate credits Kazimir Malevich and Piet Mondrian as \"pioneers of 'pure' abstract painting... from about 1910-20\", and for most of the twentieth century Wassily Kandinsky held the same title, usually attached to a specific sheet of paper and a specific year. That single work, and the date attached to it, turns out to be the least settled fact in the whole story of how painting stopped representing anything.",
          "Nothing about that line appeared overnight. Cubism and Fauvism spent the years before 1910 breaking a painted face or landscape into planes and unnatural colour without ever quite letting go of the underlying subject, which is why they count as partial rather than full abstraction. Tate's own account of the period treats those movements as groundwork rather than the finish line, noting that they \"opened the door for more extreme approaches to abstraction\" that painters then walked through. What happened next, and specifically who walked through first with no subject left at all, is the part the record does not settle cleanly.",
          "The dispute is not folklore passed between blogs. It runs through two institutions' own catalogue records, and it is worth tracing exactly, because the answer changes depending on which record you trust and how far back you are willing to look outside the exhibited art world of the time."
        ]
      },
      {
        "heading": "The catalogue card that argues with the artist's own handwriting",
        "body": [
          "The watercolour usually shown as the starting point hangs in the graphic art collection of the Centre Pompidou in Paris. The museum's own collection record gives its formal title as \"Sans titre\" (Untitled), its medium as \"mine graphite, encre de Chine et aquarelle sur papier\" (graphite pencil, Chinese ink and watercolour on paper), and its dimensions as 49.6 by 64.8 cm. It entered the collection as inventory number AM 1976-864, a gift from the artist's widow, Nina Kandinsky, in 1976.",
          "Two details in that same record pull against each other. The back of the sheet carries Kandinsky's own inscription, reading \"Kandinsky 1910 // Aquarelle 1910 / (abstraite)\". But the date field in the Centre Pompidou's own catalogue, the field a researcher would cite, reads 1913. The museum that owns the work and wrote the inscription's transcription into its own database has, in effect, dated the object three years later than the artist dated it himself.",
          "The catalogue does not erase the older claim; it just no longer endorses it as fact. The Pompidou's teaching materials for this work still record its popular, attributed title as \"Première abstraction, aquarelle\", literally \"first abstraction, watercolour\", the name several generations of art history absorbed as settled. The formal catalogue entry and the informal legend now sit on the same page, disagreeing with each other."
        ]
      },
      {
        "heading": "Why the redating holds up",
        "body": [
          "A backdated inscription is a strong claim to make about a working artist, so it is worth asking what evidence moved the date. The Pompidou's own resource for the work sets out the reasoning in terms of what changed in Kandinsky's technique and when: the independence of colour and line from any descriptive job, what the museum's text calls the mark's \"autonomie\", is a quality that only appears in his output from 1911 onward. Colour patches that float in an indeterminate space rather than sitting inside a drawn contour are, by the same account, a feature of work later than 1912. Measured against those two markers, this sheet reads as a piece of 1913, not 1910.",
          "That kind of dating is stylistic rather than documentary, comparing one undated object against a body of dated ones, which is why it is a scholarly consensus rather than a certified fact. But it is the same method conservators use to date any undocumented sheet of paper, and it is why the Pompidou's own database, not a popular retelling, now carries 1913 as the object's date."
        ]
      },
      {
        "heading": "A parallel body of abstract work already existed in Stockholm",
        "body": [
          "Even a corrected 1913 leaves Kandinsky short of first, because someone else had already got there and left a larger, dated body of work behind. Hilma af Klint, born in Stockholm in 1862 and academically trained as a painter of landscapes and botanical studies, spent her twenties and thirties inside Swedish spiritualist circles; the Guggenheim's own account of her describes her attending seances from the age of seventeen and immersing herself in Theosophy alongside her conventional training.",
          "In 1905 she recorded hearing what she took to be an instruction from a spiritual source, telling her, in her own words as preserved by the Guggenheim, \"You are to proclaim a new philosophy of life.\" Between November 1906 and March 1907 she painted a group of canvases now known as the Primordial Chaos series, working with no recognisable subject at all. Tate's own magazine, Tate Etc, states the comparison directly: \"a Swedish painter by the name of Hilma af Klint had created her first abstract painting in her Stockholm studio in 1906, five years before him\" - him being Kandinsky, on the date long attached to his name."
        ]
      },
      {
        "heading": "The Ten Largest, painted on the studio floor",
        "body": [
          "Af Klint followed that series with an even larger undertaking. Moderna Museet's own collection guide records that \"the monumental images that make up the suite The Ten Largest were painted in egg tempera on paper mounted on linen\" across the second half of 1907, worked on sheets laid on the studio floor because the tempera dried too quickly to manage upright. Each of the ten canvases, some over three metres tall, took roughly four days to complete. The series traces four phases of a life - childhood, youth, adulthood and old age - through spirals, looping tendrils and unmodulated fields of colour with no horizon, no figure and no object anywhere in the frame.",
          "None of it was made for a gallery wall. Af Klint painted within a private circle of four other women, later called The Five, who held regular seances and recorded what they described as messages from spiritual sources; the paintings were, by her own account, executed under that guidance rather than composed as exhibition pieces. That context is exactly why the work stayed outside art history for so long: it was never made to enter the conversation Kandinsky was having in Munich."
        ],
        "image": {
          "src": "/images/abstract-art-af-klint-ten-largest-no7.jpg",
          "alt": "Hilma af Klint's The Ten Largest, No. 7, Adulthood (1907), a monumental tempera-on-paper painting with spiralling abstract forms in orange, pink and blue, showing no recognisable figure or object.",
          "credit": "[Hilma af Klint - The Ten Largest No. 7 - Adulthood - 1907](https://commons.wikimedia.org/wiki/File:Hilma_af_Klint_-_The_Ten_Largest_No._7_-_Adulthood_-_1907.jpg), Moderna Museet, Stockholm, public domain"
        }
      },
      {
        "heading": "Two trains on the same tracks, and only one line got a platform",
        "body": [
          "Tate Etc's account of the two painters is careful not to claim influence in either direction: \"Without knowing of each other's existence, the two artists seem to have travelled for a long way like two trains on the same tracks.\" Kandinsky was publishing manifestos, exhibiting with the Munich avant-garde, and co-founding what became Der Blaue Reiter; af Klint showed her abstract work in public only a handful of times in her life, mostly at spiritual gatherings rather than art exhibitions. Priority in art history has tended to track publication and exhibition as much as the date on the canvas, and on that ledger Kandinsky had every advantage.",
          "Af Klint compounded her own obscurity on purpose. She left her collection of more than a thousand abstract paintings and works on paper to her nephew with instructions that they remain unseen for a fixed period after her death in 1944, convinced her own era was not ready for them. She was shown to an international audience for the first time only in the mid-1980s, when the art historian Ake Fant introduced her paintings at a Nordic conference in Helsinki. Moderna Museet gave her a dedicated exhibition in 2013. The reassessment reached its widest audience in 2018, when the Guggenheim's Hilma af Klint: Paintings for the Future opened in New York; the museum's own account of the show states that \"more than 600,000 visitors have attended Hilma af Klint: Paintings for the Future, the highest recorded attendance figure for a single exhibition in the museum's history.\""
        ]
      },
      {
        "heading": "So who actually painted the first abstract picture?",
        "body": [
          "The honest answer is that the question assumes a cleaner finish line than the record supports. If \"first\" means the earliest dated body of fully non-representational work, af Klint's Primordial Chaos paintings of late 1906 currently hold that position over any work reliably dated to Kandinsky. If \"first\" means the earliest work that actually entered and shaped the public conversation about abstraction as it happened, Kandinsky keeps the title regardless of what year his own museum now assigns to a single watercolour, because af Klint's work did not reach that conversation until both painters were long dead. Both answers are defensible; they are just answers to different questions wearing the same word.",
          "What the Pompidou's catalogue entry demonstrates, more than a shift in credit from one painter to another, is how much a settled art-historical fact depends on institutions actively maintaining it. The date on a watercolour changed not because a new document surfaced but because scholars re-examined the object against the rest of a career and updated the record. [Checking a museum's own catalogue fields against the popular story around a work](/famous-paintings/) turns up this kind of gap more often than casual readers expect, in much the same way [Monet's water lily canvases turn out to document a pond he built and planted himself](/water-lilies-monet-series/) rather than a scene he simply found."
        ]
      }
    ],
    "faq": [
      {
        "question": "What actually makes a painting \"abstract\" rather than just stylised?",
        "answer": "Whether a recognisable subject survives at all. Tate's glossary defines abstract art as work that \"does not attempt to represent an accurate depiction of a visual reality but instead uses shapes, colours, forms and gestural marks to achieve its effect.\" A distorted or simplified figure, as in Cubism, is still a picture of something; a fully abstract work has no such referent left underneath the paint."
      },
      {
        "question": "Was Kandinsky's 1910 watercolour really the first abstract painting?",
        "answer": "Its own holding institution no longer dates it to 1910. The Centre Pompidou's collection record for the work (inventory AM 1976-864) gives its date as 1913, based on stylistic comparison with the rest of Kandinsky's output, even though the sheet itself carries his handwritten inscription \"Kandinsky 1910 // Aquarelle 1910 / (abstraite).\""
      },
      {
        "question": "Who was Hilma af Klint and why is she now part of this story?",
        "answer": "A Swedish painter, born in Stockholm in 1862, who worked within a private spiritualist circle and produced fully abstract canvases from late 1906, documented in her Primordial Chaos series and the 1907 suite The Ten Largest (Moderna Museet, Stockholm). Tate Etc states plainly that she \"had created her first abstract painting in her Stockholm studio in 1906, five years before\" the date then attached to Kandinsky."
      },
      {
        "question": "Why wasn't Hilma af Klint's work known earlier?",
        "answer": "She left instructions that her more than a thousand abstract paintings stay unseen for a set period after her death in 1944, and she had shown almost none of the work publicly during her lifetime. It was first introduced to an international audience in the mid-1980s, decades after both she and Kandinsky had died, and only reached broad public attention with the Guggenheim's 2018-2019 exhibition Hilma af Klint: Paintings for the Future."
      },
      {
        "question": "Did Kandinsky and af Klint know about each other's work?",
        "answer": "No. Tate's own magazine, Tate Etc, describes the two as having worked \"without knowing of each other's existence\", developing parallel bodies of abstract work independently and roughly simultaneously - af Klint from 1906, Kandinsky from about 1911 to 1913 on the corrected dating."
      },
      {
        "question": "Is there a single settled answer to who painted the first abstract work?",
        "answer": "No, and that is a documented disagreement rather than an unresolved trivia question. By earliest dated non-representational work, af Klint currently holds priority. By earliest work to shape the exhibited, published conversation about abstraction as it was happening, Kandinsky still does, since af Klint's paintings did not reach that conversation until decades after both painters had died."
      }
    ],
    "sources": [
      {
        "label": "Centre Pompidou, collection record: Vassily Kandinsky, Sans titre, 1913 (AM 1976-864)",
        "url": "https://www.centrepompidou.fr/fr/ressources/oeuvre/cMejBMj"
      },
      {
        "label": "Centre Pompidou: Vassily Kandinsky, teaching resource on the birth of abstract art",
        "url": "https://www.centrepompidou.fr/en/offre-aux-professionnels/enseignants/dossiers-ressources-sur-lart/naissance-de-lart-abstrait/vassily-kandinsky"
      },
      {
        "label": "Tate: Abstract art (art term glossary)",
        "url": "https://www.tate.org.uk/art/art-terms/a/abstract-art"
      },
      {
        "label": "Tate Etc, issue 27: \"The first abstract artist? (And it's not Kandinsky)\"",
        "url": "https://www.tate.org.uk/tate-etc/issue-27-spring-2013/first-abstract-artist-and-its-not-kandinsky"
      },
      {
        "label": "Moderna Museet collection guide: Hilma af Klint, The Ten Largest (1907)",
        "url": "https://guide.modernamuseet.se/stockholm/en/collection/hilma-af-klint/de-tio-storsta/"
      },
      {
        "label": "Guggenheim Museums and Foundation: \"Who Was Hilma af Klint?\"",
        "url": "https://www.guggenheim.org/articles/checklist/who-was-hilma-af-klint-at-the-guggenheim-paintings-by-an-artist-ahead-of-her-time"
      },
      {
        "label": "Guggenheim Museums and Foundation press release: Hilma af Klint: Paintings for the Future named most-visited exhibition in the museum's history",
        "url": "https://www.guggenheim.org/press-release/hilma-af-klint-paintings-for-the-future-most-visited-exhibition-in-solomon-r-guggenheim-museums-history"
      },
      {
        "label": "Wikimedia Commons: Untitled (First Abstract Watercolor) by Wassily Kandinsky",
        "url": "https://commons.wikimedia.org/wiki/File:Untitled_(First_Abstract_Watercolor)_by_Wassily_Kandinsky.jpg"
      },
      {
        "label": "Wikimedia Commons: Hilma af Klint, The Ten Largest No. 7, Adulthood, 1907",
        "url": "https://commons.wikimedia.org/wiki/File:Hilma_af_Klint_-_The_Ten_Largest_No._7_-_Adulthood_-_1907.jpg"
      }
    ]
  }
];
