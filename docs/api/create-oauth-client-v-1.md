## OpenAPI

```yaml POST /oauth-clients/v1
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
  /oauth-clients/v1:
    post:
      description: This creates an OAuth client.
      operationId: createOauthClientV1
      security:
        - userAuth:
            - sp:oauth-client:manage
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              title: Create O Auth Client Request
              properties:
                businessName:
                  type: string
                  nullable: true
                  description: The name of the business the API Client should belong to
                  example: Acme-Solar
                homepageUrl:
                  type: string
                  nullable: true
                  description: The homepage URL associated with the owner of the API Client
                  example: http://localhost:12345
                name:
                  type: string
                  nullable: true
                  description: A human-readable name for the API Client
                  example: Demo API Client
                description:
                  type: string
                  nullable: true
                  description: A description of the API Client
                  example: An API client used for the authorization_code, refresh_token, and client_credentials flows
                accessTokenValiditySeconds:
                  description: The number of seconds an access token generated for this API Client is valid for
                  type: integer
                  format: int32
                  example: 750
                refreshTokenValiditySeconds:
                  description: The number of seconds a refresh token generated for this API Client is valid for
                  example: 86400
                  type: integer
                  format: int32
                redirectUris:
                  type: array
                  nullable: true
                  items:
                    type: string
                  description: A list of the approved redirect URIs. Provide one or more URIs when assigning the AUTHORIZATION_CODE grant type to a new OAuth Client.
                  example:
                    - http://localhost:12345
                grantTypes:
                  type: array
                  nullable: true
                  items:
                    description: OAuth2 Grant Type
                    type: string
                    example: CLIENT_CREDENTIALS
                    enum:
                      - CLIENT_CREDENTIALS
                      - AUTHORIZATION_CODE
                      - REFRESH_TOKEN
                    title: granttype
                  description: A list of OAuth 2.0 grant types this API Client can be used with
                  example:
                    - AUTHORIZATION_CODE
                    - CLIENT_CREDENTIALS
                    - REFRESH_TOKEN
                accessType:
                  description: The access type (online or offline) of this API Client
                  example: OFFLINE
                  type: string
                  enum:
                    - ONLINE
                    - OFFLINE
                  title: accesstype
                type:
                  description: The type of the API Client (public or confidential)
                  example: CONFIDENTIAL
                  type: string
                  enum:
                    - CONFIDENTIAL
                    - PUBLIC
                  title: clienttype
                internal:
                  type: boolean
                  description: An indicator of whether the API Client can be used for requests internal within the product.
                  example: false
                enabled:
                  type: boolean
                  description: An indicator of whether the API Client is enabled for use
                  example: true
                strongAuthSupported:
                  type: boolean
                  description: An indicator of whether the API Client supports strong authentication
                  example: false
                claimsSupported:
                  type: boolean
                  description: An indicator of whether the API Client supports the serialization of SAML claims when used with the authorization_code flow
                  example: false
                scope:
                  type: array
                  nullable: true
                  items:
                    type: string
                    default: sp:scopes:all
                  description: Scopes of the API Client. If no scope is specified, the client will be created with the default scope "sp:scopes:all". This means the API Client will have all the rights of the owner who created it.
                  example:
                    - demo:api-client-scope:first
                    - demo:api-client-scope:second
              required:
                - name
                - description
                - accessTokenValiditySeconds
                - grantTypes
                - accessType
                - enabled
      responses:
        '200':
          description: Request succeeded.
          content:
            application/json:
              schema:
                type: object
                title: Create O Auth Client Response
                properties:
                  id:
                    type: string
                    description: ID of the OAuth client
                    example: 2c9180835d2e5168015d32f890ca1581
                  secret:
                    type: string
                    description: Secret of the OAuth client (This field is only returned on the intial create call.)
                    example: 5c32dd9b21adb51c77794d46e71de117a1d0ddb36a7ff941fa28014ab7de2cf3
                  businessName:
                    type: string
                    description: The name of the business the API Client should belong to
                    example: Acme-Solar
                  homepageUrl:
                    type: string
                    description: The homepage URL associated with the owner of the API Client
                    example: http://localhost:12345
                  name:
                    type: string
                    description: A human-readable name for the API Client
                    example: Demo API Client
                  description:
                    type: string
                    description: A description of the API Client
                    example: An API client used for the authorization_code, refresh_token, and client_credentials flows
                  accessTokenValiditySeconds:
                    description: The number of seconds an access token generated for this API Client is valid for
                    example: 750
                    type: integer
                    format: int32
                  refreshTokenValiditySeconds:
                    description: The number of seconds a refresh token generated for this API Client is valid for
                    example: 86400
                    type: integer
                    format: int32
                  redirectUris:
                    type: array
                    items:
                      type: string
                    description: A list of the approved redirect URIs used with the authorization_code flow
                    example:
                      - http://localhost:12345
                  grantTypes:
                    type: array
                    items:
                      description: OAuth2 Grant Type
                      type: string
                      example: CLIENT_CREDENTIALS
                      enum:
                        - CLIENT_CREDENTIALS
                        - AUTHORIZATION_CODE
                        - REFRESH_TOKEN
                      title: granttype
                    description: A list of OAuth 2.0 grant types this API Client can be used with
                    example:
                      - AUTHORIZATION_CODE
                      - CLIENT_CREDENTIALS
                      - REFRESH_TOKEN
                  accessType:
                    description: The access type (online or offline) of this API Client
                    example: OFFLINE
                    type: string
                    enum:
                      - ONLINE
                      - OFFLINE
                    title: accesstype
                  type:
                    description: The type of the API Client (public or confidential)
                    example: CONFIDENTIAL
                    type: string
                    enum:
                      - CONFIDENTIAL
                      - PUBLIC
                    title: clienttype
                  internal:
                    type: boolean
                    description: An indicator of whether the API Client can be used for requests internal to IDN
                    example: false
                  enabled:
                    type: boolean
                    description: An indicator of whether the API Client is enabled for use
                    example: true
                  strongAuthSupported:
                    type: boolean
                    description: An indicator of whether the API Client supports strong authentication
                    example: false
                  claimsSupported:
                    type: boolean
                    description: An indicator of whether the API Client supports the serialization of SAML claims when used with the authorization_code flow
                    example: false
                  created:
                    type: string
                    format: date-time
                    description: The date and time, down to the millisecond, when the API Client was created
                    example: '2017-07-11T18:45:37.098Z'
                  modified:
                    type: string
                    format: date-time
                    description: The date and time, down to the millisecond, when the API Client was last updated
                    example: '2018-06-25T20:22:28.104Z'
                  scope:
                    type: array
                    nullable: true
                    items:
                      type: string
                      default: sp:scopes:all
                    description: Scopes of the API Client.
                    example:
                      - demo:api-client-scope:first
                      - demo:api-client-scope:second
                required:
                  - id
                  - secret
                  - businessName
                  - homepageUrl
                  - name
                  - description
                  - accessTokenValiditySeconds
                  - refreshTokenValiditySeconds
                  - redirectUris
                  - grantTypes
                  - accessType
                  - type
                  - internal
                  - enabled
                  - strongAuthSupported
                  - claimsSupported
                  - created
                  - modified
                  - scope
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
