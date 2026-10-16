## OpenAPI

```yaml GET /intelligence/v1/identities/{id}/accounts
openapi: 3.0.1
info:
  title: Identity Security Cloud API
  description: Use these APIs to interact with the Identity Security Cloud platform to achieve repeatable, automated processes with greater scalability. We encourage you to join the SailPoint Developer Community forum at https://developer.sailpoint.com/discuss to connect with other developers using our APIs.
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
  /intelligence/v1/identities/{id}/accounts:
    get:
      description: |
        Continuation endpoint for `accounts.next`. Pass `count=true` for `X-Total-Count`.

        - Human (default): omit `isNHI` or set it to `false`. Slice object (`items`).
        - Non-human identity (NHI): set `isNHI=true` (required for NHI aggregate `accounts.next` links). Bare JSON array.
      operationId: getIntelIdentityAccountsV1
      security:
        - userAuth:
            - sp:identity-sec-intel:read
        - applicationAuth:
            - sp:identity-sec-intel:read
      parameters:
        - name: id
          in: path
          required: true
          description: Non-empty identity id path segment for Intelligence sub-resources.
          x-sailpoint-resource-operation-id: listIdentitiesV1
          example: ef38f94347e94562b5bb8424a56397d8
          schema:
            type: string
            minLength: 1
            maxLength: 128
        - name: limit
          in: query
          required: false
          description: Page size. Defaults to 250; values above 250 are rejected with 400.
          schema:
            type: integer
            format: int32
            minimum: 1
            maximum: 250
            default: 250
          example: 250
        - name: offset
          in: query
          required: false
          description: Zero-based page offset. Defaults to 0.
          schema:
            type: integer
            format: int32
            minimum: 0
            default: 0
          example: 0
        - in: query
          name: count
          description: |-
            If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.

            Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.

            See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
          required: false
          example: true
          schema:
            type: boolean
            default: false
        - name: isNHI
          in: query
          required: false
          description: |
            NHI accounts when `true` (bare array). Human accounts when omitted or `false` (slice object).
          schema:
            type: boolean
            default: false
          example: false
      responses:
        '200':
          description: Human path returns an accounts slice object. NHI path (`isNHI=true`) returns a bare array.
          headers:
            X-Total-Count:
              description: Total number of accounts for this identity; present only when `count=true` was sent (including `0` on empty pages).
              schema:
                type: integer
                minimum: 0
          content:
            application/json:
              schema:
                oneOf:
                  - type: object
                    required:
                      - items
                    description: Accounts slice embedded in the aggregate identity response.
                    properties:
                      items:
                        type: array
                        description: First page of accounts for the identity.
                        items:
                          type: object
                          required:
                            - id
                            - name
                            - disabled
                            - locked
                            - authoritative
                            - systemAccount
                            - isMachine
                            - manuallyCorrelated
                            - created
                            - modified
                          properties:
                            id:
                              type: string
                              description: Unique account identifier in Identity Security Cloud.
                              example: 2c91808874ff91550175097daaec161c
                            name:
                              type: string
                              description: Account name or login value on the correlated source.
                              example: jdoe
                            source:
                              type: object
                              description: Source metadata for the account as returned by List Accounts wire format.
                              allOf:
                                - type: object
                                  properties:
                                    id:
                                      type: string
                                      description: Source identifier referenced by the account wire object.
                                      example: 2c9180835d2e5168015d32f890301e89
                                    name:
                                      type: string
                                      description: Human-readable source name shown in administrative consoles.
                                      example: Active Directory
                                  title: intelaccesssourcewire
                            disabled:
                              type: boolean
                              description: True when the account is administratively disabled on the source.
                              example: false
                            locked:
                              type: boolean
                              description: True when the account is locked from interactive sign-in on the source.
                              example: false
                            authoritative:
                              type: boolean
                              description: True when the account is treated as authoritative for attribute synchronization.
                              example: true
                            systemAccount:
                              type: boolean
                              description: True when the account represents a non-interactive or system principal.
                              example: false
                            isMachine:
                              type: boolean
                              description: True when the account belongs to a machine or service identity.
                              example: false
                            manuallyCorrelated:
                              type: boolean
                              description: True when an administrator manually correlated the account to an identity.
                              example: false
                            nativeIdentity:
                              type: string
                              nullable: true
                              description: Native identifier string on the source directory or application.
                              example: CN=jdoe,OU=Users,DC=example,DC=com
                            created:
                              type: string
                              format: date-time
                              description: Timestamp when the account record was created in Identity Security Cloud.
                              example: '2023-11-01T10:00:00Z'
                            modified:
                              type: string
                              format: date-time
                              description: Timestamp when the account record was last modified in Identity Security Cloud.
                              example: '2024-02-15T16:20:00Z'
                          title: intelaccessaccountwire
                      totalCount:
                        type: integer
                        format: int32
                        minimum: 1
                        description: Total number of accounts for this identity; omitted when `items` is empty.
                        example: 42
                      next:
                        type: string
                        format: uri
                        description: Absolute URL to the next accounts page; present when totalCount exceeds the items returned on this page.
                        example: https://tenant.example.api.cloud.sailpoint.com/intelligence/identities/v1/ef38f94347e94562b5bb8424a56397d8/accounts?limit=10&offset=10&count=true
                    title: intelaccountsslice
                  - type: array
                    description: NHI machine account page when `isNHI=true`.
                    items:
                      type: object
                      description: Machine account row on the non-human identity aggregate accounts.items list. Every property in required is always present on the wire. Nullable object refs (source, machineIdentity, ownerIdentity) may be null. String fields may be empty when upstream has no value; booleans, timestamps, attributes, and connectorAttributes are always emitted (empty object when absent).
                      required:
                        - id
                        - name
                        - nativeIdentity
                        - source
                        - enabled
                        - locked
                        - machineIdentity
                        - ownerIdentity
                        - description
                        - subtype
                        - accessType
                        - environment
                        - classificationMethod
                        - manuallyEdited
                        - manuallyCorrelated
                        - hasEntitlements
                        - created
                        - modified
                        - attributes
                        - connectorAttributes
                      properties:
                        id:
                          type: string
                          description: Unique account identifier in Identity Security Cloud.
                          example: 2c91808874ff91550175097daaec161c
                        name:
                          type: string
                          description: Account name on the correlated source.
                          example: account-name
                        nativeIdentity:
                          type: string
                          description: Native identifier on the source system.
                          example: arn:aws:bedrock:us-east-1:336721:agent/ABCDEFGHI
                        source:
                          nullable: true
                          description: Source metadata for the machine account when present upstream.
                          allOf:
                            - type: object
                              required:
                                - id
                                - name
                                - type
                              properties:
                                id:
                                  type: string
                                  description: Source identifier.
                                  example: 60de165099e649cb828553a5e8510fc4
                                name:
                                  type: string
                                  description: Source display name.
                                  example: Example Directory
                                type:
                                  type: string
                                  description: Source type label from upstream.
                                  example: DelimitedFile
                              title: intelmachinesourcewire
                        enabled:
                          type: boolean
                          description: True when the account is enabled for use on the source.
                          example: true
                        locked:
                          type: boolean
                          description: True when the account is locked on the source.
                          example: false
                        machineIdentity:
                          nullable: true
                          description: Reference to the parent machine identity when populated upstream.
                          allOf:
                            - type: object
                              description: Typed id and name reference for owners, machine identities, and authorized humans.
                              required:
                                - type
                                - id
                                - name
                              properties:
                                type:
                                  type: string
                                  description: Reference type label from upstream (for example IDENTITY or MACHINE_IDENTITY).
                                  example: IDENTITY
                                id:
                                  type: string
                                  description: Referenced object identifier.
                                  example: ef38f94347e94562b5bb8424a56397d8
                                name:
                                  type: string
                                  description: Display name for the referenced identity or entity.
                                  example: Example User
                                email:
                                  type: string
                                  description: Email for authorized human holders when available upstream.
                                  example: user@example.com
                              title: intelmachineentityref
                        ownerIdentity:
                          nullable: true
                          description: Reference to the owning human identity when populated upstream.
                          allOf:
                            - type: object
                              description: Typed id and name reference for owners, machine identities, and authorized humans.
                              required:
                                - type
                                - id
                                - name
                              properties:
                                type:
                                  type: string
                                  description: Reference type label from upstream (for example IDENTITY or MACHINE_IDENTITY).
                                  example: IDENTITY
                                id:
                                  type: string
                                  description: Referenced object identifier.
                                  example: ef38f94347e94562b5bb8424a56397d8
                                name:
                                  type: string
                                  description: Display name for the referenced identity or entity.
                                  example: Example User
                                email:
                                  type: string
                                  description: Email for authorized human holders when available upstream.
                                  example: user@example.com
                              title: intelmachineentityref
                        description:
                          type: string
                          description: Free-text account description from the source.
                          example: Service account for automation
                        subtype:
                          type: string
                          description: Account subtype label from upstream classification.
                          example: Service Account
                        accessType:
                          type: string
                          description: Access type label for the account (for example account or entitlement).
                          example: account
                        environment:
                          type: string
                          description: Environment label associated with the account.
                          example: production
                        classificationMethod:
                          type: string
                          description: Method used to classify the account as a machine account.
                          example: DISCOVERED
                        manuallyEdited:
                          type: boolean
                          description: True when an administrator manually edited account attributes.
                          example: false
                        manuallyCorrelated:
                          type: boolean
                          description: True when an administrator manually correlated the account.
                          example: false
                        hasEntitlements:
                          type: boolean
                          description: True when the account holds one or more entitlements.
                          example: true
                        created:
                          type: string
                          format: date-time
                          description: Timestamp when the account record was created.
                          example: '2026-01-01T00:00:00Z'
                        modified:
                          type: string
                          format: date-time
                          description: Timestamp when the account record was last modified.
                          example: '2026-05-01T00:00:00Z'
                        attributes:
                          type: object
                          additionalProperties: true
                          description: Extended account attributes from the source connector.
                          example: {}
                        connectorAttributes:
                          type: object
                          additionalProperties: true
                          description: Connector-specific attribute bag from upstream.
                          example: {}
                      title: intelmachineaccountwire
              examples:
                Human accounts:
                  summary: Default path. `isnhi` omitted or `false`.
                  value:
                    items:
                      - id: 2c91808874ff91550175097daaec161c
                        name: example.user
                        source:
                          id: 60de165099e649cb828553a5e8510fc4
                          name: Example Directory
                        disabled: false
                        locked: false
                        authoritative: false
                        systemAccount: false
                        isMachine: false
                        manuallyCorrelated: false
                        nativeIdentity: CN=example.user,OU=users
                        created: '2026-01-01T00:00:00Z'
                        modified: '2026-05-01T00:00:00Z'
                    totalCount: 2
                NHI accounts:
                  summary: '`isnhi=true`.'
                  value:
                    - id: 8a38d5adb13d48fdadbc9d85d1509aa0
                      name: account-name
                      nativeIdentity: arn:aws:bedrock:us-east-1:336721:agent/ABCDEFGHI/MNO
                      source:
                        id: 310a15aa1cf34939a8730cc16b6473da
                        name: Example Source
                        type: SOURCE
                      enabled: true
                      locked: false
                      machineIdentity:
                        type: MACHINE_IDENTITY
                        id: 2c91808874ff91550175097daaec161e
                        name: Example AI Agent
                      classificationMethod: MANUAL
                      manuallyEdited: true
                      manuallyCorrelated: false
                      hasEntitlements: true
                      created: '2026-07-23T09:21:47.622754Z'
                      modified: '2026-07-23T11:14:31.531508Z'
                      connectorAttributes: {}
        '400':
          description: Invalid path or query parameters.
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
          description: Unauthorized access
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
          description: Internal or upstream server failure.
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
