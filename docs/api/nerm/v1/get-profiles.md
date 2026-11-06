## OpenAPI

```yaml GET /profiles
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
  /profiles:
    get:
      description: Get profiles
      operationId: getProfiles
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
        - name: exclude_attributes
          in: query
          description: Allows for optimization by not returning the associated attribute data for the returned profiles
          required: false
          schema:
            type: boolean
            default: false
            example: false
        - name: name
          in: query
          description: object name for filtering
          required: false
          schema:
            type: string
            example: name
        - name: profile_type_id
          in: query
          description: Profile Type ID for filtering
          required: false
          schema:
            type: string
            format: uuid
            example: 79ed1cb6-9977-4965-9bfe-f2bcc242523e
        - name: status
          in: query
          description: status value for filtering
          required: false
          schema:
            type: string
            enum:
              - Active
              - Inactive
              - On Leave
              - Terminated
            example: Active
        - name: metadata
          in: query
          description: Returns batching metadata in the response. This includes `total` as the total quantity, `next` as the path of the following query url, `limit` and `after_id` (if requested) with the next following id (null if it is the last "page").
          required: false
          schema:
            type: boolean
            default: false
            example: true
        - name: after_id
          in: query
          description: Represents the ID where the query should begin from. If blank, it represents the first ID. When used, forces sorting by ID ascending and does not allow use of `offset`. When `after_id` is specified it changes the mode of the API such that any filter parameters other than `profile_type_id`, `limit`, and `offset` are not supported and will be either silently ignored or result in an HTTP 400 error. For example you can not include an `after_id` along with an `archived=false` in the same request. Can be used alongside `metadata` parameter.
          required: false
          schema:
            type: string
            format: uuid
            example: 4eaa719f-4312-4c5b-9264-d0eb04d4a02a
        - name: updated_after
          in: query
          description: Adds support for filtering profiles based on the date of the latest modification made on them. Can be used alongside the after_id parameter.
          required: false
          schema:
            type: string
            format: date
            example: '2025-05-05'
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
