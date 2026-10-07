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
        This event trigger fires when Identity Security Cloud (ISC) detects that identities have unusual access relative their peers. ISC calculates outliers daily, flags the outliers, and notifies the trigger's subscribers when it detects them.
        These are the requirements to use the trigger:
          * Your organization must have Access Insights, which it needs to access Identity Outliers.
          * Your organization must have at a configured source that it has loaded account data from.
          * Your organization's accound data must be onboarded into AI-Driven Identity Security.

        This is a `FIRE_AND_FORGET` event trigger.  You can have a maximum of 50 subscriptions for this trigger. For more information about this event trigger, refer to [Outlier Detected](https://developer.sailpoint.com/docs/extensibility/event-triggers/triggers/outlier-detected).
      operationId: outlierDetectedEvent
      security:
        - userAuth:
            - sp:trigger-service-subscriptions:manage
      requestBody:
        required: true
        content:
          application/json:
            schema:
              title: Outlier Detected
              type: object
              required:
                - identity
                - outlierType
                - score
              properties:
                identity:
                  required:
                    - id
                    - type
                    - name
                  type: object
                  description: Identity with unusual access, relative to its peers.
                  properties:
                    type:
                      type: string
                      description: Identity's DTO type.
                      enum:
                        - IDENTITY
                      example: IDENTITY
                    id:
                      type: string
                      description: Identity's unique ID.
                      example: 2c7180a46faadee4016fb4e018c20642
                    name:
                      type: string
                      description: Identity's name.
                      example: Michael Michaels
                outlierType:
                  type: string
                  description: Identity's outlier type.
                  enum:
                    - LOW_SIMILARITY
                  example: LOW_SIMILARITY
                score:
                  type: number
                  description: Dissimilarity score that determines whether the identity is an outlier, ranging from `0.0` to `1.0`. The higher the score, the more likely the identity is an outlier.
                  format: decimal
                  example: 0.82
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
