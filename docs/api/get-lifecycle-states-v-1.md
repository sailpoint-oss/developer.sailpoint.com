## OpenAPI

```yaml GET /identity-profiles/v1/{identity-profile-id}/lifecycle-states
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
  /identity-profiles/v1/{identity-profile-id}/lifecycle-states:
    get:
      description: 'Use this endpoint to list all lifecycle states by their associated identity profiles. '
      operationId: getLifecycleStatesV1
      security:
        - userAuth:
            - idn:identity-profile-lifecycle-state:read
        - applicationAuth:
            - idn:identity-profile-lifecycle-state:read
      parameters:
        - in: path
          name: identity-profile-id
          description: Identity profile ID.
          required: true
          x-sailpoint-resource-operation-id: listIdentityProfilesV1
          schema:
            type: string
          example: 2b838de9-db9b-abcf-e646-d4f274ad4238
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
          name: sorters
          required: false
          schema:
            type: string
            format: comma-separated
          example: created,modified
          description: |-
            Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)

            Sorting is supported for the following fields: **name, priority, created, modified**
      responses:
        '200':
          description: List of LifecycleState objects.
          content:
            application/json:
              schema:
                type: array
                items:
                  allOf:
                    - type: object
                      title: Base Common Dto
                      required:
                        - name
                      properties:
                        id:
                          description: System-generated unique ID of the Object
                          type: string
                          example: id12345
                          readOnly: true
                        name:
                          description: Name of the Object
                          type: string
                          example: aName
                          nullable: true
                        created:
                          description: Creation date of the Object
                          type: string
                          example: '2015-05-28T14:07:17Z'
                          format: date-time
                          readOnly: true
                        modified:
                          description: Last modification date of the Object
                          type: string
                          example: '2015-05-28T14:07:17Z'
                          format: date-time
                          readOnly: true
                    - type: object
                      required:
                        - technicalName
                      properties:
                        enabled:
                          type: boolean
                          default: false
                          example: true
                          description: Indicates whether the lifecycle state is enabled or disabled.
                        technicalName:
                          type: string
                          example: Technical Name
                          description: The lifecycle state's technical name. This is for internal use.
                        description:
                          type: string
                          nullable: true
                          example: Lifecycle description
                          description: Lifecycle state's description.
                        identityCount:
                          type: integer
                          format: int32
                          example: 42
                          readOnly: true
                          description: Number of identities that have the lifecycle state.
                        emailNotificationOption:
                          type: object
                          title: Email Notification Option
                          description: This is used for representing email configuration for a lifecycle state
                          properties:
                            notifyManagers:
                              type: boolean
                              default: false
                              example: true
                              description: If true, then the manager is notified of the lifecycle state change.
                            notifyAllAdmins:
                              type: boolean
                              default: false
                              example: true
                              description: If true, then all the admins are notified of the lifecycle state change.
                            notifySpecificUsers:
                              type: boolean
                              default: false
                              example: true
                              description: If true, then the users specified in "emailAddressList" below are notified of lifecycle state change.
                            emailAddressList:
                              type: array
                              example:
                                - test@test.com
                                - test2@test.com
                              items:
                                type: string
                              description: List of user email addresses. If "notifySpecificUsers" option is true, then these users are notified of lifecycle state change.
                        accountActions:
                          type: array
                          items:
                            type: object
                            title: Account Action
                            description: Object for specifying Actions to be performed on a specified list of sources' account.
                            properties:
                              action:
                                example: ENABLE
                                type: string
                                description: Describes if action will be enable, disable or delete.
                                enum:
                                  - ENABLE
                                  - DISABLE
                                  - DELETE
                              sourceIds:
                                type: array
                                items:
                                  type: string
                                uniqueItems: true
                                nullable: true
                                example:
                                  - 2c918084660f45d6016617daa9210584
                                  - 2c918084660f45d6016617daa9210500
                                description: A unique list of specific source IDs to apply the action to. The sources must have the ENABLE feature or flat file source. Required if allSources is not true. Must not be provided if allSources is true. Cannot be used together with excludeSourceIds See "/sources" endpoint for source features.
                              excludeSourceIds:
                                type: array
                                items:
                                  type: string
                                uniqueItems: true
                                nullable: true
                                example:
                                  - 3b551ccf5566478b9b77f37de25303aa
                                description: A list of source IDs to exclude from the action. Cannot be used together with sourceIds.
                              allSources:
                                type: boolean
                                default: false
                                example: true
                                description: If true, the action applies to all available sources. If true, sourceIds must not be provided. If false or not set, sourceIds is required.
                        accessProfileIds:
                          type: array
                          items:
                            type: string
                          uniqueItems: true
                          example:
                            - 2c918084660f45d6016617daa9210584
                            - 2c918084660f45d6016617daa9210500
                          description: List of unique access-profile IDs that are associated with the lifecycle state.
                        identityState:
                          type: string
                          nullable: true
                          enum:
                            - ACTIVE
                            - INACTIVE_SHORT_TERM
                            - INACTIVE_LONG_TERM
                          description: The lifecycle state's associated identity state. This field is generally 'null'.
                          example: INACTIVE_LONG_TERM
                        accessActionConfiguration:
                          type: object
                          title: Access Action Configuration
                          description: This is used for access configuration for a lifecycle state
                          properties:
                            removeAllAccessEnabled:
                              type: boolean
                              default: false
                              example: true
                              description: If true, then all accesses are marked for removal.
                        priority:
                          type: integer
                          format: int32
                          nullable: true
                          example: 10
                          description: Used to control the order of lifecycle states when listing with `?sorters=priority`. Lower numbers appear first (ascending order). Out-of-the-box lifecycle states are assigned priorities in increments of 10.
                  title: lifecyclestate
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
