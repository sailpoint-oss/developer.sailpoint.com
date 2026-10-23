## OpenAPI

```yaml POST /workflow_action_performers
openapi: 3.0.1
info:
  version: 1.0.0
  title: NERM API
  description: The NERM API accesss and modifies resources in your environment.
  license:
    name: MIT
servers:
  - url: https://{tenantName}.nonemployee.com/api
    variables:
      tenantName:
        default: acmeco
        description: Tenant name assigned to customer
paths:
  /workflow_action_performers:
    post:
      description: Create a workflow action performer for an existing workflow action
      operationId: createWorkflowActionPerformer
      security:
        - userAuth: []
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              properties:
                workflow_action_performers:
                  type: object
                  properties:
                    contributor_attribute_id:
                      type: string
                      format: uuid
                      description: Specify the id of the user attribute to perform the action.
                      example: e6905f25-489a-43cd-a758-bdacaf60dcab
                    contributors:
                      type: boolean
                      default: false
                      description: Set to true to allow profile contributor to perform the action.
                      example: true
                    contributors_manager_attribute_id:
                      type: string
                      format: uuid
                      description: Specify the id of the user attribute to perform the action.
                      example: e6905f25-489a-43cd-a758-bdacaf60dcab
                    owner:
                      type: boolean
                      default: false
                      description: Set to true to allow profile owner to perform the action.
                      example: true
                    profiles_contributors_attribute_id:
                      type: string
                      format: uuid
                      description: Specify the id of the profile attribute to perform the action.
                      example: e6905f25-489a-43cd-a758-bdacaf60dcab
                    requester:
                      type: boolean
                      default: false
                      description: Set to true to allow requester from the request to perform the action.
                      example: true
                    requesters_manager:
                      type: boolean
                      default: false
                      description: Set to true to allow the requester's manager from the request to perform the action.
                      example: true
                    workflow_action_id:
                      type: string
                      format: uuid
                      description: Specify the id of the workflow action you would like to create the workflow action performer/s for.
                      example: e6905f25-489a-43cd-a758-bdacaf60dcab
                  title: WorkflowActionPerformers
      responses:
        '200':
          description: Expected response to a valid request
          content:
            application/json:
              schema:
                type: object
                properties:
                  workflow_action_performer:
                    type: object
                    properties:
                      id:
                        type: string
                        format: uuid
                        description: The id of the workflow action performer that was created.
                        example: e6905f25-489a-43cd-a758-bdacaf60dcab
                      contributor_attribute_id:
                        type: string
                        format: uuid
                        description: The id of the user attribute to perform the action.
                        example: e6905f25-489a-43cd-a758-bdacaf60dcab
                      contributors:
                        type: boolean
                        default: false
                        description: Set to allow profile contributor to perform the action.
                        example: true
                      contributors_manager_attribute_id:
                        type: string
                        format: uuid
                        description: The id of the user attribute to perform the action.
                        example: e6905f25-489a-43cd-a758-bdacaf60dcab
                      owner:
                        type: boolean
                        default: false
                        description: Set to allow profile owner to perform the action.
                        example: true
                      profiles_contributors_attribute_id:
                        type: string
                        format: uuid
                        description: The id of the profile attribute to perform the action.
                        example: e6905f25-489a-43cd-a758-bdacaf60dcab
                      requester:
                        type: boolean
                        default: false
                        description: Set to allow requester from the request to perform the action.
                        example: true
                      requesters_manager:
                        type: boolean
                        default: false
                        description: Set to allow the requester's manager from the request to perform the action.
                        example: true
                      workflow_action_id:
                        type: string
                        format: uuid
                        description: The id of the workflow action.
                        example: e6905f25-489a-43cd-a758-bdacaf60dcab
                    title: WorkflowActionPerformers-2
        '400':
          description: Bad Request - unable to complete.
          content:
            application/json:
              schema:
                oneOf:
                  - type: object
                    properties:
                      error:
                        example: Invalid JSON syntax. Please check your syntax and try again.
                    title: InvalidJson
                  - type: object
                    properties:
                      error:
                        example: The <object> failed to create/update
                      errors:
                        example:
                          attribute: can't be blank
                    title: ValidationErrors
        '500':
          description: Internal Server Error - returned on unhandled exceptions.
          content:
            application/json:
              schema:
                type: object
                properties:
                  error:
                    description: A message describing the error
                    example: Sorry something went wrong
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
```
