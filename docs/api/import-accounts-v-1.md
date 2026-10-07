## OpenAPI

```yaml POST /sources/v1/{id}/load-accounts
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
  /sources/v1/{id}/load-accounts:
    post:
      description: |-
        Starts an account aggregation on the specified source. 
        If the target source is a delimited file source, then the CSV file needs to be included in the request body.
        You will also need to set the Content-Type header to `multipart/form-data`.
      operationId: importAccountsV1
      security:
        - userAuth:
            - idn:sources:manage
        - applicationAuth:
            - idn:sources:manage
      parameters:
        - in: path
          name: id
          schema:
            type: string
          required: true
          x-sailpoint-resource-operation-id: listSourcesV1
          description: Source Id
          example: ef38f94347e94562b5bb8424a56397d8
      requestBody:
        content:
          multipart/form-data:
            schema:
              type: object
              properties:
                file:
                  type: string
                  format: binary
                  description: The CSV file containing the source accounts to aggregate.
                disableOptimization:
                  type: string
                  example: 'true'
                  description: Use this flag to reprocess every account whether or not the data has changed.
      responses:
        '202':
          description: Aggregate Accounts Task
          content:
            application/json:
              schema:
                type: object
                title: Load Accounts Task
                properties:
                  success:
                    type: boolean
                    description: The status of the result
                    default: 'true'
                    example: 'true'
                  task:
                    type: object
                    properties:
                      id:
                        description: System-generated unique ID of the task this taskStatus represents
                        type: string
                        example: ef38f94347e94562b5bb8424a56397d8
                      type:
                        description: Type of task this task represents
                        type: string
                        example: QUARTZ
                      name:
                        description: The name of the aggregation process
                        type: string
                        example: Cloud Account Aggregation
                      description:
                        description: The description of the task
                        type: string
                        example: Aggregate from the specified application
                      launcher:
                        description: The user who initiated the task
                        type: string
                        example: John Doe
                      created:
                        type: string
                        description: The Task creation date
                        format: date-time
                        example: '2020-09-07T42:14:00.364Z'
                      launched:
                        type: string
                        nullable: true
                        format: date-time
                        description: The task start date
                        example: '2020-09-07T42:14:00.521Z'
                      completed:
                        type: string
                        nullable: true
                        format: date-time
                        description: The task completion date
                        example: '2020-09-07T42:14:01.137Z'
                      completionStatus:
                        type: string
                        nullable: true
                        enum:
                          - SUCCESS
                          - WARNING
                          - ERROR
                          - TERMINATED
                          - TEMP_ERROR
                        description: Task completion status.
                        example: Success
                      parentName:
                        type: string
                        nullable: true
                        description: Name of the parent task if exists.
                        example: Audit Report
                      messages:
                        type: array
                        description: List of the messages dedicated to the report.  From task definition perspective here usually should be warnings or errors.
                        example: []
                        items:
                          type: object
                          properties:
                            type:
                              type: string
                              description: Type of the message.
                              enum:
                                - INFO
                                - WARN
                                - ERROR
                              example: WARN
                            error:
                              type: boolean
                              default: false
                              description: Flag whether message is an error.
                              example: false
                            warning:
                              type: boolean
                              default: false
                              description: Flag whether message is a warning.
                              example: true
                            key:
                              type: string
                              description: Message string identifier.
                              example: This aggregation failed because the currently running aggregation must complete before the next one can start.
                            localizedText:
                              type: string
                              description: Message context with the locale based language.
                              example: This aggregation failed because the currently running aggregation must complete before the next one can start.
                      progress:
                        type: string
                        nullable: true
                        description: Current task state.
                        example: Initializing...
                      attributes:
                        type: object
                        description: Extra attributes map(dictionary) for the task.
                        properties:
                          appId:
                            description: The id of the source
                            type: string
                            example: c31386cb18bb403cbb6df4c86294ff82
                          optimizedAggregation:
                            description: The indicator if the aggregation process was enabled/disabled for the aggregation job
                            type: string
                            example: enabled
                        additionalProperties:
                          type: object
                      returns:
                        type: array
                        description: Return values from the task
                        items:
                          type: object
                          properties:
                            displayLabel:
                              type: string
                              description: The display label of the return value
                              example: TASK_OUT_ACCOUNT_AGGREGATION_APPLICATIONS
                            attributeName:
                              type: string
                              description: The attribute name of the return value
                              example: applications
                          example:
                            - displayLabel: TASK_OUT_ACCOUNT_AGGREGATION_APPLICATIONS
                              attributeName: applications
                            - displayLabel: TASK_OUT_ACCOUNT_AGGREGATION_TOTAL
                              attributeName: total
                            - displayLabel: TASK_OUT_ACCOUNT_AGGREGATION_OPTIMIZED
                              attributeName: optimizedAggregation
                            - displayLabel: TASK_OUT_ACCOUNT_AGGREGATION_IGNORED
                              attributeName: ignored
                            - displayLabel: TASK_OUT_UNCHANGED_ACCOUNTS
                              attributeName: optimized
                            - displayLabel: TASK_OUT_ACCOUNT_AGGREGATION_CREATED
                              attributeName: created
                            - displayLabel: TASK_OUT_ACCOUNT_AGGREGATION_UPDATED
                              attributeName: updated
                            - displayLabel: TASK_OUT_ACCOUNT_AGGREGATION_DELETED
                              attributeName: deleted
                            - displayLabel: TASK_OUT_ACCOUNT_AGGREGATION_MANAGER_CHANGES
                              attributeName: managerChanges
                            - displayLabel: TASK_OUT_ACCOUNT_AGGREGATION_BUSINESS_ROLE_CHANGES
                              attributeName: detectedRoleChanges
                            - displayLabel: TASK_OUT_ACCOUNT_AGGREGATION_EXCEPTION_CHANGES
                              attributeName: exceptionChanges
                            - displayLabel: TASK_OUT_ACCOUNT_AGGREGATION_POLICIES
                              attributeName: policies
                            - displayLabel: TASK_OUT_ACCOUNT_AGGREGATION_POLICY_VIOLATIONS
                              attributeName: policyViolations
                            - displayLabel: TASK_OUT_ACCOUNT_AGGREGATION_POLICY_NOTIFICATIONS
                              attributeName: policyNotifications
                            - displayLabel: TASK_OUT_ACCOUNT_AGGREGATION_SCORES_CHANGED
                              attributeName: scoresChanged
                            - displayLabel: TASK_OUT_ACCOUNT_AGGREGATION_SNAPSHOTS_CREATED
                              attributeName: snapshotsCreated
                            - displayLabel: TASK_OUT_ACCOUNT_AGGREGATION_SCOPES_CREATED
                              attributeName: scopesCreated
                            - displayLabel: TASK_OUT_ACCOUNT_AGGREGATION_SCOPES_CORRELATED
                              attributeName: scopesCorrelated
                            - displayLabel: TASK_OUT_ACCOUNT_AGGREGATION_SCOPES_SELECTED
                              attributeName: scopesSelected
                            - displayLabel: TASK_OUT_ACCOUNT_AGGREGATION_SCOPES_DORMANT
                              attributeName: scopesDormant
                            - displayLabel: TASK_OUT_ACCOUNT_AGGREGATION_UNSCOPED_IDENTITIES
                              attributeName: unscopedIdentities
                            - displayLabel: TASK_OUT_ACCOUNT_AGGREGATION_CERTIFICATIONS_CREATED
                              attributeName: certificationsCreated
                            - displayLabel: TASK_OUT_ACCOUNT_AGGREGATION_CERTIFICATIONS_DELETED
                              attributeName: certificationsDeleted
                            - displayLabel: TASK_OUT_ACCOUNT_AGGREGATION_APPLICATIONS_GENERATED
                              attributeName: applicationsGenerated
                            - displayLabel: TASK_OUT_ACCOUNT_AGGREGATION_MANAGED_ATTRIBUTES_PROMOTED
                              attributeName: managedAttributesCreated
                            - displayLabel: TASK_OUT_ACCOUNT_AGGREGATION_MANAGED_ATTRIBUTES_PROMOTED_BY_APP
                              attributeName: managedAttributesCreatedByApplication
                            - displayLabel: TASK_OUT_ACCOUNT_AGGREGATION_IDENTITYENTITLEMENTS_CREATED
                              attributeName: identityEntitlementsCreated
                            - displayLabel: TASK_OUT_ACCOUNT_AGGREGATION_GROUPS_CREATED
                              attributeName: groupsCreated
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
