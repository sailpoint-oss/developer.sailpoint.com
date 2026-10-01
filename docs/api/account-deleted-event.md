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
        This event trigger fires when an account is deleted in Identity Security Cloud.
        Accounts can be deleted via aggregations or provisioning.
        You could use this event trigger to fire a Workflow that takes additional actions after a privileged account has been deleted.
        See [Aggregating Accounts](https://documentation.sailpoint.com/saas/help/accounts/index.html#aggregating-accounts) and [Configuring Source Account Provisioning](https://documentation.sailpoint.com/saas/help/provisioning/create_profile.html) for more information about the scenarios that lead to account deletion.
        This is a `FIRE_AND_FORGET` event trigger.  You can have a maximum of 50 subscriptions for this trigger. For more information about this event trigger, refer to [Account Deleted](https://developer.sailpoint.com/docs/extensibility/event-triggers/triggers/account-deleted).
      operationId: accountDeletedEvent
      security:
        - userAuth:
            - sp:trigger-service-subscriptions:manage
      requestBody:
        required: true
        content:
          application/json:
            schema:
              title: Account Deleted
              type: object
              required:
                - event
                - source
                - account
                - identity
              properties:
                event:
                  type: object
                  description: Details about the event.
                  required:
                    - type
                    - cause
                  properties:
                    type:
                      type: string
                      description: The type of event.
                      enum:
                        - ACCOUNT_DELETED_V2
                      example: ACCOUNT_DELETED_V2
                    cause:
                      type: string
                      description: The cause of the event.
                      enum:
                        - AGGREGATION
                        - PROVISIONING
                      example: AGGREGATION
                source:
                  type: object
                  description: Details about the account source.
                  required:
                    - id
                    - name
                    - alias
                    - owner
                    - governanceGroup
                  properties:
                    id:
                      type: string
                      description: The unique ID of the source.
                      example: 2c918082814e693601816e09471b29b6
                    name:
                      type: string
                      description: The name of the source.
                      example: Active Directory
                    alias:
                      type: string
                      description: The alias of the source.
                      example: AD
                    owner:
                      type: object
                      description: Details about the owner of the source.
                      required:
                        - id
                        - name
                      properties:
                        id:
                          type: string
                          description: ID of the source owner.
                          example: owner-123
                        name:
                          type: string
                          description: Name of the source owner.
                          example: owner-name
                    governanceGroup:
                      type: object
                      description: Details about the governance group of the source.
                      required:
                        - id
                        - name
                      properties:
                        id:
                          type: string
                          description: ID of the governance group.
                          example: group-456
                        name:
                          type: string
                          description: Name of the governance group.
                          example: governance-group-name
                  title: accountsourcereference
                account:
                  type: object
                  description: Details about the account.
                  required:
                    - id
                    - name
                    - nativeIdentity
                    - uuid
                    - correlated
                    - isMachine
                    - origin
                    - attributes
                  properties:
                    id:
                      type: string
                      description: The unique identifier of the account.
                      example: 2c9180835d2e5168015d32f890ca1581
                    name:
                      type: string
                      description: The name of the account.
                      example: john.doe
                    nativeIdentity:
                      type: string
                      description: The unique ID of the account generated by the source system.
                      example: CN=John Doe,OU=Austin,OU=Americas,OU=Demo,DC=seri,DC=acme,DC=com
                    uuid:
                      type: string
                      description: The unique ID associated with this account.
                      nullable: true
                      example: b7264868-7201-415f-9118-b581d431c688
                    correlated:
                      type: boolean
                      description: Indicates if the account is correlated to an identity.
                      example: true
                    isMachine:
                      type: boolean
                      description: Indicates if the account is a machine account.
                      example: false
                    origin:
                      type: string
                      description: The origin of the account.
                      nullable: true
                      example: Active Directory
                    attributes:
                      type: object
                      description: The attributes of the account. The contents of attributes depends on the account schema for the source.
                      nullable: true
                      additionalProperties: true
                      example:
                        firstname: John
                        lastname: Doe
                  title: accountv2
                identity:
                  type: object
                  description: Details about the identity correlated with the account.
                  required:
                    - id
                    - name
                    - alias
                    - email
                  properties:
                    id:
                      type: string
                      description: The ID of the identity that is correlated with this account.
                      example: ee769173319b41d19ccec6c235423237b
                    name:
                      type: string
                      description: The name of the identity that is correlated with this account.
                      example: john.doe
                    alias:
                      type: string
                      description: The alias of the identity.
                      example: jdoe
                    email:
                      type: string
                      description: The email of the identity.
                      example: john.doe@email.com
                  title: identityreference-2
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
