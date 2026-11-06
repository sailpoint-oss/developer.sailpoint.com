## OpenAPI

```yaml GET /profile_types/{profile_type_id}/ne_attributes
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
  /profile_types/{profile_type_id}/ne_attributes:
    get:
      description: Get ne attributes and synced attribute relationship to profile type.
      operationId: getProfileTypeAttributes
      security:
        - userAuth: []
      parameters:
        - name: profile_type_id
          in: path
          description: Profile type ID of the object
          required: true
          schema:
            type: string
            format: uuid
            example: 1246d8b3-ac29-4015-8154-dea4434a73fa
        - name: active_filter
          in: query
          description: Filter for profile type synced attributes
          required: false
          schema:
            type: string
            enum:
              - synced
              - unsynced
              - all
            example: all
        - name: search
          in: query
          description: Filter by string
          required: false
          schema:
            type: string
            example: search
        - name: page
          in: query
          description: Pagination page number
          required: false
          schema:
            type: integer
            format: int32
            minimum: 1
            example: 5
        - name: page
          in: query
          description: Pagination items per page
          required: false
          schema:
            type: integer
            format: int32
            minimum: 1
            example: 5
        - name: sort
          in: query
          description: How records should be sorted
          required: false
          style: form
          explode: false
          schema:
            type: object
            example:
              attr: sync
              order: asc
            properties:
              attr:
                type: string
                example: sync
              order:
                type: string
                enum:
                  - asc
                  - desc
                example: asc
      responses:
        '200':
          description: Expected response to a valid request
          content:
            application/json:
              schema:
                type: object
                properties:
                  profile_type_attributes:
                    type: object
                    properties:
                      count:
                        type: integer
                        format: int32
                        description: How many ne attribute records exist
                        example: 5
                      records:
                        type: array
                        items:
                          type: object
                          required:
                            - label
                          properties:
                            id:
                              description: ID of ne attribute
                              type: string
                              format: uuid
                              readOnly: true
                              example: 1246d8b3-ac29-4015-8154-dea4434a73fa
                            uid:
                              description: Ne attribute's uid
                              type: string
                              readOnly: true
                              example: 1246d8b3-ac29-4015-8154-dea4434a73fa
                            label:
                              description: Ne attribute's label
                              type: string
                              readOnly: true
                              example: object
                            synced:
                              description: synced_attribute ID if there is one
                              type: string
                              format: uuid
                              example: 1246d8b3-ac29-4015-8154-dea4434a73fa
                          title: ProfileTypeAttribute
                    title: ProfileTypeAttributes
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
