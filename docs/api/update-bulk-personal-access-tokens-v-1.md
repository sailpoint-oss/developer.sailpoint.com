## OpenAPI

```yaml PATCH /personal-access-tokens/v1/bulk-update
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
  /personal-access-tokens/v1/bulk-update:
    patch:
      description: |-
        This applies a single [JSON Patch](https://tools.ietf.org/html/rfc6902) document to multiple personal access tokens (PATs) in the current tenant in one request.
        The same `patch` is applied to every token referenced in `ids`. Up to **25** tokens can be updated per request.
        This is an administrative operation intended for org admins managing PATs across their tenant. The caller must have the `idn:all-personal-access-tokens:update` right. API OAuth client credentials are not permitted to call this endpoint.
        Note: This operation is also accessible via `POST` to the same path; both methods behave identically. Unlike the single-token patch endpoint, the request body uses `Content-Type: application/json` (not `application/json-patch+json`).
        **Allowed patch paths**
        Only expiration-related paths may be modified in bulk:
        * `/expirationDate` - Set or clear the token's expiration date. Any other path (for example `/name` or `/scope`) results in a `400` response.
        * `/userAwareTokenNeverExpires` - Explicit acknowledgment that the token will never expire.
        **expirationDate and userAwareTokenNeverExpires Relationship:**
        When clearing `expirationDate` (either by removing it or replacing it with `null`), `userAwareTokenNeverExpires` must also be set to `true` in the same patch. This serves as an explicit acknowledgment that the caller is aware of the security implications of creating a token that will never expire. When `expirationDate` is set to a valid future date-time, `userAwareTokenNeverExpires` can be omitted.
        **Note:** `userAwareTokenNeverExpires` is stored internally and is not returned in the response.
      operationId: updateBulkPersonalAccessTokensV1
      security:
        - userAuth:
            - sp:all-personal-access-tokens:manage
      requestBody:
        required: true
        description: The IDs of the personal access tokens to update, along with a single JSON Patch document to apply to each of them.
        content:
          application/json:
            schema:
              type: object
              title: Bulk Update Personal Access Tokens Request
              description: Request body for bulk updating personal access tokens. A single JSON Patch document is applied to every personal access token referenced in `ids`.
              required:
                - ids
                - patch
              properties:
                ids:
                  type: array
                  description: The IDs of the personal access tokens to update. All IDs must reference personal access tokens that exist in the current tenant. Duplicate and blank values are not allowed.
                  minItems: 1
                  maxItems: 25
                  uniqueItems: true
                  items:
                    type: string
                  example:
                    - 695dab70d33d466b81d958dc9fb392db
                    - abc123def456abc123def456abc12345
                patch:
                  type: array
                  description: |-
                    A single [JSON Patch](https://tools.ietf.org/html/rfc6902) document that is applied identically to every personal access token referenced in `ids`.
                    Only the following paths are allowed for bulk updates:
                    * `/expirationDate` - Set (`replace`) or clear (`remove`) the token's expiration.
                    * `/userAwareTokenNeverExpires` - Explicit acknowledgment required when clearing `expirationDate`.
                    Any other path (for example `/name` or `/scope`) results in a `400` response.
                  minItems: 1
                  items:
                    type: object
                    title: Json Patch Operation
                    description: A JSONPatch Operation as defined by [RFC 6902 - JSON Patch](https://tools.ietf.org/html/rfc6902)
                    required:
                      - op
                      - path
                    properties:
                      op:
                        type: string
                        description: The operation to be performed
                        enum:
                          - add
                          - remove
                          - replace
                          - move
                          - copy
                          - test
                        example: replace
                      path:
                        type: string
                        description: A string JSON Pointer representing the target path to an element to be affected by the operation
                        example: /description
                      value:
                        oneOf:
                          - type: string
                            example: New description
                            title: string
                          - type: boolean
                            example: true
                            title: boolean
                          - type: integer
                            example: 300
                            title: integer
                          - type: object
                            title: object
                            example:
                              attributes:
                                name: philip
                          - type: array
                            title: array
                            items:
                              anyOf:
                                - type: string
                                - type: integer
                                - type: object
                              example:
                                - '001'
                                - '002'
                                - '003'
                        description: The value to be used for the operation, required for "add" and "replace" operations
                        example: New description
                  example:
                    - op: replace
                      path: /expirationDate
                      value: '2026-08-01T00:00:00.000Z'
            examples:
              Set expiration on multiple tokens:
                value:
                  ids:
                    - 695dab70d33d466b81d958dc9fb392db
                    - abc123def456abc123def456abc12345
                  patch:
                    - op: replace
                      path: /expirationDate
                      value: '2026-12-31T23:59:59.999Z'
              Set tokens to never expire:
                value:
                  ids:
                    - 695dab70d33d466b81d958dc9fb392db
                  patch:
                    - op: remove
                      path: /expirationDate
                    - op: replace
                      path: /userAwareTokenNeverExpires
                      value: true
      responses:
        '200':
          description: The bulk update succeeded. Returns the updated representation of each personal access token, sorted by `id`.
          content:
            application/json:
              schema:
                type: array
                items:
                  type: object
                  title: Get Personal Access Token Response
                  properties:
                    id:
                      type: string
                      description: The ID of the personal access token (to be used as the username for Basic Auth).
                      example: 86f1dc6fe8f54414950454cbb11278fa
                    name:
                      type: string
                      description: The name of the personal access token. Cannot be the same as other personal access tokens owned by a user.
                      example: NodeJS Integration
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
                    lastUsed:
                      type: string
                      nullable: true
                      format: date-time
                      description: The date and time, down to the millisecond, when this personal access token was last used to generate an access token. This timestamp does not get updated on every PAT usage, but only once a day. This property can be useful for identifying which PATs are no longer actively used and can be removed.
                      example: '2017-07-11T18:45:37.098Z'
                    managed:
                      type: boolean
                      default: false
                      example: false
                      description: If true, this token is managed by the SailPoint platform, and is not visible in the user interface. For example, Workflows will create managed personal access tokens for users who create workflows.
                    accessTokenValiditySeconds:
                      type: integer
                      format: int32
                      default: 43200
                      example: 36900
                      description: Number of seconds an access token is valid when generated using this Personal Access Token. If no value is specified, the token will be created with the default value of 43200.
                    expirationDate:
                      type: string
                      nullable: true
                      format: date-time
                      example: '2026-12-31T23:59:59.999Z'
                      description: |-
                        Date and time, down to the millisecond, when this personal access token will expire.
                        **Important:** When `expirationDate` is `null` or empty, the token will never expire (and `userAwareTokenNeverExpires` will be `true`).
                        When `expirationDate` is provided, this value must be a future date. There is no upper limit on how far in the future the expiration date can be set.
                    userAwareTokenNeverExpires:
                      type: boolean
                      default: false
                      example: false
                      description: |-
                        Indicates that the user who created or updated this Personal Access Token is aware of and acknowledges the security implications of creating a token that will never expire. When `true`, this flag confirms that the user understood the security risks associated with non-expiring tokens at the time of creation or update.
                        **Security Awareness:** This field serves as a record that the user acknowledged: * Tokens that never expire pose a greater security risk if compromised * Non-expiring tokens should be used only when necessary and with appropriate security measures * Regular rotation and monitoring of non-expiring tokens is recommended
                        **Behavior:** * When `true`: Indicates that the user acknowledged they were creating a token that will never expire. When `expirationDate` is `null`, the token will never expire. * When `false`: The token follows normal expiration rules based on the `expirationDate` field and `accessTokenValiditySeconds` setting.
                  required:
                    - id
                    - name
                    - scope
                    - owner
                    - created
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
