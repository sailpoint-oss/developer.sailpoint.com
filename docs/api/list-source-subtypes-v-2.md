## OpenAPI

```yaml GET /source-subtypes/v2
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
  /source-subtypes/v2:
    get:
      description: |-
        List machine account subtypes defined at the source tier and the connector tier.

        Without `sourceId`, the API lists every subtype in the tenant, and `filters` and `sorters` apply.

        With `sourceId`, the API returns the source's effective subtypes: the subtypes defined for the source plus the
        subtypes defined for the source's connector type. When a source subtype has the same technical name as a connector
        subtype, only the source subtype is returned and its `origin` is `CONNECTOR`. `filters` cannot be used in this mode.
        Use `targetType` to return only one tier of the effective set. An unknown `sourceId` returns `404`.

        With `sourceId` and `effectiveSet=false`, the API returns only the subtypes defined for that source, and `filters`
        apply.

        The caller needs the `idn:source-subtypes:read` right.

        This API returns `404` when Machine Identity Security or tiered subtype configuration is not enabled for the tenant.
      operationId: listSourceSubtypesV2
      security:
        - userAuth:
            - idn:sources:read
            - idn:sources:manage
            - idn:connector-subtypes:manage
        - applicationAuth:
            - idn:sources:read
            - idn:sources:manage
            - idn:connector-subtypes:manage
      parameters:
        - in: query
          name: sourceId
          required: false
          schema:
            type: string
          description: ID of a source. When supplied, the API returns subtypes for that source instead of the whole tenant.
          example: 6d0458373bec4b4b80460992b76016da
        - in: query
          name: effectiveSet
          required: false
          schema:
            type: boolean
            default: true
          description: Controls what is returned for `sourceId`. When `true`, which is the default when `sourceId` is supplied, the API returns the source's effective subtypes across both tiers. When `false`, the API returns only the subtypes defined for the source. Passing `effectiveSet=true` explicitly without `sourceId` returns `400`.
          example: true
        - in: query
          name: targetType
          required: false
          schema:
            type: string
            enum:
              - SOURCE
              - CONNECTOR
          description: Returns only effective subtypes of this tier. Requires `sourceId`, and cannot be combined with `effectiveSet=false`; otherwise the API returns `400`.
          example: CONNECTOR
        - in: query
          name: includeConfigs
          required: false
          schema:
            type: boolean
            default: false
          description: When `true`, each item includes a summary of its machine account creation configuration in `config`.
          example: false
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
          name: filters
          required: false
          schema:
            type: string
          example: targetType eq "CONNECTOR"
          description: |-
            Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)

            Filtering is supported for the following fields and operators:

            **id**: *eq, ne, in*

            **technicalName**: *eq, ne, in, sw, co*

            **displayName**: *eq, ne, in, sw, co*

            **source.id**: *eq, ne, in, sw, co*

            **targetType**: *eq, ne, in, sw, co*

            **targetId**: *eq, ne, in, sw, co*

            **targetName**: *eq, ne, in, sw, co, isnull*

            **classification**: *eq, ne, in, sw, co*

            **type**: *eq, ne, in, sw, co*

            **created**: *gt, ge, lt, le*

            **modified**: *gt, ge, lt, le*

            Filters cannot be used with `sourceId` unless `effectiveSet=false`; otherwise the API returns `400`.
        - in: query
          name: sorters
          required: false
          schema:
            type: string
            format: comma-separated
          example: displayName
          description: |-
            Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)

            Sorting is supported for the following fields: **id, technicalName, displayName, source.id, targetType, targetId, targetName, classification, type, created, modified**
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
          description: List of machine account subtypes. Items include `config` when `includeConfigs=true`. The `X-Total-Count` header is returned when `count=true`.
          content:
            application/json:
              schema:
                type: array
                items:
                  title: Source Subtype V2 With Config
                  description: A machine account subtype list item, returned when `includeConfigs=true`.
                  allOf:
                    - type: object
                      title: Source Subtype V2
                      description: A machine account subtype defined at the source tier or the connector tier.
                      properties:
                        id:
                          type: string
                          format: uuid
                          description: Unique identifier for the subtype.
                          example: 43bdd144-4b17-4fce-a744-17c7fd3e717b
                        technicalName:
                          type: string
                          description: Technical name of the subtype.
                          example: service-account
                        displayName:
                          type: string
                          description: Display name of the subtype.
                          example: Service Account
                        description:
                          type: string
                          description: Description of the subtype.
                          example: Accounts used by automated services.
                        type:
                          type: string
                          description: Entity type of the subtype.
                          example: MACHINE
                        targetType:
                          type: string
                          enum:
                            - SOURCE
                            - CONNECTOR
                            - CONNECTOR_VARIANT
                          description: Tier the subtype is defined at. `SOURCE` subtypes apply to one source. `CONNECTOR` subtypes apply to every source of a connector type. `CONNECTOR_VARIANT` is reserved for future use.
                          example: CONNECTOR
                        targetId:
                          type: string
                          description: Scope key of the subtype. The source ID for `SOURCE` subtypes, or the connector type for `CONNECTOR` subtypes.
                          example: active-directory
                        targetName:
                          type: string
                          nullable: true
                          description: Display name of the target source or connector.
                          example: Active Directory
                        classification:
                          type: string
                          enum:
                            - MACHINE
                          description: Classification of the subtype.
                          example: MACHINE
                        origin:
                          type: string
                          nullable: true
                          enum:
                            - SOURCE
                            - CONNECTOR
                            - CONNECTOR_VARIANT
                          description: Tier of the parent subtype this subtype overrides. Set to `CONNECTOR` when a source subtype replaces a connector subtype with the same technical name in a source's effective subtype list. Otherwise `null`.
                          example: null
                        profile:
                          type: object
                          nullable: true
                          description: Connector variant profile. Reserved for future use and currently always `null`.
                          example: null
                          properties:
                            id:
                              type: string
                              format: uuid
                              description: Unique identifier for the connector variant profile.
                              example: 9a4b7d2e-1c3f-4e5a-8b6c-7d8e9f0a1b2c
                            connectorType:
                              type: string
                              description: Connector type of the variant.
                              example: JDBC
                            variant:
                              type: string
                              description: Name of the connector variant.
                              example: MySql
                        systemManaged:
                          type: boolean
                          readOnly: true
                          description: Indicates whether the subtype is managed by the system.
                          default: false
                          example: false
                        created:
                          type: string
                          format: date-time
                          description: Creation timestamp.
                          example: '2026-07-28T16:13:42.801Z'
                        modified:
                          type: string
                          format: date-time
                          description: Last modified timestamp.
                          example: '2026-07-28T16:13:42.750Z'
                        target:
                          type: object
                          title: Subtype Target
                          description: Reference to the source or connector the subtype is defined for.
                          properties:
                            type:
                              type: string
                              enum:
                                - SOURCE
                                - CONNECTOR
                              description: Type of the target.
                              example: CONNECTOR
                            id:
                              type: string
                              description: Source ID for a `SOURCE` target, or connector type for a `CONNECTOR` target.
                              example: active-directory
                            name:
                              type: string
                              description: Name of the source or connector.
                              example: Active Directory
                            supportsProvisioning:
                              type: boolean
                              default: false
                              description: Indicates whether the target supports provisioning. Only returned when you get a single subtype by ID.
                              example: true
                    - type: object
                      properties:
                        config:
                          type: object
                          nullable: true
                          description: Summary of the subtype's machine account creation configuration. `null` when the subtype is not a `MACHINE` subtype or has no machine account creation configuration.
                          properties:
                            machineAccountCreate:
                              type: object
                              description: Machine account creation settings.
                              properties:
                                accountCreateEnabled:
                                  type: boolean
                                  default: false
                                  description: Indicates whether machine account creation is enabled for the subtype.
                                  example: true
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
