# Validation — 2026-11-10

Scope: original research additions in `Billrong2/Personal-website` only. The home, Life and Play sources remain unchanged from the initial site upload.

## Static checks

- 24 HTML pages; 26 JavaScript script blocks/files passed Node syntax checks.
- 166 local href/src references resolve; no duplicate HTML IDs.
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

## Browser checks

- Navigated from the homepage to Research and the gallery.
- Loaded all 18 samples in the comparison interface; reviewed desktop and approximately 400px-wide iframe presentation.
- Performed representative lab and challenge interactions for all six works, plus a story branch.
- Checked search (one work/three samples), year filter (2025: two works/six samples), selection persistence across reload, deselection and JSON export.
- Visually inspected the full-width attention laboratory; [preview](preview/research-lab.png).

The browser samples representative actions; complete story/challenge state traversal was checked separately in scripted DOM tests. No claim of exhaustive cross-browser, real-phone or ultrawide QA. Examples are authored educational simulations, not reproduced paper experiments. GitHub Pages publication is not verified; its settings are outside the connector's exposed capabilities.
