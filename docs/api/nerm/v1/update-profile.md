## OpenAPI

```yaml PATCH /isc/accounts/{id}
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
  /isc/accounts/{id}:
    patch:
      description: Updates a profile only through ISC schema-mapped attributes, performs a reverse mapping to match the NERM attributes to update.
      operationId: updateProfile
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
      requestBody:
        content:
          application/json:
            schema:
              type: object
              required:
                - profile
              properties:
                profile:
                  type: object
                  description: The profile object to be updated with its schema-mapped attributes.
                  properties:
                    attributes:
                      type: object
                      description: schema-mapped attributes to be updated
                      additionalProperties: true
                  example:
                    attributes:
                      First Name: John
                      Last Name: Doe
                      Email: john.doe@sailpoint.com
      responses:
        '200':
          description: Expected response to a valid request
          content:
            application/json:
              schema:
                type: object
                properties:
                  profile:
                    type: object
                    properties:
                      id:
                        type: string
                        format: uuid
                        readOnly: true
                        description: The objects ID
                        example: 33f072dd-13b4-41e1-8ea0-16f2a59b57c8
                      uid:
                        type: string
                        readOnly: true
                        description: The objects UID
                        example: profileUid
                      name:
                        type: string
                        description: This is the name of the profile.
                        example: Profile Name
                      profile_type_id:
                        type: string
                        format: uuid
                        description: This is the ID of the profile type the profile belongs to
                        example: 33f072dd-13b4-41e1-8ea0-16f2a59b57c8
                      status:
                        type: string
                        enum:
                          - Active
                          - Inactive
                          - On Leave
                          - Terminated
                        description: This is the status of the profile
                        example: Active
                      id_proofing_status:
                        type: string
                        enum:
                          - pending
                          - pass
                          - fail
                        description: This is the ID proofing staus of the profile
                        example: pending
                      created_at:
                        type: string
                        format: date-time
                        description: The date and time the profile was created
                        example: '2023-11-21T14:23:54.256-05:00'
                      updated_at:
                        type: string
                        format: date-time
                        description: The date and time the profile was updated
                        example: '2023-11-21T14:23:54.256-05:00'
                      attributes:
                        type: object
                        additionalProperties:
                          type: string
                        description: Attributes that belong to this profile.
                        example:
                          Non-Employee Profile ID: The Non-Employee Profile ID (will be returned for assignments, to be used during correlation configuration)
                          text_attribute_uid: static text
                          date_attribute_uid: 01/15/2020
                          profile_select_attribute_uid: Profile Name
                          profile_search_attribute_uid: Profile Name
                          multiple_profile_search_attribute_uid: Profile Name,Second Profile Name,Third Profile Name
                          multiple_profile_select_attribute_uid: Profile Name,Second Profile Name,Third Profile Name
                          contributor_select_attribute_uid: User Name (user_email@test.com)
                          contributor_search_attribute_uid: User Name (user_email@test.com)
                          multiple_contributor_search_attribute_uid: User Name (user_email@test.com),Second User Name (user_email@test.com),Third User Name (user_email@test.com)
                          owner_select_attribute_uid: User Name (user_email@test.com)
                          owner_search_attribute_uid: User Name (user_email@test.com)
                          dropdown_attribute_uid: yes, no
                          tags_attribute_uid: yes, no
                          checkbox_attribute_uid: yes, no
                          text_area_uid: static text
                          radio_attribute_uid: yes, no
                    title: Profile
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
