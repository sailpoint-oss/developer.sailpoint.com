## OpenAPI

```yaml GET /certification-campaigns/v1/campaigns
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
  /certification-campaigns/v1/campaigns:
    get:
      description: List all the campaign details. Required roles are ORG_ADMIN or CERT_ADMIN.
      operationId: listCampaignsV1
      security:
        - userAuth:
            - idn:campaign:read
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
          schema:
            type: string
          required: false
          description: |-
            Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)

            Filtering is supported for the following fields and operators:

            **id**: *eq, in*

            **name**: *eq, sw, co*

            **status**: *eq, in, ne*

            Possible values are [PENDING, STAGED, CANCELING, ACTIVATING, ACTIVE, COMPLETING, COMPLETED, ERROR]
          example: name eq "Manager Campaign"
        - in: query
          name: sorters
          schema:
            type: string
            format: comma-separated
          required: false
          description: |-
            Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)

            Sorting is supported for the following fields: **name, created, modified, deadline, status, totalCertifications, completedCertifications**
          example: name,-created
      responses:
        '200':
          description: The list of all the campaign details.
          content:
            application/json:
              schema:
                type: array
                items:
                  type: object
                  title: SlimCampaign
                  properties:
                    id:
                      type: string
                      format: uuid
                      readOnly: true
                      description: ID of the campaign
                      example: 2c9079b2-70a2-66a6-a170-a2779fcb0007
                    name:
                      description: The campaign name. If this object is part of a template, special formatting applies; see the `/campaign-templates/{id}/generate` endpoint documentation for details.
                      type: string
                      example: Manager Campaign
                    description:
                      type: string
                      description: The campaign description. If this object is part of a template, special formatting applies; see the `/campaign-templates/{id}/generate` endpoint documentation for details.
                      example: Everyone needs to be reviewed by their manager
                    deadline:
                      type: string
                      format: date
                      description: The campaign's completion deadline date.
                      example: '2020-03-15'
                    deadlineTimezone:
                      type: string
                      description: The timezone must be in a valid ISO 8601 format. Timezones in ISO 8601 are represented as UTC (represented as 'Z') or as an offset from UTC. The offset format can be +/-hh:mm, +/-hhmm, or +/-hh.
                      example: '-05:00'
                    deadlineTime:
                      type: string
                      format: date-time
                      description: Calculated deadline time in UTC timezone of the campaign calculated from the deadline and the deadlineTimezone
                      example: '2018-10-19T13:49:37.385Z'
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
                    type:
                      type: string
                      description: Type of the campaign.
                      enum:
                        - IDENTITY
                        - UNCORRELATED_ACCOUNT
                        - MACHINE_ACCOUNT
                      example: IDENTITY
                      title: CampaignType
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
                    alerts:
                      type: array
                      description: A list of errors and warnings that have accumulated.
                      readOnly: true
                      items:
                        type: object
                        properties:
                          level:
                            type: string
                            enum:
                              - ERROR
                              - WARN
                              - INFO
                            description: Denotes the level of the message
                            example: ERROR
                          localizations:
                            type: array
                            items:
                              type: object
                              properties:
                                locale:
                                  type: string
                                  description: The locale for the message text, a BCP 47 language tag.
                                  example: en-US
                                localeOrigin:
                                  type: string
                                  enum:
                                    - DEFAULT
                                    - REQUEST
                                  description: An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.
                                  example: DEFAULT
                                  title: LocaleOrigin
                                text:
                                  type: string
                                  description: Actual text of the error message in the indicated locale.
                                  example: The request was syntactically correct but its content is semantically invalid.
                              title: ErrorMessageDto
                        title: Alert
                      default: []
                    created:
                      type: string
                      readOnly: true
                      format: date-time
                      description: Created time of the campaign
                      example: '2020-03-03T22:15:13.611Z'
                    modified:
                      type: string
                      readOnly: true
                      format: date-time
                      description: Modified time of the campaign
                      example: '2020-03-03T22:20:12.674Z'
                    totalCertifications:
                      type: integer
                      format: int32
                      description: The total number of certifications in this campaign.
                      readOnly: true
                      example: 100
                    completedCertifications:
                      type: integer
                      format: int32
                      description: The number of completed certifications in this campaign.
                      readOnly: true
                      example: 10
                    status:
                      type: string
                      description: The campaign's current status.
                      readOnly: true
                      enum:
                        - ACTIVE
                        - ACTIVATING
                        - CANCELING
                        - COMPLETED
                        - COMPLETING
                        - ERROR
                        - PENDING
                        - STAGED
                      example: ACTIVE
                    generationType:
                      allOf:
                        - type: string
                          description: Generation type of the campaign.
                          enum:
                            - SEARCH
                            - CAMPAIGN_FILTER
                            - NO_FILTER
                          example: CAMPAIGN_FILTER
                          title: CampaignGenerationType
                      readOnly: true
                  required:
                    - name
                    - description
                    - type
              examples:
                Campaigns:
                  value:
                    - id: 2c918086-719e-ec07-0171-a7e3355a360a
                      name: Manager Review
                      description: A review of everyone's access by their manager.
                      deadline: '2020-12-25'
                      type: IDENTITY
                      status: ACTIVE
                      emailNotificationEnabled: false
                      autoRevokeAllowed: false
                      recommendationsEnabled: false
                      sunsetCommentsRequired: true
                      reviewer:
                        type: MANAGER
                      generationType: SEARCH
                      created: '2022-08-02T19:00:27.731Z'
                      totalCertifications: 10
                      completedCertifications: 3
                    - id: 7e1a731e-3fb8-45cf-be58-112ba4673ee4
                      name: Search Campaign
                      description: A review of access returned by a search.
                      deadline: '2022-07-26'
                      type: IDENTITY
                      status: ACTIVE
                      emailNotificationEnabled: false
                      autoRevokeAllowed: false
                      recommendationsEnabled: false
                      sunsetCommentsRequired: true
                      reviewer:
                        type: MANAGER
                      generationType: SEARCH
                      created: '2022-07-25T15:42:18.276Z'
                      totalCertifications: 5
                      completedCertifications: 3
                    - id: 2c918086-719e-ec07-0171-a7e3355a412b
                      name: AD Source Review
                      description: A review of the Active Directory source.
                      deadline: '2020-12-25'
                      type: IDENTITY
                      status: STAGED
                      emailNotificationEnabled: true
                      autoRevokeAllowed: false
                      recommendationsEnabled: false
                      sunsetCommentsRequired: true
                      reviewer:
                        type: SOURCE_OWNER
                      generationType: CAMPAIGN_FILTER
                      created: '2022-07-27T17:04:19.027Z'
                      totalCertifications: 7
                      completedCertifications: 3
                    - id: 3b2e2e58-21e8-4127-b6d6-93d41c40623b
                      name: Machine Accounts Campaign
                      description: A review of machine accounts.
                      deadline: '2020-12-25'
                      type: MACHINE_ACCOUNT
                      status: ACTIVE
                      emailNotificationEnabled: false
                      autoRevokeAllowed: false
                      recommendationsEnabled: false
                      sunsetCommentsRequired: true
                      reviewer:
                        type: ACCOUNT_OWNER
                      generationType: CAMPAIGN_FILTER
                      created: '2022-08-02T20:29:51.065Z'
                      totalCertifications: 4
                      completedCertifications: 1
          headers:
            X-Total-Count:
              description: Total number of items, regardless of paging limits.
              schema:
                type: integer
                format: int64
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
