## OpenAPI

```yaml GET /role-mining-potential-roles/v1
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
  /role-mining-potential-roles/v1:
    get:
      description: Returns all potential role summaries that match the query parameters
      operationId: getAllPotentialRoleSummariesV1
      security:
        - userAuth:
            - iai:access-modeling:read
            - iai:access-modeling:manage
        - applicationAuth:
            - iai:access-modeling:read
            - iai:access-modeling:manage
      parameters:
        - in: query
          name: sorters
          required: false
          style: form
          explode: true
          schema:
            type: string
            format: comma-separated
          description: |-
            Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)

            Sorting is supported for the following fields: **createdDate, identityCount, entitlementCount, freshness, quality**
          example: createdDate
        - in: query
          name: filters
          description: |-
            Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)

            Filtering is supported for the following fields and operators:

            **createdById**: *eq, sw, co*

            **createdByName**: *eq, sw, co*

            **description**: *sw, co*

            **endDate**: *le, lt*

            **freshness**: *eq, ge, gt, le, lt*

            **name**: *eq, sw, co, ge, gt, le, lt*

            **quality**: *eq, ge, gt, le, lt*

            **startDate**: *ge, gt*

            **saved**: *eq*

            **type**: *eq, ge, gt, le, lt*

            **scopingMethod**: *eq*

            **sessionState**: *eq*

            **identityAttribute**: *co*
          example: (createdByName co "int") and (createdById sw "2c9180907") and (type eq "COMMON") and ((name co "entt") or (saved eq true))
          required: false
          style: form
          explode: true
          schema:
            type: string
        - in: query
          name: offset
          description: |-
            Offset into the full result set. Usually specified with *limit* to paginate through the results.
            See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
          required: false
          example: 0
          schema:
            type: integer
            format: int32
            minimum: 0
            default: 0
        - in: query
          name: limit
          description: |-
            Max number of results to return.
            See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
          required: false
          example: 250
          schema:
            type: integer
            format: int32
            minimum: 0
            maximum: 250
            default: 250
        - in: query
          name: count
          description: |-
            If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.

            Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.

            See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
          required: false
          example: true
          schema:
            type: boolean
            default: false
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
          description: Succeeded. Returns all potential role summaries that match the query parameters.
          content:
            application/json:
              schema:
                type: array
                items:
                  type: object
                  title: Role Mining Potential Role Summary
                  properties:
                    id:
                      type: string
                      description: Id of the potential role
                      example: e0cc5d7d-bf7f-4f81-b2af-8885b09d9923
                    name:
                      type: string
                      description: Name of the potential role
                      example: Potential Role - e0cc5d
                    potentialRoleRef:
                      description: Details about the potential role
                      type: object
                      title: Role Mining Potential Role Ref
                      properties:
                        id:
                          type: string
                          description: Id of the potential role
                          example: e0cc5d7d-bf7f-4f81-b2af-8885b09d9923
                        name:
                          type: string
                          description: Name of the potential role
                          example: Potential Role - e0cc5d
                    identityCount:
                      type: integer
                      description: The number of identities in a potential role.
                      format: int32
                      example: 25
                    entitlementCount:
                      type: integer
                      description: The number of entitlements in a potential role.
                      format: int32
                      example: 15
                    identityGroupStatus:
                      type: string
                      description: The status for this identity group which can be "REQUESTED" or "OBTAINED"
                      example: OBTAINED
                    provisionState:
                      description: The status of provisioning for this potential role. Can be "POTENTIAL", "PENDING", "FAILED", or "COMPLETE".
                      example: PENDING
                      type: string
                      enum:
                        - POTENTIAL
                        - PENDING
                        - COMPLETE
                        - FAILED
                        - null
                      title: roleminingpotentialroleprovisionstate
                    roleId:
                      type: string
                      description: ID of the provisioned role in IIQ or IDN.  Null if this potential role has not been provisioned.
                      nullable: true
                      example: 2a4be6fbcf3c4e66b95a0c15ffd591
                    density:
                      type: integer
                      description: The density metric (0-100) of this potential role. Higher density values indicate higher similarity amongst the identities.
                      format: int32
                      example: 90
                    freshness:
                      type: integer
                      description: The freshness metric (0-100) of this potential role. Higher freshness values indicate this potential role is more distinctive compared to existing roles.
                      format: int32
                      example: 70
                    quality:
                      type: integer
                      description: The quality metric (0-100) of this potential role. Higher quality values indicate this potential role has high density and freshness.
                      format: int32
                      example: 80
                    type:
                      description: Role mining potential type.
                      type: string
                      enum:
                        - SPECIALIZED
                        - COMMON
                      example: SPECIALIZED
                      title: roleminingroletype
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
                      description: The potential role created by details
                    createdDate:
                      type: string
                      format: date-time
                      description: The date-time when this potential role was created.
                    saved:
                      type: boolean
                      description: The potential role's saved status
                      default: false
                      example: true
                    description:
                      type: string
                      nullable: true
                      description: Description of the potential role
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
