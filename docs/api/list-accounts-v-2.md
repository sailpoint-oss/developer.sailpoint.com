## OpenAPI

```yaml GET /accounts/v2
openapi: 3.0.1
info:
  title: SailPoint Identity Security API
  description: Use these APIs to interact with the SailPoint Identity Security platform to achieve repeatable, automated processes with greater scalability. We encourage you to join the SailPoint Developer Community forum at https://developer.sailpoint.com/discuss to connect with other developers using our APIs.
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
  /accounts/v2:
    get:
      description: |-
        List accounts from the accounts search index.

        Use standard collection parameters for paging (`limit`, `offset`, `count`). Default page size is 25 when no collection parameters are sent. Maximum `limit` is 250. Requests that specify a larger `limit` are capped at 250. `offset + limit` cannot exceed 10,000. To page beyond that window, use `searchAfter` instead of a large offset. `searchAfter` cannot be combined with `offset`. Always include `id` in `sorters` when using `searchAfter`. Refer to [Paginating Search Queries](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-search-queries) for more information.
      operationId: listAccountsV2
      security:
        - userAuth:
            - idn:account-list:read
            - idn:mis-account-list:read
            - idn:account-self:read
        - applicationAuth:
            - idn:account-list:read
            - idn:mis-account-list:read
            - idn:account-self:read
      parameters:
        - in: query
          name: limit
          description: |-
            Max number of results to return.
            See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
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
            See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
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

            See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
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

            For example, if you are sorting by name you will also want to include ID, for example searchAfter=Account Payable,2c91808375d8e80a0175e1f88a575221&sorters=name,id.

            Refer to [Paginating Search Queries](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-search-queries) for more information about how to implement `searchAfter` paging.
          required: false
          example: Account Payable,2c91808375d8e80a0175e1f88a575221
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
          example: name sw "test"
          description: |-
            Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)

            Filtering is supported for the following fields and operators:

            **id**: *eq, in, sw*

            **name**: *eq, in, sw, isnull, pr*

            **uuid**: *eq, in, sw, isnull, pr*

            **nativeIdentity**: *eq, in, sw, isnull, pr*

            **description**: *eq, in, sw, isnull, pr*

            **type**: *eq, ne*

            **recommendation.type**: *eq, in, sw, isnull, pr*

            **recommendation.method**: *eq, in, sw, isnull, pr*

            **locked**: *eq*

            **disabled**: *eq*

            **hasEntitlements**: *eq*

            **manuallyCorrelated**: *eq*

            **privilegeLevel.effective**: *eq, in, isnull, pr*

            **correlated**: *eq*

            **classificationMethod**: *eq, ne, in, sw, isnull, pr*

            **subType**: *eq, ne, in, sw, isnull, pr*

            **created**: *eq, ge, gt, le, lt*

            **modified**: *eq, ge, gt, le, lt*

            **synced**: *eq, ge, gt, le, lt*

            **owner.id**: *eq, in, sw*

            **owner.name**: *eq, in, sw, isnull, pr*

            **owner.state**: *eq, in, sw, isnull, pr*

            **correlatedIdentity.id**: *eq, in, sw*

            **correlatedIdentity.name**: *eq, in, sw, isnull, pr*

            **correlatedIdentity.state**: *eq, in, sw, isnull, pr*

            **source.id**: *eq, in, sw*

            **source.name**: *eq, in, sw*

            **source.authoritative**: *eq*

            **source.connectionType**: *eq, in, isnull, pr*

            **origin**: *eq, in*

            Filter values are case-insensitive for **name, description, type, origin, source.name, source.connectionType, owner.name, correlatedIdentity.name, correlatedIdentity.state, privilegeLevel.effective, recommendation.type, recommendation.method, classificationMethod, subType**.

            Filter values remain case-sensitive for the identifier fields **id, uuid, nativeIdentity, source.id, owner.id, correlatedIdentity.id**.
        - in: query
          name: sorters
          required: false
          schema:
            type: string
            format: comma-separated
          example: name,id
          description: |-
            Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)

            Sorting is supported for the following fields: **id, name, uuid, nativeIdentity, created, modified, manuallyCorrelated, description, type, recommendation.type, recommendation.method, locked, disabled, correlated, hasEntitlements, origin, privilegeLevel.effective, classificationMethod, subType, owner.id, owner.name, owner.state, correlatedIdentity.id, correlatedIdentity.name, correlatedIdentity.state, source.id, source.name, source.authoritative, source.connectionType, synced**

            Sorting on the following fields is case-insensitive: **name, description, type, origin, source.name, source.connectionType, owner.name, correlatedIdentity.name, correlatedIdentity.state, privilegeLevel.effective, recommendation.type, recommendation.method, classificationMethod, subType**. Identifier fields such as **id, uuid, nativeIdentity, source.id, owner.id,** and **correlatedIdentity.id** remain case-sensitive.

            Default sort is **created** when no collection parameters are sent.
        - name: X-SailPoint-Experimental
          in: header
          description: Use this header to enable this experimental API.
          example: 'true'
          schema:
            type: string
            default: 'true'
          required: true
      responses:
        '200':
          description: List of account objects.
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
                  title: AccountV2
                  description: Account record returned by the search-backed accounts list API.
                  properties:
                    id:
                      type: string
                      description: System-generated unique ID of the account.
                      example: 2c9180835d2e5168015d32f890ca1581
                    name:
                      type: string
                      description: Display name of the account.
                      example: John.Doe
                      nullable: true
                    uuid:
                      type: string
                      description: The unique ID of the account as determined by the account schema.
                      example: '{b0dce506-d6d4-44d2-8a32-d9a5b21fb175}'
                      nullable: true
                    nativeIdentity:
                      type: string
                      description: The unique ID of the account generated by the source system.
                      example: '552775'
                      nullable: true
                    description:
                      type: string
                      description: A description of the account.
                      nullable: true
                      example: Corporate Active Directory account
                    type:
                      type: string
                      description: The account type.
                      example: HUMAN
                      nullable: true
                    disabled:
                      type: boolean
                      description: Indicates if the account is currently disabled.
                      default: false
                      example: false
                    locked:
                      type: boolean
                      description: Indicates if the account is currently locked.
                      default: false
                      example: false
                    hasEntitlements:
                      type: boolean
                      description: Indicates if the account has entitlements.
                      default: false
                      example: true
                    manuallyCorrelated:
                      type: boolean
                      description: Indicates if the account has been manually correlated to an identity.
                      default: false
                      example: false
                    correlated:
                      type: boolean
                      description: Indicates if this account is correlated to an identity.
                      default: false
                      example: true
                    created:
                      type: string
                      format: date-time
                      description: Creation date of the account.
                      example: '2022-04-19T18:34:01.677Z'
                      nullable: true
                    modified:
                      type: string
                      format: date-time
                      description: Last modification date of the account.
                      example: '2022-04-19T18:34:02.268Z'
                      nullable: true
                    synced:
                      type: string
                      format: date-time
                      description: Date the account was last synced to the search index.
                      example: '2022-04-19T18:34:02.268Z'
                      nullable: true
                    source:
                      type: object
                      title: AccountV2Source
                      nullable: true
                      description: The source this account belongs to.
                      properties:
                        id:
                          type: string
                          description: The unique ID of the source.
                          example: 2c9180835d2e5168015d32f890ca1581
                          nullable: true
                        type:
                          type: string
                          description: The DTO type of the source.
                          enum:
                            - SOURCE
                          example: SOURCE
                          nullable: true
                        name:
                          type: string
                          description: The display name of the source.
                          example: Employees
                          nullable: true
                        authoritative:
                          type: boolean
                          description: Indicates if this account is from an authoritative source.
                          default: false
                          example: false
                        connectionType:
                          type: string
                          description: The connection type of the source this account is from.
                          example: direct
                          nullable: true
                    owner:
                      allOf:
                        - type: object
                          title: AccountV2Identity
                          nullable: true
                          description: An identity reference associated with this account.
                          properties:
                            id:
                              type: string
                              description: The unique ID of the identity.
                              example: 2c918084660f45d6016617daa9210584
                              nullable: true
                            type:
                              type: string
                              description: The DTO type of the identity.
                              enum:
                                - IDENTITY
                              example: IDENTITY
                              nullable: true
                            name:
                              type: string
                              description: The display name of the identity.
                              example: John Doe
                              nullable: true
                            state:
                              type: string
                              description: The identity state.
                              example: ACTIVE
                              nullable: true
                        - description: The identity who owns this account.
                    owners:
                      type: array
                      description: Identities who own this account. Never null; an empty array when the account has no owners.
                      items:
                        type: object
                        title: AccountV2Identity
                        nullable: true
                        description: An identity reference associated with this account.
                        properties:
                          id:
                            type: string
                            description: The unique ID of the identity.
                            example: 2c918084660f45d6016617daa9210584
                            nullable: true
                          type:
                            type: string
                            description: The DTO type of the identity.
                            enum:
                              - IDENTITY
                            example: IDENTITY
                            nullable: true
                          name:
                            type: string
                            description: The display name of the identity.
                            example: John Doe
                            nullable: true
                          state:
                            type: string
                            description: The identity state.
                            example: ACTIVE
                            nullable: true
                    correlatedIdentity:
                      allOf:
                        - type: object
                          title: AccountV2Identity
                          nullable: true
                          description: An identity reference associated with this account.
                          properties:
                            id:
                              type: string
                              description: The unique ID of the identity.
                              example: 2c918084660f45d6016617daa9210584
                              nullable: true
                            type:
                              type: string
                              description: The DTO type of the identity.
                              enum:
                                - IDENTITY
                              example: IDENTITY
                              nullable: true
                            name:
                              type: string
                              description: The display name of the identity.
                              example: John Doe
                              nullable: true
                            state:
                              type: string
                              description: The identity state.
                              example: ACTIVE
                              nullable: true
                        - description: The identity this account is correlated to.
                    recommendation:
                      type: object
                      title: AccountV2Recommendation
                      nullable: true
                      description: Indicates that the account is currently classified as one type but is recommended to be a different one.
                      properties:
                        type:
                          type: string
                          enum:
                            - HUMAN
                            - MACHINE
                          description: Recommended type of account.
                          example: MACHINE
                          nullable: true
                        method:
                          type: string
                          enum:
                            - DISCOVERY
                            - SOURCE
                            - CRITERIA
                          description: Method used to produce the recommendation. DISCOVERY - suggested by AI, SOURCE - the account comes from a source flagged as containing machine accounts, CRITERIA - the account satisfies classification criteria.
                          example: DISCOVERY
                          nullable: true
                        machineLikelihood:
                          type: integer
                          format: int32
                          minimum: 0
                          maximum: 3
                          description: Ranked likelihood that this account is a machine account. Present when machine-account recommendation enrichment is available for the tenant.
                          example: 3
                          nullable: true
                        explanation:
                          type: array
                          items:
                            type: string
                          description: Reasons supporting the machine-account recommendation. Never null; an empty array when no explanation is available.
                          example:
                            - AD_GMSA
                    privilegeLevel:
                      type: object
                      title: AccountV2PrivilegeLevel
                      nullable: true
                      description: Effective privilege level of the account.
                      properties:
                        effective:
                          type: string
                          description: The effective privilege level of the account.
                          example: High
                          nullable: true
                    attributes:
                      type: object
                      nullable: true
                      additionalProperties: true
                      description: The account attributes that are aggregated.
                      example:
                        firstName: SailPoint
                        lastName: Support
                        displayName: SailPoint Support
                    origin:
                      type: string
                      nullable: true
                      enum:
                        - AGGREGATED
                        - PROVISIONED
                      description: The origin of the account, either aggregated or provisioned.
                      example: AGGREGATED
                    classificationMethod:
                      type: string
                      nullable: true
                      enum:
                        - CRITERIA
                        - SOURCE
                        - DISCOVERY
                        - MANUAL
                        - MANUALLY_UNCLASSIFIED
                      description: Method used to classify the account.
                      example: SOURCE
                    subType:
                      type: string
                      nullable: true
                      description: The account subtype.
                      example: Service Account
                    correlatedEntities:
                      type: array
                      description: Correlated identities or machine identities associated with this account. Never null; an empty array when there are none.
                      items:
                        type: object
                        title: AccountV2CorrelatedEntity
                        description: A correlated identity or machine-identity associated with this account.
                        properties:
                          type:
                            description: The DTO type of the correlated entity.
                            type: string
                            enum:
                              - ACCOUNT_CORRELATION_CONFIG
                              - ACCESS_PROFILE
                              - ACCESS_REQUEST_APPROVAL
                              - ACCOUNT
                              - APPLICATION
                              - CAMPAIGN
                              - CAMPAIGN_FILTER
                              - CERTIFICATION
                              - CLUSTER
                              - CONNECTOR_SCHEMA
                              - ENTITLEMENT
                              - GOVERNANCE_GROUP
                              - IDENTITY
                              - IDENTITY_PROFILE
                              - IDENTITY_REQUEST
                              - MACHINE_IDENTITY
                              - LIFECYCLE_STATE
                              - PASSWORD_POLICY
                              - ROLE
                              - RULE
                              - SOD_POLICY
                              - SOURCE
                              - TAG
                              - TAG_CATEGORY
                              - TASK_RESULT
                              - REPORT_RESULT
                              - SOD_VIOLATION
                              - ACCOUNT_ACTIVITY
                              - WORKGROUP
                            example: IDENTITY
                            title: dtotype
                          id:
                            type: string
                            description: The unique ID of the correlated entity.
                            example: 2c918084660f45d6016617daa9210584
                            nullable: true
                          name:
                            type: string
                            description: The display name of the correlated entity.
                            example: John Doe
                            nullable: true
                          state:
                            type: string
                            description: The identity state. Populated for IDENTITY entries only.
                            example: ACTIVE
                            nullable: true
                    features:
                      type: array
                      description: Capability features of the owning source for this account. Never null; empty when unset.
                      items:
                        type: string
                      example:
                        - ENABLE
                        - PROVISIONING
              example:
                - id: 2c9180835d2e5168015d32f890ca1581
                  name: John.Doe
                  uuid: '{b0dce506-d6d4-44d2-8a32-d9a5b21fb175}'
                  nativeIdentity: '552775'
                  description: Corporate Active Directory account
                  type: HUMAN
                  disabled: false
                  locked: false
                  hasEntitlements: true
                  manuallyCorrelated: false
                  correlated: true
                  created: '2022-04-19T18:34:01.677Z'
                  modified: '2022-04-19T18:34:02.268Z'
                  synced: '2022-04-19T18:34:02.268Z'
                  source:
                    id: 2c9180835d2e5168015d32f890ca1581
                    type: SOURCE
                    name: Employees
                    authoritative: false
                    connectionType: direct
                  owner:
                    id: 2c918084660f45d6016617daa9210584
                    type: IDENTITY
                    name: John Doe
                    state: ACTIVE
                  correlatedIdentity:
                    id: 2c918084660f45d6016617daa9210584
                    type: IDENTITY
                    name: John Doe
                    state: ACTIVE
                  owners: []
                  correlatedEntities:
                    - type: IDENTITY
                      id: 2c918084660f45d6016617daa9210584
                      name: John Doe
                      state: ACTIVE
                  recommendation:
                    type: MACHINE
                    method: DISCOVERY
                    explanation: []
                  privilegeLevel:
                    effective: High
                  attributes:
                    firstName: John
                    lastName: Doe
                    displayName: John Doe
                  origin: AGGREGATED
                  classificationMethod: SOURCE
                  features:
                    - ENABLE
                    - PROVISIONING
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
