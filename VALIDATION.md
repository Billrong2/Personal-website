# Validation — 2026-11-11

Scope: original research additions and English/Chinese support in `Billrong2/Personal-website` only. Home, Life and Play received localization; their content and gameplay were not expanded. The six new research games are added alongside the original eighteen candidates.

## Static checks

- 30 HTML pages; 43 JavaScript script blocks/files passed Node syntax checks.
- 250 local href/src references resolve; no duplicate HTML IDs. All pages load the shared language control.
- Six catalog works each resolve to story, lab and challenge: 18 samples.
- Verified paper-to-title mapping, including AdaptAgent → arXiv:2608.04459 and Behavioral Alignment → arXiv:2609.26101.
- PredEx credits its actual first author, Yi Li, and identifies Bill as a coauthor.

## Functional checks

Implementation-level state checks cover all story branches and restarts, all six challenges through their six rounds with scoring/review/reset, and lab inputs/reset. Additional checks:

- Attention: 12 authored Python variants execute to their answer keys; distributions normalize; zero strength and uniform prior preserve the baseline.
- Alignment: ordering controls work; identical ranks give Spearman 1 and reversed ranks give −1.
- AdaptAgent: eight context combinations and their local assertion results checked.
- LλMDA: reconstruction switches, type inconsistency and projection change the authored graph as expected.
- PredEx: mixed, nonpositive and empty inputs; step state and Python-style numeric display checked.
- SAFEMIN: six finite-string constraint sets are initially UNSAT; proposed removals and irreducibility checked by enumerating all 49 assignments.

## Original candidate browser checks

- Navigated from the homepage to Research and the gallery.
- Loaded all 18 samples in the comparison interface; reviewed desktop and approximately 400px-wide iframe presentation.
- Performed representative lab and challenge interactions for all six works, plus a story branch.
- Checked search (one work/three samples), year filter (2025: two works/six samples), selection persistence across reload, deselection and JSON export.
- Visually inspected the full-width attention laboratory; [preview](preview/research-lab.png).

## Six new game worlds

Implementation-level tests execute the actual game scripts in minimal DOM/canvas fixtures; these are logic checks, not browser rendering tests.

- Code Steer was rebuilt on November 11; the new checks are listed below. The earlier four-beacon wiring checks no longer describe its current mechanics.
- AdaptAgent: all three districts, 81 module combinations, verification, delivery and reset checked.
- LλMDA: all three districts, context placement, type rejection, direct dependencies, traversal and projection checked.
- Behavioral Alignment: all four blocks, 24 signal pairs per block, agreement versus correctness, duplicate-source rejection, movement/input routes, portal progression and reset checked.
- PredEx: three railway programs finish with 11, 18 and 9; wrong routes preserve state; checkpoint rewind and replay checked.
- SAFEMIN: four fortresses, finite-domain counterexamples, accepted/rejected deletion, alternate cores, irreducibility and reset checked.

The earlier browser pass sampled the five unchanged games: AdaptAgent module installation, passed fixtures and delivered patch; LλMDA context restoration and a powered dependency bridge; Alignment signal routing, verification and unlocked exit; PredEx safety brake, committed update and rewind; SAFEMIN rejected unsafe deletion and accepted safe removal. Each game's progress survived a language change.

## Code Steer: manual backward-slice revision

- The page and gallery use the paper name **Code Steer**. The current maze is an explorable setting, not a replacement paper title.
- Twelve initially masked stations plus return occupy 131 reachable floor cells. All 169 station-to-station routes were checked with the movement implementation. Low-frame-rate movement now uses bounded substeps instead of slowing walking to a crawl.
- Four groups require five explicit connections: accumulator → return; condition → update; current value → update; current value → condition; input → loop. Inspection and value binding alone cannot connect ports or advance a group.
- `node --test tests/code-steer.test.cjs`: eight tests passed. They cover execution on 200 varied inputs, hidden future stations, no automatic connections, wrong observed values, every candidate against its fixed read/write relation, both operand ports, same-valued decoys, manual unplug/replacement, and invariance of execution under arbitrary rejected guesses.
- The displayed full Python program was independently executed on 200 varied inputs and matched the reference even-input sum.
- Browser playthrough rejected a parallel accumulator that also computes 12 because return does not read its identifier. Unplugging removed the rejected hypothesis. A fresh complete playthrough manually bound and connected all five edges; connecting only one of the two operand ports left the test button disabled. Completion showed 5/5 and the unchanged output 12; Restart returned to 0/5, unknown stations and unconnected ports.
- EN/ZH switching retained progression, inspected fragments, inputs and draft/error state. The renamed gallery card was checked. The complete browser playthrough used click-to-patch controls; native drag-and-drop and real touch devices have not been verified.
- Unknown stations and open consumer ports do not expose a correct route. Amber/red lines represent the visitor's untested/rejected hypothesis; green lines appear only after verified manual connections. Identifier obfuscation never changes the actual program, dependencies or output. Alias labels are inferred roles, not recovered original variable names. The finite example explicitly omits loop-carried accumulator edges.

Screenshots: [CodeSteer gameplay](preview/current-maze.png), [six-world gallery](preview/research-game-worlds.png).

## Language support

- First visit defaults to English; saved preference persists across navigation. Code syntax and user inputs are not translated.
- Shared-core regression covers reversible text/attribute translation, dynamic content, explicit target language, option values, saved preference, URL override and cross-tab events.
- Eight shared dictionaries contain 1,529 pairs and 97 patterns; separate game dictionaries/inline pairs cover the new worlds. No conflicting dictionary pairs found. Static audit of the original 24 pages found no unmapped Chinese copy in English mode.
- Browser verified homepage → Research → gallery preference persistence, bilingual search, and a correct challenge answer preserved during switching. Switching inside a comparison iframe synchronized all three candidates and their parent without reloading their interaction state.

Browser checks sample representative actions; complete game and story/challenge state traversal was checked separately in scripted fixtures. No claim of exhaustive cross-browser, real-phone, screen-reader or ultrawide QA. Examples are authored educational simulations, not reproduced paper experiments. GitHub Pages publication is not verified; its settings are outside the connector's exposed capabilities. No Faded Light audio recording is included.
