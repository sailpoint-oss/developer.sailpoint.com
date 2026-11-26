## OpenAPI

```yaml POST /source-subtypes/v2/{id}/overrides
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
  /source-subtypes/v2/{id}/overrides:
    post:
      description: |
        Creates a SOURCE-tier snapshot of a CONNECTOR-tier subtype for one source. The snapshot copies
        the parent display data, machine-account config, and authored provisioning policy. It does not
        add the connector's default account-creation fields, and later connector-tier edits do not
        propagate.

        `subtypeId` must be a CONNECTOR-tier subtype UUID that is in the source effective set. The
        created row is an ordinary SOURCE subtype (`targetType=SOURCE`, new `id`, `origin=null`) and
        can be patched or deleted with the existing v2 subtype routes.

        Requires `idn:source-subtypes:create`. A missing right, an unknown parent, or an unknown source
        returns **404**. A parent that is not CONNECTOR, a blank `sourceId`, a parent that is not
        effective on the source, a name collision, or a subtype cap returns **400**. A malformed `subtypeId` returns **400**.

        When the experimental header is missing, or when the tiered subtype configuration is not enabled
        for the tenant, the endpoint returns **404**.
      operationId: createSourceSubtypeOverrideV2
      security:
        - userAuth:
            - idn:source-subtypes:create
        - applicationAuth:
            - idn:source-subtypes:create
      parameters:
        - in: path
          name: id
          schema:
            type: string
            format: uuid
          required: true
          x-sailpoint-resource-operation-id: listSourceSubtypesV2
          description: CONNECTOR-tier subtype to snapshot onto the source.
          example: 43bdd144-4b17-4fce-a744-17c7fd3e717b
        - name: X-SailPoint-Experimental
          in: header
          description: Use this header to enable this experimental API.
          example: 'true'
          schema:
            type: string
            default: 'true'
          required: true
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              title: Source Subtype Override Request
              description: Creates a SOURCE-tier snapshot of a CONNECTOR-tier subtype for one source. Later edits to the connector-tier parent are not copied onto the snapshot.
              required:
                - sourceId
              properties:
                sourceId:
                  type: string
                  description: Source that receives the override.
                  example: 6d0458373bec4b4b80460992b76016da
            example:
              sourceId: 6d0458373bec4b4b80460992b76016da
      responses:
        '201':
          description: Created SOURCE-tier override.
          headers:
            location:
              description: URL of the created source override.
              schema:
                type: string
                format: uri
          content:
            application/json:
              schema:
                type: object
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
              examples:
                SourceOverride:
                  value:
                    id: 7c1e4b3a-017c-4e5f-a2b3-00016d045837
                    technicalName: nonPersonal
                    displayName: Non Personal
                    description: Machine accounts for JDBC connectors
                    type: MACHINE
                    targetType: SOURCE
                    targetId: 6d0458373bec4b4b80460992b76016da
                    targetName: Corporate JDBC
                    classification: MACHINE
                    origin: null
                    profile: null
                    systemManaged: false
                    created: '2026-09-30T12:00:00.000Z'
                    modified: '2026-09-30T12:00:00.000Z'
                    target:
                      type: SOURCE
                      id: 6d0458373bec4b4b80460992b76016da
                      name: Corporate JDBC
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
