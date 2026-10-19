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
          label: "`GET /v1/bars`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/bars/latest-bars",
          label: "`GET /v1/bars/latest`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/bars/list-eod",
          label: "`GET /v1/eod`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/bars/finalize-eod",
          label: "`POST /v1/eod`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/bars/health",
          label: "`GET /v1/health`",
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
          label: "`GET /v1/admin/coverage`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/bars/admin-eod",
          label: "`GET /v1/admin/eod`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/bars/get-admin-ui",
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
        id: "api/bars/trade-8-bars",
      },
      items: [
        {
          type: "doc",
          id: "api/bars/policy-list-attributes",
          label: "`GET /v1/admin/attributes`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/bars/policy-put-attribute",
          label: "`PUT /v1/admin/attributes`",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/bars/policy-delete-attribute",
          label: "`DELETE /v1/admin/attributes`",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/bars/policy-list-sets",
          label: "`GET /v1/admin/policy-sets`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/bars/policy-mode-disable",
          label: "`POST /v1/admin/policy-sets/disable`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/bars/policy-mode-enforce",
          label: "`POST /v1/admin/policy-sets/enforce`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/bars/policy-mode-shadow",
          label: "`POST /v1/admin/policy-sets/shadow`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/bars/policy-get-set",
          label: "`GET /v1/admin/policy-sets/{name}`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/bars/policy-put-set",
          label: "`PUT /v1/admin/policy-sets/{name}`",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/bars/policy-delete-set",
          label: "`DELETE /v1/admin/policy-sets/{name}`",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/bars/policy-test-set",
          label: "`POST /v1/admin/policy-sets/{name}/test`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/bars/policy-list-relations",
          label: "`GET /v1/admin/relations`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/bars/policy-put-relation",
          label: "`PUT /v1/admin/relations`",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/bars/policy-delete-relation",
          label: "`DELETE /v1/admin/relations`",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/bars/policy-check-relation",
          label: "`GET /v1/admin/relations/check`",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
