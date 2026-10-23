## OpenAPI

```yaml POST /profile_type_roles
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
  /profile_type_roles:
    post:
      description: This endpoint can create a profile type role. NOTE- The ability to toggle Allow/Block is done through the Profile Type
      operationId: createProfileTypeRole
      security:
        - userAuth: []
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              properties:
                profile_type_role:
                  type: object
                  properties:
                    profile_type_id:
                      type: string
                      description: The id of the profile type
                      example: 2eb5773f-2486-452f-bdb3-796133b30862
                    role_id:
                      type: string
                      description: The id of the role
                      example: 2eb5773f-2486-452f-bdb3-796133b30862
                  title: ProfileTypeRoles
      responses:
        '200':
          description: Expected response to a valid request
          content:
            application/json:
              schema:
                type: object
                properties:
                  profile_type_roles:
                    type: object
                    properties:
                      profile_type_id:
                        type: string
                        description: The id of the profile type
                        example: 2eb5773f-2486-452f-bdb3-796133b30862
                      role_id:
                        type: string
                        description: The id of the role
                        example: 2eb5773f-2486-452f-bdb3-796133b30862
                      id:
                        type: string
                        description: The id of the profile type role
                        example: 2e06b876-f456-473d-bd65-b6435e0b6b2d
                    title: ProfileTypeRoles-2
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
