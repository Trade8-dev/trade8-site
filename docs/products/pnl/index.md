---
sidebar_position: 7
---

# Trade8:Pnl - day profit & loss

The day profit-and-loss engine: a pure bus consumer that rebuilds
positions and P&L deterministically from fill events
(`trade8:router:fill:executed`) and opening balances.

## Use cases

- **Deterministic P&L** - the same fills and opening balances always
  produce the same day P&L; rebuilds are replay, not recompute.
- **Live positions** - the working position state updates as fills
  arrive; the app's positions surface reads it.
- **Day boundaries** - the trading day closes through scheduled
  platform work; opening balances carry to the next session.

## Full documentation

The complete detail lives in this product's sub-pages:

- [Architecture (DDD)](design) - the full document, harvested from the unit's repository at build time.
- [Business rules (BRD)](business) - the full document, harvested from the unit's repository at build time.
- [Security](security) - the full document, harvested from the unit's repository at build time.
- [Overview (repo README)](/docs/reference/pnl/) - the maintainer's README in the consolidated reference section.

