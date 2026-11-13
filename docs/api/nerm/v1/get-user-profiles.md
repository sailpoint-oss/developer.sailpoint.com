## OpenAPI

```yaml GET /user_profiles
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
  /user_profiles:
    get:
      description: Get user-profile contributor relationships
      operationId: getUserProfiles
      security:
        - userAuth: []
      parameters:
        - name: limit
          in: query
          description: The maximum number of items to return.
          required: false
          schema:
            type: integer
            format: int32
            minimum: 1
            example: 5
        - name: offset
          in: query
          description: The number of items to skip before starting to collect the result set.
          required: false
          schema:
            type: integer
            format: int32
            minimum: 1
            example: 5
        - name: order
          in: query
          description: The field to order results by.
          required: false
          schema:
            type: string
            example: created_at
        - name: user_id
          in: query
          description: The ID of a user for filtering
          required: false
          schema:
            type: string
            format: uuid
            example: bba9cfb2-96c1-4acb-ac79-a21732527265
        - name: ne_attribute_id
          in: query
          description: ID of an attribute for filtering
          required: false
          schema:
            type: string
            format: uuid
            example: 33f072dd-13b4-41e1-8ea0-16f2a59b57c8
        - name: profile_id
          in: query
          description: Profile ID to filter by
          required: false
          schema:
            type: string
            format: uuid
            example: 4e480441-451d-47d9-87c2-9a0f0fe135eb
        - name: relationship_type
          in: query
          description: Type of user contributor relationship to filter by
          required: false
          schema:
            type: string
            enum:
              - owner
              - contributor
            example: contributor
        - name: metadata
          in: query
          description: Returns batching metadata in the response. This includes `total` as the total quantity, `next` as the path of the following query url, `limit` and `after_id` (if requested) with the next following id (null if it is the last "page").
          required: false
          schema:
            type: boolean
            default: false
            example: true
      responses:
        '200':
          description: Expected response to a valid request
          content:
            application/json:
              schema:
                type: object
                properties:
                  user_profiles:
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
                  _metadata:
                    type: object
                    properties:
                      limit:
                        type: integer
                      offset:
                        type: integer
                      total:
                        type: integer
                      next:
                        type: string
                        example: /endpoint?limit=10&offset=60
                      previous:
                        type: string
                        example: /endpoint?limit=10&offset=40
                    title: Metadata
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
