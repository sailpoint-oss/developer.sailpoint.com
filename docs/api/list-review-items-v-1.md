## OpenAPI

```yaml GET /certification-campaigns/v1/certifications/{certificationId}/review-items
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
  /certification-campaigns/v1/certifications/{certificationId}/review-items:
    get:
      description: This API returns a list of review items for an identity campaign certification. Required roles are ORG_ADMIN or CERT_ADMIN. Reviewers for this certification can also call this API.
      operationId: listReviewItemsV1
      security:
        - userAuth:
            - idn:campaign:read
            - idn:campaign:manage
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
          name: certificationId
          schema:
            format: uuid
            type: string
          required: true
          description: The certification ID
          example: ef38f943-47e9-4562-b5bb-8424a56397d8
          x-sailpoint-resource-operation-id: listCertificationsV1
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
          description: |-
            Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)

            Filtering is supported for the following fields and operators:

            **id**: *eq, ne, in*

            **completed**: *eq, ne*

            **certificationSubjectSummary.id**: *eq, ne, in*

            **certificationSubjectSummary.subjectName**: *eq, sw, co*

            **certificationSubjectSummary.subjectManagerName**: *eq, sw, co*

            **certificationSubjectSummary.subjectEmail**: *eq, sw, co*

            **certificationSubjectSummary.identityState**: *eq, in, ne*

            **reviewData.targetReference.id**: *eq, ne, in*

            **reviewData.targetReference.name**: *eq, sw, co*

            **reviewData.targetReference.type**: *eq*

            **reviewData.entitlement.provisioningType**: *eq, ne, in*

            **sourceName**: *eq, sw, co*

            **accountName**: *eq, sw, co*

            **reauthRequired**: *eq, ne*
          example: id eq "ef38f943-47e9-4562-b5bb-8424a56397d8"
          required: false
        - in: query
          name: sorters
          schema:
            type: string
            format: comma-separated
          description: |-
            Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)

            Sorting is supported for the following fields: **certificationSubjectSummary.subjectName, certificationSubjectSummary.subjectManagerName, reviewData.targetReference.id, reviewData.targetReference.name, sourceName, accountName**
          example: certificationSubjectSummary.subjectName
          required: false
        - in: query
          name: activity-data
          schema:
            type: boolean
            default: false
            example: false
          description: If set to true, the response will include HTTP header "SLPT-Activity-Data-ID" which will allow the caller to query for certification items activity data in a separate call.
          required: false
      responses:
        '200':
          description: A list of review items
          content:
            application/json:
              schema:
                type: array
                items:
                  type: object
                  properties:
                    id:
                      type: string
                      format: uuid
                      description: The review item's ID
                      example: ef38f943-47e9-4562-b5bb-8424a56397d8
                    type:
                      type: string
                      description: Type of the certification item
                      enum:
                        - ENTITLEMENT
                        - ACCESS_PROFILE
                        - ROLE
                        - ROLE_NAME
                        - ROLE_DESCRIPTION
                        - ROLE_CRITERIA
                        - ROLE_CRITERIA_RULE
                        - ROLE_CRITERIA_MEMBER
                      example: ROLE
                      title: CertificationItemType
                    completed:
                      type: boolean
                      description: Indicates whether the review item is complete
                      example: false
                      default: false
                    newAccess:
                      type: boolean
                      description: Indicates whether the review item is for new access to a source
                      example: false
                      default: false
                    decision:
                      type: string
                      description: The decision to approve or revoke the review item
                      enum:
                        - ACKNOWLEDGED
                        - APPROVED
                        - REVOKED
                        - UNDECIDED
                      example: APPROVED
                      title: CertificationDecision
                    proposedEndDate:
                      type: string
                      format: date-time
                      description: The end date proposed as part of decision to sunset a user's access
                      example: '2021-12-25T00:00:00.000Z'
                    comments:
                      type: string
                      description: Comments for this review item
                      example: This user is still fulfulling this role
                    reviewData:
                      description: An object holding the entity that is being reviewed
                      type: object
                      properties:
                        targetReference:
                          type: object
                          properties:
                            type:
                              type: string
                              description: Type of the certification item
                              enum:
                                - ENTITLEMENT
                                - ACCESS_PROFILE
                                - ROLE
                                - ROLE_NAME
                                - ROLE_DESCRIPTION
                                - ROLE_CRITERIA
                                - ROLE_CRITERIA_RULE
                                - ROLE_CRITERIA_MEMBER
                              example: ROLE
                              title: CertificationItemType
                            id:
                              type: string
                              description: Identifier of the target item.
                              example: 5168015d32f890ca15812c9180835d2e
                            name:
                              type: string
                              description: Human-readable display name of identity. This is read-only
                              example: Alison Ferguso
                          title: TargetReference
                        entitlement:
                          type: object
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
                              type: string
                              description: Information about the entitlement
                              example: Gives read/write access to the company database
                            privileged:
                              type: boolean
                              example: false
                              default: false
                              deprecated: true
                              description: Deprecated. Replaced by effectivePrivilege (HIGH, MEDIUM, LOW, NONE). Indicates if the entitlement is a privileged entitlement. Retained for backward compatibility.
                            owner:
                              type: object
                              properties:
                                type:
                                  type: string
                                  description: The type can only be IDENTITY. This is read-only
                                  example: IDENTITY
                                id:
                                  type: string
                                  description: Identity id.
                                  example: 5168015d32f890ca15812c9180835d2e
                                name:
                                  type: string
                                  description: Human-readable display name of identity. This is read-only
                                  example: Alison Ferguso
                                email:
                                  type: string
                                  format: email
                                  description: Email address of identity. This is read-only
                                  example: alison.ferguso@identitysoon.com
                              title: IdentityReference
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
                              default: true
                              description: Indicates whether the entitlement can be revoked
                              example: true
                            cloudGoverned:
                              type: boolean
                              default: false
                              description: True if the entitlement is cloud governed
                              example: false
                            account:
                              type: object
                              description: Information about the status of the entitlement
                              properties:
                                nativeIdentity:
                                  type: string
                                  description: The native identity for this account
                                  example: CN=Alison Ferguson
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
                                  description: The type of the Account Reference
                                  enum:
                                    - ACCOUNT
                                  example: ACCOUNT
                                id:
                                  type: string
                                  description: The id associated with the account
                                  example: 2c9180857182305e0171993737eb29e6
                                name:
                                  type: string
                                  description: The account name
                                  example: Alison Ferguso
                                created:
                                  type: string
                                  format: date-time
                                  description: When the account was created
                                  example: '2020-04-20T20:11:05.067Z'
                                modified:
                                  type: string
                                  format: date-time
                                  description: When the account was last modified
                                  example: '2020-05-20T18:57:16.987Z'
                              title: AccountReference
                            dataAccess:
                              type: object
                              properties:
                                policies:
                                  type: array
                                  description: List of classification policies that apply to resources the entitlement or group has access to.
                                  items:
                                    type: object
                                    properties:
                                      value:
                                        type: string
                                        description: Value of the policy
                                        example: GDPR-20
                                categories:
                                  type: array
                                  description: List of classification categories that apply to resources the entitlement or group has access to.
                                  items:
                                    type: object
                                    properties:
                                      value:
                                        type: string
                                        description: Value of the category
                                        example: SSN
                                      matchCount:
                                        type: integer
                                        description: Number of matches for the category.
                                        example: 10
                                impactScore:
                                  type: object
                                  properties:
                                    value:
                                      type: string
                                      description: Impact Score for this data
                                      example: Medium
                              title: DataAccess
                            containsDataAccess:
                              type: boolean
                              default: false
                              description: Will be true if the dataAccess property is populated.
                              example: true
                            activityInsights:
                              type: object
                              properties:
                                usageDays:
                                  type: integer
                                  description: The number of usage days in the last 90 days
                                  example: 12
                                  format: int32
                                usageDaysState:
                                  type: string
                                  enum:
                                    - COMPLETE
                                    - UNKNOWN
                                  description: The state indicates whether data is missing, or whether there is usage data with no value
                                  example: COMPLETE
                              title: ActivityInsights
                            provisioningType:
                              type: string
                              enum:
                                - JIT
                                - STANDING
                              description: Whether the entitlement assignment is just-in-time or standing
                              example: STANDING
                          title: Entitlement
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
                              deprecated: true
                              description: Deprecated. Replaced by effectivePrivilege (HIGH, MEDIUM, LOW, NONE). Indicates if the access profile contains any entitlements that are privileged. Retained for backward compatibility.
                              example: false
                              default: false
                            cloudGoverned:
                              type: boolean
                              description: True if the access profile is cloud governed.
                              example: false
                              default: false
                            endDate:
                              type: string
                              format: date-time
                              description: The date at which a user's access expires
                              example: '2021-12-25T00:00:00.000Z'
                            owner:
                              type: object
                              properties:
                                type:
                                  type: string
                                  description: The type can only be IDENTITY. This is read-only
                                  example: IDENTITY
                                id:
                                  type: string
                                  description: Identity id.
                                  example: 5168015d32f890ca15812c9180835d2e
                                name:
                                  type: string
                                  description: Human-readable display name of identity. This is read-only
                                  example: Alison Ferguso
                                email:
                                  type: string
                                  format: email
                                  description: Email address of identity. This is read-only
                                  example: alison.ferguso@identitysoon.com
                              title: IdentityReference
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
                            entitlements:
                              type: array
                              description: A list of entitlement references associated to this access profile.
                              items:
                                type: object
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
                                    type: string
                                    description: Information about the entitlement
                                    example: Gives read/write access to the company database
                                title: EntitlementReference
                          title: AccessProfile
                        role:
                          type: object
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
                              deprecated: true
                              description: Deprecated. Replaced by effectivePrivilege (HIGH, MEDIUM, LOW, NONE). Indicates if the role contains any access profiles that are privileged. Retained for backward compatibility.
                              example: false
                              default: false
                            owner:
                              type: object
                              properties:
                                type:
                                  type: string
                                  description: The type can only be IDENTITY. This is read-only
                                  example: IDENTITY
                                id:
                                  type: string
                                  description: Identity id.
                                  example: 5168015d32f890ca15812c9180835d2e
                                name:
                                  type: string
                                  description: Human-readable display name of identity. This is read-only
                                  example: Alison Ferguso
                                email:
                                  type: string
                                  format: email
                                  description: Email address of identity. This is read-only
                                  example: alison.ferguso@identitysoon.com
                              title: IdentityReference
                            revocable:
                              type: boolean
                              description: Indicates whether the Role can be revoked or requested
                              example: false
                              default: false
                            assignmentId:
                              type: string
                              description: the ID of the role assignment
                              example: 2c91808a7190d06e0171993907fd0794
                            endDate:
                              type: string
                              format: date-time
                              description: The date when a user's access expires.
                              example: '2021-12-25T00:00:00.000Z'
                            entitlements:
                              type: array
                              description: A list of entitlement references associated to this Role.
                              items:
                                type: object
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
                                    type: string
                                    description: Information about the entitlement
                                    example: Gives read/write access to the company database
                                title: EntitlementReference
                            accessProfiles:
                              type: array
                              description: A list of access profile references associated to this Role.
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
                                title: AccessProfileReference
                          title: Role
                      title: ReviewData
                    certificationSubjectSummary:
                      description: The subject being targeted by a certification.
                      type: object
                      properties:
                        subjectType:
                          type: string
                          description: The type of subject being targeted by this certification
                          enum:
                            - IDENTITY
                            - MACHINE_IDENTITY
                            - ROLE
                          example: IDENTITY
                        id:
                          type: string
                          format: uuid
                          description: The subject id
                          example: 10dcb487-fd0d-44a1-8338-e48e7b9caf61
                        subjectName:
                          type: string
                          description: Name of the target subject
                          example: Alison Ferguson
                        subjectTargetId:
                          type: string
                          description: The ID of the entity being targeted by a certification
                          example: 2c9180857182306001719937377a33de
                        completed:
                          type: boolean
                          description: Indicates whether the review items for the linked subject's certification have been completed
                          example: false
                          default: false
                        subjectEmail:
                          type: string
                          format: email
                          description: Email of the subject
                          example: Alison.Ferguson@email.com
                        subjectManagerName:
                          type: string
                          description: The name of the subject's manager
                          example: Bobby Boss
                        identityState:
                          type: string
                          description: The state of identity/subject
                          enum:
                            - ACTIVE
                            - INACTIVE_LONG_TERM
                            - INACTIVE_SHORT_TERM
                          example: ACTIVE
                      title: CertificationSubjectSummary
                    actor:
                      type: object
                      properties:
                        type:
                          type: string
                          description: The type can only be IDENTITY. This is read-only
                          example: IDENTITY
                        id:
                          type: string
                          description: Identity id.
                          example: 5168015d32f890ca15812c9180835d2e
                        name:
                          type: string
                          description: Human-readable display name of identity. This is read-only
                          example: Alison Ferguso
                        email:
                          type: string
                          format: email
                          description: Email address of identity. This is read-only
                          example: alison.ferguso@identitysoon.com
                      title: IdentityReference
                    accountName:
                      type: string
                      description: The name of the account to which this access profile belongs
                      example: Alison Ferguson
                    sourceName:
                      type: string
                      description: The name of the source for which this access profile belongs
                      example: ODS-AD-Source
                    reauthRequired:
                      type: boolean
                      description: Indicates whether the review item requires a reauthentication for the approver
                      example: false
                      default: false
                  title: ReviewItem
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
