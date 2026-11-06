## OpenAPI

```yaml GET /risk_levels
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
  /risk_levels:
    get:
      description: This endpoint can retrieve risk level data in bulk from Lifecycle
      operationId: getRiskLevels
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
        - name: label
          in: query
          description: The attribute label to filter by
          required: false
          schema:
            type: string
            example: birthday
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
                  risk_levels:
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
                        label:
                          type: string
                        points:
                          type: number
                          multipleOf: 0.01
                        order:
                          type: integer
                          minimum: 0
                      title: RiskLevel
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
