# UmberLore podcast guest-pitch log

## 2026-08-04 — first-ever pass

This is the first podcast-guest-pitch run for UmberLore (previously only validated on the seo-geo-trinity sister sites). No test emails have been sent for this site via this tactic before, so this is a cold start.

### Angle used

UmberLore's actual published content (`src/data/guides.ts`, 9 articles at time of writing) is consistently built around testing a popular art-history claim against primary sources: artist letters, museum catalogue entries, conservation science, legal/restitution records. Examples: the Notre-Dame "gargoyles" are mostly 19th-century inventions without a real drainage channel; Van Gogh's letters and museum pigment research show his palette has physically shifted color since he painted; a museum backdated its own "first" abstract painting by three years once conservators re-examined it; the Klimt piece traces the actual Bloch-Bauer restitution case law rather than the popular shorthand version. This is the pitch angle used below: "independent art-history writer who checks the popular story against the documented one," not a vague "we write about art" pitch.

### Podcasts checked (9 total)

| Podcast | Status found | Verdict |
|---|---|---|
| Art Crime Podcast (Mara & Baker) | Last episode April 19, 2021 (Season 1 finale). No episodes since. | **Skip — 太久没更新 (dead since 2021)** |
| Stuff About Things: An Art History Podcast (Lindsay Sheedy) | Active, latest episode June 29, 2026 (Ep. 46, Voynich Manuscript) | **Skip — solo-hosted, no guest format, nothing to pitch into** |
| The Art History Babes | Last episode May 18, 2022 (Ep. 187). Confirmed dead via direct site fetch — no new episodes in ~4 years. | **Skip — 太久没更新 (dead since 2022)** |
| Art of Darkness (Kevin Kautzman, w/ Matt Taylor S6) | Very active, multiple episodes/week, latest new episode July 12, 2026. Guests are independent writers/authors/gallerists/consultants (e.g. Rachel Haywire — futurist/gallerist/consultant; C. Sandbatch — writer) discussing cultural/historical figures, not exclusively academics. Site states the show welcomes guest pitches. | **PASS both bars — pitch drafted** |
| Who Arted: Weekly Art History for All Ages (Kyle Wood) | Active, weekly, latest episode hours old at check time per Apple Podcasts listing, mixing fresh interviews (e.g. independent illustrator/graphic novelist Emil Wilson) with encore reruns of artist-profile episodes (Goya, Hockney, Miro, etc.). | **PASS both bars — pitch drafted** |
| The Lonely Palette (Tamar Avishai) | Active but latest episode found was April 7, 2026 (~4 months before this check, outside the ~3-month freshness bar). Format is also host-in-museum interviews with visitors in front of a painting, not a remote guest-interview show. | **Skip — stale by freshness bar + format mismatch (not a guest-interview show)** |
| The Art Law Podcast (Steve Schindler & Katie Wilson-Milne) | Active, latest episode April 27, 2026, with copyright lawyer Nancy Wolff discussing a Ninth Circuit case. | **Skip — fit is a stretch; guests are practicing art/copyright lawyers on active litigation, not independent content-site writers; didn't want to force a pitch that overstates credentials Owen doesn't have** |
| The Modern Art Notes Podcast (Tyler Green) | Active, weekly, latest episode July 23, 2026 with artist Derrick Adams. | **Skip — guests are artists/historians/authors discussing their own current book or exhibition; Owen has neither, so there's no natural hook into this show's format** |
| Edge of the Crowd / "Crimes Against Art" (hosts Isobel & Michelle) | Found only a Season 1 (10 episodes, launched October 2022). Could not find any 2026 episode listings or confirm the show is still producing new episodes. | **Skip — can't confirm current activity, treating as "太久没更新/无法确认" rather than assuming active** |

Summary: 9 checked, 2 cleared both bars (verifiable activity within ~3 months + genuine guest/topic fit without overstating credentials). Same pattern as the beta (commsadvisor.com) run on the sister project: this niche also skews toward either dead/inactive shows, solo-hosted shows with no guest slot, or shows whose guest bar requires credentials (curator, practicing artist, art lawyer) Owen doesn't have and won't fabricate.

### Pitches drafted (full text in outreach-drafts.md)

1. **Art of Darkness** — artofdarkpod@gmail.com, host Kevin Kautzman. Pitch: the documented Klimt/Bloch-Bauer restitution case vs. the popular shorthand version, referencing the June 28, 2026 Rachel Haywire episode.
2. **Who Arted** — whoartedpodcast@gmail.com, host Kyle Wood. Pitch: the Notre-Dame gargoyle/grotesque distinction, referencing the Goya and Miro episodes.

### Independent review outcomes

1. **Art of Darkness** — Independent review agent (fresh context, no access to this task's reasoning) checked: (a) no prior email to artofdarkpod@gmail.com or this show found in umberlore's local outreach logs (noted it can't fully confirm from local files alone, no sent-mail log cross-checked); (b) every claim in the email verified against `src/data/guides.ts` (Klimt/Bloch-Bauer restitution facts and the Notre-Dame gargoyle/chimera facts both match the source guides exactly, no exaggeration); (c) confirmed the show is real and active (~207 episodes, recent 2026 activity) and the referenced June 28, 2026 Rachel Haywire episode is real; (d) read the email fresh and found no AI-writing tells. Verdict: **"can send"**. Sent 2026-08-04 via `gmail_send.py --from umberlore` to artofdarkpod@gmail.com. Message ID: 19fc93dcff6f098e.

2. **Who Arted** — A separate independent review agent (fresh context) checked: (a) grepped all outreach/audit logs in the umberlore repo for "whoarted"/"Kyle Wood" — no prior contact found, though it flagged this as "clean but not provably exhaustive" since it can't check Gmail history directly; (b) verified both factual claims against `src/data/guides.ts` — the gargoyle/Notre-Dame restoration facts (Viollet-le-Duc/Lassus 1843-1864, Victor Pyanet, Michael Camille citation) matched, with one minor flagged imprecision (email calls the flying-buttress gargoyles "medieval" when the guide notes even those are largely 19th-century replacements — a defensible simplification, not a fabrication) and the Van Gogh letter/pigment-fading claim matched exactly; (c) confirmed the show and host are real and active (WebFetch + WebSearch), both referenced episodes (Goya "Third of May 1808," Miro "The Farm") are real, and found independent evidence the show books non-academic/independent creative guests; (d) read the email fresh, found no AI-writing tells. Verdict: **"can send"**. Sent 2026-08-04 via `gmail_send.py --from umberlore` to whoartedpodcast@gmail.com. Message ID: 19fc9416b376f2be.

### 流程说明

负责本站的 site-agent 完成研究、撰写、humanizer、发起两个独立复核 agent 后提前结束了自己的任务轮次两次——第一次恢复后自行处理完 Art of Darkness 一项，第二次在 Who Arted 复核已判定「can send」的情况下又提前结束，未取回执行发送。这不是复核卡死，是执行 agent 过早认为任务完成（本次运行里 Hollowvane、WarCrumbs、WageLark 也出现同一模式）。发现后由主协调会话直接核实 Who Arted 复核结论、完成发送、补写本条记录，复核标准和判定过程本身未受影响。

### 本次运行小结

查 9 档，2 档通过双重门槛（Art of Darkness、Who Arted），2 封 pitch 撰写+humanizer+独立复核通过+已发送，0 封因问题/卡死留待处理。



## 2026-08-16 (third run)

### Cooldown check

Art of Darkness (artofdarkpod@gmail.com) and Who Arted (whoartedpodcast@gmail.com) were both sent 2026-08-04, 12 days before this run — still inside the 14-day cooldown per the task's own bookkeeping. Not re-contacted this round.

### Fresh angle identified (not yet used in a pitch)

`src/data/guides.ts` has grown from 9 articles (8/4 baseline) to 31. Read the full current list and picked a genuinely new angle, distinct from the two already-used ones (Klimt/Bloch-Bauer restitution law, Notre-Dame gargoyle history): **`saturn-devouring-his-son`** (published 2026-08-05, updated 2026-08-16) — Goya's Black Paintings are usually treated as an unambiguous, fully-documented late-career masterpiece, but the article lays out three separate open questions the popular story skips over: (1) in 2003 Madrid historian Juan José Junquera used property deeds to argue the room housing this and eight other Black Paintings didn't exist yet when Goya owned the house, and proposed Goya's son Javier as the real painter — a claim most scholars reject but that no forensic study has ever definitively closed either way; (2) the Prado's own published encyclopedia entry (Valeriano Bozal) and Goya scholar Fred Licht have both separately argued the figure being eaten may not even be a child, based on body proportions and the absence of any of Saturn's usual mythological attributes; (3) an 1828 inventory lists fifteen Black Paintings, one more than reached the Prado, with the missing one's ownership trail and even its authenticity independently disputed. This is held in reserve for the next candidate that clears both bars — not used in a pitch this round (see below).

### Podcasts checked this round (12 total, all new — none previously ruled out)

| Podcast | Status found | Verdict |
|---|---|---|
| Jo's Art History Podcast (Jo McLaughlin) | Explicit, ideal guest bar ("you don't need to be an expert on your topic"). But direct RSS/Apple Podcasts check shows only one episode in the last ~10 months: a "SEASON 5: Welcome to Saints and Their Signifiers!" trailer on 2026-06-02, preceded by an 8-month silent gap back to 2025-10-28, and nothing published since (2.5 months of silence as of this check, no forward-looking evidence of continued production found). | **Skip — cadence too sparse/unconfirmed to call genuinely active; current season is also fully thematic on Christian saint iconography, which the Goya angle doesn't fit even if it resumes** |
| Art of History (Amanda Matta) | Site framing is "no prerequisites required" for episodes. Contact confirmed: artofhistorypod@gmail.com. But same pattern as above via Apple Podcasts dates: last episode 2026-06-06, preceded by scattered episodes (2025-09, 2025-11) then a ~6-month gap, nothing since. Directory claim of "new episodes every month" doesn't match the observed dates. | **Skip — can't confirm genuinely ongoing production despite the friendly guest framing** |
| Is It? The Art Mystery Podcast (Prof. Noah Charney) | Brand new 2026 show, topically a near-perfect match (each episode tests a painting's disputed/uncertain authorship against expert + AI analysis) — closest topical fit found this round for the Saturn angle. | **Skip — guest bar explicitly requires "a specialist in the artist in question" plus a credentialed AI-authentication expert; same structural mismatch as The Art Law Podcast (already skipped 8/4) — would require fabricating expertise Owen doesn't have** |
| Art Fraud (host Alec Baldwin, reporting by Vanity Fair's Michael Shnayerson) | Active, narrative true-crime show about the Knoedler forgery scandal. | **Skip — celebrity-hosted, closed/produced narrative show, no independent-guest-pitch pathway** |
| The Mystery Behind Art History | Listed in directories as "weekly," but no confirmable 2026 content found; most recent verifiable episodes date to 2020. | **Skip — 无法确认当前是否仍在更新，按"不能确认活跃"处理** |
| ArtHoles (Michael Anthony) | Small solo-format show (33 episodes), host + occasional early co-host. | **Skip — no guest-interview slot to pitch into** |
| The Italian Renaissance Podcast (Rocky Ruggiero) | Most recent confirmed guest episode (playwright discussing a Michelangelo-themed play) dates to April 2026, ~4 months before this check — outside the ~3-month freshness bar. | **Skip — stale by freshness bar; also a period mismatch (Renaissance specialist show, Goya is ~300 years later)** |
| Talk Art (Russell Tovey & Robert Diament) | Very active, well-established, 370+ episodes. | **Skip — guest roster is major international artists/gallerists (Olafur Eliasson, Luc Tuymans, Louis Fratino); no realistic path for an independent content-site writer, would be forcing the fit** |
| Dialogues: The David Zwirner Podcast | Active, gallery-produced. | **Skip — guests are gallery-affiliated figures (e.g. a foundation director); closed booking tied to the gallery's own artist roster, not an open-guest show** |
| Raw Material (SFMOMA) | Active, institutional museum production. | **Skip — features practicing artists working in various media on assignment from the museum, not an open guest-pitch format** |
| The Art Engager (Claire Bown) | Checked for guest format (49 guest episodes + 101 solo across 5 years). | **Skip — show has concluded; final episode has already aired** |
| Stories in Colour (National Gallery, London) | Weekly limited series, guests included writer Victoria Finlay. | **Skip — finite series that already finished, concluded 2026-07-08** |

### Outcome

0 of 12 newly-checked podcasts cleared both bars this round. No pitch was drafted, humanized, reviewed, or sent this run — nothing to send it to. Two candidates (Jo's Art History Podcast, Art of History) had the right guest-bar *framing* ("no expertise required") but failed the activity-confirmation bar on inspection of actual publish dates, not just directory claims; one (Is It? The Art Mystery Podcast) was a strong topical fit for the new Saturn/Goya angle but failed the credentials bar the same way The Art Law Podcast did in the first run. Nothing here needs Owen's personal handling — this is a supply problem (thin, mostly-professional or intermittently-active niche), not a blocked-channel problem, so nothing was added to `待Owen处理事项.md`.

The Saturn Devouring His Son / Goya authorship-dispute angle above is unused and available for the next run that turns up a qualifying candidate.
