## OpenAPI

```yaml GET /account-activities/v1
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
  /account-activities/v1:
    get:
      description: This gets a collection of account activities that satisfy the given query parameters.
      operationId: listAccountActivitiesV1
      security:
        - userAuth:
            - sp:scopes:all
      parameters:
        - in: query
          name: requested-for
          schema:
            type: string
          description: The identity that the activity was requested for. *me* indicates the current user. Mutually exclusive with *regarding-identity*.
          required: false
          example: 2c91808568c529c60168cca6f90c1313
        - in: query
          name: requested-by
          schema:
            type: string
          description: The identity that requested the activity. *me* indicates the current user. Mutually exclusive with *regarding-identity*.
          required: false
          example: 2c91808568c529c60168cca6f90c1313
        - in: query
          name: regarding-identity
          schema:
            type: string
          description: The specified identity will be either the requester or target of the account activity. *me* indicates the current user. Mutually exclusive with *requested-for* and *requested-by*.
          required: false
          example: 2c91808568c529c60168cca6f90c1313
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
          name: filters
          schema:
            type: string
          description: |-
            Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)

            Filtering is supported for the following fields and operators:

            **type**: *eq, in, ge, le, lt, ne, isnull, sw*

            **created**: *gt, lt, ge, le, eq, in, ne, isnull, sw*

            **modified**: *gt, lt, ge, le, eq, in, ne, isnull, sw*
          example: type eq "Identity Refresh"
          required: false
        - in: query
          name: sorters
          schema:
            type: string
            format: comma-separated
          description: |-
            Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)

            Sorting is supported for the following fields: **type, created, modified**
          example: created
          required: false
      responses:
        '200':
          description: List of account activities
          content:
            application/json:
              schema:
                type: array
                items:
                  type: object
                  title: Account Activity
                  properties:
                    id:
                      type: string
                      description: Id of the account activity
                      example: 2c9180835d2e5168015d32f890ca1581
                    name:
                      type: string
                      description: The name of the activity
                      example: 2c9180835d2e5168015d32f890ca1581
                    created:
                      description: When the activity was first created
                      type: string
                      format: date-time
                      example: '2017-07-11T18:45:37.098Z'
                    modified:
                      description: When the activity was last modified
                      type: string
                      format: date-time
                      example: '2018-06-25T20:22:28.104Z'
                      nullable: true
                    completed:
                      description: When the activity was completed
                      type: string
                      format: date-time
                      nullable: true
                      example: '2018-10-19T13:49:37.385Z'
                    completionStatus:
                      nullable: true
                      type: string
                      description: The status after completion.
                      enum:
                        - SUCCESS
                        - FAILURE
                        - INCOMPLETE
                        - PENDING
                        - null
                      example: SUCCESS
                      title: completionstatus
                    type:
                      nullable: true
                      type: string
                      example: appRequest
                      description: |
                        The type of action the activity performed.  Please see the following list of types.  This list may grow over time.

                        - CloudAutomated
                        - IdentityAttributeUpdate
                        - appRequest
                        - LifecycleStateChange
                        - AccountStateUpdate
                        - AccountAttributeUpdate
                        - CloudPasswordRequest
                        - Attribute Synchronization Refresh
                        - Certification
                        - Identity Refresh
                        - Lifecycle Change Refresh


                        [Learn more here](https://documentation.sailpoint.com/saas/help/search/searchable-fields.html#searching-account-activity-data).
                    requesterIdentitySummary:
                      type: object
                      title: Identity Summary
                      nullable: true
                      properties:
                        id:
                          type: string
                          description: ID of this identity summary
                          example: ff80818155fe8c080155fe8d925b0316
                        name:
                          type: string
                          description: Human-readable display name of identity
                          example: SailPoint Services
                        identityId:
                          type: string
                          description: ID of the identity that this summary represents
                          example: c15b9f5cca5a4e9599eaa0e64fa921bd
                        completed:
                          type: boolean
                          description: Indicates if all access items for this summary have been decided on
                          example: true
                          default: false
                    targetIdentitySummary:
                      type: object
                      title: Identity Summary
                      nullable: true
                      properties:
                        id:
                          type: string
                          description: ID of this identity summary
                          example: ff80818155fe8c080155fe8d925b0316
                        name:
                          type: string
                          description: Human-readable display name of identity
                          example: SailPoint Services
                        identityId:
                          type: string
                          description: ID of the identity that this summary represents
                          example: c15b9f5cca5a4e9599eaa0e64fa921bd
                        completed:
                          type: boolean
                          description: Indicates if all access items for this summary have been decided on
                          example: true
                          default: false
                    errors:
                      nullable: true
                      description: A list of error messages, if any, that were encountered.
                      type: array
                      items:
                        type: string
                      example:
                        - 'sailpoint.connector.ConnectorException: java.lang.InterruptedException: Timeout waiting for response to message 0 from client 57a4ab97-ab3f-4aef-9fe2-0eaf15c73d26 after 60 seconds.'
                    warnings:
                      nullable: true
                      description: A list of warning messages, if any, that were encountered.
                      type: array
                      items:
                        type: string
                      example:
                        - Some warning, another warning
                    items:
                      nullable: true
                      type: array
                      description: Individual actions performed as part of this account activity
                      items:
                        type: object
                        title: Account Activity Item
                        properties:
                          id:
                            type: string
                            description: Item id
                            example: 48c545831b264409a81befcabb0e3c5a
                          name:
                            type: string
                            description: Human-readable display name of item
                            example: 48c545831b264409a81befcabb0e3c5a
                          requested:
                            type: string
                            format: date-time
                            description: Date and time item was requested
                            example: '2017-07-11T18:45:37.098Z'
                          approvalStatus:
                            type: string
                            nullable: true
                            enum:
                              - FINISHED
                              - REJECTED
                              - RETURNED
                              - EXPIRED
                              - PENDING
                              - CANCELED
                              - null
                            example: PENDING
                            description: The state of an approval status
                            title: accountactivityapprovalstatus
                          provisioningStatus:
                            type: string
                            enum:
                              - PENDING
                              - FINISHED
                              - UNVERIFIABLE
                              - COMMITED
                              - FAILED
                              - RETRY
                            description: Provisioning state of an account activity item
                            example: PENDING
                            title: provisioningstate
                          requesterComment:
                            type: object
                            title: Comment
                            nullable: true
                            properties:
                              commenterId:
                                type: string
                                description: Id of the identity making the comment
                                example: 2c918084660f45d6016617daa9210584
                              commenterName:
                                type: string
                                description: Human-readable display name of the identity making the comment
                                example: Adam Kennedy
                              body:
                                type: string
                                description: Content of the comment
                                example: Et quam massa maximus vivamus nisi ut urna tincidunt metus elementum erat.
                              date:
                                type: string
                                format: date-time
                                description: Date and time comment was made
                                example: '2017-07-11T18:45:37.098Z'
                          reviewerIdentitySummary:
                            type: object
                            title: Identity Summary
                            nullable: true
                            properties:
                              id:
                                type: string
                                description: ID of this identity summary
                                example: ff80818155fe8c080155fe8d925b0316
                              name:
                                type: string
                                description: Human-readable display name of identity
                                example: SailPoint Services
                              identityId:
                                type: string
                                description: ID of the identity that this summary represents
                                example: c15b9f5cca5a4e9599eaa0e64fa921bd
                              completed:
                                type: boolean
                                description: Indicates if all access items for this summary have been decided on
                                example: true
                                default: false
                          reviewerComment:
                            type: object
                            title: Comment
                            nullable: true
                            properties:
                              commenterId:
                                type: string
                                description: Id of the identity making the comment
                                example: 2c918084660f45d6016617daa9210584
                              commenterName:
                                type: string
                                description: Human-readable display name of the identity making the comment
                                example: Adam Kennedy
                              body:
                                type: string
                                description: Content of the comment
                                example: Et quam massa maximus vivamus nisi ut urna tincidunt metus elementum erat.
                              date:
                                type: string
                                format: date-time
                                description: Date and time comment was made
                                example: '2017-07-11T18:45:37.098Z'
                          operation:
                            type: string
                            nullable: true
                            enum:
                              - ADD
                              - CREATE
                              - MODIFY
                              - DELETE
                              - DISABLE
                              - ENABLE
                              - UNLOCK
                              - LOCK
                              - REMOVE
                              - SET
                              - null
                            description: Represents an operation in an account activity item
                            example: ADD
                            title: accountactivityitemoperation
                          attribute:
                            type: string
                            description: Attribute to which account activity applies
                            nullable: true
                            example: detectedRoles
                          value:
                            type: string
                            description: Value of attribute
                            nullable: true
                            example: Treasury Analyst [AccessProfile-1529010191212]
                          nativeIdentity:
                            nullable: true
                            type: string
                            description: Native identity in the target system to which the account activity applies
                            example: Sandie.Camero
                          sourceId:
                            type: string
                            description: Id of Source to which account activity applies
                            example: 2c91808363ef85290164000587130c0c
                          accountRequestInfo:
                            type: object
                            title: Account Request Info
                            nullable: true
                            properties:
                              requestedObjectId:
                                type: string
                                description: Id of requested object
                                example: 2c91808563ef85690164001c31140c0c
                              requestedObjectName:
                                type: string
                                description: Human-readable name of requested object
                                example: Treasury Analyst
                              requestedObjectType:
                                type: string
                                enum:
                                  - ACCESS_PROFILE
                                  - ROLE
                                  - ENTITLEMENT
                                description: Currently supported requestable object types.
                                example: ACCESS_PROFILE
                                title: requestableobjecttype
                            description: If an account activity item is associated with an access request, captures details of that request.
                          clientMetadata:
                            nullable: true
                            type: object
                            additionalProperties:
                              type: string
                            description: Arbitrary key-value pairs, if any were included in the corresponding access request item
                            example:
                              customKey1: custom value 1
                              customKey2: custom value 2
                          removeDate:
                            nullable: true
                            type: string
                            description: The date the role or access profile or entitlement is no longer assigned to the specified identity.
                            format: date-time
                            example: '2020-07-11T00:00:00Z'
                    executionStatus:
                      type: string
                      description: The current state of execution.
                      enum:
                        - EXECUTING
                        - VERIFYING
                        - TERMINATED
                        - COMPLETED
                      example: COMPLETED
                      title: executionstatus
                    clientMetadata:
                      nullable: true
                      type: object
                      additionalProperties:
                        type: string
                      description: Arbitrary key-value pairs, if any were included in the corresponding access request
                      example:
                        customKey1: custom value 1
                        customKey2: custom value 2
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
