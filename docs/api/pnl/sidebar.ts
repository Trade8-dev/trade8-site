import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "category",
      label: "pnl",
      link: {
        type: "doc",
        id: "api/pnl/trade-8-pnl",
      },
      items: [
        {
          type: "doc",
          id: "api/pnl/pnl-health",
          label: "Spec wrapper for the inline health closure (binary has no named fn).",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/pnl/office-summary",
          label: "office_summary",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/pnl/self-positions",
          label: "self_positions",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/pnl/session-close",
          label: "Session close (the Cron proxy-back target): persist all\npositions/resumes/summaries + tomorrow's opening balances.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/pnl/self-summary",
          label: "self_summary",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/pnl/trader-board",
          label: "The desk board (manager scope): today's trader summary rows from the\nDB (source of truth — the persist pass).",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "trade8-admin",
      link: {
        type: "doc",
        id: "api/pnl/trade-8-pnl",
      },
      items: [
        {
          type: "doc",
          id: "api/pnl/admin-overnight",
          label: "`GET /v1/admin/overnight` — the reconcile queue feed. Mismatches are\ntransient (outbox events feed the ops queue); the wall shows the\nopening-balance table for today with position-snapshot deltas.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/pnl/admin-traders",
          label: "`GET /v1/admin/traders` — today's trader board (DB rows).",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/pnl/get-admin-ui",
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
        id: "api/pnl/trade-8-pnl",
      },
      items: [
        {
          type: "doc",
          id: "api/pnl/policy-list-attributes",
          label: "policy_list_attributes",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/pnl/policy-put-attribute",
          label: "policy_put_attribute",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/pnl/policy-delete-attribute",
          label: "policy_delete_attribute",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/pnl/policy-list-sets",
          label: "policy_list_sets",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/pnl/policy-mode-disable",
          label: "policy_mode_disable",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/pnl/policy-mode-enforce",
          label: "policy_mode_enforce",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/pnl/policy-mode-shadow",
          label: "policy_mode_shadow",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/pnl/policy-get-set",
          label: "policy_get_set",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/pnl/policy-put-set",
          label: "policy_put_set",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/pnl/policy-delete-set",
          label: "policy_delete_set",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/pnl/policy-test-set",
          label: "policy_test_set",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/pnl/policy-list-relations",
          label: "policy_list_relations",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/pnl/policy-put-relation",
          label: "policy_put_relation",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/pnl/policy-delete-relation",
          label: "policy_delete_relation",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/pnl/policy-check-relation",
          label: "policy_check_relation",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
