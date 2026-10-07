## OpenAPI

```yaml GET /role-mining-sessions/v1/{sessionId}/potential-role-summaries/{potentialRoleId}
openapi: 3.0.1
info:
  title: Identity Security Cloud API
  description: Use these APIs to interact with the Identity Security Cloud platform to achieve repeatable, automated processes with greater scalability. We encourage you to join the SailPoint Developer Community forum at https://developer.sailpoint.com/discuss to connect with other developers using our APIs.
  termsOfService: https://developer.sailpoint.com/discuss/tos
  contact:
    name: Developer Relations
    url: https://developer.sailpoint.com/discuss/api-help
  license:
    name: MIT
    url: https://opensource.org/licenses/MIT
  version: v1
servers:
  - url: https://{tenant}.api.identitynow.com
    description: This is the production API server.
    variables:
      tenant:
        default: sailpoint
        description: This is the name of your tenant, typically your company's name.
  - url: https://{apiUrl}
    description: This is the versioned API server.
    variables:
      apiUrl:
        default: sailpoint.api.identitynow.com
        description: This is the api url of your tenant
paths:
  /role-mining-sessions/v1/{sessionId}/potential-role-summaries/{potentialRoleId}:
    get:
      description: This method returns a specific potential role for a role mining session.
      operationId: getPotentialRoleV1
      security:
        - userAuth:
            - iai:access-modeling:read
            - iai:access-modeling:manage
        - applicationAuth:
            - iai:access-modeling:read
            - iai:access-modeling:manage
      parameters:
        - in: path
          name: sessionId
          schema:
            type: string
          required: true
          x-sailpoint-resource-operation-id: getRoleMiningSessionsV1
          description: The role mining session id
          example: 8c190e67-87aa-4ed9-a90b-d9d5344523fb
        - in: path
          name: potentialRoleId
          schema:
            type: string
          required: true
          x-sailpoint-resource-operation-id: getPotentialRoleSummariesV1
          description: A potential role id in a role mining session
          example: 8c190e67-87aa-4ed9-a90b-d9d5344523fb
        - name: X-SailPoint-Experimental
          in: header
          description: Use this header to enable this experimental API.
          example: true
          schema:
            type: string
            default: true
          required: true
      responses:
        '200':
          description: Succeeded. Returns a list of potential roles for a role mining session.
          content:
            application/json:
              schema:
                type: object
                title: Role Mining Potential Role
                properties:
                  createdBy:
                    oneOf:
                      - type: object
                        properties:
                          id:
                            type: string
                            description: ID of the creator
                            example: 2c918090761a5aac0176215c46a62d58
                          displayName:
                            type: string
                            description: The display name of the creator
                            example: Ashley.Pierce
                        title: entitycreatedbydto
                      - type: string
                        nullable: true
                        description: Workaround to support null
                        example: Dummy
                        title: nullableentitycreatedbydto
                    description: The session created by details
                  density:
                    type: integer
                    description: The density of a potential role.
                    example: 75
                    format: int32
                  description:
                    type: string
                    nullable: true
                    description: The description of a potential role.
                    example: Potential Role for Accounting dept
                  entitlementCount:
                    type: integer
                    description: The number of entitlements in a potential role.
                    example: 25
                    format: int32
                  excludedEntitlements:
                    description: The list of entitlement ids to be excluded.
                    nullable: true
                    type: array
                    items:
                      type: string
                    example:
                      - 07a0b4e2
                      - 13b4e2a0
                  freshness:
                    type: integer
                    description: The freshness of a potential role.
                    example: 75
                    format: int32
                  identityCount:
                    type: integer
                    description: The number of identities in a potential role.
                    example: 25
                    format: int32
                  identityDistribution:
                    description: Identity attribute distribution.
                    nullable: true
                    type: array
                    items:
                      type: object
                      title: Role Mining Identity Distribution
                      properties:
                        attributeName:
                          type: string
                          description: Id of the potential role
                          example: department
                        distribution:
                          type: array
                          items:
                            type: object
                            properties:
                              attributeValue:
                                type: string
                                nullable: true
                                description: The attribute value that identities are grouped by
                                example: NM Tier 3
                              count:
                                type: integer
                                description: The number of identities that have this attribute value
                                format: int32
                                example: 6
                  identityIds:
                    description: The list of ids in a potential role.
                    type: array
                    items:
                      type: string
                    example:
                      - 07a0b4e2
                      - 13b4e2a0
                  identityGroupStatus:
                    type: string
                    description: The status for this identity group which can be OBTAINED or COMPRESSED
                    example: OBTAINED
                    nullable: true
                  name:
                    type: string
                    description: Name of the potential role.
                    example: Saved Potential Role - 07/10
                  potentialRoleRef:
                    type: object
                    nullable: true
                    description: The potential role reference
                    properties:
                      id:
                        type: string
                        description: Id of the potential role
                        example: e0cc5d7d-bf7f-4f81-b2af-8885b09d9923
                      name:
                        type: string
                        description: Name of the potential role
                        example: Saved Potential Role - 07/10
                  provisionState:
                    allOf:
                      - type: string
                        description: Provision state
                        enum:
                          - POTENTIAL
                          - PENDING
                          - COMPLETE
                          - FAILED
                          - null
                        example: POTENTIAL
                        title: roleminingpotentialroleprovisionstate
                      - description: The provisioning state of a potential role.
                        nullable: true
                  quality:
                    type: integer
                    description: The quality of a potential role.
                    example: 100
                    format: int32
                  roleId:
                    type: string
                    nullable: true
                    description: The roleId of a potential role.
                    example: 07a0b4e2-7a76-44fa-bd0b-c64654b66519
                  saved:
                    type: boolean
                    description: The potential role's saved status.
                    example: true
                    default: false
                  session:
                    description: The session parameters of the potential role.
                    type: object
                    title: Role Mining Session Parameters Dto
                    properties:
                      id:
                        type: string
                        description: The ID of the role mining session
                        example: 9f36f5e5-1e81-4eca-b087-548959d91c71
                      name:
                        type: string
                        description: The session's saved name
                        nullable: true
                        example: Saved RM Session - 07/10
                      minNumIdentitiesInPotentialRole:
                        type: integer
                        description: Minimum number of identities in a potential role
                        nullable: true
                        example: 20
                        format: int32
                      pruneThreshold:
                        type: integer
                        description: The prune threshold to be used or null to calculate prescribedPruneThreshold
                        nullable: true
                        example: 5
                        format: int32
                      saved:
                        type: boolean
                        default: true
                        description: The session's saved status
                        example: true
                      scope:
                        description: The scope of identities for this role mining session
                        example:
                          identityIds: []
                          criteria: source.name:DataScienceDataset
                          attributeFilterCriteria:
                            displayName:
                              untranslated: 'Location: Miami'
                            ariaLabel:
                              untranslated: 'Location: Miami'
                            data:
                              displayName:
                                translateKey: IDN.IDENTITY_ATTRIBUTES.LOCATION
                              name: location
                              operator: EQUALS
                              values:
                                - Miami
                        type: object
                        title: Role Mining Session Scope
                        properties:
                          identityIds:
                            type: array
                            items:
                              type: string
                            description: The list of identities for this role mining session.
                            example:
                              - 2c918090761a5aac0176215c46a62d58
                              - 2c918090761a5aac01722015c46a62d42
                          criteria:
                            type: string
                            description: The "search" criteria that produces the list of identities for this role mining session.
                            nullable: true
                            example: source.name:DataScienceDataset
                          attributeFilterCriteria:
                            type: array
                            items:
                              type: object
                            description: The filter criteria for this role mining session.
                            nullable: true
                            example:
                              displayName:
                                untranslated: 'Location: Miami'
                              ariaLabel:
                                untranslated: 'Location: Miami'
                              data:
                                displayName:
                                  translateKey: IDN.IDENTITY_ATTRIBUTES.LOCATION
                                name: location
                                operator: EQUALS
                                values:
                                  - Miami
                      type:
                        description: Role mining potential type
                        type: string
                        enum:
                          - SPECIALIZED
                          - COMMON
                        example: SPECIALIZED
                        title: roleminingroletype
                      state:
                        description: Role mining session state
                        type: string
                        enum:
                          - CREATED
                          - UPDATED
                          - IDENTITIES_OBTAINED
                          - PRUNE_THRESHOLD_OBTAINED
                          - POTENTIAL_ROLES_PROCESSING
                          - POTENTIAL_ROLES_CREATED
                        example: CREATED
                        title: roleminingsessionstate
                      scopingMethod:
                        description: Scoping method used in current role mining session
                        type: string
                        enum:
                          - MANUAL
                          - AUTO_RM
                        example: MANUAL
                        title: roleminingsessionscopingmethod
                  type:
                    description: Role mining potential type.
                    type: string
                    enum:
                      - SPECIALIZED
                      - COMMON
                    example: SPECIALIZED
                    title: roleminingroletype
                  id:
                    type: string
                    description: Id of the potential role
                    example: e0cc5d7d-bf7f-4f81-b2af-8885b09d9923
                  createdDate:
                    type: string
                    format: date-time
                    description: The date-time when this potential role was created.
                    example: '2020-01-01T00:00:00.000Z'
                  modifiedDate:
                    type: string
                    format: date-time
                    description: The date-time when this potential role was modified.
                    example: '2020-01-01T00:00:00.000Z'
        '400':
          description: Client Error - Returned if the request body is invalid.
          content:
            application/json:
              schema:
                type: object
                title: Error Response Dto
                properties:
                  detailCode:
                    type: string
                    description: Fine-grained error code providing more detail of the error.
                    example: 400.1 Bad Request Content
                  trackingId:
                    type: string
                    description: Unique tracking id for the error.
                    example: e7eab60924f64aa284175b9fa3309599
                  messages:
                    type: array
                    description: Generic localized reason for error
                    items:
                      type: object
                      title: Error Message Dto
                      properties:
                        locale:
                          type: string
                          description: The locale for the message text, a BCP 47 language tag.
                          example: en-US
                          nullable: true
                        localeOrigin:
                          type: string
                          enum:
                            - DEFAULT
                            - REQUEST
                            - null
                          description: An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.
                          example: DEFAULT
                          nullable: true
                          title: localeorigin
                        text:
                          type: string
                          description: Actual text of the error message in the indicated locale.
                          example: The request was syntactically correct but its content is semantically invalid.
                  causes:
                    type: array
                    description: Plain-text descriptive reasons to provide additional detail to the text provided in the messages field
                    items:
                      type: object
                      title: Error Message Dto
                      properties:
                        locale:
                          type: string
                          description: The locale for the message text, a BCP 47 language tag.
                          example: en-US
                          nullable: true
                        localeOrigin:
                          type: string
                          enum:
                            - DEFAULT
                            - REQUEST
                            - null
                          description: An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.
                          example: DEFAULT
                          nullable: true
                          title: localeorigin
                        text:
                          type: string
                          description: Actual text of the error message in the indicated locale.
                          example: The request was syntactically correct but its content is semantically invalid.
        '401':
          description: Unauthorized - Returned if there is no authorization header, or if the JWT token is expired.
          content:
            application/json:
              schema:
                type: object
                properties:
                  error:
                    description: A message describing the error
                    example: 'JWT validation failed: JWT is expired'
        '403':
          description: Forbidden - Returned if the user you are running as, doesn't have access to this end-point.
          content:
            application/json:
              schema:
                type: object
                title: Error Response Dto
                properties:
                  detailCode:
                    type: string
                    description: Fine-grained error code providing more detail of the error.
                    example: 400.1 Bad Request Content
                  trackingId:
                    type: string
                    description: Unique tracking id for the error.
                    example: e7eab60924f64aa284175b9fa3309599
                  messages:
                    type: array
                    description: Generic localized reason for error
                    items:
                      type: object
                      title: Error Message Dto
                      properties:
                        locale:
                          type: string
                          description: The locale for the message text, a BCP 47 language tag.
                          example: en-US
                          nullable: true
                        localeOrigin:
                          type: string
                          enum:
                            - DEFAULT
                            - REQUEST
                            - null
                          description: An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.
                          example: DEFAULT
                          nullable: true
                          title: localeorigin
                        text:
                          type: string
                          description: Actual text of the error message in the indicated locale.
                          example: The request was syntactically correct but its content is semantically invalid.
                  causes:
                    type: array
                    description: Plain-text descriptive reasons to provide additional detail to the text provided in the messages field
                    items:
                      type: object
                      title: Error Message Dto
                      properties:
                        locale:
                          type: string
                          description: The locale for the message text, a BCP 47 language tag.
                          example: en-US
                          nullable: true
                        localeOrigin:
                          type: string
                          enum:
                            - DEFAULT
                            - REQUEST
                            - null
                          description: An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.
                          example: DEFAULT
                          nullable: true
                          title: localeorigin
                        text:
                          type: string
                          description: Actual text of the error message in the indicated locale.
                          example: The request was syntactically correct but its content is semantically invalid.
              examples:
                '403':
                  summary: An example of a 403 response object
                  value:
                    detailCode: 403 Forbidden
                    trackingId: b21b1f7ce4da4d639f2c62a57171b427
                    messages:
                      - locale: en-US
                        localeOrigin: DEFAULT
                        text: The server understood the request but refuses to authorize it.
        '429':
          description: Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again.
          content:
            application/json:
              schema:
                type: object
                properties:
                  message:
                    description: A message describing the error
                    example: ' Rate Limit Exceeded '
        '500':
          description: Internal Server Error - Returned if there is an unexpected error.
          content:
            application/json:
              schema:
                type: object
                title: Error Response Dto
                properties:
                  detailCode:
                    type: string
                    description: Fine-grained error code providing more detail of the error.
                    example: 400.1 Bad Request Content
                  trackingId:
                    type: string
                    description: Unique tracking id for the error.
                    example: e7eab60924f64aa284175b9fa3309599
                  messages:
                    type: array
                    description: Generic localized reason for error
                    items:
                      type: object
                      title: Error Message Dto
                      properties:
                        locale:
                          type: string
                          description: The locale for the message text, a BCP 47 language tag.
                          example: en-US
                          nullable: true
                        localeOrigin:
                          type: string
                          enum:
                            - DEFAULT
                            - REQUEST
                            - null
                          description: An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.
                          example: DEFAULT
                          nullable: true
                          title: localeorigin
                        text:
                          type: string
                          description: Actual text of the error message in the indicated locale.
                          example: The request was syntactically correct but its content is semantically invalid.
                  causes:
                    type: array
                    description: Plain-text descriptive reasons to provide additional detail to the text provided in the messages field
                    items:
                      type: object
                      title: Error Message Dto
                      properties:
                        locale:
                          type: string
                          description: The locale for the message text, a BCP 47 language tag.
                          example: en-US
                          nullable: true
                        localeOrigin:
                          type: string
                          enum:
                            - DEFAULT
                            - REQUEST
                            - null
                          description: An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.
                          example: DEFAULT
                          nullable: true
                          title: localeorigin
                        text:
                          type: string
                          description: Actual text of the error message in the indicated locale.
                          example: The request was syntactically correct but its content is semantically invalid.
              examples:
                '500':
                  summary: An example of a 500 response object
                  value:
                    detailCode: 500.0 Internal Fault
                    trackingId: b21b1f7ce4da4d639f2c62a57171b427
                    messages:
                      - locale: en-US
                        localeOrigin: DEFAULT
                        text: An internal fault occurred.
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
    applicationAuth:
      type: oauth2
      x-displayName: Client Credentials
      description: |
        OAuth2 Bearer token (JWT) generated using [client credentials flow](https://developer.sailpoint.com/docs/api/authentication/#request-access-token-with-client-credentials-grant-flow).

        Client credentials refers to tokens that are not associated with a user in Identity Security Cloud.

        See [Identity Security Cloud REST API Authentication](https://developer.sailpoint.com/docs/api/authentication/) for more information.
      flows:
        clientCredentials:
          tokenUrl: https://example-tenant.api.identitynow.com/oauth/token
          scopes:
            sp:scopes:default: default scope
            sp:scopes:all: access to all scopes
```
