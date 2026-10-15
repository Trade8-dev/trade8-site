---
sidebar_position: 7
---

# Trade8:Pnl — day profit & loss

The day profit-and-loss engine: a pure bus consumer that rebuilds
positions and P&L deterministically from fill events
(`trade8:router:fill:executed`) and opening balances.

## Use cases

- **Deterministic P&L** — the same fills and opening balances always
  produce the same day P&L; rebuilds are replay, not recompute.
- **Live positions** — the working position state updates as fills
  arrive; the app's positions surface reads it.
- **Day boundaries** — the trading day closes through scheduled
  platform work; opening balances carry to the next session.

## Deep dive

[Pnl reference](/docs/reference/pnl/) — harvested from
`Trade8-dev/trade8-pnl`.