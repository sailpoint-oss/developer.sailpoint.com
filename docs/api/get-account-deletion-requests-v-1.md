## OpenAPI

```yaml GET /account-requests/v1/deletion
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
  /account-requests/v1/deletion:
    get:
      description: Retrieves a paginated list of account deletion requests filtered by the provided query parameters. When the "mine" parameter is set to true, the response includes only those deletion requests that were initiated by the currently authenticated user. If "mine" is false or not specified, the endpoint returns all account deletion requests associated with the current tenant, regardless of the initiator. This allows both users and administrators to view relevant deletion requests based on their access level and intent.
      operationId: getAccountDeletionRequestsV1
      security:
        - userAuth:
            - idn:account-requests:read
            - idn:account-requests:management
      parameters:
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
          name: mine
          schema:
            type: boolean
            default: false
          description: Determines whether to return only the account deletion requests initiated by the currently authenticated user. If set to true, the response includes only deletion requests created by the logged-in user. If set to false or not provided, the response includes all deletion requests for the tenant, regardless of the initiator. This parameter allows users to view their own requests, while administrators can view all requests within the tenant.
          example: true
          required: false
      responses:
        '200':
          description: Account Action Request objects.
          content:
            application/json:
              schema:
                type: array
                items:
                  type: object
                  title: Account Action Request Dto
                  description: Represents a request to perform an action on an account, such as deletion or modification.
                  properties:
                    accountRequestId:
                      type: string
                      description: Account requester ID.
                      example: 2d8180a46faadee4016fb4e018c20648
                    requestType:
                      type: string
                      description: Access item requester's identity ID.
                      example: 2c7180a46faadee4016fb4e018c20648
                    createdAt:
                      description: Creation date and time of account deletion request date.
                      type: string
                      example: '2026-01-20T21:30:00Z'
                      format: date-time
                      readOnly: true
                    completedAt:
                      description: Account deletion request completion date and time.
                      type: string
                      example: '2026-01-20T21:35:00Z'
                      format: date-time
                      readOnly: true
                    overallStatus:
                      type: string
                      description: Overall status of deletion request.
                      example: SUCCESS
                    requester:
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
                        - description: The identity who request this account delete request.
                          nullable: false
                          example:
                            type: IDENTITY
                            id: SailPoint Support
                            name: 85131bd73fdc423599e57f40b29f01fe
                    requesterComments:
                      type: string
                      description: Comments added by the requester while creating the account deletion request.
                      example: User requested account deletion due to inactivity.
                    accountDetails:
                      allOf:
                        - description: Account Details
                          type: object
                          title: Account Details
                          properties:
                            id:
                              description: unique id of this object
                              type: string
                              example: 2c91808474683da6017468693c260195
                            name:
                              type: string
                            accountId:
                              type: string
                              example: 4191808474683da6017468693c260195
                            description:
                              type: string
                            nativeIdentity:
                              type: string
                            uuid:
                              type: string
                            displayName:
                              type: string
                            disabled:
                              type: boolean
                            locked:
                              type: boolean
                            uncorrelated:
                              type: boolean
                            systemAccount:
                              type: boolean
                            authoritative:
                              type: boolean
                            supportsPasswordChange:
                              type: boolean
                            attributes:
                              type: object
                            application:
                              type: object
                            identity:
                              type: object
                            schema:
                              type: object
                            pendingAccessRequestIds:
                              type: array
                              items:
                                type: string
                            features:
                              type: array
                              items:
                                type: string
                                enum:
                                  - AUTHENTICATE
                                  - COMPOSITE
                                  - DIRECT_PERMISSIONS
                                  - DISCOVER_SCHEMA
                                  - ENABLE
                                  - MANAGER_LOOKUP
                                  - NO_RANDOM_ACCESS
                                  - PROXY
                                  - SEARCH
                                  - TEMPLATE
                                  - UNLOCK
                                  - UNSTRUCTURED_TARGETS
                                  - SHAREPOINT_TARGET
                                  - PROVISIONING
                                  - GROUP_PROVISIONING
                                  - SYNC_PROVISIONING
                                  - PASSWORD
                                  - CURRENT_PASSWORD
                                  - ACCOUNT_ONLY_REQUEST
                                  - ADDITIONAL_ACCOUNT_REQUEST
                                  - NO_AGGREGATION
                                  - GROUPS_HAVE_MEMBERS
                                  - NO_PERMISSIONS_PROVISIONING
                                  - NO_GROUP_PERMISSIONS_PROVISIONING
                                  - NO_UNSTRUCTURED_TARGETS_PROVISIONING
                                  - NO_DIRECT_PERMISSIONS_PROVISIONING
                            meta:
                              type: object
                        - description: Account Details
                          nullable: false
                          example:
                            accountId: 4542bb255921482fb36f6a5550e23a99
                            accountName: machine102
                            accountNativeIdentity: CN=machine 102,OU=megapod-useast1-vivek-e2e,OU=org-data-service,DC=TestAutomationAD,DC=local
                            accountUuid:
                              bcde4ff4-087a-4af4-b5e4-95c85e386276: null
                            accountType: MACHINE
                            accountSubtypeId: d7ae9ea3-507f-4d00-9d4f-b4464b344b88
                            accountSubtype: null
                            description: null
                            sourceId: a03caa629a624cee90f94048252034cf
                            sourceName: Active Directory
                            hasEntitlements: false
                            disabled: false
                            locked: false
                            ownerIdentity:
                              type: IDENTITY
                              id: 28ca01acdd3648b4b0890ab2e0af8839
                              name: walter.white
                    correlatedIdentity:
                      allOf:
                        - type: object
                          title: Identity Reference
                          nullable: true
                          description: The manager for the identity.
                          properties:
                            type:
                              example: IDENTITY
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
                              title: dtotype
                            id:
                              type: string
                              description: Identity id
                              example: 2c9180a46faadee4016fb4e018c20639
                            name:
                              type: string
                              description: Human-readable display name of identity.
                              example: Thomas Edison
                        - description: Correlated Identity details
                      example:
                        id: c2353ef10dd54a8e9725beff360c0be2
                        name: machine102
                        email: machine.102@testmail.identitysoon.com
                        status: ACTIVE
                    managerReference:
                      allOf:
                        - type: object
                          title: Identity Reference
                          nullable: true
                          description: The manager for the identity.
                          properties:
                            type:
                              example: IDENTITY
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
                              title: dtotype
                            id:
                              type: string
                              description: Identity id
                              example: 2c9180a46faadee4016fb4e018c20639
                            name:
                              type: string
                              description: Human-readable display name of identity.
                              example: Thomas Edison
                      example:
                        id: 117e169acf21f4ae28e8a06198ce7f69
                        name: manager
                        email: manager@testmail.identitysoon.com
                        status: ACTIVE
                    approvalRequestId:
                      type: string
                      description: ID of the approval request associated with the account deletion action.
                      example: 06cc946d58bb4422bbd094cf78667d42
                    accountRequestPhases:
                      type: array
                      items:
                        type: object
                        title: Account Request phase
                        description: Contains detailed information about each phase in the account request process, including its type, current state, and relevant timestamps.
                        properties:
                          name:
                            type: string
                            enum:
                              - APPROVAL_PHASE
                              - PROVISIONING_PHASE
                            title: AccountRequestPhaseType
                            description: Enum of account request phase type
                            example: APPROVAL_PHASE
                          state:
                            type: string
                            enum:
                              - PENDING
                              - CANCELLED
                              - APPROVED
                              - REJECTED
                              - PASSED
                              - FAILED
                              - NOT_STARTED
                            description: The current phase state of the account request, indicating its progress or outcome in the approval workflow.
                            example: APPROVED
                            title: accountrequestphasestate
                          started:
                            type: string
                            description: Start date of account request phase.
                            format: date-time
                            readOnly: true
                            example: '2026-01-21T11:43:22.432Z'
                          finished:
                            description: Finish date of account request phase.
                            type: string
                            format: date-time
                            readOnly: true
                            example: '2026-01-21T11:45:22.432Z'
                      description: List of account request phases.
                      example:
                        - name: APPROVAL_PHASE
                          state: APPROVED
                          started: '2026-01-14T08:08:28.644090559Z'
                          finished: '2026-01-14T08:38:42.707043142Z'
                        - name: PROVISIONING_PHASE
                          state: PASSED
                          started: '2026-01-14T08:38:42.785577841Z'
                          finished: '2026-01-14T08:38:45.932606296Z'
                    approvalDetails:
                      type: array
                      items:
                        type: object
                        title: Approval Details
                        description: Contains comprehensive details about the approval process, including the approver's information, comments, decision date, serial order, and the current status of the approval request.
                        properties:
                          approver:
                            type: object
                            title: Approver Dto
                            description: Contains detailed information about the approver, including their identity, contact details, type, and references to related identities such as owners, actioned identities, and members.
                            properties:
                              identityID:
                                type: string
                                nullable: false
                                example: 22efd140d88a4ceeab32c8829973244c
                                description: Identity ID and it cannot be null.
                              id:
                                nullable: true
                                type: string
                                description: Optional id
                              name:
                                type: string
                                example: SailPoint Support
                                description: Identity display name
                              email:
                                type: string
                                example: support@testmail.identitysoon.com
                                description: Email address of identity
                              type:
                                type: string
                                example: IDENTITY
                                description: Used to mention type of data transfer object in this case it is used to transfer IDENTITY data.
                              ownerOf:
                                nullable: true
                                type: array
                                items:
                                  type: object
                                  title: ApproverReference
                                  properties:
                                    id:
                                      type: string
                                      description: Id of supported DtoType like IDENTITY, MACHINE_IDENTITY etc.
                                      example: 85131bd73fdc423599e57f40b29f01fe
                                    type:
                                      type: string
                                      description: Type of Dto
                                      example: IDENTITY
                                    name:
                                      type: string
                                      description: Display name of DtoType like IDENTITY, MACHINE_IDENTITY etc
                                      example: SailPoint Support
                                description: List of reference of identity type dto for account owner identities
                              actionedAs:
                                nullable: true
                                type: array
                                items:
                                  type: object
                                  title: ApproverReference
                                  properties:
                                    id:
                                      type: string
                                      description: Id of supported DtoType like IDENTITY, MACHINE_IDENTITY etc.
                                      example: 85131bd73fdc423599e57f40b29f01fe
                                    type:
                                      type: string
                                      description: Type of Dto
                                      example: IDENTITY
                                    name:
                                      type: string
                                      description: Display name of DtoType like IDENTITY, MACHINE_IDENTITY etc
                                      example: SailPoint Support
                                description: List of reference of identity type dto who acted on behalf of other identities.
                              members:
                                nullable: true
                                type: array
                                items:
                                  type: object
                                  title: ApproverReference
                                  properties:
                                    id:
                                      type: string
                                      description: Id of supported DtoType like IDENTITY, MACHINE_IDENTITY etc.
                                      example: 85131bd73fdc423599e57f40b29f01fe
                                    type:
                                      type: string
                                      description: Type of Dto
                                      example: IDENTITY
                                    name:
                                      type: string
                                      description: Display name of DtoType like IDENTITY, MACHINE_IDENTITY etc
                                      example: SailPoint Support
                                description: List of reference of identity type dto for member identities.
                          approverComments:
                            type: string
                            description: Comments added by approver while rejecting or approving the account deletion request.
                            example: Approving account deletion request due to long term inactivity of account.
                          decisionDate:
                            type: string
                            description: Decision date of approval rejected or approved.
                            format: date-time
                            readOnly: true
                            example: '2026-01-21T11:43:22.432Z'
                          serialOrder:
                            type: integer
                            example: 12345
                            format: int64
                            description: SerialOrder of approval details.
                          status:
                            type: string
                            enum:
                              - PENDING
                              - CANCELLED
                              - APPROVED
                              - REJECTED
                              - PASSED
                              - FAILED
                              - NOT_STARTED
                            description: The current phase state of the account request, indicating its progress or outcome in the approval workflow.
                            example: APPROVED
                            title: accountrequestphasestate
                      description: List approval details
                      example:
                        - identityID: 85131bd73fdc423599e57f40b29f01fe
                          id: 85131bd73fdc423599e57f40b29f01fe
                          name: SailPoint Support
                          email: support@testmail.identitysoon.com
                          type: IDENTITY
                          ownerOf:
                            email: Alfred.255e71dfc6e@testmail.identitysoon.com
                            type: IDENTITY
                            id: 7ec252acbd4245548bc25df22348cb75
                            name: Alfred
                          actionedAs:
                            email: Alfred.255e71dfc6e@testmail.identitysoon.com
                            type: IDENTITY
                            id: 7ec252acbd4245548bc25df22348cb75
                            name: Alfred
                          members:
                            email: Alfred.255e71dfc6e@testmail.identitysoon.com
                            type: IDENTITY
                            id: 7ec252acbd4245548bc25df22348cb75
                            name: Alfred
                    errorDetails:
                      nullable: true
                      type: string
                      description: Detailed error information.
                      example: Detailed error message.
              example:
                - accountRequestId: 18104e7e499b4e23882d6323344ab6bc
                  requestType: DELETE_ACCOUNT
                  createdAt: '2026-01-14T08:08:27.195Z'
                  completedAt: '2026-01-14T08:38:45.932Z'
                  overallStatus: SUCCESS
                  requester:
                    type: IDENTITY
                    id: 85131bd73fdc423599e57f40b29f01fe
                    name: SailPoint Support
                  requesterComments: Delete Machine Account with subtype and account owner Happy Path Test#1
                  accountDetails:
                    accountId: 4542bb255921482fb36f6a5550e23a99
                    accountName: machine102,
                    accountNativeIdentity: CN=machine 102,OU=megapod-useast1-vivek-e2e,OU=org-data-service,DC=TestAutomationAD,DC=local
                    accountUuid: bcde4ff4-087a-4af4-b5e4-95c85e386276
                    accountType: MACHINE
                    accountSubtypeId: d7ae9ea3-507f-4d00-9d4f-b4464b344b88
                    accountSubtype: null
                    description: null
                    sourceId: a03caa629a624cee90f94048252034cf
                    sourceName: Active Directory
                    hasEntitlements: false
                    disabled: false
                    locked: false
                    ownerIdentity:
                      type: IDENTITY
                      id: 28ca01acdd3648b4b0890ab2e0af8839
                      name: walter.white
                  correlatedIdentity:
                    id: c2353ef10dd54a8e9725beff360c0be2
                    name: machine102
                    status: null
                    email: machine.102@testmail.identitysoon.com
                  managerReference:
                    id: 117e169acf21f4ae28e8a06198ce7f69
                    name: manager
                    email: manager@testmail.identitysoon.com
                    status: ACTIVE
                  approvalRequestId: 90a7b947-578b-4285-98dc-5d5d01c7b736
                  accountRequestPhases:
                    - name: APPROVAL_PHASE
                      state: APPROVED
                      started: '2026-01-14T08:08:28.644090559Z'
                      finished: '2026-01-14T08:38:42.707043142Z'
                    - name: PROVISIONING_PHASE
                      state: PASSED
                      started: '2026-01-14T08:38:42.785577841Z'
                      finished: '2026-01-14T08:38:45.932606296Z'
                  approvalDetails:
                    approverType: SOURCE_OWNER
                    approver:
                      id: 85131bd73fdc423599e57f40b29f01fe
                      type: IDENTITY
                      name: SailPoint Support
                    actionedBy:
                      id: 85131bd73fdc423599e57f40b29f01fe
                      type: IDENTITY
                      name: SailPoint Support
                    comments: Yes this can be deleted.
                    decisionDate: '2026-01-14T08:38:41.733779Z'
                    serialOrder: 1
                    status: APPROVED
                  errorDetails: null
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
