## OpenAPI

```yaml GET /access-request-approvals/v1/completed
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
  /access-request-approvals/v1/completed:
    get:
      description: |
        This endpoint returns list of completed approvals. See *owner-id* query parameter below for authorization info. For access requests for machines, each approval will include 'identityType' as 'MACHINE' and 'requestedFor' with 'type: MACHINE_IDENTITY' and the machine id. Approvals without a stored identity type are returned as 'HUMAN' / 'IDENTITY'.
        When a requested object has an associated form, each approval may include a `form` object with the form definition ID, instance ID, and answers (`formData`).
      operationId: listCompletedApprovalsV1
      security:
        - userAuth:
            - idn:access-request-approvals:read
      parameters:
        - in: query
          name: owner-id
          required: false
          schema:
            type: string
          description: |-
            If present, the value returns only completed approvals for the specified identity.
               * ORG_ADMIN users can call this with any identity ID value.
               * ORG_ADMIN users can also fetch all the approvals in the org, when
            owner-id is not used.
               * Non-ORG_ADMIN users can only specify *me* or pass their own
            identity ID value.
          example: 2c91808568c529c60168cca6f90c1313
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
          description: |-
            Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)

            Filtering is supported for the following fields and operators:

            **id**: *eq, in, ge, gt, le, lt, ne, isnull, sw*

            **requestedFor.id**: *eq, in, ge, gt, le, lt, ne, isnull, sw*

            **modified**: *gt, lt, ge, le, eq, in, ne, sw*
          example: id eq "2c91808568c529c60168cca6f90c1313"
        - in: query
          name: sorters
          required: false
          schema:
            type: string
            format: comma-separated
          description: |-
            Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)

            Sorting is supported for the following fields: **created, modified**
          example: modified
      responses:
        '200':
          description: List of Completed Approvals.
          content:
            application/json:
              schema:
                type: array
                items:
                  type: object
                  title: Completed Approval
                  properties:
                    id:
                      type: string
                      description: The approval id.
                      example: id12345
                    name:
                      type: string
                      description: The name of the approval.
                      example: aName
                    created:
                      type: string
                      format: date-time
                      description: When the approval was created.
                      example: '2017-07-11T18:45:37.098Z'
                    modified:
                      type: string
                      format: date-time
                      description: When the approval was modified last time.
                      example: '2018-07-25T20:22:28.104Z'
                    requestCreated:
                      type: string
                      format: date-time
                      description: When the access-request was created.
                      example: '2017-07-11T18:45:35.098Z'
                    requestType:
                      description: If the access-request was for granting or revoking access.
                      type: string
                      enum:
                        - GRANT_ACCESS
                        - REVOKE_ACCESS
                        - MODIFY_ACCESS
                        - null
                      example: GRANT_ACCESS
                      nullable: true
                      title: accessrequesttype
                    identityType:
                      type: string
                      enum:
                        - HUMAN
                        - MACHINE
                      description: |
                        Type of identity the access was requested for. Requests without a stored identity type are returned as `HUMAN`.
                      example: HUMAN
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
                    reviewedBy:
                      type: object
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
                    requestedObject:
                      description: The requested access item.
                      type: object
                      title: Requestable Object Reference
                      properties:
                        id:
                          type: string
                          description: Id of the object.
                          example: 2c9180835d2e5168015d32f890ca1581
                        name:
                          type: string
                          description: Name of the object.
                          example: Applied Research Access
                        description:
                          type: string
                          description: Description of the object.
                          example: Access to research information, lab results, and schematics
                        type:
                          type: string
                          enum:
                            - ACCESS_PROFILE
                            - ROLE
                            - ENTITLEMENT
                          description: Type of the object.
                          example: ROLE
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
                        - description: The requester's comment.
                    reviewerComment:
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
                        - description: The approval's reviewer's comment.
                          nullable: true
                    previousReviewersComments:
                      type: array
                      items:
                        type: object
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
                      description: The history of the previous reviewers comments.
                    forwardHistory:
                      type: array
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
                    commentRequiredWhenRejected:
                      type: boolean
                      default: false
                      description: When true the rejector has to provide comments when rejecting
                      example: true
                    state:
                      description: The final state of the approval
                      type: string
                      enum:
                        - APPROVED
                        - REJECTED
                      example: APPROVED
                      title: completedapprovalstate
                    removeDate:
                      type: string
                      description: The date the role or access profile or entitlement is no longer assigned to the specified identity.
                      format: date-time
                      example: '2020-07-11T00:00:00Z'
                      nullable: true
                    removeDateUpdateRequested:
                      type: boolean
                      default: false
                      description: If true, then the request was to change the remove date or sunset date.
                      example: true
                    currentRemoveDate:
                      type: string
                      description: The remove date or sunset date that was assigned at the time of the request.
                      format: date-time
                      example: '2020-07-11T00:00:00Z'
                      nullable: true
                    startDate:
                      type: string
                      description: The date the role or access profile or entitlement is/will assigned to the specified identity.
                      format: date-time
                      example: '2020-07-11T00:00:00Z'
                    startUpdateRequested:
                      type: boolean
                      default: false
                      description: If true, then the request is to change the start date or sunrise date.
                      example: true
                    currentStartDate:
                      type: string
                      description: The start date or sunrise date that was assigned at the time of the request.
                      format: date-time
                      example: '2020-07-11T00:00:00Z'
                    sodViolationContext:
                      description: The details of the SOD violations for the associated approval.
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
                    preApprovalTriggerResult:
                      nullable: true
                      type: object
                      description: If the access request submitted event trigger is configured and this access request was intercepted by it, then this is the result of the trigger's decision to either approve or deny the request.
                      properties:
                        comment:
                          type: string
                          description: The comment from the trigger
                          example: This request was autoapproved by our automated ETS subscriber
                        decision:
                          description: The approval decision of the trigger
                          type: string
                          enum:
                            - APPROVED
                            - REJECTED
                          example: APPROVED
                          title: completedapprovalstate
                        reviewer:
                          type: string
                          description: The name of the approver
                          example: Automated AR Approval
                        date:
                          type: string
                          format: date-time
                          example: '2022-06-07T19:18:40.748Z'
                          description: The date and time the trigger decided on the request
                    clientMetadata:
                      type: object
                      additionalProperties:
                        type: string
                      description: Arbitrary key-value pairs provided during the request.
                      example:
                        requestedAppName: test-app
                        requestedAppId: 2c91808f7892918f0178b78da4a305a1
                    requestedAccounts:
                      nullable: true
                      type: array
                      items:
                        type: object
                        title: Requested Account Ref
                        properties:
                          name:
                            type: string
                            description: Display name of the account for the user
                            example: Glen.067da3248e914
                          type:
                            description: The type of item
                            example: ACCOUNT
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
                            title: dtotype
                          accountUuid:
                            type: string
                            nullable: true
                            description: The uuid for the account
                            example: '{fab7119e-004f-4822-9c33-b8d570d6c6a6}'
                          accountId:
                            type: string
                            nullable: true
                            description: The native identity for the account
                            example: CN=Glen 067da3248e914,OU=YOUROU,OU=org-data-service,DC=YOURDC,DC=local
                          sourceName:
                            type: string
                            nullable: false
                            description: Display name of the source for the account
                            example: Multi Account AD source name
                      description: The accounts selected by the user for the access to be provisioned on, in case they have multiple accounts on one or more sources.
                    privilegeLevel:
                      nullable: true
                      type: string
                      description: The privilege level of the requested access item, if applicable.
                      example: High
                    maxPermittedAccessDuration:
                      nullable: true
                      type: object
                      description: The maximum duration for which the access is permitted.
                      properties:
                        value:
                          type: integer
                          format: int32
                          description: The numeric value of the duration.
                          example: 5
                        timeUnit:
                          type: string
                          description: The time unit for the duration.
                          enum:
                            - HOURS
                            - DAYS
                            - WEEKS
                            - MONTHS
                          example: DAYS
                    jitDetails:
                      type: array
                      nullable: true
                      description: JIT (Just-In-Time) details for the requested access item, if applicable.
                      items:
                        type: object
                        title: Entitlement State Snapshot Jit Detail
                        description: A single JIT entitlement snapshot entry from the provisioning plan.
                        properties:
                          applicationId:
                            type: string
                            description: Application id for the entitlement attribute (same as EntitlementStateSnapshot.applicationId).
                            example: 2c9180835d2e5168015d32f890ca1581
                          attributeName:
                            type: string
                            description: Account attribute name for the entitlement (EntitlementStateSnapshot.attributeName).
                            example: groups
                          attributeValues:
                            type: array
                            items:
                              type: string
                            description: Entitlement values for that attribute (EntitlementStateSnapshot.attributeValues).
                            example:
                              - CN=Engineering,OU=Groups,DC=example,DC=com
                        additionalProperties: true
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
                          description: Completed form data for this approval item when the requested object has an associated form.
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
