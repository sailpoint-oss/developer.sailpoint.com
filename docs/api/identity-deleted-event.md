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
        This event trigger fires after an identity has been completely deleted from Identity Security Cloud (ISC). ISC only deletes an identity when it meets all these requirements: 
          * It has no correlated accounts.
          * It's not an owner of a role, access profile, application, source, or task result. 
          * It's not an owner or requester of a work item.
          * It's not a protected account or manager.
          * It has no assigned capabilities, such as being an assigned certification reviewer.
          * It's not involved in any active certification as a target (its access is not being certified).

        These are some typical use cases for the trigger:
          * Notify an administrator or system to take the appropriate provisioning actions as part of the leaver workflow.
          * Notify a system to trigger another action, such as deactivating an employee's badge upon termination.

        This is a `FIRE_AND_FORGET` event trigger.  You can have a maximum of 50 subscriptions for this trigger. For more information about this event trigger, refer to [Identity Deleted](https://developer.sailpoint.com/docs/extensibility/event-triggers/triggers/identity-deleted).
        >**Note: This is an early access event trigger. Contact support to enable it on your tenant.**
      operationId: identityDeletedEvent
      security:
        - userAuth:
            - sp:trigger-service-subscriptions:manage
      requestBody:
        required: true
        content:
          application/json:
            schema:
              title: Identity Deleted
              type: object
              required:
                - identity
                - attributes
              properties:
                identity:
                  required:
                    - id
                    - type
                    - name
                  type: object
                  description: Deleted identity.
                  properties:
                    type:
                      type: string
                      description: Deleted identity's DTO type.
                      enum:
                        - IDENTITY
                      example: IDENTITY
                    id:
                      type: string
                      description: Deleted identity ID.
                      example: 2c7180a46faadee4016fb4e018c20642
                    name:
                      type: string
                      description: Deleted identity's display name.
                      example: Michael Michaels
                attributes:
                  type: object
                  description: The attributes assigned to the identity. Attributes are determined by the identity profile.
                  additionalProperties: true
                  example:
                    firstname: John
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
