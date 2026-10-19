import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "category",
      label: "desk",
      link: {
        type: "doc",
        id: "api/desk/trade-8-desk",
      },
      items: [
        {
          type: "doc",
          id: "api/desk/borrow-read",
          label: "Borrow pool read (admin surface): per-symbol availability.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/desk/borrow-mutate",
          label: "Borrow mutation (locate-approval action): pool totals, office\nblocks, ETB/HTB classification, exempt toggles. DB + engine + event.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/desk/desk-health",
          label: "Spec wrapper for the inline health closure (binary has no named fn).",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/desk/func-host-cancel",
          label: "Func proxy-back — `POST /v1/internal/func-host/orders/{id}/cancel`.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/desk/list-orders",
          label: "Blotter read: DB-backed with in-memory fallback when the DB is\nunavailable (degraded-read mode keeps the desk usable).",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/desk/submit-order",
          label: "The Risk-gated submit path: structural validation parks a\nPending order → Risk `authorize` (fail-closed) → accept or reject,\neach persisted with journal + outbox rows in one tx.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/desk/submit-batch",
          label: "Basket submission: per-item validation + accept/reject, one\nbatch event. Each accepted item persists independently — a failing\nitem rejects only itself. Every item passes the Risk gate.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/desk/get-order",
          label: "get_order",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/desk/cancel-order",
          label: "cancel_order",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/desk/replace-order",
          label: "replace_order",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/desk/flatten",
          label: "flatten",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/desk/session-state",
          label: "session_state",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/desk/session-action",
          label: "Session action (Cron proxy-back + manual ops). Transitions persist a\n`session:state` outbox event; the close transition sweeps day orders\n(cancel) and parks overnight ones — engine + DB in the same handler\n(session FSM); preopen restores parked orders from the DB.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/desk/list-symbols",
          label: "list_symbols",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/desk/ws-entry",
          label: "WS order entry — the bidirectional tier. Same authorization\n(Bearer on the upgrade request) + same submit path as REST; the\nclient replays `idempotency_key` in `client_order_id` so resubmits\nare deduped by the engine (replay-safe).",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "trade8-admin",
      link: {
        type: "doc",
        id: "api/desk/trade-8-desk",
      },
      items: [
        {
          type: "doc",
          id: "api/desk/admin-borrow",
          label: "`GET /v1/admin/borrow` — short pool + category + exempt rows.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/desk/admin-destinations",
          label: "`GET /v1/admin/destinations`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/desk/admin-markets",
          label: "`GET /v1/admin/markets`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/desk/admin-offices",
          label: "`GET /v1/admin/offices`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/desk/admin-orders",
          label: "`GET /v1/admin/orders` — env-wide order rows (admin scope).",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/desk/admin-overview",
          label: "`GET /v1/admin/overview` — session + counts card.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/desk/admin-session",
          label: "`GET /v1/admin/session`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/desk/admin-session-action",
          label: "`POST /v1/admin/session` — RFW POST-alias for the session action\n(the renderer can't issue raw POST bodies to /v1/session ops).",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/desk/admin-symbols",
          label: "`GET /v1/admin/symbols`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/desk/get-admin-ui",
          label: "`GET /v1/admin/ui/{page}` — the RFW definitions.",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "policy",
      link: {
        type: "doc",
        id: "api/desk/trade-8-desk",
      },
      items: [
        {
          type: "doc",
          id: "api/desk/policy-list-attributes",
          label: "policy_list_attributes",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/desk/policy-put-attribute",
          label: "policy_put_attribute",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/desk/policy-delete-attribute",
          label: "policy_delete_attribute",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/desk/policy-list-sets",
          label: "policy_list_sets",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/desk/policy-mode-disable",
          label: "policy_mode_disable",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/desk/policy-mode-enforce",
          label: "policy_mode_enforce",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/desk/policy-mode-shadow",
          label: "policy_mode_shadow",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/desk/policy-get-set",
          label: "policy_get_set",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/desk/policy-put-set",
          label: "policy_put_set",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/desk/policy-delete-set",
          label: "policy_delete_set",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/desk/policy-test-set",
          label: "policy_test_set",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/desk/policy-list-relations",
          label: "policy_list_relations",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/desk/policy-put-relation",
          label: "policy_put_relation",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/desk/policy-delete-relation",
          label: "policy_delete_relation",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/desk/policy-check-relation",
          label: "policy_check_relation",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "desk-internal",
      items: [
        {
          type: "doc",
          id: "api/desk/func-host-submit",
          label: "Func proxy-back — `POST /v1/internal/func-host/orders`:\nsubmit on behalf of a strategy module (attribution via\n`on_behalf_of`; the acting user is the strategy's owner).",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/desk/func-host-get",
          label: "Func proxy-back — `GET /v1/internal/func-host/orders/{id}`.",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
