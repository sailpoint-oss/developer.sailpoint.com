## OpenAPI

```yaml GET /delegations
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
  /delegations:
    get:
      description: Returns a list of delegation records, optionally filtered by delegate, delegator, or expiration status.
      security:
        - userAuth: []
      parameters:
        - name: delegate_id
          in: query
          description: Filter by delegate ID
          required: false
          schema:
            type: string
            default: false
            example: ac4aae0b-4140-49a4-a84c-126762fd0c8f
        - name: delegator_id
          in: query
          description: Filter by delegator ID
          required: false
          schema:
            type: string
            default: false
            example: ac4aae0b-4140-49a4-a84c-126762fd0c8f
        - name: expired
          in: query
          description: Filter by expiration status (true for expired, false for not expired)
          required: false
          schema:
            type: boolean
            default: false
            example: true
        - name: metadata
          in: query
          description: Returns batching metadata in the response. This includes `total` as the total quantity, `next` as the path of the following query url, `limit` and `after_id` (if requested) with the next following id (null if it is the last "page").
          required: false
          schema:
            type: boolean
            default: false
            example: true
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
      responses:
        '200':
          description: Expected response to a valid request
          content:
            application/json:
              schema:
                type: object
                properties:
                  delegations:
                    type: array
                    items:
                      type: object
                      properties:
                        id:
                          type: string
                          description: The id of the delegation
                          example: ac4aae0b-4140-49a4-a84c-126762fd0c8f
                        delegator_id:
                          description: The id of the delegator user
                          example: 12345678-1234-5678-1234-123456789012
                        delegate_id:
                          description: The id of the delegate user
                          example: 87654321-4321-6789-4321-210987654321
                        expiration:
                          type: string
                          format: date-time
                          description: The expiration date of the delegation
                          example: '2023-10-01T12:00:00Z'
                        expired:
                          type: boolean
                          description: Indicates if the delegation is expired
                          example: false
                        created_at:
                          type: string
                          format: date-time
                          readOnly: true
                          description: The date-time the record created.
                          example: '2022-12-27 08:26:49.219717'
                        updated_at:
                          type: string
                          format: date-time
                          readOnly: true
                          description: The date-time the record was last updated.
                          example: '2022-12-27 08:26:49.219717'
                      title: Delegation
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
