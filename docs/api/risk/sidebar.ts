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
          label: "`POST /v1/authorize`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/risk/risk-health",
          label: "`GET /v1/health`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/risk/list-limits",
          label: "`GET /v1/limits`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/risk/create-limit",
          label: "`POST /v1/limits`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/risk/trader-state",
          label: "`GET /v1/trader-state`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/risk/set-trader-state",
          label: "`POST /v1/trader-state`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/risk/trader-state-one",
          label: "`GET /v1/trader-state/{usr_id}`",
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
          label: "`GET /v1/admin/exposure`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/risk/admin-levels",
          label: "`GET /v1/admin/levels`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/risk/admin-limits",
          label: "`GET /v1/admin/limits`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/risk/admin-restrictions",
          label: "`GET /v1/admin/restrictions`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/risk/admin-traders",
          label: "`GET /v1/admin/traders`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/risk/get-admin-ui",
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
        id: "api/risk/trade-8-risk",
      },
      items: [
        {
          type: "doc",
          id: "api/risk/policy-list-attributes",
          label: "`GET /v1/admin/attributes`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/risk/policy-put-attribute",
          label: "`PUT /v1/admin/attributes`",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/risk/policy-delete-attribute",
          label: "`DELETE /v1/admin/attributes`",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/risk/policy-list-sets",
          label: "`GET /v1/admin/policy-sets`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/risk/policy-mode-disable",
          label: "`POST /v1/admin/policy-sets/disable`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/risk/policy-mode-enforce",
          label: "`POST /v1/admin/policy-sets/enforce`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/risk/policy-mode-shadow",
          label: "`POST /v1/admin/policy-sets/shadow`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/risk/policy-get-set",
          label: "`GET /v1/admin/policy-sets/{name}`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/risk/policy-put-set",
          label: "`PUT /v1/admin/policy-sets/{name}`",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/risk/policy-delete-set",
          label: "`DELETE /v1/admin/policy-sets/{name}`",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/risk/policy-test-set",
          label: "`POST /v1/admin/policy-sets/{name}/test`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/risk/policy-list-relations",
          label: "`GET /v1/admin/relations`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/risk/policy-put-relation",
          label: "`PUT /v1/admin/relations`",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/risk/policy-delete-relation",
          label: "`DELETE /v1/admin/relations`",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/risk/policy-check-relation",
          label: "`GET /v1/admin/relations/check`",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
