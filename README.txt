ShotS — 2-Mark Revision Website
================================

Run:
1. Extract the ZIP.
2. Open index.html in Chrome, Edge, Firefox, or Safari.
   (No npm, server, or installation required. It works offline.)

Files:
- index.html — website structure
- style.css — responsive minimalist styling and animations
- app.js — search, filtering, reveal, favorites, progress, theme, shuffle
- data.js — Q&A extracted from your five uploaded TXT files

Features:
- Pure white / black-outline minimalist interface
- Questions in red, answers in blue, examples in pink with italic serif font
- Mobile-friendly responsive layout
- Search across questions, answers, and examples
- Subject and unit filters
- Reveal/hide answers
- Mark mastered and favorite questions
- Local progress saved in your browser (localStorage)
- Shuffle questions, sort A–Z, dark mode
- Keyboard shortcut Ctrl/⌘ + K to focus search

Important data note:
Your supplied files currently contain 345 questions, not 375:
- DL: 75 (5 units)
- EMI: 60 (4 units; Unit V is not present in the uploaded TXT)
- HR: 75 (5 units)
- PCMC: 75 (5 units)
- SADP: 60 (4 units; Unit III is missing from the uploaded TXT)
Total = 345 questions across 23 units.
The website includes the source data as provided and does not invent the missing 30 questions.

To update questions later:
- Edit the corresponding subject's questions in data.js, or regenerate it from updated TXT files.
- Keep the same object structure (subject → units → questions).
