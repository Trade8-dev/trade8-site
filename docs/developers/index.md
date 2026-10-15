---
sidebar_position: 1
---

# Developers — building on trade8

## The single-repo story

Clone any trade8 service and build — the platform SDK and the trade8
SDK arrive as pinned git dependencies; committed `.sqlx` caches mean
no live database is needed to compile:

```bash
git clone https://github.com/Trade8-dev/trade8-desk.git
cd trade8-desk
cargo build
cargo test     # offline
```

## The vertical lifecycle

```bash
make infra-up        # platform TLS-only PG 18 + Valkey
sentin8-cli db bootstrap
vertical init        # creates the trade8 database + per-service schemas
vertical enroll      # registers services, scopes, admin UIs, triggers
make start           # captain spawns the fleet
```

No migration code exists — greenfield: schema changes rewrite the
init SQL and re-run `vertical init`.

## Integration surface

- **Rust**: the `trade8-sdk` shared plane (fixed/Price-Qty math,
  protocol codecs, event contracts) — see the [SDK page](/docs/sdk/)
- **App/API clients**: BFF-proxied order and data shapes
- **Events**: `trade8:{service}:{resource}:{operation}` over
  Sentin8:Bus

## Deep dive

Every service's full docs live in its [reference section](/docs/reference/) —
harvested from the public repositories at build time.