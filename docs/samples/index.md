---
sidebar_position: 1
---

# Samples

First calls against a running trade8 deployment - through the BFF
proxy, from cURL and Dart.

## 1. Submit an order

```bash
curl -c jar.txt https://bff.{env}.{org}.example.com/v1/sign-in \
  -H 'content-type: application/json' \
  -d '{"email": "you@example.com", "password": "…"}'

curl -b jar.txt \
  https://bff.{env}.{org}.example.com/proxy/desk/v1/orders \
  -H 'content-type: application/json' \
  -d '{
    "symbol": "AAPL",
    "side": "buy",
    "order_type": "limit",
    "qty": "100",
    "limit_price": "182.50",
    "idempotency_key": "ord-001"
  }'
```

Desk calls Risk synchronously before accepting - the 201 means the
order passed buying power and limit checks and is routing.

## 2. Watch positions and day P&L

```bash
curl -N -b jar.txt \
  "https://bff.{env}.{org}.example.com/subscribe?family=trade8"

curl -b jar.txt \
  "https://bff.{env}.{org}.example.com/proxy/pnl/v1/positions?date=2026-10-15"
```

## 3. Pull a bar series

```bash
curl -b jar.txt \
  "https://bff.{env}.{org}.example.com/proxy/bars/v1/series?symbol=AAPL&interval=1m&from=2026-10-15T14:30:00Z"
```

## 4. From Dart (the eTrader pattern)

```dart
final ctx = await fetchRuntimeContext();
final bff = Bff8ApiClient(origin: ctx.origin);

final ticket = await bff.post('desk', '/v1/orders', body: {
  'symbol': 'AAPL',
  'side': 'buy',
  'order_type': 'limit',
  'qty': '100',
  'limit_price': '182.50',
  'idempotency_key': 'ord-001',
});
```

## 5. From Rust (vertical consumer)

```rust
use trade8_sdk::math::PriceQty;        // fixed-point - no float drift
use trade8_sdk::events::FillExecuted;  // the fill event contract

let qty = PriceQty::from_str("100")?;
```

The shared plane guarantees the numbers in the blotter, the P&L
engine, and the app agree bit-for-bit.