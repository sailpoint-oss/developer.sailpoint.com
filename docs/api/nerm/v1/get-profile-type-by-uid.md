## OpenAPI

```yaml GET /profile_types/{uid}
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
  /profile_types/{uid}:
    get:
      description: Find profile type by UID (user-specified identifier)
      operationId: getProfileTypeByUid
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
                  profile_type:
                    type: object
                    properties:
                      id:
                        type: string
                        format: uuid
                        readOnly: true
                        description: The objects ID.
                        example: 33f072dd-13b4-41e1-8ea0-16f2a59b57c8
                      uid:
                        type: string
                        readOnly: true
                        description: The objects UID.
                        example: ptUid
                      name:
                        type: string
                        description: This is the name of the profile type.
                        example: Worker
                      category:
                        type: string
                        enum:
                          - employee
                          - non-employee
                          - organization
                          - assignment
                          - other
                        description: This is the category the profile type falls into.
                        example: employee
                      bypass_dup_protection:
                        type: boolean
                        description: Whether or not duplication protection is bypassed.
                        example: false
                      archived:
                        type: boolean
                        description: Whether or not the profile type is archived.
                        example: false
                      permitted_role_ids:
                        type: array
                        items:
                          type: string
                          format: uuid
                        description: The role ids that are permitted for this profile type.
                        example:
                          - 33f072dd-13b4-41e1-8ea0-16f2a59b57c8
                      isc_synced:
                        type: boolean
                        description: Is this profile type synced with ics
                        example: false
                      profile_type_dup_attributes:
                        type: array
                        items:
                          type: object
                          properties:
                            id:
                              type: string
                              format: uuid
                              description: The ID of the properties that are used for duplication protection.
                              example: 33f072dd-13b4-41e1-8ea0-16f2a59b57c8
                            uid:
                              type: string
                              description: The user-specified identifier of the properties that are used for duplication protection.
                              example: attribute-uid
                            profile_type_id:
                              type: string
                              format: uuid
                              description: The ID of the profile type.
                              example: 33f072dd-13b4-41e1-8ea0-16f2a59b57c8
                            ne_attribute_id:
                              type: string
                              format: uuid
                              description: The ID of the ne attribute.
                              example: 33f072dd-13b4-41e1-8ea0-16f2a59b57c8
                      profile_type_namings:
                        type: array
                        items:
                          type: object
                          properties:
                            id:
                              type: string
                              format: uuid
                              description: The ID of the profile type naming.
                              example: 33f072dd-13b4-41e1-8ea0-16f2a59b57c8
                            uid:
                              type: string
                              description: The user-specified identifier of the profile type naming.
                              example: profile-type-name
                            profile_type_id:
                              type: string
                              format: uuid
                              description: The ID of the associated profile type.
                              example: 33f072dd-13b4-41e1-8ea0-16f2a59b57c8
                            ne_attribute_id:
                              type: string
                              format: uuid
                              description: The ID of the associated ne attribute.
                              example: 33f072dd-13b4-41e1-8ea0-16f2a59b57c8
                            order:
                              type: integer
                              minimum: 0
                              description: The order that the namings are used in.
                              example: 0
                    title: ProfileType-2
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
