## OpenAPI

```yaml GET /workflows/v1/{id}
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
  /workflows/v1/{id}:
    get:
      description: Get a single workflow by id.
      operationId: getWorkflowV1
      security:
        - userAuth:
            - sp:workflow:read
            - sp:workflow:manage
      parameters:
        - name: id
          in: path
          description: Id of the workflow
          required: true
          x-sailpoint-resource-operation-id: listWorkflowsV1
          style: simple
          explode: false
          schema:
            type: string
            example: c17bea3a-574d-453c-9e04-4365fbf5af0b
      responses:
        '200':
          description: The workflow object
          content:
            application/json:
              schema:
                allOf:
                  - type: object
                    properties:
                      id:
                        type: string
                        description: Workflow ID. This is a UUID generated upon creation.
                        example: d201c5e9-d37b-4aff-af14-66414f39d569
                      executionCount:
                        type: integer
                        format: int32
                        description: The number of times this workflow has been executed.
                        example: 2
                      failureCount:
                        type: integer
                        format: int32
                        description: The number of times this workflow has failed during execution.
                        example: 0
                      created:
                        type: string
                        format: date-time
                        description: The date and time the workflow was created.
                        example: '2022-01-10T16:06:16.636381447Z'
                      modified:
                        type: string
                        format: date-time
                        description: The date and time the workflow was modified.
                        example: '2023-12-05T15:18:27.699132301Z'
                      modifiedBy:
                        type: object
                        properties:
                          type:
                            type: string
                            enum:
                              - IDENTITY
                            example: IDENTITY
                          id:
                            type: string
                            description: Identity ID
                            example: 2c9180a46faadee4016fb4e018c20639
                          name:
                            type: string
                            description: Human-readable display name of identity.
                            example: Thomas Edison
                        title: workflowmodifiedby
                      creator:
                        type: object
                        description: Workflow creator's identity.
                        properties:
                          type:
                            type: string
                            description: Workflow creator's DTO type.
                            enum:
                              - IDENTITY
                            example: IDENTITY
                          id:
                            type: string
                            description: Workflow creator's identity ID.
                            example: 2c7180a46faadee4016fb4e018c20642
                          name:
                            type: string
                            description: Workflow creator's display name.
                            example: Michael Michaels
                  - type: object
                    properties:
                      name:
                        type: string
                        description: The name of the workflow
                        example: Send Email
                      owner:
                        type: object
                        description: The identity that owns the workflow.  The owner's permissions in IDN will determine what actions the workflow is allowed to perform.  Ownership can be changed by updating the owner in a PUT or PATCH request.
                        properties:
                          type:
                            type: string
                            enum:
                              - IDENTITY
                            example: IDENTITY
                            description: The type of object that is referenced
                          id:
                            type: string
                            description: The unique ID of the object
                            example: 2c91808568c529c60168cca6f90c1313
                          name:
                            type: string
                            description: The name of the object
                            example: William Wilson
                      description:
                        type: string
                        description: Description of what the workflow accomplishes
                        example: Send an email to the identity who's attributes changed.
                      definition:
                        type: object
                        description: The map of steps that the workflow will execute.
                        properties:
                          start:
                            type: string
                            description: The name of the starting step.
                            example: Send Email Test
                          steps:
                            type: object
                            description: One or more step objects that comprise this workflow.  Please see the Workflow documentation to see the JSON schema for each step type.
                            additionalProperties: true
                            example:
                              Send Email:
                                actionId: sp:send-email
                                attributes:
                                  body: This is a test
                                  from: sailpoint@sailpoint.com
                                  recipientId.$: $.identity.id
                                  subject: test
                                nextStep: success
                                selectResult: null
                                type: ACTION
                              success:
                                type: success
                        title: workflowdefinition
                      enabled:
                        type: boolean
                        description: Enable or disable the workflow.  Workflows cannot be created in an enabled state.
                        default: false
                        example: false
                      trigger:
                        type: object
                        description: The trigger that starts the workflow
                        required:
                          - type
                          - attributes
                        properties:
                          type:
                            type: string
                            enum:
                              - EVENT
                              - EXTERNAL
                              - SCHEDULED
                              - ''
                            example: EVENT
                            description: The trigger type
                          displayName:
                            type: string
                            nullable: true
                            description: The trigger display name
                          attributes:
                            nullable: true
                            anyOf:
                              - title: Event Trigger Attributes
                                type: object
                                description: Attributes related to an IdentityNow ETS event
                                additionalProperties: false
                                required:
                                  - id
                                properties:
                                  id:
                                    type: string
                                    description: The unique ID of the trigger
                                    example: idn:identity-attributes-changed
                                    nullable: true
                                  filter.$:
                                    type: string
                                    description: JSON path expression that will limit which events the trigger will fire on
                                    example: $.changes[?(@.attribute == 'manager')]
                                    nullable: true
                                  description:
                                    type: string
                                    description: Description of the event trigger
                                    example: Triggered when an identity's manager attribute changes
                                    nullable: true
                                  attributeToFilter:
                                    type: string
                                    description: The attribute to filter on
                                    example: LifecycleState
                                    nullable: true
                                  formDefinitionId:
                                    type: string
                                    description: Form definition's unique identifier.
                                    example: Admin_Access_Request_Form
                                    nullable: true
                              - title: External Trigger Attributes
                                type: object
                                description: Attributes related to an external trigger
                                additionalProperties: false
                                properties:
                                  name:
                                    type: string
                                    description: A unique name for the external trigger
                                    example: search-and-notify
                                    nullable: true
                                  description:
                                    type: string
                                    description: Additional context about the external trigger
                                    example: Run a search and notify the results
                                    nullable: true
                                  clientId:
                                    type: string
                                    description: OAuth Client ID to authenticate with this trigger
                                    example: 87e239b2-b85b-4bde-b9a7-55bf304ddcdc
                                    nullable: true
                                  url:
                                    type: string
                                    description: URL to invoke this workflow
                                    example: https://example-tenant.api.identitynow.com/workflows/v1/execute/external/c79e0079-562c-4df5-aa73-60a9e25c916d
                                    nullable: true
                              - title: Scheduled Trigger Attributes
                                type: object
                                description: Attributes related to a scheduled trigger
                                additionalProperties: false
                                required:
                                  - frequency
                                properties:
                                  frequency:
                                    type: string
                                    description: Frequency of execution
                                    example: daily
                                    enum:
                                      - daily
                                      - weekly
                                      - monthly
                                      - yearly
                                      - cronSchedule
                                      - null
                                    nullable: true
                                  timeZone:
                                    type: string
                                    description: Time zone identifier
                                    example: America/Chicago
                                    nullable: true
                                  cronString:
                                    type: string
                                    description: A valid CRON expression
                                    externalDocs:
                                      description: CRON expression editor
                                      url: https://crontab.guru/
                                    example: 0 9 * * 1
                                    nullable: true
                                  weeklyDays:
                                    type: array
                                    items:
                                      type: string
                                    example: Monday
                                    description: Scheduled days of the week for execution
                                    nullable: true
                                  weeklyTimes:
                                    type: array
                                    items:
                                      type: string
                                    example: Monday
                                    description: Scheduled execution times
                                    nullable: true
                                  yearlyTimes:
                                    type: array
                                    items:
                                      type: string
                                    example: '1969-12-31T09:00:00.000Z'
                                    description: Scheduled execution times
                                    nullable: true
                            description: Workflow Trigger Attributes.
                        title: workflowtrigger
                    title: workflowbody
                title: workflow
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
