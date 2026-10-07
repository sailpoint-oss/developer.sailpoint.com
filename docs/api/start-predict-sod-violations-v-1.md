## OpenAPI

```yaml POST /sod-violations/v1/predict
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
  /sod-violations/v1/predict:
    post:
      description: This API is used to check if granting some additional accesses (entitlements, access profiles, or roles) would cause the subject to be in violation of any SOD policies. Returns the violations that would be caused.
      operationId: startPredictSodViolationsV1
      security:
        - userAuth:
            - idn:sod-violation:read
            - idn:sod-violation:manage
        - applicationAuth:
            - idn:sod-violation:read
            - idn:sod-violation:manage
      requestBody:
        required: true
        content:
          application/json:
            schema:
              description: An identity with a set of access to be added
              required:
                - identityId
                - accessRefs
              type: object
              properties:
                identityId:
                  description: Identity id to be checked.
                  type: string
                  example: 2c91808568c529c60168cca6f90c1313
                accessRefs:
                  description: The list of access items to consider for possible violations in a preventive check. Supported types are ENTITLEMENT, ACCESS_PROFILE, and ROLE.
                  type: array
                  items:
                    type: object
                    description: Reference to an access item that may contribute to an SOD violation.
                    properties:
                      type:
                        type: string
                        description: Access item DTO type.
                        enum:
                          - ENTITLEMENT
                          - ACCESS_PROFILE
                          - ROLE
                        example: ENTITLEMENT
                        nullable: false
                      id:
                        type: string
                        description: Access item ID.
                        example: 2c91809773dee32014e13e122092014e
                        nullable: false
                  example:
                    - type: ENTITLEMENT
                      id: 2c918087682f9a86016839c050861ab1
                    - type: ACCESS_PROFILE
                      id: 2c918087682f9a86016839c0509c1ab2
                    - type: ROLE
                      id: 2c918087682f9a86016839c050a01ab3
              title: identitywithnewaccess
            example:
              identityId: 2c91808568c529c60168cca6f90c1313
              accessRefs:
                - type: ENTITLEMENT
                  id: 2c918087682f9a86016839c050861ab1
                - type: ACCESS_PROFILE
                  id: 2c918087682f9a86016839c0509c1ab2
                - type: ROLE
                  id: 2c918087682f9a86016839c050a01ab3
      responses:
        '200':
          description: Violation Contexts
          content:
            application/json:
              schema:
                description: An object containing a listing of the SOD violation reasons detected by this check.
                required:
                  - requestId
                type: object
                properties:
                  violationContexts:
                    type: array
                    description: List of Violation Contexts
                    items:
                      type: object
                      properties:
                        policy:
                          allOf:
                            - type: object
                              description: SOD policy.
                              properties:
                                type:
                                  type: string
                                  description: SOD policy DTO type.
                                  enum:
                                    - SOD_POLICY
                                  example: SOD_POLICY
                                id:
                                  type: string
                                  description: SOD policy ID.
                                  example: 0f11f2a4-7c94-4bf3-a2bd-742580fe3bde
                                name:
                                  type: string
                                  description: SOD policy display name.
                                  example: Business SOD Policy
                              title: sodpolicydto-2
                            - type: object
                              properties:
                                type:
                                  type: string
                                  example: SOD_POLICY
                                name:
                                  type: string
                                  example: A very cool policy name
                          description: The types of objects supported for SOD violations
                          properties:
                            type:
                              enum:
                                - ENTITLEMENT
                              example: ENTITLEMENT
                              description: The type of object that is referenced
                        conflictingAccessCriteria:
                          nullable: false
                          description: The object which contains the left and right hand side of the entitlements that got violated according to the policy.
                          type: object
                          properties:
                            leftCriteria:
                              type: object
                              properties:
                                criteriaList:
                                  type: array
                                  description: List of exception criteria. There is a min of 1 and max of 50 items in the list.
                                  items:
                                    allOf:
                                      - type: object
                                        properties:
                                          type:
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
                                            description: An enumeration of the types of DTOs supported within the IdentityNow infrastructure.
                                            example: IDENTITY
                                            title: dtotype
                                          id:
                                            type: string
                                            description: ID of the object to which this reference applies
                                            example: 2c91808568c529c60168cca6f90c1313
                                          name:
                                            type: string
                                            description: Human-readable display name of the object to which this reference applies
                                            example: CN=HelpDesk,OU=test,OU=test-service,DC=TestAD,DC=local
                                          existing:
                                            type: boolean
                                            description: Whether the subject identity already had that access or not
                                            default: false
                                            example: true
                                        description: Access reference with addition of boolean existing flag to indicate whether the access was extant
                                        title: exceptioncriteriaaccess
                                    description: The types of objects supported for SOD violations
                                    properties:
                                      type:
                                        enum:
                                          - ENTITLEMENT
                                        example: ENTITLEMENT
                                        description: The type of object that is referenced
                                  example:
                                    - type: ENTITLEMENT
                                      id: 2c9180866166b5b0016167c32ef31a66
                                      existing: true
                                    - type: ENTITLEMENT
                                      id: 2c9180866166b5b0016167c32ef31a67
                                      existing: false
                              title: exceptioncriteria
                            rightCriteria:
                              type: object
                              properties:
                                criteriaList:
                                  type: array
                                  description: List of exception criteria. There is a min of 1 and max of 50 items in the list.
                                  items:
                                    allOf:
                                      - type: object
                                        properties:
                                          type:
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
                                            description: An enumeration of the types of DTOs supported within the IdentityNow infrastructure.
                                            example: IDENTITY
                                            title: dtotype
                                          id:
                                            type: string
                                            description: ID of the object to which this reference applies
                                            example: 2c91808568c529c60168cca6f90c1313
                                          name:
                                            type: string
                                            description: Human-readable display name of the object to which this reference applies
                                            example: CN=HelpDesk,OU=test,OU=test-service,DC=TestAD,DC=local
                                          existing:
                                            type: boolean
                                            description: Whether the subject identity already had that access or not
                                            default: false
                                            example: true
                                        description: Access reference with addition of boolean existing flag to indicate whether the access was extant
                                        title: exceptioncriteriaaccess
                                    description: The types of objects supported for SOD violations
                                    properties:
                                      type:
                                        enum:
                                          - ENTITLEMENT
                                        example: ENTITLEMENT
                                        description: The type of object that is referenced
                                  example:
                                    - type: ENTITLEMENT
                                      id: 2c9180866166b5b0016167c32ef31a66
                                      existing: true
                                    - type: ENTITLEMENT
                                      id: 2c9180866166b5b0016167c32ef31a67
                                      existing: false
                              title: exceptioncriteria
                          title: exceptionaccesscriteria
                      title: violationcontext
                title: violationprediction
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
