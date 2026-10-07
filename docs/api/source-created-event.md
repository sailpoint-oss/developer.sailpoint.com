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
        This event trigger fires when a new source is created in Identity Security Cloud (ISC), by either the [API](https://developer.sailpoint.com/docs/api/v2024/create-source) or the [Admin UI](https://documentation.sailpoint.com/saas/help/accounts/loading_data.html#configuring-a-source). 
        These are some typical use cases for the trigger:
          * Provide evidence to auditors to show that connector logic and sources are maintained by proper change control processes and aren't vulnerable to outside manipulation. 
          * Auto-configure new sources with proper owners, using external data sources. 

        This is a `FIRE_AND_FORGET` event trigger.  You can have a maximum of 50 subscriptions for this trigger. For more information about this event trigger, refer to [Source Created](https://developer.sailpoint.com/docs/extensibility/event-triggers/triggers/source-created).
      operationId: sourceCreatedEvent
      security:
        - userAuth:
            - sp:trigger-service-subscriptions:manage
      requestBody:
        required: true
        content:
          application/json:
            schema:
              title: Source Created
              type: object
              required:
                - id
                - name
                - type
                - created
                - connector
                - actor
              properties:
                id:
                  type: string
                  description: The unique ID of the source.
                  example: 2c9180866166b5b0016167c32ef31a66
                name:
                  type: string
                  description: Human friendly name of the source.
                  example: Test source
                type:
                  type: string
                  description: The connection type.
                  example: DIRECT_CONNECT
                created:
                  type: string
                  format: date-time
                  description: The date and time the source was created.
                  example: '2021-03-29T22:01:50.474Z'
                connector:
                  type: string
                  description: The connector type used to connect to the source.
                  example: active-directory
                actor:
                  required:
                    - id
                    - name
                    - type
                  type: object
                  description: Identity who created the source.
                  properties:
                    type:
                      type: string
                      description: DTO type of identity who created the source.
                      enum:
                        - IDENTITY
                      example: IDENTITY
                    id:
                      type: string
                      description: ID of identity who created the source.
                      example: 2c7180a46faadee4016fb4e018c20648
                    name:
                      type: string
                      description: Display name of identity who created the source.
                      example: William Wilson
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
