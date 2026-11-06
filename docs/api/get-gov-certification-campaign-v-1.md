## OpenAPI

```yaml GET /certification-campaigns/v1/campaigns/{id}
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
  /certification-campaigns/v1/campaigns/{id}:
    get:
      description: Retrieves information for an existing campaign using the campaign's ID. Required roles are ORG_ADMIN or CERT_ADMIN. Reviewers for the certifications under this campaign can also call this API.
      operationId: getGovCertificationCampaignV1
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
        - in: path
          name: id
          schema:
            type: string
            format: uuid
          required: true
          description: The ID of the campaign to be retrieved
          example: 2c918085-71bc-4cf8-a171-c23e4b4221fc
          x-sailpoint-resource-operation-id: listCampaignsV1
      responses:
        '200':
          description: A campaign object
          content:
            application/json:
              schema:
                type: object
                title: Campaign
                properties:
                  id:
                    type: string
                    format: uuid
                    readOnly: true
                    description: ID of the campaign
                    example: 2c9079b2-70a2-66a6-a170-a2779fcb0007
                  name:
                    description: The campaign name.
                    type: string
                    example: Manager Campaign
                  description:
                    type: string
                    description: The campaign description.
                    example: Everyone needs to be reviewed by their manager
                  deadline:
                    type: string
                    format: date
                    description: The campaign's completion deadline date. While creating campaign, If deadline is passed as empty then automatically it will be set for two weeks later from current time.
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
                  autoActivate:
                    type: boolean
                    description: If true, the campaign is set to activate automatically after generation completes. Campaigns stored without this attribute default to false.
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
                  inlineFilter:
                    type: object
                    description: Inline Campaign Filter Details
                    properties:
                      mode:
                        type: string
                        description: The mode/type of Filter, where it is of INCLUSION or EXCLUSION type. INCLUSION type will include the data in generated campaign as per specified in criteria, whereas EXCLUSION type will exclude the the data in generated campaign as per specified in criteria.
                        enum:
                          - INCLUSION
                          - EXCLUSION
                        example: INCLUSION
                        title: CampaignFilterType
                      criteriaList:
                        type: array
                        description: List of criteria.
                        minItems: 1
                        items:
                          type: object
                          properties:
                            criteriaType:
                              type: string
                              enum:
                                - COMPOSITE
                                - ROLE
                                - IDENTITY
                                - IDENTITY_ATTRIBUTE
                                - ENTITLEMENT
                                - ACCESS_PROFILE
                                - SOURCE
                                - ACCOUNT
                                - ACCOUNT_ATTRIBUTE
                                - IDENTITY_PROFILE
                                - APP
                                - ACCESS
                              description: Type of the criteria in the filter.
                              example: IDENTITY_ATTRIBUTE
                              title: CriteriaType
                            operation:
                              type: string
                              enum:
                                - EQUALS
                                - NOT_EQUALS
                                - CONTAINS
                                - STARTS_WITH
                                - ENDS_WITH
                                - IN
                                - AND
                                - OR
                              description: Operation on a specific criteria
                              example: EQUALS
                              title: Operation
                            criteriaProperty:
                              type: string
                              description: The specified key from the Type of criteria.
                              example: displayName
                            criteriaValue:
                              type: string
                              description: The value for the specified key from the Type of Criteria. Used for scalar operations. Must be absent when operation is IN.
                              example: Allie
                            criteriaValues:
                              type: array
                              description: List of values for the IN operation. Required when operation is IN; must be absent for all other operations.
                              items:
                                type: string
                              example:
                                - 8a32c3d5f2864555948e63867c377ca2
                                - 9b41d4e6g3975666059f74978d488db3
                            children:
                              type: array
                              description: List of child criteria. Applicable only for COMPOSITE criteriaType
                              items: circular(Criteria)
                              example:
                                - criteriaType: IDENTITY
                                  criteriaProperty: DISPLAY_NAME
                                  criteriaValue: support
                                  operation: EQUALS
                          required:
                            - criteriaType
                            - operation
                          title: Criteria
                        example:
                          - criteriaType: IDENTITY
                            criteriaProperty: DISPLAY_NAME
                            criteriaValue: support
                            operation: EQUALS
                    required:
                      - mode
                      - criteriaList
                    title: CampaignFilterInline
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
                  ownerId:
                    type: string
                    description: The campaign owner is the Identity that created the campaign.
                    example: 4030ca72bdfb4980b51b8fcee948be50
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
                  status:
                    type: string
                    description: The campaign's current status.
                    readOnly: true
                    enum:
                      - PENDING
                      - STAGED
                      - CANCELING
                      - ACTIVATING
                      - ACTIVE
                      - COMPLETING
                      - COMPLETED
                      - ERROR
                    example: ACTIVE
                  latestReports:
                    type: object
                    description: A map of the latest report for each report type
                    additionalProperties:
                      type: object
                      description: Summary of the latest campaign report
                      properties:
                        id:
                          type: string
                          format: uuid
                          description: The unique ID of the campaign report.
                          example: e1aeb0b6-0021-4f40-8bc7-5c56533214b3
                        name:
                          type: string
                          description: The human readable report name
                          example: ABC Campaign - Sign Off Report 2024-10-16_13_18UTC.pdf
                        created:
                          type: string
                          format: date-time
                          description: The date the report was created.
                          example: '2018-10-19T13:49:37.385Z'
                        status:
                          type: string
                          enum:
                            - IN_PROGRESS
                            - SUCCESS
                            - FAILED
                          description: The status of the report generation.
                          example: IN_PROGRESS
                          title: CampaignReportStatus
                      title: CampaignLatestReport
                    example: '{''STATUS'': {...},''SIGN_OFF'': {...}}'
                  sourceIds:
                    type: array
                    description: A direct list of sourceIds to include in this campaign.
                    items:
                      type: string
                    example:
                      - 0fbe863c063c4c88a35fd7f17e8a3df5
                  sourcesWithOrphanEntitlements:
                    type: array
                    description: Sources that have orphan entitlement line items for this campaign, as supplied when the campaign finished staging. Each entry identifies a source by id and name.
                    readOnly: true
                    items:
                      type: object
                      description: A source that has at least one orphan entitlement included in the campaign, as reported at staging time.
                      required:
                        - type
                        - id
                        - name
                      properties:
                        type:
                          type: string
                          description: Kind of reference; currently only SOURCE is used.
                          enum:
                            - SOURCE
                          example: SOURCE
                        id:
                          type: string
                          description: Identifier of the source.
                          example: 30e6435e60bf47b0bc11622c31dfdbfd
                        name:
                          type: string
                          description: Display name of the source.
                          example: Active Directory
                      title: CampaignOrphanEntitlementSource
                    example:
                      - type: SOURCE
                        id: 30e6435e60bf47b0bc11622c31dfdbfd
                        name: Active Directory
                required:
                  - name
                  - description
                  - type
                  - reviewer
              examples:
                Manager Review:
                  value:
                    id: 5594f43b-7680-4a69-80ec-e5fdccf74be7
                    name: Manager Review
                    description: A review of everyone's access by their manager.
                    deadline: '2020-12-25'
                    deadlineTimezone: '-06:00'
                    emailNotificationEnabled: false
                    autoRevokeAllowed: false
                    autoActivate: false
                    recommendationsEnabled: false
                    sunsetCommentsRequired: true
                    type: IDENTITY
                    status: PENDING
                    reviewer:
                      type: MANAGER
                    searchBasedParams:
                      searchType: IDENTITY
                      identityIds:
                        - 2c9180888380236101838062001f00b6
                    mandatoryCommentRequirement: NO_DECISIONS
                    ownerId: 4030ca72bdfb4980b51b8fcee948be50
                    created: '2022-08-02T20:21:18.421Z'
                    modified: '2022-08-02T20:21:18.421Z'
                    totalCertifications: 0
                    completedCertifications: 0
                Search Campaign:
                  value:
                    id: 7e1a731e-3fb8-45cf-be58-112ba4673ee4
                    name: Search Campaign
                    description: A review of access returned by a search.
                    deadline: '2020-12-25'
                    deadlineTimezone: '-06:00'
                    emailNotificationEnabled: false
                    autoRevokeAllowed: false
                    autoActivate: false
                    recommendationsEnabled: false
                    sunsetCommentsRequired: true
                    type: IDENTITY
                    status: ACTIVE
                    reviewer:
                      type: MANAGER
                    searchBasedParams:
                      searchType: ACCESS
                      query: user
                    filterRef:
                      id: 0c46fb26-c6b2-4967-a555-17ee90d15b93
                      name: Test Manager Filter
                    mandatoryCommentRequirement: NO_DECISIONS
                    ownerId: 4030ca72bdfb4980b51b8fcee948be50
                    created: '2022-07-25T15:42:18.276Z'
                    modified: '2022-07-25T15:42:18.276Z'
                    totalCertifications: 5
                    completedCertifications: 3
                Source Owner Campaign:
                  value:
                    id: 2c918086-719e-ec07-0171-a7e3355a412b
                    name: AD Source Review
                    description: A review of the Active Directory source.
                    deadline: '2020-12-25'
                    deadlineTimezone: '-06:00'
                    emailNotificationEnabled: true
                    autoRevokeAllowed: false
                    autoActivate: true
                    recommendationsEnabled: false
                    sunsetCommentsRequired: true
                    type: IDENTITY
                    status: STAGED
                    reviewer:
                      type: SOURCE_OWNER
                    sourceIds:
                      - d88917c32c6f463fa6db291f8d0d6fff
                    filterRef:
                      id: d5e2cb8b-0779-4732-9190-ba8784dbcbb9
                      name: Source Owner Filter
                    mandatoryCommentRequirement: NO_DECISIONS
                    ownerId: 4030ca72bdfb4980b51b8fcee948be50
                    created: '2022-07-27T17:04:19.027Z'
                    modified: '2022-07-27T17:04:19.027Z'
                    totalCertifications: 7
                    completedCertifications: 3
                Machine Accounts Campaign:
                  value:
                    id: 3b2e2e58-21e8-4127-b6d6-93d41c40623b
                    name: Machine Accounts Campaign
                    description: A review of machine accounts.
                    deadline: '2020-12-25'
                    deadlineTimezone: '-06:00'
                    emailNotificationEnabled: false
                    autoRevokeAllowed: false
                    autoActivate: false
                    recommendationsEnabled: false
                    sunsetCommentsRequired: true
                    type: MACHINE_ACCOUNT
                    status: ACTIVE
                    reviewer:
                      type: ACCOUNT_OWNER
                    sourceIds:
                      - d88917c32c6f463fa6db291f8d0d6fff
                    filterRef:
                      id: d5e2cb8b-0779-4732-9190-ba8784dbcbb9
                      name: Machine Account Filter
                    mandatoryCommentRequirement: NO_DECISIONS
                    ownerId: 4030ca72bdfb4980b51b8fcee948be50
                    created: '2022-08-02T20:29:51.065Z'
                    modified: '2022-08-02T20:29:51.065Z'
                    totalCertifications: 4
                    completedCertifications: 1
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
