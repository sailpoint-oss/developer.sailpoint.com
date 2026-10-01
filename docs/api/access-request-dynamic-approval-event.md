## OpenAPI

```yaml EVENT webhook
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
  webhook:
    event:
      description: |-
        This event trigger fires after an access request is submitted but before the request is approved or denied. You can use this trigger as a way to route the access request to an additional approval step by an identity or governance group.
        This is a `REQUEST_RESPONSE` event trigger.  This trigger type expects a response from the subscribers with directions about how to proceed with the event. You can only have one subscriber per event. For more information about this event trigger, refer to [Access Request Dynamic Approval](https://developer.sailpoint.com/docs/extensibility/event-triggers/triggers/access-request-dynamic-approval).
        >**Note: If there is an active subscription to the [Access Request Submitted trigger](https://developer.sailpoint.com/docs/extensibility/event-triggers/triggers/access-request-submitted), this trigger is invoked after the Access Request Submitted trigger, only if the response to that trigger was to approve the request.**
      operationId: accessRequestDynamicApprovalEvent
      security:
        - userAuth:
            - sp:trigger-service-subscriptions:manage
      requestBody:
        required: true
        content:
          application/json:
            schema:
              title: Access Request Dynamic Approver
              type: object
              required:
                - accessRequestId
                - requestedFor
                - requestedItems
                - requestedBy
              properties:
                accessRequestId:
                  type: string
                  description: |
                    The unique ID of the access request object. Can be used with the [access request status endpoint](https://developer.sailpoint.com/docs/api/list-access-request-status-v-1) to get the status of the request.
                  example: 4b4d982dddff4267ab12f0f1e72b5a6d
                requestedFor:
                  type: array
                  description: Identities access was requested for.
                  items:
                    type: object
                    description: Identity the access item is requested for.
                    properties:
                      type:
                        type: string
                        description: DTO type of identity the access item is requested for.
                        enum:
                          - IDENTITY
                        example: IDENTITY
                      id:
                        type: string
                        description: ID of identity the access item is requested for.
                        example: 2c4180a46faadee4016fb4e018c20626
                      name:
                        type: string
                        description: Human-readable display name of identity the access item is requested for.
                        example: Robert Robinson
                    title: accessitemrequestedfordto
                  minItems: 1
                  maxItems: 10
                requestedItems:
                  description: The access items that are being requested.
                  type: array
                  items:
                    type: object
                    required:
                      - id
                      - name
                      - type
                      - operation
                    properties:
                      id:
                        type: string
                        description: The unique ID of the access item.
                        example: 2c91808b6ef1d43e016efba0ce470904
                      name:
                        type: string
                        description: Human friendly name of the access item.
                        example: Engineering Access
                      description:
                        nullable: true
                        type: string
                        description: Extended description of the access item.
                        example: Engineering Access
                      type:
                        enum:
                          - ACCESS_PROFILE
                          - ROLE
                          - ENTITLEMENT
                        description: The type of access item being requested.
                        example: ACCESS_PROFILE
                      operation:
                        enum:
                          - Add
                          - Remove
                        description: Grant or revoke the access item
                        example: Add
                      comment:
                        nullable: true
                        type: string
                        description: A comment from the requestor on why the access is needed.
                        example: William needs this access for his day to day job activities.
                      form:
                        allOf:
                          - type: object
                            title: Access Request Item Form
                            nullable: true
                            description: Completed form instance associated with an access request item. Omitted when the item has no associated form or no form answers were captured. All listed properties may be present when form answers exist. Optional structural keys (`formElements`, `formConditions`, `formInstanceInputs`) may also be present; their shape follows the form instance payload.
                            additionalProperties: true
                            properties:
                              formDefinitionId:
                                type: string
                                nullable: true
                                description: ID of the form definition that was completed for this item.
                                example: b2c1808f-77f5-4a3a-9f3a-1d2e3f4a5b6c
                              formInstanceId:
                                type: string
                                nullable: true
                                description: ID of the completed form instance.
                                example: 9f3a1d2e-3f4a-5b6c-7d8e-9f0a1b2c3d4e
                              formData:
                                type: object
                                nullable: true
                                additionalProperties: true
                                description: Key-value pairs (form field technical name to value) from the completed form instance.
                                example:
                                  department: Engineering
                                  notifyRequester: true
                                  platforms:
                                    - AWS
                                    - GCP
                              formElements:
                                type: array
                                nullable: true
                                description: Optional form element definitions when present. Shape follows the form instance payload.
                                items:
                                  type: object
                                  additionalProperties: true
                                example:
                                  - id: 00000000-0000-0000-0000-000000000000
                                    elementType: TEXT
                              formConditions:
                                type: array
                                nullable: true
                                description: Optional conditional display rules when present. Shape follows the form instance payload; do not depend on a fixed condition schema in this API.
                                items:
                                  type: object
                                  additionalProperties: true
                                example:
                                  - ruleOperator: AND
                                    rules: []
                                    effects: []
                              formInstanceInputs:
                                type: object
                                nullable: true
                                additionalProperties: true
                                description: Optional inputs passed into the form instance when present. Copied from the form instance payload as-is.
                                example:
                                  department: Engineering
                            example:
                              formDefinitionId: b2c1808f-77f5-4a3a-9f3a-1d2e3f4a5b6c
                              formInstanceId: 9f3a1d2e-3f4a-5b6c-7d8e-9f0a1b2c3d4e
                              formData:
                                department: Engineering
                                notifyRequester: true
                                platforms:
                                  - AWS
                                  - GCP
                          - nullable: true
                            description: Completed form data for this requested item when the access item has an associated form.
                  minItems: 1
                  maxItems: 25
                requestedBy:
                  allOf:
                    - type: object
                      description: Access item requester's identity.
                      properties:
                        type:
                          type: string
                          description: Access item requester's DTO type.
                          enum:
                            - IDENTITY
                          example: IDENTITY
                        id:
                          type: string
                          description: Access item requester's identity ID.
                          example: 2c7180a46faadee4016fb4e018c20648
                        name:
                          type: string
                          description: Access item owner's human-readable display name.
                          example: William Wilson
                      title: accessitemrequesterdto
      responses:
        '200':
          content:
            application/json:
              schema:
                title: Access Request Dynamic Approval Response
                type: object
                required:
                  - id
                  - type
                  - name
                properties:
                  id:
                    type: string
                    description: Unique identifier of the approver to add to the approval process. If there is none, send an empty value "".
                    example: 2c91808b6ef1d43e016efba0ce470906
                  type:
                    type: string
                    description: Type of approver to add to the approval process. If there is none, send an empty value "".
                    enum:
                      - IDENTITY
                      - GOVERNANCE_GROUP
                    example: IDENTITY
                  name:
                    type: string
                    description: Name of the approver to add to the approval process. If there is none, send an empty value "".
                    example: Adam Adams
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
