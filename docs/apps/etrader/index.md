---
sidebar_position: 1
---

# eTrader - the professional trading app

The professional trading experience: order-entry tickets, the
working blotter, market-data watchlists, positions, and day P&L -
through the BFF proxy like every platform app.

## What it demonstrates

- **Thin by design** - no broker protocols in the app: order entry
  rides Desk's API; fills stream over the SSE subscription tier.
- **Live risk awareness** - buying power and limit state surface
  live; a trader's capabilities derive from live Shield decisions.
- **Deterministic P&L view** - the day P&L the trader sees is the
  Pnl engine's replay-derived truth, not a client-side recompute.

## Full documentation

The complete detail lives in this product's sub-pages:

- [Business rules (BRD)](business) - the full document, harvested from the unit's repository at build time.
- [Security](security) - the full document, harvested from the unit's repository at build time.
- [Overview (repo README)](/docs/reference/etrader/) - the maintainer's README in the consolidated reference section.

