# Corrected review

- All 18 task prompts were extracted only up to the PDF Answer label, then checked against their PDF page and question numbers.
- Restored blank lines in HTTP message examples, preserving the empty line between headers and body.
- Restored WEBVTT blank lines after its signature and between cues.
- Restored the multi-page task answer to root-relative links and /about/ as required. Its source folder can be served as an isolated web root. Deployed previews use a separate path adapter.
- Removed the duplicate base element introduced in the old fixed.html; the original PDF already contains a base element.
- Displayed source and source downloads agree exactly. Every exercise has a source subfolder holding its unmodified answer (except the explicit unverified-evidence notice added to report.html).
- Kept the GET/POST question and answer exactly as provided in the PDF, alongside the comparison table.
- HTTP-message and archive tasks remain alternative examples because their textbook listings are absent. Exact correspondence needs Listings 2.2, 2.4, 3.2 and 3.7.
- The validation report is explicitly unverified. Its numeric claims cannot be certified without the saved original and validator output.
- Media assets are illustrative additions, not supplied course lecture recordings.

This revision is a source-and-code correction; it does not silently certify absent textbook evidence or validator results.
