# UmberLore linkable-asset log

Record of assets produced/updated by `trafficsite-linkable-asset-building`, plus unlinked-mention recovery and pitch outcomes. See `linkable-asset-backlog.md` for the point list this draws from.

## 2026-08-22 — When Was the Masterpiece Made? What 64 Famous Paintings Say About Peak Creative Age

**Step 1 (asset)**: Published backlog item #5 ("数据研究：艺术家'创作巅峰年龄'统计") as [https://umberlore.com/artist-peak-creation-age/](https://umberlore.com/artist-peak-creation-age/). This is UmberLore's first asset since the site's 2026-08-02 launch and its first "Data Studies" category page.

- Dataset: 64 canonical paintings (15th-20th century, spanning Early Netherlandish through Pop Art). For each: artist birth year, death year, work completion year, movement/nationality, source link. Every birth/death/completion year was verified with a live WebSearch call by an independent research agent (not recalled from model memory) against Wikipedia, museum collection pages, or Britannica; where sources gave a range for completion, the later year was used and flagged with an asterisk; two artists (van Eyck, Titian) have approximate birth years flagged with a dagger per the historical record; Gentileschi's death year is flagged as approximate (last documented commission January 1654). I independently recomputed all aggregate stats from the raw per-row data with a Python script rather than trusting the research agent's arithmetic — confirmed exact match.
- Headline number (coreSummary, meets the building task's hard spec for original data research): median age at creation 39.5 (mean 41.6), range 20 (Artemisia Gentileschi, *Judith Slaying Holofernes*) to 71 (Katsushika Hokusai's *The Great Wave off Kanagawa* and Piet Mondrian's *Broadway Boogie Woogie*, tied). Only 11% of the 64 artists made their best-known work in the final 5 years of life; 56% made it 20+ years before they died.
- Cite this block + CSV download (`public/data/artist-peak-creation-age.csv`, 64 rows) both present per spec.
- Category: new "Data Studies" (UmberLore's other categories are Painting/Movements/Technique/Non-Western Art/Architecture/Sculpture/Photography; this is the first data-research piece, so no existing category fit).
- QA: `npm run build` passed (57 pages, structured data — Article/FAQPage/BreadcrumbList — all valid JSON-LD, checked programmatically). Prose (all section body text + FAQ answers, not the data table or CSV) passed `Skill(humanizer)` and `Skill(avoid-ai-writing)` self-review — caught and fixed: two tailing-negation fragments ("not exact", "not the rule"), a digit-starting sentence, an ungrammatical negation in the meta description, and two self-referential FAQ links pointing back at the same page (removed — a page linking to itself serves no purpose). A curly-quote find/replace pass on the new entry accidentally broke JSON string escaping (unescaped straight quotes inside already-quoted strings) — caught immediately by a broken `npm run build`, fixed by properly escaping with `\"`, rebuilt clean. This isn't an interactive tool, so the additional "operate it in a browser" verification step doesn't apply; verified the live deploy instead (see below).
- Commit `03e5949`, pushed to `main`. UmberLore has no CF deploy hook (deploys automatically on push, like the rest of the traffic-site matrix); confirmed live via a Monitor-polled curl loop — `/artist-peak-creation-age/` returns 200 with the headline stat present in the HTML, and `/data/artist-peak-creation-age.csv` returns 200.
- Backlog updated: item #5 now `[已发布]`.

**Step 2 (unlinked-mention recovery)**: Searched `"umberlore.com" -site:umberlore.com` and `"umberlore.com" OR "artist-peak-creation-age" -site:umberlore.com` — no results referencing the site at all (expected; the page is hours old and not yet indexed). No recovery opportunity this round. Will need to re-check in a future run once the page has had time to be crawled/cited.

**Step 3 (pitch)**: Researched the general "at what age does creativity peak" space via WebSearch — found this is a well-covered topic (an economist's 42-year Nobel-laureate/composer/painter average is widely cited by Fast Company, Salon, Pacific Standard, Inc, Psychology Today, Quartz, going back to 2013-2019 pieces). Rather than pitch stale articles with no clear author contact, found CreativeLive's own blog post on the same topic ("When Do You Hit The Peak of Your Creativity?", creativelive.com/blog/hit-peak-creativity) with a live, real submission channel (blogsubmissions@creativelive.com, per their own "Write for Us" page). Drafted a guest-post pitch offering the new dataset as a follow-up angle. One earlier draft claimed the CreativeLive piece specifically cites "the 42-year figure" — cut before finalizing because WebSearch could not confirm that number actually appears in that specific article (the 42-year stat surfaced from other outlets covering the same general topic, not confirmably CreativeLive's own citation); rather than risk misattribution, the email was narrowed to only claim things about UmberLore's own data. Passed `Skill(humanizer)` + `Skill(avoid-ai-writing)` self-review, then a fresh-context independent review agent (checked: no prior contact via `gmail_send.py list` + all outreach logs; every number traced directly to the source guide entry; tone/template check; recipient legitimacy via WebSearch) returned "VERDICT: can send". Sent 2026-08-22 via `gmail_send.py --from umberlore` to blogsubmissions@creativelive.com, Message ID `1a0280c883d8012d`. Full text in `outreach-drafts.md` under "Pitch 7 — CreativeLive Blog".

**Step 3.5 (discovery-platform placement)**: Evaluated Show HN — decided against it. This is a data-journalism content page (art history statistics), not a technical build a Hacker News audience would find intrinsically interesting, and submitting it risks reading as SEO/content-marketing self-promotion, which HN penalizes hard. Did not find a genuine, on-topic non-Reddit community (Discord/Slack/forum) for visual-art-history data content within this run's time budget — the closest fit found (a Quora thread asking why artists' careers peak by 30) would require creating a Quora account to answer, which is out of scope for an unattended run. No platform placement made this round; worth re-evaluating for a future asset with a more HN-native format (e.g., an interactive tool) or if a specific art-history community turns up in a later run.

**Commit**: this log + backlog status update committed and pushed separately from the asset commit, per the "commit each site's log files as you go" rule.

---

## 2026-08-29 — distribution pass #2 (capacity-concentration rule)

**Site selection**: this run applied the "🎯 外链产能集中规则" — recomputed 28-day 11-30-position impressions across all 10 traffic sites, excluded the three suppressed by the algorithmic spam update (CalcBadger 2, DialWick 495, LingoGrove 100 — all in the observation window). Ranking of the rest: WageLark (532) > DayAlmanac (303) > **UmberLore (236)** > FactCrumbs (113) > MythCairn (84) > WarCrumbs (39) > Hollowvane (10). UmberLore is in this run's top-3 capacity allocation.

**Order of work**: per the 2026-08-28 "distribution before new production" directive, this run prioritized continuing distribution of UmberLore's one existing published asset (the peak-creation-age data study, one prior pitch already sent to CreativeLive) over building a new one from the backlog.

**Step 2 (unlinked-mention recovery)**: WebSearch `"umberlore.com" OR "artist-peak-creation-age" -site:umberlore.com` — no results referencing the site (still expected; page is a week old). No recovery opportunity this round.

**Step 3 (pitch)**: found gitnux.org's "120+ Artist Statistics" page — a citation-per-line stats roundup with no existing entry on creative peak age. Drafted and sent a pitch offering the dataset as a new, sourced stat (see `outreach-drafts.md` for full text and verification detail). Passed `Skill(humanizer)` and `Skill(avoid-ai-writing)` unmodified. Independent fresh-context review agent verified every number against the live page, confirmed no overlapping stat already existed on gitnux's page, confirmed the contact address is a general (not scoped) inbox, and returned "CAN SEND". Sent 2026-08-29 via `gmail_send.py send --from umberlore` → info@gitnux.org, Message ID `1a04c0eafa71a0e8`.

**Step 3.5 (discovery-platform placement)**: not re-evaluated this run — the 2026-08-22 evaluation (Show HN rejected as ill-fitting for a data-journalism page; no genuine non-Reddit community found in budget) still stands and nothing has changed since. Separately, `reddit-投放候选清单.md` already lists this asset as candidate 3 (lower priority than the WarCrumbs/Hollowvane candidates, needs a standalone chart before it's [OC]-ready for r/dataisbeautiful) — no action needed from this task, that's the Reddit-candidate-list owner's queue.

**Distribution count**: 2/10 targets pitched so far (CreativeLive 2026-08-22 + gitnux.org 2026-08-29). Below the ≥10-target saturation bar — continue distribution on future runs before considering a new asset for this site.

---

## 2026-09-01 — distribution pass #3 (capacity-concentration rule)

**Site selection**: recomputed 28-day 11-30-position impressions across all 10 traffic sites: dialwick(766) / dayalmanac(627) / wagelark(596) / **umberlore(344)** / mythcairn(118) / factcrumbs(114) / lingogrove(114) / warcrumbs(41) / hollowvane(10) / calcbadger(2). Excluded the three sites still in the algorithmic-suppression observation window (CalcBadger, DialWick, LingoGrove — confirmed unresolved per `流量站矩阵风险应对追踪.md`). Ranking of the rest: DayAlmanac(627) > WageLark(596) > **UmberLore(344)**, consistent with 8/29. UmberLore is in this run's top-3 allocation.

**Order of work**: continued distribution of the one published asset (peak-creation-age data study; distribution count 2/10 going in) rather than building a new backlog item.

**Step 2 (unlinked-mention recovery)**: WebSearch `"umberlore.com" OR "artist-peak-creation-age" -site:umberlore.com` — no results referencing the site. No recovery opportunity this round (page is ~6 weeks old, still not showing up in citation searches).

**Step 3 (pitch)**: Searched for a third pitch target — art-history stats aggregators and education blogs. Candidates considered: oldest.org's "Youngest Artists in History" list (topically adjacent but no visible contact email on /about-us/ or /contact/, only a form); large museum/publication press desks (Whitney, Artsy, ARTnews, Art Institute of Chicago) — all have real press emails, but those are scoped media-relations channels for journalists asking about the institution's own exhibitions and programming, not a fit for an outside content-marketing data pitch (misusing a scoped channel this way risks reading as spam and burning a legitimate contact for a future genuine use). No qualified, reachable, on-topic target found this round. Recording this honestly rather than forcing a form submission or a mismatched press-desk email.

### Step 3.5 (discovery-platform placement)

Not re-evaluated — 8/22 and 8/29 conclusions stand (Show HN ill-fitting for a data-journalism page; `reddit-投放候选清单.md` still lists this as candidate 3, needs a standalone [OC] chart before it's ready, not this task's queue to build unprompted).

### Distribution count

Still 2/10 (no new target found this round). Continue on future runs.

---

## 2026-09-12 — distribution pass #4 (capacity-concentration rule)

**Site selection**: recomputed 28-day 11-30-position impressions across the 7 non-suppressed traffic sites (excluding CalcBadger/DialWick, which get a fixed priority slot instead of exclusion per the 2026-09-04 revision, and LingoGrove, still excluded as ranking-suppressed): umberlore(563) > wagelark(328) > mythcairn(67) > factcrumbs(38) > dayalmanac(33) > hollowvane(14) > warcrumbs(10). DialWick took this run's fixed priority slot (never processed by this task before). UmberLore is #1 of the remaining top-3.

**Order of work**: continued distribution of the one published asset (peak-creation-age data study; distribution count 2/10 going in, from CreativeLive 8/22 and gitnux.org 8/29) rather than building a new asset.

**Step 2 (unlinked-mention recovery)**: WebSearch `"umberlore.com" OR "artist-peak-creation-age"` — no results referencing the site. No recovery opportunity this round.

**Step 3 (pitch)**: found zipdo.co, a statistics-aggregator site (same category as gitnux.org) with a live "Global Creative Industry Statistics" report page that has no existing stat on age/peak-creativity. Drafted a pitch offering the dataset; independent review agent verified every number against the live page, confirmed the target page and contact (info@zipdo.co) are real and live, confirmed no dedup conflict, and returned CAN SEND.

**Step 3.5**: not re-evaluated — 8/22 and 8/29 conclusions stand.

**Not sent**: withheld per the SES migration freeze (see `独立站/待Owen处理事项.md`) — the 14 matrix domains' Gmail "Send mail as" still routes through Mailjet, which Mailjet has told Owen it no longer permits. Drafted and reviewed (CAN SEND), stored in `outreach-drafts.md`, marked `drafted_blocked_by_ses_migration`.

**Distribution count**: 2/10 sent + 1/10 drafted-and-approved-but-withheld = 3 targets identified so far. Still below the ≥10-target saturation bar.

---

## 2026-09-15 — new asset built (monthly quota, capacity-concentration rule)

**Site selection**: recomputed 28-day 11-30-position impressions across all 10 traffic sites via `gsc_query.py`: umberlore(588) / wagelark(323) / dialwick(204) / lingogrove(68) / mythcairn(63) / dayalmanac(39) / factcrumbs(26) / hollowvane(16) / warcrumbs(13) / calcbadger(1). Excluded LingoGrove (still ranking-suppressed) and DialWick (frozen 2026-09-13 per Owen decision — "所有走大模型的任务跳过" — this task involves LLM-drafted content, so DialWick was skipped entirely rather than given the fixed priority slot; CalcBadger took that slot instead as the more-overdue of the two compressed sites, last processed by this task 2026-08-18). UmberLore ranked #1 of the remaining non-suppressed sites this run.

**Order of work**: monthly-minimum rule (2026-09-13 addendum) triggered — today is 2026-09-15 (≥15th), and UmberLore had published zero new assets this calendar month (the one published asset, peak-creation-age, dates to 8/22). Per the rule, this run moved to Step 1 (creation) for UmberLore instead of continuing distribution-only.

**Asset built**: backlog item #2, "Open-License Art Image Directory" (终极合集页), chosen over item #11 (Art Market Statistics 统计枢纽) because the latter's primary source is a paid PDF report (Art Basel & UBS Global Art Market Report) not accessible for direct verification, while item #2 uses only institutions' own public policy pages. Researched licensing terms for 10 major open-access programs (Met, Rijksmuseum, Art Institute of Chicago, Smithsonian, Cleveland Museum of Art, Getty, National Gallery of Art, Paris Musées, British Museum, Wikimedia Commons) via WebSearch against each institution's own terms/FAQ page. Headline citable stat: "9 of 10 institutions release CC0; only the British Museum licenses under CC BY-NC-SA 4.0 (non-commercial, attribution required)" — this is the differentiating value versus generic "free museum image" roundups, which routinely conflate CC0 with more restrictive licenses. Built as a new guide entry (category "Resources") following the site's established inline-styled-table pattern (same technique as the already-published artist-peak-creation-age asset, confirmed safe against the known Astro-scoped-CSS-doesn't-reach-set:html-content pitfall). Includes a comparison table, a separate caveats table, an FAQ (4 Q&As), and a Cite-this block.

**Verification**: `npm run build` (88 pages, no errors) + `npm test` (17/17 pass). Removed 5 em dashes from the first draft during a self-review pass for the humanizer/avoid-ai-writing em-dash rule (none of the other checked AI-tell phrases — negative parallelism, "it is worth noting," inflated vocabulary — were present). `Skill(google-spam-compliance)` self-review: PASS on all 11 categories (one-off page, not template-variable; all sourcing from institutions' own official pages, not copied from other roundups; no hidden text/keyword stuffing; no functionality claims to overstate; AI-content check borderline-but-pass — a "free image sources" list is a commodity content shape, but the caveats table's precise CC0-vs-non-commercial distinction is the added-value differentiator most competing pages get wrong). Deployed (commit `c559e64`, Cloudflare Pages build succeeded in 27s), live-verified via cache-busted curl: 200, 2 tables present, all 10 terms links resolve to the correct institutions, British Museum correctly flagged as CC BY-NC-SA. IndexNow submitted to Bing + Yandex (both 200).

**Verification limitation, disclosed**: of the 10 linked terms pages, 6 were curl-confirmed 200 (commons.wikimedia.org, data.rijksmuseum.nl, clevelandart.org, getty.edu, parismuseescollections.paris.fr). The other 4 (artic.edu, britishmuseum.org, metmuseum.org, nga.gov, si.edu — 5 actually) returned 403/429 to curl even with a descriptive UA, consistent with institutional-site WAF/bot-blocking rather than broken links — each URL came directly from a WebSearch result whose title matched the expected official page exactly (e.g. "Copyright and permissions | British Museum," "Open Access FAQ | Smithsonian Institution"). Treated as verified-by-search-index-match but not curl-200-confirmed; flagged here rather than silently claiming full verification. Recommend a future run with browser access re-check these 5 directly.

**Distribution (steps 2/3/3.5) for this new asset**: not executed this run — the asset was pushed and deployed near the end of the session; per "分发优先于新产" the next run processing UmberLore should do steps 2 (unlinked-mention recovery) and 3 (pitch targets — resource pages maintained by design-blog/education/library-guide editors are the natural target class for this specific asset, per the general CLAUDE.md guidance on editorial resource pages) for this new URL before continuing distribution on the existing peak-creation-age asset (still at 2/10 sent + 1/10 drafted-but-withheld).

**Distribution for the existing asset (peak-creation-age)**: not attempted this run — session time was spent entirely on the new-asset build per the monthly-quota rule. Distribution count unchanged at 2/10 sent + 1/10 drafted-and-withheld.

---

## 2026-09-22 — distribution pass #5 (capacity-concentration rule)

**Site selection**: recomputed 28-day 11-30-position impressions across the 7 non-suppressed traffic sites via `gsc_query.py`: umberlore(605) > wagelark(472) > dayalmanac(427) > mythcairn(406) > factcrumbs(88) > hollowvane(25) = warcrumbs(25). DialWick took this run's fixed priority slot (per rotation, less recently processed than CalcBadger); LingoGrove excluded (still ranking-suppressed). UmberLore ranked #1.

**Order of work**: distribution for both published assets — the SES migration freeze lifted 2026-09-15, clearing a backlog of approved-but-withheld pitches, plus first-ever distribution for the 2026-09-15 asset (open-license-art-image-directory).

**Peak-creation-age asset — cleared backlog**: sent the two pitches drafted 2026-08-29/09-12 that were approved by independent review but withheld only for the SES freeze: (1) Sartle follow-up nudge to info@sartle.com (re-verified no reply since 8/20, no content change), Message ID `1a0c79e4b4d315d8`; (2) ZipDo pitch to info@zipdo.co (re-verified page still live, numbers unchanged), Message ID `1a0c79e5f76278df`. Distribution count for this asset: 2 sent (8/22-8/29) + 2 now sent (Sartle follow-up doesn't count as a new target, it's a nudge on an existing one; ZipDo is a new target) = 3 distinct targets sent (CreativeLive, gitnux.org, ZipDo) + 1 follow-up nudge.

**Open-license-art-image-directory — first distribution pass**: Step 2 (WebSearch `"umberlore.com" open license art image directory`) found no third-party mentions — no recovery opportunity. Step 3: found Douglas College Library's "Find Open Images" research guide (guides.douglascollege.ca/images) as a target — a LibGuide listing free/open image sources. Drafted a pitch claiming the guide already covered "Met, Smithsonian, Getty, National Gallery" and was missing Rijksmuseum/Cleveland/Paris Musées. **Independent review caught a real problem**: fetched the actual guide page and found the claim was wrong for 3 of 4 named institutions — Met has zero mentions, Smithsonian is mentioned only for an unrelated biodiversity project, Getty is mentioned only as a paid stock-photo source (the opposite of an open-access program); only National Gallery and Wikimedia were genuinely covered. Rewrote the opening line to claim only what was verified true, dropping the false claims about Met/Smithsonian/Getty. Sent corrected version to villavicenciog@douglascollege.ca (the guide's own "Report a problem" contact), Message ID `1a0c7a472f21aaa4`. Full detail in `outreach-drafts.md`.

**Step 3.5 (discovery-platform placement)**: not re-evaluated this run — prior conclusions stand for both assets.

**Distribution counts**: peak-creation-age at 3 sent targets + 1 follow-up (below the ≥10 saturation bar, continue on future runs); open-license-art-image-directory at 1 sent target (just started, far from saturation).

**Lesson for future runs**: this round's near-miss (a pitch that misrepresented the recipient's own page) is a reminder that "the asset's own published research is accurate" does not mean "my assumption about what the target page covers is accurate" — the independent-review step exists precisely to catch exactly this kind of claim, and it did its job. Verify claims about the *recipient's* page as rigorously as claims about the asset itself, not just self-consistency.
