## OpenAPI

```yaml POST /certification-campaigns/v1/campaign-templates/search
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
  /certification-campaigns/v1/campaign-templates/search:
    post:
      description: This executes a full-text search for campaign templates using the provided search string. It matches any campaign templates that match the search terms in the name or description field of the Campaign Template itself, or the name and description of the campaign defined by the template. Required roles are ORG_ADMIN or CERT_ADMIN.
      operationId: searchCampaignTemplatesV1
      security:
        - userAuth:
            - idn:campaign-template:read
      parameters:
        - name: X-SailPoint-Experimental
          in: header
          description: Use this header to enable this experimental API.
          example: 'true'
          schema:
            type: string
            default: 'true'
          required: true
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
          name: sorters
          schema:
            type: string
            format: comma-separated
          description: |-
            Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)

            Sorting is supported for the following fields: **name, created, modified**
          example: name
          required: false
        - in: query
          name: filters
          schema:
            type: string
          description: |-
            Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)

            Filtering is supported for the following fields and operators:

            **id**: *eq, ne, in, gt, ge, lt, le, sw, co*

            **name**: *eq, ne, in, gt, ge, lt, le, sw, co*
          example: name eq "Campaign Template"
          required: false
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              description: Search Request
              properties:
                queryString:
                  type: string
                  description: Query String
                  example: identity 2023
              title: SearchRequest
      responses:
        '200':
          description: Search was executed with the returned matching results
          content:
            application/json:
              schema:
                type: array
                items:
                  type: object
                  description: Campaign Template
                  properties:
                    id:
                      type: string
                      format: uuid
                      description: ID of the campaign template
                      example: 2c9079b2-70a2-66a6-a170-a277bb960008
                    name:
                      type: string
                      description: Name of the campaign template.
                      example: Manager Campaign Template
                    description:
                      type: string
                      description: Description of the campaign template.
                      example: Template for the annual manager campaign.
                    type:
                      type: string
                      description: Type of the campaign.
                      enum:
                        - IDENTITY
                        - UNCORRELATED_ACCOUNT
                        - MACHINE_ACCOUNT
                      example: IDENTITY
                      title: CampaignType
                    ownerId:
                      type: string
                      description: The owner of this template, and the owner of campaigns generated from this template via a schedule. This field is automatically populated at creation time with the current user.
                      readOnly: true
                      example: 2c918086676d3e0601677611dbde220f
                    remediatorRef:
                      type: object
                      description: This determines who remediation tasks will be assigned to. Remediation tasks are created for each revoke decision on items in the campaign. The only legal remediator type is 'IDENTITY', and the chosen identity must be a Role Admin or Org Admin.
                      properties:
                        id:
                          type: string
                          description: The ID of the remediator.
                          example: 2c90ad2a70ace7d50170acf22ca90010
                        name:
                          type: string
                          description: The name of the remediator.
                          readOnly: true
                          example: Role Admin
                      required:
                        - id
                      title: CampaignRemediatorRef
                    mandatoryCommentRequirement:
                      type: string
                      description: Determines whether comments are required for decisions during certification reviews. You can require comments for all decisions, revoke-only decisions, or no decisions. By default, comments are not required for decisions.
                      enum:
                        - ALL_DECISIONS
                        - REVOKE_ONLY_DECISIONS
                        - NO_DECISIONS
                      example: NO_DECISIONS
                      default: NO_DECISIONS
                      title: CampaignMandatoryCommentRequirement
                    emailNotificationEnabled:
                      type: boolean
                      description: Enables email notification for this campaign
                      default: false
                      example: false
                    autoRevokeAllowed:
                      type: boolean
                      description: Allows auto revoke for this campaign
                      default: false
                      example: false
                    recommendationsEnabled:
                      type: boolean
                      description: Enables IAI for this campaign. Accepts true even if the IAI product feature is off. If IAI is turned off then campaigns generated from this template will indicate false. The real value will then be returned if IAI is ever enabled for the org in the future.
                      default: false
                      example: true
                    sunsetCommentsRequired:
                      type: boolean
                      description: Determines if comments on sunset date changes are required.
                      default: true
                      example: true
                    reviewer:
                      type: object
                      description: The specified target will be the reviewer for all certifications in this campaign.
                      properties:
                        id:
                          type: string
                          description: The ID of the Identity or Governance Group
                          example: 0fbe863c063c4c88a35fd7f17e8a3df5
                        type:
                          type: string
                          description: Type of the reviewer of the campaign.
                          enum:
                            - ACCOUNT_OWNER
                            - GOVERNANCE_GROUP
                            - IDENTITY
                            - MANAGER
                            - OBJECT_OWNER
                            - SOURCE_OWNER
                          example: IDENTITY
                          title: CampaignReviewerType
                        name:
                          type: string
                          description: Human-readable display name of the Identity or Governance Group
                          example: William Wilson
                      required:
                        - type
                      title: Reviewer
                    deadlineDuration:
                      type: string
                      format: duration
                      description: The time period during which the campaign should be completed, formatted as an ISO-8601 Duration. When this template generates a campaign, the campaign's deadline will be the current date plus this duration. For example, if generation occurred on 2020-01-01 and this field was "P2W" (two weeks), the resulting campaign's deadline would be 2020-01-15 (the current date plus 14 days). If it is passed as empty then deadline is not set, but this need to be set before campaign activation api by using PATCH operation
                      example: P2W
                    campaignName:
                      description: The campaign name.
                      type: string
                      example: Manager Campaign
                    campaignDescription:
                      type: string
                      description: The campaign description.
                      example: Everyone needs to be reviewed by their manager
                    filterRef:
                      type: object
                      description: Determines which items will be included in this campaign. The default campaign filter is used if this field is left blank.
                      properties:
                        id:
                          type: string
                          format: uuid
                          description: The ID of whatever type of filter is being used.
                          example: e9f9a139-7b84-2fd5-a658-42087040d3ac
                        name:
                          type: string
                          description: Name of the filter
                          example: Test Filter
                      required:
                        - id
                        - name
                      title: CampaignFilterRef
                    searchBasedParams:
                      type: object
                      description: Must be set only if the campaign is created using SEARCH.
                      properties:
                        searchType:
                          type: string
                          description: If the campaign type is `Identity`, then the searchType must be set.
                          enum:
                            - IDENTITY
                            - ACCESS
                          example: ACCESS
                        query:
                          type: string
                          description: The scope for the campaign. If the searchType is `Identity`, then one of `query` or `identityIds` must be set.
                          example: admin
                        identityIds:
                          type: array
                          description: A direct list of identities to include in this campaign. If the searchType is `Identity`, then one of `query` or `identityIds` must be set.
                          items:
                            type: string
                          example:
                            - 0fbe863c063c4c88a35fd7f17e8a3df5
                        accessConstraints:
                          type: array
                          description: Further reduces the scope of the campaign by excluding identities (from `query` or `identityIds`) that do not have this access.
                          items:
                            type: object
                            properties:
                              type:
                                type: string
                                enum:
                                  - ENTITLEMENT
                                  - ACCESS_PROFILE
                                  - ROLE
                                description: Type of Access
                                example: ENTITLEMENT
                              ids:
                                description: Must be set only if operator is SELECTED.
                                type: array
                                items:
                                  type: string
                                example:
                                  - 2c90ad2a70ace7d50170acf22ca90010
                              operator:
                                type: string
                                enum:
                                  - ALL
                                  - SELECTED
                                description: Used to determine whether the scope of the campaign should be reduced for selected ids or all.
                                example: SELECTED
                            required:
                              - type
                              - operator
                            title: AccessConstraint
                      title: CampaignSearchBasedParams
                    sourceIds:
                      type: array
                      description: A direct list of sourceIds to include in this campaign.
                      items:
                        type: string
                      example:
                        - 0fbe863c063c4c88a35fd7f17e8a3df5
                    schedule:
                      type: object
                      title: Schedule
                      properties:
                        type:
                          type: string
                          description: Determines the overall schedule cadence. In general, all time period fields smaller than the chosen type can be configured. For example, a DAILY schedule can have 'hours' set, but not 'days'; a WEEKLY schedule can have both 'hours' and 'days' set.
                          enum:
                            - DAILY
                            - WEEKLY
                            - MONTHLY
                            - ANNUALLY
                            - CALENDAR
                          example: DAILY
                        months:
                          description: 'Specifies which months of a schedule are active. Only valid for ANNUALLY schedule types. Examples: On February and March: type LIST values "2", "3" Every 3 months, starting in January (quarterly): type LIST values "1" interval 3 Every two months between July and December: type RANGE values "7", "12" interval 2'
                          example:
                            type: LIST
                            values:
                              - '1'
                          type: object
                          title: Selector
                          properties:
                            type:
                              type: string
                              description: The type of a schedule selector - list or range.
                              enum:
                                - LIST
                                - RANGE
                              example: LIST
                            values:
                              type: array
                              description: A list of a selector values.
                              items:
                                type: string
                              example:
                                - '1'
                                - '2'
                                - '3'
                            interval:
                              type: integer
                              format: int32
                              description: Interval of the schedule selector
                              example: 2
                        days:
                          description: |-
                            Specifies which day(s) a schedule is active for. This is required for all schedule types. The "values" field holds different data depending on the type of schedule: WEEKLY: days of the week (1-7) MONTHLY: days of the month (1-31, L, L-1...) ANNUALLY:
                              if the "months" field is also set:
                                days of the month (1-31, L, L-1...); otherwise: ISO-8601 dates without year ("--12-31")
                            CALENDAR: ISO-8601 dates ("2020-12-31") Note that CALENDAR only supports the LIST type, and ANNUALLY does not support the RANGE type when provided with ISO-8601 dates without year. Examples: On Sundays: type LIST values "1" The second to last day of the month: type LIST values "L-1" From the 20th to the last day of the month: type RANGE values "20", "L" Every March 2nd: type LIST values "--03-02" On March 2nd, 2021: type: LIST values "2021-03-02"
                          example:
                            type: LIST
                            values:
                              - '1'
                          type: object
                          title: Selector
                          properties:
                            type:
                              type: string
                              description: The type of a schedule selector - list or range.
                              enum:
                                - LIST
                                - RANGE
                              example: LIST
                            values:
                              type: array
                              description: A list of a selector values.
                              items:
                                type: string
                              example:
                                - '1'
                                - '2'
                                - '3'
                            interval:
                              type: integer
                              format: int32
                              description: Interval of the schedule selector
                              example: 2
                        hours:
                          description: 'Specifies which hour(s) a schedule is active for. Examples: Every three hours starting from 8AM, inclusive: type LIST values "8" interval 3 During business hours: type RANGE values "9", "5" At 5AM, noon, and 5PM: type LIST values "5", "12", "17"'
                          example:
                            type: LIST
                            values:
                              - '1'
                          type: object
                          title: Selector
                          properties:
                            type:
                              type: string
                              description: The type of a schedule selector - list or range.
                              enum:
                                - LIST
                                - RANGE
                              example: LIST
                            values:
                              type: array
                              description: A list of a selector values.
                              items:
                                type: string
                              example:
                                - '1'
                                - '2'
                                - '3'
                            interval:
                              type: integer
                              format: int32
                              description: Interval of the schedule selector
                              example: 2
                        expiration:
                          type: string
                          format: date-time
                          description: Specifies the time after which this schedule will no longer occur.
                          example: '2025-09-15T16:00:00.000Z'
                        timeZoneId:
                          type: string
                          description: The time zone to use when running the schedule. For instance, if the schedule is scheduled to run at 1AM, and this field is set to "CST", the schedule will run at 1AM CST.
                          example: America/Chicago
                      required:
                        - type
                    scheduleStatus:
                      type: string
                      enum:
                        - NOT_SCHEDULED
                        - SCHEDULING
                        - SCHEDULED
                        - SCHEDULE_FAILED
                      readOnly: true
                      description: Used to determine current status of campaign template schedule
                      example: SCHEDULED
                    scheduleError:
                      type: string
                      description: Details about scheduling error
                      readOnly: true
                      example: Failed to schedule campaign template due to invalid scheduling details
                    created:
                      type: string
                      description: Creation date of Campaign Template
                      readOnly: true
                      format: date-time
                      example: '2020-03-05T22:44:00.364Z'
                    modified:
                      type: string
                      description: Modification date of Campaign Template
                      readOnly: true
                      format: date-time
                      example: '2020-03-05T22:52:09.969Z'
                  required:
                    - id
                    - name
                    - description
                    - type
                    - ownerId
                    - campaignName
                    - campaignDescription
                    - reviewer
                    - created
                    - modified
                  title: CampaignTemplateGet
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
