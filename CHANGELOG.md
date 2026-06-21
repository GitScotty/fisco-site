# FISCO changelog

All notable changes to the FISCO model are listed here. Versioning follows [semantic versioning](https://semver.org/).

## v1.1.4 — 2026-06-21

### Added
- Custom scenario tool, with a matching "Clear custom scenario tool" button.

## v1.1.3 — 2026-06-15

### Changed
- MTP parameters consolidated back into Step 1. Previous feedback had suggested relocating them to Step 3 to reduce clutter, but test feedback indicated this disrupted the logical flow of the setup workflow.

## v1.1.0 — 2026-04-28

### Added
- macOS-compatible Eurostat data-fetch macro (`EurostatUpdateMac`).
- Defence-clause scenario, loadable from Step 3 of the workflow.
- Run-timestamp written to cell B31 of the outturn sheet on each fetch.

### Changed
- Outturn data now pulled at the latest Eurostat vintage; historical net-expenditure growth no longer matches the Draft Budgetary Plan 2026 by design.

## v1.0.0

First public release of the FISCO model.
