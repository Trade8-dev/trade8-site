---
title: "Trade8:Feed - API (OpenAPI)"
sidebar_label: "API (OpenAPI)"
mdx:
  format: md
custom_edit_url: https://github.com/Trade8-dev/trade8-feed/edit/main/docs/openapi.json
---
Sentin8 trade8 feed service.

> Generated from the service’s OpenAPI 3.1 spec (`docs/openapi.json`,
> served live at `GET /openapi.json`) - the source of truth is the
> service’s own `#[utoipa::path]` annotations.

**28 endpoints** across 3 groups.

## trade8-admin

### `GET /v1/admin/alerts`

Spec wrapper for `admin_alerts`.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 403 | Forbidden | - |

### `GET /v1/admin/alerts/{id}/ack`

Spec wrapper for `admin_ack_alert` (GET probe).

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 403 | Forbidden | - |

### `POST /v1/admin/alerts/{id}/ack`

Spec wrapper for the POST binding of `admin_ack_alert` - utoipa allows one served path per annotated fn, so the second binding gets its own.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 403 | Forbidden | - |

### `GET /v1/admin/feeds`

Spec wrapper for `admin_feeds`.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 403 | Forbidden | - |

### `GET /v1/admin/sources`

Spec wrapper for `admin_sources`.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 403 | Forbidden | - |

### `GET /v1/admin/ui/{page}`

Spec wrapper for `get_admin_ui`.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 404 | Unknown page | - |


## policy

### `GET /v1/admin/attributes`

Gate: `sentin8:admin`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Principal attributes of this service | -[] |
| 403 | Caller lacks the admin scope | - |

### `PUT /v1/admin/attributes`

Gate: `sentin8:admin`

**Request body** (`application/json`):


**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Attribute stored | - |
| 400 | Invalid attribute definition | - |
| 403 | Caller lacks the admin scope | - |

### `DELETE /v1/admin/attributes`

Gate: `sentin8:admin`

**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `id` | query | yes | string |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Attribute deleted | - |
| 403 | Caller lacks the admin scope | - |

### `GET /v1/admin/policy-sets`

Gate: `sentin8:admin`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Policy sets of this service | -[] |
| 403 | Caller lacks the admin scope | - |

### `POST /v1/admin/policy-sets/disable`

Gate: `sentin8:admin`

**Request body** (`application/json`):


**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Sets disabled | - |
| 403 | Caller lacks the admin scope | - |

### `POST /v1/admin/policy-sets/enforce`

Gate: `sentin8:admin`

**Request body** (`application/json`):


**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Sets switched to enforce mode | - |
| 403 | Caller lacks the admin scope | - |

### `POST /v1/admin/policy-sets/shadow`

Gate: `sentin8:admin`

**Request body** (`application/json`):


**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Sets switched to shadow mode | - |
| 403 | Caller lacks the admin scope | - |

### `GET /v1/admin/policy-sets/{name}`

Gate: `sentin8:admin`

**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `name` | path | yes | string |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | The policy set | - |
| 403 | Caller lacks the admin scope | - |
| 404 | Unknown policy set name | - |

### `PUT /v1/admin/policy-sets/{name}`

Gate: `sentin8:admin`

**Request body** (`application/json`):


**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `name` | path | yes | string |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Policy set stored | - |
| 400 | Invalid policy set definition | - |
| 403 | Caller lacks the admin scope | - |

### `DELETE /v1/admin/policy-sets/{name}`

Gate: `sentin8:admin`

**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `name` | path | yes | string |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Policy set deleted | - |
| 403 | Caller lacks the admin scope | - |

### `POST /v1/admin/policy-sets/{name}/test`

Gate: `sentin8:admin`

**Request body** (`application/json`):


**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `name` | path | yes | string |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Dry-run decision trace | - |
| 403 | Caller lacks the admin scope | - |

### `GET /v1/admin/relations`

Gate: `sentin8:admin`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | ReBAC relations of this service | -[] |
| 403 | Caller lacks the admin scope | - |

### `PUT /v1/admin/relations`

Gate: `sentin8:admin`

**Request body** (`application/json`):


**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Relation stored | - |
| 400 | Invalid relation definition | - |
| 403 | Caller lacks the admin scope | - |

### `DELETE /v1/admin/relations`

Gate: `sentin8:admin`

**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `id` | query | yes | string |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Relation deleted | - |
| 403 | Caller lacks the admin scope | - |

### `GET /v1/admin/relations/check`

Gate: `sentin8:admin`

**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `subject` | query | yes | string |
| `relation` | query | yes | string |
| `object` | query | yes | string |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | The check verdict | - |
| 403 | Caller lacks the admin scope | - |


## feed

### `GET /v1/alerts`

Spec wrapper for `list_alerts`.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 403 | Forbidden | - |

### `POST /v1/alerts`

Spec wrapper for `create_alert`.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 403 | Forbidden | - |

### `GET /v1/depth/{symbol}`

Spec wrapper for `depth`.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 403 | Forbidden | - |

### `GET /v1/feeds`

Spec wrapper for `list_feeds`.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 403 | Forbidden | - |

### `GET /v1/health`

Spec wrapper for the inline health closure.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Service is healthy | - |

### `GET /v1/quotes/{symbol}`

Spec wrapper for `quote`.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 403 | Forbidden | - |

### `GET /v1/stream/{symbol}`

Spec wrapper for `sse_symbol`.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 403 | Forbidden | - |

