## OpenAPI

```yaml POST /intelligence/v1/response-actions
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
  /intelligence/v1/response-actions:
    post:
      description: |
        Requires tenant license idn:response-and-remediation.

        Creates a response action: the request is validated, a requestId (the correlation id) is
        minted, the action is recorded as SUBMITTED, and an event is published that triggers the
        correlated workflow(s).

        Returns HTTP 202 with the requestId, an initial SUBMITTED status, and a statusUrl. Poll
        GET /intelligence/v1/response-actions/{requestId}/status for progress.
      operationId: createResponseActionV1
      security:
        - userAuth:
            - sp:identity-sec-intel:write
        - applicationAuth:
            - sp:identity-sec-intel:write
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              required:
                - actionType
                - identityType
                - identityId
                - context
              description: Request body for creating a response action.
              properties:
                actionType:
                  type: string
                  description: Which response action to run.
                  enum:
                    - DISABLE_IDENTITY
                    - DISABLE_ACCOUNT
                  example: DISABLE_ACCOUNT
                identityType:
                  type: string
                  description: Subject type of the response action. v1 supports HUMAN.
                  enum:
                    - HUMAN
                  example: HUMAN
                identityId:
                  type: string
                  description: ISC identity id, resolved by the caller from a prior intelligence query.
                  example: 2c918085842e69ae018428c919680149
                accountIds:
                  type: array
                  description: |
                    One or more account ids. Required for DISABLE_ACCOUNT (1-50 after trim/dedupe); must be
                    omitted for DISABLE_IDENTITY. A single account is sent as a one-element array.
                  minItems: 1
                  maxItems: 50
                  items:
                    type: string
                  example:
                    - 2c918085abc000000000000000000001
                context:
                  type: object
                  description: External source metadata captured for audit and traceability.
                  required:
                    - source
                  properties:
                    source:
                      type: string
                      description: External system that initiated the action.
                      enum:
                        - CROWDSTRIKE
                        - SENTINEL
                        - SPLUNK
                        - CUSTOM
                      maxLength: 128
                      example: CROWDSTRIKE
                    externalAlertId:
                      type: string
                      description: External alert or case identifier.
                      maxLength: 256
                      example: CS-FALCON-12345
                    reason:
                      type: string
                      description: Human-readable reason for the action.
                      maxLength: 1024
                      example: Contain compromised account
                    operator:
                      type: string
                      description: Operator or analyst who initiated the action.
                      maxLength: 256
                      example: soc-analyst@customer.com
                  title: response-action-context
              oneOf:
                - properties:
                    actionType:
                      enum:
                        - DISABLE_IDENTITY
                  not:
                    required:
                      - accountIds
                - properties:
                    actionType:
                      enum:
                        - DISABLE_ACCOUNT
                  required:
                    - accountIds
              title: response-action-create-request
            examples:
              disableIdentity:
                summary: Disable an identity
                value:
                  actionType: DISABLE_IDENTITY
                  identityType: HUMAN
                  identityId: 2c918085842e69ae018428c919680149
                  context:
                    source: CROWDSTRIKE
                    externalAlertId: CS-FALCON-12345
                    reason: Malware detected on endpoint DESKTOP-A1B2C3
                    operator: soc-analyst@customer.com
              disableAccount:
                summary: Disable one or more accounts
                value:
                  actionType: DISABLE_ACCOUNT
                  identityType: HUMAN
                  identityId: 2c918085842e69ae018428c919680149
                  accountIds:
                    - 2c918085abc000000000000000000001
                  context:
                    source: CROWDSTRIKE
                    externalAlertId: CS-FALCON-12345
                    reason: Contain compromised account
                    operator: soc-analyst@customer.com
      responses:
        '202':
          description: The response action was accepted and is being processed asynchronously.
          content:
            application/json:
              schema:
                type: object
                description: Acknowledgement returned when a response action is accepted for asynchronous processing.
                required:
                  - requestId
                  - status
                  - statusUrl
                properties:
                  requestId:
                    type: string
                    description: Tracking handle and correlation id for the response action.
                    example: 3f1e6c9a-8b2d-4e5f-9a1b-2c3d4e5f6a7b
                  status:
                    type: string
                    description: Aggregate status of the response action. SUBMITTED at creation (registered; no correlated workflow execution observed yet).
                    enum:
                      - SUBMITTED
                      - IN_PROGRESS
                      - COMPLETED
                      - FAILED
                    example: SUBMITTED
                  statusUrl:
                    type: string
                    description: Relative URL to poll for the current status of the response action.
                    example: /intelligence/v1/response-actions/3f1e6c9a-8b2d-4e5f-9a1b-2c3d4e5f6a7b/status
                title: response-action-accepted
              example:
                requestId: 3f1e6c9a-8b2d-4e5f-9a1b-2c3d4e5f6a7b
                status: SUBMITTED
                statusUrl: /intelligence/v1/response-actions/3f1e6c9a-8b2d-4e5f-9a1b-2c3d4e5f6a7b/status
        '400':
          description: Missing or invalid request body.
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
