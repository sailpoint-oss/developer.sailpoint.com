## OpenAPI

```yaml POST /user_profile
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
  /user_profile:
    post:
      description: Create a user-profile contributor relationship
      operationId: submitUserProfile
      security:
        - userAuth: []
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              properties:
                user_profile:
                  type: object
                  properties:
                    user_id:
                      type: string
                      format: uuid
                    profile_id:
                      type: string
                      format: uuid
                    ne_attribute_id:
                      type: string
                      format: uuid
                    relationship_type:
                      type: string
                      enum:
                        - owner
                        - contributor
                  title: UserProfile
      responses:
        '200':
          description: Expected response to a valid request
          content:
            application/json:
              schema:
                type: object
                properties:
                  user_profile:
                    type: object
                    properties:
                      id:
                        type: string
                        format: uuid
                        readOnly: true
                      uid:
                        type: string
                        readOnly: true
                      user_id:
                        type: string
                        format: uuid
                      profile_id:
                        type: string
                        format: uuid
                      ne_attribute_id:
                        type: string
                        format: uuid
                      relationship_type:
                        type: string
                        enum:
                          - owner
                          - contributor
                    title: UserProfile-2
        '405':
          description: Invalid input
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
