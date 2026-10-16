## OpenAPI

```yaml POST /sources/v1/{sourceId}/aggregate-agents
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
  /sources/v1/{sourceId}/aggregate-agents:
    post:
      description: Starts a machine identity (AI Agents) aggregation on the specified source.
      operationId: startMachineIdentityAggregationV1
      security:
        - userAuth:
            - idn:mis-agents:aggregate
      parameters:
        - in: path
          name: sourceId
          schema:
            type: string
          required: true
          description: Source ID.
          example: ef38f94347e94562b5bb8424a56397d8
          x-sailpoint-resource-operation-id: listSourcesV1
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
              title: Machine Identity Aggregation Request
              required:
                - datasetIds
              properties:
                datasetIds:
                  type: array
                  description: List of dataset Ids to aggregate machine identities
                  items:
                    type: string
                    description: The dataset Id of the source
                    example: source:datasetId12345
                disableOptimization:
                  type: boolean
                  description: Flag to disable optimization for the aggregation. Defaults to false when not provided. When set to true, it disables aggregation optimizations and may increase processing time.
                  example: false
                  default: false
      responses:
        '200':
          description: Machine Identity Aggregation was started successfully.
          content:
            application/json:
              schema:
                type: object
                title: Machine Identity Aggregation Response
                properties:
                  id:
                    type: string
                    description: System-generated unique ID of the Object
                    example: 8886e5e3-63d0-462f-a195-d98da885b8dc
                  type:
                    description: Type of task for aggregation
                    type: string
                    enum:
                      - QUARTZ
                      - QPOC
                      - QUEUED_TASK
                    example: QUARTZ
                  uniqueName:
                    description: Name of the task for aggregation
                    type: string
                    example: AI Agent Aggregation - ID123
                  description:
                    description: Description of the aggregation
                    type: string
                    example: AI Agent Aggregation - From given dataset IDs
                  parentName:
                    description: Name of the parent of the task for aggregation
                    nullable: true
                    type: string
                    example: Parent Task
                  launcher:
                    description: Service to execute the aggregation
                    type: string
                    example: System
                  target:
                    description: The target(source) of the aggregation
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
                      - type: object
                        example:
                          id: 6d28b7c1-620c-49c6-b6d5-cbf81eb4b5fa
                          name: Source name
                          type: APPLICATION
                  created:
                    description: Creation date of the aggregation
                    type: string
                    format: date-time
                    example: '2020-07-11T21:23:15.000Z'
                  modified:
                    description: Last modification date of the aggregation
                    type: string
                    format: date-time
                    example: '2020-07-11T21:23:15.000Z'
                  launched:
                    description: Launch date of the aggregation
                    nullable: true
                    type: string
                    format: date-time
                    example: '2020-07-11T21:23:15.000Z'
                  completed:
                    description: Completion date of the aggregation
                    nullable: true
                    type: string
                    format: date-time
                    example: '2020-07-11T21:23:15.000Z'
                  taskDefinitionSummary:
                    description: Definition of a type of task, used to invoke tasks
                    required:
                      - arguments
                      - description
                      - executor
                      - id
                      - uniqueName
                      - parentName
                    type: object
                    title: Task Definition Summary
                    properties:
                      id:
                        description: System-generated unique ID of the TaskDefinition
                        type: string
                        example: 2c91808475b4334b0175e1dff64b63c5
                      uniqueName:
                        description: Name of the TaskDefinition
                        type: string
                        example: Cloud Account Aggregation
                      description:
                        nullable: true
                        description: Description of the TaskDefinition
                        type: string
                        example: Aggregates from the specified application.
                      parentName:
                        description: Name of the parent of the TaskDefinition
                        type: string
                        example: Cloud Account Aggregation
                      executor:
                        description: Executor of the TaskDefinition
                        nullable: true
                        type: string
                        example: sailpoint.task.ServiceTaskExecutor
                      arguments:
                        description: Formal parameters of the TaskDefinition, without values
                        type: object
                        additionalProperties: true
                        example:
                          mantisExecutor: com.sailpoint.mantis.sources.task.AccountAggregationTask
                          eventClassesCsv: sailpoint.thunderbolt.events.AggregationEvents
                          serviceClass: sailpoint.thunderbolt.service.AggregationService
                          serviceMethod: accountAggregationTask
                  completionStatus:
                    description: Completion status of the aggregation
                    type: string
                    nullable: true
                    enum:
                      - SUCCESS
                      - WARNING
                      - ERROR
                      - TERMINATED
                      - TEMPERROR
                      - null
                    example: SUCCESS
                  messages:
                    description: Messages associated with the aggregation
                    type: array
                    items:
                      description: TaskStatus Message
                      required:
                        - key
                        - localizedText
                        - type
                        - parameters
                      type: object
                      title: Task Status Message
                      properties:
                        type:
                          description: Type of the message
                          type: string
                          enum:
                            - INFO
                            - WARN
                            - ERROR
                          example: INFO
                        localizedText:
                          description: Localized form of the message
                          type: object
                          title: Localized Message
                          nullable: true
                          required:
                            - locale
                            - message
                          properties:
                            locale:
                              description: Message locale
                              type: string
                              example: An error has occurred!
                            message:
                              description: Message text
                              type: string
                              example: Error has occurred!
                        key:
                          description: Key of the message
                          type: string
                          example: akey
                        parameters:
                          description: Message parameters for internationalization
                          nullable: true
                          type: array
                          items:
                            anyOf:
                              - type: object
                              - type: string
                          example:
                            - name: value
                  returns:
                    description: Return values associated with the aggregation
                    type: array
                    items:
                      description: Task return details
                      required:
                        - name
                        - attributeName
                      type: object
                      title: Task Return Details
                      properties:
                        name:
                          description: Display name of the TaskReturnDetails
                          type: string
                          example: label
                        attributeName:
                          description: Attribute the TaskReturnDetails is for
                          type: string
                          example: identityCount
                  attributes:
                    description: Attributes of the aggregation
                    type: object
                    additionalProperties: true
                    example:
                      creatorRequestId: ed5a371bbaba411fb8f1f6970b842334
                  progress:
                    description: Current progress of aggregation
                    nullable: true
                    type: string
                    example: Started
                  percentComplete:
                    description: Current percentage completion of aggregation
                    type: integer
                    format: int32
                    example: 100
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
