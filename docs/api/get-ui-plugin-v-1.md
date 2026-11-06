## OpenAPI

```yaml GET /ui-plugins/v1/{pluginInstanceId}
openapi: 3.0.1
info:
  title: SailPoint Identity Security API
  description: Use these APIs to interact with the SailPoint Identity Security platform to achieve repeatable, automated processes with greater scalability. We encourage you to join the SailPoint Developer Community forum at https://developer.sailpoint.com/discuss to connect with other developers using our APIs.
  termsOfService: https://developer.sailpoint.com/discuss/tos
  contact:
    name: Developer Relations
    url: https://developer.sailpoint.com/discuss/api-help
  license:
    name: MIT
    url: https://opensource.org/licenses/MIT
  version: v1
servers:
  - url: https://{tenant}.api.identitynow.com
    description: This is the production API server.
    variables:
      tenant:
        default: sailpoint
        description: This is the name of your tenant, typically your company's name.
  - url: https://{apiUrl}
    description: This is the versioned API server.
    variables:
      apiUrl:
        default: sailpoint.api.identitynow.com
        description: This is the api url of your tenant
paths:
  /ui-plugins/v1/{pluginInstanceId}:
    get:
      description: |-
        Returns a plugin instance by ID for the caller's tenant.

        Requires product license `idn:ui-plugins` or `idn:ui-plugins-author` (404 if neither is present). Returns 400 `User context is invalid` when the caller has no tenant id. The instance is loaded only when it belongs to that tenant; a mismatch is 404.
      operationId: getUiPluginV1
      security:
        - userAuth:
            - idn:plugins-ui:read
        - applicationAuth:
            - idn:plugins-ui:read
      parameters:
        - name: pluginInstanceId
          in: path
          required: true
          description: UUID of the plugin instance
          example: 2c918086-7b5f-4b3e-8a1c-2d3e4f5a6b7c
          schema:
            type: string
            format: uuid
          x-sailpoint-resource-operation-id: listUiPluginsV1
        - name: X-SailPoint-Experimental
          in: header
          description: Use this header to enable this experimental API.
          example: 'true'
          schema:
            type: string
            default: 'true'
          required: true
      responses:
        '200':
          description: Plugin instance
          content:
            application/json:
              schema:
                type: object
                title: UI Plugin
                description: API response for a plugin instance (tenantId and internal fields omitted)
                required:
                  - pluginInstanceId
                  - alias
                  - name
                  - description
                  - apiScopes
                  - contentSecurityPolicies
                  - permissionPolicy
                  - iframeAllow
                  - iframeSandbox
                  - slots
                  - state
                  - created
                  - modified
                properties:
                  pluginInstanceId:
                    type: string
                    format: uuid
                    description: Unique identifier of the plugin instance
                    example: 2c918086-7b5f-4b3e-8a1c-2d3e4f5a6b7c
                  alias:
                    type: string
                    description: Tenant-unique alias for the plugin instance, normalized to lowercase
                    example: my-custom-plugin
                  name:
                    type: object
                    title: Localized String Map
                    description: Localized string keyed by locale code. At least one non-empty locale entry is required on create/update. Conventionally includes `en`.
                    additionalProperties:
                      type: string
                    example:
                      en: Example text
                      fr: Texte d'exemple
                  description:
                    type: object
                    title: Localized String Map
                    description: Localized string keyed by locale code. At least one non-empty locale entry is required on create/update. Conventionally includes `en`.
                    additionalProperties:
                      type: string
                    example:
                      en: Example text
                      fr: Texte d'exemple
                  apiScopes:
                    type: array
                    description: OAuth scopes the plugin requests at registration
                    items:
                      type: string
                    example:
                      - idn:account:read
                  contentSecurityPolicies:
                    type: object
                    title: Directive Policy Map
                    description: Map of directive name to allowlist values. Used for CSP, Permissions-Policy, and iframe-allow on create/update. Only platform allowlisted directives/keywords are accepted (see UMS validators).
                    additionalProperties:
                      type: array
                      items:
                        type: string
                    example:
                      default-src:
                        - '''self'''
                  permissionPolicy:
                    type: object
                    title: Directive Policy Map
                    description: Map of directive name to allowlist values. Used for CSP, Permissions-Policy, and iframe-allow on create/update. Only platform allowlisted directives/keywords are accepted (see UMS validators).
                    additionalProperties:
                      type: array
                      items:
                        type: string
                    example:
                      default-src:
                        - '''self'''
                  iframeAllow:
                    type: object
                    title: Directive Policy Map
                    description: Map of directive name to allowlist values. Used for CSP, Permissions-Policy, and iframe-allow on create/update. Only platform allowlisted directives/keywords are accepted (see UMS validators).
                    additionalProperties:
                      type: array
                      items:
                        type: string
                    example:
                      default-src:
                        - '''self'''
                  iframeSandbox:
                    allOf:
                      - type: array
                        title: Iframe Sandbox Grants
                        x-sailpoint-lint-ignore:
                          schema-enum-values-must-be-upper-snake-case: These values are HTML iframe sandbox tokens. The service accepts only these exact lowercase tokens.
                        description: Opt-in iframe `sandbox` tokens granted to the plugin on top of the platform sandbox baseline. Only the listed tokens are accepted (exact, case-sensitive match); any other token is rejected with 400. Duplicates are removed and the list is stored and returned sorted. Empty means no additional grants.
                        maxItems: 50
                        items:
                          type: string
                          enum:
                            - allow-top-navigation
                            - allow-popups
                            - allow-popups-to-escape-sandbox
                            - allow-downloads
                            - allow-modals
                        example:
                          - allow-modals
                          - allow-popups
                    description: Opt-in iframe `sandbox` grants, de-duplicated and sorted. Empty when the plugin has none, including instances created before this field existed.
                  activeAssetBundleId:
                    type: string
                    format: uuid
                    nullable: true
                    description: Currently active asset bundle, or null/omitted if none uploaded yet
                  slots:
                    type: array
                    items:
                      type: object
                      title: Plugin Slot
                      required:
                        - slotId
                      properties:
                        slotId:
                          type: string
                          maxLength: 128
                          description: Identifier referencing an entry in the slot registry
                          example: full-page
                        requiredCapabilities:
                          type: array
                          maxItems: 10
                          description: ISC capabilities the user must hold (AND logic) to see this plugin in the slot. Empty means unrestricted.
                          items:
                            type: string
                            enum:
                              - ORG_ADMIN
                              - SOURCE_ADMIN
                              - REPORT_ADMIN
                              - ACCESS_REQUEST_ADMIN
                              - ROLE_ADMIN
                              - CERT_ADMIN
                              - DASHBOARD
                              - SOURCE_SUBADMIN
                              - HELPDESK
                              - CLOUD_GOV_ADMIN
                              - CLOUD_GOV_USER
                          default: []
                          example:
                            - ORG_ADMIN
                        restrictToUsers:
                          type: array
                          maxItems: 10
                          description: User GUIDs (32-char hex) limiting visibility during development. Empty means no user restriction.
                          items:
                            type: string
                            minLength: 32
                            maxLength: 32
                            pattern: ^[0-9a-fA-F]{32}$
                          default: []
                          example:
                            - 2c9180867b5f4b3e8a1c2d3e4f5a6b7c
                  state:
                    type: string
                    title: Plugin Instance State
                    description: Lifecycle state for a tenant plugin installation. DISABLED instances are omitted from active-slots delivery.
                    enum:
                      - ENABLED
                      - DISABLED
                    example: ENABLED
                  created:
                    type: string
                    format: date-time
                    description: ISO 8601 creation timestamp
                    example: '2024-08-16T14:16:58.389Z'
                  modified:
                    type: string
                    format: date-time
                    description: ISO 8601 last-modified timestamp
                    example: '2024-08-16T14:16:58.389Z'
        '400':
          description: Client Error - Returned if the request body is invalid.
          content:
            application/json:
              schema:
                type: object
                title: Error Response Dto
                properties:
                  detailCode:
                    type: string
                    description: Fine-grained error code providing more detail of the error.
                    example: 400.1 Bad Request Content
                  trackingId:
                    type: string
                    description: Unique tracking id for the error.
                    example: e7eab60924f64aa284175b9fa3309599
                  messages:
                    type: array
                    description: Generic localized reason for error
                    items:
                      type: object
                      title: Error Message Dto
                      properties:
                        locale:
                          type: string
                          description: The locale for the message text, a BCP 47 language tag.
                          example: en-US
                          nullable: true
                        localeOrigin:
                          type: string
                          enum:
                            - DEFAULT
                            - REQUEST
                            - null
                          description: An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.
                          example: DEFAULT
                          nullable: true
                          title: localeorigin
                        text:
                          type: string
                          description: Actual text of the error message in the indicated locale.
                          example: The request was syntactically correct but its content is semantically invalid.
                  causes:
                    type: array
                    description: Plain-text descriptive reasons to provide additional detail to the text provided in the messages field
                    items:
                      type: object
                      title: Error Message Dto
                      properties:
                        locale:
                          type: string
                          description: The locale for the message text, a BCP 47 language tag.
                          example: en-US
                          nullable: true
                        localeOrigin:
                          type: string
                          enum:
                            - DEFAULT
                            - REQUEST
                            - null
                          description: An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.
                          example: DEFAULT
                          nullable: true
                          title: localeorigin
                        text:
                          type: string
                          description: Actual text of the error message in the indicated locale.
                          example: The request was syntactically correct but its content is semantically invalid.
        '401':
          description: Unauthorized - Returned if there is no authorization header, or if the JWT token is expired.
          content:
            application/json:
              schema:
                type: object
                properties:
                  error:
                    description: A message describing the error
                    example: 'JWT validation failed: JWT is expired'
        '403':
          description: Forbidden - Returned if the user you are running as, doesn't have access to this end-point.
          content:
            application/json:
              schema:
                type: object
                title: Error Response Dto
                properties:
                  detailCode:
                    type: string
                    description: Fine-grained error code providing more detail of the error.
                    example: 400.1 Bad Request Content
                  trackingId:
                    type: string
                    description: Unique tracking id for the error.
                    example: e7eab60924f64aa284175b9fa3309599
                  messages:
                    type: array
                    description: Generic localized reason for error
                    items:
                      type: object
                      title: Error Message Dto
                      properties:
                        locale:
                          type: string
                          description: The locale for the message text, a BCP 47 language tag.
                          example: en-US
                          nullable: true
                        localeOrigin:
                          type: string
                          enum:
                            - DEFAULT
                            - REQUEST
                            - null
                          description: An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.
                          example: DEFAULT
                          nullable: true
                          title: localeorigin
                        text:
                          type: string
                          description: Actual text of the error message in the indicated locale.
                          example: The request was syntactically correct but its content is semantically invalid.
                  causes:
                    type: array
                    description: Plain-text descriptive reasons to provide additional detail to the text provided in the messages field
                    items:
                      type: object
                      title: Error Message Dto
                      properties:
                        locale:
                          type: string
                          description: The locale for the message text, a BCP 47 language tag.
                          example: en-US
                          nullable: true
                        localeOrigin:
                          type: string
                          enum:
                            - DEFAULT
                            - REQUEST
                            - null
                          description: An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.
                          example: DEFAULT
                          nullable: true
                          title: localeorigin
                        text:
                          type: string
                          description: Actual text of the error message in the indicated locale.
                          example: The request was syntactically correct but its content is semantically invalid.
              examples:
                '403':
                  summary: An example of a 403 response object
                  value:
                    detailCode: 403 Forbidden
                    trackingId: b21b1f7ce4da4d639f2c62a57171b427
                    messages:
                      - locale: en-US
                        localeOrigin: DEFAULT
                        text: The server understood the request but refuses to authorize it.
        '404':
          description: Not Found - returned if the request URL refers to a resource or object that does not exist
          content:
            application/json:
              schema:
                type: object
                title: Error Response Dto
                properties:
                  detailCode:
                    type: string
                    description: Fine-grained error code providing more detail of the error.
                    example: 400.1 Bad Request Content
                  trackingId:
                    type: string
                    description: Unique tracking id for the error.
                    example: e7eab60924f64aa284175b9fa3309599
                  messages:
                    type: array
                    description: Generic localized reason for error
                    items:
                      type: object
                      title: Error Message Dto
                      properties:
                        locale:
                          type: string
                          description: The locale for the message text, a BCP 47 language tag.
                          example: en-US
                          nullable: true
                        localeOrigin:
                          type: string
                          enum:
                            - DEFAULT
                            - REQUEST
                            - null
                          description: An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.
                          example: DEFAULT
                          nullable: true
                          title: localeorigin
                        text:
                          type: string
                          description: Actual text of the error message in the indicated locale.
                          example: The request was syntactically correct but its content is semantically invalid.
                  causes:
                    type: array
                    description: Plain-text descriptive reasons to provide additional detail to the text provided in the messages field
                    items:
                      type: object
                      title: Error Message Dto
                      properties:
                        locale:
                          type: string
                          description: The locale for the message text, a BCP 47 language tag.
                          example: en-US
                          nullable: true
                        localeOrigin:
                          type: string
                          enum:
                            - DEFAULT
                            - REQUEST
                            - null
                          description: An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.
                          example: DEFAULT
                          nullable: true
                          title: localeorigin
                        text:
                          type: string
                          description: Actual text of the error message in the indicated locale.
                          example: The request was syntactically correct but its content is semantically invalid.
              examples:
                '404':
                  summary: An example of a 404 response object
                  value:
                    detailCode: 404 Not found
                    trackingId: b21b1f7ce4da4d639f2c62a57171b427
                    messages:
                      - locale: en-US
                        localeOrigin: DEFAULT
                        text: The server did not find a current representation for the target resource.
        '429':
          description: Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again.
          content:
            application/json:
              schema:
                type: object
                properties:
                  message:
                    description: A message describing the error
                    example: ' Rate Limit Exceeded '
        '500':
          description: Internal Server Error - Returned if there is an unexpected error.
          content:
            application/json:
              schema:
                type: object
                title: Error Response Dto
                properties:
                  detailCode:
                    type: string
                    description: Fine-grained error code providing more detail of the error.
                    example: 400.1 Bad Request Content
                  trackingId:
                    type: string
                    description: Unique tracking id for the error.
                    example: e7eab60924f64aa284175b9fa3309599
                  messages:
                    type: array
                    description: Generic localized reason for error
                    items:
                      type: object
                      title: Error Message Dto
                      properties:
                        locale:
                          type: string
                          description: The locale for the message text, a BCP 47 language tag.
                          example: en-US
                          nullable: true
                        localeOrigin:
                          type: string
                          enum:
                            - DEFAULT
                            - REQUEST
                            - null
                          description: An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.
                          example: DEFAULT
                          nullable: true
                          title: localeorigin
                        text:
                          type: string
                          description: Actual text of the error message in the indicated locale.
                          example: The request was syntactically correct but its content is semantically invalid.
                  causes:
                    type: array
                    description: Plain-text descriptive reasons to provide additional detail to the text provided in the messages field
                    items:
                      type: object
                      title: Error Message Dto
                      properties:
                        locale:
                          type: string
                          description: The locale for the message text, a BCP 47 language tag.
                          example: en-US
                          nullable: true
                        localeOrigin:
                          type: string
                          enum:
                            - DEFAULT
                            - REQUEST
                            - null
                          description: An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.
                          example: DEFAULT
                          nullable: true
                          title: localeorigin
                        text:
                          type: string
                          description: Actual text of the error message in the indicated locale.
                          example: The request was syntactically correct but its content is semantically invalid.
              examples:
                '500':
                  summary: An example of a 500 response object
                  value:
                    detailCode: 500.0 Internal Fault
                    trackingId: b21b1f7ce4da4d639f2c62a57171b427
                    messages:
                      - locale: en-US
                        localeOrigin: DEFAULT
                        text: An internal fault occurred.
components:
  securitySchemes:
    userAuth:
      type: oauth2
      x-displayName: Personal Access Token
      description: |
        OAuth2 Bearer token (JWT) generated using either a [personal access token (PAT)](https://developer.sailpoint.com/docs/api/authentication/#generate-a-personal-access-token) or through the [authorization code flow](https://developer.sailpoint.com/docs/api/authentication/#request-access-token-with-authorization-code-grant-flow).

        Personal access tokens are associated with a user in Identity Security Cloud and relies on the user's [user level](https://documentation.sailpoint.com/saas/help/common/users/index.html) (ex. Admin, Helpdesk, etc.) to determine a base level of access.

        See [Identity Security Cloud REST API Authentication](https://developer.sailpoint.com/docs/api/authentication/) for more information.
      flows:
        clientCredentials:
          tokenUrl: https://example-tenant.api.identitynow.com/oauth/token
          scopes:
            sp:scopes:default: default scope
            sp:scopes:all: access to all scopes
        authorizationCode:
          authorizationUrl: https://example-tenant.login.sailpoint.com/oauth/authorize
          tokenUrl: https://example-tenant.api.identitynow.com/oauth/token
          scopes:
            sp:scopes:default: default scope
            sp:scopes:all: access to all scopes
    applicationAuth:
      type: oauth2
      x-displayName: Client Credentials
      description: |
        OAuth2 Bearer token (JWT) generated using [client credentials flow](https://developer.sailpoint.com/docs/api/authentication/#request-access-token-with-client-credentials-grant-flow).

        Client credentials refers to tokens that are not associated with a user in Identity Security Cloud.

        See [Identity Security Cloud REST API Authentication](https://developer.sailpoint.com/docs/api/authentication/) for more information.
      flows:
        clientCredentials:
          tokenUrl: https://example-tenant.api.identitynow.com/oauth/token
          scopes:
            sp:scopes:default: default scope
            sp:scopes:all: access to all scopes
```
