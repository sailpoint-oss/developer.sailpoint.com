## OpenAPI

```yaml GET /machine-identities/v2
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
  /machine-identities/v2:
    get:
      description: This API returns a list of machine identities.
      operationId: listMachineIdentitiesV2
      security:
        - userAuth:
            - idn:mis-identity:read
            - idn:mis-identity:manage
        - applicationAuth:
            - idn:mis-identity:read
            - idn:mis-identity:manage
      parameters:
        - in: query
          name: filters
          required: false
          schema:
            type: string
          example: identityId eq "2c9180858082150f0180893dbaf44201"
          description: |-
            Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)

            Filtering is supported for the following fields and operators:

            **id**: *eq, in, sw*

            **displayName**: *eq, in, sw*

            **nativeIdentity**: *eq, in, sw*

            **attributes**: *eq*

            **manuallyEdited**: *eq*

            **subtype**: *eq, in*

            **owners.primaryIdentity.id**: *eq, in, sw*

            **owners.primaryIdentity.name**: *eq, in, isnull, pr*

            **owners.secondaryIdentity.id**: *eq, in, sw*

            **owners.secondaryIdentity.name**: *eq, in, isnull, pr*

            **owners.secondaryGovernanceGroup.id**: *eq, in*

            **owners.secondaryGovernanceGroup.name**: *eq, in, isnull, pr*

            **source.id**: *eq, in*

            **source.name**: *eq, in, sw*

            **entitlement.id**: *eq, in*

            **entitlement.name**: *eq, in, sw*

            **risk.severity**: *eq, in*

            **businessApplicationRefs.id**: *eq*

            **effectiveSanctionedStatus**: *eq*

            **sessionCount**: *eq, gt, ge, lt, le, isnull*

            **suspiciousSessionCount**: *eq, gt, ge, lt, le, isnull*

            **entroId**: *eq*

            **insights**: *eq*

            Business Application filters require Business Applications to be enabled for the tenant. Filter values are case-sensitive. When Business Applications is not enabled, these filters are not allowed and return `400`.

            `sessionCount`, `suspiciousSessionCount`, `entroId`, and `insights` require Entro enrichment to be enabled for the tenant. When it is not, those filters return `400`. `entroId` is an exact, case-sensitive match. `insights` matches one whole array element and does not match a substring. `sessionCount` and `suspiciousSessionCount` treat null as not enriched; `0` is a real count.
        - in: query
          name: sorters
          schema:
            type: string
            format: comma-separated
          required: false
          description: |-
            Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)

            Sorting is supported for the following fields: **nativeIdentity, name, owners.primaryIdentity.name, source.name, created, modified, sessionCount, suspiciousSessionCount**

            `entroId` and `insights` are not sortable. `sessionCount` and `suspiciousSessionCount` require Entro enrichment to be enabled; otherwise those sorters return `400`. Null counts sort as not enriched, distinct from `0`.
          example: nativeIdentity
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
          description: List of machine identities.
          content:
            application/json:
              schema:
                type: array
                items:
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
                      title: Machine Identity V2
                      properties:
                        description:
                          type: string
                          description: Description of the machine identity.
                          example: Service account for nightly batch jobs
                        attributes:
                          type: object
                          additionalProperties: true
                          description: A map of custom machine identity attributes.
                          example:
                            privilegeLevel: HIGH
                            region: APAC
                        connectorAttributes:
                          type: object
                          additionalProperties: true
                          description: A map of attributes sourced from the connector during aggregation.
                          example:
                            objectguid: abc-123
                        manuallyEdited:
                          type: boolean
                          description: Indicates if the machine identity has been manually edited.
                          default: false
                          example: true
                        manuallyCreated:
                          type: boolean
                          description: Indicates if the machine identity has been manually created.
                          default: false
                          example: true
                        owners:
                          description: The owner configuration associated to the machine identity.
                          type: object
                          title: Machine Identity Owners V2
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
                                - example:
                                    id: 2c9180858082150f0180893dbaf44201
                                    name: John Doe
                                    type: IDENTITY
                            secondary:
                              type: array
                              maxItems: 10
                              description: Additional owners. Entries are either up to ten human (IDENTITY) references or exactly one GOVERNANCE_GROUP reference - not both. Governance-group owners appear here with type GOVERNANCE_GROUP.
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
                                  name: Jane Doe
                                  type: IDENTITY
                        subtype:
                          type: string
                          description: The subtype value associated to the machine identity.
                          example: AI_AGENT
                        sourceId:
                          type: string
                          description: The source id associated to the machine identity.
                          example: 6d28b7c1-620c-49c6-b6d5-cbf81eb4b5fa
                        uuid:
                          type: string
                          description: The UUID associated to the machine identity directly aggregated from a source.
                          example: f5dd23fe-3414-42b7-bb1c-869400ad7a10
                        nativeIdentity:
                          type: string
                          description: The native identity associated to the machine identity directly aggregated from a source.
                          example: abc:123:dddd
                        datasetId:
                          type: string
                          description: The dataset id associated to the source from which the identity was retrieved.
                          example: 8886e5e3-63d0-462f-a195-d98da885b8dc
                        environment:
                          type: string
                          description: The environment the machine identity belongs to.
                          example: PRODUCTION
                        existsOnSource:
                          type: string
                          description: Indicates whether the machine identity still exists on the source.
                          example: 'TRUE'
                        status:
                          type: string
                          description: Operational status read from stored attributes.status; null when absent.
                          nullable: true
                          example: ACTIVE
                        resource:
                          description: The source resource this machine identity is derived from.
                          type: object
                          title: Resource V2
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
                              description: The display name of the source resource.
                              example: nightly-batch-role
                            features:
                              type: array
                              description: The set of features supported by the source resource.
                              items:
                                type: string
                              example:
                                - PROVISIONING
                                - AUTHENTICATION
                        source:
                          description: The source of the machine identity.
                          readOnly: true
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
                            - example:
                                id: 6d28b7c1-620c-49c6-b6d5-cbf81eb4b5fa
                                name: Active Directory
                                type: SOURCE
                        userEntitlements:
                          type: array
                          description: The user entitlements associated to the machine identity.
                          items:
                            type: object
                            title: User Entitlement V2
                            description: A user entitlement associated to a machine identity.
                            properties:
                              sourceId:
                                type: string
                                description: The source ID of the entitlement.
                                example: 5898b7c1-620c-49c6-cccc-cbf81eb4bddd
                              entitlementId:
                                type: string
                                description: The ID of the entitlement.
                                example: 6d28b7c1-620c-49c6-b6d5-cbf81eb4b5fa
                              displayName:
                                type: string
                                description: The display name of the entitlement.
                                example: Entitlement Name
                              source:
                                description: The source of the entitlement.
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
                                  - example:
                                      id: 5898b7c1-620c-49c6-cccc-cbf81eb4bddd
                                      name: Test Source
                                      type: SOURCE
                        businessApplicationRefs:
                          type: array
                          nullable: true
                          maxItems: 1
                          description: |-
                            Optional Business Application references associated with this machine identity.
                            Available when Business Applications is enabled for the tenant.
                            On create and patch, at most one reference is allowed and is persisted as a `MANUAL` correlation.
                            When Business Applications is not enabled, this field is null on responses and is rejected (`400`) if supplied on write.
                          items:
                            type: object
                            title: Business Application Ref
                            description: |-
                              Reference to a Business Application associated with a machine identity.
                              Available when Business Applications is enabled for the tenant.
                              At most one Business Application reference is supported per machine identity on create and patch.
                            required:
                              - type
                              - id
                            properties:
                              type:
                                type: string
                                description: Reference type. Must be `BUSINESS_APPLICATION`.
                                enum:
                                  - BUSINESS_APPLICATION
                                example: BUSINESS_APPLICATION
                              id:
                                type: string
                                format: uuid
                                description: Existing Business Application id in the tenant.
                                example: 2ee5e239-e68c-4d69-93fb-6c7ce4576190
                              name:
                                type: string
                                nullable: true
                                description: |-
                                  Business Application display name.
                                  Ignored on write; responses are enriched from the Business Application.
                                example: Cursor
                              sanctionedStatus:
                                allOf:
                                  - type: string
                                    title: Sanctioned Status
                                    description: |-
                                      Sanctioned status for a Business Application or the derived effective status on a machine identity.
                                      Values are case-sensitive.
                                    enum:
                                      - SANCTIONED
                                      - UNSANCTIONED
                                      - UNKNOWN
                                    example: SANCTIONED
                                readOnly: true
                                description: |-
                                  Sanctioned status of the linked Business Application.
                                  Ignored on write; responses are enriched from the Business Application.
                                example: SANCTIONED
                              correlationType:
                                allOf:
                                  - type: string
                                    title: Correlation Type
                                    description: |-
                                      Whether the Business Application reference was manually assigned or automatically correlated.
                                      On write (create/patch), omit or send `MANUAL` (default). `AUTOMATIC` is rejected with `400 Bad Request`.
                                    enum:
                                      - MANUAL
                                      - AUTOMATIC
                                    example: MANUAL
                                description: |-
                                  Correlation type for this reference.
                                  On write: omit or `MANUAL` (default). `AUTOMATIC` is rejected (`400`).
                                  On response: may be `MANUAL` or `AUTOMATIC`.
                                example: MANUAL
                        effectiveSanctionedStatus:
                          allOf:
                            - type: string
                              title: Sanctioned Status
                              description: |-
                                Sanctioned status for a Business Application or the derived effective status on a machine identity.
                                Values are case-sensitive.
                              enum:
                                - SANCTIONED
                                - UNSANCTIONED
                                - UNKNOWN
                              example: SANCTIONED
                          readOnly: true
                          nullable: true
                          description: |-
                            Derived sanctioned status from linked Business Applications; `UNKNOWN` when no refs are present.
                            Available when Business Applications is enabled for the tenant; null when it is not enabled.
                            Read-only on create and patch input.
                          example: SANCTIONED
                        risk:
                          type: object
                          readOnly: true
                          description: Risk data for the machine identity; null when no risk data has landed yet.
                          properties:
                            score:
                              type: number
                              format: double
                              description: Normalised risk score 0.0-100.0.
                              example: 72.5
                            severity:
                              type: string
                              description: Risk severity bucket.
                              enum:
                                - CRITICAL
                                - HIGH
                                - MEDIUM
                                - LOW
                              example: HIGH
                        entroId:
                          type: string
                          readOnly: true
                          nullable: true
                          description: Entro back-reference. Present when Entro enrichment is enabled for the tenant. Null means the identity is not Entro-correlated. Read-only; written only by aggregation. Not returned on older machine-identity versions.
                          example: 117923dfeaaf4a1ab09b6252ea369e44
                        insights:
                          type: array
                          readOnly: true
                          nullable: true
                          description: Entro insights. Null means not Entro-correlated; an empty array means enriched with no insights. Read-only; written only by aggregation. Filter matches a whole element, not a substring.
                          items:
                            type: string
                          example:
                            - Sanctioned Service Access
                        sessionCount:
                          type: integer
                          format: int32
                          readOnly: true
                          nullable: true
                          description: Entro session count. Null means not Entro-correlated and is not the same as 0. Read-only; written only by aggregation.
                          example: 152
                        suspiciousSessionCount:
                          type: integer
                          format: int32
                          readOnly: true
                          nullable: true
                          description: Entro suspicious session count. Null means not Entro-correlated and is not the same as 0. Read-only; written only by aggregation.
                          example: 22
                  title: machineidentityv2
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
