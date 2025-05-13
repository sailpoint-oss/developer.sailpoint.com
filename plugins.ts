const {createApiPageMD} = require('./createApiPageMD');
import clsx from "clsx";

const pluginConfig = [
  /*
  [
    'rsdoctor',
    {
      rsdoctorOptions: {
        // mode: 'lite',
      },
    },
  ],

   */
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
          to: '/docs/extensibility/configuration-management/saas-configuration',
        },
        {
          from: ['/idn/docs/event-triggers'],
          to: '/docs/extensibility/event-triggers',
        },
        {
          from: ['/idn/docs/event-triggers/available'],
          to: '/docs/extensibility/event-triggers/available',
        },
        {
          from: ['/idn/docs/event-triggers/early-access'],
          to: '/docs/extensibility/event-triggers/early-access',
        },
        {
          from: ['/idn/docs/event-triggers/filtering-events'],
          to: '/docs/extensibility/event-triggers/filtering-events',
        },
        {
          from: ['/idn/docs/event-triggers/preparing-subscriber-service'],
          to: '/docs/extensibility/event-triggers/preparing-subscriber-service',
        },
        {
          from: [
            '/idn/docs/event-triggers/responding-request-response-trigger',
          ],
          to: '/docs/extensibility/event-triggers/responding-request-response-trigger',
        },
        {
          from: ['/idn/docs/event-triggers/subscribing-to-trigger'],
          to: '/docs/extensibility/event-triggers/subscribing-to-trigger',
        },
        {
          from: ['/idn/docs/event-triggers/testing-triggers'],
          to: '/docs/extensibility/event-triggers/testing-triggers',
        },
        {
          from: ['/idn/docs/event-triggers/trigger-types'],
          to: '/docs/extensibility/event-triggers/trigger-types',
        },
        {
          from: ['/idn/docs/event-triggers/triggers/access-request-decision'],
          to: '/docs/extensibility/event-triggers/triggers/access-request-decision',
        },
        {
          from: [
            '/idn/docs/event-triggers/triggers/access-request-dynamic-approval',
          ],
          to: '/docs/extensibility/event-triggers/triggers/access-request-dynamic-approval',
        },
        {
          from: ['/idn/docs/event-triggers/triggers/access-request-submitted'],
          to: '/docs/extensibility/event-triggers/triggers/access-request-submitted',
        },
        {
          from: [
            '/idn/docs/event-triggers/triggers/account-aggregation-completed',
          ],
          to: '/docs/extensibility/event-triggers/triggers/account-aggregation-completed',
        },
        {
          from: ['/idn/docs/event-triggers/triggers/campaign-activated'],
          to: '/docs/extensibility/event-triggers/triggers/campaign-activated',
        },
        {
          from: ['/idn/docs/event-triggers/triggers/campaign-ended'],
          to: '/docs/extensibility/event-triggers/triggers/campaign-ended',
        },
        {
          from: ['/idn/docs/event-triggers/triggers/campaign-generated'],
          to: '/docs/extensibility/event-triggers/triggers/campaign-generated',
        },
        {
          from: ['/idn/docs/event-triggers/triggers/certification-signed-off'],
          to: '/docs/extensibility/event-triggers/triggers/certification-signed-off',
        },
        {
          from: ['/idn/docs/event-triggers/triggers/form-submitted'],
          to: '/docs/extensibility/event-triggers/triggers/form-submitted',
        },
        {
          from: [
            '/idn/docs/event-triggers/triggers/identity-attribute-changed',
          ],
          to: '/docs/extensibility/event-triggers/triggers/identity-attribute-changed',
        },
        {
          from: ['/idn/docs/event-triggers/triggers/identity-created'],
          to: '/docs/extensibility/event-triggers/triggers/identity-created',
        },
        {
          from: ['/idn/docs/event-triggers/triggers/identity-deleted'],
          to: '/docs/extensibility/event-triggers/triggers/identity-deleted',
        },
        {
          from: [
            '/idn/docs/event-triggers/triggers/native-change-account-created',
          ],
          to: '/docs/extensibility/event-triggers/triggers/native-change-account-created',
        },
        {
          from: [
            '/idn/docs/event-triggers/triggers/native-change-account-deleted',
          ],
          to: '/docs/extensibility/event-triggers/triggers/native-change-account-deleted',
        },
        {
          from: [
            '/idn/docs/event-triggers/triggers/native-change-account-updated',
          ],
          to: '/docs/extensibility/event-triggers/triggers/native-change-account-updated',
        },
        {
          from: ['/idn/docs/event-triggers/triggers/outlier-detected'],
          to: '/docs/extensibility/event-triggers/triggers/outlier-detected',
        },
        {
          from: ['/idn/docs/event-triggers/triggers/provisioning-completed'],
          to: '/docs/extensibility/event-triggers/triggers/provisioning-completed',
        },
        {
          from: ['/idn/docs/event-triggers/triggers/scheduled-search'],
          to: '/docs/extensibility/event-triggers/triggers/scheduled-search',
        },
        {
          from: ['/idn/docs/event-triggers/triggers/source-account-created'],
          to: '/docs/extensibility/event-triggers/triggers/source-account-created',
        },
        {
          from: ['/idn/docs/event-triggers/triggers/source-account-deleted'],
          to: '/docs/extensibility/event-triggers/triggers/source-account-deleted',
        },
        {
          from: ['/idn/docs/event-triggers/triggers/source-account-updated'],
          to: '/docs/extensibility/event-triggers/triggers/source-account-updated',
        },
        {
          from: ['/idn/docs/event-triggers/triggers/source-created'],
          to: '/docs/extensibility/event-triggers/triggers/source-created',
        },
        {
          from: ['/idn/docs/event-triggers/triggers/source-deleted'],
          to: '/docs/extensibility/event-triggers/triggers/source-deleted',
        },
        {
          from: ['/idn/docs/event-triggers/triggers/source-updated'],
          to: '/docs/extensibility/event-triggers/triggers/source-updated',
        },
        {
          from: ['/idn/docs/event-triggers/triggers/va-cluster-status-change'],
          to: '/docs/extensibility/event-triggers/triggers/va-cluster-status-change',
        },
        {
          from: ['/idn/docs/rules'],
          to: '/docs/extensibility/rules',
        },
        {
          from: ['/idn/docs/rules/cloud-rules'],
          to: '/docs/extensibility/rules/cloud-rules',
        },
        {
          from: [
            '/idn/docs/rules/cloud-rules/account-profile-attribute-generator',
          ],
          to: '/docs/extensibility/rules/cloud-rules/account-profile-attribute-generator',
        },
        {
          from: [
            '/idn/docs/rules/cloud-rules/account-profile-attribute-generator-template',
          ],
          to: '/docs/extensibility/rules/cloud-rules/account-profile-attribute-generator-template',
        },
        {
          from: ['/idn/docs/rules/cloud-rules/before-provisioning-rule'],
          to: '/docs/extensibility/rules/cloud-rules/before-provisioning-rule',
        },
        {
          from: ['/idn/docs/rules/cloud-rules/buildmap-rule'],
          to: '/docs/extensibility/rules/cloud-rules/buildmap-rule',
        },
        {
          from: ['/idn/docs/rules/cloud-rules/correlation-rule'],
          to: '/docs/extensibility/rules/cloud-rules/correlation-rule',
        },
        {
          from: ['/idn/docs/rules/cloud-rules/transform-rule'],
          to: '/docs/extensibility/rules/cloud-rules/transform-rule',
        },
        {
          from: ['/idn/docs/rules/cloud-rules/identity-attribute-rule'],
          to: '/docs/extensibility/rules/cloud-rules/identity-attribute-rule',
        },
        {
          from: ['/idn/docs/rules/cloud-rules/manager-correlation-rule'],
          to: '/docs/extensibility/rules/cloud-rules/manager-correlation-rule',
        },
        {
          from: ['/idn/docs/rules/connector-rules'],
          to: '/docs/extensibility/rules/connector-rules',
        },
        {
          from: [
            '/idn/docs/rules/connector-rules/before-and-after-rule-operations',
          ],
          to: '/docs/extensibility/rules/connector-rules/before-and-after-rule-operations',
        },
        {
          from: ['/idn/docs/rules/connector-rules/jdbc-buildmap-rule'],
          to: '/docs/extensibility/rules/connector-rules/jdbc-buildmap-rule',
        },
        {
          from: ['/idn/docs/rules/connector-rules/jdbc-provisioning-rule'],
          to: '/docs/extensibility/rules/connector-rules/jdbc-provisioning-rule',
        },
        {
          from: ['/idn/docs/rules/connector-rules/sap-buildmap-rule'],
          to: '/docs/extensibility/rules/connector-rules/sap-buildmap-rule',
        },
        {
          from: [
            '/idn/docs/rules/connector-rules/sap-provisioning-modify-rule',
          ],
          to: '/docs/extensibility/rules/connector-rules/sap-provisioning-modify-rule',
        },
        {
          from: [
            '/idn/docs/rules/connector-rules/webservices-after-provisioning-rule',
          ],
          to: '/docs/extensibility/rules/connector-rules/webservices-after-provisioning-rule',
        },
        {
          from: [
            '/idn/docs/rules/connector-rules/webservices-before-provisioning-rule',
          ],
          to: '/docs/extensibility/rules/connector-rules/webservices-before-provisioning-rule',
        },
        {
          from: ['/idn/docs/rules/guides'],
          to: '/docs/extensibility/rules/guides',
        },
        {
          from: ['/idn/docs/rules/guides/your-first-rule'],
          to: '/docs/extensibility/rules/guides/your-first-rule',
        },
        {
          from: ['/idn/docs/rules/java-docs'],
          to: '/docs/extensibility/rules/java-docs',
        },
        {
          from: ['/idn/docs/rules/rule-utility'],
          to: '/docs/extensibility/rules/rule-utility',
        },
        {
          from: ['/idn/docs/transforms'],
          to: '/docs/extensibility/transforms',
        },
        {
          from: ['/idn/docs/transforms/guides'],
          to: '/docs/extensibility/transforms/guides',
        },
        {
          from: ['/idn/docs/transforms/guides/identity-context-examples'],
          to: '/docs/extensibility/transforms/guides/identity-context-examples',
        },
        {
          from: ['/idn/docs/transforms/guides/lifecycle-state-transform'],
          to: '/docs/extensibility/transforms/guides/lifecycle-state-transform',
        },
        {
          from: ['/idn/docs/transforms/guides/temporary-password'],
          to: '/docs/extensibility/transforms/guides/temporary-password',
        },
        {
          from: [
            '/idn/docs/transforms/guides/transforms-in-provisioning-policies',
          ],
          to: '/docs/extensibility/transforms/guides/transforms-in-provisioning-policies',
        },
        {
          from: ['/idn/docs/transforms/guides/your-first-transform'],
          to: '/docs/extensibility/transforms/guides/your-first-transform',
        },
        {
          from: ['/idn/docs/transforms/operations'],
          to: '/docs/extensibility/transforms/operations',
        },
        {
          from: ['/idn/docs/transforms/operations/account-attribute'],
          to: '/docs/extensibility/transforms/operations/account-attribute',
        },
        {
          from: ['/idn/docs/transforms/operations/base64-decode'],
          to: '/docs/extensibility/transforms/operations/base64-decode',
        },
        {
          from: ['/idn/docs/transforms/operations/base64-encode'],
          to: '/docs/extensibility/transforms/operations/base64-encode',
        },
        {
          from: ['/idn/docs/transforms/operations/concatenation'],
          to: '/docs/extensibility/transforms/operations/concatenation',
        },
        {
          from: ['/idn/docs/transforms/operations/conditional'],
          to: '/docs/extensibility/transforms/operations/conditional',
        },
        {
          from: ['/idn/docs/transforms/operations/date-compare'],
          to: '/docs/extensibility/transforms/operations/date-compare',
        },
        {
          from: ['/idn/docs/transforms/operations/date-format'],
          to: '/docs/extensibility/transforms/operations/date-format',
        },
        {
          from: ['/idn/docs/transforms/operations/date-math'],
          to: '/docs/extensibility/transforms/operations/date-math',
        },
        {
          from: ['/idn/docs/transforms/operations/decompose-diacritical-marks'],
          to: '/docs/extensibility/transforms/operations/decompose-diacritical-marks',
        },
        {
          from: ['/idn/docs/transforms/operations/e164-phone'],
          to: '/docs/extensibility/transforms/operations/e164-phone',
        },
        {
          from: ['/idn/docs/transforms/operations/first-valid'],
          to: '/docs/extensibility/transforms/operations/first-valid',
        },
        {
          from: ['/idn/docs/transforms/operations/generate-random-string'],
          to: '/docs/extensibility/transforms/operations/generate-random-string',
        },
        {
          from: ['/idn/docs/transforms/operations/get-end-of-string'],
          to: '/docs/extensibility/transforms/operations/get-end-of-string',
        },
        {
          from: [
            '/idn/docs/transforms/operations/get-reference-identity-attribute',
          ],
          to: '/docs/extensibility/transforms/operations/get-reference-identity-attribute',
        },
        {
          from: ['/idn/docs/transforms/operations/identity-attribute'],
          to: '/docs/extensibility/transforms/operations/identity-attribute',
        },
        {
          from: ['/idn/docs/transforms/operations/index-of'],
          to: '/docs/extensibility/transforms/operations/index-of',
        },
        {
          from: ['/idn/docs/transforms/operations/iso-3166'],
          to: '/docs/extensibility/transforms/operations/iso-3166',
        },
        {
          from: ['/idn/docs/transforms/operations/last-index-of'],
          to: '/docs/extensibility/transforms/operations/last-index-of',
        },
        {
          from: ['/idn/docs/transforms/operations/left-pad'],
          to: '/docs/extensibility/transforms/operations/left-pad',
        },
        {
          from: ['/idn/docs/transforms/operations/lookup'],
          to: '/docs/extensibility/transforms/operations/lookup',
        },
        {
          from: ['/idn/docs/transforms/operations/lower'],
          to: '/docs/extensibility/transforms/operations/lower',
        },
        {
          from: ['/idn/docs/transforms/operations/name-normalizer'],
          to: '/docs/extensibility/transforms/operations/name-normalizer',
        },
        {
          from: ['/idn/docs/transforms/operations/random-alphanumeric'],
          to: '/docs/extensibility/transforms/operations/random-alphanumeric',
        },
        {
          from: ['/idn/docs/transforms/operations/random-numeric'],
          to: '/docs/extensibility/transforms/operations/random-numeric',
        },
        {
          from: ['/idn/docs/transforms/operations/reference'],
          to: '/docs/extensibility/transforms/operations/reference',
        },
        {
          from: ['/idn/docs/transforms/operations/replace'],
          to: '/docs/extensibility/transforms/operations/replace',
        },
        {
          from: ['/idn/docs/transforms/operations/replace-all'],
          to: '/docs/extensibility/transforms/operations/replace-all',
        },
        {
          from: ['/idn/docs/transforms/operations/right-pad'],
          to: '/docs/extensibility/transforms/operations/right-pad',
        },
        {
          from: ['/idn/docs/transforms/operations/rule'],
          to: '/docs/extensibility/transforms/operations/rule',
        },
        {
          from: ['/idn/docs/transforms/operations/split'],
          to: '/docs/extensibility/transforms/operations/split',
        },
        {
          from: ['/idn/docs/transforms/operations/static'],
          to: '/docs/extensibility/transforms/operations/static',
        },
        {
          from: ['/idn/docs/transforms/operations/substring'],
          to: '/docs/extensibility/transforms/operations/substring',
        },
        {
          from: ['/idn/docs/transforms/operations/trim'],
          to: '/docs/extensibility/transforms/operations/trim',
        },
        {
          from: ['/idn/docs/transforms/operations/upper'],
          to: '/docs/extensibility/transforms/operations/upper',
        },
        {
          from: ['/idn/docs/transforms/operations/username-generator'],
          to: '/docs/extensibility/transforms/operations/username-generator',
        },
        {
          from: ['/idn/docs/transforms/operations/uuid-generator'],
          to: '/docs/extensibility/transforms/operations/uuid-generator',
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
          from: ['/idn/docs/aic-ciem-er-diagram'],
          to: '/docs/reporting/aic-ciem-er-diagram',
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
          specPath: 'static/code-examples/v2025/v2025.yaml',
          outputDir: 'docs/api/v2025',
          sidebarOptions: {
            groupPathsBy: 'tag',
            categoryLinkSource: 'tag',
            sidebarGenerators: {
            createDocItem(
              item,
              { sidebarOptions: { customProps }, basePath }
            ) {
              const sidebar_label = item.frontMatter.sidebar_label;
              const title = item.title;
              const id =
                item.type === "schema" ? `schemas/${item.id}` : item.id;
              const className =
                item.type === "api"
                  ? clsx(
                      {
                        "menu__list-item--deprecated": item.api.deprecated,
                        "menu__list-item--experimental": !!item.api.parameters?.find(header => header.name === 'X-SailPoint-Experimental'), // checks for existence of extension and adds "experimental" class
                        "api-method": !!item.api.method,
                      },
                      item.api.method
                    )
                  : clsx(
                      {
                        "menu__list-item--deprecated": item.schema.deprecated,
                      },
                      "schema"
                    );
              return {
                type: "doc" as const,
                id:
                  basePath === "" || undefined
                    ? `${id}`
                    : `${basePath}/${id}`,
                label: (sidebar_label as string) ?? title ?? id,
                customProps: customProps,
                className: className ? className : undefined,
              };
            },
          }},
          version: 'v2025',
          label: 'v2025',
          downloadUrl: 'https://raw.githubusercontent.com/sailpoint-oss/api-specs/refs/heads/main/dereferenced/deref-sailpoint-api.v2025.yaml',
          baseUrl: '/docs/api/v2025',
          template: 'api.mustache',
          markdownGenerators: {
            createApiPageMD,
          },
          versions: {
            v2024: {
              specPath: 'static/code-examples/v2024/v2024.yaml',
              outputDir: 'docs/api/v2024',
              downloadUrl: 'https://raw.githubusercontent.com/sailpoint-oss/api-specs/main/dereferenced/deref-sailpoint-api.v2024.yaml',
              label: 'v2024',
              baseUrl: '/docs/api/v2024',
            },
            v3: {
              specPath: 'static/code-examples/v3/v3.yaml',
              outputDir: 'docs/api/v3',
              downloadUrl: 'https://raw.githubusercontent.com/sailpoint-oss/api-specs/main/dereferenced/deref-sailpoint-api.v3.yaml',
              label: 'v3',
              baseUrl: '/docs/api/v3',
            },
            beta: {
              specPath: 'static/code-examples/beta/beta.yaml',
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


export default pluginConfig;
