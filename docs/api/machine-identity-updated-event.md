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
        This event trigger fires when a machine identity is updated in Identity Security Cloud.
        Machine identities can be updated via the UI, endpoint, or aggregations.
        You could use this event trigger to fire a Workflow that notifies machine identity owners when a machine identity's owner list changes.
        See [Managing Application Identities](https://documentation.sailpoint.com/saas/help/machine/identity.html),  [Managing AI Agents](https://documentation.sailpoint.com/saas/help/agent/agent_mgmt.html#updating-ai-agents) or  [Aggregating AI Agents](https://documentation.sailpoint.com/saas/help/agent/agent_aggregations.html)  for more information about the scenarios that lead to machine identity updates.
        Customers that have licensed Machine Identity Security or Agent Identity Security will receive this event trigger.
        This is a `FIRE_AND_FORGET` event trigger.  You can have a maximum of 50 subscriptions for this trigger. For more information about this event trigger, refer to [Machine Identity Updated](https://developer.sailpoint.com/docs/extensibility/event-triggers/triggers/machine-identity-updated).
      operationId: machineIdentityUpdatedEvent
      security:
        - userAuth:
            - sp:trigger-service-subscriptions:manage
      requestBody:
        required: true
        content:
          application/json:
            schema:
              title: Machine Identity Updated
              type: object
              required:
                - eventType
                - machineIdentity
                - machineIdentityChangeTypes
                - userEntitlementChanges
                - ownerChanges
                - singleValueAttributeChanges
              properties:
                eventType:
                  type: string
                  description: Type of the event.
                  enum:
                    - MACHINE_IDENTITY_UPDATED
                  example: MACHINE_IDENTITY_UPDATED
                machineIdentity:
                  type: object
                  description: Details of the updated machine identity.
                  required:
                    - id
                    - created
                    - modified
                    - subtype
                    - manuallyEdited
                  properties:
                    id:
                      type: string
                      description: Unique identifier for the machine identity.
                      example: 8cd6c945-0057-4a6e-ad65-9cbf3b3c71b6
                    name:
                      type: string
                      description: Name of the machine identity.
                      example: test
                    created:
                      type: string
                      format: date-time
                      description: Creation timestamp.
                      example: '2025-08-08T12:42:21.491666Z'
                    modified:
                      type: string
                      format: date-time
                      description: Last modified timestamp.
                      example: '2025-09-01T06:36:54.401476Z'
                    businessApplication:
                      type: string
                      description: Associated business application.
                      example: MyBusinessApplication2
                    description:
                      type: string
                      description: Description of the machine identity.
                      example: test description event
                    attributes:
                      type: object
                      description: The attributes assigned to the identity.
                      example:
                        botUserId: 005KV00000BLoMCYA1
                      additionalProperties: true
                    subtype:
                      type: string
                      enum:
                        - AI Agent
                        - Application
                      description: Subtype of the machine identity.
                      example: AI Agent
                    owners:
                      type: array
                      description: List of owners.
                      items:
                        type: object
                        description: Reference to an owner of the machine identity.
                        required:
                          - id
                          - name
                          - type
                        properties:
                          type:
                            type: string
                            description: Owner's type.
                            example: IDENTITY
                          id:
                            type: string
                            description: Owner ID.
                            example: 84d8c1b819144608b8b8bc3b84ddbb7b
                          name:
                            type: string
                            description: Owner's display name.
                            example: Jerrie admin3cf084
                          isPrimary:
                            type: boolean
                            description: Indicates if this owner is the primary owner.
                            default: false
                            example: true
                        additionalProperties: true
                        example:
                          type: IDENTITY
                          id: 84d8c1b819144608b8b8bc3b84ddbb7b
                          name: Jerrie admin3cf084
                          isPrimary: true
                        title: machineidentityownerreference
                    sourceId:
                      type: string
                      description: Source identifier.
                      example: c0201251a6ce4d268aba536cdd60a7f2
                    uuid:
                      type: string
                      description: UUID of the machine identity.
                      example: f5dd23fe-3414-42b7-bb1c-869400ad7a10
                    nativeIdentity:
                      type: string
                      description: Native identity value.
                      example: abc:123:dddd1
                    manuallyEdited:
                      type: boolean
                      default: false
                      description: Indicates if manually edited.
                      example: true
                    manuallyCreated:
                      type: boolean
                      default: false
                      description: Indicates if manually created.
                      example: true
                    datasetId:
                      type: string
                      description: Dataset identifier.
                      example: agentforce:agents
                    source:
                      type: object
                      description: Reference to a source of entity.
                      required:
                        - type
                        - id
                        - name
                      properties:
                        type:
                          type: string
                          description: Source Type.
                          example: SOURCE
                        id:
                          type: string
                          description: Unique identifier.
                          example: c0201251a6ce4d268aba536cdd60a7f2
                        name:
                          type: string
                          description: Display name.
                          example: IdentityNow
                      additionalProperties: true
                      example:
                        type: SOURCE
                        id: c0201251a6ce4d268aba536cdd60a7f2
                        name: IdentityNow
                      title: machineidentitysourcereference
                    userEntitlements:
                      type: array
                      description: List of user entitlements.
                      items:
                        type: object
                        description: Reference to a user entitlement.
                        required:
                          - entitlementId
                          - displayName
                          - source
                        properties:
                          entitlementId:
                            type: string
                            description: Entitlement identifier.
                            example: 2509f650c20a3ab5956be70f6f136fbc
                          displayName:
                            type: string
                            description: Display name of the entitlement.
                            example: CN=Engineering-test-org3,OU=megapod-useast1-test-org3,OU=org-data-service,DC=TestAutomationAD,DC=local
                          source:
                            type: object
                            description: Reference to a source of entity.
                            required:
                              - type
                              - id
                              - name
                            properties:
                              type:
                                type: string
                                description: Source Type.
                                example: SOURCE
                              id:
                                type: string
                                description: Unique identifier.
                                example: c0201251a6ce4d268aba536cdd60a7f2
                              name:
                                type: string
                                description: Display name.
                                example: IdentityNow
                            additionalProperties: true
                            example:
                              type: SOURCE
                              id: c0201251a6ce4d268aba536cdd60a7f2
                              name: IdentityNow
                            title: machineidentitysourcereference
                        additionalProperties: true
                        example:
                          entitlementId: 2509f650c20a3ab5956be70f6f136fbc
                          displayName: CN=Engineering-test-org3,OU=megapod-useast1-test-org3,OU=org-data-service,DC=TestAutomationAD,DC=local
                          source:
                            type: SOURCE
                            id: 7443d0ffb1304bbcbdf4c07b5c09d4f2
                            name: ODS-AD-Source
                        title: machineidentityuserentitlements
                    existsOnSource:
                      type: string
                      description: Existence status on source.
                      example: NOT_APPLICABLE
                machineIdentityChangeTypes:
                  type: array
                  description: Types of changes that occurred to the machine identity.
                  items:
                    type: string
                    enum:
                      - ATTRIBUTES_CHANGED
                      - USER_ENTITLEMENTS_ADDED
                      - USER_ENTITLEMENTS_REMOVED
                      - OWNERS_ADDED
                      - OWNERS_REMOVED
                  example:
                    - ATTRIBUTES_CHANGED
                    - USER_ENTITLEMENTS_ADDED
                    - USER_ENTITLEMENTS_REMOVED
                    - OWNERS_ADDED
                    - OWNERS_REMOVED
                userEntitlementChanges:
                  type: object
                  description: Changes to user entitlements.
                  properties:
                    attributeName:
                      type: string
                      description: Name of the attribute that changed.
                      example: userEntitlements
                    added:
                      type: array
                      description: User entitlements that were added.
                      items:
                        type: object
                        description: Reference to a user entitlement.
                        required:
                          - entitlementId
                          - displayName
                          - source
                        properties:
                          entitlementId:
                            type: string
                            description: Entitlement identifier.
                            example: 2509f650c20a3ab5956be70f6f136fbc
                          displayName:
                            type: string
                            description: Display name of the entitlement.
                            example: CN=Engineering-test-org3,OU=megapod-useast1-test-org3,OU=org-data-service,DC=TestAutomationAD,DC=local
                          source:
                            type: object
                            description: Reference to a source of entity.
                            required:
                              - type
                              - id
                              - name
                            properties:
                              type:
                                type: string
                                description: Source Type.
                                example: SOURCE
                              id:
                                type: string
                                description: Unique identifier.
                                example: c0201251a6ce4d268aba536cdd60a7f2
                              name:
                                type: string
                                description: Display name.
                                example: IdentityNow
                            additionalProperties: true
                            example:
                              type: SOURCE
                              id: c0201251a6ce4d268aba536cdd60a7f2
                              name: IdentityNow
                            title: machineidentitysourcereference
                        additionalProperties: true
                        example:
                          entitlementId: 2509f650c20a3ab5956be70f6f136fbc
                          displayName: CN=Engineering-test-org3,OU=megapod-useast1-test-org3,OU=org-data-service,DC=TestAutomationAD,DC=local
                          source:
                            type: SOURCE
                            id: 7443d0ffb1304bbcbdf4c07b5c09d4f2
                            name: ODS-AD-Source
                        title: machineidentityuserentitlements
                    removed:
                      type: array
                      description: User entitlements that were removed.
                      items:
                        type: object
                        description: Reference to a user entitlement.
                        required:
                          - entitlementId
                          - displayName
                          - source
                        properties:
                          entitlementId:
                            type: string
                            description: Entitlement identifier.
                            example: 2509f650c20a3ab5956be70f6f136fbc
                          displayName:
                            type: string
                            description: Display name of the entitlement.
                            example: CN=Engineering-test-org3,OU=megapod-useast1-test-org3,OU=org-data-service,DC=TestAutomationAD,DC=local
                          source:
                            type: object
                            description: Reference to a source of entity.
                            required:
                              - type
                              - id
                              - name
                            properties:
                              type:
                                type: string
                                description: Source Type.
                                example: SOURCE
                              id:
                                type: string
                                description: Unique identifier.
                                example: c0201251a6ce4d268aba536cdd60a7f2
                              name:
                                type: string
                                description: Display name.
                                example: IdentityNow
                            additionalProperties: true
                            example:
                              type: SOURCE
                              id: c0201251a6ce4d268aba536cdd60a7f2
                              name: IdentityNow
                            title: machineidentitysourcereference
                        additionalProperties: true
                        example:
                          entitlementId: 2509f650c20a3ab5956be70f6f136fbc
                          displayName: CN=Engineering-test-org3,OU=megapod-useast1-test-org3,OU=org-data-service,DC=TestAutomationAD,DC=local
                          source:
                            type: SOURCE
                            id: 7443d0ffb1304bbcbdf4c07b5c09d4f2
                            name: ODS-AD-Source
                        title: machineidentityuserentitlements
                ownerChanges:
                  type: object
                  description: Changes to owners.
                  properties:
                    attributeName:
                      type: string
                      description: Name of the attribute that changed.
                      example: owners
                    added:
                      type: array
                      description: Owners that were added.
                      items:
                        type: object
                        description: Reference to an owner of the machine identity.
                        required:
                          - id
                          - name
                          - type
                        properties:
                          type:
                            type: string
                            description: Owner's type.
                            example: IDENTITY
                          id:
                            type: string
                            description: Owner ID.
                            example: 84d8c1b819144608b8b8bc3b84ddbb7b
                          name:
                            type: string
                            description: Owner's display name.
                            example: Jerrie admin3cf084
                          isPrimary:
                            type: boolean
                            description: Indicates if this owner is the primary owner.
                            default: false
                            example: true
                        additionalProperties: true
                        example:
                          type: IDENTITY
                          id: 84d8c1b819144608b8b8bc3b84ddbb7b
                          name: Jerrie admin3cf084
                          isPrimary: true
                        title: machineidentityownerreference
                    removed:
                      type: array
                      description: Owners that were removed.
                      items:
                        type: object
                        description: Reference to an owner of the machine identity.
                        required:
                          - id
                          - name
                          - type
                        properties:
                          type:
                            type: string
                            description: Owner's type.
                            example: IDENTITY
                          id:
                            type: string
                            description: Owner ID.
                            example: 84d8c1b819144608b8b8bc3b84ddbb7b
                          name:
                            type: string
                            description: Owner's display name.
                            example: Jerrie admin3cf084
                          isPrimary:
                            type: boolean
                            description: Indicates if this owner is the primary owner.
                            default: false
                            example: true
                        additionalProperties: true
                        example:
                          type: IDENTITY
                          id: 84d8c1b819144608b8b8bc3b84ddbb7b
                          name: Jerrie admin3cf084
                          isPrimary: true
                        title: machineidentityownerreference
                singleValueAttributeChanges:
                  type: array
                  description: Details about the single-value attribute changes that occurred.
                  nullable: true
                  items:
                    type: object
                    required:
                      - name
                      - oldValue
                      - newValue
                    properties:
                      name:
                        type: string
                        description: The name of the attribute that was changed.
                        example: displayName
                      oldValue:
                        description: The old value of the attribute before the change.
                        nullable: true
                        oneOf:
                          - type: string
                            example: Sample Old Value
                            title: string
                          - type: boolean
                            example: true
                            title: boolean
                          - type: number
                            example: 123456789
                            title: number
                          - type: array
                            title: array
                            items:
                              type: string
                              example:
                                - '001'
                                - '002'
                                - '003'
                            nullable: true
                        example: John Doe
                      newValue:
                        description: The new value of the attribute after the change.
                        nullable: true
                        oneOf:
                          - type: string
                            example: Sample New Value
                            title: string
                          - type: boolean
                            example: true
                            title: boolean
                          - type: number
                            example: 123456789
                            title: number
                          - type: array
                            title: array
                            items:
                              type: string
                              example:
                                - '001'
                                - '002'
                                - '003'
                            nullable: true
                        example: John A. Doe
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
