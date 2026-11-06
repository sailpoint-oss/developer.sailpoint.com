## OpenAPI

```yaml PATCH /generic-request-approval-config/v1/{id}
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
  /generic-request-approval-config/v1/{id}:
    patch:
      description: |
        Use this API to update the approval configuration of one scope using a JSON Patch payload. Use the `id` returned
        by the get API.


        Patchable paths are `/approvalConfig`, which replaces every action at once, and `/approvalConfig/{ACTION}` for each
        action the scope's target type supports. One request can update several actions. `id`, `targetType`, and
        `targetId` identify the scope and can't be patched; a patch that targets any other path returns `400`.


        To return an action to the organization-level approval configuration, `remove` it or `replace` it with `{}`.


        Each configured action uses one scheme:


        **APPROVAL**: requires `approvers` and `comments`. `approvers` is a comma-separated list of approver tokens:
        `sourceOwner`, `manager`, `machineIdentityPrimaryOwner`, `machineIdentitySecondaryOwners`,
        `machineIdentityAllOwners`, `workgroup:{governanceGroupId}`, and `identity:{identityId}`. For the
        **SUBTYPE** **DELETE** action, `accountOwner` is also allowed. Tokens without an ID can appear at most once, and
        IDs must be unique and must exist. `comments` is one of `ALL`, `APPROVAL`, `REJECTION`, or `OFF`.


        **WORKFLOW**: requires `workflowId`, the UUID of a workflow. The same workflow can't be used for more than one
        action. When workflow approvals are enabled for the tenant, the workflow must exist, be enabled, and use the
        trigger for its action (`idn:machine-identity-activate` for ACTIVATE, `idn:machine-identity-deactivate` for
        DEACTIVATE).


        The **GLOBAL** scope only accepts the **WORKFLOW** scheme.


        The ID must be a UUID; any other value returns `400`. When no approval configuration exists for the ID, this API
        returns `404`.


        When agentic identity provisioning is not enabled for the tenant, this API returns `404`. When this API is not
        enabled for the tenant, it returns `403`.
      operationId: updateGenericRequestApprovalConfigV1
      security:
        - userAuth:
            - idn:generic-request-approval-config:manage
        - applicationAuth:
            - idn:generic-request-approval-config:manage
      parameters:
        - in: path
          name: id
          schema:
            type: string
          required: true
          x-sailpoint-resource-operation-id: getGenericRequestApprovalConfigV1
          description: Approval configuration ID.
          example: 0f2c7a9e-3b4d-4e5f-8a6b-7c8d9e0f1a2b
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
        description: A JSON of updated values [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.
        content:
          application/json-patch+json:
            schema:
              type: array
              items:
                type: object
                title: Json Patch Operation
                description: A JSONPatch Operation as defined by [RFC 6902 - JSON Patch](https://tools.ietf.org/html/rfc6902)
                required:
                  - op
                  - path
                properties:
                  op:
                    type: string
                    description: The operation to be performed
                    enum:
                      - add
                      - remove
                      - replace
                      - move
                      - copy
                      - test
                    example: replace
                  path:
                    type: string
                    description: A string JSON Pointer representing the target path to an element to be affected by the operation
                    example: /description
                  value:
                    oneOf:
                      - type: string
                        example: New description
                        title: string
                      - type: boolean
                        example: true
                        title: boolean
                      - type: integer
                        example: 300
                        title: integer
                      - type: object
                        title: object
                        example:
                          attributes:
                            name: philip
                      - type: array
                        title: array
                        items:
                          anyOf:
                            - type: string
                            - type: integer
                            - type: object
                          example:
                            - '001'
                            - '002'
                            - '003'
                    description: The value to be used for the operation, required for "add" and "replace" operations
                    example: New description
            examples:
              Require approval to activate:
                value:
                  - op: replace
                    path: /approvalConfig/ACTIVATE
                    value:
                      scheme: APPROVAL
                      approvers: machineIdentityPrimaryOwner,workgroup:8d3e0094-8a5e-4c6f-9a0b-2e5a1c7d4f10
                      comments: REJECTION
              Use a workflow to approve deactivation:
                value:
                  - op: replace
                    path: /approvalConfig/DEACTIVATE
                    value:
                      scheme: WORKFLOW
                      workflowId: 5a7c9e1b-2d4f-4a6c-8e0b-1d3f5a7c9e2b
              Inherit the organization setting for activation:
                value:
                  - op: remove
                    path: /approvalConfig/ACTIVATE
      responses:
        '200':
          description: Updated approval configuration for the scope.
          content:
            application/json:
              schema:
                title: Generic Request Approval Config
                type: object
                description: The approval configuration for one scope, with one entry per action the scope's target type supports.
                properties:
                  id:
                    type: string
                    description: The approval configuration ID. Use it with the update API.
                    example: 0f2c7a9e-3b4d-4e5f-8a6b-7c8d9e0f1a2b
                  targetType:
                    type: string
                    description: The kind of scope.
                    enum:
                      - RESOURCE
                      - SUBTYPE
                      - SOURCE
                      - GLOBAL
                    example: RESOURCE
                  targetId:
                    type: string
                    description: 'The scope target: the source resource ID for RESOURCE, the subtype ID for SUBTYPE, the source ID for SOURCE, and the tenant ID for GLOBAL.'
                    example: aws:bedrock-agent-alias-version
                  approvalConfig:
                    type: object
                    description: The approval setting for each action, keyed by action name (ACTIVATE, DEACTIVATE, CREATE, or DELETE, depending on the target type). An empty object means the action inherits the organization-level approval configuration.
                    additionalProperties:
                      title: Generic Request Approval Action Config
                      type: object
                      description: The approval setting for one action. It is either an empty object, which inherits the organization-level approval configuration, an APPROVAL setting with `approvers` and `comments`, or a WORKFLOW setting with `workflowId`.
                      properties:
                        scheme:
                          type: string
                          description: How the request is approved. Omitted when the action inherits the organization-level configuration.
                          enum:
                            - APPROVAL
                            - WORKFLOW
                          example: APPROVAL
                        approvers:
                          type: string
                          description: 'APPROVAL scheme only. A comma-separated list of approver tokens: `sourceOwner`, `manager`, `machineIdentityPrimaryOwner`, `machineIdentitySecondaryOwners`, `machineIdentityAllOwners`, `workgroup:{governanceGroupId}`, and `identity:{identityId}`. `accountOwner` is also allowed for the SUBTYPE DELETE action.'
                          example: machineIdentityPrimaryOwner,workgroup:8d3e0094-8a5e-4c6f-9a0b-2e5a1c7d4f10
                        comments:
                          type: string
                          description: 'APPROVAL scheme only. When approvers must comment: on both decisions (ALL), on approval only (APPROVAL), on rejection only (REJECTION), or never (OFF).'
                          enum:
                            - ALL
                            - APPROVAL
                            - REJECTION
                            - 'OFF'
                          example: REJECTION
                        workflowId:
                          type: string
                          description: WORKFLOW scheme only. The ID of the workflow that approves the request.
                          example: 5a7c9e1b-2d4f-4a6c-8e0b-1d3f5a7c9e2b
                    example:
                      ACTIVATE:
                        scheme: APPROVAL
                        approvers: machineIdentityPrimaryOwner,workgroup:8d3e0094-8a5e-4c6f-9a0b-2e5a1c7d4f10
                        comments: REJECTION
                      DEACTIVATE: {}
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
