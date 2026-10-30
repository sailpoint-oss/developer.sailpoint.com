## OpenAPI

```yaml GET /page_content_translations
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
  /page_content_translations:
    get:
      description: This endpoint can retrieve page content translation data.
      operationId: getPageContentTranslation
      security:
        - userAuth: []
      responses:
        '200':
          description: Expected response to a valid request
          content:
            application/json:
              schema:
                type: object
                properties:
                  page_content_translation:
                    type: object
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
                        example: page_content_transation_great_es_es
                      locale:
                        type: string
                        description: The language locale this translation contains.
                        example: es-ES
                      value:
                        type: string
                        description: The translated string to present in the user interface.
                        example: Es stupendo!
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
                    title: PageContentTranslation
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
