## OpenAPI

```yaml POST /public-identities/v2/search
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
  /public-identities/v2/search:
    post:
      description: |-
        Search public identities using a composite query and return matching records.

        The root query set combines criteria with AND and must include attributes.identityState.exact = ACTIVE. The field keys must come from GET /public-identities/v2/visible-attributes and may use the prefix "attributes." and/or the suffix ".exact". See the request examples for the required exact payload structure.

        Any authenticated user with the default scope can call this endpoint.
      operationId: searchPublicIdentitiesV2
      security:
        - userAuth:
            - sp:scopes:default
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
        - name: X-SailPoint-Experimental
          in: header
          description: Use this header to enable this experimental API.
          example: true
          schema:
            type: string
            default: true
          required: true
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              title: Public Identities Search Request
              description: COMPOSITE search request for public identities. Root querySet must use matchAny false (AND). The first entries item must be the ACTIVE identityState TEXT gate; identityState may not appear elsewhere in the query tree.
              additionalProperties: false
              required:
                - queryType
                - indices
                - includeNested
                - querySet
              properties:
                queryType:
                  type: string
                  enum:
                    - COMPOSITE
                  description: Search query type. Must be COMPOSITE.
                  example: COMPOSITE
                indices:
                  type: array
                  minItems: 1
                  maxItems: 1
                  items:
                    type: string
                    enum:
                      - identities
                  description: Search indices. Must be exactly ["identities"].
                  example:
                    - identities
                includeNested:
                  type: boolean
                  enum:
                    - false
                  description: Must be false for public identities search.
                  example: false
                sort:
                  type: array
                  minItems: 1
                  items:
                    type: string
                  description: Optional attribute keys to sort by. Base keys must match those returned by GET /public-identities/v2/visible-attributes (defaultAttributes + configuredAttributes). Optional "attributes." prefix and/or ".exact" suffix.
                  example:
                    - name
                querySet:
                  allOf:
                    - type: object
                      title: Public Identities Query Set
                      description: A set of COMPOSITE query entries combined with AND (matchAny false) or OR (matchAny true).
                      additionalProperties: false
                      required:
                        - matchAny
                        - entries
                      properties:
                        matchAny:
                          type: boolean
                          description: When true, entries are OR'd; when false, entries are AND'd.
                          example: false
                        entries:
                          type: array
                          minItems: 1
                          items:
                            title: Public Identities Composite Entry
                            description: A querySet entry that is either a TEXT clause or a nested COMPOSITE querySet.
                            discriminator:
                              propertyName: queryType
                              mapping:
                                TEXT:
                                  type: object
                                  title: Public Identities Text Entry
                                  description: A COMPOSITE query entry that contains a TEXT query.
                                  additionalProperties: false
                                  required:
                                    - queryType
                                    - textQuery
                                  properties:
                                    queryType:
                                      type: string
                                      enum:
                                        - TEXT
                                      description: Entry type discriminator. Must be TEXT for text query entries.
                                      example: TEXT
                                    textQuery:
                                      description: Text query clause for this TEXT entry.
                                      allOf:
                                        - type: object
                                          title: Public Identities Text Query
                                          description: Text query clause used inside a TEXT composite entry.
                                          additionalProperties: false
                                          required:
                                            - fields
                                            - terms
                                          properties:
                                            fields:
                                              type: array
                                              minItems: 1
                                              items:
                                                type: string
                                              description: Attribute keys to search. Base keys must match GET /public-identities/v2/visible-attributes (defaultAttributes + configuredAttributes). Optional "attributes." prefix and/or ".exact" suffix (e.g. email, attributes.email, email.exact, attributes.email.exact).
                                              example:
                                                - name
                                                - email
                                            terms:
                                              type: array
                                              minItems: 1
                                              items:
                                                oneOf:
                                                  - type: string
                                                    minLength: 1
                                                  - type: boolean
                                              description: Search terms. Each value must be a non-blank string or a JSON boolean.
                                              example:
                                                - Mara
                                            matchAny:
                                              type: boolean
                                              default: false
                                              description: When true, terms/fields are OR'd within this text query. Optional for normal search clauses. The mandatory ACTIVE identityState gate entry must set this to false.
                                              example: true
                                            contains:
                                              type: boolean
                                              default: false
                                              description: When true, matches substrings. Optional for normal search clauses. The mandatory ACTIVE identityState gate entry must set this to false.
                                              example: true
                                            strict:
                                              type: boolean
                                              default: false
                                              description: When true, applies strict matching. Optional for normal search clauses. The mandatory ACTIVE identityState gate entry must set this to true.
                                              example: true
                                COMPOSITE:
                                  type: object
                                  title: Public Identities Nested Composite Entry
                                  description: A COMPOSITE query entry that nests another querySet.
                                  additionalProperties: false
                                  required:
                                    - queryType
                                    - querySet
                                  properties:
                                    queryType:
                                      type: string
                                      enum:
                                        - COMPOSITE
                                      description: Entry type discriminator. Must be COMPOSITE for nested query sets.
                                      example: COMPOSITE
                                    querySet:
                                      description: Nested query set for this COMPOSITE entry.
                                      allOf:
                                        - type: object
                                          title: Public Identities Nested Query Set
                                          description: Query set nested inside a COMPOSITE entry. TEXT entries combined with AND (matchAny false) or OR (matchAny true).
                                          additionalProperties: false
                                          required:
                                            - matchAny
                                            - entries
                                          properties:
                                            matchAny:
                                              type: boolean
                                              description: When true, entries are OR'd; when false, entries are AND'd.
                                              example: true
                                            entries:
                                              type: array
                                              minItems: 1
                                              items:
                                                type: object
                                                title: Public Identities Text Entry
                                                description: A COMPOSITE query entry that contains a TEXT query.
                                                additionalProperties: false
                                                required:
                                                  - queryType
                                                  - textQuery
                                                properties:
                                                  queryType:
                                                    type: string
                                                    enum:
                                                      - TEXT
                                                    description: Entry type discriminator. Must be TEXT for text query entries.
                                                    example: TEXT
                                                  textQuery:
                                                    description: Text query clause for this TEXT entry.
                                                    allOf:
                                                      - type: object
                                                        title: Public Identities Text Query
                                                        description: Text query clause used inside a TEXT composite entry.
                                                        additionalProperties: false
                                                        required:
                                                          - fields
                                                          - terms
                                                        properties:
                                                          fields:
                                                            type: array
                                                            minItems: 1
                                                            items:
                                                              type: string
                                                            description: Attribute keys to search. Base keys must match GET /public-identities/v2/visible-attributes (defaultAttributes + configuredAttributes). Optional "attributes." prefix and/or ".exact" suffix (e.g. email, attributes.email, email.exact, attributes.email.exact).
                                                            example:
                                                              - name
                                                              - email
                                                          terms:
                                                            type: array
                                                            minItems: 1
                                                            items:
                                                              oneOf:
                                                                - type: string
                                                                  minLength: 1
                                                                - type: boolean
                                                            description: Search terms. Each value must be a non-blank string or a JSON boolean.
                                                            example:
                                                              - Mara
                                                          matchAny:
                                                            type: boolean
                                                            default: false
                                                            description: When true, terms/fields are OR'd within this text query. Optional for normal search clauses. The mandatory ACTIVE identityState gate entry must set this to false.
                                                            example: true
                                                          contains:
                                                            type: boolean
                                                            default: false
                                                            description: When true, matches substrings. Optional for normal search clauses. The mandatory ACTIVE identityState gate entry must set this to false.
                                                            example: true
                                                          strict:
                                                            type: boolean
                                                            default: false
                                                            description: When true, applies strict matching. Optional for normal search clauses. The mandatory ACTIVE identityState gate entry must set this to true.
                                                            example: true
                                              description: One or more TEXT entries.
                            oneOf:
                              - type: object
                                title: Public Identities Text Entry
                                description: A COMPOSITE query entry that contains a TEXT query.
                                additionalProperties: false
                                required:
                                  - queryType
                                  - textQuery
                                properties:
                                  queryType:
                                    type: string
                                    enum:
                                      - TEXT
                                    description: Entry type discriminator. Must be TEXT for text query entries.
                                    example: TEXT
                                  textQuery:
                                    description: Text query clause for this TEXT entry.
                                    allOf:
                                      - type: object
                                        title: Public Identities Text Query
                                        description: Text query clause used inside a TEXT composite entry.
                                        additionalProperties: false
                                        required:
                                          - fields
                                          - terms
                                        properties:
                                          fields:
                                            type: array
                                            minItems: 1
                                            items:
                                              type: string
                                            description: Attribute keys to search. Base keys must match GET /public-identities/v2/visible-attributes (defaultAttributes + configuredAttributes). Optional "attributes." prefix and/or ".exact" suffix (e.g. email, attributes.email, email.exact, attributes.email.exact).
                                            example:
                                              - name
                                              - email
                                          terms:
                                            type: array
                                            minItems: 1
                                            items:
                                              oneOf:
                                                - type: string
                                                  minLength: 1
                                                - type: boolean
                                            description: Search terms. Each value must be a non-blank string or a JSON boolean.
                                            example:
                                              - Mara
                                          matchAny:
                                            type: boolean
                                            default: false
                                            description: When true, terms/fields are OR'd within this text query. Optional for normal search clauses. The mandatory ACTIVE identityState gate entry must set this to false.
                                            example: true
                                          contains:
                                            type: boolean
                                            default: false
                                            description: When true, matches substrings. Optional for normal search clauses. The mandatory ACTIVE identityState gate entry must set this to false.
                                            example: true
                                          strict:
                                            type: boolean
                                            default: false
                                            description: When true, applies strict matching. Optional for normal search clauses. The mandatory ACTIVE identityState gate entry must set this to true.
                                            example: true
                              - type: object
                                title: Public Identities Nested Composite Entry
                                description: A COMPOSITE query entry that nests another querySet.
                                additionalProperties: false
                                required:
                                  - queryType
                                  - querySet
                                properties:
                                  queryType:
                                    type: string
                                    enum:
                                      - COMPOSITE
                                    description: Entry type discriminator. Must be COMPOSITE for nested query sets.
                                    example: COMPOSITE
                                  querySet:
                                    description: Nested query set for this COMPOSITE entry.
                                    allOf:
                                      - type: object
                                        title: Public Identities Nested Query Set
                                        description: Query set nested inside a COMPOSITE entry. TEXT entries combined with AND (matchAny false) or OR (matchAny true).
                                        additionalProperties: false
                                        required:
                                          - matchAny
                                          - entries
                                        properties:
                                          matchAny:
                                            type: boolean
                                            description: When true, entries are OR'd; when false, entries are AND'd.
                                            example: true
                                          entries:
                                            type: array
                                            minItems: 1
                                            items:
                                              type: object
                                              title: Public Identities Text Entry
                                              description: A COMPOSITE query entry that contains a TEXT query.
                                              additionalProperties: false
                                              required:
                                                - queryType
                                                - textQuery
                                              properties:
                                                queryType:
                                                  type: string
                                                  enum:
                                                    - TEXT
                                                  description: Entry type discriminator. Must be TEXT for text query entries.
                                                  example: TEXT
                                                textQuery:
                                                  description: Text query clause for this TEXT entry.
                                                  allOf:
                                                    - type: object
                                                      title: Public Identities Text Query
                                                      description: Text query clause used inside a TEXT composite entry.
                                                      additionalProperties: false
                                                      required:
                                                        - fields
                                                        - terms
                                                      properties:
                                                        fields:
                                                          type: array
                                                          minItems: 1
                                                          items:
                                                            type: string
                                                          description: Attribute keys to search. Base keys must match GET /public-identities/v2/visible-attributes (defaultAttributes + configuredAttributes). Optional "attributes." prefix and/or ".exact" suffix (e.g. email, attributes.email, email.exact, attributes.email.exact).
                                                          example:
                                                            - name
                                                            - email
                                                        terms:
                                                          type: array
                                                          minItems: 1
                                                          items:
                                                            oneOf:
                                                              - type: string
                                                                minLength: 1
                                                              - type: boolean
                                                          description: Search terms. Each value must be a non-blank string or a JSON boolean.
                                                          example:
                                                            - Mara
                                                        matchAny:
                                                          type: boolean
                                                          default: false
                                                          description: When true, terms/fields are OR'd within this text query. Optional for normal search clauses. The mandatory ACTIVE identityState gate entry must set this to false.
                                                          example: true
                                                        contains:
                                                          type: boolean
                                                          default: false
                                                          description: When true, matches substrings. Optional for normal search clauses. The mandatory ACTIVE identityState gate entry must set this to false.
                                                          example: true
                                                        strict:
                                                          type: boolean
                                                          default: false
                                                          description: When true, applies strict matching. Optional for normal search clauses. The mandatory ACTIVE identityState gate entry must set this to true.
                                                          example: true
                                            description: One or more TEXT entries.
                          description: One or more TEXT or nested COMPOSITE entries.
                          example:
                            - queryType: TEXT
                              textQuery:
                                fields:
                                  - attributes.identityState.exact
                                terms:
                                  - ACTIVE
                                matchAny: false
                                contains: false
                                strict: true
                    - type: object
                      description: 'Root querySet must use matchAny false (AND). The first entries item must be exactly this TEXT gate; identityState may not appear elsewhere in the tree: {"queryType":"TEXT","textQuery":{"fields":["attributes.identityState.exact"], "terms":["ACTIVE"],"matchAny":false,"contains":false,"strict":true}}'
            examples:
              singleEntryComposite:
                summary: Root and with active gate and one text entry
                value:
                  queryType: COMPOSITE
                  indices:
                    - identities
                  includeNested: false
                  sort:
                    - name
                  querySet:
                    matchAny: false
                    entries:
                      - queryType: TEXT
                        textQuery:
                          fields:
                            - attributes.identityState.exact
                          terms:
                            - ACTIVE
                          matchAny: false
                          contains: false
                          strict: true
                      - queryType: TEXT
                        textQuery:
                          terms:
                            - Mara
                          fields:
                            - name
                            - email
                          matchAny: true
                          contains: true
                          strict: true
              multiEntryComposite:
                summary: Root and with active gate and multiple text entries
                value:
                  queryType: COMPOSITE
                  indices:
                    - identities
                  includeNested: false
                  sort:
                    - name
                  querySet:
                    matchAny: false
                    entries:
                      - queryType: TEXT
                        textQuery:
                          fields:
                            - attributes.identityState.exact
                          terms:
                            - ACTIVE
                          matchAny: false
                          contains: false
                          strict: true
                      - queryType: TEXT
                        textQuery:
                          terms:
                            - M
                          fields:
                            - email
                          matchAny: true
                          contains: false
                          strict: true
                      - queryType: TEXT
                        textQuery:
                          terms:
                            - M
                          fields:
                            - name
                          matchAny: true
                          contains: false
                          strict: true
              nestedCompositeAndOr:
                summary: Root and with active gate and nested or of text entries
                value:
                  queryType: COMPOSITE
                  indices:
                    - identities
                  includeNested: false
                  sort:
                    - name
                  querySet:
                    matchAny: false
                    entries:
                      - queryType: TEXT
                        textQuery:
                          fields:
                            - attributes.identityState.exact
                          terms:
                            - ACTIVE
                          matchAny: false
                          contains: false
                          strict: true
                      - queryType: COMPOSITE
                        querySet:
                          matchAny: true
                          entries:
                            - queryType: TEXT
                              textQuery:
                                terms:
                                  - Mara
                                fields:
                                  - name
                                matchAny: false
                                contains: false
                                strict: true
                            - queryType: TEXT
                              textQuery:
                                terms:
                                  - Mara
                                fields:
                                  - email
                                matchAny: false
                                contains: false
                                strict: true
      responses:
        '200':
          description: Request succeeded. Body is an array of PublicIdentityV2. When count=true, X-Total-Count may be set with the total matching count (ignoring limit/offset).
          headers:
            X-Total-Count:
              description: Total number of matching results when count=true.
              schema:
                type: integer
                format: int32
              example: 30
          content:
            application/json:
              schema:
                type: array
                items:
                  type: object
                  title: Public Identity V2
                  description: Projected public identity returned by POST /public-identities/v2/search. Root fields are always present (null when unavailable). attributes contains only keys from GET /public-identities/v2/visible-attributes configuredAttributes.
                  required:
                    - id
                    - name
                    - displayName
                    - email
                    - identityState
                    - cloudLifecycleState
                    - manager
                    - attributes
                  properties:
                    id:
                      nullable: true
                      type: string
                      description: Identity id
                      example: 2c9180857182305e0171993735622948
                    name:
                      nullable: true
                      type: string
                      description: Alternate unique identifier for the identity (alias / search field name).
                      example: alison.ferguso
                    displayName:
                      nullable: true
                      type: string
                      description: Human-readable display name of the identity.
                      example: Alison Ferguso
                    email:
                      nullable: true
                      type: string
                      description: Email address of identity.
                      example: alison.ferguso@acme-solar.com
                    identityState:
                      nullable: true
                      type: string
                      enum:
                        - ACTIVE
                        - INACTIVE_SHORT_TERM
                        - INACTIVE_LONG_TERM
                        - null
                      example: ACTIVE
                      description: The current state of the identity, which determines how SailPoint Identity Security interacts with the identity.
                    cloudLifecycleState:
                      nullable: true
                      type: string
                      description: The lifecycle status for the identity
                      example: Active
                    manager:
                      nullable: true
                      allOf:
                        - type: object
                          title: Public Identity V2 Manager
                          description: Manager reference for a public identity search result
                          required:
                            - id
                            - name
                            - displayName
                          properties:
                            id:
                              nullable: true
                              type: string
                              description: Manager identity id
                              example: 2c9180a46faadee4016fb4e018c20639
                            name:
                              nullable: true
                              type: string
                              description: Manager alias / technical name
                              example: thomas.edison
                            displayName:
                              nullable: true
                              type: string
                              description: Manager display name. Null when absent from the search hit.
                              example: Thomas Edison
                      description: Manager of this identity, or null when none
                    attributes:
                      type: object
                      additionalProperties:
                        nullable: true
                        type: string
                      description: Configured public identity attributes only (from visible-attributes configuredAttributes). Missing keys are omitted; present null values are returned as null.
                      example:
                        country: US
              example:
                - id: 2c9180857182305e0171993735622948
                  name: sample.user
                  displayName: Sample User
                  email: someemail@identitynow.com
                  identityState: ACTIVE
                  cloudLifecycleState: Active
                  manager:
                    id: 2c9180a46faadee4016fb4e018c20639
                    name: thomas.edison
                    displayName: Thomas Edison
                  attributes:
                    country: US
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
        '404':
          description: Not Found - returned if the request URL refers to a resource or object that does not exist
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
                '404':
                  summary: An example of a 404 response object
                  value:
                    detailCode: 404 Not found
                    trackingId: b21b1f7ce4da4d639f2c62a57171b427
                    messages:
                      - locale: en-US
                        localeOrigin: DEFAULT
                        text: The server did not find a current representation for the target resource.
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
