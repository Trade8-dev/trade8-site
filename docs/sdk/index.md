---
sidebar_position: 1
---

# trade8 Rust SDK

The shared vertical plane: fixed-point Price/Qty math, protocol
codecs, the event contracts (order/fill/print), and typed clients —
consumed by every trade8 service and by external integrators as a
pinned git tag.

```rust
use trade8_sdk::math::PriceQty;
use trade8_sdk::events::{OrderAccepted, FillExecuted};
```

## What's in the plane

| Import path | Role |
|---|---|
| `trade8_sdk::math` | fixed-point Price/Qty arithmetic (no float drift) |
| `trade8_sdk::events` | the order/fill/print event contracts |
| `trade8_sdk::clients` | typed clients over the service APIs |
| `trade8_sdk::strategies` | strategy harness contracts for backtesting |

## Why a shared plane

Every trade8 service links the same math and contracts — a fill
reported by Router, journaled by Desk, aggregated by Pnl, and drawn
by eTrader carries bit-identical numbers end to end. The SDK plane
is the single source of that truth (SDD's shared-plane linkage
boundary keeps it a `{vertical}-sdk`, not dissolved per-service
crates).

## Deep dive

[trade8-sdk reference](/docs/reference/sdk/) — harvested from
`Trade8-dev/trade8-sdk`.