---
layout: layouts/base.njk
title: Changelog
description: Release history for the FISCO model.
permalink: /changelog/
---

# Changelog

All notable changes to FISCO are listed here. Versioning follows [semantic versioning](https://semver.org/).

## v1.3.0 — 28 April 2026

### Added
- macOS-compatible Eurostat data-fetch macro (`EurostatUpdateMac`).
- Defence-clause scenario, loadable from Step 3 of the workflow.
- Run-timestamp written to cell B31 of the outturn sheet on each fetch.

### Changed
- Outturn data now pulled at the latest Eurostat vintage; historical net-expenditure growth no longer matches the Draft Budgetary Plan 2026 by design. See the [docs](/docs/) and the Code of Conduct (ECOFIN 16230/25) for the treatment of revisions.

## v1.2.0 — earlier

Initial public release.
