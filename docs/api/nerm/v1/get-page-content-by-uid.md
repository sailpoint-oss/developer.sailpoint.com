## OpenAPI

```yaml GET /page_contents/{uid}
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
  /page_contents/{uid}:
    get:
      description: Info for a specific page content record by UID (user-specified identifier)
      operationId: getPageContentByUid
      security:
        - userAuth: []
      parameters:
        - name: uid
          in: path
          description: UID of the object to retrieve, update, or delete.  A UID or "specified identifier" is a string typically in "snake_case" format that provides a human-readable description of the record.  They are commonly used to ensure sandbox, qa, staging and production tenants have the identical configuration items loaded.  Every record has a UID assigned when persisted. When not specified the system assigns one by default.  A default value looks like a 32 character string of random hexadecimal characters.
          required: false
          schema:
            type: string
            format: snake_case
            example: middle_initial_attribute
      responses:
        '200':
          description: Expected response to a valid request
          content:
            application/json:
              schema:
                type: object
                properties:
                  page:
                    type: object
                    required:
                      - type
                    properties:
                      id:
                        type: string
                        format: uuid
                        readOnly: true
                        description: The id of the page content
                        example: ac4aae0b-4140-49a4-a84c-126762fd0c8f
                      uid:
                        type: string
                        description: The user-specified identifier for the record
                        example: first_text_body
                      type:
                        type: string
                        enum:
                          - FormHeading
                          - LargeHeading
                          - MediumHeading
                          - SmallHeading
                          - Paragraph
                          - HtmlContainer
                          - Owner
                          - RequestProgressBar
                        description: The type of content on the page.
                        example: MediumHeading
                      content:
                        type: string
                        description: The text content to present in this page content record.
                        example: Lorem Ipsum yadda yaddda bing bang.
                      created_at:
                        type: string
                        format: date-time
                        readOnly: true
                        description: The date-time the record created.
                        example: '2022-12-27T08:26:49.219717'
                      updated_at:
                        type: string
                        format: date-time
                        readOnly: true
                        description: The date-time the record was last updated.
                        example: '2022-12-27T08:26:49.219717'
                    title: PageContent
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
