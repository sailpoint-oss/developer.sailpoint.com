## OpenAPI

```yaml POST /personal-access-tokens/v1
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
  /personal-access-tokens/v1:
    post:
      description: |-
        This creates a personal access token.
        **expirationDate and userAwareTokenNeverExpires Relationship:**
        **Important:** When `expirationDate` is `null` or empty (not included in the request body), the token will never expire.
        **Required Validation:** If `expirationDate` is `null` or empty, `userAwareTokenNeverExpires` must be set to `true`. This is a required validation rule.
        The valid values for `expirationDate` depend on the value provided for `userAwareTokenNeverExpires`:
        * **When `userAwareTokenNeverExpires` is `true` (or required to be `true`):** `expirationDate` can be `null` or omitted from the request body. When `expirationDate` is `null` or empty, the token will never expire. This creates a PAT that never expires and serves as an explicit acknowledgment that the user is aware of the security implications of creating a non-expiring token. * **When `userAwareTokenNeverExpires` is `false` or omitted:** `expirationDate` must be provided and must be a valid date-time string representing a future date (there is no upper limit). `expirationDate` cannot be `null` in this case. In this scenario, `userAwareTokenNeverExpires` can be omitted.
        **Validation Rules:** * **If `expirationDate` is `null` or not included in the request body:** `userAwareTokenNeverExpires` must be set to `true` (required). The token will never expire. * **If `expirationDate` is provided and is not `null`:** `userAwareTokenNeverExpires` can be omitted.
        **Security Considerations:** The `userAwareTokenNeverExpires` field is designed to ensure that users explicitly acknowledge the security implications of creating tokens that never expire. Setting this field to `true` indicates that the user understands the increased security risks and has made an informed decision to proceed.
        **Note:** The `userAwareTokenNeverExpires` field indicates that the user acknowledges they are creating a token that will never expire. It does not affect token behavior beyond indicating this acknowledgment.
      operationId: createPersonalAccessTokenV1
      security:
        - userAuth:
            - sp:my-personal-access-tokens:manage
            - sp:all-personal-access-tokens:manage
      requestBody:
        description: |-
          Configuration for creating a personal access token, including name, scope, expiration settings, and user acknowledgment of never-expiring tokens.
          **Important:** See the endpoint description for validation rules regarding the relationship between `expirationDate` and `userAwareTokenNeverExpires`.
        required: true
        content:
          application/json:
            schema:
              type: object
              title: Create Personal Access Token Request
              description: Object for specifying the name of a personal access token to create
              properties:
                name:
                  type: string
                  description: The name of the personal access token (PAT) to be created. Cannot be the same as another PAT owned by the user for whom this PAT is being created.
                  example: NodeJS Integration
                scope:
                  type: array
                  nullable: true
                  items:
                    type: string
                    default: sp:scopes:all
                  description: Scopes of the personal  access token. If no scope is specified, the token will be created with the default scope "sp:scopes:all". This means the personal access token will have all the rights of the owner who created it.
                  example:
                    - demo:personal-access-token-scope:first
                    - demo:personal-access-token-scope:second
                accessTokenValiditySeconds:
                  type: integer
                  nullable: true
                  format: int32
                  minimum: 15
                  maximum: 43200
                  description: Number of seconds an access token is valid when generated using this Personal Access Token. If no value is specified, the token will be created with the default value of 43200.
                  example: 36900
                expirationDate:
                  type: string
                  nullable: true
                  format: date-time
                  description: |-
                    Date and time, down to the millisecond, when this personal access token will expire.
                    **Important:** When `expirationDate` is `null` or empty (not included in the request body), the token will never expire.
                    **Required Validation:** If `expirationDate` is `null` or empty, `userAwareTokenNeverExpires` must be set to `true`. This is a required validation rule.
                    **Valid Values (dependent on `userAwareTokenNeverExpires`):** * **When `userAwareTokenNeverExpires` is `true` (or required to be `true`):** `expirationDate` can be `null` or omitted from the request body. When `expirationDate` is `null` or empty, the token will never expire. * **When `userAwareTokenNeverExpires` is `false` or omitted:** `expirationDate` must be provided and must be a valid date-time string representing a future date (after the current date/time). There is no upper limit on how far in the future the expiration date can be set. `expirationDate` cannot be `null` in this case.
                    **Validation Rules:** * **If `expirationDate` is `null` or not included in the request body:** `userAwareTokenNeverExpires` must be set to `true` (required). The token will never expire. * **If `expirationDate` is provided and is not `null`:** `userAwareTokenNeverExpires` can be omitted.
                  example: '2026-12-31T23:59:59.999Z'
                userAwareTokenNeverExpires:
                  type: boolean
                  nullable: true
                  default: false
                  description: |-
                    Indicates that the user creating this Personal Access Token is aware of and acknowledges the security implications of creating a token that will never expire. When set to `true`, this flag confirms that the user understands the security risks associated with non-expiring tokens.
                    **Security Awareness:** Setting this field to `true` serves as an explicit acknowledgment that the user creating the token understands: * Tokens that never expire pose a greater security risk if compromised * Non-expiring tokens should be used only when necessary and with appropriate security measures * Regular rotation and monitoring of non-expiring tokens is recommended
                    **Required Validation:** If `expirationDate` is `null` or empty (not included in the request body), `userAwareTokenNeverExpires` must be set to `true`. This is a required validation rule.
                    **Validation Rules:** * **If `expirationDate` is `null` or not included in the request body:** `userAwareTokenNeverExpires` must be set to `true` (required). * **If `expirationDate` is provided and is not `null`:** `userAwareTokenNeverExpires` can be omitted.
                    **Behavior:** * When set to `true`: Indicates that the user acknowledges they are creating a token that will never expire. When `expirationDate` is `null` or empty, the token will never expire. * When set to `false` or not specified (and `expirationDate` is provided): The token will follow normal expiration rules based on the `expirationDate` field and `accessTokenValiditySeconds` setting.
                  example: false
              required:
                - name
      responses:
        '200':
          description: Created. Note - this is the only time Personal Access Tokens' secret attribute will be displayed.
          content:
            application/json:
              schema:
                type: object
                title: Create Personal Access Token Response
                properties:
                  id:
                    type: string
                    description: The ID of the personal access token (to be used as the username for Basic Auth).
                    example: 86f1dc6fe8f54414950454cbb11278fa
                  secret:
                    type: string
                    description: The secret of the personal access token (to be used as the password for Basic Auth).
                    example: 1d1bef2b9f426383447f64f69349fc7cac176042578d205c256ba3f37c59adb9
                  scope:
                    type: array
                    nullable: true
                    items:
                      type: string
                      default: sp:scopes:all
                    description: Scopes of the personal  access token.
                    example:
                      - demo:personal-access-token-scope:first
                      - demo:personal-access-token-scope:second
                  name:
                    type: string
                    description: The name of the personal access token. Cannot be the same as other personal access tokens owned by a user.
                    example: NodeJS Integration
                  owner:
                    type: object
                    title: Pat Owner
                    description: Personal access token owner's identity.
                    properties:
                      type:
                        type: string
                        description: Personal access token owner's DTO type.
                        enum:
                          - IDENTITY
                        example: IDENTITY
                      id:
                        type: string
                        description: Personal access token owner's identity ID.
                        example: 2c9180a46faadee4016fb4e018c20639
                      name:
                        type: string
                        description: Personal access token owner's human-readable display name.
                        example: Support
                  created:
                    type: string
                    format: date-time
                    description: The date and time, down to the millisecond, when this personal access token was created.
                    example: '2017-07-11T18:45:37.098Z'
                  accessTokenValiditySeconds:
                    type: integer
                    format: int32
                    description: Number of seconds an access token is valid when generated using this Personal Access Token. If no value is specified, the token will be created with the default value of 43200.
                    example: 36900
                  expirationDate:
                    type: string
                    format: date-time
                    description: Date and time, down to the millisecond, when this personal access token will expire. If not provided, the token will expire 6 months after its creation date. The value must be a valid date-time string between the current date and 6 months from the creation date.
                    example: '2018-01-11T18:45:37.098Z'
                required:
                  - id
                  - secret
                  - scope
                  - name
                  - owner
                  - created
                  - accessTokenValiditySeconds
                  - expirationDate
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
