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
          label: "`GET /v1/alerts`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/feed/create-alert",
          label: "`POST /v1/alerts`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/feed/depth",
          label: "`GET /v1/depth/{symbol}`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/feed/list-feeds",
          label: "`GET /v1/feeds`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/feed/health",
          label: "`GET /v1/health`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/feed/quote",
          label: "`GET /v1/quotes/{symbol}`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/feed/sse-symbol",
          label: "`GET /v1/stream/{symbol}`",
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
          label: "`GET /v1/admin/alerts`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/feed/admin-ack-alert",
          label: "`GET /v1/admin/alerts/{id}/ack`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/feed/admin-ack-alert-post",
          label: "`POST /v1/admin/alerts/{id}/ack`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/feed/admin-feeds",
          label: "`GET /v1/admin/feeds`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/feed/admin-sources",
          label: "`GET /v1/admin/sources`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/feed/get-admin-ui",
          label: "`GET /v1/admin/ui/{page}`",
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
          label: "`GET /v1/admin/attributes`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/feed/policy-put-attribute",
          label: "`PUT /v1/admin/attributes`",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/feed/policy-delete-attribute",
          label: "`DELETE /v1/admin/attributes`",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/feed/policy-list-sets",
          label: "`GET /v1/admin/policy-sets`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/feed/policy-mode-disable",
          label: "`POST /v1/admin/policy-sets/disable`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/feed/policy-mode-enforce",
          label: "`POST /v1/admin/policy-sets/enforce`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/feed/policy-mode-shadow",
          label: "`POST /v1/admin/policy-sets/shadow`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/feed/policy-get-set",
          label: "`GET /v1/admin/policy-sets/{name}`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/feed/policy-put-set",
          label: "`PUT /v1/admin/policy-sets/{name}`",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/feed/policy-delete-set",
          label: "`DELETE /v1/admin/policy-sets/{name}`",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/feed/policy-test-set",
          label: "`POST /v1/admin/policy-sets/{name}/test`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/feed/policy-list-relations",
          label: "`GET /v1/admin/relations`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/feed/policy-put-relation",
          label: "`PUT /v1/admin/relations`",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/feed/policy-delete-relation",
          label: "`DELETE /v1/admin/relations`",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/feed/policy-check-relation",
          label: "`GET /v1/admin/relations/check`",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
