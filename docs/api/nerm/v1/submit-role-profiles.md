## OpenAPI

```yaml POST /role_profiles
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
  /role_profiles:
    post:
      description: Create multiple role-profile contributor relationships
      operationId: submitRoleProfiles
      security:
        - userAuth: []
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              properties:
                role_profiles:
                  type: array
                  items:
                    type: object
                    properties:
                      role_id:
                        type: string
                        format: uuid
                      profile_id:
                        type: string
                        format: uuid
                    title: RoleProfile
      responses:
        '200':
          description: Expected response to a valid request
          content:
            application/json:
              schema:
                oneOf:
                  - type: object
                    properties:
                      role_profiles:
                        type: array
                        items:
                          type: object
                          properties:
                            id:
                              type: string
                              format: uuid
                              readOnly: true
                            uid:
                              type: string
                              readOnly: true
                            role_id:
                              type: string
                              format: uuid
                            profile_id:
                              type: string
                              format: uuid
                          title: RoleProfile-2
                    title: RoleProfiles
                  - type: object
                    properties:
                      info:
                        type: string
                        example: job has started
                      job_status:
                        type: object
                        properties:
                          job_id:
                            type: string
                            example: 3ce88e47ad6dba2ddf349d21
                          status:
                            type: string
                            example: queued
                      status:
                        type: integer
                        example: 200
                    title: Job
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
