---
sidebar_position: 5
---

# Trade8:Feed — market data

The market-data tier: it ingests vendor quotes through pluggable
adapters (ITCH, IDC, crypto websocket, FIX-MD, simulation),
normalizes them into one internal event shape (L1 BBO, trades,
depth), and publishes to every consumer.

## Use cases

- **Vendor adapters** — each vendor plugs as an adapter; adding a
  data source is a new adapter, not a core change.
- **One event shape** — L1 BBO, trade prints, and depth normalize
  regardless of the source; Bars, the app, and analytics consume
  one shape.
- **Simulation** — the simulation adapter feeds deterministic test
  scenarios for strategy and P&L verification.

## Deep dive

[Feed reference](/docs/reference/feed/) — harvested from
`Trade8-dev/trade8-feed`.