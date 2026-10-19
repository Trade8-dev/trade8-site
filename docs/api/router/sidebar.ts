import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "category",
      label: "router",
      link: {
        type: "doc",
        id: "api/router/trade-8-router",
      },
      items: [
        {
          type: "doc",
          id: "api/router/router-health",
          label: "Spec wrapper for the inline health closure (binary has no named fn).",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/router/purge-old",
          label: "Retention purge — the Cron proxy-back target. Default 30 days.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/router/list-messages",
          label: "Journal read: DB window + engine tail fallback.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/router/list-sessions",
          label: "list_sessions",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/router/reset-session",
          label: "reset_session",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "trade8-admin",
      link: {
        type: "doc",
        id: "api/router/trade-8-router",
      },
      items: [
        {
          type: "doc",
          id: "api/router/admin-fees",
          label: "`GET /v1/admin/fees` — charger formula table (engine copy).",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/router/admin-journal",
          label: "`GET /v1/admin/journal` — journal window (latest N frames, hex preview).",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/router/admin-sessions",
          label: "`GET /v1/admin/sessions` — session rows from the DB.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/router/admin-reset-session",
          label: "`POST /v1/admin/sessions/{id}/reset` — RFW POST-alias reset.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/router/get-admin-ui",
          label: "`GET /v1/admin/ui/{page}` — RFW definitions.",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "policy",
      link: {
        type: "doc",
        id: "api/router/trade-8-router",
      },
      items: [
        {
          type: "doc",
          id: "api/router/policy-list-attributes",
          label: "policy_list_attributes",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/router/policy-put-attribute",
          label: "policy_put_attribute",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/router/policy-delete-attribute",
          label: "policy_delete_attribute",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/router/policy-list-sets",
          label: "policy_list_sets",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/router/policy-mode-disable",
          label: "policy_mode_disable",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/router/policy-mode-enforce",
          label: "policy_mode_enforce",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/router/policy-mode-shadow",
          label: "policy_mode_shadow",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/router/policy-get-set",
          label: "policy_get_set",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/router/policy-put-set",
          label: "policy_put_set",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/router/policy-delete-set",
          label: "policy_delete_set",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/router/policy-test-set",
          label: "policy_test_set",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/router/policy-list-relations",
          label: "policy_list_relations",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/router/policy-put-relation",
          label: "policy_put_relation",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/router/policy-delete-relation",
          label: "policy_delete_relation",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/router/policy-check-relation",
          label: "policy_check_relation",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "router-internal",
      items: [
        {
          type: "doc",
          id: "api/router/report-execution",
          label: "Inbound execution callback (gateway adapter /\nOUCH shard proxy-back): a normalized Fill + preserved FIX tags. The\nfill persists `order_transaction` + `fill_fix_tags` + the fill outbox\nevent in one tx; idempotent on transaction_id (redelivery → no-op).",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
