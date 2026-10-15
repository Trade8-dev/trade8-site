---
sidebar_position: 4
---

# Trade8:Risk — the pre-trade gate

The synchronous, in-env pre-trade authorization gate: Desk calls it
over a direct TLS path before accepting any order mutation; it
evaluates trader state, buying power (reserved notionals), and
limits — never after the fact.

## Use cases

- **Synchronous authorization** — the accept path waits on the
  decision; a rejected mutation never enters the order state
  machine.
- **Reserved-notional model** — working orders reserve buying power;
  cancels and fills release it deterministically.
- **Limit management** — per-trader and per-account limits mutate
  through the admin surface and take effect immediately (live
  authorization, the platform's model, applied to market risk).

## Deep dive

[Risk reference](/docs/reference/risk/) — harvested from
`Trade8-dev/trade8-risk`.