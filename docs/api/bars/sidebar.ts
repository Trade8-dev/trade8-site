import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "category",
      label: "bars",
      link: {
        type: "doc",
        id: "api/bars/trade-8-bars",
      },
      items: [
        {
          type: "doc",
          id: "api/bars/query-bars",
          label: "Spec wrapper for `query_bars` (routed handler keeps its impl).",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/bars/latest-bars",
          label: "Spec wrapper for `latest_bars`.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/bars/list-eod",
          label: "Spec wrapper for `list_eod`.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/bars/finalize-eod",
          label: "Spec wrapper for `finalize_eod`.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/bars/health",
          label: "Spec wrapper for the inline health closure.",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "trade8-admin",
      link: {
        type: "doc",
        id: "api/bars/trade-8-bars",
      },
      items: [
        {
          type: "doc",
          id: "api/bars/admin-coverage",
          label: "Spec wrapper for `admin_coverage`.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/bars/admin-eod",
          label: "Spec wrapper for `admin_eod`.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/bars/get-admin-ui",
          label: "Spec wrapper for `get_admin_ui`.",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "policy",
      link: {
        type: "doc",
        id: "api/bars/trade-8-bars",
      },
      items: [
        {
          type: "doc",
          id: "api/bars/policy-list-attributes",
          label: "policy_list_attributes",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/bars/policy-put-attribute",
          label: "policy_put_attribute",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/bars/policy-delete-attribute",
          label: "policy_delete_attribute",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/bars/policy-list-sets",
          label: "policy_list_sets",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/bars/policy-mode-disable",
          label: "policy_mode_disable",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/bars/policy-mode-enforce",
          label: "policy_mode_enforce",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/bars/policy-mode-shadow",
          label: "policy_mode_shadow",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/bars/policy-get-set",
          label: "policy_get_set",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/bars/policy-put-set",
          label: "policy_put_set",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/bars/policy-delete-set",
          label: "policy_delete_set",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/bars/policy-test-set",
          label: "policy_test_set",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/bars/policy-list-relations",
          label: "policy_list_relations",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/bars/policy-put-relation",
          label: "policy_put_relation",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/bars/policy-delete-relation",
          label: "policy_delete_relation",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/bars/policy-check-relation",
          label: "policy_check_relation",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
