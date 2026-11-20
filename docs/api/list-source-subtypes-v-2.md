## OpenAPI

```yaml GET /source-subtypes/v2
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
  /source-subtypes/v2:
    get:
      description: |
        Lists machine account subtypes across SOURCE and CONNECTOR tiers.

        `targetId` is the scope key at every tier (source id for `SOURCE`, connector type for
        `CONNECTOR`). Responses include a resolved `target` reference and do not include `sourceId`.
        List responses do not include `target.supportsProvisioning`.

        With `sourceId`, omitted `effectiveSet` defaults to `true` and returns the effective set for
        that source (SOURCE overrides CONNECTOR by technical name). `effectiveSet=false` returns only
        that source's raw SOURCE-tier rows. `effectiveSet=true` without `sourceId` returns **400**.
        Combining `filters` with effective-set resolution returns **400**. Unknown `sourceId` returns
        **404**. Limit, offset, and `count` apply on both paths. There is no default sort.

        Optional `targetType` applies only on the effective-set path. `CONNECTOR` keeps inherited
        connector winners. `SOURCE` keeps source-only winners and SOURCE overrides. Omitting it keeps
        the full winner set. A blank, unknown, or `CONNECTOR_VARIANT` value, or any `targetType` when
        `effectiveSet` is `false` or `sourceId` is omitted, returns **400**.

        On the effective set, `origin` is `CONNECTOR` only when a SOURCE winner overrides a CONNECTOR
        parent of the same technical name. Connector-only and source-only winners have `origin=null`.

        `includeConfigs` defaults to `false`. When `true`, each `MACHINE` subtype that has a stored
        machine-account-create config includes slim `config.machineAccountCreate.accountCreateEnabled`.
        A `MACHINE` row with no create config, and every non-`MACHINE` row, omits `config`. The list
        does not return the full machine-config document.

        This API requires the Machine Identity Security product. When the experimental header is
        missing, or when the tiered subtype configuration is not enabled for the tenant, the endpoint
        returns **404**.
      operationId: listSourceSubtypesV2
      security:
        - userAuth:
            - idn:source-subtypes:read
        - applicationAuth:
            - idn:source-subtypes:read
      parameters:
        - in: query
          name: filters
          required: false
          schema:
            type: string
          description: |-
            Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)

            Filtering is supported for the following fields and operators:

            **id**: *eq, in, sw*

            **displayName**: *eq, sw*

            **technicalName**: *eq, sw*

            **source.id**: *eq, in*

            **targetType**: *eq, in*

            **targetId**: *eq, in*

            **targetName**: *eq, sw*

            **classification**: *eq, in*

            **type**: *eq, in*

            **created**: *gt, ge, lt, le*

            **modified**: *gt, ge, lt, le*

            Filters cannot be combined with the effective set. That combination returns 400.
          example: targetType eq "CONNECTOR"
        - in: query
          name: sorters
          schema:
            type: string
            format: comma-separated
            default: ''
          required: false
          description: |-
            Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)

            Sorting is supported for the following fields: **id, displayName, technicalName, source.id, targetType, targetId, targetName, classification, type, created, modified**

            When omitted, order is unspecified.
          example: displayName
        - in: query
          name: sourceId
          required: false
          schema:
            type: string
            default: ''
          description: Source scope. When supplied, omitted `effectiveSet` defaults to `true`. Unknown source returns **404**. Empty means the parameter was omitted.
          example: 6d0458373bec4b4b80460992b76016da
        - in: query
          name: effectiveSet
          required: false
          schema:
            type: boolean
            default: true
          description: When `true` with `sourceId`, return the effective subtype set for that source. When `false` with `sourceId`, return only that source's raw SOURCE-tier rows. `true` without `sourceId` returns **400**. Combining with `filters` returns **400**.
          example: true
        - in: query
          name: targetType
          required: false
          x-sailpoint-lint-ignore:
            schema-optional-properties-must-have-default: Omitted means the full effective set. A default would select one tier.
          schema:
            type: string
            enum:
              - SOURCE
              - CONNECTOR
          description: Winner-tier cut on the effective set only. `CONNECTOR` returns inherited connector winners. `SOURCE` returns source-only winners and SOURCE overrides. Omit it to keep the full winner set. Invalid when `effectiveSet` is `false` or `sourceId` is omitted.
          example: SOURCE
        - in: query
          name: includeConfigs
          required: false
          schema:
            type: boolean
            default: false
          description: When `true`, each `MACHINE` subtype with a stored machine-account-create config includes slim `config.machineAccountCreate.accountCreateEnabled`. Default `false` omits `config`.
          example: false
        - in: query
          name: count
          description: |-
            If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.

            Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.

            See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
          required: false
          example: true
          schema:
            type: boolean
            default: false
        - in: query
          name: limit
          description: |-
            Max number of results to return.
            See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
          required: false
          example: 250
          schema:
            type: integer
            format: int32
            minimum: 0
            maximum: 250
            default: 250
        - in: query
          name: offset
          description: |-
            Offset into the full result set. Usually specified with *limit* to paginate through the results.
            See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
          required: false
          example: 0
          schema:
            type: integer
            format: int32
            minimum: 0
            default: 0
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
          description: List of tiered machine account subtypes.
          content:
            application/json:
              schema:
                type: array
                items:
                  type: object
                  title: Subtype With Target And Config
                  description: Tiered source subtype returned by the v2 list. `config` is included only when `includeConfigs` is `true` and the subtype has a stored machine-account-create config.
                  allOf:
                    - type: object
                      title: Subtype With Target
                      description: Tiered source subtype as returned by v2 list, create, and patch. Get-by-id uses Subtype With Target Provisioning.
                      allOf:
                        - type: object
                          title: Source Subtype V2
                          required:
                            - targetId
                            - technicalName
                            - displayName
                            - description
                          properties:
                            id:
                              type: string
                              format: uuid
                              readOnly: true
                              default: ''
                              description: Server-generated subtype identifier. Must not be supplied on create.
                              example: 43bdd144-4b17-4fce-a744-17c7fd3e717b
                            technicalName:
                              type: string
                              description: Technical name of the subtype. Unique within the target tier scope.
                              example: nonPersonal
                            displayName:
                              type: string
                              description: Display name of the subtype.
                              example: Non Personal
                            description:
                              type: string
                              description: Description of the subtype.
                              example: Machine accounts for JDBC connectors
                            type:
                              x-sailpoint-lint-ignore:
                                schema-property-names-must-not-be-type: The service returns this field as type. It is the subtype entity type and defaults to MACHINE.
                              type: string
                              default: MACHINE
                              description: Entity type of the subtype. Defaults to `MACHINE` when omitted.
                              example: MACHINE
                            targetType:
                              type: string
                              title: Subtype Target Type
                              description: Tier that scopes the subtype. `SOURCE` is unique per source. `CONNECTOR` is unique per connector type and applies to every source of that connector. On create, omitted `targetType` defaults to `SOURCE`. `CONNECTOR_VARIANT` is reserved and is not available for create, update, or delete.
                              enum:
                                - SOURCE
                                - CONNECTOR
                                - CONNECTOR_VARIANT
                              example: CONNECTOR
                            targetId:
                              type: string
                              description: Scope key for the subtype. Source id when `targetType` is `SOURCE`. Connector type or connector specification id when `targetType` is `CONNECTOR`.
                              example: JDBC
                            targetName:
                              type: string
                              default: ''
                              description: Human-readable target label. May be omitted on create; the service persists a display name.
                              example: JDBC
                            classification:
                              type: string
                              title: Subtype Classification
                              description: Classification of the subtype. Published values are `MACHINE`.
                              enum:
                                - MACHINE
                              example: MACHINE
                            origin:
                              type: string
                              nullable: true
                              readOnly: true
                              default: null
                              description: 'Response-only origin badge. Set on effective-set list reads: `CONNECTOR` when a SOURCE winner overrides a CONNECTOR parent of the same technical name. `null` on connector-only and source-only winners, and on plain CRUD list, create, patch, and get-by-id.'
                              enum:
                                - SOURCE
                                - CONNECTOR
                                - CONNECTOR_VARIANT
                                - null
                              example: CONNECTOR
                            profile:
                              type: object
                              title: Connector Variant Profile
                              nullable: true
                              readOnly: true
                              description: Response-only connector-variant profile. Always `null` for `SOURCE` and `CONNECTOR` tiers in this release. Populated when the connector-variant tier is available.
                              properties:
                                id:
                                  type: string
                                  format: uuid
                                  default: ''
                                  description: Unique identifier of the connector variant profile.
                                  example: 65de7634-d315-482c-aad4-7fdbd1e42056
                                connectorType:
                                  type: string
                                  default: ''
                                  description: Connector type of the variant profile, for example `JDBC`.
                                  example: JDBC
                                variant:
                                  type: string
                                  default: ''
                                  description: Variant name within the connector type, for example `MySql`.
                                  example: MySql
                            systemManaged:
                              type: boolean
                              readOnly: true
                              description: Server-set flag indicating the subtype is managed by the system. Incoming values are ignored.
                              default: false
                              example: false
                            created:
                              type: string
                              format: date-time
                              readOnly: true
                              nullable: true
                              default: null
                              description: Creation timestamp.
                              example: '2026-08-18T12:00:00.000Z'
                            modified:
                              type: string
                              format: date-time
                              readOnly: true
                              nullable: true
                              default: null
                              description: Last modified timestamp.
                              example: '2026-08-18T12:00:00.000Z'
                        - type: object
                          properties:
                            target:
                              type: object
                              title: Subtype Target Ref
                              description: Resolved target of a tiered subtype. Present on v2 responses; not accepted on create.
                              properties:
                                type:
                                  x-sailpoint-lint-ignore:
                                    schema-property-names-must-not-be-type: The service returns this field as type. It distinguishes SOURCE and CONNECTOR targets.
                                  type: string
                                  description: DTO type of the target. `SOURCE` for source-tier rows; `CONNECTOR` for connector-tier rows.
                                  enum:
                                    - SOURCE
                                    - CONNECTOR
                                  example: CONNECTOR
                                id:
                                  type: string
                                  description: Target identifier. Source id for `SOURCE`. Connector specification id or connector type for `CONNECTOR`.
                                  example: 65de7634-d315-482c-aad4-7fdbd1e42056
                                name:
                                  type: string
                                  description: Human-readable target name. Falls back to `id` when a display name is not available.
                                  example: 15Five
                    - type: object
                      properties:
                        config:
                          type: object
                          title: Machine Account Subtype List Config
                          description: Slim machine-account-create config embedded on a list item when `includeConfigs` is `true`. Full create, delete, approval, password, and form fields stay on the machine-config API.
                          properties:
                            machineAccountCreate:
                              type: object
                              description: Stored create flag for this subtype. Omitted when no create config exists.
                              properties:
                                accountCreateEnabled:
                                  type: boolean
                                  description: Whether machine account creation is enabled for this subtype.
                                  default: false
                                  example: true
              examples:
                ConnectorSubtype:
                  value:
                    - id: 43bdd144-4b17-4fce-a744-17c7fd3e717b
                      technicalName: nonPersonal
                      displayName: Non Personal
                      description: Machine accounts for JDBC connectors
                      type: MACHINE
                      targetType: CONNECTOR
                      targetId: JDBC
                      targetName: JDBC
                      classification: MACHINE
                      origin: null
                      profile: null
                      systemManaged: false
                      created: '2026-08-18T12:00:00.000Z'
                      modified: '2026-08-18T12:00:00.000Z'
                      target:
                        type: CONNECTOR
                        id: JDBC
                        name: JDBC
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

        Personal access tokens are associated with a user in SailPoint Identity Security and relies on the user's [user level](https://documentation.sailpoint.com/saas/help/common/users/index.html) (ex. Admin, Helpdesk, etc.) to determine a base level of access.

        See [SailPoint Identity Security REST API Authentication](https://developer.sailpoint.com/docs/api/authentication/) for more information.
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

        Client credentials refers to tokens that are not associated with a user in SailPoint Identity Security.

        See [SailPoint Identity Security REST API Authentication](https://developer.sailpoint.com/docs/api/authentication/) for more information.
      flows:
        clientCredentials:
          tokenUrl: https://example-tenant.api.identitynow.com/oauth/token
          scopes:
            sp:scopes:default: default scope
            sp:scopes:all: access to all scopes
```
