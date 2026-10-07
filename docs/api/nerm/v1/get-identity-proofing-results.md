## OpenAPI

```yaml GET /identity_proofing_results
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
  /identity_proofing_results:
    get:
      description: Retrieves identity proofing result data in bulk from Lifecycle
      operationId: getIdentityProofingResults
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
        - name: profile_id
          in: query
          description: Profile ID to filter by
          required: false
          schema:
            type: string
            format: uuid
            example: 4e480441-451d-47d9-87c2-9a0f0fe135eb
        - name: workflow_session_id
          in: query
          description: Workflow Session ID to filter by
          required: false
          schema:
            type: string
            format: uuid
            example: c5e1dd38-7e29-464f-a0da-0c0d886d022a
        - name: result
          in: query
          description: ID Proofing Result to filter by
          required: false
          schema:
            type: string
            enum:
              - pass
              - fail
            example: pass
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
                  identity_proofing_results:
                    type: array
                    items:
                      type: object
                      properties:
                        id:
                          type: string
                          format: uuid
                          readOnly: true
                        identity_proofing_action_id:
                          type: string
                          format: uuid
                        workflow_session_id:
                          type: string
                          format: uuid
                        profile_id:
                          type: string
                          format: uuid
                        proofing_workflow:
                          type: string
                          format: uuid
                        result:
                          type: string
                          enum:
                            - pending
                            - pass
                            - fail
                        proofing_attributes:
                          type: object
                          additionalProperties:
                            type: string
                          example:
                            result: approve
                        created_at:
                          type: string
                          format: date-time
                        updated_at:
                          type: string
                          format: date-time
                      title: IdentityProofingResult
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
