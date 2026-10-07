## OpenAPI

```yaml POST /reports/v1/run
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
  /reports/v1/run:
    post:
      description: Use this API to run a report according to report input details. If non-concurrent task is already running then it returns, otherwise new task creates and returns.
      operationId: startReportV1
      security:
        - userAuth:
            - sp:report:manage
        - applicationAuth:
            - sp:report:manage
      requestBody:
        content:
          application/json:
            schema:
              type: object
              description: Details about report to be processed.
              properties:
                reportType:
                  type: string
                  enum:
                    - ACCOUNTS
                    - IDENTITIES_DETAILS
                    - IDENTITIES
                    - IDENTITY_PROFILE_IDENTITY_ERROR
                    - ORPHAN_IDENTITIES
                    - SEARCH_EXPORT
                    - UNCORRELATED_ACCOUNTS
                  description: Use this property to define what report should be processed in the RDE service.
                  example: ACCOUNTS
                arguments:
                  anyOf:
                    - title: ACCOUNTS
                      type: object
                      description: Arguments for Account Export report (ACCOUNTS)
                      required:
                        - application
                        - sourceName
                      properties:
                        application:
                          type: string
                          description: Source ID.
                          example: 2c9180897eSourceIde781782f705b9
                        sourceName:
                          type: string
                          description: Source name.
                          example: Active Directory
                    - title: IDENTITIES_DETAILS
                      type: object
                      description: Arguments for Identities Details report (IDENTITIES_DETAILS)
                      required:
                        - correlatedOnly
                      properties:
                        correlatedOnly:
                          type: boolean
                          description: Flag to specify if only correlated identities are included in report.
                          default: false
                          example: true
                    - title: IDENTITIES
                      type: object
                      description: Arguments for Identities report (IDENTITIES)
                      properties:
                        correlatedOnly:
                          type: boolean
                          description: Flag to specify if only correlated identities are included in report.
                          default: false
                          example: true
                    - title: IDENTITY_PROFILE_IDENTITY_ERROR
                      type: object
                      description: Arguments for Identity Profile Identity Error report (IDENTITY_PROFILE_IDENTITY_ERROR)
                      required:
                        - authoritativeSource
                      properties:
                        authoritativeSource:
                          type: string
                          description: Source ID.
                          example: 1234sourceId5678902
                    - title: ORPHAN_IDENTITIES
                      type: object
                      description: Arguments for Orphan Identities report (ORPHAN_IDENTITIES)
                      properties:
                        selectedFormats:
                          type: array
                          items:
                            type: string
                            enum:
                              - CSV
                              - PDF
                          description: Output report file formats. These are formats for calling GET endpoint as query parameter 'fileFormat'.  In case report won't have this argument there will be ['CSV', 'PDF'] as default.
                          example:
                            - CSV
                    - title: SEARCH_EXPORT
                      type: object
                      description: |
                        Arguments for Search Export report (SEARCH_EXPORT)

                        The report file generated will be a zip file containing csv files of the search results.
                      required:
                        - query
                      properties:
                        indices:
                          description: The names of the Elasticsearch indices in which to search. If none are provided, then all indices will be searched.
                          externalDocs:
                            description: Learn more about search indices here.
                            url: https://documentation.sailpoint.com/saas/help/search/searchable-fields.html
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
                            - entitlements
                        query:
                          description: The query using the Elasticsearch [Query String Query](https://www.elastic.co/guide/en/elasticsearch/reference/5.2/query-dsl-query-string-query.html#query-string) syntax from the Query DSL extended by SailPoint to support Nested queries.
                          type: string
                          example: name:a*
                        columns:
                          description: |
                            Comma separated string consisting of technical attribute names of fields to include in report.

                            Use `access.spread`, `apps.spread`, `accounts.spread` to include respective identity access details.

                            Use `accessProfiles.spread` to unclude access profile details.

                            Use `entitlements.spread` to include entitlement details.
                          type: string
                          example: displayName,firstName,lastName,email,created,attributes.cloudLifecycleState
                        sort:
                          description: The fields to be used to sort the search results. Use + or - to specify the sort direction.
                          type: array
                          items:
                            type: string
                          example:
                            - displayName
                            - +id
                    - title: UNCORRELATED_ACCOUNTS
                      type: object
                      description: Arguments for Uncorrelated Accounts report (UNCORRELATED_ACCOUNTS)
                      properties:
                        selectedFormats:
                          type: array
                          items:
                            type: string
                            enum:
                              - CSV
                              - PDF
                          description: Output report file formats. These are formats for calling GET endpoint as query parameter 'fileFormat'.  In case report won't have this argument there will be ['CSV', 'PDF'] as default.
                          example:
                            - CSV
                  example:
                    application: 2c9180897e7742b2017e781782f705b9
                    sourceName: Active Directory
                  description: The string-object map(dictionary) with the arguments needed for report processing.
              title: reportdetails
            examples:
              Account Export Report:
                summary: Account export report
                value:
                  reportType: ACCOUNTS
                  arguments:
                    application: 2c9180897eSourceIde781782f705b9
                    sourceName: Active Directory
              Identities Details Report:
                summary: Identities details report
                value:
                  reportType: IDENTITIES_DETAILS
                  arguments:
                    correlatedOnly: true
              Identities Report:
                summary: Identities report
                value:
                  reportType: IDENTITIES
                  arguments:
                    correlatedOnly: true
              Identity Profile Identity Error Report:
                summary: Identity profile identity error report
                value:
                  reportType: IDENTITY_PROFILE_IDENTITY_ERROR
                  arguments:
                    authoritativeSource: 2c9180847de347aa017de8ef09167792
              Orphan Identities Report:
                summary: Orphan identities report
                value:
                  reportType: ORPHAN_IDENTITIES
                  arguments:
                    selectedFormats:
                      - CSV
                      - PDF
              Search Export Report:
                summary: Search export report
                value:
                  reportType: SEARCH_EXPORT
                  arguments:
                    indices:
                      - identities
                    query: attributes.city:London
                    columns: displayName,firstName,lastName,email,attributes.city,created,attributes.cloudLifecycleState,access.spread
                    sort:
                      - +displayName
              Uncorrelated Accounts Report:
                summary: Uncorrelated accounts report
                value:
                  reportType: UNCORRELATED_ACCOUNTS
                  arguments:
                    selectedFormats:
                      - CSV
                      - PDF
        required: true
      responses:
        '200':
          description: Details about running report task.
          content:
            application/json:
              schema:
                type: object
                description: Details about job or task type, state and lifecycle.
                properties:
                  type:
                    type: string
                    enum:
                      - QUARTZ
                      - QPOC
                      - MENTOS
                      - QUEUED_TASK
                    description: Type of the job or task underlying in the report processing. It could be a quartz task, QPOC or MENTOS jobs or a refresh/sync task.
                    example: MENTOS
                  id:
                    type: string
                    description: Unique task definition identifier.
                    example: a248c16fe22222b2bd49615481311111
                  reportType:
                    type: string
                    enum:
                      - ACCOUNTS
                      - IDENTITIES_DETAILS
                      - IDENTITIES
                      - IDENTITY_PROFILE_IDENTITY_ERROR
                      - ORPHAN_IDENTITIES
                      - SEARCH_EXPORT
                      - UNCORRELATED_ACCOUNTS
                    description: Use this property to define what report should be processed in the RDE service.
                    example: IDENTITIES_DETAILS
                  description:
                    type: string
                    description: Description of the report purpose and/or contents.
                    example: A detailed view of the identities in the system.
                  parentName:
                    type: string
                    nullable: true
                    description: Name of the parent task/report if exists.
                    example: Audit Report
                  launcher:
                    type: string
                    description: Name of the report processing initiator.
                    example: cloudadmin
                  created:
                    type: string
                    description: Report creation date
                    format: date-time
                    example: '2020-09-07T42:14:00.364Z'
                  launched:
                    type: string
                    nullable: true
                    format: date-time
                    description: Report start date
                    example: '2020-09-07T42:14:00.521Z'
                  completed:
                    type: string
                    nullable: true
                    format: date-time
                    description: Report completion date
                    example: '2020-09-07T42:14:01.137Z'
                  completionStatus:
                    type: string
                    nullable: true
                    enum:
                      - SUCCESS
                      - WARNING
                      - ERROR
                      - TERMINATED
                      - TEMP_ERROR
                    description: Report completion status.
                    example: Success
                  messages:
                    type: array
                    description: List of the messages dedicated to the report.  From task definition perspective here usually should be warnings or errors.
                    example: []
                    items:
                      type: object
                      properties:
                        type:
                          type: string
                          description: Type of the message.
                          enum:
                            - INFO
                            - WARN
                            - ERROR
                          example: WARN
                        error:
                          type: boolean
                          default: false
                          description: Flag whether message is an error.
                          example: false
                        warning:
                          type: boolean
                          default: false
                          description: Flag whether message is a warning.
                          example: true
                        key:
                          type: string
                          description: Message string identifier.
                          example: 'The following account(s) failed to correlate: A,B,C'
                        localizedText:
                          type: string
                          description: Message context with the locale based language.
                          example: 'The following account(s) failed to correlate: A,B,C'
                  returns:
                    type: array
                    description: Task definition results, if necessary.
                    example: []
                    items:
                      type: object
                      properties:
                        displayLabel:
                          type: string
                          description: Attribute description.
                          example: ' '
                        attributeName:
                          type: string
                          description: System or database attribute name.
                          example: ' '
                  attributes:
                    type: object
                    description: Extra attributes map(dictionary) needed for the report.
                    example:
                      org: an-org
                  progress:
                    type: string
                    nullable: true
                    description: Current report state.
                    example: Initializing...
                title: taskresultdetails
              examples:
                identityDetailsReport:
                  summary: Identities details report task result.
                  value:
                    reportType: IDENTITIES_DETAILS
                    taskDefName: Identities Details Report
                    type: QUARTZ
                    id: a248c16fe22222b2bd49615481311111
                    created: '2023-09-07T42:14:00.364Z'
                    description: A detailed view of the identities in the system.
                    parentName: Audit Report
                    launcher: '9832285'
                    launched: '2023-09-07T42:14:00.521Z'
                    completed: '2023-09-07T42:14:01.137Z'
                    messages: []
                    returns: []
                    attributes:
                      org: an-org
                    progress: Initializing...
                searchExportReport:
                  summary: Identities details report task result.
                  value:
                    reportType: SEARCH_EXPORT
                    taskDefName: Search Export
                    type: QUARTZ
                    id: a248c16fe22222b2bd49615481311111
                    created: '2023-09-07T42:14:11.137Z'
                    description: Extract query data from ElasticSearch to CSV
                    parentName: null
                    launcher: T05293
                    launched: '2020-09-07T42:14:11.137Z'
                    completed: '2020-09-07T42:14:13.451Z'
                    messages: []
                    returns: []
                    attributes:
                      queryHash: 5e12cf79c67d92e23d4d8cb3e974f87d164e86d4a48d32ecf89645cacfd3f2
                      org: an-org
                      queryParams:
                        columns: displayName,firstName,lastName,email,created,attributes.cloudLifecycleState,tags,access.spread,apps.pread,accounts.spread
                        indices: identities
                        ownerId: 95ecba5c5444439c999aec638ce2a777
                        query: 700007
                        sort: displayName
                    progress: Initializing...
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
