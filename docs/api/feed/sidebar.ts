import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "category",
      label: "feed",
      link: {
        type: "doc",
        id: "api/feed/trade-8-feed",
      },
      items: [
        {
          type: "doc",
          id: "api/feed/list-alerts",
          label: "Spec wrapper for `list_alerts`.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/feed/create-alert",
          label: "Spec wrapper for `create_alert`.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/feed/depth",
          label: "Spec wrapper for `depth`.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/feed/list-feeds",
          label: "Spec wrapper for `list_feeds`.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/feed/health",
          label: "Spec wrapper for the inline health closure.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/feed/quote",
          label: "Spec wrapper for `quote`.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/feed/sse-symbol",
          label: "Spec wrapper for `sse_symbol`.",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "trade8-admin",
      link: {
        type: "doc",
        id: "api/feed/trade-8-feed",
      },
      items: [
        {
          type: "doc",
          id: "api/feed/admin-alerts",
          label: "Spec wrapper for `admin_alerts`.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/feed/admin-ack-alert",
          label: "Spec wrapper for `admin_ack_alert` (GET probe).",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/feed/admin-ack-alert-post",
          label: "Spec wrapper for the POST binding of `admin_ack_alert` — utoipa\nallows one served path per annotated fn, so the second binding gets\nits own.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/feed/admin-feeds",
          label: "Spec wrapper for `admin_feeds`.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/feed/admin-sources",
          label: "Spec wrapper for `admin_sources`.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/feed/get-admin-ui",
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
        id: "api/feed/trade-8-feed",
      },
      items: [
        {
          type: "doc",
          id: "api/feed/policy-list-attributes",
          label: "policy_list_attributes",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/feed/policy-put-attribute",
          label: "policy_put_attribute",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/feed/policy-delete-attribute",
          label: "policy_delete_attribute",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/feed/policy-list-sets",
          label: "policy_list_sets",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/feed/policy-mode-disable",
          label: "policy_mode_disable",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/feed/policy-mode-enforce",
          label: "policy_mode_enforce",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/feed/policy-mode-shadow",
          label: "policy_mode_shadow",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/feed/policy-get-set",
          label: "policy_get_set",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/feed/policy-put-set",
          label: "policy_put_set",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/feed/policy-delete-set",
          label: "policy_delete_set",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/feed/policy-test-set",
          label: "policy_test_set",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/feed/policy-list-relations",
          label: "policy_list_relations",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/feed/policy-put-relation",
          label: "policy_put_relation",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/feed/policy-delete-relation",
          label: "policy_delete_relation",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/feed/policy-check-relation",
          label: "policy_check_relation",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
