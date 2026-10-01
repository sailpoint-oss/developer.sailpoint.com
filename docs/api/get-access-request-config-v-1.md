## OpenAPI

```yaml GET /access-request-config/v1
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
  /access-request-config/v1:
    get:
      description: |-
        This endpoint returns the current access-request configuration.

        To manage approval configurations, use the [Put approval config](https://developer.sailpoint.com/docs/api/put-approvals-config-v-1/) endpoint.
      operationId: getAccessRequestConfigV1
      security:
        - userAuth:
            - idn:access-request-config:read
      responses:
        '200':
          description: Access Request Configuration Details.
          content:
            application/json:
              schema:
                type: object
                title: Access Request Config
                properties:
                  approvalsMustBeExternal:
                    type: boolean
                    description: If this is true, approvals must be processed by an external system. Also, if this is true, it blocks Request Center access requests and returns an error for any user who isn't an org admin.
                    default: false
                    example: true
                  autoApprovalEnabled:
                    type: boolean
                    description: |-
                      If this is true and the requester and reviewer are the same, the request is automatically approved.

                      This field has been moved to the approval configurations. Please use the [Put approval config](https://developer.sailpoint.com/docs/api/put-approvals-config-v-1/) endpoint instead.
                    default: false
                    example: true
                  reauthorizationEnabled:
                    type: boolean
                    description: If this is true, reauthorization will be enforced for appropriately configured access items. Enablement of this feature is currently in a limited state.
                    default: false
                    example: true
                  requestOnBehalfOfConfig:
                    description: Request On Behalf Of configuration.
                    type: object
                    title: Request On Behalf Of Config
                    properties:
                      allowRequestOnBehalfOfAnyoneByAnyone:
                        type: boolean
                        description: If this is true, anyone can request access for anyone.
                        default: false
                        example: true
                      allowRequestOnBehalfOfEmployeeByManager:
                        type: boolean
                        description: If this is true, a manager can request access for his or her direct reports.
                        default: false
                        example: true
                      allowRequestOnBehalfOfForMachineIdentity:
                        type: boolean
                        description: |
                          If this is true, anyone can request access on behalf of machine identities. Machine access request authorization is evaluated as follows: 1. If this flag is true, any requester is allowed. 2. Else if `allowRequestForMachineByOwner` is true, the requester must be an admin or a primary/secondary owner of every requested machine identity. 3. Else admins are still allowed; non-admins receive 403.
                        default: true
                        example: true
                      allowRequestForMachineByOwner:
                        type: boolean
                        description: |
                          When `allowRequestOnBehalfOfForMachineIdentity` is false and this flag is true, only admins and primary/secondary owners of the requested machine identities may submit machine access requests. Defaults to false (opt-in).
                        default: false
                        example: false
                  approvalReminderAndEscalationConfig:
                    description: |-
                      Approval reminder and escalation configuration. Modifying this object will override the generic-approvals service's reminderConfig and escalationConfig settings.

                      This field has been moved to the approval configurations. Please use the [Put approval config](https://developer.sailpoint.com/docs/api/put-approvals-config-v-1/) endpoint instead.
                    type: object
                    title: Approval Reminder And Escalation Config
                    properties:
                      daysUntilEscalation:
                        type: integer
                        description: Number of days to wait before the first reminder. If no reminders are configured, then this is the number of days to wait before escalation.
                        format: int32
                        example: 0
                        nullable: true
                      daysBetweenReminders:
                        type: integer
                        description: Number of days to wait between reminder notifications.
                        format: int32
                        example: 0
                        nullable: true
                      maxReminders:
                        type: integer
                        description: Maximum number of reminder notifications to send to the reviewer before approval escalation. The maximum allowed value is 20.
                        format: int32
                        minimum: 0
                        maximum: 20
                        example: 1
                        nullable: true
                      fallbackApproverRef:
                        type: object
                        title: Identity Reference With Name And Email
                        nullable: true
                        properties:
                          type:
                            type: string
                            description: The type can only be IDENTITY. This is read-only.
                            example: IDENTITY
                          id:
                            type: string
                            description: Identity ID.
                            example: 5168015d32f890ca15812c9180835d2e
                          name:
                            type: string
                            description: Identity's human-readable display name. This is read-only.
                            example: Alison Ferguso
                          email:
                            type: string
                            nullable: true
                            description: Identity's email address. This is read-only.
                            example: alison.ferguso@identitysoon.com
                  entitlementRequestConfig:
                    description: Entitlement request configuration.
                    type: object
                    title: Entitlement Request Config
                    properties:
                      accessRequestConfig:
                        type: object
                        title: Entitlement Access Request Config
                        properties:
                          approvalSchemes:
                            type: array
                            description: Ordered list of approval steps for the access request. Empty when no approval is required.
                            items:
                              type: object
                              title: Entitlement Approval Scheme
                              properties:
                                approverType:
                                  type: string
                                  enum:
                                    - ENTITLEMENT_OWNER
                                    - SOURCE_OWNER
                                    - MANAGER
                                    - GOVERNANCE_GROUP
                                    - WORKFLOW
                                  description: |-
                                    Describes the individual or group that is responsible for an approval step. Values are as follows.

                                    **ENTITLEMENT_OWNER**: Owner of the associated Entitlement

                                    **SOURCE_OWNER**: Owner of the associated Source

                                    **MANAGER**: Manager of the Identity for whom the request is being made

                                    **GOVERNANCE_GROUP**: A Governance Group, the ID of which is specified by the **approverId** field

                                    **WORKFLOW**: A Workflow, the ID of which is specified by the **approverId** field. A workflow approver has these requirements.

                                    - The Adaptive Approvals feature must be enabled for the tenant.
                                    - The workflow given in **approverId** must use the `idn:access-request-trigger` trigger.
                                    - `WORKFLOW` is exclusive of the other approver types. If you use it, it must be the only entry in **approvalSchemes**.
                                    - `WORKFLOW` is supported only in entitlement-level configuration. The source-level [Update source entitlement request configuration](https://developer.sailpoint.com/docs/api/update-source-entitlement-request-config-v-1) endpoint rejects it with a 400.
                                  example: GOVERNANCE_GROUP
                                approverId:
                                  type: string
                                  nullable: true
                                  description: Id of the specific approver, used only when approverType is GOVERNANCE_GROUP or WORKFLOW. For WORKFLOW this is the ID of the workflow to run.
                                  example: e3eab852-8315-467f-9de7-70eda97f63c8
                          requestCommentRequired:
                            type: boolean
                            description: If the requester must provide a comment during access request.
                            default: false
                            example: true
                          denialCommentRequired:
                            type: boolean
                            description: If the reviewer must provide a comment when denying the access request.
                            default: false
                            example: false
                          reauthorizationRequired:
                            type: boolean
                            description: Is Reauthorization Required
                            default: false
                            example: false
                          requireEndDate:
                            type: boolean
                            default: false
                            description: If true, then remove date or sunset date is required in access request of the entitlement.
                            example: true
                          maxPermittedAccessDuration:
                            nullable: true
                            type: object
                            description: The maximum duration for which the access is permitted.
                            properties:
                              value:
                                type: integer
                                format: int32
                                description: The numeric value of the duration.
                                example: 5
                              timeUnit:
                                type: string
                                description: The time unit for the duration.
                                enum:
                                  - HOURS
                                  - DAYS
                                  - WEEKS
                                  - MONTHS
                                example: DAYS
                          formDefinitionId:
                            type: string
                            nullable: true
                            description: The ID of the form definition used for the access request. If specified, the form is presented to the requester during the access request process.
                            example: 78258e80-e9e2-4e1a-a11f-ce0b7c62f25d
                      revocationRequestConfig:
                        type: object
                        title: Entitlement Revocation Request Config
                        properties:
                          approvalSchemes:
                            type: array
                            description: Ordered list of approval steps for the revocation request. Empty when no approval is required.
                            items:
                              type: object
                              title: Entitlement Approval Scheme
                              properties:
                                approverType:
                                  type: string
                                  enum:
                                    - ENTITLEMENT_OWNER
                                    - SOURCE_OWNER
                                    - MANAGER
                                    - GOVERNANCE_GROUP
                                    - WORKFLOW
                                  description: |-
                                    Describes the individual or group that is responsible for an approval step. Values are as follows.

                                    **ENTITLEMENT_OWNER**: Owner of the associated Entitlement

                                    **SOURCE_OWNER**: Owner of the associated Source

                                    **MANAGER**: Manager of the Identity for whom the request is being made

                                    **GOVERNANCE_GROUP**: A Governance Group, the ID of which is specified by the **approverId** field

                                    **WORKFLOW**: A Workflow, the ID of which is specified by the **approverId** field. A workflow approver has these requirements.

                                    - The Adaptive Approvals feature must be enabled for the tenant.
                                    - The workflow given in **approverId** must use the `idn:access-request-trigger` trigger.
                                    - `WORKFLOW` is exclusive of the other approver types. If you use it, it must be the only entry in **approvalSchemes**.
                                    - `WORKFLOW` is supported only in entitlement-level configuration. The source-level [Update source entitlement request configuration](https://developer.sailpoint.com/docs/api/update-source-entitlement-request-config-v-1) endpoint rejects it with a 400.
                                  example: GOVERNANCE_GROUP
                                approverId:
                                  type: string
                                  nullable: true
                                  description: Id of the specific approver, used only when approverType is GOVERNANCE_GROUP or WORKFLOW. For WORKFLOW this is the ID of the workflow to run.
                                  example: e3eab852-8315-467f-9de7-70eda97f63c8
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
