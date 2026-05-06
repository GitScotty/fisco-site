---
layout: layouts/base.njk
title: Changelog
description: Release history for the FISCO model.
permalink: /changelog/
---

# Changelog

All notable changes to FISCO are listed here. Versioning follows [semantic versioning](https://semver.org/).

## v1.1.1 — 28 April 2026

### Added
- macOS-compatible Eurostat data-fetch macro (`EurostatUpdateMac`).
- Scenario loadable from Step 3 (Implementation) of the workflow.
- Run-timestamp written to cell B31 of the outturn sheet on each fetch.

### Changed
- Historical net-expenditure growth no longer defers to imputed implementation outlook by design (pulls latest from Eurostat per EC guidance as sole source of truth). See the [docs](/docs/) and the Code of Conduct (ECOFIN 16230/25) for the treatment of revisions.

## v1.0.0

First public release of the FISCO model.
