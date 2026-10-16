---
sidebar_position: 6
---

# Trade8:Bars - OHLCV aggregation

The bar-aggregation engine: it consumes consolidated trade prints
(`trade8:feed:trade:printed`) and aggregates OHLCV bars at standard
intervals - 1s, 1m, 5m, 15m, 1h, 1d - serving both live charting
(intrabar snapshots) and historical series.

## Use cases

- **Live charting** - intrabar snapshots stream to the app as trades
  print; the forming bar is queryable at any instant.
- **Historical series** - closed bars persist as the historical
  series for backtesting and analytics.
- **Deterministic aggregation** - the same prints always produce the
  same bars; corrections replay cleanly.

## Full documentation

The complete detail lives in this product's sub-pages:

- [Architecture (DDD)](design) - the full document, harvested from the unit's repository at build time.
- [Business rules (BRD)](business) - the full document, harvested from the unit's repository at build time.
- [Security](security) - the full document, harvested from the unit's repository at build time.
- [Overview (repo README)](/docs/reference/bars/) - the maintainer's README in the consolidated reference section.

