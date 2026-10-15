---
sidebar_position: 6
---

# Trade8:Bars — OHLCV aggregation

The bar-aggregation engine: it consumes consolidated trade prints
(`trade8:feed:trade:printed`) and aggregates OHLCV bars at standard
intervals — 1s, 1m, 5m, 15m, 1h, 1d — serving both live charting
(intrabar snapshots) and historical series.

## Use cases

- **Live charting** — intrabar snapshots stream to the app as trades
  print; the forming bar is queryable at any instant.
- **Historical series** — closed bars persist as the historical
  series for backtesting and analytics.
- **Deterministic aggregation** — the same prints always produce the
  same bars; corrections replay cleanly.

## Deep dive

[Bars reference](/docs/reference/bars/) — harvested from
`Trade8-dev/trade8-bars`.