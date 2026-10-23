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
        This event trigger fires when a mitigated SOD violation returns to an open state. This is a `FIRE_AND_FORGET` event trigger. You can have a maximum of 50 subscriptions for this trigger. 
        It is emitted in these situations:
        - **Conflicting criteria updated** — conflicting access criteria change such that the violation is no longer considered mitigated and moves from **Mitigated** to **Open**.
        - **Applied control expired** — the compensating control that mitigated the violation expires, moving the violation from **Mitigated** to **Open**.
        The payload includes **previousStatus**, **currentStatus**, and **reason** to distinguish these cases (`Conflicting Criteria Updated` or `Applied Control Expired`).
      operationId: sodViolationReopenedEvent
      security:
        - userAuth:
            - sp:trigger-service-subscriptions:manage
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              title: SOD Violation Reopened Payload
              description: JSON body delivered for the **SODViolationReopened** webhook.
              properties:
                created:
                  type: string
                  format: date-time
                  description: When the violation record was created.
                  example: '2026-03-04T22:51:24.535433Z'
                modified:
                  type: string
                  format: date-time
                  description: When the violation was last modified.
                  example: '2026-03-05T22:51:24.535433Z'
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
                name:
                  type: string
                  description: Human-readable violation name.
                  example: Violation for 01ea1d94-5db1-4444-a235-6f71c22b3449 - Target 2c9180888380236101838062022f00ea
                owner:
                  type: object
                  description: Owner of the violation (e.g. assigned identity).
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
                      example: SOD
                      enum:
                        - SOD
                previousStatus:
                  type: string
                  description: Violation status before the reopen.
                  example: Mitigated
                currentStatus:
                  type: string
                  description: Violation status after the reopen.
                  example: Open
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
                      enum:
                        - IDENTITY
                      example: IDENTITY
                      description: DTO type of the target reference.
                reason:
                  type: string
                  description: Why the violation was reopened.
                  enum:
                    - Conflicting Criteria Updated
                    - Applied Control Expired
                  example: Conflicting Criteria Updated
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
