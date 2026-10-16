## OpenAPI

```yaml GET /ssf/v1/jwks
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
  /ssf/v1/jwks:
    get:
      description: Returns the transmitter's JSON Web Key Set (JWKS) for verifying signed delivery requests.
      operationId: getJWKSDataV1
      security:
        - {}
      responses:
        '200':
          description: JSON Web Key Set (RFC 7517) containing the transmitter's public keys.
          content:
            application/json:
              schema:
                type: object
                description: JSON Web Key Set containing the transmitter's public keys for verifying signed delivery requests.
                required:
                  - keys
                properties:
                  keys:
                    type: array
                    items:
                      type: object
                      description: A single JSON Web Key used for verifying signed delivery requests.
                      properties:
                        alg:
                          type: string
                          description: Algorithm intended for use with the key (e.g. RS256).
                          example: RS256
                        e:
                          type: string
                          description: RSA public exponent (Base64url encoded).
                          example: AQAB
                        kid:
                          type: string
                          description: Key ID - unique identifier for the key.
                          example: mrk-3db792b3d0a642dbbb5bb28b542929cd
                        kty:
                          type: string
                          description: Key type (e.g. RSA).
                          example: RSA
                        'n':
                          type: string
                          description: RSA modulus (Base64url encoded).
                          example: xMPKL_ccvjTDQAJ60jg5kP9XJmEIpeSb1FIjzvAnM9RP-vSiY5iW2eK0-VLHYB_XbcDT8jzneUmX90mCfiwF_F4Mjh3f0D79ncrXDglnBLKnuqmvNcblUOuOyNFts3jQSBAqB_GR_dSjKLzbs1wP3K8EJqosQGfPNuh5HxFfU79v-uZFdtkYzf_xtu8phrO84VT_DLuFJyIxLOcY5MVJ6uHlmlKXSJbMO8xTKzvcz6TTZM8XrrT73GpTCdtmNVpCLz2v14XQb-6sNeya2v037ktrgdUWFLC63iIgNKzgNr88L7x3j5AeeOi1VX_2ZAxLrz4BUtJxxyWxVthrpDCYuQ
                        use:
                          type: string
                          description: Intended use of the key (e.g. sig for signature verification).
                          example: sig
                      title: jwk
                    description: Array of JSON Web Keys.
                    example:
                      - alg: RS256
                        e: AQAB
                        kid: mrk-3db792b3d0a642dbbb5bb28b542929cd
                        kty: RSA
                        'n': xMPKL_ccvjTDQAJ60jg5kP9XJmEIpeSb1FIjzvAnM9RP-vSiY5iW2eK0-VLHYB_XbcDT8jzneUmX90mCfiwF_F4Mjh3f0D79ncrXDglnBLKnuqmvNcblUOuOyNFts3jQSBAqB_GR_dSjKLzbs1wP3K8EJqosQGfPNuh5HxFfU79v-uZFdtkYzf_xtu8phrO84VT_DLuFJyIxLOcY5MVJ6uHlmlKXSJbMO8xTKzvcz6TTZM8XrrT73GpTCdtmNVpCLz2v14XQb-6sNeya2v037ktrgdUWFLC63iIgNKzgNr88L7x3j5AeeOi1VX_2ZAxLrz4BUtJxxyWxVthrpDCYuQ
                        use: sig
                title: jwks
              example:
                keys:
                  - alg: RS256
                    e: AQAB
                    kid: mrk-3db792b3d0a642dbbb5bb28b542929cd
                    kty: RSA
                    'n': xMPKL_ccvjTDQAJ60jg5kP9XJmEIpeSb1FIjzvAnM9RP-vSiY5iW2eK0-VLHYB_XbcDT8jzneUmX90mCfiwF_F4Mjh3f0D79ncrXDglnBLKnuqmvNcblUOuOyNFts3jQSBAqB_GR_dSjKLzbs1wP3K8EJqosQGfPNuh5HxFfU79v-uZFdtkYzf_xtu8phrO84VT_DLuFJyIxLOcY5MVJ6uHlmlKXSJbMO8xTKzvcz6TTZM8XrrT73GpTCdtmNVpCLz2v14XQb-6sNeya2v037ktrgdUWFLC63iIgNKzgNr88L7x3j5AeeOi1VX_2ZAxLrz4BUtJxxyWxVthrpDCYuQ
                    use: sig
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
