## OpenAPI

```yaml GET /campaigns/v1/{id}
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
  /campaigns/v1/{id}:
    get:
      description: |
        Use this API to get information for an existing certification campaign by the campaign's ID.
      operationId: getCampaignV1
      security:
        - userAuth:
            - idn:campaign:read
            - idn:campaign:manage
      parameters:
        - in: path
          name: id
          schema:
            type: string
          required: true
          x-sailpoint-resource-operation-id: getActiveCampaignsV1
          description: ID of the campaign to be retrieved.
          example: 2c91808571bcfcf80171c23e4b4221fc
        - in: query
          name: detail
          schema:
            type: string
            enum:
              - SLIM
              - FULL
          required: false
          description: Determines whether slim, or increased level of detail is provided for each campaign in the returned list. Slim is the default behavior.
          example: FULL
      responses:
        '200':
          description: Requested campaign object.
          content:
            application/json:
              schema:
                anyOf:
                  - type: object
                    title: Slim Campaign
                    required:
                      - name
                      - description
                      - type
                    properties:
                      id:
                        type: string
                        readOnly: true
                        description: Id of the campaign
                        example: 2c9079b270a266a60170a2779fcb0007
                        nullable: true
                      name:
                        description: |
                          The campaign name. If this object is part of a template, special formatting applies; see the
                          `/campaign-templates/{id}/generate` endpoint documentation for details.
                        type: string
                        example: Manager Campaign
                      description:
                        type: string
                        nullable: true
                        description: |
                          The campaign description. If this object is part of a template, special formatting applies; see the
                          `/campaign-templates/{id}/generate` endpoint documentation for details.
                        example: Everyone needs to be reviewed by their manager
                      deadline:
                        type: string
                        nullable: true
                        format: date-time
                        description: The campaign's completion deadline.  This date must be in the future in order to activate the campaign.  If you try to activate a campaign with a deadline of today or in the past, you will receive a 400 error response.
                        example: '2020-03-15T10:00:01.456Z'
                      type:
                        type: string
                        description: The type of campaign. Could be extended in the future.
                        enum:
                          - MANAGER
                          - SOURCE_OWNER
                          - SEARCH
                          - ROLE_COMPOSITION
                          - MACHINE_ACCOUNT
                        example: MANAGER
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
                      status:
                        type: string
                        description: The campaign's current status.
                        nullable: true
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
                          - ARCHIVED
                          - null
                        example: ACTIVE
                      correlatedStatus:
                        type: string
                        description: The correlatedStatus of the campaign. Only SOURCE_OWNER campaigns can be Uncorrelated. An Uncorrelated certification campaign only includes Uncorrelated identities (An identity is uncorrelated if it has no accounts on an authoritative source).
                        enum:
                          - CORRELATED
                          - UNCORRELATED
                        example: CORRELATED
                      created:
                        type: string
                        nullable: true
                        readOnly: true
                        format: date-time
                        description: Created time of the campaign
                        example: '2020-03-03T22:15:13.611Z'
                      totalCertifications:
                        type: integer
                        nullable: true
                        format: int32
                        description: The total number of certifications in this campaign.
                        readOnly: true
                        example: 100
                      completedCertifications:
                        type: integer
                        nullable: true
                        format: int32
                        description: The number of completed certifications in this campaign.
                        readOnly: true
                        example: 10
                      alerts:
                        type: array
                        nullable: true
                        description: A list of errors and warnings that have accumulated.
                        readOnly: true
                        items:
                          type: object
                          title: Campaign Alert
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
                  - type: object
                    title: Campaign
                    allOf:
                      - type: object
                        title: Slim Campaign
                        required:
                          - name
                          - description
                          - type
                        properties:
                          id:
                            type: string
                            readOnly: true
                            description: Id of the campaign
                            example: 2c9079b270a266a60170a2779fcb0007
                            nullable: true
                          name:
                            description: |
                              The campaign name. If this object is part of a template, special formatting applies; see the
                              `/campaign-templates/{id}/generate` endpoint documentation for details.
                            type: string
                            example: Manager Campaign
                          description:
                            type: string
                            nullable: true
                            description: |
                              The campaign description. If this object is part of a template, special formatting applies; see the
                              `/campaign-templates/{id}/generate` endpoint documentation for details.
                            example: Everyone needs to be reviewed by their manager
                          deadline:
                            type: string
                            nullable: true
                            format: date-time
                            description: The campaign's completion deadline.  This date must be in the future in order to activate the campaign.  If you try to activate a campaign with a deadline of today or in the past, you will receive a 400 error response.
                            example: '2020-03-15T10:00:01.456Z'
                          type:
                            type: string
                            description: The type of campaign. Could be extended in the future.
                            enum:
                              - MANAGER
                              - SOURCE_OWNER
                              - SEARCH
                              - ROLE_COMPOSITION
                              - MACHINE_ACCOUNT
                            example: MANAGER
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
                          status:
                            type: string
                            description: The campaign's current status.
                            nullable: true
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
                              - ARCHIVED
                              - null
                            example: ACTIVE
                          correlatedStatus:
                            type: string
                            description: The correlatedStatus of the campaign. Only SOURCE_OWNER campaigns can be Uncorrelated. An Uncorrelated certification campaign only includes Uncorrelated identities (An identity is uncorrelated if it has no accounts on an authoritative source).
                            enum:
                              - CORRELATED
                              - UNCORRELATED
                            example: CORRELATED
                          created:
                            type: string
                            nullable: true
                            readOnly: true
                            format: date-time
                            description: Created time of the campaign
                            example: '2020-03-03T22:15:13.611Z'
                          totalCertifications:
                            type: integer
                            nullable: true
                            format: int32
                            description: The total number of certifications in this campaign.
                            readOnly: true
                            example: 100
                          completedCertifications:
                            type: integer
                            nullable: true
                            format: int32
                            description: The number of completed certifications in this campaign.
                            readOnly: true
                            example: 10
                          alerts:
                            type: array
                            nullable: true
                            description: A list of errors and warnings that have accumulated.
                            readOnly: true
                            items:
                              type: object
                              title: Campaign Alert
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
                      - type: object
                        properties:
                          modified:
                            type: string
                            readOnly: true
                            nullable: true
                            format: date-time
                            description: Modified time of the campaign
                            example: '2020-03-03T22:20:12.674Z'
                          filter:
                            type: object
                            nullable: true
                            description: Determines which items will be included in this campaign. The default campaign filter is used if this field is left blank.
                            properties:
                              id:
                                type: string
                                description: The ID of whatever type of filter is being used.
                                example: 0fbe863c063c4c88a35fd7f17e8a3df5
                              type:
                                type: string
                                description: Type of the filter
                                enum:
                                  - CAMPAIGN_FILTER
                                example: CAMPAIGN_FILTER
                              name:
                                type: string
                                description: Name of the filter
                                example: Test Filter
                          sunsetCommentsRequired:
                            type: boolean
                            description: Determines if comments on sunset date changes are required.
                            default: true
                            example: true
                          sourceOwnerCampaignInfo:
                            type: object
                            nullable: true
                            description: Must be set only if the campaign type is SOURCE_OWNER.
                            properties:
                              sourceIds:
                                type: array
                                description: The list of sources to be included in the campaign.
                                items:
                                  type: string
                                example:
                                  - 0fbe863c063c4c88a35fd7f17e8a3df5
                          searchCampaignInfo:
                            type: object
                            nullable: true
                            description: Must be set only if the campaign type is SEARCH.
                            properties:
                              type:
                                type: string
                                description: The type of search campaign represented.
                                enum:
                                  - IDENTITY
                                  - ACCESS
                                example: ACCESS
                              description:
                                type: string
                                description: Describes this search campaign. Intended for storing the query used, and possibly the number of identities selected/available.
                                example: Search Campaign description
                              reviewer:
                                type: object
                                nullable: true
                                description: If specified, this identity or governance group will be the reviewer for all certifications in this campaign. The allowed DTO types are IDENTITY and GOVERNANCE_GROUP.
                                properties:
                                  type:
                                    type: string
                                    description: The reviewer's DTO type.
                                    enum:
                                      - GOVERNANCE_GROUP
                                      - IDENTITY
                                    example: IDENTITY
                                  id:
                                    type: string
                                    description: The reviewer's ID.
                                    example: 2c91808568c529c60168cca6f90c1313
                                  name:
                                    type: string
                                    nullable: true
                                    description: The reviewer's name.
                                    example: William Wilson
                              query:
                                type: string
                                nullable: true
                                description: The scope for the campaign. The campaign will cover identities returned by the query and identities that have access items returned by the query. One of `query` or `identityIds` must be set.
                                example: Search Campaign query description
                              identityIds:
                                type: array
                                nullable: true
                                description: A direct list of identities to include in this campaign. One of `identityIds` or `query` must be set.
                                items:
                                  type: string
                                example:
                                  - 0fbe863c063c4c88a35fd7f17e8a3df5
                              accessConstraints:
                                type: array
                                description: Further reduces the scope of the campaign by excluding identities (from `query` or `identityIds`) that do not have this access.
                                items:
                                  type: object
                                  title: Access Constraint
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
                                maxItems: 1000
                            required:
                              - type
                          roleCompositionCampaignInfo:
                            type: object
                            nullable: true
                            description: Optional configuration options for role composition campaigns.
                            properties:
                              reviewerId:
                                type: string
                                description: The ID of the identity or governance group reviewing this campaign. Deprecated in favor of the "reviewer" object.
                                deprecated: true
                                example: 2c91808568c529c60168cca6f90c1313
                                nullable: true
                              reviewer:
                                type: object
                                nullable: true
                                description: If specified, this identity or governance group will be the reviewer for all certifications in this campaign. The allowed DTO types are IDENTITY and GOVERNANCE_GROUP.
                                properties:
                                  type:
                                    type: string
                                    description: The reviewer's DTO type.
                                    enum:
                                      - GOVERNANCE_GROUP
                                      - IDENTITY
                                    example: IDENTITY
                                  id:
                                    type: string
                                    description: The reviewer's ID.
                                    example: 2c91808568c529c60168cca6f90c1313
                                  name:
                                    type: string
                                    description: The reviewer's name.
                                    example: William Wilson
                              roleIds:
                                type: array
                                description: Optional list of roles to include in this campaign. Only one of `roleIds` and `query` may be set; if neither are set, all roles are included.
                                items:
                                  type: string
                                example:
                                  - 2c90ad2a70ace7d50170acf22ca90010
                              remediatorRef:
                                type: object
                                description: This determines who remediation tasks will be assigned to. Remediation tasks are created for each revoke decision on items in the campaign. The only legal remediator type is 'IDENTITY', and the chosen identity must be a Role Admin or Org Admin.
                                properties:
                                  type:
                                    type: string
                                    enum:
                                      - IDENTITY
                                    description: Legal Remediator Type
                                    example: IDENTITY
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
                                  - type
                                  - id
                              query:
                                type: string
                                nullable: true
                                description: Optional search query to scope this campaign to a set of roles. Only one of `roleIds` and `query` may be set; if neither are set, all roles are included.
                                example: Search Query
                              description:
                                type: string
                                nullable: true
                                description: Describes this role composition campaign. Intended for storing the query used, and possibly the number of roles selected/available.
                                example: Role Composition Description
                            required:
                              - remediatorRef
                          machineAccountCampaignInfo:
                            type: object
                            nullable: true
                            description: Must be set only if the campaign type is MACHINE_ACCOUNT.
                            properties:
                              sourceIds:
                                type: array
                                description: The list of sources to be included in the campaign.
                                items:
                                  type: string
                                example:
                                  - 0fbe863c063c4c88a35fd7f17e8a3df5
                              reviewerType:
                                type: string
                                description: The reviewer's type.
                                enum:
                                  - ACCOUNT_OWNER
                                example: ACCOUNT_OWNER
                          sourcesWithOrphanEntitlements:
                            type: array
                            nullable: true
                            description: A list of sources in the campaign that contain \"orphan entitlements\" (entitlements without a corresponding Managed Attribute). An empty list indicates the campaign has no orphan entitlements. Null indicates there may be unknown orphan entitlements in the campaign (the campaign was created before this feature was implemented).
                            readOnly: true
                            items:
                              type: object
                              properties:
                                id:
                                  type: string
                                  description: Id of the source
                                  example: 2c90ad2a70ace7d50170acf22ca90010
                                type:
                                  type: string
                                  enum:
                                    - SOURCE
                                  description: Type
                                  example: SOURCE
                                name:
                                  type: string
                                  description: Name of the source
                                  example: Source with orphan entitlements
                          mandatoryCommentRequirement:
                            type: string
                            description: Determines whether comments are required for decisions during certification reviews. You can require comments for all decisions, revoke-only decisions, or no decisions. By default, comments are not required for decisions.
                            enum:
                              - ALL_DECISIONS
                              - REVOKE_ONLY_DECISIONS
                              - NO_DECISIONS
                            example: NO_DECISIONS
              examples:
                Manager:
                  value:
                    id: 2c918086719eec070171a7e3355a360a
                    name: Manager Review
                    description: A review of everyone's access by their manager.
                    deadline: '2020-12-25T06:00:00.123Z'
                    type: MANAGER
                    status: ACTIVE
                    emailNotificationEnabled: false
                    autoRevokeAllowed: false
                    recommendationsEnabled: false
                Search:
                  value:
                    id: 7e1a731e3fb845cfbe58112ba4673ee4
                    name: Search Campaign
                    description: Search Campaign Info
                    deadline: '2022-07-26T15:42:44Z'
                    type: SEARCH
                    status: ACTIVE
                    emailNotificationEnabled: false
                    autoRevokeAllowed: false
                    recommendationsEnabled: false
                Source Owner:
                  value:
                    id: 2c918086719eec070171a7e3355a412b
                    name: AD Source Review
                    description: A review of our AD source.
                    deadline: '2020-12-25T06:00:00.123Z'
                    type: SOURCE_OWNER
                    status: STAGED
                    emailNotificationEnabled: true
                    autoRevokeAllowed: false
                    recommendationsEnabled: false
                    correlatedStatus: CORRELATED
                RoleComposition:
                  value:
                    id: 3b2e2e5821e84127b6d693d41c40623b
                    name: Role Composition Campaign
                    description: A review done by a role owner.
                    deadline: '2020-12-25T06:00:00.468Z'
                    type: ROLE_COMPOSITION
                    status: ACTIVE
                    emailNotificationEnabled: false
                    autoRevokeAllowed: false
                    recommendationsEnabled: false
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
