## OpenAPI

```yaml GET /machine-accounts/v2
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
  /machine-accounts/v2:
    get:
      description: |
        Use this API to get a list of machine accounts. By default, the list includes machine accounts that are linked to a machine identity or to a source resource.

        When the whole filter is a single comparison on `machineIdentity.id` or `machineIdentity.name`, the list also includes machine accounts linked to the matching machine identities through source resource links.

        A caller without the **idn:mis-account-list:read** right can call this API only when every returned machine account is one they own; otherwise this API returns `403`. Use `ownerIdentity=self` to list only the caller's own machine accounts.

        When this capability is not enabled for the tenant, this API returns `403`.
      operationId: listMachineAccountsV2
      security:
        - userAuth:
            - idn:mis-account:read
            - idn:mis-account:manage
      parameters:
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
          name: ownerIdentity
          required: false
          schema:
            type: string
          example: self
          description: Return only machine accounts whose owner identity is this identity ID. Use `self` for the caller's own identity. This parameter can't be combined with a filter on `ownerIdentity.id`; that combination returns `400`.
        - in: query
          name: filters
          required: false
          schema:
            type: string
          example: machineIdentity.id eq "2c9180858082150f0180893dbaf44201"
          description: |-
            Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)

            Filtering is supported for the following fields and operators:

            **id**: *eq, in*

            **name**: *eq, in, sw*

            **nativeIdentity**: *eq, in, sw*

            **uuid**: *eq, in*

            **description**: *eq, in, sw*

            **machineIdentity.id**: *eq, in*

            **machineIdentity.name**: *eq, in, sw*

            **subtype.technicalName**: *eq, in, sw*

            **subtype.displayName**: *eq, in, sw*

            **accessType**: *eq, in, sw*

            **environment**: *eq, in, sw*

            **ownerIdentity**: *eq, in*

            **ownerIdentity.id**: *eq, in*

            **ownerIdentity.name**: *eq, in, sw*

            **owners.primary.id**: *eq, in*

            **owners.primary.name**: *eq, in, sw*

            **owners.secondaryIdentity.id**: *eq, in*

            **owners.secondaryIdentity.name**: *eq, in, sw*

            **owners.governanceGroup.id**: *eq, in*

            **owners.governanceGroup.name**: *eq, in, sw*

            **manuallyCorrelated**: *eq*

            **enabled**: *eq*

            **locked**: *eq*

            **hasEntitlements**: *eq*

            **attributes**: *eq*

            **connectorAttributes**: *eq*

            **source.id**: *eq, in*

            **source.name**: *eq, in, sw*

            **datasetId**: *eq, in*

            **resource.id**: *eq, in*

            **type**: *eq, in*

            **created**: *eq, gt, lt, ge, le*

            **modified**: *eq, gt, lt, ge, le*

            **risk.severity**: *eq, in*

            **permissionLevel**: *eq, in*

            **lastUsedAt**: *gt, lt, ge, le*

            Use `me` as the value of `ownerIdentity.id` to match the caller's own identity.

            The `owners.*` fields are available only when expanded machine account ownership is enabled for the tenant. The `risk.severity`, `permissionLevel` and `lastUsedAt` fields are available only when machine account risk enrichment is enabled for the tenant. Filtering on an unavailable field returns `400`.
        - in: query
          name: sorters
          required: false
          style: form
          explode: true
          schema:
            type: string
            format: comma-separated
          example: id,name
          description: |-
            Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)

            Sorting is supported for the following fields: **id, name, nativeIdentity, uuid, description, machineIdentity.id, machineIdentity.name, subtype.technicalName, subtype.displayName, accessType, environment, ownerIdentity, ownerIdentity.id, ownerIdentity.name, owners.primary.id, owners.primary.name, owners.secondaryIdentity.id, owners.secondaryIdentity.name, owners.governanceGroup.id, owners.governanceGroup.name, manuallyCorrelated, enabled, locked, hasEntitlements, attributes, connectorAttributes, source.id, source.name, datasetId, resource.id, type, created, modified, risk.severity, permissionLevel, lastUsedAt**

            The same availability rules as for `filters` apply to the `owners.*`, `risk.severity`, `permissionLevel` and `lastUsedAt` fields. `risk.severity` sorts by rank (UNKNOWN, LOW, MEDIUM, HIGH, CRITICAL), not alphabetically.
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
          description: List of machine accounts.
          content:
            application/json:
              schema:
                type: array
                items:
                  title: Machine Account V2
                  type: object
                  description: A machine account. Machine identities are returned as the `machineIdentities` list, which includes the machine identity the account is directly linked to and machine identities linked to the account through its source resource.
                  allOf:
                    - type: object
                      title: Base Common Dto
                      required:
                        - name
                      properties:
                        id:
                          description: System-generated unique ID of the Object
                          type: string
                          example: id12345
                          readOnly: true
                        name:
                          description: Name of the Object
                          type: string
                          example: aName
                          nullable: true
                        created:
                          description: Creation date of the Object
                          type: string
                          example: '2015-05-28T14:07:17Z'
                          format: date-time
                          readOnly: true
                        modified:
                          description: Last modification date of the Object
                          type: string
                          example: '2015-05-28T14:07:17Z'
                          format: date-time
                          readOnly: true
                    - type: object
                      properties:
                        machineIdentities:
                          type: array
                          description: The machine identities linked to this machine account. The list is empty when there are none.
                          items:
                            type: object
                            properties:
                              type:
                                type: string
                                description: The reference type.
                                enum:
                                  - MACHINE_IDENTITY
                                example: MACHINE_IDENTITY
                              id:
                                type: string
                                description: ID of the machine identity.
                                example: 1540e5a4-6c2e-4bf1-b88e-c08cae0696e9
                              name:
                                type: string
                                description: The display name of the machine identity.
                                example: SVC_ADService
                              subtype:
                                type: string
                                nullable: true
                                description: The subtype of the machine identity.
                                enum:
                                  - AI_AGENT
                                  - APPLICATION
                                  - DEVICE
                                example: APPLICATION
                          example:
                            - type: MACHINE_IDENTITY
                              id: 1540e5a4-6c2e-4bf1-b88e-c08cae0696e9
                              name: SVC_ADService
                              subtype: APPLICATION
                        description:
                          type: string
                          nullable: true
                          description: The description of the machine account.
                          example: Service account for Active Directory
                        nativeIdentity:
                          type: string
                          description: The unique ID of the machine account generated by the source system.
                          example: '552775'
                        uuid:
                          type: string
                          nullable: true
                          description: The unique ID of the account as determined by the account schema.
                          example: '{b0dce506-d6d4-44d2-8a32-d9a5b21fb175}'
                        ownerIdentity:
                          description: The identity that owns this machine account.
                          nullable: true
                          allOf:
                            - type: object
                              title: Base Reference Dto
                              properties:
                                type:
                                  description: DTO type
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
                                  description: ID of the object to which this reference applies
                                  example: 2c91808568c529c60168cca6f90c1313
                                name:
                                  type: string
                                  description: Human-readable display name of the object to which this reference applies
                                  example: William Wilson
                          example:
                            id: 2c918084660f45d6016617daa9210584
                            type: IDENTITY
                            name: Adam Kennedy
                        owners:
                          type: object
                          nullable: true
                          description: 'The owners of the machine account: a primary owner plus secondary owners, which are either up to ten identities or one governance group.'
                          properties:
                            primary:
                              description: The identity selected as the primary owner.
                              allOf:
                                - type: object
                                  title: Base Reference Dto
                                  properties:
                                    type:
                                      description: DTO type
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
                                      description: ID of the object to which this reference applies
                                      example: 2c91808568c529c60168cca6f90c1313
                                    name:
                                      type: string
                                      description: Human-readable display name of the object to which this reference applies
                                      example: William Wilson
                              example:
                                id: 2c918084660f45d6016617daa9210584
                                type: IDENTITY
                                name: Adam Kennedy
                            secondary:
                              type: array
                              maxItems: 10
                              description: The secondary owners. Entries are either up to ten identities (type `IDENTITY`) or one governance group (type `GOVERNANCE_GROUP`), not both.
                              items:
                                type: object
                                title: Base Reference Dto
                                properties:
                                  type:
                                    description: DTO type
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
                                    description: ID of the object to which this reference applies
                                    example: 2c91808568c529c60168cca6f90c1313
                                  name:
                                    type: string
                                    description: Human-readable display name of the object to which this reference applies
                                    example: William Wilson
                              example:
                                - id: 2c9180858082150f0180893dbaf44202
                                  type: IDENTITY
                                  name: Jane Doe
                        subtype:
                          type: object
                          nullable: true
                          description: The machine account subtype assigned to this machine account.
                          properties:
                            id:
                              type: string
                              description: ID of the subtype.
                              example: 43bdd144-4b17-4fce-a744-17c7fd3e717b
                            technicalName:
                              type: string
                              description: The technical name of the subtype.
                              example: serviceAccount
                            displayName:
                              type: string
                              description: The display name of the subtype.
                              example: Service Account
                        accessType:
                          type: string
                          nullable: true
                          description: The connection type of the source this account is from.
                          example: direct
                        environment:
                          type: string
                          nullable: true
                          description: The environment of the machine account.
                          example: TEST
                        attributes:
                          type: object
                          nullable: true
                          additionalProperties: true
                          description: Custom attributes specific to the machine account.
                          example:
                            firstName: SailPoint
                            lastName: Support
                        connectorAttributes:
                          type: object
                          nullable: true
                          additionalProperties: true
                          description: The connector attributes for the account.
                          example:
                            mail: machine-178@sailpoint.com
                            givenName: Support
                        classificationMethod:
                          type: string
                          nullable: true
                          description: How the account was classified as a machine account.
                          enum:
                            - CRITERIA
                            - SOURCE
                            - DISCOVERY
                            - MANUAL
                            - MANUALLY_UNCLASSIFIED
                          example: SOURCE
                        manuallyEdited:
                          type: boolean
                          default: false
                          description: Indicates whether the machine account has been manually edited.
                          example: false
                        manuallyCorrelated:
                          type: boolean
                          default: false
                          description: Indicates whether the account has been manually correlated to an identity.
                          example: false
                        enabled:
                          type: boolean
                          default: false
                          description: Indicates whether the account is enabled.
                          example: true
                        locked:
                          type: boolean
                          default: false
                          description: Indicates whether the account is currently locked.
                          example: false
                        hasEntitlements:
                          type: boolean
                          default: false
                          description: Indicates whether the account has entitlements.
                          example: true
                        source:
                          description: The source this machine account belongs to.
                          allOf:
                            - type: object
                              title: Base Reference Dto
                              properties:
                                type:
                                  description: DTO type
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
                                  description: ID of the object to which this reference applies
                                  example: 2c91808568c529c60168cca6f90c1313
                                name:
                                  type: string
                                  description: Human-readable display name of the object to which this reference applies
                                  example: William Wilson
                          example:
                            id: 8d3e0094e99445de98eef6c75e25jc04
                            type: SOURCE
                            name: Active Directory
                        resource:
                          type: object
                          nullable: true
                          description: The source resource the machine account is derived from. Null when the account has no source resource.
                          properties:
                            id:
                              type: string
                              description: The source resource identifier.
                              example: 8886e5e3-63d0-462f-a195-d98da885b8dc
                            type:
                              type: string
                              description: The type of the source resource.
                              example: aws:iam-role
                            name:
                              type: string
                              nullable: true
                              description: The display name of the source resource.
                              example: nightly-batch-role
                            features:
                              type: array
                              nullable: true
                              description: The features supported by the source resource.
                              items:
                                type: string
                              example:
                                - PROVISIONING
                                - AUTHENTICATION
                        datasetId:
                          type: string
                          nullable: true
                          description: ID of the dataset the machine account was aggregated from. Null for accounts that were not aggregated from a dataset.
                          example: aws-iam-roles
                        type:
                          type: string
                          nullable: true
                          description: The classification of the machine account.
                          enum:
                            - MACHINE
                            - MACHINE_DATASET
                            - CANDIDATE
                            - CANDIDATE_BY_SOURCE
                            - DISCOVERED
                            - AGENT
                          example: MACHINE
                        accountType:
                          type: string
                          nullable: true
                          deprecated: true
                          description: Deprecated. Use `type`, which always has the same value.
                          enum:
                            - MACHINE
                            - MACHINE_DATASET
                            - CANDIDATE
                            - CANDIDATE_BY_SOURCE
                            - DISCOVERED
                            - AGENT
                          example: MACHINE
                        risk:
                          type: object
                          readOnly: true
                          nullable: true
                          description: Risk for this machine account, set by enrichment. Null when no risk has been recorded or when risk enrichment is not enabled for the tenant. Read-only.
                          properties:
                            score:
                              type: number
                              format: double
                              nullable: true
                              description: Risk score from 0 to 100. Null when only a severity has been recorded.
                              example: 72.5
                            severity:
                              type: string
                              nullable: true
                              description: Risk severity.
                              enum:
                                - UNKNOWN
                                - LOW
                                - MEDIUM
                                - HIGH
                                - CRITICAL
                              example: HIGH
                        permissionLevel:
                          type: string
                          readOnly: true
                          nullable: true
                          description: The permission level set by enrichment. Null when not enriched. Read-only.
                          enum:
                            - PRIVILEGED
                            - ELEVATED
                            - BASIC
                            - UNKNOWN
                          example: PRIVILEGED
                        compliance:
                          type: array
                          readOnly: true
                          nullable: true
                          description: Compliance control IDs the machine account violates, set by enrichment. Null when not enriched; empty when no violations were recorded. Read-only.
                          items:
                            type: object
                            properties:
                              id:
                                type: string
                                nullable: true
                                description: Framework control ID.
                                example: SOC2-CC6.1
                        lastUsedAt:
                          type: string
                          format: date-time
                          readOnly: true
                          nullable: true
                          description: When the machine account was last used, set by enrichment. Null when not enriched. Read-only.
                          example: '2026-03-10T21:38:25Z'
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
