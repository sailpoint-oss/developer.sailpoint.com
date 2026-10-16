## OpenAPI

```yaml GET /isc/accounts
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
  /isc/accounts:
    get:
      description: Retrieve schema-mapped profiles collection. It returns a collection of stored profiles, optionally using schema-mapped field names if requested.
      operationId: getSchemaMappedProfilesCollection
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
        - name: use_schema
          in: query
          description: The use_schema parameter returns schema-mapped field names in the Profiles API response when set to true.
          required: false
          schema:
            type: boolean
            default: false
            example: true
        - name: override_sync_toggle
          in: query
          description: The override_sync_toggle parameter returns all non-employee and assignment profiles regardless of the sync status when set to true.
          required: false
          schema:
            type: boolean
            default: false
            example: true
        - name: category
          in: query
          description: Filters profiles by profile type category
          required: false
          schema:
            type: string
            enum:
              - non-employee
              - assignment
            example: non-employee
        - name: status
          in: query
          description: The status of the profile. It can be multiple values with comma separated.
          required: false
          schema:
            type: string
            enum:
              - active
              - inactive
              - on leave
              - terminated
            example: active,on leave
      responses:
        '200':
          description: Expected response to a valid request
          content:
            application/json:
              schema:
                type: object
                properties:
                  profiles:
                    type: array
                    items:
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
                  _metadata:
                    type: object
                    properties:
                      limit:
                        type: integer
                        description: The maximum number of records to return in the search
                        example: /endpoint?limit=10
                        format: int32
                      offset:
                        type: integer
                        description: The number of records to skip before starting to return results.
                        example: /endpoint?offset=60
                        format: int32
                      total:
                        type: integer
                        description: The total number of records available matching the search criteria.
                        example: /endpoint?total=10
                        format: int32
                      next:
                        type: string
                        description: The ID of the first record in the next set of results
                        example: /endpoint?limit=10&offset=60
                      previous:
                        type: string
                        description: The ID of the last record in the previous set of results
                        example: /endpoint?limit=10&offset=40
                      after_id:
                        type: string
                        format: uuid
                        example: 4eaa719f-4312-4c5b-9264-d0eb04d4a02a
                        description: The ID from which the search will start, ignoring all records before it.
                    title: MetadataWithAfterId
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
