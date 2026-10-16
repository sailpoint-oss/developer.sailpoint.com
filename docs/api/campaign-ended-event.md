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
        This event trigger fires after a certification campaign ends.
        This is a `FIRE_AND_FORGET` event trigger.  You can have a maximum of 50 subscriptions for this trigger. For more information about this event trigger, refer to [Campaign Ended](https://developer.sailpoint.com/docs/extensibility/event-triggers/triggers/campaign-ended).
      operationId: campaignEndedEvent
      security:
        - userAuth:
            - sp:trigger-service-subscriptions:manage
      requestBody:
        required: true
        content:
          application/json:
            schema:
              title: Campaign Ended
              type: object
              required:
                - campaign
              properties:
                campaign:
                  type: object
                  description: Details about the certification campaign that ended.
                  required:
                    - id
                    - name
                    - description
                    - created
                    - deadline
                    - type
                    - campaignOwner
                    - status
                  properties:
                    id:
                      type: string
                      description: Unique ID for the campaign.
                      example: 2c91808576f886190176f88cac5a0010
                    name:
                      type: string
                      description: The human friendly name of the campaign.
                      example: Manager Access Campaign
                    description:
                      type: string
                      description: Extended description of the campaign.
                      example: Audit access for all employees.
                    created:
                      type: string
                      format: date-time
                      description: The date and time the campaign was created.
                      example: '2021-02-16T03:04:45.815Z'
                    modified:
                      nullable: true
                      type: string
                      format: date-time
                      description: The date and time the campaign was last modified.
                      example: '2021-03-16T03:06:45.815Z'
                    deadline:
                      type: string
                      format: date-time
                      description: The date and time the campaign is due.
                      example: '2021-03-16T03:04:45.815Z'
                    type:
                      description: The type of campaign.
                      enum:
                        - MANAGER
                        - SOURCE_OWNER
                        - SEARCH
                        - ROLE_COMPOSITION
                      example: MANAGER
                    campaignOwner:
                      type: object
                      description: Details of the identity that owns the campaign.
                      required:
                        - id
                        - displayName
                        - email
                      properties:
                        id:
                          type: string
                          description: The unique ID of the identity.
                          example: 37f080867702c1910177031320c40n27
                        displayName:
                          type: string
                          description: The human friendly name of the identity.
                          example: John Snow
                        email:
                          type: string
                          description: The primary email address of the identity.
                          example: john.snow@example.com
                    status:
                      enum:
                        - COMPLETED
                      description: The current status of the campaign.
                      example: COMPLETED
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
