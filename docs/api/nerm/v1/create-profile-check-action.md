## OpenAPI

```yaml POST /workflow_actions/profile_check_actions
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
  /workflow_actions/profile_check_actions:
    post:
      description: Create a profile check action
      operationId: createProfileCheckAction
      security:
        - userAuth: []
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              properties:
                workflow_action:
                  type: object
                  required:
                    - workflow_id
                    - description
                  properties:
                    workflow_id:
                      type: string
                      format: uuid
                      description: The workflow the workflow action belongs to.
                      example: 33f072dd-13b4-41e1-8ea0-16f2a59b57c8
                    description:
                      type: string
                      description: The description of the workflow action.
                      example: Finds a profile based on selected attributes and values found in the session.
                    archived:
                      type: boolean
                      default: false
                      description: If the workflow action is archived or not.
                      example: false
                    ne_attribute_ids:
                      type: array
                      items:
                        type: string
                      description: An array of ne_attribute_ids.
                      example:
                        - 33f072dd-13b4-41e1-8ea0-16f2a59b57c8
                    handle_type:
                      type: string
                      enum:
                        - session
                        - attribute
                      description: The handle type for what should happen if an existing profile is found.
                      example: session
                    handle_id:
                      type: string
                      description: The handle id.  When handle type is session, this is the session id.
                      example: 33f072dd-13b4-41e1-8ea0-16f2a59b57c8
                  title: ProfileCheckAction
      responses:
        '200':
          description: Expected response to a valid request
          content:
            application/json:
              schema:
                type: object
                properties:
                  workflow_action:
                    type: object
                    required:
                      - workflow_id
                      - page_id
                    properties:
                      workflow_id:
                        type: string
                        format: uuid
                        description: The workflow the workflow action belongs to.
                        example: 33f072dd-13b4-41e1-8ea0-16f2a59b57c8
                      description:
                        type: string
                        description: The description of the workflow action.
                        example: Require approval from another user or a group of users with a specific role.
                      page_id:
                        type: string
                        format: uuid
                        description: The page the workflow action should render.
                        example: 33f072dd-13b4-41e1-8ea0-16f2a59b57c8
                      add_requester_as_owner:
                        type: boolean
                        default: true
                        description: If the requester should be added as the owner of the profile to be created.
                        example: true
                      email_attribute_id:
                        type: string
                        format: uuid
                        description: The attribute storing the email address for the workflow action.
                        example: 33f072dd-13b4-41e1-8ea0-16f2a59b57c8
                      email_addresses:
                        type: array
                        items:
                          type: string
                          format: text
                        description: The email addresses for the workflow action.
                        example:
                          - johndoe@gmail.com
                          - janedoe@gmail.com
                      new_status:
                        type: string
                        format: text
                        description: The new status for the Status Change workflow action.
                        example: Active, Inactive, On Leave, Terminated
                      archived:
                        type: boolean
                        default: false
                        description: If the workflow action is archived or not.
                        example: false
                      skippable:
                        type: boolean
                        default: false
                        description: If the workflow action is skippable or not.
                        example: false
                      requires_comment:
                        type: boolean
                        default: false
                        description: If the workflow action requires a comment or not.
                        example: false
                    title: WorkflowAction
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
