## OpenAPI

```yaml GET /machine-identities/v1/lifecycle-actions/{requestId}
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
  /machine-identities/v1/lifecycle-actions/{requestId}:
    get:
      description: |
        Returns one lifecycle request snapshot by `requestId`. Used for request-level inspection,
        including cancel acceptance and subsequent status changes.

        The original requester is always allowed to read their request. Otherwise, callers must have
        the `idn:machine-identity-lifecycle-action:manage` scope **and** role-context access to the target
        machine identity (organization admin, source admin, scoped source sub-admin, or effective owner).

        **403 Forbidden**

        - `FORBIDDEN.lifecycle-request-access-denied` - caller is not the submitter and lacks both the
          `idn:machine-identity-lifecycle-action:manage` scope and target role-context (response includes `requestId` as a parameter).
        - `FORBIDDEN.unsupported-type` - the persisted lifecycle row is not scoped to `AI_AGENT`
          (`targetType` on read-by-request-id paths).

        **404 Not Found**

        - `NOT_FOUND.detailed` - unknown `requestId`, or persisted `targetType` does not match the
          target machine identity's subtype-to-resource-type mapping.
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
          example: true
          schema:
            type: string
            default: true
          required: true
      responses:
        '200':
          description: Lifecycle action request snapshot.
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
                    example: tenant-001
                  statusType:
                    type: string
                    description: Generic request status type discriminator.
                    example: LIFECYCLE_ACTIONS_REQUEST
                  requestedBy:
                    type: string
                    description: Identity id of the principal that submitted the request.
                    example: 2c9180858082150f0180893dbaf44201
                  targetType:
                    type: string
                    description: Resource type targeted by the lifecycle request.
                    enum:
                      - AI_AGENT
                    example: AI_AGENT
                  targetId:
                    type: string
                    format: uuid
                    description: Internal machine identity UUID for the lifecycle target.
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
                    description: Temporal workflow identifier for the lifecycle request.
                    example: sp:resource-lifecycle:AI_AGENT:a1b2c3d4-e5f6-7890-abcd-ef1234567890
                  completed:
                    type: boolean
                    description: Indicates whether the lifecycle request has reached a terminal state.
                    default: false
                    example: false
                  details:
                    type: object
                    title: Lifecycle Action Request Details
                    description: Nested lifecycle execution context stored on the lifecycle request.
                    properties:
                      status:
                        type: string
                        description: Detailed lifecycle request status stored on the lifecycle action request.
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
                        description: Append-only comment thread for the lifecycle request.
                        items:
                          type: object
                          title: Lifecycle Comment
                          properties:
                            commentId:
                              type: string
                              description: Server-assigned comment identifier.
                              example: cmt-001
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
                        description: Workflow phase where the request failed, when applicable.
                        example: WORKFLOW_START
                      failureReason:
                        type: string
                        description: Failure reason for the lifecycle request, when applicable.
                        example: Operation can't be performed on AgentAlias when Agent is in Not Prepared state.
                      resource:
                        type: object
                        title: Lifecycle Resource Summary
                        description: Cached resource context for the lifecycle target.
                        properties:
                          id:
                            type: string
                            format: uuid
                            description: Internal machine identity UUID for the lifecycle target.
                            example: 1c9c8e1f-2f5f-4f77-9f7e-5d37e4fb3ef0
                          resourceId:
                            type: string
                            description: Connector resource id for the lifecycle target.
                            example: aws:bedrock:agent-42
                          name:
                            type: string
                            description: Display name of the lifecycle target.
                            example: Support Agent
                          sourceId:
                            type: string
                            description: Source identifier for the lifecycle target.
                            example: 6d28b7c1-620c-49c6-b6d5-cbf81eb4b5fa
                          sourceName:
                            type: string
                            description: Source name for the lifecycle target.
                            example: AWS Bedrock
                          subtype:
                            type: string
                            description: Machine identity subtype for the lifecycle target.
                            example: AI_AGENT
                      resourceOwners:
                        type: array
                        description: Cached resource owners for the lifecycle target.
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
                        description: Approvals identifier when the request was submitted.
                        example: a0220198-4b01-444b-8ac3-7a8a147a3791
                      approvalSettingsId:
                        type: string
                        description: Approval settings identifier used for the request.
                        example: approval-settings-001
                      provisioning:
                        type: object
                        title: Lifecycle Provisioning
                        description: Provisioning execution window for the lifecycle request.
                        properties:
                          status:
                            type: string
                            description: Provisioning execution status for the downstream workflow window.
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
