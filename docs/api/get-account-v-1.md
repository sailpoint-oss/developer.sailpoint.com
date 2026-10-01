## OpenAPI

```yaml GET /accounts/v1/{id}
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
  /accounts/v1/{id}:
    get:
      description: 'Use this API to return the details for a single account by its ID.  '
      operationId: getAccountV1
      security:
        - userAuth:
            - idn:accounts:read
            - idn:accounts:manage
        - applicationAuth:
            - idn:accounts:read
            - idn:accounts:manage
      parameters:
        - in: path
          name: id
          schema:
            type: string
          required: true
          x-sailpoint-resource-operation-id: listAccountsV1
          description: Account ID.
          example: ef38f94347e94562b5bb8424a56397d8
      responses:
        '200':
          description: Account object.
          content:
            application/json:
              schema:
                allOf:
                  - type: object
                    title: Base Common Dto
                    required:
                      - name
                    properties:
                      id:
                        description: System-generated unique ID of the Object
                        type: string
                        example: id12345
                        readOnly: true
                      name:
                        description: Name of the Object
                        type: string
                        example: aName
                        nullable: true
                      created:
                        description: Creation date of the Object
                        type: string
                        example: '2015-05-28T14:07:17Z'
                        format: date-time
                        readOnly: true
                      modified:
                        description: Last modification date of the Object
                        type: string
                        example: '2015-05-28T14:07:17Z'
                        format: date-time
                        readOnly: true
                  - type: object
                    required:
                      - sourceId
                      - sourceName
                      - attributes
                      - authoritative
                      - disabled
                      - locked
                      - nativeIdentity
                      - systemAccount
                      - uncorrelated
                      - manuallyCorrelated
                      - hasEntitlements
                    properties:
                      sourceId:
                        type: string
                        example: 2c9180835d2e5168015d32f890ca1581
                        description: The unique ID of the source this account belongs to
                      sourceName:
                        type: string
                        nullable: true
                        example: Employees
                        description: The display name of the source this account belongs to
                      identityId:
                        type: string
                        example: 2c9180835d2e5168015d32f890ca1581
                        description: The unique ID of the identity this account is correlated to
                      cloudLifecycleState:
                        type: string
                        nullable: true
                        example: active
                        description: The lifecycle state of the identity this account is correlated to
                      identityState:
                        type: string
                        nullable: true
                        example: ACTIVE
                        description: The identity state of the identity this account is correlated to
                      connectionType:
                        type: string
                        nullable: true
                        example: direct
                        description: The connection type of the source this account is from
                      isMachine:
                        type: boolean
                        default: false
                        description: Indicates if the account is of machine type
                        example: true
                      recommendation:
                        allOf:
                          - type: object
                            title: Recommendation
                            properties:
                              type:
                                type: string
                                enum:
                                  - HUMAN
                                  - MACHINE
                                description: Recommended type of account.
                                example: MACHINE
                              method:
                                type: string
                                enum:
                                  - DISCOVERY
                                  - SOURCE
                                  - CRITERIA
                                description: Method used to produce the recommendation. DISCOVERY - suggested by AI, SOURCE - the account comes from a source flagged as containing machine accounts, CRITERIA - the account satisfies classification criteria.
                                example: DISCOVERY
                            required:
                              - type
                              - method
                          - nullable: true
                            description: Indicates that the account is currently classified to be one type but is recommended to be a different one
                            example:
                              type: MACHINE
                              method: DISCOVERY
                      attributes:
                        type: object
                        nullable: true
                        additionalProperties: true
                        description: The account attributes that are aggregated
                        example:
                          firstName: SailPoint
                          lastName: Support
                          displayName: SailPoint Support
                      authoritative:
                        type: boolean
                        description: Indicates if this account is from an authoritative source
                        example: false
                      description:
                        type: string
                        description: A description of the account
                        nullable: true
                        example: null
                      disabled:
                        type: boolean
                        description: Indicates if the account is currently disabled
                        example: false
                      locked:
                        type: boolean
                        description: Indicates if the account is currently locked
                        example: false
                      nativeIdentity:
                        type: string
                        description: The unique ID of the account generated by the source system
                        example: '552775'
                      systemAccount:
                        type: boolean
                        example: false
                        description: If true, this is a user account within IdentityNow.  If false, this is an account from a source system.
                      uncorrelated:
                        type: boolean
                        description: Indicates if this account is not correlated to an identity
                        example: false
                      uuid:
                        type: string
                        description: The unique ID of the account as determined by the account schema
                        example: '{b0dce506-d6d4-44d2-8a32-d9a5b21fb175}'
                        nullable: true
                      manuallyCorrelated:
                        type: boolean
                        description: Indicates if the account has been manually correlated to an identity
                        example: false
                      hasEntitlements:
                        type: boolean
                        description: Indicates if the account has entitlements
                        example: true
                      identity:
                        description: The identity this account is correlated to
                        type: object
                        properties:
                          id:
                            type: string
                            description: The ID of the identity
                            example: 2c918084660f45d6016617daa9210584
                          type:
                            type: string
                            description: The type of object being referenced
                            enum:
                              - IDENTITY
                            example: IDENTITY
                          name:
                            type: string
                            description: display name of identity
                            example: John Doe
                      sourceOwner:
                        type: object
                        nullable: true
                        description: The owner of the source this account belongs to.
                        properties:
                          id:
                            type: string
                            description: The ID of the identity
                            example: 2c918084660f45d6016617daa9210584
                          type:
                            type: string
                            description: The type of object being referenced
                            enum:
                              - IDENTITY
                            example: IDENTITY
                          name:
                            type: string
                            description: display name of identity
                            example: Adam Kennedy
                      features:
                        type: string
                        description: A string list containing the owning source's features
                        example: ENABLE
                        nullable: true
                      origin:
                        type: string
                        nullable: true
                        enum:
                          - AGGREGATED
                          - PROVISIONED
                          - null
                        description: The origin of the account either aggregated or provisioned
                        example: AGGREGATED
                      ownerIdentity:
                        allOf:
                          - type: object
                            title: Base Reference Dto
                            properties:
                              type:
                                description: DTO type
                                type: string
                                enum:
                                  - ACCOUNT_CORRELATION_CONFIG
                                  - ACCESS_PROFILE
                                  - ACCESS_REQUEST_APPROVAL
                                  - ACCOUNT
                                  - APPLICATION
                                  - CAMPAIGN
                                  - CAMPAIGN_FILTER
                                  - CERTIFICATION
                                  - CLUSTER
                                  - CONNECTOR_SCHEMA
                                  - ENTITLEMENT
                                  - GOVERNANCE_GROUP
                                  - IDENTITY
                                  - IDENTITY_PROFILE
                                  - IDENTITY_REQUEST
                                  - MACHINE_IDENTITY
                                  - LIFECYCLE_STATE
                                  - PASSWORD_POLICY
                                  - ROLE
                                  - RULE
                                  - SOD_POLICY
                                  - SOURCE
                                  - TAG
                                  - TAG_CATEGORY
                                  - TASK_RESULT
                                  - REPORT_RESULT
                                  - SOD_VIOLATION
                                  - ACCOUNT_ACTIVITY
                                  - WORKGROUP
                                example: IDENTITY
                                title: dtotype
                              id:
                                type: string
                                description: ID of the object to which this reference applies
                                example: 2c91808568c529c60168cca6f90c1313
                              name:
                                type: string
                                description: Human-readable display name of the object to which this reference applies
                                example: William Wilson
                          - description: The identity who owns this account, used only for machine accounts
                            nullable: true
                            example:
                              id: 2c918084660f45d6016617daa9210584
                              type: IDENTITY
                              name: Adam Kennedy
                title: account
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
