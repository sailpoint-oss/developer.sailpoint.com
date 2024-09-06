const {createApiPageMD} = require('./createApiPageMD');

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
          to: '/ambassadors',
          from: ['/ambassador-program', '/ambassador'],
        },
        {
          from: ['/idn/docs/saas-configuration'],
          to: '/extensibility/configuration-management/saas-configuration',
        },
        {
          from: ['/idn/docs/event-triggers'],
          to: '/extensibility/event-triggers',
        },
        {
          from: ['/idn/docs/event-triggers/available'],
          to: '/extensibility/event-triggers/available',
        },
        {
          from: ['/idn/docs/event-triggers/early-access'],
          to: '/extensibility/event-triggers/early-access',
        },
        {
          from: ['/idn/docs/event-triggers/filtering-events'],
          to: '/extensibility/event-triggers/filtering-events',
        },
        {
          from: ['/idn/docs/event-triggers/preparing-subscriber-service'],
          to: '/extensibility/event-triggers/preparing-subscriber-service',
        },
        {
          from: [
            '/idn/docs/event-triggers/responding-request-response-trigger',
          ],
          to: '/extensibility/event-triggers/responding-request-response-trigger',
        },
        {
          from: ['/idn/docs/event-triggers/subscribing-to-trigger'],
          to: '/extensibility/event-triggers/subscribing-to-trigger',
        },
        {
          from: ['/idn/docs/event-triggers/testing-triggers'],
          to: '/extensibility/event-triggers/testing-triggers',
        },
        {
          from: ['/idn/docs/event-triggers/trigger-types'],
          to: '/extensibility/event-triggers/trigger-types',
        },
        {
          from: ['/idn/docs/event-triggers/triggers/access-request-decision'],
          to: '/extensibility/event-triggers/triggers/access-request-decision',
        },
        {
          from: [
            '/idn/docs/event-triggers/triggers/access-request-dynamic-approval',
          ],
          to: '/extensibility/event-triggers/triggers/access-request-dynamic-approval',
        },
        {
          from: ['/idn/docs/event-triggers/triggers/access-request-submitted'],
          to: '/extensibility/event-triggers/triggers/access-request-submitted',
        },
        {
          from: [
            '/idn/docs/event-triggers/triggers/account-aggregation-completed',
          ],
          to: '/extensibility/event-triggers/triggers/account-aggregation-completed',
        },
        {
          from: ['/idn/docs/event-triggers/triggers/campaign-activated'],
          to: '/extensibility/event-triggers/triggers/campaign-activated',
        },
        {
          from: ['/idn/docs/event-triggers/triggers/campaign-ended'],
          to: '/extensibility/event-triggers/triggers/campaign-ended',
        },
        {
          from: ['/idn/docs/event-triggers/triggers/campaign-generated'],
          to: '/extensibility/event-triggers/triggers/campaign-generated',
        },
        {
          from: ['/idn/docs/event-triggers/triggers/certification-signed-off'],
          to: '/extensibility/event-triggers/triggers/certification-signed-off',
        },
        {
          from: ['/idn/docs/event-triggers/triggers/form-submitted'],
          to: '/extensibility/event-triggers/triggers/form-submitted',
        },
        {
          from: [
            '/idn/docs/event-triggers/triggers/identity-attribute-changed',
          ],
          to: '/extensibility/event-triggers/triggers/identity-attribute-changed',
        },
        {
          from: ['/idn/docs/event-triggers/triggers/identity-created'],
          to: '/extensibility/event-triggers/triggers/identity-created',
        },
        {
          from: ['/idn/docs/event-triggers/triggers/identity-deleted'],
          to: '/extensibility/event-triggers/triggers/identity-deleted',
        },
        {
          from: [
            '/idn/docs/event-triggers/triggers/native-change-account-created',
          ],
          to: '/extensibility/event-triggers/triggers/native-change-account-created',
        },
        {
          from: [
            '/idn/docs/event-triggers/triggers/native-change-account-deleted',
          ],
          to: '/extensibility/event-triggers/triggers/native-change-account-deleted',
        },
        {
          from: [
            '/idn/docs/event-triggers/triggers/native-change-account-updated',
          ],
          to: '/extensibility/event-triggers/triggers/native-change-account-updated',
        },
        {
          from: ['/idn/docs/event-triggers/triggers/outlier-detected'],
          to: '/extensibility/event-triggers/triggers/outlier-detected',
        },
        {
          from: ['/idn/docs/event-triggers/triggers/provisioning-completed'],
          to: '/extensibility/event-triggers/triggers/provisioning-completed',
        },
        {
          from: ['/idn/docs/event-triggers/triggers/scheduled-search'],
          to: '/extensibility/event-triggers/triggers/scheduled-search',
        },
        {
          from: ['/idn/docs/event-triggers/triggers/source-account-created'],
          to: '/extensibility/event-triggers/triggers/source-account-created',
        },
        {
          from: ['/idn/docs/event-triggers/triggers/source-account-deleted'],
          to: '/extensibility/event-triggers/triggers/source-account-deleted',
        },
        {
          from: ['/idn/docs/event-triggers/triggers/source-account-updated'],
          to: '/extensibility/event-triggers/triggers/source-account-updated',
        },
        {
          from: ['/idn/docs/event-triggers/triggers/source-created'],
          to: '/extensibility/event-triggers/triggers/source-created',
        },
        {
          from: ['/idn/docs/event-triggers/triggers/source-deleted'],
          to: '/extensibility/event-triggers/triggers/source-deleted',
        },
        {
          from: ['/idn/docs/event-triggers/triggers/source-updated'],
          to: '/extensibility/event-triggers/triggers/source-updated',
        },
        {
          from: ['/idn/docs/event-triggers/triggers/va-cluster-status-change'],
          to: '/extensibility/event-triggers/triggers/va-cluster-status-change',
        },
        {
          from: ['/idn/docs/rules'],
          to: '/extensibility/rules',
        },
        {
          from: ['/idn/docs/rules/cloud-rules'],
          to: '/extensibility/rules/cloud-rules',
        },
        {
          from: [
            '/idn/docs/rules/cloud-rules/account-profile-attribute-generator',
          ],
          to: '/extensibility/rules/cloud-rules/account-profile-attribute-generator',
        },
        {
          from: [
            '/idn/docs/rules/cloud-rules/account-profile-attribute-generator-template',
          ],
          to: '/extensibility/rules/cloud-rules/account-profile-attribute-generator-template',
        },
        {
          from: ['/idn/docs/rules/cloud-rules/before-provisioning-rule'],
          to: '/extensibility/rules/cloud-rules/before-provisioning-rule',
        },
        {
          from: ['/idn/docs/rules/cloud-rules/buildmap-rule'],
          to: '/extensibility/rules/cloud-rules/buildmap-rule',
        },
        {
          from: ['/idn/docs/rules/cloud-rules/correlation-rule'],
          to: '/extensibility/rules/cloud-rules/correlation-rule',
        },
        {
          from: ['/idn/docs/rules/cloud-rules/transform-rule'],
          to: '/extensibility/rules/cloud-rules/transform-rule',
        },
        {
          from: ['/idn/docs/rules/cloud-rules/identity-attribute-rule'],
          to: '/extensibility/rules/cloud-rules/identity-attribute-rule',
        },
        {
          from: ['/idn/docs/rules/cloud-rules/manager-correlation-rule'],
          to: '/extensibility/rules/cloud-rules/manager-correlation-rule',
        },
        {
          from: ['/idn/docs/rules/connector-rules'],
          to: '/extensibility/rules/connector-rules',
        },
        {
          from: [
            '/idn/docs/rules/connector-rules/before-and-after-rule-operations',
          ],
          to: '/extensibility/rules/connector-rules/before-and-after-rule-operations',
        },
        {
          from: ['/idn/docs/rules/connector-rules/jdbc-buildmap-rule'],
          to: '/extensibility/rules/connector-rules/jdbc-buildmap-rule',
        },
        {
          from: ['/idn/docs/rules/connector-rules/jdbc-provisioning-rule'],
          to: '/extensibility/rules/connector-rules/jdbc-provisioning-rule',
        },
        {
          from: ['/idn/docs/rules/connector-rules/sap-buildmap-rule'],
          to: '/extensibility/rules/connector-rules/sap-buildmap-rule',
        },
        {
          from: [
            '/idn/docs/rules/connector-rules/sap-provisioning-modify-rule',
          ],
          to: '/extensibility/rules/connector-rules/sap-provisioning-modify-rule',
        },
        {
          from: [
            '/idn/docs/rules/connector-rules/webservices-after-provisioning-rule',
          ],
          to: '/extensibility/rules/connector-rules/webservices-after-provisioning-rule',
        },
        {
          from: [
            '/idn/docs/rules/connector-rules/webservices-before-provisioning-rule',
          ],
          to: '/extensibility/rules/connector-rules/webservices-before-provisioning-rule',
        },
        {
          from: ['/idn/docs/rules/guides'],
          to: '/extensibility/rules/guides',
        },
        {
          from: ['/idn/docs/rules/guides/your-first-rule'],
          to: '/extensibility/rules/guides/your-first-rule',
        },
        {
          from: ['/idn/docs/rules/java-docs'],
          to: '/extensibility/rules/java-docs',
        },
        {
          from: ['/idn/docs/rules/rule-utility'],
          to: '/extensibility/rules/rule-utility',
        },
        {
          from: ['/idn/docs/transforms'],
          to: '/extensibility/transforms',
        },
        {
          from: ['/idn/docs/transforms/guides'],
          to: '/extensibility/transforms/guides',
        },
        {
          from: ['/idn/docs/transforms/guides/identity-context-examples'],
          to: '/extensibility/transforms/guides/identity-context-examples',
        },
        {
          from: ['/idn/docs/transforms/guides/lifecycle-state-transform'],
          to: '/extensibility/transforms/guides/lifecycle-state-transform',
        },
        {
          from: ['/idn/docs/transforms/guides/temporary-password'],
          to: '/extensibility/transforms/guides/temporary-password',
        },
        {
          from: [
            '/idn/docs/transforms/guides/transforms-in-provisioning-policies',
          ],
          to: '/extensibility/transforms/guides/transforms-in-provisioning-policies',
        },
        {
          from: ['/idn/docs/transforms/guides/your-first-transform'],
          to: '/extensibility/transforms/guides/your-first-transform',
        },
        {
          from: ['/idn/docs/transforms/operations'],
          to: '/extensibility/transforms/operations',
        },
        {
          from: ['/idn/docs/transforms/operations/account-attribute'],
          to: '/extensibility/transforms/operations/account-attribute',
        },
        {
          from: ['/idn/docs/transforms/operations/base64-decode'],
          to: '/extensibility/transforms/operations/base64-decode',
        },
        {
          from: ['/idn/docs/transforms/operations/base64-encode'],
          to: '/extensibility/transforms/operations/base64-encode',
        },
        {
          from: ['/idn/docs/transforms/operations/concatenation'],
          to: '/extensibility/transforms/operations/concatenation',
        },
        {
          from: ['/idn/docs/transforms/operations/conditional'],
          to: '/extensibility/transforms/operations/conditional',
        },
        {
          from: ['/idn/docs/transforms/operations/date-compare'],
          to: '/extensibility/transforms/operations/date-compare',
        },
        {
          from: ['/idn/docs/transforms/operations/date-format'],
          to: '/extensibility/transforms/operations/date-format',
        },
        {
          from: ['/idn/docs/transforms/operations/date-math'],
          to: '/extensibility/transforms/operations/date-math',
        },
        {
          from: ['/idn/docs/transforms/operations/decompose-diacritical-marks'],
          to: '/extensibility/transforms/operations/decompose-diacritical-marks',
        },
        {
          from: ['/idn/docs/transforms/operations/e164-phone'],
          to: '/extensibility/transforms/operations/e164-phone',
        },
        {
          from: ['/idn/docs/transforms/operations/first-valid'],
          to: '/extensibility/transforms/operations/first-valid',
        },
        {
          from: ['/idn/docs/transforms/operations/generate-random-string'],
          to: '/extensibility/transforms/operations/generate-random-string',
        },
        {
          from: ['/idn/docs/transforms/operations/get-end-of-string'],
          to: '/extensibility/transforms/operations/get-end-of-string',
        },
        {
          from: [
            '/idn/docs/transforms/operations/get-reference-identity-attribute',
          ],
          to: '/extensibility/transforms/operations/get-reference-identity-attribute',
        },
        {
          from: ['/idn/docs/transforms/operations/identity-attribute'],
          to: '/extensibility/transforms/operations/identity-attribute',
        },
        {
          from: ['/idn/docs/transforms/operations/index-of'],
          to: '/extensibility/transforms/operations/index-of',
        },
        {
          from: ['/idn/docs/transforms/operations/iso-3166'],
          to: '/extensibility/transforms/operations/iso-3166',
        },
        {
          from: ['/idn/docs/transforms/operations/last-index-of'],
          to: '/extensibility/transforms/operations/last-index-of',
        },
        {
          from: ['/idn/docs/transforms/operations/left-pad'],
          to: '/extensibility/transforms/operations/left-pad',
        },
        {
          from: ['/idn/docs/transforms/operations/lookup'],
          to: '/extensibility/transforms/operations/lookup',
        },
        {
          from: ['/idn/docs/transforms/operations/lower'],
          to: '/extensibility/transforms/operations/lower',
        },
        {
          from: ['/idn/docs/transforms/operations/name-normalizer'],
          to: '/extensibility/transforms/operations/name-normalizer',
        },
        {
          from: ['/idn/docs/transforms/operations/random-alphanumeric'],
          to: '/extensibility/transforms/operations/random-alphanumeric',
        },
        {
          from: ['/idn/docs/transforms/operations/random-numeric'],
          to: '/extensibility/transforms/operations/random-numeric',
        },
        {
          from: ['/idn/docs/transforms/operations/reference'],
          to: '/extensibility/transforms/operations/reference',
        },
        {
          from: ['/idn/docs/transforms/operations/replace'],
          to: '/extensibility/transforms/operations/replace',
        },
        {
          from: ['/idn/docs/transforms/operations/replace-all'],
          to: '/extensibility/transforms/operations/replace-all',
        },
        {
          from: ['/idn/docs/transforms/operations/right-pad'],
          to: '/extensibility/transforms/operations/right-pad',
        },
        {
          from: ['/idn/docs/transforms/operations/rule'],
          to: '/extensibility/transforms/operations/rule',
        },
        {
          from: ['/idn/docs/transforms/operations/split'],
          to: '/extensibility/transforms/operations/split',
        },
        {
          from: ['/idn/docs/transforms/operations/static'],
          to: '/extensibility/transforms/operations/static',
        },
        {
          from: ['/idn/docs/transforms/operations/substring'],
          to: '/extensibility/transforms/operations/substring',
        },
        {
          from: ['/idn/docs/transforms/operations/trim'],
          to: '/extensibility/transforms/operations/trim',
        },
        {
          from: ['/idn/docs/transforms/operations/upper'],
          to: '/extensibility/transforms/operations/upper',
        },
        {
          from: ['/idn/docs/transforms/operations/username-generator'],
          to: '/extensibility/transforms/operations/username-generator',
        },
        {
          from: ['/idn/docs/transforms/operations/uuid-generator'],
          to: '/extensibility/transforms/operations/uuid-generator',
        },
        {
          from: ['/idn/docs/access-intelligence-center'],
          to: '/reporting/access-intelligence-center',
        },
        {
          from: ['/idn/docs/aic-audit-er-diagram'],
          to: '/reporting/aic-audit-er-diagram',
        },
        {
          from: ['/idn/docs/aic-er-diagram'],
          to: '/reporting/aic-er-diagram',
        },
        {
          from: ['/idn/docs/aic-videos'],
          to: '/reporting/aic-videos',
        },
        {
          from: ['/idn/docs/saas-connectivity'],
          to: '/connectivity/saas-connectivity',
        },
        {
          from: ['/idn/docs/saas-connectivity/commands/account-create'],
          to: '/connectivity/saas-connectivity/commands/account-create',
        },
        {
          from: ['/idn/docs/saas-connectivity/commands/account-delete'],
          to: '/connectivity/saas-connectivity/commands/account-delete',
        },
        {
          from: ['/idn/docs/saas-connectivity/commands/account-disable'],
          to: '/connectivity/saas-connectivity/commands/account-disable',
        },
        {
          from: ['/idn/docs/saas-connectivity/commands/account-discover'],
          to: '/connectivity/saas-connectivity/commands/account-discover',
        },
        {
          from: ['/idn/docs/saas-connectivity/commands/account-enable'],
          to: '/connectivity/saas-connectivity/commands/account-enable',
        },
        {
          from: ['/idn/docs/saas-connectivity/commands/account-list'],
          to: '/connectivity/saas-connectivity/commands/account-list',
        },
        {
          from: ['/idn/docs/saas-connectivity/commands/account-read'],
          to: '/connectivity/saas-connectivity/commands/account-read',
        },
        {
          from: ['/idn/docs/saas-connectivity/commands/account-unlock'],
          to: '/connectivity/saas-connectivity/commands/account-unlock',
        },
        {
          from: ['/idn/docs/saas-connectivity/commands/account-update'],
          to: '/connectivity/saas-connectivity/commands/account-update',
        },
        {
          from: ['/idn/docs/saas-connectivity/commands/change-password'],
          to: '/connectivity/saas-connectivity/commands/change-password',
        },
        {
          from: ['/idn/docs/saas-connectivity/commands/entitlement-list'],
          to: '/connectivity/saas-connectivity/commands/entitlement-list',
        },
        {
          from: ['/idn/docs/saas-connectivity/commands/entitlement-read'],
          to: '/connectivity/saas-connectivity/commands/entitlement-read',
        },
        {
          from: ['/idn/docs/saas-connectivity/commands/source-data-discover'],
          to: '/connectivity/saas-connectivity/commands/source-data-discover',
        },
        {
          from: ['/idn/docs/saas-connectivity/commands/source-data-read'],
          to: '/connectivity/saas-connectivity/commands/source-data-read',
        },
        {
          from: ['/idn/docs/saas-connectivity/commands/test-connection'],
          to: '/connectivity/saas-connectivity/commands/test-connection',
        },
        {
          from: ['/idn/docs/saas-connectivity/common-cli-commands'],
          to: '/connectivity/saas-connectivity/common-cli-commands',
        },
        {
          from: ['/idn/docs/saas-connectivity/connector-commands'],
          to: '/connectivity/saas-connectivity/connector-commands',
        },
        {
          from: ['/idn/docs/saas-connectivity/connector-spec'],
          to: '/connectivity/saas-connectivity/connector-spec',
        },
        {
          from: ['/idn/docs/saas-connectivity/connector-spec/card'],
          to: '/connectivity/saas-connectivity/connector-spec/card',
        },
        {
          from: ['/idn/docs/saas-connectivity/connector-spec/initial-value'],
          to: '/connectivity/saas-connectivity/connector-spec/initial-value',
        },
        {
          from: ['/idn/docs/saas-connectivity/connector-spec/key-value'],
          to: '/connectivity/saas-connectivity/connector-spec/key-value',
        },
        {
          from: ['/idn/docs/saas-connectivity/connector-spec/list'],
          to: '/connectivity/saas-connectivity/connector-spec/list',
        },
        {
          from: ['/idn/docs/saas-connectivity/connector-spec/radio'],
          to: '/connectivity/saas-connectivity/connector-spec/radio',
        },
        {
          from: ['/idn/docs/saas-connectivity/connector-spec/select'],
          to: '/connectivity/saas-connectivity/connector-spec/select',
        },
        {
          from: ['/idn/docs/saas-connectivity/customizers'],
          to: '/connectivity/saas-connectivity/customizers',
        },
        {
          from: ['/idn/docs/saas-connectivity/customizers/commands'],
          to: '/connectivity/saas-connectivity/customizers/commands',
        },
        {
          from: [
            '/idn/docs/saas-connectivity/customizers/commands/account-create',
          ],
          to: '/connectivity/saas-connectivity/customizers/commands/account-create',
        },
        {
          from: [
            '/idn/docs/saas-connectivity/customizers/commands/account-delete',
          ],
          to: '/connectivity/saas-connectivity/customizers/commands/account-delete',
        },
        {
          from: [
            '/idn/docs/saas-connectivity/customizers/commands/account-disable',
          ],
          to: '/connectivity/saas-connectivity/customizers/commands/account-disable',
        },
        {
          from: [
            '/idn/docs/saas-connectivity/customizers/commands/account-enable',
          ],
          to: '/connectivity/saas-connectivity/customizers/commands/account-enable',
        },
        {
          from: [
            '/idn/docs/saas-connectivity/customizers/commands/account-list',
          ],
          to: '/connectivity/saas-connectivity/customizers/commands/account-list',
        },
        {
          from: [
            '/idn/docs/saas-connectivity/customizers/commands/account-read',
          ],
          to: '/connectivity/saas-connectivity/customizers/commands/account-read',
        },
        {
          from: [
            '/idn/docs/saas-connectivity/customizers/commands/account-unlock',
          ],
          to: '/connectivity/saas-connectivity/customizers/commands/account-unlock',
        },
        {
          from: [
            '/idn/docs/saas-connectivity/customizers/commands/account-update',
          ],
          to: '/connectivity/saas-connectivity/customizers/commands/account-update',
        },
        {
          from: [
            '/idn/docs/saas-connectivity/customizers/commands/change-password',
          ],
          to: '/connectivity/saas-connectivity/customizers/commands/change-password',
        },
        {
          from: [
            '/idn/docs/saas-connectivity/customizers/commands/entitlement-list',
          ],
          to: '/connectivity/saas-connectivity/customizers/commands/entitlement-list',
        },
        {
          from: [
            '/idn/docs/saas-connectivity/customizers/commands/entitlement-read',
          ],
          to: '/connectivity/saas-connectivity/customizers/commands/entitlement-read',
        },
        {
          from: [
            '/idn/docs/saas-connectivity/customizers/commands/source-data-discover',
          ],
          to: '/connectivity/saas-connectivity/customizers/commands/source-data-discover',
        },
        {
          from: [
            '/idn/docs/saas-connectivity/customizers/commands/source-data-read',
          ],
          to: '/connectivity/saas-connectivity/customizers/commands/source-data-read',
        },
        {
          from: [
            '/idn/docs/saas-connectivity/customizers/commands/test-connection',
          ],
          to: '/connectivity/saas-connectivity/customizers/commands/test-connection',
        },
        {
          from: ['/idn/docs/saas-connectivity/customizers/example'],
          to: '/connectivity/saas-connectivity/customizers/example',
        },
        {
          from: ['/idn/docs/saas-connectivity/customizers/getting-started'],
          to: '/connectivity/saas-connectivity/customizers/getting-started',
        },
        {
          from: ['/idn/docs/saas-connectivity/customizers/linking'],
          to: '/connectivity/saas-connectivity/customizers/linking',
        },
        {
          from: ['/idn/docs/saas-connectivity/customizers/testing'],
          to: '/connectivity/saas-connectivity/customizers/testing',
        },
        {
          from: ['/idn/docs/saas-connectivity/customizers/upload'],
          to: '/connectivity/saas-connectivity/customizers/upload',
        },
        {
          from: ['/idn/docs/saas-connectivity/example-connectors'],
          to: '/connectivity/saas-connectivity/example-connectors',
        },
        {
          from: ['/idn/docs/saas-connectivity/in-depth/api-calls'],
          to: '/connectivity/saas-connectivity/in-depth/api-calls',
        },
        {
          from: ['/idn/docs/saas-connectivity/in-depth/cli-advanced'],
          to: '/connectivity/saas-connectivity/in-depth/cli-advanced',
        },
        {
          from: ['/idn/docs/saas-connectivity/in-depth/connector-timeouts'],
          to: '/connectivity/saas-connectivity/in-depth/connector-timeouts',
        },
        {
          from: ['/idn/docs/saas-connectivity/in-depth/debugging'],
          to: '/connectivity/saas-connectivity/in-depth/debugging',
        },
        {
          from: ['/idn/docs/saas-connectivity/in-depth/error-handling'],
          to: '/connectivity/saas-connectivity/in-depth/error-handling',
        },
        {
          from: ['/idn/docs/saas-connectivity/in-depth/handling-rate-limits'],
          to: '/connectivity/saas-connectivity/in-depth/handling-rate-limits',
        },
        {
          from: ['/idn/docs/saas-connectivity/in-depth/linting'],
          to: '/connectivity/saas-connectivity/in-depth/linting',
        },
        {
          from: ['/idn/docs/saas-connectivity/in-depth/logging'],
          to: '/connectivity/saas-connectivity/in-depth/logging',
        },
        {
          from: ['/idn/docs/saas-connectivity/in-depth/testing'],
          to: '/connectivity/saas-connectivity/in-depth/testing',
        },
        {
          from: ['/idn/docs/saas-connectivity/limits'],
          to: '/connectivity/saas-connectivity/limits',
        },
        {
          from: ['/idn/docs/saas-connectivity/postman-collection'],
          to: '/connectivity/saas-connectivity/postman-collection',
        },
        {
          from: ['/idn/docs/saas-connectivity/prerequisites'],
          to: '/connectivity/saas-connectivity/prerequisites',
        },
        {
          from: ['/idn/docs/saas-connectivity/test-build-deploy'],
          to: '/connectivity/saas-connectivity/test-build-deploy',
        },
        {
          from: ['/idn/docs/saas-connectivity/videos'],
          to: '/connectivity/saas-connectivity/videos',
        },
        {
          from: ['/idn/docs/sds-audit-er-diagram'],
          to: '/reporting/sds-audit-er-diagram',
        },
        {
          from: ['/idn/docs/sds-er-diagram'],
          to: '/reporting/sds-er-diagram',
        },
        {
          from: ['/idn/docs/secure-data-share'],
          to: '/reporting/secure-data-share',
        },
        {
          from: ['/idn/docs/global-platform-resources/ip-address-allow-list'],
          to: '/guides/ip-address-allow-list',
        },
        {
          from: ['/idn/docs/disable-access-profile-requests'],
          to: '/guides/disable-access-profile-requests',
        },
        {
          from: ['/idn/api/service-accounts'],
          to: '/guides/service-accounts',
        },
        {
          from: ['/iiq/docs'],
          to: '/iiq',
        },
        {
          from: ['/iiq/docs/plugin-developer-guide'],
          to: '/iiq/plugin-developer-guide',
        },
        {
          from: ['/iiq/docs/plugin-developer-guide/overview'],
          to: '/iiq/plugin-developer-guide/overview',
        },
        {
          from: ['/iiq/docs/plugin-developer-guide/manifest'],
          to: '/iiq/plugin-developer-guide/manifest',
        },
        {
          from: ['/iiq/docs/plugin-developer-guide/build-file'],
          to: '/iiq/plugin-developer-guide/build-file',
        },
        {
          from: ['/iiq/docs/plugin-developer-guide/database-scripts'],
          to: '/iiq/plugin-developer-guide/database-scripts',
        },
        {
          from: ['/iiq/docs/plugin-developer-guide/ui-elements'],
          to: '/iiq/plugin-developer-guide/ui-elements',
        },
        {
          from: ['/iiq/docs/plugin-developer-guide/xml-artifacts'],
          to: '/iiq/plugin-developer-guide/xml-artifacts',
        },
        {
          from: [
            '/iiq/docs/plugin-developer-guide/java-classes-rest-resources',
          ],
          to: '/iiq/plugin-developer-guide/java-classes-rest-resources',
        },
        {
          from: ['/iiq/docs/plugin-developer-guide/java-classes-executors'],
          to: '/iiq/plugin-developer-guide/java-classes-executors',
        },
        {
          from: ['/iiq/docs/plugin-developer-guide/installation'],
          to: '/iiq/plugin-developer-guide/installation',
        },
        {
          from: ['/iiq/docs/plugin-developer-guide/appendix-migration'],
          to: '/iiq/plugin-developer-guide/appendix-migration',
        },
        {
          from: ['/iiq/docs/plugin-developer-guide/updates'],
          to: '/iiq/plugin-developer-guide/updates',
        },
        {
          from: ['/iiq/api'],
          to: '/api/iiq',
        },
        {
          from: ['/iiq/api/identityiq-scim-rest-api'],
          to: '/api/iiq/identityiq-scim-rest-api',
        },
        {
          from: ['/iiq/api/accounts'],
          to: '/api/iiq/accounts',
        },
        {
          from: ['/iiq/api/alerts'],
          to: '/api/iiq/alerts',
        },
        {
          from: ['/iiq/api/applications'],
          to: '/api/iiq/applications',
        },
        {
          from: ['/iiq/api/check-policy-violations'],
          to: '/api/iiq/check-policy-violations',
        },
        {
          from: ['/iiq/api/checked-policy-violations'],
          to: '/api/iiq/checked-policy-violations',
        },
        {
          from: ['/iiq/api/create-account'],
          to: '/api/iiq/create-account',
        },
        {
          from: ['/iiq/api/create-alert'],
          to: '/api/iiq/create-alert',
        },
        {
          from: ['/iiq/api/create-user'],
          to: '/api/iiq/create-user',
        },
        {
          from: ['/iiq/api/delete-account'],
          to: '/api/iiq/delete-account',
        },
        {
          from: ['/iiq/api/delete-user'],
          to: '/api/iiq/delete-user',
        },
        {
          from: ['/iiq/api/entitlements'],
          to: '/api/iiq/entitlements',
        },
        {
          from: ['/iiq/api/get-account-by-id'],
          to: '/api/iiq/get-account-by-id',
        },
        {
          from: ['/iiq/api/get-accounts'],
          to: '/api/iiq/get-accounts',
        },
        {
          from: ['/iiq/api/get-alert-by-id'],
          to: '/api/iiq/get-alert-by-id',
        },
        {
          from: ['/iiq/api/get-alerts'],
          to: '/api/iiq/get-alerts',
        },
        {
          from: ['/iiq/api/get-application'],
          to: '/api/iiq/get-application',
        },
        {
          from: ['/iiq/api/get-applications'],
          to: '/api/iiq/get-applications',
        },
        {
          from: ['/iiq/api/get-entitlement-by-id'],
          to: '/api/iiq/get-entitlement-by-id',
        },
        {
          from: ['/iiq/api/get-entitlements'],
          to: '/api/iiq/get-entitlements',
        },
        {
          from: ['/iiq/api/get-launched-workflow-by-id'],
          to: '/api/iiq/get-launched-workflow-by-id',
        },
        {
          from: ['/iiq/api/get-object-config-by-id'],
          to: '/api/iiq/get-object-config-by-id',
        },
        {
          from: ['/iiq/api/get-object-configs'],
          to: '/api/iiq/get-object-configs',
        },
        {
          from: ['/iiq/api/get-policy-violation-by-id'],
          to: '/api/iiq/get-policy-violation-by-id',
        },
        {
          from: ['/iiq/api/get-policy-violations'],
          to: '/api/iiq/get-policy-violations',
        },
        {
          from: ['/iiq/api/get-resource-type-by-id'],
          to: '/api/iiq/get-resource-type-by-id',
        },
        {
          from: ['/iiq/api/get-resource-types'],
          to: '/api/iiq/get-resource-types',
        },
        {
          from: ['/iiq/api/get-role'],
          to: '/api/iiq/get-role',
        },
        {
          from: ['/iiq/api/get-roles'],
          to: '/api/iiq/get-roles',
        },
        {
          from: ['/iiq/api/get-schema-by-id'],
          to: '/api/iiq/get-schema-by-id',
        },
        {
          from: ['/iiq/api/get-schemas'],
          to: '/api/iiq/get-schemas',
        },
        {
          from: ['/iiq/api/get-task-result-by-id'],
          to: '/api/iiq/get-task-result-by-id',
        },
        {
          from: ['/iiq/api/get-user-by-id'],
          to: '/api/iiq/get-user-by-id',
        },
        {
          from: ['/iiq/api/get-users'],
          to: '/api/iiq/get-users',
        },
        {
          from: ['/iiq/api/get-workflow-by-id'],
          to: '/api/iiq/get-workflow-by-id',
        },
        {
          from: ['/iiq/api/launch-workflow'],
          to: '/api/iiq/launch-workflow',
        },
        {
          from: ['/iiq/api/launched-workflows'],
          to: '/api/iiq/launched-workflows',
        },
        {
          from: ['/iiq/api/launched-workflows-get'],
          to: '/api/iiq/launched-workflows-get',
        },
        {
          from: ['/iiq/api/object-config'],
          to: '/api/iiq/object-config',
        },
        {
          from: ['/iiq/api/policy-violations'],
          to: '/api/iiq/policy-violations',
        },
        {
          from: ['/iiq/api/resource-types'],
          to: '/api/iiq/resource-types',
        },
        {
          from: ['/iiq/api/roles'],
          to: '/api/iiq/roles',
        },
        {
          from: ['/iiq/api/schemas'],
          to: '/api/iiq/schemas',
        },
        {
          from: ['/iiq/api/service-provider-config'],
          to: '/api/iiq/service-provider-config',
        },
        {
          from: ['/iiq/api/service-provider-config-get'],
          to: '/api/iiq/service-provider-config-get',
        },
        {
          from: ['/iiq/api/task-results'],
          to: '/api/iiq/task-results',
        },
        {
          from: ['/iiq/api/task-results-get'],
          to: '/api/iiq/task-results-get',
        },
        {
          from: ['/iiq/api/update-account'],
          to: '/api/iiq/update-account',
        },
        {
          from: ['/iiq/api/update-user'],
          to: '/api/iiq/update-user',
        },
        {
          from: ['/iiq/api/users'],
          to: '/api/iiq/users',
        },
        {
          from: ['/iiq/api/workflows'],
          to: '/api/iiq/workflows',
        },
        {
          from: ['/iiq/api/workflows-get'],
          to: '/api/iiq/workflows-get',
        },
        {
          from: ['/nerm/api/nerm-api'],
          to: '/api/nerm/v1/nerm-api',
        },
        {
          from: ['/nerm/api'],
          to: '/api/nerm/v1',
        },
        {
          from: ['/nerm/api/authentication'],
          to: '/api/nerm/authentication',
        },
        {
          from: ['/nerm/api/create-approval-action'],
          to: '/api/nerm/v1/create-approval-action',
        },
        {
          from: ['/nerm/api/create-ask-security-question-action'],
          to: '/api/nerm/v1/create-ask-security-question-action',
        },
        {
          from: ['/nerm/api/create-auto-assign-action'],
          to: '/api/nerm/v1/create-auto-assign-action',
        },
        {
          from: ['/nerm/api/create-automated-workflow'],
          to: '/api/nerm/v1/create-automated-workflow',
        },
        {
          from: ['/nerm/api/create-batch-update-action'],
          to: '/api/nerm/v1/create-batch-update-action',
        },
        {
          from: ['/nerm/api/create-batch-workflow'],
          to: '/api/nerm/v1/create-batch-workflow',
        },
        {
          from: ['/nerm/api/create-close-session-action'],
          to: '/api/nerm/v1/create-close-session-action',
        },
        {
          from: ['/nerm/api/create-contributors-action'],
          to: '/api/nerm/v1/create-contributors-action',
        },
        {
          from: ['/nerm/api/create-create-profile-action'],
          to: '/api/nerm/v1/create-create-profile-action',
        },
        {
          from: ['/nerm/api/create-create-workflow'],
          to: '/api/nerm/v1/create-create-workflow',
        },
        {
          from: ['/nerm/api/create-duplicate-prevention-action'],
          to: '/api/nerm/v1/create-duplicate-prevention-action',
        },
        {
          from: ['/nerm/api/create-email-verification-action'],
          to: '/api/nerm/v1/create-email-verification-action',
        },
        {
          from: ['/nerm/api/create-form'],
          to: '/api/nerm/v1/create-form',
        },
        {
          from: ['/nerm/api/create-form-attribute'],
          to: '/api/nerm/v1/create-form-attribute',
        },
        {
          from: ['/nerm/api/create-fulfillment-action'],
          to: '/api/nerm/v1/create-fulfillment-action',
        },
        {
          from: ['/nerm/api/create-identity-proofing-action'],
          to: '/api/nerm/v1/create-identity-proofing-action',
        },
        {
          from: ['/nerm/api/create-invitation-action'],
          to: '/api/nerm/v1/create-invitation-action',
        },
        {
          from: ['/nerm/api/create-ldap-action'],
          to: '/api/nerm/v1/create-ldap-action',
        },
        {
          from: ['/nerm/api/create-login-workflow'],
          to: '/api/nerm/v1/create-login-workflow',
        },
        {
          from: ['/nerm/api/create-notification-action'],
          to: '/api/nerm/v1/create-notification-action',
        },
        {
          from: ['/nerm/api/create-password-reset-action'],
          to: '/api/nerm/v1/create-password-reset-action',
        },
        {
          from: ['/nerm/api/create-password-update-workflow'],
          to: '/api/nerm/v1/create-password-update-workflow',
        },
        {
          from: ['/nerm/api/create-permission'],
          to: '/api/nerm/v1/create-permission',
        },
        {
          from: ['/nerm/api/create-profile-check-action'],
          to: '/api/nerm/v1/create-profile-check-action',
        },
        {
          from: ['/nerm/api/create-profile-page'],
          to: '/api/nerm/v1/create-profile-page',
        },
        {
          from: ['/nerm/api/create-profile-select-action'],
          to: '/api/nerm/v1/create-profile-select-action',
        },
        {
          from: ['/nerm/api/create-profile-type-role'],
          to: '/api/nerm/v1/create-profile-type-role',
        },
        {
          from: ['/nerm/api/create-registration-workflow'],
          to: '/api/nerm/v1/create-registration-workflow',
        },
        {
          from: ['/nerm/api/create-request-action'],
          to: '/api/nerm/v1/create-request-action',
        },
        {
          from: ['/nerm/api/create-rest-api-action'],
          to: '/api/nerm/v1/create-rest-api-action',
        },
        {
          from: ['/nerm/api/create-review-action'],
          to: '/api/nerm/v1/create-review-action',
        },
        {
          from: ['/nerm/api/create-run-workflow-action'],
          to: '/api/nerm/v1/create-run-workflow-action',
        },
        {
          from: ['/nerm/api/create-set-attributes-action'],
          to: '/api/nerm/v1/create-set-attributes-action',
        },
        {
          from: ['/nerm/api/create-set-security-question-action'],
          to: '/api/nerm/v1/create-set-security-question-action',
        },
        {
          from: ['/nerm/api/create-soap-api-action'],
          to: '/api/nerm/v1/create-soap-api-action',
        },
        {
          from: ['/nerm/api/create-status-change-action'],
          to: '/api/nerm/v1/create-status-change-action',
        },
        {
          from: ['/nerm/api/create-synced-attribute'],
          to: '/api/nerm/v1/create-synced-attribute',
        },
        {
          from: ['/nerm/api/create-unassign-action'],
          to: '/api/nerm/v1/create-unassign-action',
        },
        {
          from: ['/nerm/api/create-update-profile-action'],
          to: '/api/nerm/v1/create-update-profile-action',
        },
        {
          from: ['/nerm/api/create-update-workflow'],
          to: '/api/nerm/v1/create-update-workflow',
        },
        {
          from: ['/nerm/api/create-user-profiles'],
          to: '/api/nerm/v1/create-user-profiles',
        },
        {
          from: ['/nerm/api/create-username-password-action'],
          to: '/api/nerm/v1/create-username-password-action',
        },
        {
          from: ['/nerm/api/create-workflow-page'],
          to: '/api/nerm/v1/create-workflow-page',
        },
        {
          from: ['/nerm/api/delete-attribute-option'],
          to: '/api/nerm/v1/delete-attribute-option',
        },
        {
          from: ['/nerm/api/delete-profile'],
          to: '/api/nerm/v1/delete-profile',
        },
        {
          from: ['/nerm/api/delete-profile-type'],
          to: '/api/nerm/v1/delete-profile-type',
        },
        {
          from: ['/nerm/api/delete-profiles'],
          to: '/api/nerm/v1/delete-profiles',
        },
        {
          from: ['/nerm/api/delete-role-profile'],
          to: '/api/nerm/v1/delete-role-profile',
        },
        {
          from: ['/nerm/api/delete-synced-attribute'],
          to: '/api/nerm/v1/delete-synced-attribute',
        },
        {
          from: ['/nerm/api/delete-user'],
          to: '/api/nerm/v1/delete-user',
        },
        {
          from: ['/nerm/api/delete-user-profile'],
          to: '/api/nerm/v1/delete-user-profile',
        },
        {
          from: ['/nerm/api/delete-user-profiles'],
          to: '/api/nerm/v1/delete-user-profiles',
        },
        {
          from: ['/nerm/api/delete-user-role'],
          to: '/api/nerm/v1/delete-user-role',
        },
        {
          from: ['/nerm/api/get-advanced-search'],
          to: '/api/nerm/v1/get-advanced-search',
        },
        {
          from: ['/nerm/api/get-attribute'],
          to: '/api/nerm/v1/get-attribute',
        },
        {
          from: ['/nerm/api/get-attribute-option'],
          to: '/api/nerm/v1/get-attribute-option',
        },
        {
          from: ['/nerm/api/get-attribute-options'],
          to: '/api/nerm/v1/get-attribute-options',
        },
        {
          from: ['/nerm/api/get-attributes'],
          to: '/api/nerm/v1/get-attributes',
        },
        {
          from: ['/nerm/api/get-identity-proofing-results'],
          to: '/api/nerm/v1/get-identity-proofing-results',
        },
        {
          from: ['/nerm/api/get-job-status'],
          to: '/api/nerm/v1/get-job-status',
        },
        {
          from: ['/nerm/api/get-profile'],
          to: '/api/nerm/v1/get-profile',
        },
        {
          from: ['/nerm/api/get-profile-avatar'],
          to: '/api/nerm/v1/get-profile-avatar',
        },
        {
          from: ['/nerm/api/get-profile-type'],
          to: '/api/nerm/v1/get-profile-type',
        },
        {
          from: ['/nerm/api/get-profile-type-attributes'],
          to: '/api/nerm/v1/get-profile-type-attributes',
        },
        {
          from: ['/nerm/api/get-profile-types'],
          to: '/api/nerm/v1/get-profile-types',
        },
        {
          from: ['/nerm/api/get-profile-upload'],
          to: '/api/nerm/v1/get-profile-upload',
        },
        {
          from: ['/nerm/api/get-profiles'],
          to: '/api/nerm/v1/get-profiles',
        },
        {
          from: ['/nerm/api/get-risk-level'],
          to: '/api/nerm/v1/get-risk-level',
        },
        {
          from: ['/nerm/api/get-risk-levels'],
          to: '/api/nerm/v1/get-risk-levels',
        },
        {
          from: ['/nerm/api/get-risk-score'],
          to: '/api/nerm/v1/get-risk-score',
        },
        {
          from: ['/nerm/api/get-risk-scores'],
          to: '/api/nerm/v1/get-risk-scores',
        },
        {
          from: ['/nerm/api/get-role'],
          to: '/api/nerm/v1/get-role',
        },
        {
          from: ['/nerm/api/get-role-profile'],
          to: '/api/nerm/v1/get-role-profile',
        },
        {
          from: ['/nerm/api/get-role-profiles'],
          to: '/api/nerm/v1/get-role-profiles',
        },
        {
          from: ['/nerm/api/get-roles'],
          to: '/api/nerm/v1/get-roles',
        },
        {
          from: ['/nerm/api/get-user'],
          to: '/api/nerm/v1/get-user',
        },
        {
          from: ['/nerm/api/get-user-avatar'],
          to: '/api/nerm/v1/get-user-avatar',
        },
        {
          from: ['/nerm/api/get-user-manager'],
          to: '/api/nerm/v1/get-user-manager',
        },
        {
          from: ['/nerm/api/get-user-managers'],
          to: '/api/nerm/v1/get-user-managers',
        },
        {
          from: ['/nerm/api/get-user-profile'],
          to: '/api/nerm/v1/get-user-profile',
        },
        {
          from: ['/nerm/api/get-user-profiles'],
          to: '/api/nerm/v1/get-user-profiles',
        },
        {
          from: ['/nerm/api/get-user-role'],
          to: '/api/nerm/v1/get-user-role',
        },
        {
          from: ['/nerm/api/get-user-roles'],
          to: '/api/nerm/v1/get-user-roles',
        },
        {
          from: ['/nerm/api/get-users'],
          to: '/api/nerm/v1/get-users',
        },
        {
          from: ['/nerm/api/get-workflow-actions'],
          to: '/api/nerm/v1/get-workflow-actions',
        },
        {
          from: ['/nerm/api/get-workflow-session'],
          to: '/api/nerm/v1/get-workflow-session',
        },
        {
          from: ['/nerm/api/get-workflow-session-upload'],
          to: '/api/nerm/v1/get-workflow-session-upload',
        },
        {
          from: ['/nerm/api/get-workflow-sessions'],
          to: '/api/nerm/v1/get-workflow-sessions',
        },
        {
          from: ['/nerm/api/getting-started'],
          to: '/api/nerm/getting-started',
        },
        {
          from: ['/nerm/api/pagination-metadata-filtering'],
          to: '/api/nerm/pagination-metadata-filtering',
        },
        {
          from: ['/nerm/api/patch-advanced-search'],
          to: '/api/nerm/v1/patch-advanced-search',
        },
        {
          from: ['/nerm/api/patch-attribute-option'],
          to: '/api/nerm/v1/patch-attribute-option',
        },
        {
          from: ['/nerm/api/patch-attribute-options'],
          to: '/api/nerm/v1/patch-attribute-options',
        },
        {
          from: ['/nerm/api/patch-profile'],
          to: '/api/nerm/v1/patch-profile',
        },
        {
          from: ['/nerm/api/patch-profile-type'],
          to: '/api/nerm/v1/patch-profile-type',
        },
        {
          from: ['/nerm/api/patch-profiles'],
          to: '/api/nerm/v1/patch-profiles',
        },
        {
          from: ['/nerm/api/patch-role'],
          to: '/api/nerm/v1/patch-role',
        },
        {
          from: ['/nerm/api/patch-role-profile'],
          to: '/api/nerm/v1/patch-role-profile',
        },
        {
          from: ['/nerm/api/patch-role-profiles'],
          to: '/api/nerm/v1/patch-role-profiles',
        },
        {
          from: ['/nerm/api/patch-roles'],
          to: '/api/nerm/v1/patch-roles',
        },
        {
          from: ['/nerm/api/patch-user'],
          to: '/api/nerm/v1/patch-user',
        },
        {
          from: ['/nerm/api/patch-user-manager'],
          to: '/api/nerm/v1/patch-user-manager',
        },
        {
          from: ['/nerm/api/patch-user-managers'],
          to: '/api/nerm/v1/patch-user-managers',
        },
        {
          from: ['/nerm/api/patch-user-profile'],
          to: '/api/nerm/v1/patch-user-profile',
        },
        {
          from: ['/nerm/api/patch-user-profiles'],
          to: '/api/nerm/v1/patch-user-profiles',
        },
        {
          from: ['/nerm/api/patch-user-role'],
          to: '/api/nerm/v1/patch-user-role',
        },
        {
          from: ['/nerm/api/patch-user-roles'],
          to: '/api/nerm/v1/patch-user-roles',
        },
        {
          from: ['/nerm/api/patch-users'],
          to: '/api/nerm/v1/patch-users',
        },
        {
          from: ['/nerm/api/patch-workflow-session'],
          to: '/api/nerm/v1/patch-workflow-session',
        },
        {
          from: ['/nerm/api/post-advanced-search'],
          to: '/api/nerm/v1/post-advanced-search',
        },
        {
          from: ['/nerm/api/post-attribute-option'],
          to: '/api/nerm/v1/post-attribute-option',
        },
        {
          from: ['/nerm/api/post-attribute-options'],
          to: '/api/nerm/v1/post-attribute-options',
        },
        {
          from: ['/nerm/api/post-profile'],
          to: '/api/nerm/v1/post-profile',
        },
        {
          from: ['/nerm/api/post-profile-avatar'],
          to: '/api/nerm/v1/post-profile-avatar',
        },
        {
          from: ['/nerm/api/post-profile-type'],
          to: '/api/nerm/v1/post-profile-type',
        },
        {
          from: ['/nerm/api/post-profile-upload'],
          to: '/api/nerm/v1/post-profile-upload',
        },
        {
          from: ['/nerm/api/post-profiles'],
          to: '/api/nerm/v1/post-profiles',
        },
        {
          from: ['/nerm/api/post-role'],
          to: '/api/nerm/v1/post-role',
        },
        {
          from: ['/nerm/api/post-role-profile'],
          to: '/api/nerm/v1/post-role-profile',
        },
        {
          from: ['/nerm/api/post-role-profiles'],
          to: '/api/nerm/v1/post-role-profiles',
        },
        {
          from: ['/nerm/api/post-roles'],
          to: '/api/nerm/v1/post-roles',
        },
        {
          from: ['/nerm/api/post-user'],
          to: '/api/nerm/v1/post-user',
        },
        {
          from: ['/nerm/api/post-user-avatar'],
          to: '/api/nerm/v1/post-user-avatar',
        },
        {
          from: ['/nerm/api/post-user-manager'],
          to: '/api/nerm/v1/post-user-manager',
        },
        {
          from: ['/nerm/api/post-user-managers'],
          to: '/api/nerm/v1/post-user-managers',
        },
        {
          from: ['/nerm/api/post-user-profile'],
          to: '/api/nerm/v1/post-user-profile',
        },
        {
          from: ['/nerm/api/post-user-role'],
          to: '/api/nerm/v1/post-user-role',
        },
        {
          from: ['/nerm/api/post-user-roles'],
          to: '/api/nerm/v1/post-user-roles',
        },
        {
          from: ['/nerm/api/post-users'],
          to: '/api/nerm/v1/post-users',
        },
        {
          from: ['/nerm/api/post-workflow-session'],
          to: '/api/nerm/v1/post-workflow-session',
        },
        {
          from: ['/nerm/api/post-workflow-session-upload'],
          to: '/api/nerm/v1/post-workflow-session-upload',
        },
        {
          from: ['/nerm/api/run-advanced-search'],
          to: '/api/nerm/v1/run-advanced-search',
        },
        {
          from: ['/nerm/api/run-advanced-searchby-id'],
          to: '/api/nerm/v1/run-advanced-searchby-id',
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
      id: 'isc-api',
      docsPluginId: 'isc',
      config: {
        isc_versioned: {
          specPath: 'static/api-specs/idn/sailpoint-api.v2024.yaml',
          outputDir: 'docs/api/v2024',
          sidebarOptions: {
            groupPathsBy: 'tag',
            categoryLinkSource: 'tag',
          },
          version: 'v2024',
          label: 'v2024',
          baseUrl: '/docs/api/v2024',
          template: 'api.mustache',
          markdownGenerators: {
            createApiPageMD,
          },
          versions: {
            // v2025: {
            //   specPath: 'static/api-specs/idn/sailpoint-api.v2025.yaml',
            //   outputDir: 'docs/api/v2025',
            //   label: 'v2025',
            //   baseUrl: '/docs/api/v2025',
            // },
            v3: {
              specPath: 'static/api-specs/idn/sailpoint-api.v3.yaml',
              outputDir: 'docs/api/v3',
              downloadUrl: 'https://raw.githubusercontent.com/sailpoint-oss/api-specs/main/dereferenced/deref-sailpoint-api.v3.yaml',
              label: 'v3',
              baseUrl: '/docs/api/v3',
            },
            beta: {
              specPath: 'static/api-specs/idn/sailpoint-api.beta.yaml',
              outputDir: 'docs/api/beta',
              downloadUrl: 'https://raw.githubusercontent.com/sailpoint-oss/api-specs/main/dereferenced/deref-sailpoint-api.beta.yaml',
              label: 'Beta',
              baseUrl: '/docs/api/beta',
            },
          },
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
  [
    '@gracefullight/docusaurus-plugin-microsoft-clarity',
    {projectId: 'naher5vlxx'},
  ],
];
