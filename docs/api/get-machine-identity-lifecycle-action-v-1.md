## OpenAPI

```yaml GET /machine-identities/v1/lifecycle-actions/{requestId}
openapi: 3.0.1
info:
  title: SailPoint Identity Security API
  description: Use these APIs to interact with the SailPoint Identity Security platform to achieve repeatable, automated processes with greater scalability. We encourage you to join the SailPoint Developer Community forum at https://developer.sailpoint.com/discuss to connect with other developers using our APIs.
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
  /machine-identities/v1/lifecycle-actions/{requestId}:
    get:
      description: |
        Returns a single lifecycle action request, including its current status, approval details, and
        provisioning progress. Use it to follow a request after you submit or cancel it.

        You can always view requests that you submitted. To view a request that someone else submitted, you
        need the `idn:machine-identity:lifecycle-action` right **and** admin or owner access to the machine
        identity. Admin or owner access means you're an org admin, a source admin, a source sub-admin for the
        machine identity's source, or the machine identity's owner.
      operationId: getMachineIdentityLifecycleActionV1
      security:
        - userAuth:
            - idn:mis-identity:manage
      parameters:
        - in: path
          name: requestId
          schema:
            type: string
            format: uuid
          required: true
          x-sailpoint-resource-operation-id: listMachineIdentityLifecycleActionsV1
          description: Lifecycle request identifier.
          example: a1b2c3d4-e5f6-7890-abcd-ef1234567890
        - name: X-SailPoint-Experimental
          in: header
          description: Use this header to enable this experimental API.
          example: 'true'
          schema:
            type: string
            default: 'true'
          required: true
      responses:
        '200':
          description: The lifecycle action request.
          content:
            application/json:
              schema:
                type: object
                title: Lifecycle Action Request
                properties:
                  id:
                    type: string
                    format: uuid
                    description: Lifecycle request identifier.
                    example: a1b2c3d4-e5f6-7890-abcd-ef1234567890
                  tenantId:
                    type: string
                    description: Tenant identifier for the lifecycle request.
                    example: 3b6f2a1e-8c4d-4e9a-9f2b-7d5c1e0a6b38
                  statusType:
                    type: string
                    description: Type of request. Always `LIFECYCLE_ACTIONS_REQUEST` for lifecycle action requests.
                    example: LIFECYCLE_ACTIONS_REQUEST
                  requestedBy:
                    x-sailpoint-lint-ignore:
                      schema-references-must-use-id-names: The field is already released as requestedBy. Renaming it would break existing callers.
                    type: string
                    description: ID of the identity that submitted the request.
                    example: 2c9180858082150f0180893dbaf44201
                  targetType:
                    type: string
                    description: Type of machine identity the request applies to.
                    enum:
                      - AI_AGENT
                    example: AI_AGENT
                  targetId:
                    type: string
                    format: uuid
                    description: ID of the machine identity the request applies to.
                    example: 1c9c8e1f-2f5f-4f77-9f7e-5d37e4fb3ef0
                  operationType:
                    type: string
                    description: Lifecycle action requested against a machine identity.
                    enum:
                      - DEACTIVATE
                      - ACTIVATE
                    example: DEACTIVATE
                    title: lifecycleaction
                  workflowId:
                    type: string
                    description: Identifier of the workflow that processes the request.
                    example: sp:resource-lifecycle:AI_AGENT:a1b2c3d4-e5f6-7890-abcd-ef1234567890
                  completed:
                    type: boolean
                    description: Indicates whether the request has finished. A request is finished when its status is `COMPLETED`, `REJECTED`, `FAILED`, or `CANCELED`.
                    default: false
                    example: false
                  details:
                    type: object
                    title: Lifecycle Action Request Details
                    description: Details of the lifecycle request, including its status, approval, comments, and provisioning.
                    properties:
                      status:
                        type: string
                        description: Status of the lifecycle action request.
                        enum:
                          - RECEIVED
                          - PENDING_APPROVAL
                          - APPROVED
                          - REJECTED
                          - PROVISIONING
                          - COMPLETED
                          - FAILED
                          - CANCELING
                          - CANCELED
                        example: RECEIVED
                        title: lifecyclestatus
                      action:
                        type: string
                        description: Lifecycle action requested against a machine identity.
                        enum:
                          - DEACTIVATE
                          - ACTIVATE
                        example: DEACTIVATE
                        title: lifecycleaction
                      approver:
                        type: object
                        title: Lifecycle Approver Reference
                        properties:
                          type:
                            type: string
                            description: Approver reference type.
                            example: IDENTITY
                          id:
                            type: string
                            description: Identifier of the approver.
                            example: 2c9180858082150f0180893dbaf44201
                          name:
                            type: string
                            description: Display name of the approver.
                            example: Alex Approver
                      approvedAt:
                        type: string
                        format: date-time
                        description: Time when the request was approved (ISO-8601).
                        example: '2026-05-26T19:02:00Z'
                      canceller:
                        type: object
                        title: Lifecycle Requester Reference
                        properties:
                          type:
                            type: string
                            description: Requester reference type.
                            example: IDENTITY
                          id:
                            type: string
                            description: Identifier of the requester.
                            example: 2c9180858082150f0180893dbaf44201
                          name:
                            type: string
                            description: Display name of the requester.
                            example: Pat Manager
                      canceledAt:
                        type: string
                        format: date-time
                        description: Time when the request was canceled (ISO-8601).
                        example: '2026-05-26T19:03:00Z'
                      cancelComment:
                        type: string
                        description: Comment provided when the request was canceled.
                        example: Cancelling - will resubmit after maintenance window
                      comments:
                        type: array
                        description: Comments on the lifecycle request, in the order they were added.
                        items:
                          type: object
                          title: Lifecycle Comment
                          properties:
                            commentId:
                              type: string
                              description: Server-assigned comment identifier.
                              example: 9f3c2b7e-5a1d-4c8e-b6f0-2d4a7e9c1b53
                            author:
                              type: object
                              title: Lifecycle Comment Author Reference
                              properties:
                                type:
                                  type: string
                                  description: Author category for the comment.
                                  enum:
                                    - IDENTITY
                                    - WORKGROUP
                                    - API_TOKEN
                                    - SYSTEM
                                  example: IDENTITY
                                id:
                                  type: string
                                  description: Identifier of the comment author.
                                  example: 2c9180858082150f0180893dbaf44201
                                name:
                                  type: string
                                  description: Display name of the comment author.
                                  example: Pat Manager
                            comment:
                              type: string
                              description: Free-text comment body.
                              example: Suspending agent until security review completes
                            createdAt:
                              type: string
                              format: date-time
                              description: Time when the comment was created (ISO-8601).
                              example: '2026-05-26T19:00:00Z'
                      failurePhase:
                        type: string
                        description: Stage where the request failed, when applicable.
                        example: WORKFLOW_START
                      failureReason:
                        type: string
                        description: Failure reason for the lifecycle request, when applicable.
                        example: Operation can't be performed on AgentAlias when Agent is in Not Prepared state.
                      resource:
                        type: object
                        title: Lifecycle Resource Summary
                        description: Details of the machine identity at the time the request was submitted.
                        properties:
                          id:
                            type: string
                            format: uuid
                            description: ID of the machine identity.
                            example: 1c9c8e1f-2f5f-4f77-9f7e-5d37e4fb3ef0
                          resourceId:
                            type: string
                            description: ID of the machine identity in its source system.
                            example: aws:bedrock:agent-42
                          name:
                            type: string
                            description: Name of the machine identity.
                            example: Support Agent
                          sourceId:
                            type: string
                            description: ID of the source the machine identity belongs to.
                            example: 6d28b7c1-620c-49c6-b6d5-cbf81eb4b5fa
                          sourceName:
                            type: string
                            description: Name of the source the machine identity belongs to.
                            example: AWS Bedrock
                          subtype:
                            type: string
                            description: Type of machine identity.
                            example: AI_AGENT
                      resourceOwners:
                        type: array
                        description: Owners of the machine identity at the time the request was submitted.
                        items:
                          type: object
                          title: Lifecycle Owner Reference
                          properties:
                            type:
                              type: string
                              description: Owner reference type.
                              enum:
                                - IDENTITY
                                - WORKGROUP
                              example: IDENTITY
                            id:
                              type: string
                              description: Identifier of the owner.
                              example: 2c9180858082150f0180893dbaf44201
                            name:
                              type: string
                              description: Display name of the owner.
                              example: Pat Manager
                      sourceOwner:
                        type: object
                        title: Lifecycle Owner Reference
                        properties:
                          type:
                            type: string
                            description: Owner reference type.
                            enum:
                              - IDENTITY
                              - WORKGROUP
                            example: IDENTITY
                          id:
                            type: string
                            description: Identifier of the owner.
                            example: 2c9180858082150f0180893dbaf44201
                          name:
                            type: string
                            description: Display name of the owner.
                            example: Pat Manager
                      requester:
                        type: object
                        title: Lifecycle Requester Reference
                        properties:
                          type:
                            type: string
                            description: Requester reference type.
                            example: IDENTITY
                          id:
                            type: string
                            description: Identifier of the requester.
                            example: 2c9180858082150f0180893dbaf44201
                          name:
                            type: string
                            description: Display name of the requester.
                            example: Pat Manager
                      approvalRequestId:
                        type: string
                        description: ID of the approval request created for this lifecycle request.
                        example: a0220198-4b01-444b-8ac3-7a8a147a3791
                      approvalSettingsId:
                        type: string
                        description: ID of the approval settings used for the request.
                        example: 6d28b7c1-620c-49c6-b6d5-cbf81eb4b5fa_aws:bedrock:agent-42
                      provisioning:
                        type: object
                        title: Lifecycle Provisioning
                        description: Provisioning status for the lifecycle request, with when provisioning started and ended.
                        properties:
                          status:
                            type: string
                            description: Status of provisioning the change to the machine identity's source.
                            enum:
                              - NOT_STARTED
                              - IN_PROGRESS
                              - COMPLETED
                              - FAILED
                            example: NOT_STARTED
                            title: lifecycleprovisioningstatus
                          started:
                            type: string
                            format: date-time
                            description: Time when provisioning started (ISO-8601).
                            example: '2026-05-26T19:05:00Z'
                          ended:
                            type: string
                            format: date-time
                            description: Time when provisioning ended (ISO-8601).
                            example: '2026-05-26T19:10:00Z'
                  created:
                    type: string
                    format: date-time
                    description: Time when the lifecycle request was created (ISO-8601).
                    example: '2026-05-26T19:00:00Z'
                  modified:
                    type: string
                    format: date-time
                    description: Time when the lifecycle request was last modified (ISO-8601).
                    example: '2026-05-26T19:05:00Z'
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

        Personal access tokens are associated with a user in SailPoint Identity Security and relies on the user's [user level](https://documentation.sailpoint.com/saas/help/common/users/index.html) (ex. Admin, Helpdesk, etc.) to determine a base level of access.

        See [SailPoint Identity Security REST API Authentication](https://developer.sailpoint.com/docs/api/authentication/) for more information.
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

        Client credentials refers to tokens that are not associated with a user in SailPoint Identity Security.

        See [SailPoint Identity Security REST API Authentication](https://developer.sailpoint.com/docs/api/authentication/) for more information.
      flows:
        clientCredentials:
          tokenUrl: https://example-tenant.api.identitynow.com/oauth/token
          scopes:
            sp:scopes:default: default scope
            sp:scopes:all: access to all scopes
```
