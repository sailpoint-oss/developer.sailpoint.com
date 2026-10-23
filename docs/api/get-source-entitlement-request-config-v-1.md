## OpenAPI

```yaml GET /sources/v1/{id}/entitlement-request-config
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
  /sources/v1/{id}/entitlement-request-config:
    get:
      description: |-
        This API gets the current entitlement request configuration for a source. This source-level configuration should apply for all the entitlements in the source.

        Access request to any entitlements in the source should follow this configuration unless a separate entitlement-level configuration is defined.
        - During access request, this source-level entitlement request configuration overrides the global organization-level configuration.
        - However, the entitlement-level configuration (if defined) overrides this source-level configuration.

        The `WORKFLOW` approver type is not supported in source-level configuration. To use a workflow as an approver, configure it on the entitlement with [Replace entitlement request config](https://developer.sailpoint.com/docs/api/put-entitlement-request-config-v-1). A source-level request that contains `WORKFLOW` fails with a 400.
      operationId: getSourceEntitlementRequestConfigV1
      security:
        - userAuth:
            - idn:sources:read
            - idn:sources:manage
        - applicationAuth:
            - idn:sources:read
            - idn:sources:manage
      parameters:
        - in: path
          name: id
          required: true
          x-sailpoint-resource-operation-id: listSourcesV1
          schema:
            type: string
          description: The Source id
          example: 8c190e6787aa4ed9a90bd9d5344523fb
      responses:
        '200':
          description: Source Entitlement Request Configuration Details.
          content:
            application/json:
              schema:
                type: object
                title: Source Entitlement Request Config
                description: Entitlement Request Configuration
                properties:
                  accessRequestConfig:
                    description: Configuration for requesting access to entitlements
                    type: object
                    title: Source Entitlement Access Request Config
                    properties:
                      approvalSchemes:
                        type: array
                        description: Ordered list of approval steps for the access request. Empty when no approval is required.
                        items:
                          type: object
                          title: Source Entitlement Approval Scheme
                          properties:
                            approverType:
                              type: string
                              enum:
                                - ENTITLEMENT_OWNER
                                - SOURCE_OWNER
                                - MANAGER
                                - GOVERNANCE_GROUP
                              description: |-
                                Describes the individual or group that is responsible for an approval step. Values are as follows.

                                **ENTITLEMENT_OWNER**: Owner of the associated Entitlement

                                **SOURCE_OWNER**: Owner of the associated Source

                                **MANAGER**: Manager of the Identity for whom the request is being made

                                **GOVERNANCE_GROUP**: A Governance Group, the ID of which is specified by the **approverId** field

                                **WORKFLOW** is not supported in source-level entitlement request configuration. Use the entitlement-level [Replace entitlement request config](https://developer.sailpoint.com/docs/api/put-entitlement-request-config-v-1) endpoint to configure a workflow approver. A source-level request that contains `WORKFLOW` is rejected with a 400.
                              example: GOVERNANCE_GROUP
                            approverId:
                              type: string
                              nullable: true
                              description: Id of the specific approver, used only when approverType is GOVERNANCE_GROUP
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
                    title: Source Entitlement Revocation Request Config
                    properties:
                      approvalSchemes:
                        type: array
                        description: Ordered list of approval steps for the revocation request. Empty when no approval is required.
                        items:
                          type: object
                          title: Source Entitlement Approval Scheme
                          properties:
                            approverType:
                              type: string
                              enum:
                                - ENTITLEMENT_OWNER
                                - SOURCE_OWNER
                                - MANAGER
                                - GOVERNANCE_GROUP
                              description: |-
                                Describes the individual or group that is responsible for an approval step. Values are as follows.

                                **ENTITLEMENT_OWNER**: Owner of the associated Entitlement

                                **SOURCE_OWNER**: Owner of the associated Source

                                **MANAGER**: Manager of the Identity for whom the request is being made

                                **GOVERNANCE_GROUP**: A Governance Group, the ID of which is specified by the **approverId** field

                                **WORKFLOW** is not supported in source-level entitlement request configuration. Use the entitlement-level [Replace entitlement request config](https://developer.sailpoint.com/docs/api/put-entitlement-request-config-v-1) endpoint to configure a workflow approver. A source-level request that contains `WORKFLOW` is rejected with a 400.
                              example: GOVERNANCE_GROUP
                            approverId:
                              type: string
                              nullable: true
                              description: Id of the specific approver, used only when approverType is GOVERNANCE_GROUP
                              example: e3eab852-8315-467f-9de7-70eda97f63c8
              examples:
                Get default config:
                  description: The default config for a source should look like the following where the empty approvalSchemes indicates that no approvals are required.
                  value:
                    accessRequestConfig:
                      approvalSchemes: []
                      requestCommentRequired: false
                      denialCommentRequired: false
                Get config with one approval:
                  description: In case of a single approval, the config could look like the following.
                  value:
                    accessRequestConfig:
                      approvalSchemes:
                        - approverId: null
                          approverType: SOURCE_OWNER
                      requestCommentRequired: true
                      denialCommentRequired: false
                Get config with multiple approvals:
                  description: In case of multiple levels of approvals the config could look like the following. In this scenario, access request review process should go through all the approvers sequentially.
                  value:
                    accessRequestConfig:
                      approvalSchemes:
                        - approverId: null
                          approverType: ENTITLEMENT_OWNER
                        - approverId: null
                          approverType: SOURCE_OWNER
                        - approverId: 95e538a3-30c1-433a-af05-4bed973bbc22
                          approverType: GOVERNANCE_GROUP
                      requestCommentRequired: true
                      denialCommentRequired: false
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
