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
        This event trigger fires when Identity Security Cloud (ISC) runs a health check on a virtual appliance (VA) cluster, and the cluster's health status is different from the previous health check, such as a change from healthy to unhealthy or the opposite.  VA cluster health checks run every 30 minutes. Users can use this trigger to monitor all their VA clusters' health status changes.
        These are some typical use cases for the trigger:
          * Create real-time health dashboards for VA clusters.
          * Notify an admin or system to take appropriate actions when a VA cluster's health status changes.

        This is a `FIRE_AND_FORGET` event trigger.  You can have a maximum of 50 subscriptions for this trigger. For more information about this event trigger, refer to [Source Created](https://developer.sailpoint.com/docs/extensibility/event-triggers/triggers/va-cluster-status-change).
      operationId: vaClusterStatusChangeEvent
      security:
        - userAuth:
            - sp:trigger-service-subscriptions:manage
      requestBody:
        required: true
        content:
          application/json:
            schema:
              title: VA Cluster Status Change Event
              type: object
              required:
                - created
                - type
                - application
                - healthCheckResult
                - previousHealthCheckResult
              properties:
                created:
                  type: string
                  format: date-time
                  description: The date and time the status change occurred.
                  example: '2020-06-29T22:01:50.474Z'
                type:
                  enum:
                    - SOURCE
                    - CLUSTER
                  description: The type of the object that initiated this event.
                  example: CLUSTER
                application:
                  type: object
                  description: Details about the `CLUSTER` or `SOURCE` that initiated this event.
                  required:
                    - id
                    - name
                    - attributes
                  properties:
                    id:
                      type: string
                      description: The GUID of the application
                      example: 2c9180866166b5b0016167c32ef31a66
                    name:
                      type: string
                      description: The name of the application
                      example: Production VA Cluster
                    attributes:
                      type: object
                      description: Custom map of attributes for a source.  This will only be populated if type is `SOURCE` and the source has a proxy.
                      additionalProperties: true
                      nullable: true
                      example: null
                healthCheckResult:
                  type: object
                  description: The results of the most recent health check.
                  required:
                    - message
                    - resultType
                    - status
                  properties:
                    message:
                      type: string
                      description: Detailed message of the result of the health check.
                      example: Test Connection failed with exception. Error message - java.lang Exception
                    resultType:
                      type: string
                      description: The type of the health check result.
                      example: SOURCE_STATE_ERROR_CLUSTER
                    status:
                      enum:
                        - Succeeded
                        - Failed
                      description: The status of the health check.
                      example: Succeeded
                previousHealthCheckResult:
                  type: object
                  description: The results of the last health check.
                  required:
                    - message
                    - resultType
                    - status
                  properties:
                    message:
                      type: string
                      description: Detailed message of the result of the health check.
                      example: Test Connection failed with exception. Error message - java.lang Exception
                    resultType:
                      type: string
                      description: The type of the health check result.
                      example: SOURCE_STATE_ERROR_CLUSTER
                    status:
                      enum:
                        - Succeeded
                        - Failed
                      description: The status of the health check.
                      example: Failed
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
