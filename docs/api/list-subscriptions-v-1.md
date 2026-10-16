## OpenAPI

```yaml GET /trigger-subscriptions/v1
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
  /trigger-subscriptions/v1:
    get:
      description: Gets a list of all trigger subscriptions.
      operationId: listSubscriptionsV1
      security:
        - userAuth:
            - sp:trigger-service-subscriptions:read
            - sp:trigger-service-subscriptions:manage
        - applicationAuth:
            - sp:trigger-service-subscriptions:read
            - sp:trigger-service-subscriptions:manage
      parameters:
        - in: query
          name: limit
          description: |-
            Max number of results to return.
            See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
          required: false
          example: 250
          schema:
            type: integer
            format: int32
            minimum: 0
            maximum: 250
            default: 250
        - in: query
          name: offset
          description: |-
            Offset into the full result set. Usually specified with *limit* to paginate through the results.
            See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
          required: false
          example: 0
          schema:
            type: integer
            format: int32
            minimum: 0
            default: 0
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
        - in: query
          required: false
          name: filters
          schema:
            type: string
          description: |-
            Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)

            Filtering is supported for the following fields and operators:

            **id**: *eq*

            **triggerId**: *eq*

            **type**: *eq, le*
          example: id eq "12cff757-c0c0-413b-8ad7-2a47956d1e89"
        - in: query
          name: sorters
          required: false
          schema:
            type: string
            format: comma-separated
          description: |-
            Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)

            Sorting is supported for the following fields: **triggerId, triggerName**
          example: triggerName
      responses:
        '200':
          description: List of subscriptions.
          content:
            application/json:
              schema:
                type: array
                items:
                  type: object
                  title: Subscription
                  required:
                    - id
                    - triggerId
                    - type
                    - name
                    - triggerName
                    - enabled
                  properties:
                    id:
                      type: string
                      description: Subscription ID.
                      example: 0f11f2a4-7c94-4bf3-a2bd-742580fe3bde
                    name:
                      type: string
                      description: Subscription name.
                      example: Access request subscription
                    description:
                      type: string
                      description: Subscription description.
                      example: Access requested to site xyz
                    triggerId:
                      type: string
                      description: ID of trigger subscribed to.
                      example: idn:access-request-post-approval
                    triggerName:
                      type: string
                      description: Trigger name of trigger subscribed to.
                      example: Access Requested
                    type:
                      type: string
                      enum:
                        - HTTP
                        - EVENTBRIDGE
                        - INLINE
                        - SCRIPT
                        - WORKFLOW
                      description: Subscription type. **NOTE** If type is EVENTBRIDGE, then eventBridgeConfig is required. If type is HTTP, then httpConfig is required.
                      example: HTTP
                      title: subscriptiontype
                    responseDeadline:
                      type: string
                      description: Deadline for completing REQUEST_RESPONSE trigger invocation, represented in ISO-8601 duration format.
                      example: PT1H
                      default: PT1H
                    httpConfig:
                      description: Config required if HTTP subscription type is used.
                      type: object
                      title: Http Config
                      properties:
                        url:
                          type: string
                          description: URL of the external/custom integration.
                          example: https://www.example.com
                        httpDispatchMode:
                          type: string
                          description: HTTP response modes, i.e. SYNC, ASYNC, or DYNAMIC.
                          enum:
                            - SYNC
                            - ASYNC
                            - DYNAMIC
                          example: SYNC
                          title: httpdispatchmode
                        httpAuthenticationType:
                          type: string
                          description: |-
                            Defines the HTTP Authentication type. Additional values may be added in the future.

                            If *NO_AUTH* is selected, no extra information will be in HttpConfig.

                            If *BASIC_AUTH* is selected, HttpConfig will include BasicAuthConfig with Username and Password as strings.

                            If *BEARER_TOKEN* is selected, HttpConfig will include BearerTokenAuthConfig with Token as string.
                          enum:
                            - NO_AUTH
                            - BASIC_AUTH
                            - BEARER_TOKEN
                          default: NO_AUTH
                          example: BASIC_AUTH
                          title: httpauthenticationtype
                        basicAuthConfig:
                          type: object
                          title: Basic Auth Config
                          properties:
                            userName:
                              type: string
                              description: The username to authenticate.
                              example: user@example.com
                            password:
                              type: string
                              nullable: true
                              description: The password to authenticate. On response, this field is set to null as to not return secrets.
                              example: null
                          nullable: true
                          description: Config required if BASIC_AUTH is used.
                        bearerTokenAuthConfig:
                          type: object
                          title: Bearer Token Auth Config
                          properties:
                            bearerToken:
                              type: string
                              nullable: true
                              description: Bearer token
                              example: null
                          nullable: true
                          description: Config required if BEARER_TOKEN authentication is used. On response, this field is set to null as to not return secrets.
                      required:
                        - url
                        - httpDispatchMode
                    eventBridgeConfig:
                      description: Config required if EVENTBRIDGE subscription type is used.
                      type: object
                      title: Event Bridge Config
                      properties:
                        awsAccount:
                          type: string
                          description: AWS Account Number (12-digit number) that has the EventBridge Partner Event Source Resource.
                          example: '123456789012'
                        awsRegion:
                          type: string
                          description: AWS Region that has the EventBridge Partner Event Source Resource. See https://docs.aws.amazon.com/general/latest/gr/rande.html for a full list of available values.
                          example: us-west-1
                      required:
                        - awsAccount
                        - awsRegion
                    enabled:
                      type: boolean
                      description: |-
                        Whether subscription should receive real-time trigger invocations or not.
                        Test trigger invocations are always enabled regardless of this option.
                      default: true
                      example: true
                    filter:
                      type: string
                      description: JSONPath filter to conditionally invoke trigger when expression evaluates to true.
                      example: $[?($.identityId == "201327fda1c44704ac01181e963d463c")]
                      externalDocs:
                        description: JSONPath filter documentation
                        url: https://developer.sailpoint.com/docs/extensibility/event-triggers/filtering-events
              examples:
                HTTP Subscription:
                  value:
                    - id: 0f11f2a4-7c94-4bf3-a2bd-742580fe3bde
                      name: Access request subscription
                      description: Access requested to site xyz
                      triggerId: idn:access-requested
                      triggerName: Access Requested
                      type: HTTP
                      httpConfig:
                        url: https://www.example.com
                        httpDispatchMode: SYNC
                        httpAuthenticationType: BASIC_AUTH
                        basicAuthConfig:
                          userName: user@example.com
                          password: null
                      enabled: true
                      filter: $[?($.identityId == "201327fda1c44704ac01181e963d463c")]
                HTTP Async Subscription:
                  value:
                    name: Access request subscription
                    description: Access requested to site xyz
                    triggerId: idn:access-requested
                    triggerName: Access Requested
                    type: HTTP
                    responseDeadline: PT1H
                    httpConfig:
                      url: https://www.example.com
                      httpDispatchMode: ASYNC
                      httpAuthenticationType: BASIC_AUTH
                      basicAuthConfig:
                        userName: user@example.com
                        password: null
                    enabled: true
                    filter: $[?($.identityId == "201327fda1c44704ac01181e963d463c")]
                EventBridge Subscription:
                  value:
                    - id: 0f11f2a4-7c94-4bf3-a2bd-742580fe3bde
                      name: Access request subscription
                      description: Access requested to site xyz
                      triggerId: idn:access-requested
                      triggerName: Access Requested
                      type: EVENTBRIDGE
                      eventBridgeConfig:
                        awsAccount: '123456789012'
                        awsRegion: us-west-1
                      enabled: true
                      filter: $[?($.identityId == "201327fda1c44704ac01181e963d463c")]
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
