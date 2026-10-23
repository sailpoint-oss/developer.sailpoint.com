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
        This event trigger fires after Identity Security Cloud (ISC) provisions access to an account.  This trigger provides organizations with a flexible way to extend the provisioning workflow after an identity's access has changed within ISC. 
        These are the requirements to use the trigger:
          * An oAuth client must be configured with the `ORG_ADMIN` authority.
          * The organization has enabled the `ARSENAL_ALLOW_POSTPROVISIONING_TRIGGERS` feature flag.
          * Connectors are configured for provisioning into the target applications.
          * The organization is configured for automated provisioning. Different event contexts require different setups. For more information about these setups, refer to [Provisioning Completed](https://developer.sailpoint.com/docs/extensibility/event-triggers/triggers/provisioning-completed).

        To provision access to a target application, the source's connector must support these features: 
          * `ENABLE`: The ability to enable or disable accounts.
          * `UNLOCK`: The ability to lock or unlock accounts.
          * `PROVISIONING`: The ability to write to accounts.
          * `PASSWORD`: The ability to update account passwords.

        For a list of supported connectors and features, refer to [Identity Security Cloud Connectors](https://documentation.sailpoint.com/connectors/isc/landingpages/help/landingpages/isc_landing.html). For more information about configuring sources for provisioning in ISC, refer to [Configuring Source Account Provisioning](https://documentation.sailpoint.com/saas/help/provisioning/create_profile.html).
        This is a `FIRE_AND_FORGET` event trigger.  You can have a maximum of 50 subscriptions for this trigger. For more information about this event trigger, refer to [Provisioning Completed](https://developer.sailpoint.com/docs/extensibility/event-triggers/triggers/provisioning-completed).
      operationId: provisioningCompletedEvent
      security:
        - userAuth:
            - sp:trigger-service-subscriptions:manage
      requestBody:
        required: true
        content:
          application/json:
            schema:
              title: Provisioning Completed
              type: object
              required:
                - trackingNumber
                - sources
                - recipient
                - accountRequests
              properties:
                trackingNumber:
                  type: string
                  description: The reference number of the provisioning request. Useful for tracking status in the Account Activity search interface.
                  example: 4b4d982dddff4267ab12f0f1e72b5a6d
                sources:
                  type: string
                  description: One or more sources that the provisioning transaction(s) were done against.  Sources are comma separated.
                  example: Corp AD, Corp LDAP, Corp Salesforce
                action:
                  nullable: true
                  type: string
                  description: Origin of where the provisioning request came from.
                  example: IdentityRefresh
                errors:
                  nullable: true
                  description: A list of any accumulated error messages that occurred during provisioning.
                  type: array
                  items:
                    type: string
                    example: Connector AD Failed
                warnings:
                  nullable: true
                  description: A list of any accumulated warning messages that occurred during provisioning.
                  type: array
                  items:
                    type: string
                    example: Notification Skipped due to invalid email
                recipient:
                  required:
                    - id
                    - type
                    - name
                  type: object
                  description: Provisioning recpient.
                  properties:
                    type:
                      type: string
                      description: Provisioning recipient DTO type.
                      enum:
                        - IDENTITY
                      example: IDENTITY
                    id:
                      type: string
                      description: Provisioning recipient's identity ID.
                      example: 2c7180a46faadee4016fb4e018c20642
                    name:
                      type: string
                      description: Provisioning recipient's display name.
                      example: Michael Michaels
                requester:
                  nullable: true
                  required:
                    - id
                    - type
                    - name
                  type: object
                  description: Provisioning requester's identity.
                  properties:
                    type:
                      type: string
                      description: Provisioning requester's DTO type.
                      enum:
                        - IDENTITY
                      example: IDENTITY
                    id:
                      type: string
                      description: Provisioning requester's identity ID.
                      example: 2c7180a46faadee4016fb4e018c20648
                    name:
                      type: string
                      description: Provisioning owner's human-readable display name.
                      example: William Wilson
                accountRequests:
                  type: array
                  description: A list of provisioning instructions to be executed on a per-account basis. The order in which operations are executed may not always be predictable.
                  items:
                    type: object
                    required:
                      - source
                      - accountOperation
                      - provisioningResult
                      - provisioningTarget
                    properties:
                      source:
                        required:
                          - id
                          - type
                          - name
                        type: object
                        description: Reference to the source being provisioned against.
                        properties:
                          id:
                            description: ID of the object to which this reference applies
                            type: string
                            example: 4e4d982dddff4267ab12f0f1e72b5a6d
                          type:
                            type: string
                            enum:
                              - SOURCE
                            example: SOURCE
                            description: The type of object that is referenced
                          name:
                            type: string
                            description: Human-readable display name of the object to which this reference applies
                            example: Corporate Active Directory
                      accountId:
                        type: string
                        description: The unique idenfier of the account being provisioned.
                        example: CN=Chewy.Bacca,ou=hardcorefigter,ou=wookies,dc=starwars,dc=com
                      accountOperation:
                        type: string
                        description: The provisioning operation; typically Create, Modify, Enable, Disable, Unlock, or Delete.
                        example: Modify
                      provisioningResult:
                        description: The overall result of the provisioning transaction; this could be success, pending, failed, etc.
                        enum:
                          - SUCCESS
                          - PENDING
                          - FAILED
                        example: SUCCESS
                      provisioningTarget:
                        type: string
                        description: The name of the provisioning channel selected; this could be the same as the source, or could be a Service Desk Integration Module (SDIM).
                        example: Corp AD
                      ticketId:
                        nullable: true
                        type: string
                        description: A reference to a tracking number, if this is sent to a Service Desk Integration Module (SDIM).
                        example: '72619262'
                      attributeRequests:
                        nullable: true
                        description: A list of attributes as part of the provisioning transaction.
                        type: array
                        items:
                          type: object
                          required:
                            - attributeName
                            - operation
                          properties:
                            attributeName:
                              type: string
                              description: The name of the attribute being provisioned.
                              example: memberOf
                            attributeValue:
                              nullable: true
                              type: string
                              description: The value of the attribute being provisioned.
                              example: CN=jedi,DC=starwars,DC=com
                            operation:
                              enum:
                                - Add
                                - Set
                                - Remove
                              description: The operation to handle the attribute.
                              example: Add
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
