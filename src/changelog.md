---
layout: layouts/base.njk
title: Changelog
description: Release history for the FISCO model.
permalink: /changelog/
---

# Changelog

All notable changes to FISCO are listed here. Versioning follows [semantic versioning](https://semver.org/).

## v1.1.3 — 15 June 2026

### Changed
- MTP parameters consolidated back into Step 1. Previous feedback had suggested relocating them to Step 3 to reduce clutter, but test feedback indicated this disrupted the logical flow of the setup workflow.

## v1.1.2 — 8 June 2026

### Added
- "Clear all data" button on Step 1 (Set global parameters), resetting all user inputs in a single click.
- "Clear outturn data" button on Step 2 (Update outturn data).
- "Clear outlook" button on Step 3 (IMPL) (Enter outlook).
- "Clear MTP and prior guidance" button on Step 3 (MTP) (Plan and prior).
- "Select country" placeholder added as the default state of the country dropdown, making it explicit when no country has been selected.
- Test scenario files for Latvia and Greece: Scenario 0 (Medium-Term Plan 2024–2028), for demonstrating MTP assessment workflow.

### Added (site)
- New Instructions page section: end-to-end MTP assessment and implementation monitoring workflow, with Latvia APR 2026 tutorial video.

## v1.1.1 — 28 April 2026

### Added
- macOS-compatible Eurostat data-fetch macro (`EurostatUpdateMac`).
- Scenario loadable from Step 3 (Implementation) of the workflow.
- Run-timestamp written to cell B31 of the outturn sheet on each fetch.

### Changed
- Historical net-expenditure growth no longer defers to imputed implementation outlook by design (pulls latest from Eurostat per EC guidance as sole source of truth). See the [resources](/resources/) and the Code of Conduct (ECOFIN 16230/25) for the treatment of revisions.

## v1.1.0

First public release of the FISCO model.
