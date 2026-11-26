## OpenAPI

```yaml GET /advanced_search
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
  /advanced_search:
    get:
      description: Get saved advanced search queries
      operationId: getAdvancedSearch
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
                  advanced_search:
                    type: array
                    items:
                      type: object
                      properties:
                        id:
                          type: string
                          format: uuid
                          readOnly: true
                        uid:
                          type: string
                          readOnly: true
                        label:
                          type: string
                        condition_rules_attributes:
                          type: array
                          items:
                            anyOf:
                              - type: object
                                required:
                                  - type
                                properties:
                                  id:
                                    type: string
                                    format: uuid
                                    readOnly: true
                                  uid:
                                    type: string
                                    readOnly: true
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
                                title: ProfileTypeRule
                              - type: object
                                required:
                                  - type
                                properties:
                                  id:
                                    type: string
                                    format: uuid
                                    readOnly: true
                                  uid:
                                    type: string
                                    readOnly: true
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
                                title: ProfileStatusRule
                              - type: object
                                required:
                                  - type
                                  - condition_object_type
                                  - condition_object_id
                                  - comparison_operator
                                  - value
                                properties:
                                  id:
                                    type: string
                                    format: uuid
                                    readOnly: true
                                  uid:
                                    type: string
                                    readOnly: true
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
                                title: ProfileAttributeRuleString
                              - type: object
                                required:
                                  - type
                                  - condition_object_type
                                  - value
                                properties:
                                  id:
                                    type: string
                                    format: uuid
                                    readOnly: true
                                  uid:
                                    type: string
                                    readOnly: true
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
                                title: ProfileAttributeRuleDate
                              - type: object
                                required:
                                  - type
                                  - condition_object_type
                                  - condition_object_id
                                  - comparison_operator
                                  - value
                                properties:
                                  id:
                                    type: string
                                    format: uuid
                                    readOnly: true
                                  uid:
                                    type: string
                                    readOnly: true
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
                                title: ProfileAttributeRuleId
                              - type: object
                                required:
                                  - type
                                  - value
                                  - secondary_value
                                properties:
                                  id:
                                    type: string
                                    format: uuid
                                    readOnly: true
                                  uid:
                                    type: string
                                    readOnly: true
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
                                title: RiskRule
                      title: AdvancedSearch
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
