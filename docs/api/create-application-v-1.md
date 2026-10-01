## OpenAPI

```yaml POST /das/v1/applications
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
  /das/v1/applications:
    post:
      description: This endpoint creates a new application in Data Access Security with the specified configuration.
      operationId: createApplicationV1
      security:
        - userAuth:
            - das:applications:manage
        - applicationAuth:
            - das:applications:manage
      requestBody:
        description: Request body containing the details required to create a new application.
        content:
          application/json:
            schema:
              required:
                - applicationType
                - name
              type: object
              properties:
                applicationType:
                  description: The type of application to be created (e.g., Active Directory, AWS S3, etc.).
                  example: 9
                  type: integer
                  format: int32
                  enum:
                    - 1
                    - 8
                    - 9
                    - 11
                    - 15
                    - 20
                    - 21
                    - 24
                    - 25
                    - 27
                    - 28
                    - 29
                    - 33
                    - 35
                    - 37
                  title: applicationtype
                name:
                  type: string
                  description: The display name of the application.
                  example: HR File Server
                description:
                  type: string
                  nullable: true
                  description: A brief description of the application and its purpose.
                  example: Stores HR documents and employee records.
                tags:
                  type: array
                  items:
                    type: object
                    properties:
                      key:
                        type: integer
                        format: int64
                        description: The key for the tag or pair.
                        example: 1
                      value:
                        type: string
                        nullable: true
                        description: The value for the tag or pair.
                        example: Confidential
                    title: int64stringkeyvaluepair
                  nullable: true
                  description: A list of tags to categorize or identify the application.
                  example:
                    - key: 1
                      value: Confidential
                identityCollectorId:
                  type: integer
                  format: int64
                  nullable: true
                  description: The unique identifier for the identity collector associated with this application.
                  example: 123456789
                adIdentityCollectorId:
                  type: integer
                  format: int64
                  nullable: true
                  description: The unique identifier for the AD identity collector.
                  example: 987654321
                nisIdentityCollectorId:
                  type: integer
                  format: int64
                  nullable: true
                  description: The unique identifier for the NIS identity collector.
                  example: 192837465
                applicationCrawlerSettings:
                  description: Settings for crawling the application to discover resources.
                  allOf:
                    - type: object
                      properties:
                        isEnabled:
                          type: boolean
                          description: Indicates whether the feature or configuration is enabled.
                          example: true
                          default: false
                        clusterId:
                          type: string
                          nullable: true
                          description: The identifier of the cluster associated with this configuration, if applicable.
                          example: cluster-001
                      title: basesettings
                    - type: object
                      properties:
                        calculateResourceSize:
                          description: Specifies when resource sizes should be calculated during the crawl operation.
                          example: 2
                          enum:
                            - 0
                            - 1
                            - 2
                            - 3
                          type: integer
                          format: int32
                          title: crawlresourcessizesoptions
                        crawlSnapshotsFolder:
                          type: boolean
                          nullable: true
                          description: Indicates whether to crawl the snapshots folder.
                          example: true
                          default: false
                        crawlMailboxes:
                          type: boolean
                          nullable: true
                          description: Indicates whether to crawl mailboxes.
                          example: false
                          default: false
                        crawlPublicFolders:
                          type: boolean
                          nullable: true
                          description: Indicates whether to crawl public folders.
                          example: true
                          default: false
                        excludedPathsByRegex:
                          type: string
                          nullable: true
                          description: Regular expression pattern for paths to exclude from crawling.
                          example: ^/archive/.*
                        crawlTopLevelShares:
                          type: array
                          items:
                            type: string
                          nullable: true
                          description: List of top-level shares to crawl.
                          example:
                            - share1
                            - share2
                        excludedResources:
                          type: array
                          items:
                            type: string
                          nullable: true
                          description: List of resource identifiers to exclude from crawling.
                          example:
                            - resourceA
                            - resourceB
                        includeResources:
                          type: array
                          items:
                            type: string
                          nullable: true
                          description: List of resource identifiers to include in crawling.
                          example:
                            - resourceX
                            - resourceY
                  title: applicationcrawlersettings
                permissionCollectorSettings:
                  description: Settings for collecting permissions from the application.
                  allOf:
                    - type: object
                      properties:
                        isEnabled:
                          type: boolean
                          description: Indicates whether the feature or configuration is enabled.
                          example: true
                          default: false
                        clusterId:
                          type: string
                          nullable: true
                          description: The identifier of the cluster associated with this configuration, if applicable.
                          example: cluster-001
                      title: basesettings
                      description: Inherits base settings for permission collector configuration.
                    - type: object
                      properties:
                        analyzeUniquePermissions:
                          type: boolean
                          nullable: true
                          description: Indicates whether unique permissions should be analyzed for resources.
                          example: true
                          default: false
                        calculateEffectivePermissions:
                          type: boolean
                          nullable: true
                          description: Indicates whether effective permissions should be calculated.
                          example: true
                          default: false
                        calculateRiskiestPermissions:
                          type: boolean
                          nullable: true
                          description: Indicates whether riskiest permissions should be calculated.
                          example: false
                          default: false
                        effectivePermissionsSource:
                          type: string
                          nullable: true
                          description: Source for effective permissions calculation.
                          example: S3
                  title: permissioncollectorsettings
                dataClassificationSettings:
                  description: Settings for classifying data within the application.
                  allOf:
                    - type: object
                      properties:
                        isEnabled:
                          type: boolean
                          description: Indicates whether the feature or configuration is enabled.
                          example: true
                          default: false
                        clusterId:
                          type: string
                          nullable: true
                          description: The identifier of the cluster associated with this configuration, if applicable.
                          example: cluster-001
                      title: basesettings
                      description: |
                        Inherits base settings for data classification configuration.
                        Fields:
                          isEnabled: Indicates whether the feature or configuration is enabled.
                            Example: true
                          clusterId: The identifier of the cluster associated with this configuration, if applicable.
                            Example: "cluster-001"
                    - type: object
                      description: |
                        Extend with additional data classification configuration properties as needed.
                      example:
                        isEnabled: true
                        clusterId: cluster-001
                  title: dataclassificationsettings
                activityConfigurationSettings:
                  description: Settings for tracking and configuring activity within the application.
                  allOf:
                    - type: object
                      properties:
                        isEnabled:
                          type: boolean
                          description: Indicates whether the feature or configuration is enabled.
                          example: true
                          default: false
                        clusterId:
                          type: string
                          nullable: true
                          description: The identifier of the cluster associated with this configuration, if applicable.
                          example: cluster-001
                      title: basesettings
                    - type: object
                      description: Inherits base settings for activity configuration.
                      properties:
                        retentionTimePeriod:
                          type: integer
                          format: int32
                          description: The time period for retaining activity logs.
                          example: 30
                        retentionTimeType:
                          type: string
                          nullable: true
                          description: The type of retention period (e.g., days, months, years).
                          example: days
                        excludeUsers:
                          type: array
                          items:
                            type: string
                          nullable: true
                          description: List of user identifiers to exclude from activity tracking.
                          example:
                            - user1
                            - user2
                        excludeFolders:
                          type: array
                          items:
                            type: string
                          nullable: true
                          description: List of folder paths to exclude from activity tracking.
                          example:
                            - /tmp
                            - /archive
                        excludeFileExtensions:
                          type: array
                          items:
                            type: string
                          nullable: true
                          description: List of file extensions to exclude from activity tracking.
                          example:
                            - .log
                            - .bak
                        excludeActions:
                          type: array
                          items:
                            type: string
                          nullable: true
                          description: List of actions to exclude from activity tracking.
                          example:
                            - delete
                            - move
                  title: activityconfigurationsettings
                executeNow:
                  type: boolean
                  description: If true, the application setup will be executed immediately after creation.
                  example: false
                  default: false
              title: basecreateapplicationrequest
        required: true
      responses:
        '204':
          description: No Content
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
