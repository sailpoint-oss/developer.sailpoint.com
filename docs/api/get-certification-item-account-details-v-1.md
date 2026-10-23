## OpenAPI

```yaml GET /certification-campaigns/v1/certifications/{certificationId}/review-items/{reviewItemId}/item-id/{entitlementId}/cert-account-details
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
  /certification-campaigns/v1/certifications/{certificationId}/review-items/{reviewItemId}/item-id/{entitlementId}/cert-account-details:
    get:
      description: Returns account details for a certification review item. Required roles are ORG_ADMIN or CERT_ADMIN. Reviewers for this certification can also call this API. It uses the Shelby Account API to fetch details.
      operationId: getCertificationItemAccountDetailsV1
      security:
        - userAuth:
            - idn:campaign:read
            - idn:campaign:manage
      parameters:
        - name: X-SailPoint-Experimental
          in: header
          description: Use this header to enable this experimental API.
          example: 'true'
          schema:
            type: string
            default: 'true'
          required: true
        - in: path
          name: certificationId
          schema:
            type: string
            format: uuid
          required: true
          description: The certification ID
          example: ef38f943-47e9-4562-b5bb-8424a56397d8
          x-sailpoint-resource-operation-id: listCertificationsV1
        - in: path
          name: reviewItemId
          schema:
            type: string
            format: uuid
          required: true
          description: The certification item ID
          example: 2478b87b-f0d2-4585-b42d-45e4d580c5cf
          x-sailpoint-resource-operation-id: listReviewItemsV1
        - in: path
          name: entitlementId
          schema:
            type: string
          required: true
          description: The entitlement ID
          example: ef38f94347e94562b5bb8424a56397d8
          x-sailpoint-resource-operation-id: listEntitlementsV1
      responses:
        '200':
          description: Account details of particular certification review item
          content:
            application/json:
              schema:
                type: object
                properties:
                  id:
                    description: Unique id of account
                    type: string
                    example: id12345
                  name:
                    description: Name of the account
                    type: string
                    example: account34
                  sourceId:
                    type: string
                    example: 2c9180835d2e5168015d32f890ca1581
                    description: The unique ID of the source this account belongs to
                  sourceName:
                    type: string
                    example: Employees
                    description: The display name of the source this account belongs to
                  identityId:
                    type: string
                    example: 2c9180835d2e5168015d32f890ca1581
                    description: The unique ID of the identity this account is correlated to
                  attributes:
                    type: object
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
                    default: false
                  description:
                    type: string
                    description: A description of the account
                    example: A description of the account
                  disabled:
                    type: boolean
                    description: Indicates if the account is currently disabled
                    example: false
                    default: false
                  locked:
                    type: boolean
                    description: Indicates if the account is currently locked
                    example: false
                    default: false
                  nativeIdentity:
                    type: string
                    description: The unique ID of the account generated by the source system
                    example: '552775'
                  systemAccount:
                    type: boolean
                    example: false
                    default: false
                    description: If true, this is a user account within IdentityNow.  If false, this is an account from a source system.
                  uncorrelated:
                    type: boolean
                    description: Indicates if this account is not correlated to an identity
                    example: false
                    default: false
                  uuid:
                    type: string
                    description: The unique ID of the account as determined by the account schema
                    example: slpt.support
                  manuallyCorrelated:
                    type: boolean
                    description: Indicates if the account has been manually correlated to an identity
                    example: false
                    default: false
                  hasEntitlements:
                    type: boolean
                    description: Indicates if the account has entitlements
                    example: true
                    default: false
                  identity:
                    type: object
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
                    description: The identity this account is correlated to
                    example:
                      id: 2c918084660f45d6016617daa9210584
                      type: IDENTITY
                      name: Adam Kennedy
                  sourceOwner:
                    type: object
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
                    description: The owner of the source this account belongs to
                    example:
                      id: 4c5c8534e99445de98eef6c75e25eb01
                      type: IDENTITY
                      name: SailPoint Support
                  features:
                    type: string
                    description: A string list containing the owning source's features
                    example: ENABLE
                  created:
                    description: Creation date of the Object
                    type: string
                    example: '2015-05-28T14:07:17Z'
                    format: date-time
                  modified:
                    description: Last modification date of the Object
                    type: string
                    example: '2015-05-28T14:07:17Z'
                    format: date-time
                title: AccountDetailsDto
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
