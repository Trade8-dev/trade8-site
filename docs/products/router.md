---
sidebar_position: 3
---

# Trade8:Router — broker connectivity

All outbound broker connectivity: it consumes routed orders from
Trade8:Desk (`trade8:desk:order:accepted`), resolves the destination
route (market → gateway → broker), executes, and reports fills back
as events.

## Use cases

- **Route resolution** — market → gateway → broker with
  off-hours/route-fallback rules; the routing table is data, not
  code.
- **Execution** — orders dispatch to the resolved broker with the
  broker's native protocol; timeouts and rejects map to deterministic
  order states.
- **Fill reporting** — every execution reports
  `trade8:router:fill:executed`; Pnl and the blotter consume the same
  event stream.

## Deep dive

[Router reference](/docs/reference/router/) — harvested from
`Trade8-dev/trade8-router`.