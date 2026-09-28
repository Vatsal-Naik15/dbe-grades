# DBE Grades

A simple grade calculator for IIMB BBA DBE students.

**Use it here: https://vatsal-naik15.github.io/dbe-grades/**

Paste your Moodle grades page and see your CGPA, SGPA, average marks (WAM) and grades by term. Retakes are counted the way Moodle does it: your better CLA and your better final exam are kept separately and added together.

- Try a retake score and see how it changes your grade and CGPA
- Plan which retakes would get you to a target CGPA
- Your grades stay on your device. Nothing is uploaded.

## Updating courses

All courses live in [`courses.js`](courses.js): one line per course with its term, code, name, credits, the batches that take it, and whether it's project-based. Edit it on GitHub and the site updates in about a minute. A course that isn't listed still works: students pick its credits (1.5, 3 or 4.5) on the site.

Unofficial tool. Your official transcript is what counts.

Created by Vatsal Naik, BBA DBE Batch 2025.
