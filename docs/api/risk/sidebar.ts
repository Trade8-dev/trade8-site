import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "category",
      label: "risk",
      link: {
        type: "doc",
        id: "api/risk/trade-8-risk",
      },
      items: [
        {
          type: "doc",
          id: "api/risk/authorize",
          label: "The hot-path authorize call. M2M-only (Desk / Func) — the BFF does not\nproxy this route; scope check enforces the service scope.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/risk/risk-health",
          label: "Spec wrapper for the inline health closure (binary has no named fn).",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/risk/list-limits",
          label: "list_limits",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/risk/create-limit",
          label: "create_limit",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/risk/trader-state",
          label: "trader_state",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/risk/set-trader-state",
          label: "set_trader_state",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/risk/trader-state-one",
          label: "trader_state_one",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "trade8-admin",
      link: {
        type: "doc",
        id: "api/risk/trade-8-risk",
      },
      items: [
        {
          type: "doc",
          id: "api/risk/admin-exposure",
          label: "`GET /v1/admin/exposure` — snapshot live exposure.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/risk/admin-levels",
          label: "`GET /v1/admin/levels` — risk level ladder + actions.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/risk/admin-limits",
          label: "`GET /v1/admin/limits` — limit rows from the DB (source of truth).",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/risk/admin-restrictions",
          label: "`GET /v1/admin/restrictions` — execution restriction rows.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/risk/admin-traders",
          label: "`GET /v1/admin/traders` — trader risk states.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/risk/get-admin-ui",
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
        id: "api/risk/trade-8-risk",
      },
      items: [
        {
          type: "doc",
          id: "api/risk/policy-list-attributes",
          label: "policy_list_attributes",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/risk/policy-put-attribute",
          label: "policy_put_attribute",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/risk/policy-delete-attribute",
          label: "policy_delete_attribute",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/risk/policy-list-sets",
          label: "policy_list_sets",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/risk/policy-mode-disable",
          label: "policy_mode_disable",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/risk/policy-mode-enforce",
          label: "policy_mode_enforce",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/risk/policy-mode-shadow",
          label: "policy_mode_shadow",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/risk/policy-get-set",
          label: "policy_get_set",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/risk/policy-put-set",
          label: "policy_put_set",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/risk/policy-delete-set",
          label: "policy_delete_set",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/risk/policy-test-set",
          label: "policy_test_set",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/risk/policy-list-relations",
          label: "policy_list_relations",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/risk/policy-put-relation",
          label: "policy_put_relation",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/risk/policy-delete-relation",
          label: "policy_delete_relation",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/risk/policy-check-relation",
          label: "policy_check_relation",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
