## OpenAPI

```yaml GET /saved-searches/v1
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
  /saved-searches/v1:
    get:
      description: |
        Returns a list of saved searches.
      operationId: listSavedSearchesV1
      security:
        - userAuth:
            - sp:saved-search:read
      parameters:
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
        - name: filters
          in: query
          schema:
            type: string
          description: |-
            Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)

            Filtering is supported for the following fields and operators:

            **owner.id**: *eq*
          example: owner.id eq "7a724640-0c17-4ce9-a8c3-4a89738459c8"
      responses:
        '200':
          description: The list of requested saved searches.
          content:
            application/json:
              schema:
                type: array
                items:
                  type: object
                  allOf:
                    - type: object
                      properties:
                        id:
                          description: |
                            The saved search ID.
                          type: string
                          example: 0de46054-fe90-434a-b84e-c6b3359d0c64
                        owner:
                          description: |
                            The owner of the saved search.
                          type: object
                          properties:
                            type:
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
                              description: An enumeration of the types of DTOs supported within the IdentityNow infrastructure.
                              example: IDENTITY
                              title: dtotype
                            id:
                              description: |
                                The id of the object.
                              type: string
                              example: 2c91808568c529c60168cca6f90c1313
                          required:
                            - type
                            - id
                          title: typedreference
                        ownerId:
                          type: string
                          description: The ID of the identity that owns this saved search.
                          example: 2c91808568c529c60168cca6f90c1313
                        public:
                          type: boolean
                          description: Whether this saved search is visible to anyone but the owner. This field will always be false as there is no way to set a saved search as public at this time.
                          default: false
                          example: false
                    - type: object
                      properties:
                        name:
                          description: |
                            The name of the saved search.
                          type: string
                          example: Disabled accounts
                        description:
                          description: |
                            The description of the saved search.
                          type: string
                          nullable: true
                          example: Disabled accounts
                      title: savedsearchname
                    - type: object
                      properties:
                        created:
                          description: |
                            The date the saved search was initially created.
                          type: string
                          nullable: true
                          format: date-time
                          example: '2018-06-25T20:22:28.104Z'
                          title: datetime
                        modified:
                          description: |
                            The last date the saved search was modified.
                          type: string
                          nullable: true
                          format: date-time
                          example: '2018-06-25T20:22:28.104Z'
                          title: datetime
                        indices:
                          description: |
                            The names of the Elasticsearch indices in which to search.
                          type: array
                          items:
                            description: |-
                              Enum representing the currently supported indices.
                              Additional values may be added in the future without notice.
                            type: string
                            enum:
                              - accessprofiles
                              - accountactivities
                              - entitlements
                              - events
                              - identities
                              - roles
                              - '*'
                            example: identities
                            title: index
                          example:
                            - identities
                        columns:
                          description: |
                            The columns to be returned (specifies the order in which they will be presented) for each document type.

                            The currently supported document types are: _accessprofile_, _accountactivity_, _account_, _aggregation_, _entitlement_, _event_, _identity_, and _role_.
                          type: object
                          additionalProperties:
                            type: array
                            items:
                              type: object
                              properties:
                                field:
                                  description: |
                                    The name of the field.
                                  type: string
                                  example: email
                                header:
                                  description: |
                                    The value of the header.
                                  type: string
                                  example: Work Email
                              required:
                                - field
                              title: column
                          example:
                            identity:
                              - field: displayName
                                header: Display Name
                              - field: e-mail
                                header: Work Email
                        query:
                          description: |
                            The search query using Elasticsearch [Query String Query](https://www.elastic.co/guide/en/elasticsearch/reference/5.2/query-dsl-query-string-query.html#query-string) syntax from the Query DSL.
                          type: string
                          example: '@accounts(disabled:true)'
                        fields:
                          description: |
                            The fields to be searched against in a multi-field query.
                          type: array
                          nullable: true
                          items:
                            type: string
                          example:
                            - disabled
                        orderBy:
                          description: |
                            Sort by index. This takes precedence over the `sort` property.
                          type: object
                          additionalProperties:
                            type: array
                            items:
                              type: string
                          nullable: true
                          example:
                            identity:
                              - lastName
                              - firstName
                            role:
                              - name
                        sort:
                          description: |
                            The fields to be used to sort the search results.
                          type: array
                          items:
                            type: string
                          example:
                            - displayName
                          nullable: true
                        filters:
                          nullable: true
                          allOf:
                            - type: object
                              description: The filters to be applied for each filtered field name.
                              example:
                                attributes.cloudAuthoritativeSource:
                                  type: EXISTS
                                  exclude: true
                                accessCount:
                                  type: RANGE
                                  range:
                                    lower:
                                      value: '3'
                                created:
                                  type: RANGE
                                  range:
                                    lower:
                                      value: '2019-12-01'
                                      inclusive: true
                                    upper:
                                      value: '2020-01-01'
                                source.name:
                                  type: TERMS
                                  terms:
                                    - HR Employees
                                    - Corporate Active Directory
                                  exclude: true
                                protected:
                                  type: TERMS
                                  terms:
                                    - 'true'
                            - type: object
                              properties:
                                type:
                                  description: |-
                                    Enum representing the currently supported filter types.
                                    Additional values may be added in the future without notice.
                                  type: string
                                  enum:
                                    - EXISTS
                                    - RANGE
                                    - TERMS
                                  example: RANGE
                                  title: filtertype
                                range:
                                  type: object
                                  description: The range of values to be filtered.
                                  properties:
                                    lower:
                                      description: The lower bound of the range.
                                      type: object
                                      required:
                                        - value
                                      properties:
                                        value:
                                          description: The value of the range's endpoint.
                                          type: string
                                          example: '1'
                                        inclusive:
                                          description: Indicates if the endpoint is included in the range.
                                          type: boolean
                                          default: false
                                          example: false
                                      title: bound
                                    upper:
                                      description: The upper bound of the range.
                                      type: object
                                      required:
                                        - value
                                      properties:
                                        value:
                                          description: The value of the range's endpoint.
                                          type: string
                                          example: '1'
                                        inclusive:
                                          description: Indicates if the endpoint is included in the range.
                                          type: boolean
                                          default: false
                                          example: false
                                      title: bound
                                  title: range
                                terms:
                                  description: The terms to be filtered.
                                  type: array
                                  items:
                                    type: string
                                    example: account_count
                                exclude:
                                  description: Indicates if the filter excludes results.
                                  type: boolean
                                  default: false
                                  example: false
                              title: filter
                      required:
                        - indices
                        - query
                      title: savedsearchdetail
                  title: savedsearch
          headers:
            X-Total-Count:
              description: The total result count (returned only if the *count* parameter is specified as *true*).
              schema:
                type: integer
              example: 5
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
