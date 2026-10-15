---
sidebar_position: 1
---

# Trade8 — the professional trading vertical

Trade8 is the broker-side trading vertical on Sentin8: order
management, broker connectivity, synchronous pre-trade risk, market
data, OHLCV bars, and day P&L — six Rust services plus the eTrader
professional app. The venue side lives at
[exchange8.dev](https://exchange8.dev/); trade8 trades against any
market.

```mermaid
graph TD
    subgraph flow["Order flow"]
        DESK["Trade8:Desk<br/>(order lifecycle)"]
        RISK["Trade8:Risk<br/>(pre-trade gate)"]
        ROUTER["Trade8:Router<br/>(broker connectivity)"]
    end
    subgraph data["Market data"]
        FEED["Trade8:Feed<br/>(vendor adapters)"]
        BARS["Trade8:Bars<br/>(OHLCV)"]
        PNL["Trade8:Pnl<br/>(day P&L)"]
    end
    APP["eTrader app"] -->|"via Sentin8:BFF"| DESK
    DESK -->|"authorize before accept"| RISK
    DESK -->|"routed orders"| ROUTER
    ROUTER -->|"fill events"| PNL
    FEED -->|"trade prints"| BARS
    ROUTER -->|"fills"| PNL
```

## The products

| Product | Role |
|---|---|
| [Desk](/docs/products/desk) | order management — the full order lifecycle |
| [Router](/docs/products/router) | broker connectivity — routes and fills |
| [Risk](/docs/products/risk) | the synchronous pre-trade gate |
| [Feed](/docs/products/feed) | market data — pluggable vendor adapters |
| [Bars](/docs/products/bars) | OHLCV aggregation — 1s to 1d |
| [Pnl](/docs/products/pnl) | day P&L — deterministic from fills |

## Security

Trade8 inherits the platform's five pillars and adds trading
guarantees: risk before acceptance, one order lifecycle, and
deterministic P&L. Read the [security page](/docs/security).