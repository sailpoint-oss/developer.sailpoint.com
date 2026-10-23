## OpenAPI

```yaml POST /advanced_search/run
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
  /advanced_search/run:
    post:
      description: Run an advanced search for profiles, without saving the query
      operationId: searchAdvancedSearch
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
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              properties:
                advanced_search:
                  type: object
                  properties:
                    label:
                      type: string
                    condition_rules_attributes:
                      type: array
                      items:
                        anyOf:
                          - type: object
                            required:
                              - type
                              - comparison_operator
                              - value
                            properties:
                              type:
                                type: string
                                enum:
                                  - ProfileTypeRule
                              comparison_operator:
                                type: string
                                enum:
                                  - '=='
                                  - '!='
                              value:
                                type: string
                                format: uuid
                            title: ProfileTypeRule-2
                          - type: object
                            required:
                              - type
                              - comparison_operator
                              - value
                            properties:
                              type:
                                type: string
                                enum:
                                  - ProfileStatusRule
                              comparison_operator:
                                type: string
                                enum:
                                  - '=='
                                  - '!='
                              value:
                                type: string
                                enum:
                                  - Active
                                  - Inactive
                                  - Leave of absence
                                  - Terminated
                            title: ProfileStatusRule-2
                          - type: object
                            required:
                              - type
                              - condition_object_type
                              - condition_object_id
                              - comparison_operator
                              - value
                            properties:
                              type:
                                type: string
                                enum:
                                  - ProfileAttributeRule
                              condition_object_type:
                                type: string
                                enum:
                                  - TextFieldAttribute
                                  - TextAreaAttribute
                              condition_object_id:
                                type: string
                                format: uuid
                              comparison_operator:
                                type: string
                                enum:
                                  - '=='
                                  - '!='
                                  - '>'
                                  - <
                                  - start_with?
                                  - end_with?
                                  - include?
                              value:
                                type: string
                                example: Some value
                            title: ProfileAttributeRuleString-2
                          - type: object
                            required:
                              - type
                              - condition_object_type
                              - value
                            properties:
                              type:
                                type: string
                                enum:
                                  - ProfileAttributeRule
                              condition_object_type:
                                type: string
                                enum:
                                  - DateAttribute
                              condition_object_id:
                                type: string
                                format: uuid
                              secondary_attribute_type:
                                type: string
                                enum:
                                  - DateAttribute
                              secondary_attribute_id:
                                type: string
                                format: uuid
                              comparison_operator:
                                type: string
                                enum:
                                  - '>'
                                  - <
                                  - after
                                  - before
                              value:
                                type: string
                                enum:
                                  - Today
                                  - <uid>
                              secondary_value:
                                type: string
                                enum:
                                  - after
                                  - before
                              tertiary_value:
                                type: string
                                example: 30
                            title: ProfileAttributeRuleDate-2
                          - type: object
                            required:
                              - type
                              - condition_object_type
                              - condition_object_id
                              - comparison_operator
                              - value
                            properties:
                              type:
                                type: string
                                enum:
                                  - ProfileAttributeRule
                              condition_object_type:
                                type: string
                                enum:
                                  - ProfileSelectAttribute
                                  - ProfileSearchAttribute
                                  - OwnerSelectAttribute
                                  - OwnerSearchAttribute
                                  - ContributorSelectAttribute
                                  - ContributorSearchAttribute
                              condition_object_id:
                                type: string
                                format: uuid
                              comparison_operator:
                                type: string
                                enum:
                                  - include?
                                  - exclude?
                              value:
                                type: string
                                format: uuid
                            title: ProfileAttributeRuleId-2
                          - type: object
                            required:
                              - type
                              - value
                              - secondary_value
                            properties:
                              type:
                                type: string
                                enum:
                                  - RiskRule
                              comparison_operator:
                                type: string
                                enum:
                                  - '=='
                                  - '>'
                                  - <
                              value:
                                type: string
                                summary: id of the Risk Level being compared against
                                format: uuid
                              secondary_value:
                                type: string
                                enum:
                                  - OverallRisk
                            title: RiskRule-2
                  title: AdvancedSearch-2
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
