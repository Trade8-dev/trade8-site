---
sidebar_position: 2
---

# Trade8:Desk — order management

The order-management core of the vertical: it owns the order
lifecycle (submit → validate → authorize → accept → route → track →
terminal) and the working-order state — one authoritative state
machine per order.

## Use cases

- **Order lifecycle** — every mutation flows through the same
  state machine; terminal states never regress (guarded updates).
- **Authorize before accept** — Desk calls Risk over a direct TLS
  path before accepting any mutation — buying power and exposure
  are checked synchronously.
- **Routing handoff** — accepted orders emit
  `trade8:desk:order:accepted`; Router consumes and executes.
- **Blotter truth** — the working-order state feeds the eTrader
  blotter; fills project in as Router reports them.

## Deep dive

[Desk reference](/docs/reference/desk/) — README, DESIGN, BUSINESS
harvested from `Trade8-dev/trade8-desk`.