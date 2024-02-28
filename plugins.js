module.exports = [
  [
    'docusaurus2-dotenv',
    {
      path: './.env',
    },
  ],
  [
    '@docusaurus/plugin-google-tag-manager',
    {
      containerId: 'GTM-TSD78J',
    },
  ],
  [
    '@docusaurus/plugin-client-redirects',
    {
      redirects: [
        {
          to: '/',
          from: ['/conf', '/developerdays', '/developerdays/agenda'],
        },
        {
          to: '/ambassador',
          from: ['/ambassador-program'],
        },
        {
          from: ['/idn/docs/access-intelligence-center'],
          to: '/docs/reporting/access-intelligence-center',
        },
        {
          from: ['/idn/docs/aic-audit-er-diagram'],
          to: '/docs/reporting/aic-audit-er-diagram',
        },
        {
          from: ['/idn/docs/aic-er-diagram'],
          to: '/docs/reporting/aic-er-diagram',
        },
        {
          from: ['/idn/docs/aic-videos'],
          to: '/docs/reporting/aic-videos',
        },
        {
          from: ['/idn/docs/saas-connectivity'],
          to: '/docs/connectivity/saas-connectivity',
        },
        {
          from: ['/idn/docs/saas-connectivity/commands/account-create'],
          to: '/docs/connectivity/saas-connectivity/commands/account-create',
        },
        {
          from: ['/idn/docs/saas-connectivity/commands/account-delete'],
          to: '/docs/connectivity/saas-connectivity/commands/account-delete',
        },
        {
          from: ['/idn/docs/saas-connectivity/commands/account-disable'],
          to: '/docs/connectivity/saas-connectivity/commands/account-disable',
        },
        {
          from: ['/idn/docs/saas-connectivity/commands/account-discover'],
          to: '/docs/connectivity/saas-connectivity/commands/account-discover',
        },
        {
          from: ['/idn/docs/saas-connectivity/commands/account-enable'],
          to: '/docs/connectivity/saas-connectivity/commands/account-enable',
        },
        {
          from: ['/idn/docs/saas-connectivity/commands/account-list'],
          to: '/docs/connectivity/saas-connectivity/commands/account-list',
        },
        {
          from: ['/idn/docs/saas-connectivity/commands/account-read'],
          to: '/docs/connectivity/saas-connectivity/commands/account-read',
        },
        {
          from: ['/idn/docs/saas-connectivity/commands/account-unlock'],
          to: '/docs/connectivity/saas-connectivity/commands/account-unlock',
        },
        {
          from: ['/idn/docs/saas-connectivity/commands/account-update'],
          to: '/docs/connectivity/saas-connectivity/commands/account-update',
        },
        {
          from: ['/idn/docs/saas-connectivity/commands/change-password'],
          to: '/docs/connectivity/saas-connectivity/commands/change-password',
        },
        {
          from: ['/idn/docs/saas-connectivity/commands/entitlement-list'],
          to: '/docs/connectivity/saas-connectivity/commands/entitlement-list',
        },
        {
          from: ['/idn/docs/saas-connectivity/commands/entitlement-read'],
          to: '/docs/connectivity/saas-connectivity/commands/entitlement-read',
        },
        {
          from: ['/idn/docs/saas-connectivity/commands/source-data-discover'],
          to: '/docs/connectivity/saas-connectivity/commands/source-data-discover',
        },
        {
          from: ['/idn/docs/saas-connectivity/commands/source-data-read'],
          to: '/docs/connectivity/saas-connectivity/commands/source-data-read',
        },
        {
          from: ['/idn/docs/saas-connectivity/commands/test-connection'],
          to: '/docs/connectivity/saas-connectivity/commands/test-connection',
        },
        {
          from: ['/idn/docs/saas-connectivity/common-cli-commands'],
          to: '/docs/connectivity/saas-connectivity/common-cli-commands',
        },
        {
          from: ['/idn/docs/saas-connectivity/connector-commands'],
          to: '/docs/connectivity/saas-connectivity/connector-commands',
        },
        {
          from: ['/idn/docs/saas-connectivity/connector-spec'],
          to: '/docs/connectivity/saas-connectivity/connector-spec',
        },
        {
          from: ['/idn/docs/saas-connectivity/connector-spec/card'],
          to: '/docs/connectivity/saas-connectivity/connector-spec/card',
        },
        {
          from: ['/idn/docs/saas-connectivity/connector-spec/initial-value'],
          to: '/docs/connectivity/saas-connectivity/connector-spec/initial-value',
        },
        {
          from: ['/idn/docs/saas-connectivity/connector-spec/key-value'],
          to: '/docs/connectivity/saas-connectivity/connector-spec/key-value',
        },
        {
          from: ['/idn/docs/saas-connectivity/connector-spec/list'],
          to: '/docs/connectivity/saas-connectivity/connector-spec/list',
        },
        {
          from: ['/idn/docs/saas-connectivity/connector-spec/radio'],
          to: '/docs/connectivity/saas-connectivity/connector-spec/radio',
        },
        {
          from: ['/idn/docs/saas-connectivity/connector-spec/select'],
          to: '/docs/connectivity/saas-connectivity/connector-spec/select',
        },
        {
          from: ['/idn/docs/saas-connectivity/customizers'],
          to: '/docs/connectivity/saas-connectivity/customizers',
        },
        {
          from: ['/idn/docs/saas-connectivity/customizers/commands'],
          to: '/docs/connectivity/saas-connectivity/customizers/commands',
        },
        {
          from: [
            '/idn/docs/saas-connectivity/customizers/commands/account-create',
          ],
          to: '/docs/connectivity/saas-connectivity/customizers/commands/account-create',
        },
        {
          from: [
            '/idn/docs/saas-connectivity/customizers/commands/account-delete',
          ],
          to: '/docs/connectivity/saas-connectivity/customizers/commands/account-delete',
        },
        {
          from: [
            '/idn/docs/saas-connectivity/customizers/commands/account-disable',
          ],
          to: '/docs/connectivity/saas-connectivity/customizers/commands/account-disable',
        },
        {
          from: [
            '/idn/docs/saas-connectivity/customizers/commands/account-enable',
          ],
          to: '/docs/connectivity/saas-connectivity/customizers/commands/account-enable',
        },
        {
          from: [
            '/idn/docs/saas-connectivity/customizers/commands/account-list',
          ],
          to: '/docs/connectivity/saas-connectivity/customizers/commands/account-list',
        },
        {
          from: [
            '/idn/docs/saas-connectivity/customizers/commands/account-read',
          ],
          to: '/docs/connectivity/saas-connectivity/customizers/commands/account-read',
        },
        {
          from: [
            '/idn/docs/saas-connectivity/customizers/commands/account-unlock',
          ],
          to: '/docs/connectivity/saas-connectivity/customizers/commands/account-unlock',
        },
        {
          from: [
            '/idn/docs/saas-connectivity/customizers/commands/account-update',
          ],
          to: '/docs/connectivity/saas-connectivity/customizers/commands/account-update',
        },
        {
          from: [
            '/idn/docs/saas-connectivity/customizers/commands/change-password',
          ],
          to: '/docs/connectivity/saas-connectivity/customizers/commands/change-password',
        },
        {
          from: [
            '/idn/docs/saas-connectivity/customizers/commands/entitlement-list',
          ],
          to: '/docs/connectivity/saas-connectivity/customizers/commands/entitlement-list',
        },
        {
          from: [
            '/idn/docs/saas-connectivity/customizers/commands/entitlement-read',
          ],
          to: '/docs/connectivity/saas-connectivity/customizers/commands/entitlement-read',
        },
        {
          from: [
            '/idn/docs/saas-connectivity/customizers/commands/source-data-discover',
          ],
          to: '/docs/connectivity/saas-connectivity/customizers/commands/source-data-discover',
        },
        {
          from: [
            '/idn/docs/saas-connectivity/customizers/commands/source-data-read',
          ],
          to: '/docs/connectivity/saas-connectivity/customizers/commands/source-data-read',
        },
        {
          from: [
            '/idn/docs/saas-connectivity/customizers/commands/test-connection',
          ],
          to: '/docs/connectivity/saas-connectivity/customizers/commands/test-connection',
        },
        {
          from: ['/idn/docs/saas-connectivity/customizers/example'],
          to: '/docs/connectivity/saas-connectivity/customizers/example',
        },
        {
          from: ['/idn/docs/saas-connectivity/customizers/getting-started'],
          to: '/docs/connectivity/saas-connectivity/customizers/getting-started',
        },
        {
          from: ['/idn/docs/saas-connectivity/customizers/linking'],
          to: '/docs/connectivity/saas-connectivity/customizers/linking',
        },
        {
          from: ['/idn/docs/saas-connectivity/customizers/testing'],
          to: '/docs/connectivity/saas-connectivity/customizers/testing',
        },
        {
          from: ['/idn/docs/saas-connectivity/customizers/upload'],
          to: '/docs/connectivity/saas-connectivity/customizers/upload',
        },
        {
          from: ['/idn/docs/saas-connectivity/example-connectors'],
          to: '/docs/connectivity/saas-connectivity/example-connectors',
        },
        {
          from: ['/idn/docs/saas-connectivity/in-depth/api-calls'],
          to: '/docs/connectivity/saas-connectivity/in-depth/api-calls',
        },
        {
          from: ['/idn/docs/saas-connectivity/in-depth/cli-advanced'],
          to: '/docs/connectivity/saas-connectivity/in-depth/cli-advanced',
        },
        {
          from: ['/idn/docs/saas-connectivity/in-depth/connector-timeouts'],
          to: '/docs/connectivity/saas-connectivity/in-depth/connector-timeouts',
        },
        {
          from: ['/idn/docs/saas-connectivity/in-depth/debugging'],
          to: '/docs/connectivity/saas-connectivity/in-depth/debugging',
        },
        {
          from: ['/idn/docs/saas-connectivity/in-depth/error-handling'],
          to: '/docs/connectivity/saas-connectivity/in-depth/error-handling',
        },
        {
          from: ['/idn/docs/saas-connectivity/in-depth/handling-rate-limits'],
          to: '/docs/connectivity/saas-connectivity/in-depth/handling-rate-limits',
        },
        {
          from: ['/idn/docs/saas-connectivity/in-depth/linting'],
          to: '/docs/connectivity/saas-connectivity/in-depth/linting',
        },
        {
          from: ['/idn/docs/saas-connectivity/in-depth/logging'],
          to: '/docs/connectivity/saas-connectivity/in-depth/logging',
        },
        {
          from: ['/idn/docs/saas-connectivity/in-depth/testing'],
          to: '/docs/connectivity/saas-connectivity/in-depth/testing',
        },
        {
          from: ['/idn/docs/saas-connectivity/limits'],
          to: '/docs/connectivity/saas-connectivity/limits',
        },
        {
          from: ['/idn/docs/saas-connectivity/postman-collection'],
          to: '/docs/connectivity/saas-connectivity/postman-collection',
        },
        {
          from: ['/idn/docs/saas-connectivity/prerequisites'],
          to: '/docs/connectivity/saas-connectivity/prerequisites',
        },
        {
          from: ['/idn/docs/saas-connectivity/test-build-deploy'],
          to: '/docs/connectivity/saas-connectivity/test-build-deploy',
        },
        {
          from: ['/idn/docs/saas-connectivity/videos'],
          to: '/docs/connectivity/saas-connectivity/videos',
        },
        {
          from: ['/idn/docs/sds-audit-er-diagram'],
          to: '/docs/reporting/sds-audit-er-diagram',
        },
        {
          from: ['/idn/docs/sds-er-diagram'],
          to: '/docs/reporting/sds-er-diagram',
        },
        {
          from: ['/idn/docs/secure-data-share'],
          to: '/docs/reporting/secure-data-share',
        },
        {
          from: ['/idn/docs/global-platform-resources/ip-address-allow-list'],
          to: '/docs/guides/ip-address-allow-list',
        },
        {
          from: ['/idn/docs/disable-access-profile-requests'],
          to: '/docs/guides/disable-access-profile-requests',
        },
        {
          from: ['/idn/api/service-accounts'],
          to: '/docs/guides/service-accounts',
        },
        {
          from: ['/iiq/docs'],
          to: '/docs/iiq',
        },
        {
          from: ['/iiq/docs/plugin-developer-guide'],
          to: '/docs/iiq/plugin-developer-guide',
        },
        {
          from: ['/iiq/docs/plugin-developer-guide/overview'],
          to: '/docs/iiq/plugin-developer-guide/overview',
        },
        {
          from: ['/iiq/docs/plugin-developer-guide/manifest'],
          to: '/docs/iiq/plugin-developer-guide/manifest',
        },
        {
          from: ['/iiq/docs/plugin-developer-guide/build-file'],
          to: '/docs/iiq/plugin-developer-guide/build-file',
        },
        {
          from: ['/iiq/docs/plugin-developer-guide/database-scripts'],
          to: '/docs/iiq/plugin-developer-guide/database-scripts',
        },
        {
          from: ['/iiq/docs/plugin-developer-guide/ui-elements'],
          to: '/docs/iiq/plugin-developer-guide/ui-elements',
        },
        {
          from: ['/iiq/docs/plugin-developer-guide/xml-artifacts'],
          to: '/docs/iiq/plugin-developer-guide/xml-artifacts',
        },
        {
          from: [
            '/iiq/docs/plugin-developer-guide/java-classes-rest-resources',
          ],
          to: '/docs/iiq/plugin-developer-guide/java-classes-rest-resources',
        },
        {
          from: ['/iiq/docs/plugin-developer-guide/java-classes-executors'],
          to: '/docs/iiq/plugin-developer-guide/java-classes-executors',
        },
        {
          from: ['/iiq/docs/plugin-developer-guide/installation'],
          to: '/docs/iiq/plugin-developer-guide/installation',
        },
        {
          from: ['/iiq/docs/plugin-developer-guide/appendix-migration'],
          to: '/docs/iiq/plugin-developer-guide/appendix-migration',
        },
        {
          from: ['/iiq/docs/plugin-developer-guide/updates'],
          to: '/docs/iiq/plugin-developer-guide/updates',
        },
        {
          from: ['/iiq/api'],
          to: '/docs/api/iiq',
        },
        {
          from: ['/iiq/api/identityiq-scim-rest-api'],
          to: '/docs/api/iiq/identityiq-scim-rest-api',
        },
        {
          from: ['/iiq/api/accounts'],
          to: '/docs/api/iiq/accounts',
        },
        {
          from: ['/iiq/api/alerts'],
          to: '/docs/api/iiq/alerts',
        },
        {
          from: ['/iiq/api/applications'],
          to: '/docs/api/iiq/applications',
        },
        {
          from: ['/iiq/api/check-policy-violations'],
          to: '/docs/api/iiq/check-policy-violations',
        },
        {
          from: ['/iiq/api/checked-policy-violations'],
          to: '/docs/api/iiq/checked-policy-violations',
        },
        {
          from: ['/iiq/api/create-account'],
          to: '/docs/api/iiq/create-account',
        },
        {
          from: ['/iiq/api/create-alert'],
          to: '/docs/api/iiq/create-alert',
        },
        {
          from: ['/iiq/api/create-user'],
          to: '/docs/api/iiq/create-user',
        },
        {
          from: ['/iiq/api/delete-account'],
          to: '/docs/api/iiq/delete-account',
        },
        {
          from: ['/iiq/api/delete-user'],
          to: '/docs/api/iiq/delete-user',
        },
        {
          from: ['/iiq/api/entitlements'],
          to: '/docs/api/iiq/entitlements',
        },
        {
          from: ['/iiq/api/get-account-by-id'],
          to: '/docs/api/iiq/get-account-by-id',
        },
        {
          from: ['/iiq/api/get-accounts'],
          to: '/docs/api/iiq/get-accounts',
        },
        {
          from: ['/iiq/api/get-alert-by-id'],
          to: '/docs/api/iiq/get-alert-by-id',
        },
        {
          from: ['/iiq/api/get-alerts'],
          to: '/docs/api/iiq/get-alerts',
        },
        {
          from: ['/iiq/api/get-application'],
          to: '/docs/api/iiq/get-application',
        },
        {
          from: ['/iiq/api/get-applications'],
          to: '/docs/api/iiq/get-applications',
        },
        {
          from: ['/iiq/api/get-entitlement-by-id'],
          to: '/docs/api/iiq/get-entitlement-by-id',
        },
        {
          from: ['/iiq/api/get-entitlements'],
          to: '/docs/api/iiq/get-entitlements',
        },
        {
          from: ['/iiq/api/get-launched-workflow-by-id'],
          to: '/docs/api/iiq/get-launched-workflow-by-id',
        },
        {
          from: ['/iiq/api/get-object-config-by-id'],
          to: '/docs/api/iiq/get-object-config-by-id',
        },
        {
          from: ['/iiq/api/get-object-configs'],
          to: '/docs/api/iiq/get-object-configs',
        },
        {
          from: ['/iiq/api/get-policy-violation-by-id'],
          to: '/docs/api/iiq/get-policy-violation-by-id',
        },
        {
          from: ['/iiq/api/get-policy-violations'],
          to: '/docs/api/iiq/get-policy-violations',
        },
        {
          from: ['/iiq/api/get-resource-type-by-id'],
          to: '/docs/api/iiq/get-resource-type-by-id',
        },
        {
          from: ['/iiq/api/get-resource-types'],
          to: '/docs/api/iiq/get-resource-types',
        },
        {
          from: ['/iiq/api/get-role'],
          to: '/docs/api/iiq/get-role',
        },
        {
          from: ['/iiq/api/get-roles'],
          to: '/docs/api/iiq/get-roles',
        },
        {
          from: ['/iiq/api/get-schema-by-id'],
          to: '/docs/api/iiq/get-schema-by-id',
        },
        {
          from: ['/iiq/api/get-schemas'],
          to: '/docs/api/iiq/get-schemas',
        },
        {
          from: ['/iiq/api/get-task-result-by-id'],
          to: '/docs/api/iiq/get-task-result-by-id',
        },
        {
          from: ['/iiq/api/get-user-by-id'],
          to: '/docs/api/iiq/get-user-by-id',
        },
        {
          from: ['/iiq/api/get-users'],
          to: '/docs/api/iiq/get-users',
        },
        {
          from: ['/iiq/api/get-workflow-by-id'],
          to: '/docs/api/iiq/get-workflow-by-id',
        },
        {
          from: ['/iiq/api/identityiq-scim-rest-api'],
          to: '/docs/api/iiq/identityiq-scim-rest-api',
        },
        {
          from: ['/iiq/api/launch-workflow'],
          to: '/docs/api/iiq/launch-workflow',
        },
        {
          from: ['/iiq/api/launched-workflows'],
          to: '/docs/api/iiq/launched-workflows',
        },
        {
          from: ['/iiq/api/launched-workflows-get'],
          to: '/docs/api/iiq/launched-workflows-get',
        },
        {
          from: ['/iiq/api/object-config'],
          to: '/docs/api/iiq/object-config',
        },
        {
          from: ['/iiq/api/policy-violations'],
          to: '/docs/api/iiq/policy-violations',
        },
        {
          from: ['/iiq/api/resource-types'],
          to: '/docs/api/iiq/resource-types',
        },
        {
          from: ['/iiq/api/roles'],
          to: '/docs/api/iiq/roles',
        },
        {
          from: ['/iiq/api/schemas'],
          to: '/docs/api/iiq/schemas',
        },
        {
          from: ['/iiq/api/service-provider-config'],
          to: '/docs/api/iiq/service-provider-config',
        },
        {
          from: ['/iiq/api/service-provider-config-get'],
          to: '/docs/api/iiq/service-provider-config-get',
        },
        {
          from: ['/iiq/api/task-results'],
          to: '/docs/api/iiq/task-results',
        },
        {
          from: ['/iiq/api/task-results-get'],
          to: '/docs/api/iiq/task-results-get',
        },
        {
          from: ['/iiq/api/update-account'],
          to: '/docs/api/iiq/update-account',
        },
        {
          from: ['/iiq/api/update-user'],
          to: '/docs/api/iiq/update-user',
        },
        {
          from: ['/iiq/api/users'],
          to: '/docs/api/iiq/users',
        },
        {
          from: ['/iiq/api/workflows'],
          to: '/docs/api/iiq/workflows',
        },
        {
          from: ['/iiq/api/workflows-get'],
          to: '/docs/api/iiq/workflows-get',
        },
        {
          from: ['/nerm/api/nerm-api'],
          to: '/docs/api/nerm/nerm-api'
        },
        {
          from: ['/nerm/api'],
          to: '/docs/api/nerm/v1',
        },
        {
          from: ['/nerm/api/authentication'],
          to: '/docs/api/nerm/v1/authentication',
        },
        {
          from: ['/nerm/api/create-approval-action'],
          to: '/docs/api/nerm/v1/create-approval-action',
        },
        {
          from: ['/nerm/api/create-ask-security-question-action'],
          to: '/docs/api/nerm/v1/create-ask-security-question-action',
        },
        {
          from: ['/nerm/api/create-auto-assign-action'],
          to: '/docs/api/nerm/v1/create-auto-assign-action',
        },
        {
          from: ['/nerm/api/create-automated-workflow'],
          to: '/docs/api/nerm/v1/create-automated-workflow',
        },
        {
          from: ['/nerm/api/create-batch-update-action'],
          to: '/docs/api/nerm/v1/create-batch-update-action',
        },
        {
          from: ['/nerm/api/create-batch-workflow'],
          to: '/docs/api/nerm/v1/create-batch-workflow',
        },
        {
          from: ['/nerm/api/create-close-session-action'],
          to: '/docs/api/nerm/v1/create-close-session-action',
        },
        {
          from: ['/nerm/api/create-contributors-action'],
          to: '/docs/api/nerm/v1/create-contributors-action',
        },
        {
          from: ['/nerm/api/create-create-profile-action'],
          to: '/docs/api/nerm/v1/create-create-profile-action',
        },
        {
          from: ['/nerm/api/create-create-workflow'],
          to: '/docs/api/nerm/v1/create-create-workflow',
        },
        {
          from: ['/nerm/api/create-duplicate-prevention-action'],
          to: '/docs/api/nerm/v1/create-duplicate-prevention-action',
        },
        {
          from: ['/nerm/api/create-email-verification-action'],
          to: '/docs/api/nerm/v1/create-email-verification-action',
        },
        {
          from: ['/nerm/api/create-form'],
          to: '/docs/api/nerm/v1/create-form',
        },
        {
          from: ['/nerm/api/create-form-attribute'],
          to: '/docs/api/nerm/v1/create-form-attribute',
        },
        {
          from: ['/nerm/api/create-fulfillment-action'],
          to: '/docs/api/nerm/v1/create-fulfillment-action',
        },
        {
          from: ['/nerm/api/create-identity-proofing-action'],
          to: '/docs/api/nerm/v1/create-identity-proofing-action',
        },
        {
          from: ['/nerm/api/create-invitation-action'],
          to: '/docs/api/nerm/v1/create-invitation-action',
        },
        {
          from: ['/nerm/api/create-ldap-action'],
          to: '/docs/api/nerm/v1/create-ldap-action',
        },
        {
          from: ['/nerm/api/create-login-workflow'],
          to: '/docs/api/nerm/v1/create-login-workflow',
        },
        {
          from: ['/nerm/api/create-notification-action'],
          to: '/docs/api/nerm/v1/create-notification-action',
        },
        {
          from: ['/nerm/api/create-password-reset-action'],
          to: '/docs/api/nerm/v1/create-password-reset-action',
        },
        {
          from: ['/nerm/api/create-password-update-workflow'],
          to: '/docs/api/nerm/v1/create-password-update-workflow',
        },
        {
          from: ['/nerm/api/create-permission'],
          to: '/docs/api/nerm/v1/create-permission',
        },
        {
          from: ['/nerm/api/create-profile-check-action'],
          to: '/docs/api/nerm/v1/create-profile-check-action',
        },
        {
          from: ['/nerm/api/create-profile-page'],
          to: '/docs/api/nerm/v1/create-profile-page',
        },
        {
          from: ['/nerm/api/create-profile-select-action'],
          to: '/docs/api/nerm/v1/create-profile-select-action',
        },
        {
          from: ['/nerm/api/create-profile-type-role'],
          to: '/docs/api/nerm/v1/create-profile-type-role',
        },
        {
          from: ['/nerm/api/create-registration-workflow'],
          to: '/docs/api/nerm/v1/create-registration-workflow',
        },
        {
          from: ['/nerm/api/create-request-action'],
          to: '/docs/api/nerm/v1/create-request-action',
        },
        {
          from: ['/nerm/api/create-rest-api-action'],
          to: '/docs/api/nerm/v1/create-rest-api-action',
        },
        {
          from: ['/nerm/api/create-review-action'],
          to: '/docs/api/nerm/v1/create-review-action',
        },
        {
          from: ['/nerm/api/create-run-workflow-action'],
          to: '/docs/api/nerm/v1/create-run-workflow-action',
        },
        {
          from: ['/nerm/api/create-set-attributes-action'],
          to: '/docs/api/nerm/v1/create-set-attributes-action',
        },
        {
          from: ['/nerm/api/create-set-security-question-action'],
          to: '/docs/api/nerm/v1/create-set-security-question-action',
        },
        {
          from: ['/nerm/api/create-soap-api-action'],
          to: '/docs/api/nerm/v1/create-soap-api-action',
        },
        {
          from: ['/nerm/api/create-status-change-action'],
          to: '/docs/api/nerm/v1/create-status-change-action',
        },
        {
          from: ['/nerm/api/create-synced-attribute'],
          to: '/docs/api/nerm/v1/create-synced-attribute',
        },
        {
          from: ['/nerm/api/create-unassign-action'],
          to: '/docs/api/nerm/v1/create-unassign-action',
        },
        {
          from: ['/nerm/api/create-update-profile-action'],
          to: '/docs/api/nerm/v1/create-update-profile-action',
        },
        {
          from: ['/nerm/api/create-update-workflow'],
          to: '/docs/api/nerm/v1/create-update-workflow',
        },
        {
          from: ['/nerm/api/create-user-profiles'],
          to: '/docs/api/nerm/v1/create-user-profiles',
        },
        {
          from: ['/nerm/api/create-username-password-action'],
          to: '/docs/api/nerm/v1/create-username-password-action',
        },
        {
          from: ['/nerm/api/create-workflow-page'],
          to: '/docs/api/nerm/v1/create-workflow-page',
        },
        {
          from: ['/nerm/api/delete-attribute-option'],
          to: '/docs/api/nerm/v1/delete-attribute-option',
        },
        {
          from: ['/nerm/api/delete-profile'],
          to: '/docs/api/nerm/v1/delete-profile',
        },
        {
          from: ['/nerm/api/delete-profile-type'],
          to: '/docs/api/nerm/v1/delete-profile-type',
        },
        {
          from: ['/nerm/api/delete-profiles'],
          to: '/docs/api/nerm/v1/delete-profiles',
        },
        {
          from: ['/nerm/api/delete-role-profile'],
          to: '/docs/api/nerm/v1/delete-role-profile',
        },
        {
          from: ['/nerm/api/delete-synced-attribute'],
          to: '/docs/api/nerm/v1/delete-synced-attribute',
        },
        {
          from: ['/nerm/api/delete-user'],
          to: '/docs/api/nerm/v1/delete-user',
        },
        {
          from: ['/nerm/api/delete-user-profile'],
          to: '/docs/api/nerm/v1/delete-user-profile',
        },
        {
          from: ['/nerm/api/delete-user-profiles'],
          to: '/docs/api/nerm/v1/delete-user-profiles',
        },
        {
          from: ['/nerm/api/delete-user-role'],
          to: '/docs/api/nerm/v1/delete-user-role',
        },
        {
          from: ['/nerm/api/get-advanced-search'],
          to: '/docs/api/nerm/v1/get-advanced-search',
        },
        {
          from: ['/nerm/api/get-attribute'],
          to: '/docs/api/nerm/v1/get-attribute',
        },
        {
          from: ['/nerm/api/get-attribute-option'],
          to: '/docs/api/nerm/v1/get-attribute-option',
        },
        {
          from: ['/nerm/api/get-attribute-options'],
          to: '/docs/api/nerm/v1/get-attribute-options',
        },
        {
          from: ['/nerm/api/get-attributes'],
          to: '/docs/api/nerm/v1/get-attributes',
        },
        {
          from: ['/nerm/api/get-identity-proofing-results'],
          to: '/docs/api/nerm/v1/get-identity-proofing-results',
        },
        {
          from: ['/nerm/api/get-job-status'],
          to: '/docs/api/nerm/v1/get-job-status',
        },
        {
          from: ['/nerm/api/get-profile'],
          to: '/docs/api/nerm/v1/get-profile',
        },
        {
          from: ['/nerm/api/get-profile-avatar'],
          to: '/docs/api/nerm/v1/get-profile-avatar',
        },
        {
          from: ['/nerm/api/get-profile-type'],
          to: '/docs/api/nerm/v1/get-profile-type',
        },
        {
          from: ['/nerm/api/get-profile-type-attributes'],
          to: '/docs/api/nerm/v1/get-profile-type-attributes',
        },
        {
          from: ['/nerm/api/get-profile-types'],
          to: '/docs/api/nerm/v1/get-profile-types',
        },
        {
          from: ['/nerm/api/get-profile-upload'],
          to: '/docs/api/nerm/v1/get-profile-upload',
        },
        {
          from: ['/nerm/api/get-profiles'],
          to: '/docs/api/nerm/v1/get-profiles',
        },
        {
          from: ['/nerm/api/get-risk-level'],
          to: '/docs/api/nerm/v1/get-risk-level',
        },
        {
          from: ['/nerm/api/get-risk-levels'],
          to: '/docs/api/nerm/v1/get-risk-levels',
        },
        {
          from: ['/nerm/api/get-risk-score'],
          to: '/docs/api/nerm/v1/get-risk-score',
        },
        {
          from: ['/nerm/api/get-risk-scores'],
          to: '/docs/api/nerm/v1/get-risk-scores',
        },
        {
          from: ['/nerm/api/get-role'],
          to: '/docs/api/nerm/v1/get-role',
        },
        {
          from: ['/nerm/api/get-role-profile'],
          to: '/docs/api/nerm/v1/get-role-profile',
        },
        {
          from: ['/nerm/api/get-role-profiles'],
          to: '/docs/api/nerm/v1/get-role-profiles',
        },
        {
          from: ['/nerm/api/get-roles'],
          to: '/docs/api/nerm/v1/get-roles',
        },
        {
          from: ['/nerm/api/get-user'],
          to: '/docs/api/nerm/v1/get-user',
        },
        {
          from: ['/nerm/api/get-user-avatar'],
          to: '/docs/api/nerm/v1/get-user-avatar',
        },
        {
          from: ['/nerm/api/get-user-manager'],
          to: '/docs/api/nerm/v1/get-user-manager',
        },
        {
          from: ['/nerm/api/get-user-managers'],
          to: '/docs/api/nerm/v1/get-user-managers',
        },
        {
          from: ['/nerm/api/get-user-profile'],
          to: '/docs/api/nerm/v1/get-user-profile',
        },
        {
          from: ['/nerm/api/get-user-profiles'],
          to: '/docs/api/nerm/v1/get-user-profiles',
        },
        {
          from: ['/nerm/api/get-user-role'],
          to: '/docs/api/nerm/v1/get-user-role',
        },
        {
          from: ['/nerm/api/get-user-roles'],
          to: '/docs/api/nerm/v1/get-user-roles',
        },
        {
          from: ['/nerm/api/get-users'],
          to: '/docs/api/nerm/v1/get-users',
        },
        {
          from: ['/nerm/api/get-workflow-actions'],
          to: '/docs/api/nerm/v1/get-workflow-actions',
        },
        {
          from: ['/nerm/api/get-workflow-session'],
          to: '/docs/api/nerm/v1/get-workflow-session',
        },
        {
          from: ['/nerm/api/get-workflow-session-upload'],
          to: '/docs/api/nerm/v1/get-workflow-session-upload',
        },
        {
          from: ['/nerm/api/get-workflow-sessions'],
          to: '/docs/api/nerm/v1/get-workflow-sessions',
        },
        {
          from: ['/nerm/api/getting-started'],
          to: '/docs/api/nerm/getting-started',
        },
        {
          from: ['/nerm/api/nerm-api'],
          to: '/docs/api/nerm/v1/nerm-api',
        },
        {
          from: ['/nerm/api/pagination-metadata-filtering'],
          to: '/docs/api/nerm/pagination-metadata-filtering',
        },
        {
          from: ['/nerm/api/patch-advanced-search'],
          to: '/docs/api/nerm/v1/patch-advanced-search',
        },
        {
          from: ['/nerm/api/patch-attribute-option'],
          to: '/docs/api/nerm/v1/patch-attribute-option',
        },
        {
          from: ['/nerm/api/patch-attribute-options'],
          to: '/docs/api/nerm/v1/patch-attribute-options',
        },
        {
          from: ['/nerm/api/patch-profile'],
          to: '/docs/api/nerm/v1/patch-profile',
        },
        {
          from: ['/nerm/api/patch-profile-type'],
          to: '/docs/api/nerm/v1/patch-profile-type',
        },
        {
          from: ['/nerm/api/patch-profiles'],
          to: '/docs/api/nerm/v1/patch-profiles',
        },
        {
          from: ['/nerm/api/patch-role'],
          to: '/docs/api/nerm/v1/patch-role',
        },
        {
          from: ['/nerm/api/patch-role-profile'],
          to: '/docs/api/nerm/v1/patch-role-profile',
        },
        {
          from: ['/nerm/api/patch-role-profiles'],
          to: '/docs/api/nerm/v1/patch-role-profiles',
        },
        {
          from: ['/nerm/api/patch-roles'],
          to: '/docs/api/nerm/v1/patch-roles',
        },
        {
          from: ['/nerm/api/patch-user'],
          to: '/docs/api/nerm/v1/patch-user',
        },
        {
          from: ['/nerm/api/patch-user-manager'],
          to: '/docs/api/nerm/v1/patch-user-manager',
        },
        {
          from: ['/nerm/api/patch-user-managers'],
          to: '/docs/api/nerm/v1/patch-user-managers',
        },
        {
          from: ['/nerm/api/patch-user-profile'],
          to: '/docs/api/nerm/v1/patch-user-profile',
        },
        {
          from: ['/nerm/api/patch-user-profiles'],
          to: '/docs/api/nerm/v1/patch-user-profiles',
        },
        {
          from: ['/nerm/api/patch-user-role'],
          to: '/docs/api/nerm/v1/patch-user-role',
        },
        {
          from: ['/nerm/api/patch-user-roles'],
          to: '/docs/api/nerm/v1/patch-user-roles',
        },
        {
          from: ['/nerm/api/patch-users'],
          to: '/docs/api/nerm/v1/patch-users',
        },
        {
          from: ['/nerm/api/patch-workflow-session'],
          to: '/docs/api/nerm/v1/patch-workflow-session',
        },
        {
          from: ['/nerm/api/post-advanced-search'],
          to: '/docs/api/nerm/v1/post-advanced-search',
        },
        {
          from: ['/nerm/api/post-attribute-option'],
          to: '/docs/api/nerm/v1/post-attribute-option',
        },
        {
          from: ['/nerm/api/post-attribute-options'],
          to: '/docs/api/nerm/v1/post-attribute-options',
        },
        {
          from: ['/nerm/api/post-profile'],
          to: '/docs/api/nerm/v1/post-profile',
        },
        {
          from: ['/nerm/api/post-profile-avatar'],
          to: '/docs/api/nerm/v1/post-profile-avatar',
        },
        {
          from: ['/nerm/api/post-profile-type'],
          to: '/docs/api/nerm/v1/post-profile-type',
        },
        {
          from: ['/nerm/api/post-profile-upload'],
          to: '/docs/api/nerm/v1/post-profile-upload',
        },
        {
          from: ['/nerm/api/post-profiles'],
          to: '/docs/api/nerm/v1/post-profiles',
        },
        {
          from: ['/nerm/api/post-role'],
          to: '/docs/api/nerm/v1/post-role',
        },
        {
          from: ['/nerm/api/post-role-profile'],
          to: '/docs/api/nerm/v1/post-role-profile',
        },
        {
          from: ['/nerm/api/post-role-profiles'],
          to: '/docs/api/nerm/v1/post-role-profiles',
        },
        {
          from: ['/nerm/api/post-roles'],
          to: '/docs/api/nerm/v1/post-roles',
        },
        {
          from: ['/nerm/api/post-user'],
          to: '/docs/api/nerm/v1/post-user',
        },
        {
          from: ['/nerm/api/post-user-avatar'],
          to: '/docs/api/nerm/v1/post-user-avatar',
        },
        {
          from: ['/nerm/api/post-user-manager'],
          to: '/docs/api/nerm/v1/post-user-manager',
        },
        {
          from: ['/nerm/api/post-user-managers'],
          to: '/docs/api/nerm/v1/post-user-managers',
        },
        {
          from: ['/nerm/api/post-user-profile'],
          to: '/docs/api/nerm/v1/post-user-profile',
        },
        {
          from: ['/nerm/api/post-user-role'],
          to: '/docs/api/nerm/v1/post-user-role',
        },
        {
          from: ['/nerm/api/post-user-roles'],
          to: '/docs/api/nerm/v1/post-user-roles',
        },
        {
          from: ['/nerm/api/post-users'],
          to: '/docs/api/nerm/v1/post-users',
        },
        {
          from: ['/nerm/api/post-workflow-session'],
          to: '/docs/api/nerm/v1/post-workflow-session',
        },
        {
          from: ['/nerm/api/post-workflow-session-upload'],
          to: '/docs/api/nerm/v1/post-workflow-session-upload',
        },
        {
          from: ['/nerm/api/run-advanced-search'],
          to: '/docs/api/nerm/v1/run-advanced-search',
        },
        {
          from: ['/nerm/api/run-advanced-searchby-id'],
          to: '/docs/api/nerm/v1/run-advanced-searchby-id',
        },
      ],
      createRedirects(existingPath) {
        if (existingPath.startsWith('/docs')) {
          return [existingPath.replace('/docs', '/idn')];
        }
        return undefined; // Return a falsy value: no redirect created
      },
    },
  ],
  [
    'docusaurus-plugin-openapi-docs',
    {
      id: 'idn-api',
      docsPluginId: 'idn',
      config: {
        idn_v3: {
          specPath: 'static/api-specs/idn/sailpoint-api.v3.yaml',
          outputDir: 'docs/api/v3',
          downloadUrl:
            'https://raw.githubusercontent.com/sailpoint-oss/api-specs/main/dereferenced/deref-sailpoint-api.v3.yaml',
          sidebarOptions: {
            groupPathsBy: 'tag',
            categoryLinkSource: 'tag',
          },
          template: 'api.mustache',
        },
        idn_beta: {
          specPath: 'static/api-specs/idn/sailpoint-api.beta.yaml',
          outputDir: 'docs/api/beta',
          downloadUrl:
            'https://raw.githubusercontent.com/sailpoint-oss/api-specs/main/dereferenced/deref-sailpoint-api.beta.yaml',
          sidebarOptions: {
            groupPathsBy: 'tag',
            categoryLinkSource: 'tag',
          },
          template: 'api.mustache',
        },
      },
    },
  ],
  [
    'docusaurus-plugin-openapi-docs',
    {
      id: 'iiq-api',
      docsPluginId: 'iiq',
      config: {
        iiq: {
          specPath: 'static/api-specs/iiq/sailpoint-api.iiq.yaml',
          outputDir: 'docs/api/iiq',
          downloadUrl:
            'https://raw.githubusercontent.com/sailpoint-oss/api-specs/main/iiq/sailpoint-api.iiq.yaml',
          sidebarOptions: {
            groupPathsBy: 'tag',
            categoryLinkSource: 'tag',
          },
          template: 'api.mustache',
        },
      },
    },
  ],
  [
    'docusaurus-plugin-openapi-docs',
    {
      id: 'nerm-api',
      docsPluginId: 'nerm',
      config: {
        nerm: {
          specPath: 'static/api-specs/nerm/openapi.yaml',
          outputDir: 'docs/api/nerm/v1',
          downloadUrl:
            'https://raw.githubusercontent.com/sailpoint-oss/api-specs/main/dereferenced/deref-sailpoint-api.nerm.yaml',
          sidebarOptions: {
            groupPathsBy: 'tag',
            categoryLinkSource: 'tag',
          },
          template: 'api.mustache',
        },
      },
    },
  ],
];
