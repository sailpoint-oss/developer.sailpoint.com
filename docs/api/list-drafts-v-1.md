## OpenAPI

```yaml GET /configuration-hub/v1/drafts
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
  /configuration-hub/v1/drafts:
    get:
      description: This API gets a list of existing drafts for the current tenant.
      operationId: listDraftsV1
      security:
        - userAuth:
            - sp:config-draft:read
            - sp:config-draft:manage
      parameters:
        - in: query
          name: filters
          schema:
            type: string
          description: |-
            Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)

            Filtering is supported for the following fields and operators:

            **status**: *eq*

            **approvalStatus**: *eq*
          example: status eq "COMPLETE"
          required: false
      responses:
        '200':
          description: List of existing drafts.
          content:
            application/json:
              schema:
                type: array
                items:
                  type: object
                  properties:
                    jobId:
                      type: string
                      description: Unique id assigned to this job.
                      example: 07659d7d-2cce-47c0-9e49-185787ee565a
                    status:
                      type: string
                      description: Status of the job.
                      enum:
                        - NOT_STARTED
                        - IN_PROGRESS
                        - COMPLETE
                        - CANCELLED
                        - FAILED
                      example: COMPLETE
                    type:
                      type: string
                      description: Type of the job, will always be CREATE_DRAFT for this type of job.
                      enum:
                        - CREATE_DRAFT
                      example: CREATE_DRAFT
                    message:
                      type: string
                      description: Message providing information about the outcome of the draft process.
                      example: Draft creation message
                    requesterName:
                      type: string
                      description: The name of user that that initiated the draft process.
                      example: requester.name
                    fileExists:
                      type: boolean
                      default: true
                      description: Whether or not a file was generated for this draft.
                      example: true
                    created:
                      type: string
                      format: date-time
                      description: The time the job was started.
                      example: '2021-05-11T22:23:16Z'
                    modified:
                      type: string
                      format: date-time
                      description: The time of the last update to the job.
                      example: '2021-05-11T22:23:16Z'
                    completed:
                      type: string
                      format: date-time
                      description: The time the job was completed.
                      example: '2021-05-11T22:23:16Z'
                    name:
                      type: string
                      description: Name of the draft.
                      example: Draft name
                    sourceTenant:
                      type: string
                      description: Tenant owner of the backup from which the draft was generated.
                      example: source-tenant
                    sourceBackupId:
                      type: string
                      description: Id of the backup from which the draft was generated.
                      example: 549bf881-1ac4-4a64-9acf-6014e8a3a887
                    sourceBackupName:
                      type: string
                      description: Name of the backup from which the draft was generated.
                      example: Source backup name
                    mode:
                      type: string
                      description: |-
                        Denotes the origin of the source backup from which the draft was generated.
                        - RESTORE - Same tenant.
                        - PROMOTE - Different tenant.
                        - UPLOAD - Uploaded configuration.
                      enum:
                        - RESTORE
                        - PROMOTE
                        - UPLOAD
                      example: RESTORE
                    approvalStatus:
                      type: string
                      description: Approval status of the draft used to determine whether or not the draft can be deployed.
                      enum:
                        - DEFAULT
                        - PENDING_APPROVAL
                        - APPROVED
                        - DENIED
                      example: APPROVED
                    approvalComment:
                      type: array
                      description: List of comments that have been exchanged between an approval requester and an approver.
                      items:
                        type: object
                        title: Approval Comment
                        required:
                          - comment
                          - timestamp
                          - user
                          - id
                          - changedToStatus
                        properties:
                          comment:
                            type: string
                            description: Comment provided either by the approval requester or the approver.
                            example: Approval comment
                          timestamp:
                            type: string
                            format: date-time
                            description: The time when this comment was provided.
                            example: '2021-05-11T22:23:16Z'
                          user:
                            type: string
                            description: Name of the user that provided this comment.
                            example: user.name
                          id:
                            type: string
                            description: Id of the user that provided this comment.
                            example: 549bf881-1ac4-4a64-9acf-6014e8a3a887
                          changedToStatus:
                            type: string
                            description: Status transition of the draft.
                            enum:
                              - PENDING_APPROVAL
                              - APPROVED
                              - REJECTED
                            example: PENDING_APPROVAL
                  title: draftresponse
              example:
                - jobId: 07659d7d-2cce-47c0-9e49-185787ee565a
                  status: COMPLETE
                  type: CREATE_DRAFT
                  message: Draft creation message
                  requesterName: Requester Name
                  fileExists: true
                  created: '2024-08-16T14:16:58.389Z'
                  completed: '2024-08-16T14:17:12.355Z'
                  name: Draft Name
                  sourceTenant: source-tenant
                  sourceBackupId: 9393e1f5-bed6-4fa8-80fb-6f86b19bd3d6
                  sourceBackupName: Source Backup Name
                  mode: RESTORE
                  approvalStatus: DEFAULT
                  approvalComment:
                    - comment: Approval comment
                      timestamp: '2024-08-26T19:32:46.384137Z'
                      user: User name
                      id: User id
                      changedToStatus: PENDING_FOR_APPROVAL
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
