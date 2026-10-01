## OpenAPI

```yaml GET /access-request-administration/v1
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
  /access-request-administration/v1:
    get:
      description: |-
        Use this API to get access request statuses of all the access requests in the org based on the specified query  parameters.
        Any user with user level ORG_ADMIN or scope idn:access-request-administration:read can access this endpoint to get  the  access request statuses
        When a requested object has an associated form, each status item may include a `form` object with the form definition ID, instance ID, and answers (`formData`).
      operationId: listAdministratorsAccessRequestStatusV1
      security:
        - userAuth:
            - idn:access-request-administration:read
      parameters:
        - in: header
          name: X-SailPoint-Experimental
          description: Use this header to enable this experimental API.
          example: true
          schema:
            type: string
            default: true
          required: true
        - in: query
          name: requested-for
          schema:
            type: string
          example: 2c9180877b2b6ea4017b2c545f971429
          description: Filter the results by the identity the requests were made for. *me* indicates the current user. Mutually exclusive with *regarding-identity*.
          required: false
        - in: query
          name: requested-by
          schema:
            type: string
          example: 2c9180877b2b6ea4017b2c545f971429
          description: Filter the results by the identity who made the requests. *me* indicates the current user. Mutually exclusive with *regarding-identity*.
          required: false
        - in: query
          name: regarding-identity
          schema:
            type: string
          example: 2c9180877b2b6ea4017b2c545f971429
          description: Filter the results by the specified identity who is either the requester or target of the requests. *me* indicates the current user. Mutually exclusive with *requested-for* and *requested-by*.
          required: false
        - in: query
          name: assigned-to
          schema:
            type: string
          example: 2c9180877b2b6ea4017b2c545f971429
          description: Filter the results by the specified identity who is the owner of the Identity Request Work Item. *me* indicates the current user.
          required: false
        - in: query
          name: count
          description: If this is true, the *X-Total-Count* response header populates with the number of results that would be returned if limit and offset were ignored.
          required: false
          schema:
            type: boolean
            default: false
          example: false
        - in: query
          name: limit
          description: Max number of results to return.
          required: false
          schema:
            type: integer
            format: int32
            minimum: 0
            maximum: 250
            default: 250
          example: 100
        - in: query
          name: offset
          description: Offset into the full result set. Usually specified with *limit* to paginate through the results. Defaults to 0 if not specified.
          required: false
          schema:
            type: integer
            format: int32
            minimum: 0
          example: 10
        - in: query
          name: filters
          schema:
            type: string
          example: accountActivityItemId eq "2c918086771c86df0177401efcdf54c0"
          description: |-
            Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)

            Filtering is supported for the following fields and operators:

            **accountActivityItemId**: *eq, in, ge, gt, le, lt, ne, isnull, sw*

            **accessRequestId**: *in, eq, ne, ge, gt, le, lt, sw*

            **status**: *in, eq, ne*

            **created**: *eq, in, ge, gt, le, lt, ne, isnull, sw*
          required: false
        - in: query
          name: sorters
          schema:
            type: string
            format: comma-separated
          description: |-
            Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)

            Sorting is supported for the following fields: **created, modified, accountActivityItemId, name, accessRequestId**
          example: created
          required: false
        - in: query
          name: request-state
          schema:
            type: string
          example: request-state=EXECUTING
          description: Filter the results by the state of the request. The only valid value is *EXECUTING*.
          required: false
      responses:
        '200':
          description: List of requested item statuses.
          content:
            application/json:
              schema:
                type: array
                items:
                  type: object
                  title: Access Request Admin Item Status
                  properties:
                    id:
                      type: string
                      description: ID of the access request. This is a new property as of 2025. Older access requests may not have an ID.
                      example: 2c9180926cbfbddd016cbfc7c3b10010
                      nullable: true
                    name:
                      type: string
                      description: Human-readable display name of the item being requested.
                      example: AccessProfile1
                      nullable: true
                    type:
                      type: string
                      enum:
                        - ACCESS_PROFILE
                        - ROLE
                        - ENTITLEMENT
                        - null
                      description: Type of requested object.
                      example: ACCESS_PROFILE
                      nullable: true
                    cancelledRequestDetails:
                      allOf:
                        - type: object
                          title: Cancelled Request Details
                          properties:
                            comment:
                              type: string
                              description: Comment made by the owner when cancelling the associated request.
                              example: This request must be cancelled.
                            owner:
                              type: object
                              title: Owner Dto
                              description: Owner's identity.
                              properties:
                                type:
                                  type: string
                                  description: Owner's DTO type.
                                  enum:
                                    - IDENTITY
                                  example: IDENTITY
                                id:
                                  type: string
                                  description: Owner's identity ID.
                                  example: 2c9180a46faadee4016fb4e018c20639
                                name:
                                  type: string
                                  description: Owner's name.
                                  example: Support
                            modified:
                              type: string
                              format: date-time
                              description: Date comment was added by the owner when cancelling the associated request.
                              example: '2019-12-20T09:17:12.192Z'
                          description: Provides additional details for a request that has been cancelled.
                        - nullable: true
                    errorMessages:
                      type: array
                      nullable: true
                      items:
                        type: array
                        description: List of error messages
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
                        example:
                          locale: en-US
                          localeOrigin: DEFAULT
                          text: Error Message
                        title: errormessagedtolist
                      description: List of localized error messages, if any, encountered during the approval/provisioning process.
                    state:
                      type: string
                      enum:
                        - EXECUTING
                        - REQUEST_COMPLETED
                        - CANCELLED
                        - TERMINATED
                        - PROVISIONING_VERIFICATION_PENDING
                        - REJECTED
                        - PROVISIONING_FAILED
                        - NOT_ALL_ITEMS_PROVISIONED
                        - ERROR
                      description: |-
                        Indicates the state of an access request:
                        * EXECUTING: The request is executing, which indicates the system is doing some processing.
                        * REQUEST_COMPLETED: Indicates the request  has been completed.
                        * CANCELLED: The request was cancelled with no user input.
                        * TERMINATED: The request has been terminated before it was able to complete.
                        * PROVISIONING_VERIFICATION_PENDING: The request has finished any approval steps and provisioning is waiting to be verified.
                        * REJECTED: The request was rejected.
                        * PROVISIONING_FAILED: The request has failed to complete.
                        * NOT_ALL_ITEMS_PROVISIONED: One or more of the requested items failed to complete, but there were one or more  successes.
                        * ERROR: An error occurred during request processing.
                      example: EXECUTING
                      title: requesteditemstatusrequeststate
                    approvalDetails:
                      type: array
                      items:
                        type: object
                        title: Approval Status Dto
                        properties:
                          forwarded:
                            type: boolean
                            default: false
                            description: True if the request for this item was forwarded from one owner to another.
                            example: false
                          originalOwner:
                            type: object
                            description: Identity of orginal approval owner.
                            properties:
                              type:
                                type: string
                                description: DTO type of original approval owner's identity.
                                enum:
                                  - GOVERNANCE_GROUP
                                  - IDENTITY
                                example: IDENTITY
                              id:
                                type: string
                                description: ID of original approval owner's identity.
                                example: 2c7180a46faadee4016fb4e018c20642
                              name:
                                type: string
                                description: Display name of original approval owner.
                                example: Michael Michaels
                          currentOwner:
                            allOf:
                              - type: object
                                title: Access Item Reviewed By
                                description: Identity who reviewed the access item request.
                                properties:
                                  type:
                                    type: string
                                    description: DTO type of identity who reviewed the access item request.
                                    enum:
                                      - IDENTITY
                                    example: IDENTITY
                                  id:
                                    type: string
                                    description: ID of identity who reviewed the access item request.
                                    example: 2c3780a46faadee4016fb4e018c20652
                                  name:
                                    type: string
                                    description: Human-readable display name of identity who reviewed the access item request.
                                    example: Allen Albertson
                              - nullable: true
                          modified:
                            type: string
                            format: date-time
                            description: Time at which item was modified.
                            example: '2019-08-23T18:52:57.398Z'
                            nullable: true
                          status:
                            type: string
                            enum:
                              - PENDING
                              - APPROVED
                              - REJECTED
                              - EXPIRED
                              - CANCELLED
                              - ARCHIVED
                            description: |-
                              Indicates the state of the request processing for this item:
                              * PENDING: The request for this item is awaiting processing.
                              * APPROVED: The request for this item has been approved.
                              * REJECTED: The request for this item was rejected.
                              * EXPIRED: The request for this item expired with no action taken.
                              * CANCELLED: The request for this item was cancelled with no user action.
                              * ARCHIVED: The request for this item has been archived after completion.
                            example: PENDING
                            title: manualworkitemstate
                          scheme:
                            type: string
                            enum:
                              - APP_OWNER
                              - SOURCE_OWNER
                              - MANAGER
                              - ROLE_OWNER
                              - ACCESS_PROFILE_OWNER
                              - ENTITLEMENT_OWNER
                              - GOVERNANCE_GROUP
                            description: Describes the individual or group that is responsible for an approval step.
                            example: MANAGER
                            title: approvalscheme
                          errorMessages:
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
                            description: If the request failed, includes any error messages that were generated.
                            nullable: true
                          comment:
                            type: string
                            description: Comment, if any, provided by the approver.
                            example: I approve this request
                            nullable: true
                          removeDate:
                            type: string
                            description: The date the role or access profile or entitlement is no longer assigned to the specified identity.
                            format: date-time
                            example: '2020-07-11T00:00:00Z'
                            nullable: true
                      description: Approval details for each item.
                    manualWorkItemDetails:
                      type: array
                      nullable: true
                      items:
                        type: object
                        title: Manual Work Item Details
                        properties:
                          forwarded:
                            type: boolean
                            default: false
                            description: True if the request for this item was forwarded from one owner to another.
                            example: true
                          originalOwner:
                            type: object
                            nullable: true
                            description: Identity of original work item owner, if the work item has been forwarded.
                            properties:
                              type:
                                type: string
                                description: DTO type of original work item owner's identity.
                                enum:
                                  - GOVERNANCE_GROUP
                                  - IDENTITY
                                example: IDENTITY
                              id:
                                type: string
                                description: ID of original work item owner's identity.
                                example: 2c7180a46faadee4016fb4e018c20642
                              name:
                                type: string
                                description: Display name of original work item owner.
                                example: Michael Michaels
                          currentOwner:
                            type: object
                            description: Identity of current work item owner.
                            nullable: true
                            properties:
                              type:
                                type: string
                                description: DTO type of current work item owner's identity.
                                enum:
                                  - GOVERNANCE_GROUP
                                  - IDENTITY
                                example: IDENTITY
                              id:
                                type: string
                                description: ID of current work item owner's identity.
                                example: 2c3780a46faadee4016fb4e018c20652
                              name:
                                type: string
                                description: Display name of current work item owner.
                                example: Allen Albertson
                          modified:
                            type: string
                            format: date-time
                            description: Time at which item was modified.
                            example: '2019-08-23T18:52:57.398Z'
                          status:
                            type: string
                            enum:
                              - PENDING
                              - APPROVED
                              - REJECTED
                              - EXPIRED
                              - CANCELLED
                              - ARCHIVED
                            description: |-
                              Indicates the state of the request processing for this item:
                              * PENDING: The request for this item is awaiting processing.
                              * APPROVED: The request for this item has been approved.
                              * REJECTED: The request for this item was rejected.
                              * EXPIRED: The request for this item expired with no action taken.
                              * CANCELLED: The request for this item was cancelled with no user action.
                              * ARCHIVED: The request for this item has been archived after completion.
                            example: PENDING
                            title: manualworkitemstate
                          forwardHistory:
                            type: array
                            nullable: true
                            items:
                              type: object
                              title: Approval Forward History
                              properties:
                                oldApproverName:
                                  type: string
                                  description: Display name of approver from whom the approval was forwarded.
                                  example: Frank Mir
                                newApproverName:
                                  type: string
                                  description: Display name of approver to whom the approval was forwarded.
                                  example: Al Volta
                                comment:
                                  type: string
                                  nullable: true
                                  description: Comment made while forwarding.
                                  example: Forwarding from Frank to Al
                                modified:
                                  type: string
                                  format: date-time
                                  description: Time at which approval was forwarded.
                                  example: '2019-08-23T18:52:57.398Z'
                                forwarderName:
                                  type: string
                                  nullable: true
                                  description: Display name of forwarder who forwarded the approval.
                                  example: William Wilson
                                reassignmentType:
                                  description: |-
                                    The approval reassignment type. 
                                    * MANUAL_REASSIGNMENT: An approval with this reassignment type has been specifically reassigned by the approval task's owner, from their queue to someone else's. 
                                    * AUTOMATIC_REASSIGNMENT: An approval with this reassignment type has been automatically reassigned from another approver's queue, according to that approver's reassignment configuration. The approver's reassignment configuration may be set up to automatically reassign approval tasks for a defined (or possibly open-ended) period of time.
                                    * AUTO_ESCALATION: An approval with this reassignment type has been automatically reassigned from another approver's queue, according to the request's escalation configuration. For more information about escalation configuration, refer to [Setting Global Reminders and Escalation Policies](https://documentation.sailpoint.com/saas/help/requests/config_emails.html).
                                    * SELF_REVIEW_DELEGATION: An approval with this reassignment type has been automatically reassigned by the system to prevent self-review. This helps prevent situations like a requester being tasked with approving their own request. For more information about preventing self-review, refer to [Self-review Prevention](https://documentation.sailpoint.com/saas/help/users/work_reassignment.html#self-review-prevention) and [Preventing Self-approval](https://documentation.sailpoint.com/saas/help/requests/config_ap_roles.html#preventing-self-approval).
                                  example: AUTOMATIC_REASSIGNMENT
                                  type: string
                                  enum:
                                    - MANUAL_REASSIGNMENT
                                    - AUTOMATIC_REASSIGNMENT
                                    - AUTO_ESCALATION
                                    - SELF_REVIEW_DELEGATION
                                  title: reassignmenttype
                            description: The history of approval forward action.
                      description: Manual work items created for provisioning the item.
                    accountActivityItemId:
                      type: string
                      description: Id of associated account activity item.
                      example: 2c9180926cbfbddd016cbfc7c3b10010
                    requestType:
                      type: string
                      enum:
                        - GRANT_ACCESS
                        - REVOKE_ACCESS
                        - MODIFY_ACCESS
                        - null
                      description: Access request type. Defaults to GRANT_ACCESS. REVOKE_ACCESS type can only have a single Identity ID in the requestedFor field. MODIFY_ACCESS type is used for updating access expiration dates or other access modifications.
                      example: GRANT_ACCESS
                      nullable: true
                      title: accessrequesttype
                    modified:
                      type: string
                      format: date-time
                      description: When the request was last modified.
                      example: '2019-08-23T18:52:59.162Z'
                      nullable: true
                    created:
                      type: string
                      format: date-time
                      description: When the request was created.
                      example: '2019-08-23T18:40:35.772Z'
                    requester:
                      type: object
                      title: Access Item Requester
                      description: Access item requester's identity.
                      properties:
                        type:
                          type: string
                          description: Access item requester's DTO type.
                          enum:
                            - IDENTITY
                          example: IDENTITY
                        id:
                          type: string
                          description: Access item requester's identity ID.
                          example: 2c7180a46faadee4016fb4e018c20648
                        name:
                          type: string
                          description: Access item owner's human-readable display name.
                          example: William Wilson
                    requestedFor:
                      type: object
                      description: Identity access was requested for. For machine identity requests, `type` is `MACHINE_IDENTITY` and `id` is the machine identity id.
                      properties:
                        type:
                          type: string
                          enum:
                            - IDENTITY
                            - MACHINE_IDENTITY
                          description: Type of the object to which this reference applies
                          example: IDENTITY
                        id:
                          type: string
                          description: ID of the object to which this reference applies
                          example: 2c9180835d191a86015d28455b4b232a
                        name:
                          type: string
                          description: Human-readable display name of the object to which this reference applies
                          example: William Wilson
                    identityType:
                      type: string
                      enum:
                        - HUMAN
                        - MACHINE
                      description: |
                        Type of identity the access was requested for. Requests without a stored identity type are returned as `HUMAN`.
                      example: HUMAN
                    requesterComment:
                      allOf:
                        - type: object
                          title: Comment Dto
                          properties:
                            comment:
                              type: string
                              nullable: true
                              description: Comment content.
                              example: This is a comment.
                            created:
                              type: string
                              format: date-time
                              description: Date and time comment was created.
                              example: '2017-07-11T18:45:37.098Z'
                            author:
                              type: object
                              readOnly: true
                              description: Author of the comment
                              properties:
                                type:
                                  type: string
                                  enum:
                                    - IDENTITY
                                  example: IDENTITY
                                  description: The type of object
                                id:
                                  type: string
                                  description: The unique ID of the object
                                  example: 2c9180847e25f377017e2ae8cae4650b
                                name:
                                  type: string
                                  description: The display name of the object
                                  example: john.doe
                        - nullable: true
                          description: The requester's comment.
                    sodViolationContext:
                      allOf:
                        - description: An object referencing a completed SOD violation check
                          type: object
                          title: Sod Violation Context Check Completed
                          nullable: true
                          properties:
                            state:
                              type: string
                              enum:
                                - SUCCESS
                                - ERROR
                                - null
                              description: The status of SOD violation check
                              example: SUCCESS
                              nullable: true
                            uuid:
                              description: The id of the Violation check event
                              type: string
                              example: f73d16e9-a038-46c5-b217-1246e15fdbdd
                              nullable: true
                            violationCheckResult:
                              description: The inner object representing the completed SOD Violation check
                              type: object
                              title: Sod Violation Check Result
                              properties:
                                message:
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
                                  description: If the request failed, this includes any error message that was generated.
                                  example:
                                    - locale: en-US
                                      localeOrigin: DEFAULT
                                      text: An error has occurred during the SOD violation check
                                clientMetadata:
                                  type: object
                                  nullable: true
                                  additionalProperties:
                                    type: string
                                  description: Arbitrary key-value pairs. They will never be processed by the IdentityNow system but will be returned on completion of the violation check.
                                  example:
                                    requestedAppName: test-app
                                    requestedAppId: 2c91808f7892918f0178b78da4a305a1
                                violationContexts:
                                  type: array
                                  nullable: true
                                  items:
                                    description: The contextual information of the violated criteria
                                    type: object
                                    title: Sod Violation Context
                                    properties:
                                      policy:
                                        type: object
                                        title: Sod Policy Dto
                                        description: SOD policy.
                                        properties:
                                          type:
                                            type: string
                                            description: SOD policy DTO type.
                                            enum:
                                              - SOD_POLICY
                                            example: SOD_POLICY
                                          id:
                                            type: string
                                            description: SOD policy ID.
                                            example: 0f11f2a4-7c94-4bf3-a2bd-742580fe3bde
                                          name:
                                            type: string
                                            description: SOD policy display name.
                                            example: Business SOD Policy
                                      conflictingAccessCriteria:
                                        type: object
                                        description: The object which contains the left and right hand side of the entitlements that got violated according to the policy.
                                        properties:
                                          leftCriteria:
                                            type: object
                                            properties:
                                              criteriaList:
                                                type: array
                                                items:
                                                  description: Details of the Entitlement criteria
                                                  type: object
                                                  title: Sod Exempt Criteria
                                                  properties:
                                                    existing:
                                                      type: boolean
                                                      default: false
                                                      example: true
                                                      description: If the entitlement already belonged to the user or not.
                                                    type:
                                                      example: ENTITLEMENT
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
                                                      description: Entitlement ID
                                                      example: 2c918085771e9d3301773b3cb66f6398
                                                    name:
                                                      type: string
                                                      description: Entitlement name
                                                      example: My HR Entitlement
                                          rightCriteria:
                                            type: object
                                            properties:
                                              criteriaList:
                                                type: array
                                                items:
                                                  description: Details of the Entitlement criteria
                                                  type: object
                                                  title: Sod Exempt Criteria
                                                  properties:
                                                    existing:
                                                      type: boolean
                                                      default: false
                                                      example: true
                                                      description: If the entitlement already belonged to the user or not.
                                                    type:
                                                      example: ENTITLEMENT
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
                                                      description: Entitlement ID
                                                      example: 2c918085771e9d3301773b3cb66f6398
                                                    name:
                                                      type: string
                                                      description: Entitlement name
                                                      example: My HR Entitlement
                                violatedPolicies:
                                  type: array
                                  nullable: true
                                  description: A list of the SOD policies that were violated.
                                  items:
                                    type: object
                                    title: Sod Policy Dto
                                    description: SOD policy.
                                    properties:
                                      type:
                                        type: string
                                        description: SOD policy DTO type.
                                        enum:
                                          - SOD_POLICY
                                        example: SOD_POLICY
                                      id:
                                        type: string
                                        description: SOD policy ID.
                                        example: 0f11f2a4-7c94-4bf3-a2bd-742580fe3bde
                                      name:
                                        type: string
                                        description: SOD policy display name.
                                        example: Business SOD Policy
                        - nullable: true
                          description: The details of the SOD violations for the associated approval.
                    provisioningDetails:
                      allOf:
                        - type: object
                          title: Provisioning Details
                          properties:
                            orderedSubPhaseReferences:
                              type: string
                              description: Ordered CSV of sub phase references to objects that contain more information about provisioning. For example, this can contain "manualWorkItemDetails" which indicate that there is further information in that object for this phase.
                              example: manualWorkItemDetails
                          description: Provides additional details about provisioning for this request.
                        - nullable: true
                    preApprovalTriggerDetails:
                      allOf:
                        - type: object
                          title: Pre Approval Trigger Details
                          properties:
                            comment:
                              type: string
                              description: Comment left for the pre-approval decision
                              example: Access is Approved
                            reviewer:
                              type: string
                              description: The reviewer of the pre-approval decision
                              example: John Doe
                            decision:
                              type: string
                              enum:
                                - APPROVED
                                - REJECTED
                              description: The decision of the pre-approval trigger
                              example: APPROVED
                          description: Provides additional details about the pre-approval trigger for this request.
                        - nullable: true
                    accessRequestPhases:
                      type: array
                      items:
                        type: object
                        title: Access Request Phases
                        properties:
                          started:
                            type: string
                            description: The time that this phase started.
                            format: date-time
                            example: '2020-07-11T00:00:00Z'
                          finished:
                            type: string
                            description: The time that this phase finished.
                            format: date-time
                            example: '2020-07-12T00:00:00Z'
                            nullable: true
                          name:
                            type: string
                            description: The name of this phase.
                            example: APPROVAL_PHASE
                          state:
                            type: string
                            enum:
                              - PENDING
                              - EXECUTING
                              - COMPLETED
                              - CANCELLED
                              - NOT_EXECUTED
                            description: The state of this phase.
                            example: COMPLETED
                          result:
                            type: string
                            enum:
                              - SUCCESSFUL
                              - FAILED
                              - null
                            description: The state of this phase.
                            example: SUCCESSFUL
                            nullable: true
                          phaseReference:
                            type: string
                            description: A reference to another object on the RequestedItemStatus that contains more details about the phase. Note that for the Provisioning phase, this will be empty if there are no manual work items.
                            example: approvalDetails
                            nullable: true
                        description: Provides additional details about this access request phase.
                      description: A list of Phases that the Access Request has gone through in order, to help determine the status of the request.
                      nullable: true
                    description:
                      type: string
                      description: Description associated to the requested object.
                      example: This is the Engineering role that engineers are granted.
                      nullable: true
                    startDate:
                      type: string
                      format: date-time
                      nullable: true
                      description: When the role access is scheduled for provisioning.
                      example: '2019-10-21T00:00:00.000Z'
                    removeDate:
                      type: string
                      format: date-time
                      nullable: true
                      description: When the role access is scheduled for removal.
                      example: '2019-10-23T00:00:00.000Z'
                    cancelable:
                      type: boolean
                      default: false
                      description: True if the request can be canceled.
                      example: true
                    reauthorizationRequired:
                      type: boolean
                      default: false
                      description: True if re-auth is required.
                      example: true
                    accessRequestId:
                      type: string
                      description: This is the account activity id.
                      example: 2b838de9-db9b-abcf-e646-d4f274ad4238
                    clientMetadata:
                      nullable: true
                      type: object
                      additionalProperties:
                        type: string
                      description: Arbitrary key-value pairs, if any were included in the corresponding access request
                      example:
                        key1: value1
                        key2: value2
                    form:
                      allOf:
                        - type: object
                          title: Access Request Item Form
                          nullable: true
                          description: Completed form instance associated with an access request item. Omitted when the item has no associated form or no form answers were captured. All listed properties may be present when form answers exist. Optional structural keys (`formElements`, `formConditions`, `formInstanceInputs`) may also be present; their shape follows the form instance payload.
                          additionalProperties: true
                          properties:
                            formDefinitionId:
                              type: string
                              nullable: true
                              description: ID of the form definition that was completed for this item.
                              example: b2c1808f-77f5-4a3a-9f3a-1d2e3f4a5b6c
                            formInstanceId:
                              type: string
                              nullable: true
                              description: ID of the completed form instance.
                              example: 9f3a1d2e-3f4a-5b6c-7d8e-9f0a1b2c3d4e
                            formData:
                              type: object
                              nullable: true
                              additionalProperties: true
                              description: Key-value pairs (form field technical name to value) from the completed form instance.
                              example:
                                department: Engineering
                                notifyRequester: true
                                platforms:
                                  - AWS
                                  - GCP
                            formElements:
                              type: array
                              nullable: true
                              description: Optional form element definitions when present. Shape follows the form instance payload.
                              items:
                                type: object
                                additionalProperties: true
                              example:
                                - id: 00000000-0000-0000-0000-000000000000
                                  elementType: TEXT
                            formConditions:
                              type: array
                              nullable: true
                              description: Optional conditional display rules when present. Shape follows the form instance payload; do not depend on a fixed condition schema in this API.
                              items:
                                type: object
                                additionalProperties: true
                              example:
                                - ruleOperator: AND
                                  rules: []
                                  effects: []
                            formInstanceInputs:
                              type: object
                              nullable: true
                              additionalProperties: true
                              description: Optional inputs passed into the form instance when present. Copied from the form instance payload as-is.
                              example:
                                department: Engineering
                          example:
                            formDefinitionId: b2c1808f-77f5-4a3a-9f3a-1d2e3f4a5b6c
                            formInstanceId: 9f3a1d2e-3f4a-5b6c-7d8e-9f0a1b2c3d4e
                            formData:
                              department: Engineering
                              notifyRequester: true
                              platforms:
                                - AWS
                                - GCP
                        - nullable: true
                          description: Completed form data for this item when the requested object has an associated form.
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
