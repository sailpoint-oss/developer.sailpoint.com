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
        This event trigger fires after a source aggregation has either succeeded or failed in collecting source accounts but before Identity Security Cloud (ISC) processes the aggregation.
        This is a `FIRE_AND_FORGET` event trigger.  You can have a maximum of 50 subscriptions for this trigger. For more information about this event trigger, refer to [Account Aggregation Completed](https://developer.sailpoint.com/docs/extensibility/event-triggers/triggers/account-aggregation-completed).
      operationId: accountAggregationCompletedEvent
      security:
        - userAuth:
            - sp:trigger-service-subscriptions:manage
      requestBody:
        required: true
        content:
          application/json:
            schema:
              title: Account Aggregation Completed
              type: object
              required:
                - source
                - status
                - started
                - completed
                - errors
                - warnings
                - stats
              properties:
                source:
                  required:
                    - type
                    - name
                    - id
                  type: object
                  description: The source the accounts are being aggregated from.
                  properties:
                    type:
                      type: string
                      description: The DTO type of the source the accounts are being aggregated from.
                      enum:
                        - SOURCE
                      example: SOURCE
                    id:
                      type: string
                      description: The ID of the source the accounts are being aggregated from.
                      example: 2c9180835d191a86015d28455b4b232a
                    name:
                      type: string
                      description: Display name of the source the accounts are being aggregated from.
                      example: HR Active Directory
                status:
                  description: The overall status of the aggregation.
                  enum:
                    - Success
                    - Failed
                    - Terminated
                  example: Success
                started:
                  type: string
                  format: date-time
                  description: The date and time when the account aggregation started.
                  example: '2020-06-29T22:01:50.474Z'
                completed:
                  type: string
                  format: date-time
                  description: The date and time when the account aggregation finished.
                  example: '2020-06-29T22:02:04.090Z'
                errors:
                  nullable: true
                  description: A list of errors that occurred during the aggregation.
                  type: array
                  items:
                    type: string
                    description: A descriptive error message.
                    example: Accounts unable to be aggregated.
                warnings:
                  nullable: true
                  description: A list of warnings that occurred during the aggregation.
                  type: array
                  items:
                    type: string
                    description: A descriptive warning message.
                    example: Account Skipped
                stats:
                  type: object
                  description: Overall statistics about the account aggregation.
                  required:
                    - scanned
                    - unchanged
                    - changed
                    - added
                    - removed
                  properties:
                    scanned:
                      type: integer
                      format: int32
                      minimum: 0
                      maximum: 2147483647
                      description: The number of accounts which were scanned / iterated over.
                      example: 200
                    unchanged:
                      type: integer
                      format: int32
                      minimum: 0
                      maximum: 2147483647
                      description: The number of accounts which existed before, but had no changes.
                      example: 190
                    changed:
                      type: integer
                      format: int32
                      minimum: 0
                      maximum: 2147483647
                      description: The number of accounts which existed before, but had changes.
                      example: 6
                    added:
                      type: integer
                      format: int32
                      minimum: 0
                      maximum: 2147483647
                      description: The number of accounts which are new - have not existed before.
                      example: 4
                    removed:
                      type: integer
                      minimum: 0
                      maximum: 2147483647
                      format: int32
                      description: The number accounts which existed before, but no longer exist (thus getting removed).
                      example: 3
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
