## OpenAPI

```yaml GET /identities/v2
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
  /identities/v2:
    get:
      description: |-
        List identities from the identities search index.

        Use standard collection parameters for paging (`limit`, `offset`, `count`). Default page size is 25 when no collection parameters are sent. Maximum `limit` is 250. Requests that specify a larger `limit` are capped at 250. `offset + limit` cannot exceed 10,000. To page beyond that window, use `searchAfter` instead of a large offset. `searchAfter` cannot be combined with `offset`. Always include `id` in `sorters` when using `searchAfter`. Refer to [Paginating Search Queries](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-search-queries) for more information.

        `privilegeLevel` is returned when the `IDNARC_ENABLE_IDENTITY_EFFECTIVE_PRIVILEGE` feature flag is enabled. When the flag is disabled, `privilegeLevel` is null and a filter or sort on `privilegeLevel.effective` is rejected. When the flag is enabled, an identity with no privilege level is returned as `NONE`. Comparisons on `privilegeLevel.effective` are case-insensitive, and returned values are uppercase: `HIGH`, `MEDIUM`, `LOW`, or `NONE`. An identity with no privilege level matches `privilegeLevel.effective eq "NONE"` and does not match `isnull`.
      operationId: listIdentitiesV2
      security:
        - userAuth:
            - idn:identity-list:read
            - idn:identity-self:read
        - applicationAuth:
            - idn:identity-list:read
            - idn:identity-self:read
      parameters:
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
        - in: query
          name: searchAfter
          description: |-
            Used to begin the search window at the values specified.

            This parameter consists of the last values of the sorted fields in the current record set.

            searchAfter length must match the number of sorters.

            This is used to page beyond the offset limit of 10,000 records by shifting the search window to begin at this value.

            `searchAfter` cannot be combined with `offset`. When `searchAfter` is provided, `id` must be included in `sorters`.

            It is recommended that you always include the ID of the object in addition to any other sort fields in order to ensure you don't get duplicate results while paging.

            For example, if you are sorting by name you will also want to include ID, for example searchAfter=John Mathews,01f04e428c484542a241dc89c303b178&sorters=name,id.

            Refer to [Paginating Search Queries](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-search-queries) for more information about how to implement `searchAfter` paging.
          required: false
          example: John Mathews,01f04e428c484542a241dc89c303b178
          schema:
            type: string
            format: comma-separated
          style: form
          explode: true
        - in: query
          name: filters
          required: false
          schema:
            type: string
          example: privilegeLevel.effective eq "HIGH"
          description: |-
            Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)

            Filtering is supported for the following fields and operators:

            **id**: *eq, in, sw*

            **name**: *eq, in, sw, isnull, pr*

            **alias**: *eq, in, sw, isnull, pr*

            **type**: *eq, in, sw, isnull, pr*

            **emailAddress**: *eq, in, sw, isnull, pr*

            **identityStatus**: *eq, in, sw, isnull, pr*

            **processingState**: *eq, in, sw, isnull, pr*

            **protected**: *eq*

            **correlated**: *eq*

            **inactive**: *eq*

            **isManager**: *eq*

            **locked**: *eq*

            **disabled**: *eq*

            **manager.id**: *eq, in, sw*

            **manager.name**: *eq, in, sw, isnull, pr*

            **manager.type**: *eq, in, sw, isnull, pr*

            **lifecycleState.stateName**: *eq, in, sw, isnull, pr*

            **lifecycleState.manuallyUpdated**: *eq*

            **created**: *eq, ge, gt, le, lt*

            **modified**: *eq, ge, gt, le, lt*

            **synced**: *eq, ge, gt, le, lt*

            **lastRefresh**: *eq, ge, gt, le, lt*

            **privilegeLevel.effective**: *eq, in, isnull, pr*
        - in: query
          name: sorters
          required: false
          schema:
            type: string
            format: comma-separated
          example: privilegeLevel.effective,id
          description: |-
            Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)

            Sorting is supported for the following fields: **id, name, alias, type, emailAddress, identityStatus, processingState, protected, correlated, inactive, isManager, locked, disabled, manager.id, manager.name, manager.type, lifecycleState.stateName, lifecycleState.manuallyUpdated, created, modified, synced, lastRefresh, privilegeLevel.effective**

            Sorting on **privilegeLevel.effective** is case-insensitive and is accepted only when `IDNARC_ENABLE_IDENTITY_EFFECTIVE_PRIVILEGE` is enabled. Returned values are uppercase.

            Default sort is **created** when no collection parameters are sent.
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
          description: List of identity objects.
          headers:
            x-total-count:
              description: The total result count (returned when count=true is passed).
              schema:
                type: integer
                format: int32
          content:
            application/json:
              schema:
                type: array
                items:
                  type: object
                  title: IdentityV2
                  description: Identity record returned by the search-backed identities v2 API.
                  properties:
                    id:
                      type: string
                      description: System-generated unique ID of the identity.
                      example: 01f04e428c484542a241dc89c303b178
                      nullable: true
                    name:
                      type: string
                      description: Display name of the identity.
                      example: John Mathews
                      nullable: true
                    alias:
                      type: string
                      description: Alternate unique identifier of the identity. Equivalent to the account name on the authoritative source.
                      example: john.mathews
                      nullable: true
                    type:
                      type: string
                      description: The identity type.
                      example: HUMAN
                      nullable: true
                    emailAddress:
                      type: string
                      description: Email address of the identity.
                      example: john.mathews@example.com
                      nullable: true
                    identityStatus:
                      type: string
                      description: The identity's status in the system.
                      example: ACTIVE
                      nullable: true
                    processingState:
                      type: string
                      description: The processing state of the identity.
                      example: OK
                      nullable: true
                    protected:
                      type: boolean
                      description: Whether the identity is protected from accidental deletion or modification.
                      default: false
                      example: false
                    correlated:
                      type: boolean
                      description: Whether the identity is correlated to an authoritative account.
                      default: false
                      example: true
                    inactive:
                      type: boolean
                      description: Whether the identity is inactive.
                      default: false
                      example: false
                    isManager:
                      type: boolean
                      description: Whether this identity is a manager of another identity.
                      default: false
                      example: true
                    locked:
                      type: boolean
                      description: Whether the identity is locked.
                      default: false
                      example: false
                    disabled:
                      type: boolean
                      description: Whether the identity is disabled.
                      default: false
                      example: false
                    manager:
                      type: object
                      nullable: true
                      description: The identity's manager.
                      properties:
                        id:
                          type: string
                          description: ID of the identity's manager.
                          example: 2c4180a46faadee4016fb4e018c20626
                          nullable: true
                        name:
                          type: string
                          description: Display name of the identity's manager.
                          example: Robert Robinson
                          nullable: true
                        type:
                          type: string
                          description: DTO type of the identity's manager.
                          example: IDENTITY
                          nullable: true
                    lifecycleState:
                      allOf:
                        - type: object
                          title: Lifecycle State Dto
                          properties:
                            stateName:
                              type: string
                              description: The name of the lifecycle state
                              example: active
                            manuallyUpdated:
                              type: boolean
                              description: Whether the lifecycle state has been manually or automatically set
                              example: true
                          required:
                            - stateName
                            - manuallyUpdated
                        - nullable: true
                          description: Lifecycle state name and whether that state was set manually.
                    created:
                      type: string
                      format: date-time
                      description: Creation date of the identity.
                      example: '2023-01-03T21:16:22.432Z'
                      nullable: true
                    modified:
                      type: string
                      format: date-time
                      description: Last modification date of the identity.
                      example: '2023-01-03T21:16:22.432Z'
                      nullable: true
                    synced:
                      type: string
                      format: date-time
                      description: Last time the identity was synchronized to search.
                      example: '2023-01-03T21:16:22.432Z'
                      nullable: true
                    lastRefresh:
                      type: string
                      format: date-time
                      description: The last time the identity was refreshed by the system.
                      example: '2020-11-22T15:42:31.123Z'
                      nullable: true
                    privilegeLevel:
                      type: object
                      title: IdentityV2PrivilegeLevel
                      nullable: true
                      description: Effective privilege level of the identity. This object is null when the IDNARC_ENABLE_IDENTITY_EFFECTIVE_PRIVILEGE feature flag is disabled. When the flag is enabled, an identity with no privilege level is returned with effective set to NONE.
                      properties:
                        effective:
                          type: string
                          description: The effective privilege level of the identity. Returned values are uppercase. Filter and sort comparisons are case-insensitive. An identity with no privilege level is NONE.
                          enum:
                            - HIGH
                            - MEDIUM
                            - LOW
                            - NONE
                          example: HIGH
                          nullable: true
              example:
                - id: 01f04e428c484542a241dc89c303b178
                  name: John Mathews
                  alias: john.mathews
                  type: HUMAN
                  emailAddress: john.mathews@example.com
                  identityStatus: ACTIVE
                  processingState: OK
                  protected: false
                  correlated: true
                  inactive: false
                  isManager: true
                  locked: false
                  disabled: false
                  manager:
                    id: 2c4180a46faadee4016fb4e018c20626
                    name: Robert Robinson
                    type: IDENTITY
                  lifecycleState:
                    stateName: active
                    manuallyUpdated: false
                  created: '2023-01-03T21:16:22.432Z'
                  modified: '2023-01-03T21:16:22.432Z'
                  synced: '2023-01-03T21:16:22.432Z'
                  lastRefresh: '2020-11-22T15:42:31.123Z'
                  privilegeLevel:
                    effective: HIGH
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
