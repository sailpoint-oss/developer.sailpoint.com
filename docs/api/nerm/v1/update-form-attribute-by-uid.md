## OpenAPI

```yaml PATCH /form_attributes/{uid}
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
  /form_attributes/{uid}:
    patch:
      description: Update info for a specific form attribute by UID
      operationId: updateFormAttributeByUid
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
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              properties:
                form_attribute:
                  type: object
                  properties:
                    form_id:
                      type: string
                      description: The id of the form
                      example: ac4aae0b-4140-49a4-a84c-126762fd0c8f
                    ne_attribute_id:
                      type: string
                      example: ac4aae0b-4140-49a4-a84c-126762fd0c8f
                      description: The id of the attribute
                    attr_type:
                      type: string
                      example: ne_attribute
                      description: The attribute type
                      enum:
                        - ne_attribute
                        - break
                    order:
                      type: integer
                      format: int32
                      example: 1
                      description: The ordinal position of the attribute on the Form.  The order value determines the order or sequence the Form values are presented in the user interface. Each FormAttribute on a Form must have a unique order value. Order valuess can start at zero (0), but often start at one (1). The FormAttribute with order 1 is presented before the FormAttribute with order 2, and so on. Gaps in the order can exist and the system ignores them.
                  title: FormAttribute-2
      responses:
        '200':
          description: Expected response to a valid request
          content:
            application/json:
              schema:
                type: object
                properties:
                  form_attribute:
                    type: object
                    properties:
                      form_id:
                        type: string
                        description: The id of the form
                        example: ac4aae0b-4140-49a4-a84c-126762fd0c8f
                      ne_attribute_id:
                        type: string
                        example: ac4aae0b-4140-49a4-a84c-126762fd0c8f
                        description: The id of the attribute
                      attr_type:
                        type: string
                        example: ne_attribute
                        description: The attribute type
                        enum:
                          - ne_attribute
                          - break
                      order:
                        type: integer
                        format: int32
                        example: 1
                        description: The ordinal position of the attribute on the Form.  The order value determines the order or sequence the Form values are presented in the user interface. Each FormAttribute on a Form must have a unique order value. Order valuess can start at zero (0), but often start at one (1). The FormAttribute with order 1 is presented before the FormAttribute with order 2, and so on. Gaps in the order can exist and the system ignores them.
                      id:
                        type: string
                        example: ac4aae0b-4140-49a4-a84c-126762fd0c8f
                        description: The id of the form attribute
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
                    title: FormAttribute
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
        '404':
          description: Record Not Found
          content:
            application/json:
              schema:
                type: object
                properties:
                  error:
                    description: The requested record, either ID or UID, was not found
                    example: The requested Profile was not found
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
