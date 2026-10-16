---
sidebar_position: 1
---

# Security

Trade8 inherits the [Sentin8 security model](https://sentin8.dev/docs/security)
by construction - every service runs the platform's 8-step
authorization pipeline, connects to PostgreSQL through
certificate-only identity, and stores every table behind FORCE RLS
on `env_id`.

## The vertical's own invariants

1. **Risk before acceptance** - Desk calls Risk over a direct TLS
   path before accepting any order mutation; rejected orders never
   enter the state machine.
2. **One order lifecycle** - Desk owns submit → validate →
   authorize → accept → route → track → terminal; every transition
   is event-sourced and auditable; terminal states never regress.
3. **Deterministic P&L** - Pnl rebuilds from fill events and opening
   balances as a pure consumer - the same fills always produce the
   same P&L.
4. **Broker credentials by reference** - Router's broker secrets
   live in `secrets://` references; a stolen config grants nothing.
5. **Adapter isolation** - Feed's vendor adapters normalize at the
   edge; a misbehaving vendor input can't corrupt the internal event
   shape.

Read the platform's five pillars at
[sentin8.dev/docs/security](https://sentin8.dev/docs/security).