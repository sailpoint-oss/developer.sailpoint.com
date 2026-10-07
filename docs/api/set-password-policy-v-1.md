## OpenAPI

```yaml PUT /password-policies/v1/{id}
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
  /password-policies/v1/{id}:
    put:
      description: This API updates the specified password policy.
      operationId: setPasswordPolicyV1
      security:
        - userAuth:
            - idn:password-policy:write
      parameters:
        - in: path
          name: id
          schema:
            type: string
          required: true
          x-sailpoint-resource-operation-id: listPasswordPoliciesV1
          description: The ID of password policy to update.
          example: ff808081838d9e9d01838da6a03e0007
        - name: X-SailPoint-Experimental
          in: header
          description: Use this header to enable this experimental API.
          example: true
          schema:
            type: string
            default: true
          required: true
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              title: Password Policy V 3 Dto
              properties:
                id:
                  type: string
                  description: The password policy Id.
                  example: 2c91808e7d976f3b017d9f5ceae440c8
                description:
                  type: string
                  nullable: true
                  description: Description for current password policy.
                  example: Information about the Password Policy
                name:
                  type: string
                  description: The name of the password policy.
                  example: PasswordPolicy Example
                dateCreated:
                  type: integer
                  format: int64
                  description: Date the Password Policy was created.
                  example: 1639056206564
                lastUpdated:
                  type: integer
                  format: int64
                  nullable: true
                  description: Date the Password Policy was updated.
                  example: 1939056206564
                firstExpirationReminder:
                  type: integer
                  format: int64
                  description: The number of days before expiration remaninder.
                  example: 45
                accountIdMinWordLength:
                  type: integer
                  format: int64
                  description: The minimun length of account Id. By default is equals to -1.
                  example: 4
                accountNameMinWordLength:
                  type: integer
                  format: int64
                  description: The minimun length of account name. By default is equals to -1.
                  example: 6
                minAlpha:
                  type: integer
                  format: int64
                  description: Maximum alpha. By default is equals to 0.
                  example: 5
                minCharacterTypes:
                  type: integer
                  format: int64
                  description: MinCharacterTypes. By default is equals to -1.
                  example: 5
                maxLength:
                  type: integer
                  format: int64
                  description: Maximum length of the password.
                  example: 25
                minLength:
                  type: integer
                  format: int64
                  description: Minimum length of the password. By default is equals to 0.
                  example: 8
                maxRepeatedChars:
                  type: integer
                  format: int64
                  description: Maximum repetition of the same character in the password. By default is equals to -1.
                  example: 3
                minLower:
                  type: integer
                  format: int64
                  description: Minimum amount of lower case character in the password. By default is equals to 0.
                  example: 8
                minNumeric:
                  type: integer
                  format: int64
                  description: Minimum amount of numeric characters in the password. By default is equals to 0.
                  example: 8
                minSpecial:
                  type: integer
                  format: int64
                  description: Minimum amount of special symbols in the password. By default is equals to 0.
                  example: 8
                minUpper:
                  type: integer
                  format: int64
                  description: Minimum amount of upper case symbols in the password. By default is equals to 0.
                  example: 8
                passwordExpiration:
                  type: integer
                  format: int64
                  description: Number of days before current password expires. By default is equals to 90.
                  example: 8
                defaultPolicy:
                  type: boolean
                  description: Defines whether this policy is default or not. Default policy is created automatically when an org is setup. This field is false by default.
                  example: true
                  default: false
                enablePasswdExpiration:
                  type: boolean
                  description: Defines whether this policy is enabled to expire or not. This field is false by default.
                  example: true
                  default: false
                requireStrongAuthn:
                  type: boolean
                  description: Defines whether this policy require strong Auth or not. This field is false by default.
                  example: true
                  default: false
                requireStrongAuthOffNetwork:
                  type: boolean
                  description: Defines whether this policy require strong Auth of network or not. This field is false by default.
                  example: true
                  default: false
                requireStrongAuthUntrustedGeographies:
                  type: boolean
                  description: Defines whether this policy require strong Auth for untrusted geographies. This field is false by default.
                  example: true
                  default: false
                useAccountAttributes:
                  type: boolean
                  description: Defines whether this policy uses account attributes or not. This field is false by default.
                  example: false
                  default: false
                useDictionary:
                  type: boolean
                  description: Defines whether this policy uses dictionary or not. This field is false by default.
                  example: false
                  default: false
                useIdentityAttributes:
                  type: boolean
                  description: Defines whether this policy uses identity attributes or not. This field is false by default.
                  example: false
                  default: false
                validateAgainstAccountId:
                  type: boolean
                  description: Defines whether this policy validate against account id or not. This field is false by default.
                  example: false
                  default: false
                validateAgainstAccountName:
                  type: boolean
                  description: Defines whether this policy validate against account name or not. This field is false by default.
                  example: true
                  default: false
                created:
                  type: string
                  nullable: true
                modified:
                  type: string
                  nullable: true
                sourceIds:
                  type: array
                  description: List of sources IDs managed by this password policy.
                  items:
                    type: string
                  example:
                    - 2c91808382ffee0b01830de154f14034
                    - 2f98808382ffee0b01830de154f12134
            example:
              description: Password Policy after update.
              id: 2c91808e7d976f3b017d9f5ceae440c8
              name: Improved Password Policy
              dateCreated: 1639056206564
              lastUpdated: 1662385430753
              firstExpirationReminder: 90
              accountIdMinWordLength: 3
              accountNameMinWordLength: 3
              maxLength: 0
              maxRepeatedChars: 4
              minAlpha: 1
              minCharacterTypes: -1
              minLength: 8
              minLower: 0
              minNumeric: 1
              minSpecial: 0
              minUpper: 0
              passwordExpiration: 90
              defaultPolicy: false
              enablePasswdExpiration: false
              requireStrongAuthn: false
              requireStrongAuthOffNetwork: false
              requireStrongAuthUntrustedGeographies: false
              useAccountAttributes: false
              useDictionary: false
              useIdentityAttributes: false
              validateAgainstAccountId: true
              validateAgainstAccountName: true
              sourceIds:
                - 2c91808382ffee0b01830de154f14034
                - 2c91808582ffee0c01830de36511405f
      responses:
        '200':
          description: Reference to the password policy.
          content:
            application/json:
              schema:
                type: object
                title: Password Policy V 3 Dto
                properties:
                  id:
                    type: string
                    description: The password policy Id.
                    example: 2c91808e7d976f3b017d9f5ceae440c8
                  description:
                    type: string
                    nullable: true
                    description: Description for current password policy.
                    example: Information about the Password Policy
                  name:
                    type: string
                    description: The name of the password policy.
                    example: PasswordPolicy Example
                  dateCreated:
                    type: integer
                    format: int64
                    description: Date the Password Policy was created.
                    example: 1639056206564
                  lastUpdated:
                    type: integer
                    format: int64
                    nullable: true
                    description: Date the Password Policy was updated.
                    example: 1939056206564
                  firstExpirationReminder:
                    type: integer
                    format: int64
                    description: The number of days before expiration remaninder.
                    example: 45
                  accountIdMinWordLength:
                    type: integer
                    format: int64
                    description: The minimun length of account Id. By default is equals to -1.
                    example: 4
                  accountNameMinWordLength:
                    type: integer
                    format: int64
                    description: The minimun length of account name. By default is equals to -1.
                    example: 6
                  minAlpha:
                    type: integer
                    format: int64
                    description: Maximum alpha. By default is equals to 0.
                    example: 5
                  minCharacterTypes:
                    type: integer
                    format: int64
                    description: MinCharacterTypes. By default is equals to -1.
                    example: 5
                  maxLength:
                    type: integer
                    format: int64
                    description: Maximum length of the password.
                    example: 25
                  minLength:
                    type: integer
                    format: int64
                    description: Minimum length of the password. By default is equals to 0.
                    example: 8
                  maxRepeatedChars:
                    type: integer
                    format: int64
                    description: Maximum repetition of the same character in the password. By default is equals to -1.
                    example: 3
                  minLower:
                    type: integer
                    format: int64
                    description: Minimum amount of lower case character in the password. By default is equals to 0.
                    example: 8
                  minNumeric:
                    type: integer
                    format: int64
                    description: Minimum amount of numeric characters in the password. By default is equals to 0.
                    example: 8
                  minSpecial:
                    type: integer
                    format: int64
                    description: Minimum amount of special symbols in the password. By default is equals to 0.
                    example: 8
                  minUpper:
                    type: integer
                    format: int64
                    description: Minimum amount of upper case symbols in the password. By default is equals to 0.
                    example: 8
                  passwordExpiration:
                    type: integer
                    format: int64
                    description: Number of days before current password expires. By default is equals to 90.
                    example: 8
                  defaultPolicy:
                    type: boolean
                    description: Defines whether this policy is default or not. Default policy is created automatically when an org is setup. This field is false by default.
                    example: true
                    default: false
                  enablePasswdExpiration:
                    type: boolean
                    description: Defines whether this policy is enabled to expire or not. This field is false by default.
                    example: true
                    default: false
                  requireStrongAuthn:
                    type: boolean
                    description: Defines whether this policy require strong Auth or not. This field is false by default.
                    example: true
                    default: false
                  requireStrongAuthOffNetwork:
                    type: boolean
                    description: Defines whether this policy require strong Auth of network or not. This field is false by default.
                    example: true
                    default: false
                  requireStrongAuthUntrustedGeographies:
                    type: boolean
                    description: Defines whether this policy require strong Auth for untrusted geographies. This field is false by default.
                    example: true
                    default: false
                  useAccountAttributes:
                    type: boolean
                    description: Defines whether this policy uses account attributes or not. This field is false by default.
                    example: false
                    default: false
                  useDictionary:
                    type: boolean
                    description: Defines whether this policy uses dictionary or not. This field is false by default.
                    example: false
                    default: false
                  useIdentityAttributes:
                    type: boolean
                    description: Defines whether this policy uses identity attributes or not. This field is false by default.
                    example: false
                    default: false
                  validateAgainstAccountId:
                    type: boolean
                    description: Defines whether this policy validate against account id or not. This field is false by default.
                    example: false
                    default: false
                  validateAgainstAccountName:
                    type: boolean
                    description: Defines whether this policy validate against account name or not. This field is false by default.
                    example: true
                    default: false
                  created:
                    type: string
                    nullable: true
                  modified:
                    type: string
                    nullable: true
                  sourceIds:
                    type: array
                    description: List of sources IDs managed by this password policy.
                    items:
                      type: string
                    example:
                      - 2c91808382ffee0b01830de154f14034
                      - 2f98808382ffee0b01830de154f12134
              example:
                description: Password Policy after update.
                id: 2c91808e7d976f3b017d9f5ceae440c8
                name: Improved Password Policy
                dateCreated: 1639056206564
                lastUpdated: 1662385430753
                firstExpirationReminder: 90
                accountIdMinWordLength: 3
                accountNameMinWordLength: 3
                maxLength: 0
                maxRepeatedChars: 4
                minAlpha: 1
                minCharacterTypes: -1
                minLength: 8
                minLower: 0
                minNumeric: 1
                minSpecial: 0
                minUpper: 0
                passwordExpiration: 90
                defaultPolicy: false
                enablePasswdExpiration: false
                requireStrongAuthn: false
                requireStrongAuthOffNetwork: false
                requireStrongAuthUntrustedGeographies: false
                useAccountAttributes: false
                useDictionary: false
                useIdentityAttributes: false
                validateAgainstAccountId: true
                validateAgainstAccountName: true
                sourceIds:
                  - 2c91808382ffee0b01830de154f14034
                  - 2c91808582ffee0c01830de36511405f
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
