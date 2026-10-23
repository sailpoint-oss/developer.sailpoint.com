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
        This event trigger fires when Identity Security Cloud (ISC) detects an identity attribute change.  ISC identity attribute changes occur when account attributes aggregated from an authoritative source differ from an identity's current attributes during an identity refresh.
        This is a `FIRE_AND_FORGET` event trigger.  You can have a maximum of 50 subscriptions for this trigger. For more information about this event trigger, refer to [Identity Attributes Changed](https://developer.sailpoint.com/docs/extensibility/event-triggers/triggers/identity-attribute-changed).
      operationId: identityAttributesChangedEvent
      security:
        - userAuth:
            - sp:trigger-service-subscriptions:manage
      requestBody:
        required: true
        content:
          application/json:
            schema:
              title: Identity Attributes Changed
              type: object
              required:
                - identity
                - changes
              properties:
                identity:
                  required:
                    - id
                    - type
                    - name
                  type: object
                  description: Identity whose attributes changed.
                  properties:
                    type:
                      type: string
                      description: DTO type of identity whose attributes changed.
                      enum:
                        - IDENTITY
                      example: IDENTITY
                    id:
                      type: string
                      description: ID of identity whose attributes changed.
                      example: 2c7180a46faadee4016fb4e018c20642
                    name:
                      type: string
                      description: Display name of identity whose attributes changed.
                      example: Michael Michaels
                changes:
                  description: A list of one or more identity attributes that changed on the identity.
                  type: array
                  items:
                    type: object
                    required:
                      - attribute
                    properties:
                      attribute:
                        type: string
                        description: The name of the identity attribute that changed.
                        example: department
                      oldValue:
                        description: The value of the identity attribute before it changed.
                        nullable: true
                        example: sales
                        oneOf:
                          - type: string
                          - type: boolean
                          - type: array
                            items:
                              type: string
                          - type: object
                            nullable: true
                            additionalProperties:
                              oneOf:
                                - type: string
                                - type: number
                                - type: integer
                                - type: boolean
                      newValue:
                        description: The value of the identity attribute after it changed.
                        example: marketing
                        oneOf:
                          - type: string
                          - type: boolean
                          - type: array
                            items:
                              type: string
                          - type: object
                            nullable: true
                            additionalProperties:
                              oneOf:
                                - type: string
                                - type: number
                                - type: integer
                                - type: boolean
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
