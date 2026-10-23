## OpenAPI

```yaml GET /certifications/v1/{id}/access-summaries/{type}
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
  /certifications/v1/{id}/access-summaries/{type}:
    get:
      description: This API returns a list of access summaries for the specified identity campaign certification and type. Reviewers for this certification can also call this API.
      operationId: getIdentityAccessSummariesV1
      security:
        - userAuth:
            - idn:campaign:read
      parameters:
        - in: path
          name: id
          schema:
            type: string
          required: true
          x-sailpoint-resource-operation-id: listIdentityCertificationsV1
          description: The identity campaign certification ID
          example: ef38f94347e94562b5bb8424a56397d8
        - in: path
          name: type
          schema:
            type: string
            enum:
              - ROLE
              - ACCESS_PROFILE
              - ENTITLEMENT
          required: true
          description: The type of access review item to retrieve summaries for
          example: ACCESS_PROFILE
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
          name: filters
          required: false
          schema:
            type: string
          example: access.id eq "ef38f94347e94562b5bb8424a56397d8"
          description: |-
            Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)

            Filtering is supported for the following fields and operators:

            **completed**: *eq, ne*

            **access.id**: *eq, in*

            **access.name**: *eq, sw*

            **entitlement.sourceName**: *eq, sw*

            **accessProfile.sourceName**: *eq, sw*
        - in: query
          name: sorters
          required: false
          schema:
            type: string
            format: comma-separated
          example: access.name
          description: |-
            Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)

            Sorting is supported for the following fields: **access.name**
      responses:
        '200':
          description: List of access summaries
          content:
            application/json:
              schema:
                type: array
                items:
                  type: object
                  title: Access Summary
                  description: An object holding the access that is being reviewed
                  properties:
                    access:
                      type: object
                      properties:
                        type:
                          description: The type of item being certified
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
                          description: The ID of the item being certified
                          example: 2c9180867160846801719932c5153fb7
                        name:
                          type: string
                          description: The name of the item being certified
                          example: Entitlement for Company Database
                    entitlement:
                      type: object
                      nullable: true
                      properties:
                        id:
                          type: string
                          description: The id for the entitlement
                          example: 2c918085718230600171993742c63558
                        name:
                          type: string
                          description: The name of the entitlement
                          example: CN=entitlement.bbb7c650
                        description:
                          nullable: true
                          type: string
                          description: Information about the entitlement
                          example: Gives read/write access to the company database
                        privileged:
                          type: boolean
                          example: false
                          default: false
                          description: Indicates if the entitlement is a privileged entitlement
                        owner:
                          type: object
                          title: Identity Reference With Name And Email
                          nullable: true
                          properties:
                            type:
                              type: string
                              description: The type can only be IDENTITY. This is read-only.
                              example: IDENTITY
                            id:
                              type: string
                              description: Identity ID.
                              example: 5168015d32f890ca15812c9180835d2e
                            name:
                              type: string
                              description: Identity's human-readable display name. This is read-only.
                              example: Alison Ferguso
                            email:
                              type: string
                              nullable: true
                              description: Identity's email address. This is read-only.
                              example: alison.ferguso@identitysoon.com
                        attributeName:
                          type: string
                          description: The name of the attribute on the source
                          example: memberOf
                        attributeValue:
                          type: string
                          description: The value of the attribute on the source
                          example: CN=entitlement.bbb7c650
                        sourceSchemaObjectType:
                          type: string
                          description: The schema object type on the source used to represent the entitlement and its attributes
                          example: groups
                        sourceName:
                          type: string
                          description: The name of the source for which this entitlement belongs
                          example: ODS-AD-Source
                        sourceType:
                          type: string
                          description: The type of the source for which the entitlement belongs
                          example: Active Directory - Direct
                        sourceId:
                          type: string
                          description: The ID of the source for which the entitlement belongs
                          example: 78ca6be511cb41fbb86dba2fcca7780c
                        hasPermissions:
                          type: boolean
                          default: false
                          description: Indicates if the entitlement has permissions
                          example: false
                        isPermission:
                          type: boolean
                          default: false
                          description: Indicates if the entitlement is a representation of an account permission
                          example: false
                        revocable:
                          type: boolean
                          default: false
                          description: Indicates whether the entitlement can be revoked
                          example: true
                        cloudGoverned:
                          type: boolean
                          default: false
                          description: True if the entitlement is cloud governed
                          example: false
                        containsDataAccess:
                          type: boolean
                          description: True if the entitlement has DAS data
                          default: false
                          example: true
                        dataAccess:
                          type: object
                          title: Data Access
                          description: DAS data for the entitlement
                          nullable: true
                          properties:
                            policies:
                              type: array
                              description: List of classification policies that apply to resources the entitlement \ groups has access to
                              items:
                                type: object
                                properties:
                                  value:
                                    type: string
                                    description: Value of the policy
                                    example: GDPR-20
                            categories:
                              type: array
                              description: List of classification categories that apply to resources the entitlement \ groups has access to
                              items:
                                type: object
                                properties:
                                  value:
                                    type: string
                                    description: Value of the category
                                    example: email-7
                                  matchCount:
                                    type: integer
                                    description: Number of matched for each category
                                    example: 10
                            impactScore:
                              type: object
                              properties:
                                value:
                                  type: string
                                  description: Impact Score for this data
                                  example: Medium
                        account:
                          type: object
                          nullable: true
                          description: Information about the status of the entitlement
                          properties:
                            nativeIdentity:
                              type: string
                              description: The native identity for this account
                              example: CN=Alison Ferguso
                            disabled:
                              type: boolean
                              default: false
                              example: false
                              description: Indicates whether this account is currently disabled
                            locked:
                              type: boolean
                              default: false
                              example: false
                              description: Indicates whether this account is currently locked
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
                              nullable: true
                              type: string
                              description: The id associated with the account
                              example: 2c9180857182305e0171993737eb29e6
                            name:
                              nullable: true
                              type: string
                              description: The account name
                              example: Alison Ferguso
                            created:
                              nullable: true
                              type: string
                              format: date-time
                              description: When the account was created
                              example: '2020-04-20T20:11:05.067Z'
                            modified:
                              nullable: true
                              type: string
                              format: date-time
                              description: When the account was last modified
                              example: '2020-05-20T18:57:16.987Z'
                            activityInsights:
                              type: object
                              title: Activity Insights
                              description: Insights into account activity
                              properties:
                                accountID:
                                  type: string
                                  description: UUID of the account
                                  example: c4ddd5421d8549f0abd309162cafd3b1
                                usageDays:
                                  type: integer
                                  format: int32
                                  minimum: 0
                                  maximum: 90
                                  description: The number of days of activity
                                  example: 45
                                usageDaysState:
                                  type: string
                                  enum:
                                    - COMPLETE
                                    - UNKNOWN
                                  description: Status indicating if the activity is complete or unknown
                                  example: COMPLETE
                            description:
                              nullable: true
                              type: string
                              description: Information about the account
                              example: Account for Read/write to the company database
                            governanceGroupId:
                              nullable: true
                              type: string
                              description: The id associated with the machine Account Governance Group
                              example: 2c9180857182305e0171993737eb29e6
                            owner:
                              type: object
                              nullable: true
                              description: Information about the machine account owner
                              properties:
                                id:
                                  nullable: true
                                  type: string
                                  description: The id associated with the machine account owner
                                  example: 2c9180857182305e0171993737eb29e8
                                type:
                                  type: string
                                  enum:
                                    - IDENTITY
                                  description: An enumeration of the types of Owner supported within the IdentityNow infrastructure.
                                  example: IDENTITY
                                displayName:
                                  nullable: true
                                  type: string
                                  description: The machine account owner's display name
                                  example: Alison Ferguson
                      title: reviewableentitlement
                    accessProfile:
                      type: object
                      properties:
                        id:
                          type: string
                          description: The id of the Access Profile
                          example: 2c91808a7190d06e01719938fcd20792
                        name:
                          type: string
                          description: Name of the Access Profile
                          example: Employee-database-read-write
                        description:
                          type: string
                          description: Information about the Access Profile
                          example: Collection of entitlements to read/write the employee database
                        privileged:
                          type: boolean
                          description: Indicates if the entitlement is a privileged entitlement
                          example: false
                        cloudGoverned:
                          type: boolean
                          description: True if the entitlement is cloud governed
                          example: false
                        endDate:
                          nullable: true
                          type: string
                          format: date-time
                          description: The date at which a user's access expires
                          example: '2021-12-25T00:00:00.000Z'
                        owner:
                          type: object
                          title: Identity Reference With Name And Email
                          nullable: true
                          properties:
                            type:
                              type: string
                              description: The type can only be IDENTITY. This is read-only.
                              example: IDENTITY
                            id:
                              type: string
                              description: Identity ID.
                              example: 5168015d32f890ca15812c9180835d2e
                            name:
                              type: string
                              description: Identity's human-readable display name. This is read-only.
                              example: Alison Ferguso
                            email:
                              type: string
                              nullable: true
                              description: Identity's email address. This is read-only.
                              example: alison.ferguso@identitysoon.com
                          description: Owner of the Access Profile
                        entitlements:
                          type: array
                          description: A list of entitlements associated with this Access Profile
                          items:
                            type: object
                            nullable: true
                            properties:
                              id:
                                type: string
                                description: The id for the entitlement
                                example: 2c918085718230600171993742c63558
                              name:
                                type: string
                                description: The name of the entitlement
                                example: CN=entitlement.bbb7c650
                              description:
                                nullable: true
                                type: string
                                description: Information about the entitlement
                                example: Gives read/write access to the company database
                              privileged:
                                type: boolean
                                example: false
                                default: false
                                description: Indicates if the entitlement is a privileged entitlement
                              owner:
                                type: object
                                title: Identity Reference With Name And Email
                                nullable: true
                                properties:
                                  type:
                                    type: string
                                    description: The type can only be IDENTITY. This is read-only.
                                    example: IDENTITY
                                  id:
                                    type: string
                                    description: Identity ID.
                                    example: 5168015d32f890ca15812c9180835d2e
                                  name:
                                    type: string
                                    description: Identity's human-readable display name. This is read-only.
                                    example: Alison Ferguso
                                  email:
                                    type: string
                                    nullable: true
                                    description: Identity's email address. This is read-only.
                                    example: alison.ferguso@identitysoon.com
                              attributeName:
                                type: string
                                description: The name of the attribute on the source
                                example: memberOf
                              attributeValue:
                                type: string
                                description: The value of the attribute on the source
                                example: CN=entitlement.bbb7c650
                              sourceSchemaObjectType:
                                type: string
                                description: The schema object type on the source used to represent the entitlement and its attributes
                                example: groups
                              sourceName:
                                type: string
                                description: The name of the source for which this entitlement belongs
                                example: ODS-AD-Source
                              sourceType:
                                type: string
                                description: The type of the source for which the entitlement belongs
                                example: Active Directory - Direct
                              sourceId:
                                type: string
                                description: The ID of the source for which the entitlement belongs
                                example: 78ca6be511cb41fbb86dba2fcca7780c
                              hasPermissions:
                                type: boolean
                                default: false
                                description: Indicates if the entitlement has permissions
                                example: false
                              isPermission:
                                type: boolean
                                default: false
                                description: Indicates if the entitlement is a representation of an account permission
                                example: false
                              revocable:
                                type: boolean
                                default: false
                                description: Indicates whether the entitlement can be revoked
                                example: true
                              cloudGoverned:
                                type: boolean
                                default: false
                                description: True if the entitlement is cloud governed
                                example: false
                              containsDataAccess:
                                type: boolean
                                description: True if the entitlement has DAS data
                                default: false
                                example: true
                              dataAccess:
                                type: object
                                title: Data Access
                                description: DAS data for the entitlement
                                nullable: true
                                properties:
                                  policies:
                                    type: array
                                    description: List of classification policies that apply to resources the entitlement \ groups has access to
                                    items:
                                      type: object
                                      properties:
                                        value:
                                          type: string
                                          description: Value of the policy
                                          example: GDPR-20
                                  categories:
                                    type: array
                                    description: List of classification categories that apply to resources the entitlement \ groups has access to
                                    items:
                                      type: object
                                      properties:
                                        value:
                                          type: string
                                          description: Value of the category
                                          example: email-7
                                        matchCount:
                                          type: integer
                                          description: Number of matched for each category
                                          example: 10
                                  impactScore:
                                    type: object
                                    properties:
                                      value:
                                        type: string
                                        description: Impact Score for this data
                                        example: Medium
                              account:
                                type: object
                                nullable: true
                                description: Information about the status of the entitlement
                                properties:
                                  nativeIdentity:
                                    type: string
                                    description: The native identity for this account
                                    example: CN=Alison Ferguso
                                  disabled:
                                    type: boolean
                                    default: false
                                    example: false
                                    description: Indicates whether this account is currently disabled
                                  locked:
                                    type: boolean
                                    default: false
                                    example: false
                                    description: Indicates whether this account is currently locked
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
                                    nullable: true
                                    type: string
                                    description: The id associated with the account
                                    example: 2c9180857182305e0171993737eb29e6
                                  name:
                                    nullable: true
                                    type: string
                                    description: The account name
                                    example: Alison Ferguso
                                  created:
                                    nullable: true
                                    type: string
                                    format: date-time
                                    description: When the account was created
                                    example: '2020-04-20T20:11:05.067Z'
                                  modified:
                                    nullable: true
                                    type: string
                                    format: date-time
                                    description: When the account was last modified
                                    example: '2020-05-20T18:57:16.987Z'
                                  activityInsights:
                                    type: object
                                    title: Activity Insights
                                    description: Insights into account activity
                                    properties:
                                      accountID:
                                        type: string
                                        description: UUID of the account
                                        example: c4ddd5421d8549f0abd309162cafd3b1
                                      usageDays:
                                        type: integer
                                        format: int32
                                        minimum: 0
                                        maximum: 90
                                        description: The number of days of activity
                                        example: 45
                                      usageDaysState:
                                        type: string
                                        enum:
                                          - COMPLETE
                                          - UNKNOWN
                                        description: Status indicating if the activity is complete or unknown
                                        example: COMPLETE
                                  description:
                                    nullable: true
                                    type: string
                                    description: Information about the account
                                    example: Account for Read/write to the company database
                                  governanceGroupId:
                                    nullable: true
                                    type: string
                                    description: The id associated with the machine Account Governance Group
                                    example: 2c9180857182305e0171993737eb29e6
                                  owner:
                                    type: object
                                    nullable: true
                                    description: Information about the machine account owner
                                    properties:
                                      id:
                                        nullable: true
                                        type: string
                                        description: The id associated with the machine account owner
                                        example: 2c9180857182305e0171993737eb29e8
                                      type:
                                        type: string
                                        enum:
                                          - IDENTITY
                                        description: An enumeration of the types of Owner supported within the IdentityNow infrastructure.
                                        example: IDENTITY
                                      displayName:
                                        nullable: true
                                        type: string
                                        description: The machine account owner's display name
                                        example: Alison Ferguson
                            title: reviewableentitlement
                        created:
                          type: string
                          description: Date the Access Profile was created.
                          format: date-time
                          example: '2021-01-01T22:32:58.104Z'
                        modified:
                          type: string
                          description: Date the Access Profile was last modified.
                          format: date-time
                          example: '2021-02-01T22:32:58.104Z'
                      title: reviewableaccessprofile
                    role:
                      type: object
                      nullable: true
                      properties:
                        id:
                          type: string
                          description: The id for the Role
                          example: 2c91808a7190d06e0171993907fd0794
                        name:
                          type: string
                          description: The name of the Role
                          example: Accounting-Employees
                        description:
                          type: string
                          description: Information about the Role
                          example: Role for members of the accounting department with the necessary Access Profiles
                        privileged:
                          type: boolean
                          description: Indicates if the entitlement is a privileged entitlement
                          example: false
                        owner:
                          type: object
                          title: Identity Reference With Name And Email
                          nullable: true
                          properties:
                            type:
                              type: string
                              description: The type can only be IDENTITY. This is read-only.
                              example: IDENTITY
                            id:
                              type: string
                              description: Identity ID.
                              example: 5168015d32f890ca15812c9180835d2e
                            name:
                              type: string
                              description: Identity's human-readable display name. This is read-only.
                              example: Alison Ferguso
                            email:
                              type: string
                              nullable: true
                              description: Identity's email address. This is read-only.
                              example: alison.ferguso@identitysoon.com
                        revocable:
                          type: boolean
                          description: Indicates whether the Role can be revoked or requested
                          example: false
                        endDate:
                          type: string
                          format: date-time
                          description: The date when a user's access expires.
                          example: '2021-12-25T00:00:00.000Z'
                        accessProfiles:
                          type: array
                          description: The list of Access Profiles associated with this Role
                          items:
                            type: object
                            properties:
                              id:
                                type: string
                                description: The id of the Access Profile
                                example: 2c91808a7190d06e01719938fcd20792
                              name:
                                type: string
                                description: Name of the Access Profile
                                example: Employee-database-read-write
                              description:
                                type: string
                                description: Information about the Access Profile
                                example: Collection of entitlements to read/write the employee database
                              privileged:
                                type: boolean
                                description: Indicates if the entitlement is a privileged entitlement
                                example: false
                              cloudGoverned:
                                type: boolean
                                description: True if the entitlement is cloud governed
                                example: false
                              endDate:
                                nullable: true
                                type: string
                                format: date-time
                                description: The date at which a user's access expires
                                example: '2021-12-25T00:00:00.000Z'
                              owner:
                                type: object
                                title: Identity Reference With Name And Email
                                nullable: true
                                properties:
                                  type:
                                    type: string
                                    description: The type can only be IDENTITY. This is read-only.
                                    example: IDENTITY
                                  id:
                                    type: string
                                    description: Identity ID.
                                    example: 5168015d32f890ca15812c9180835d2e
                                  name:
                                    type: string
                                    description: Identity's human-readable display name. This is read-only.
                                    example: Alison Ferguso
                                  email:
                                    type: string
                                    nullable: true
                                    description: Identity's email address. This is read-only.
                                    example: alison.ferguso@identitysoon.com
                                description: Owner of the Access Profile
                              entitlements:
                                type: array
                                description: A list of entitlements associated with this Access Profile
                                items:
                                  type: object
                                  nullable: true
                                  properties:
                                    id:
                                      type: string
                                      description: The id for the entitlement
                                      example: 2c918085718230600171993742c63558
                                    name:
                                      type: string
                                      description: The name of the entitlement
                                      example: CN=entitlement.bbb7c650
                                    description:
                                      nullable: true
                                      type: string
                                      description: Information about the entitlement
                                      example: Gives read/write access to the company database
                                    privileged:
                                      type: boolean
                                      example: false
                                      default: false
                                      description: Indicates if the entitlement is a privileged entitlement
                                    owner:
                                      type: object
                                      title: Identity Reference With Name And Email
                                      nullable: true
                                      properties:
                                        type:
                                          type: string
                                          description: The type can only be IDENTITY. This is read-only.
                                          example: IDENTITY
                                        id:
                                          type: string
                                          description: Identity ID.
                                          example: 5168015d32f890ca15812c9180835d2e
                                        name:
                                          type: string
                                          description: Identity's human-readable display name. This is read-only.
                                          example: Alison Ferguso
                                        email:
                                          type: string
                                          nullable: true
                                          description: Identity's email address. This is read-only.
                                          example: alison.ferguso@identitysoon.com
                                    attributeName:
                                      type: string
                                      description: The name of the attribute on the source
                                      example: memberOf
                                    attributeValue:
                                      type: string
                                      description: The value of the attribute on the source
                                      example: CN=entitlement.bbb7c650
                                    sourceSchemaObjectType:
                                      type: string
                                      description: The schema object type on the source used to represent the entitlement and its attributes
                                      example: groups
                                    sourceName:
                                      type: string
                                      description: The name of the source for which this entitlement belongs
                                      example: ODS-AD-Source
                                    sourceType:
                                      type: string
                                      description: The type of the source for which the entitlement belongs
                                      example: Active Directory - Direct
                                    sourceId:
                                      type: string
                                      description: The ID of the source for which the entitlement belongs
                                      example: 78ca6be511cb41fbb86dba2fcca7780c
                                    hasPermissions:
                                      type: boolean
                                      default: false
                                      description: Indicates if the entitlement has permissions
                                      example: false
                                    isPermission:
                                      type: boolean
                                      default: false
                                      description: Indicates if the entitlement is a representation of an account permission
                                      example: false
                                    revocable:
                                      type: boolean
                                      default: false
                                      description: Indicates whether the entitlement can be revoked
                                      example: true
                                    cloudGoverned:
                                      type: boolean
                                      default: false
                                      description: True if the entitlement is cloud governed
                                      example: false
                                    containsDataAccess:
                                      type: boolean
                                      description: True if the entitlement has DAS data
                                      default: false
                                      example: true
                                    dataAccess:
                                      type: object
                                      title: Data Access
                                      description: DAS data for the entitlement
                                      nullable: true
                                      properties:
                                        policies:
                                          type: array
                                          description: List of classification policies that apply to resources the entitlement \ groups has access to
                                          items:
                                            type: object
                                            properties:
                                              value:
                                                type: string
                                                description: Value of the policy
                                                example: GDPR-20
                                        categories:
                                          type: array
                                          description: List of classification categories that apply to resources the entitlement \ groups has access to
                                          items:
                                            type: object
                                            properties:
                                              value:
                                                type: string
                                                description: Value of the category
                                                example: email-7
                                              matchCount:
                                                type: integer
                                                description: Number of matched for each category
                                                example: 10
                                        impactScore:
                                          type: object
                                          properties:
                                            value:
                                              type: string
                                              description: Impact Score for this data
                                              example: Medium
                                    account:
                                      type: object
                                      nullable: true
                                      description: Information about the status of the entitlement
                                      properties:
                                        nativeIdentity:
                                          type: string
                                          description: The native identity for this account
                                          example: CN=Alison Ferguso
                                        disabled:
                                          type: boolean
                                          default: false
                                          example: false
                                          description: Indicates whether this account is currently disabled
                                        locked:
                                          type: boolean
                                          default: false
                                          example: false
                                          description: Indicates whether this account is currently locked
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
                                          nullable: true
                                          type: string
                                          description: The id associated with the account
                                          example: 2c9180857182305e0171993737eb29e6
                                        name:
                                          nullable: true
                                          type: string
                                          description: The account name
                                          example: Alison Ferguso
                                        created:
                                          nullable: true
                                          type: string
                                          format: date-time
                                          description: When the account was created
                                          example: '2020-04-20T20:11:05.067Z'
                                        modified:
                                          nullable: true
                                          type: string
                                          format: date-time
                                          description: When the account was last modified
                                          example: '2020-05-20T18:57:16.987Z'
                                        activityInsights:
                                          type: object
                                          title: Activity Insights
                                          description: Insights into account activity
                                          properties:
                                            accountID:
                                              type: string
                                              description: UUID of the account
                                              example: c4ddd5421d8549f0abd309162cafd3b1
                                            usageDays:
                                              type: integer
                                              format: int32
                                              minimum: 0
                                              maximum: 90
                                              description: The number of days of activity
                                              example: 45
                                            usageDaysState:
                                              type: string
                                              enum:
                                                - COMPLETE
                                                - UNKNOWN
                                              description: Status indicating if the activity is complete or unknown
                                              example: COMPLETE
                                        description:
                                          nullable: true
                                          type: string
                                          description: Information about the account
                                          example: Account for Read/write to the company database
                                        governanceGroupId:
                                          nullable: true
                                          type: string
                                          description: The id associated with the machine Account Governance Group
                                          example: 2c9180857182305e0171993737eb29e6
                                        owner:
                                          type: object
                                          nullable: true
                                          description: Information about the machine account owner
                                          properties:
                                            id:
                                              nullable: true
                                              type: string
                                              description: The id associated with the machine account owner
                                              example: 2c9180857182305e0171993737eb29e8
                                            type:
                                              type: string
                                              enum:
                                                - IDENTITY
                                              description: An enumeration of the types of Owner supported within the IdentityNow infrastructure.
                                              example: IDENTITY
                                            displayName:
                                              nullable: true
                                              type: string
                                              description: The machine account owner's display name
                                              example: Alison Ferguson
                                  title: reviewableentitlement
                              created:
                                type: string
                                description: Date the Access Profile was created.
                                format: date-time
                                example: '2021-01-01T22:32:58.104Z'
                              modified:
                                type: string
                                description: Date the Access Profile was last modified.
                                format: date-time
                                example: '2021-02-01T22:32:58.104Z'
                            title: reviewableaccessprofile
                        entitlements:
                          type: array
                          description: The list of entitlements associated with this Role
                          items:
                            type: object
                            nullable: true
                            properties:
                              id:
                                type: string
                                description: The id for the entitlement
                                example: 2c918085718230600171993742c63558
                              name:
                                type: string
                                description: The name of the entitlement
                                example: CN=entitlement.bbb7c650
                              description:
                                nullable: true
                                type: string
                                description: Information about the entitlement
                                example: Gives read/write access to the company database
                              privileged:
                                type: boolean
                                example: false
                                default: false
                                description: Indicates if the entitlement is a privileged entitlement
                              owner:
                                type: object
                                title: Identity Reference With Name And Email
                                nullable: true
                                properties:
                                  type:
                                    type: string
                                    description: The type can only be IDENTITY. This is read-only.
                                    example: IDENTITY
                                  id:
                                    type: string
                                    description: Identity ID.
                                    example: 5168015d32f890ca15812c9180835d2e
                                  name:
                                    type: string
                                    description: Identity's human-readable display name. This is read-only.
                                    example: Alison Ferguso
                                  email:
                                    type: string
                                    nullable: true
                                    description: Identity's email address. This is read-only.
                                    example: alison.ferguso@identitysoon.com
                              attributeName:
                                type: string
                                description: The name of the attribute on the source
                                example: memberOf
                              attributeValue:
                                type: string
                                description: The value of the attribute on the source
                                example: CN=entitlement.bbb7c650
                              sourceSchemaObjectType:
                                type: string
                                description: The schema object type on the source used to represent the entitlement and its attributes
                                example: groups
                              sourceName:
                                type: string
                                description: The name of the source for which this entitlement belongs
                                example: ODS-AD-Source
                              sourceType:
                                type: string
                                description: The type of the source for which the entitlement belongs
                                example: Active Directory - Direct
                              sourceId:
                                type: string
                                description: The ID of the source for which the entitlement belongs
                                example: 78ca6be511cb41fbb86dba2fcca7780c
                              hasPermissions:
                                type: boolean
                                default: false
                                description: Indicates if the entitlement has permissions
                                example: false
                              isPermission:
                                type: boolean
                                default: false
                                description: Indicates if the entitlement is a representation of an account permission
                                example: false
                              revocable:
                                type: boolean
                                default: false
                                description: Indicates whether the entitlement can be revoked
                                example: true
                              cloudGoverned:
                                type: boolean
                                default: false
                                description: True if the entitlement is cloud governed
                                example: false
                              containsDataAccess:
                                type: boolean
                                description: True if the entitlement has DAS data
                                default: false
                                example: true
                              dataAccess:
                                type: object
                                title: Data Access
                                description: DAS data for the entitlement
                                nullable: true
                                properties:
                                  policies:
                                    type: array
                                    description: List of classification policies that apply to resources the entitlement \ groups has access to
                                    items:
                                      type: object
                                      properties:
                                        value:
                                          type: string
                                          description: Value of the policy
                                          example: GDPR-20
                                  categories:
                                    type: array
                                    description: List of classification categories that apply to resources the entitlement \ groups has access to
                                    items:
                                      type: object
                                      properties:
                                        value:
                                          type: string
                                          description: Value of the category
                                          example: email-7
                                        matchCount:
                                          type: integer
                                          description: Number of matched for each category
                                          example: 10
                                  impactScore:
                                    type: object
                                    properties:
                                      value:
                                        type: string
                                        description: Impact Score for this data
                                        example: Medium
                              account:
                                type: object
                                nullable: true
                                description: Information about the status of the entitlement
                                properties:
                                  nativeIdentity:
                                    type: string
                                    description: The native identity for this account
                                    example: CN=Alison Ferguso
                                  disabled:
                                    type: boolean
                                    default: false
                                    example: false
                                    description: Indicates whether this account is currently disabled
                                  locked:
                                    type: boolean
                                    default: false
                                    example: false
                                    description: Indicates whether this account is currently locked
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
                                    nullable: true
                                    type: string
                                    description: The id associated with the account
                                    example: 2c9180857182305e0171993737eb29e6
                                  name:
                                    nullable: true
                                    type: string
                                    description: The account name
                                    example: Alison Ferguso
                                  created:
                                    nullable: true
                                    type: string
                                    format: date-time
                                    description: When the account was created
                                    example: '2020-04-20T20:11:05.067Z'
                                  modified:
                                    nullable: true
                                    type: string
                                    format: date-time
                                    description: When the account was last modified
                                    example: '2020-05-20T18:57:16.987Z'
                                  activityInsights:
                                    type: object
                                    title: Activity Insights
                                    description: Insights into account activity
                                    properties:
                                      accountID:
                                        type: string
                                        description: UUID of the account
                                        example: c4ddd5421d8549f0abd309162cafd3b1
                                      usageDays:
                                        type: integer
                                        format: int32
                                        minimum: 0
                                        maximum: 90
                                        description: The number of days of activity
                                        example: 45
                                      usageDaysState:
                                        type: string
                                        enum:
                                          - COMPLETE
                                          - UNKNOWN
                                        description: Status indicating if the activity is complete or unknown
                                        example: COMPLETE
                                  description:
                                    nullable: true
                                    type: string
                                    description: Information about the account
                                    example: Account for Read/write to the company database
                                  governanceGroupId:
                                    nullable: true
                                    type: string
                                    description: The id associated with the machine Account Governance Group
                                    example: 2c9180857182305e0171993737eb29e6
                                  owner:
                                    type: object
                                    nullable: true
                                    description: Information about the machine account owner
                                    properties:
                                      id:
                                        nullable: true
                                        type: string
                                        description: The id associated with the machine account owner
                                        example: 2c9180857182305e0171993737eb29e8
                                      type:
                                        type: string
                                        enum:
                                          - IDENTITY
                                        description: An enumeration of the types of Owner supported within the IdentityNow infrastructure.
                                        example: IDENTITY
                                      displayName:
                                        nullable: true
                                        type: string
                                        description: The machine account owner's display name
                                        example: Alison Ferguson
                            title: reviewableentitlement
                      title: reviewablerole
              example:
                - access:
                    type: ENTITLEMENT
                    id: 2c9180857182305e01719937429e2bad
                    name: CN=Engineering
                  entitlement:
                    id: 2c9180857182305e01719937429e2bad
                    name: CN=Engineering
                    description: Access to the engineering database
                    privileged: false
                    owner:
                      email: brandon.gray@acme-solar.com
                      type: IDENTITY
                      id: 2c9180867160846801719932c5153fb7
                      name: Brandon Gray
                    attributeName: memberOf
                    attributeValue: CN=Engineering
                    sourceName: ODS-AD-Source
                    hasPermissions: true
                    revocable: true
                    containsDataAccess: true
                    dataAccess:
                      policies:
                        - value: GDPR-1
                        - value: GDPR-2
                      categories:
                        - value: email-7
                          matchCount: 74
                        - value: email-9
                          matchCount: 30
                      impactScore:
                        value: Medium
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
