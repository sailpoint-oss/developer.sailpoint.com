## OpenAPI

```yaml DELETE /page_elements/{id}
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
  /page_elements/{id}:
    delete:
      description: Delete page element by id
      operationId: deletePageElementById
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
      responses:
        '200':
          description: Expected response to a valid request
          content:
            application/json:
              schema:
                type: object
                properties:
                  page_element:
                    type: object
                    required:
                      - element_type
                    properties:
                      id:
                        type: string
                        format: uuid
                        readOnly: true
                        description: The id of the page element
                        example: ac4aae0b-4140-49a4-a84c-126762fd0c8f
                      uid:
                        type: string
                        description: The user-specified identifier for the record
                        example: first_text_body
                      element_type:
                        type: string
                        enum:
                          - PageContent
                          - Form
                        description: The type of content on the page.
                        example: PageContent
                      page_uid:
                        type: string
                        format: uuid
                        description: The user-specified identifier of the page record this applies to; one of page_id or page_uid must be present.
                        example: some_page_content
                      page_id:
                        type: string
                        format: uuid
                        description: The id of the page record this applies to; one of page_id or page_uid must be present.
                        example: ef5d413f-ba18-49e6-9a72-bb115aa133ff
                      element_uid:
                        type: string
                        format: uuid
                        description: The user-specified identifier of the record (Form or PageContent) this applies to; one of element_id or element_uid must be present.
                        example: some_page_content
                      element_id:
                        type: string
                        format: uuid
                        description: The id of the record (Form or PageContent) this applies to; one of element_id or element_uid must be present.
                        example: ef5d413f-ba18-49e6-9a72-bb115aa133ff
                      order:
                        type: integer
                        format: int32
                        description: The position of the attribute in the ProfileType's naming
                        example: 1
                    title: PageElement
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
