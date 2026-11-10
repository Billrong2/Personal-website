# Validation — 2026-11-10

Scope: original research additions and English/Chinese support in `Billrong2/Personal-website` only. Home, Life and Play received localization; their content and gameplay were not expanded. The six new research games are added alongside the original eighteen candidates.

## Static checks

- 30 HTML pages; 42 JavaScript script blocks/files passed Node syntax checks.
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

- CodeSteer: all 131 floor cells and four beacons reachable; 2,620 route traversals and 869,700 movement updates without stalls. All four wiring stages, wrong/partial/correct wiring, output 12, cancel, reset, collision, pause and language changes checked. Fixed restored-token captions and paused/reset interaction labels so they switch language correctly.
- AdaptAgent: all three districts, 81 module combinations, verification, delivery and reset checked.
- LλMDA: all three districts, context placement, type rejection, direct dependencies, traversal and projection checked.
- Behavioral Alignment: all four blocks, 24 signal pairs per block, agreement versus correctness, duplicate-source rejection, movement/input routes, portal progression and reset checked.
- PredEx: three railway programs finish with 11, 18 and 9; wrong routes preserve state; checkpoint rewind and replay checked.
- SAFEMIN: four fortresses, finite-domain counterexamples, accepted/rejected deletion, alternate cores, irreducibility and reset checked.

Browser interactions sampled every new game: CodeSteer click-to-walk, wrong and correct wiring, restored beacon and retained progress after EN/ZH; AdaptAgent module installation, passed fixtures and delivered patch; LλMDA context restoration and a powered dependency bridge; Alignment signal routing, verification and unlocked exit; PredEx safety brake, committed update and rewind; SAFEMIN rejected unsafe deletion and accepted safe removal. Each game's progress survived a language change.

Screenshots: [CodeSteer gameplay](preview/current-maze.png), [six-world gallery](preview/research-game-worlds.png).

## Language support

- First visit defaults to English; saved preference persists across navigation. Code syntax and user inputs are not translated.
- Shared-core regression covers reversible text/attribute translation, dynamic content, explicit target language, option values, saved preference, URL override and cross-tab events.
- Eight shared dictionaries contain 1,529 pairs and 97 patterns; separate game dictionaries/inline pairs cover the new worlds. No conflicting dictionary pairs found. Static audit of the original 24 pages found no unmapped Chinese copy in English mode.
- Browser verified homepage → Research → gallery preference persistence, bilingual search, and a correct challenge answer preserved during switching. Switching inside a comparison iframe synchronized all three candidates and their parent without reloading their interaction state.

Browser checks sample representative actions; complete game and story/challenge state traversal was checked separately in scripted fixtures. No claim of exhaustive cross-browser, real-phone, screen-reader or ultrawide QA. Examples are authored educational simulations, not reproduced paper experiments. GitHub Pages publication is not verified; its settings are outside the connector's exposed capabilities. No Faded Light audio recording is included.
