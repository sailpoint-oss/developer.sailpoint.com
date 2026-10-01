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
        This event trigger fires when compensating controls are applied to an SOD violation such that the violation is mitigated. This is a `FIRE_AND_FORGET` event trigger. You can have a maximum of 50 subscriptions for this trigger. 
        The payload includes the violation in **Mitigated** state and **appliedControls** listing the active control application(s) (including applier, control reference, expiration, and optional workflow correlation).
      operationId: sodViolationMitigatedEvent
      security:
        - userAuth:
            - sp:trigger-service-subscriptions:manage
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              title: SOD Violation Mitigated Payload
              description: JSON body delivered for the **SODViolationMitigated** webhook.
              properties:
                appliedControls:
                  type: array
                  description: Controls applied to mitigate the violation. For now this lists the currently active application(s).
                  items:
                    type: object
                    properties:
                      appliedDate:
                        type: string
                        format: date-time
                        description: When the control was applied.
                        example: '2026-03-05T22:51:24.535433Z'
                      applier:
                        type: object
                        description: Identity that applied the control.
                        properties:
                          id:
                            type: string
                            description: Applier ID.
                            example: 2c918088837fe14901838062029a04bf
                          type:
                            type: string
                            description: DTO type of the applier reference.
                            example: IDENTITY
                            enum:
                              - IDENTITY
                      comments:
                        type: string
                        description: Optional comments from the applier.
                        nullable: true
                        example: Applied compensating control to mitigate violation while awaiting access review.
                      control:
                        type: object
                        description: Reference to the compensating control definition.
                        properties:
                          id:
                            type: string
                            description: Control ID.
                            example: 01ea1d945db14444a2356f71c22b3449
                          type:
                            type: string
                            description: Control type (always **COMPENSATING_CONTROL** for this webhook).
                            example: COMPENSATING_CONTROL
                            enum:
                              - COMPENSATING_CONTROL
                      expiration:
                        type: string
                        format: date-time
                        description: When this application of the control expires.
                        example: '2026-04-05T22:51:24.535433Z'
                      id:
                        type: string
                        description: ID of the control application record.
                        example: 230bb065e18641f9bd6985ea9cf2e1a4
                      status:
                        type: string
                        title: Violation Applied Control Status
                        description: Lifecycle status of a compensating control application on a violation. **Pending** - not yet in effect; **Active** - currently mitigating the violation; **Completed** - finished successfully; **Canceled** - withdrawn before completion; **Failed** - could not be completed successfully.
                        enum:
                          - Pending
                          - Active
                          - Completed
                          - Canceled
                          - Failed
                        example: Active
                      violation:
                        type: string
                        description: ID of the violation this application belongs to.
                        example: 230bb065e18641f9bd6985ea9cf2e1a4
                      workflowId:
                        type: string
                        description: Optional workflow correlation ID.
                        nullable: true
                        example: 2c918088837fe14901838062029a04bf
                created:
                  type: string
                  format: date-time
                  description: When the violation record was created.
                  example: '2026-03-04T22:51:24.535433Z'
                expiration:
                  type: string
                  format: date-time
                  description: Violation-level expiration (may be a sentinel when not set).
                  example: '2026-04-04T22:51:24.535433Z'
                id:
                  type: string
                  description: Violation ID.
                  example: 230bb065e18641f9bd6985ea9cf2e1a4
                lastEvaluatedDate:
                  type: string
                  format: date-time
                  description: When the violation was last evaluated.
                  example: '2026-03-05T22:51:22.158Z'
                level:
                  type: string
                  description: Violation severity level.
                  example: High
                modified:
                  type: string
                  format: date-time
                  description: When the violation was last modified.
                  example: '2026-03-05T22:51:24.535433Z'
                name:
                  type: string
                  description: Human-readable violation name.
                  example: Violation for 01ea1d94-5db1-4444-a235-6f71c22b3449 - Target 2c9180888380236101838062022f00ea
                owner:
                  type: object
                  description: Owner of the violation.
                  properties:
                    id:
                      type: string
                      description: Owner ID.
                      example: 2c918088837fe14901838062029a04bf
                    type:
                      type: string
                      description: DTO type of the owner reference.
                      enum:
                        - IDENTITY
                        - GOVERNANCE_GROUP
                      example: IDENTITY
                policy:
                  type: object
                  description: SOD policy associated with the violation.
                  properties:
                    id:
                      type: string
                      description: Policy ID.
                      example: 01ea1d94-5db1-4444-a235-6f71c22b3449
                    type:
                      type: string
                      description: Policy type (always **SOD** for this webhook).
                      enum:
                        - SOD
                      example: SOD
                status:
                  type: string
                  description: Violation lifecycle status after mitigation.
                  example: Mitigated
                target:
                  type: object
                  description: Identity or entity the violation applies to.
                  properties:
                    id:
                      type: string
                      description: Target ID.
                      example: 2c9180888380236101838062022f00ea
                    type:
                      type: string
                      description: DTO type of the target reference.
                      enum:
                        - IDENTITY
                      example: IDENTITY
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
