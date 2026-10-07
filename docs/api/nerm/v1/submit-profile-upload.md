## OpenAPI

```yaml POST /profiles/{id}/upload/{attribute_id}
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
  /profiles/{id}/upload/{attribute_id}:
    post:
      description: |
        Uploads a new attachment attribute value to a profile. The upload must be a FORM data type; this is not a JSON API. The upload must include the binary content of the payload under the 'file' named form element. The upload must not attempt to include the file name or its content type as a other form or JSON as parameters. The upload must not attempt to upload the file body as the POST body payload; it has to arrive as a FORM parameter. Do not use a `File/Binary` payload type for the POST operation in your API client.
      operationId: submitProfileUpload
      security:
        - userAuth: []
      parameters:
        - name: id
          in: path
          description: ID of the object to retrieve, update, or delete
          required: true
          schema:
            type: string
            format: uuid
            example: 1246d8b3-ac29-4015-8154-dea4434a73fa
        - name: attribute_id
          in: path
          description: The id of the attachment attribute
          required: true
          schema:
            type: string
            format: uuid
            example: 1246d8b3-ac29-4015-8154-dea4434a73fa
      requestBody:
        required: true
        content:
          multipart/form-data:
            schema:
              type: object
              properties:
                file:
                  type: string
                  format: binary
      responses:
        '200':
          description: Expected response to a valid request
          content:
            application/json:
              schema:
                type: object
                properties:
                  url:
                    type: string
                    format: url
                    readOnly: true
                title: Url
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
