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
        This event trigger fires after a user has submitted a [custom form](https://documentation.sailpoint.com/saas/help/forms/index.html) in Identity Security Cloud (ISC).
        A typical use case for this trigger is to immediately take actions based on the data in the submitted form.
        This is a `FIRE_AND_FORGET` event trigger.  You can have a maximum of 50 subscriptions for this trigger. For more information about this event trigger, refer to [Form Submitted](https://developer.sailpoint.com/docs/extensibility/event-triggers/triggers/form-submitted).
      operationId: formSubmittedEvent
      security:
        - userAuth:
            - sp:trigger-service-subscriptions:manage
      requestBody:
        required: true
        content:
          application/json:
            schema:
              title: Form Submitted
              type: object
              required:
                - submittedAt
                - tenantId
                - formInstanceId
                - formDefinitionId
                - name
                - createdBy
                - submittedBy
                - formData
              properties:
                submittedAt:
                  type: string
                  format: date-time
                  description: Date and time when the user submitted the form.
                  example: '2020-06-29T22:01:50.474Z'
                tenantId:
                  type: string
                  description: ISC tenant's unique identifier.
                  example: 2c9180845d1edece015d27a9717c3e19
                formInstanceId:
                  type: string
                  description: Form instance's unique identifier.
                  example: 2c9180835d2e5168015d32f890ca1582
                formDefinitionId:
                  type: string
                  description: Form definition's unique identifier.
                  example: 2c9180835d2e5168015d32f890ca1581
                name:
                  type: string
                  description: Form's name.
                  example: Open Service Request
                createdBy:
                  type: object
                  description: Origin of the form creation.
                  required:
                    - type
                    - id
                  properties:
                    type:
                      type: string
                      description: Form creation origin's type.
                      enum:
                        - WORKFLOW_EXECUTION
                        - SOURCE
                      example: WORKFLOW_EXECUTION
                    id:
                      type: string
                      description: Unique identifier of the origin of the form creation.
                      example: 2c9180845d1edece015d27a9717c3e19
                submittedBy:
                  type: object
                  description: Identity who submitted the form.
                  required:
                    - type
                    - id
                    - name
                  properties:
                    type:
                      type: string
                      description: DTO type of the identity who submitted the form.
                      enum:
                        - IDENTITY
                      example: IDENTITY
                    id:
                      type: string
                      description: Unique identifier of the identity who submitted the form.
                      example: 2c9180845d1edece015d27a9717c3e19
                    name:
                      type: string
                      description: Name of the identity who submitted the form.
                      example: Rob.Robertson
                formData:
                  type: object
                  description: Data in the submitted form.
                  nullable: true
                  additionalProperties: true
                  example:
                    department: IT
                    requestType: New Laptop
                    laptop: New Laptop type for Engineer
                    comments: My laptop is running slowly, and I need to get a shiny new laptop to get my work done. Thanks!
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
