## OpenAPI

```yaml POST /generic-approvals/v1/{id}/comments
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
  /generic-approvals/v1/{id}/comments:
    post:
      description: Adds comments to a specified approval request. This endpoint does not support access request IDs.
      operationId: updateApprovalsCommentsV1
      security:
        - userAuth:
            - idn:access-request-approvals:manage
      parameters:
        - in: path
          name: id
          required: true
          schema:
            type: string
          description: Approval ID that correlates to an existing approval request that a user wants to add a comment to.
          example: 38453251-6be2-5f8f-df93-5ce19e295837
          x-sailpoint-resource-operation-id: getApprovalsV1
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              properties:
                comment:
                  type: string
                  description: Comment associated with the request.
                  example: Approval comment.
              title: approvalcommentsrequest
      responses:
        '200':
          description: Approval object
          content:
            application/json:
              schema:
                type: object
                title: Approval
                properties:
                  id:
                    type: string
                    example: 38453251-6be2-5f8f-df93-5ce19e295837
                    description: The Approval ID
                  tenantId:
                    type: string
                    example: 38453251-6be2-5f8f-df93-5ce19e295837
                    description: The Tenant ID of the Approval
                  type:
                    type: string
                    example: ENTITLEMENT_DESCRIPTIONS
                    description: The type of the approval, such as ENTITLEMENT_DESCRIPTIONS, CUSTOM_ACCESS_REQUEST_APPROVAL, GENERIC_APPROVAL
                  approvers:
                    type: array
                    items:
                      type: object
                      title: Approval Identity
                      properties:
                        email:
                          type: string
                          example: mail@mail.com
                          description: Email address.
                        identityID:
                          type: string
                          example: 17e633e7d57e481569df76323169deb6a
                          description: Identity ID of the type of identity defined in the 'type' field.
                        members:
                          type: array
                          items:
                            type: object
                            properties:
                              email:
                                type: string
                                example: mail@mail.com
                                description: Email of the member.
                              id:
                                type: string
                                example: 17e633e7d57e481569df76323169deb6a
                                description: ID of the member.
                              name:
                                type: string
                                example: Bob Neil
                                description: Name of the member.
                              type:
                                type: string
                                example: IDENTITY
                                description: Type of the member.
                          description: List of members of a governance group. Will be omitted if the identity is not a governance group.
                        name:
                          type: string
                          example: Jim Bob
                          description: Name of the identity.
                        ownerOf:
                          type: array
                          items:
                            type: object
                            properties:
                              id:
                                type: string
                                example: string
                                description: ID of the object that is owned.
                              name:
                                type: string
                                example: Access Request App
                                description: Name of the object that is owned.
                              type:
                                type: string
                                example: APPLICATION
                                description: Type of the object that is owned.
                          description: List of owned items. For example, will show the items in which a ROLE_OWNER owns. Omitted if not an owner of anything.
                        serialOrder:
                          type: integer
                          example: 0
                          format: int64
                          description: The serial step of the identity in the approval. For example serialOrder 1 is the first identity to action in an approval request chain. Parallel approvals are set to 0.
                        type:
                          type: string
                          enum:
                            - IDENTITY
                            - GOVERNANCE_GROUP
                            - MANAGER_OF
                            - ACCOUNT_OWNER
                            - MACHINE_ACCOUNT_OWNER
                            - MACHINE_IDENTITY_OWNER
                            - MANAGER_OF_REQUESTED_TARGET_OWNER
                            - MANAGER_OF_MACHINE_IDENTITY_OWNER
                            - MANAGER_OF_ACCOUNT_OWNER
                            - MANAGER_OF_MACHINE_ACCOUNT_OWNER
                            - MANAGER_OF_REQUESTER
                            - MANAGER_OF_REQUESTER_OWNER
                            - MANAGER_OF_OWNER
                            - ACCESS_PROFILE_OWNER
                            - APPLICATION_OWNER
                            - ENTITLEMENT_OWNER
                            - ROLE_OWNER
                            - SOURCE_OWNER
                            - REQUESTED_TARGET_OWNER
                            - ACCESS_PROFILE_PRIMARY_OWNER
                            - APPLICATION_PRIMARY_OWNER
                            - ENTITLEMENT_PRIMARY_OWNER
                            - ROLE_PRIMARY_OWNER
                            - SOURCE_PRIMARY_OWNER
                            - ACCOUNT_PRIMARY_OWNER
                            - MACHINE_ACCOUNT_PRIMARY_OWNER
                            - MACHINE_IDENTITY_PRIMARY_OWNER
                            - REQUESTED_TARGET_PRIMARY_OWNER
                            - ACCESS_PROFILE_SECONDARY_OWNER_GROUP
                            - APPLICATION_SECONDARY_OWNER_GROUP
                            - ENTITLEMENT_SECONDARY_OWNER_GROUP
                            - ROLE_SECONDARY_OWNER_GROUP
                            - SOURCE_SECONDARY_OWNER_GROUP
                            - ACCOUNT_SECONDARY_OWNER_GROUP
                            - MACHINE_ACCOUNT_SECONDARY_OWNER_GROUP
                            - MACHINE_IDENTITY_SECONDARY_OWNER_GROUP
                            - REQUESTED_TARGET_SECONDARY_OWNER_GROUP
                            - ACCESS_PROFILE_ALL_OWNER_GROUP
                            - APPLICATION_ALL_OWNER_GROUP
                            - ENTITLEMENT_ALL_OWNER_GROUP
                            - ROLE_ALL_OWNER_GROUP
                            - SOURCE_ALL_OWNER_GROUP
                            - ACCOUNT_ALL_OWNER_GROUP
                            - MACHINE_ACCOUNT_ALL_OWNER_GROUP
                            - MACHINE_IDENTITY_ALL_OWNER_GROUP
                            - REQUESTED_TARGET_ALL_OWNER_GROUP
                          example: IDENTITY
                          description: Type of identityID.
                      description: Approval Identity Object
                    description: Object representation of an approver of an approval
                  createdDate:
                    type: string
                    example: '2023-04-12T23:20:50.52Z'
                    description: Date the approval was created
                  dueDate:
                    type: string
                    example: '2024-05-12T23:10:50.11Z'
                    description: Date the approval is due
                  escalationStep:
                    type: string
                    example: 0
                    description: Step in the escalation process. If set to 0, the approval is not escalated. If set to 1, the approval is escalated to the first approver in the escalation chain.
                  serialStep:
                    type: integer
                    example: 0
                    format: int64
                    description: The serial step of the approval in the approval chain. For example, serialStep 1 is the first approval to action in an approval request chain. Parallel approvals are set to 0.
                  isEscalated:
                    type: boolean
                    example: true
                    description: Whether or not the approval has been escalated. Will reset to false when the approval is actioned on.
                    default: false
                  name:
                    type: array
                    items:
                      type: object
                      title: Approval Name
                      properties:
                        value:
                          type: string
                          example: Audit DB Access
                          description: Name of the approval
                        locale:
                          type: string
                          example: en_US
                          description: What locale the name of the approval is using
                      description: Approval Name Object
                    description: The name of the approval for a given locale
                  batchRequest:
                    type: object
                    description: The name of the approval for a given locale
                    example:
                      batchId: 38453251-6be2-5f8f-df93-5ce19e295837
                      batchSize: 100
                    title: Approval Batch
                    properties:
                      batchId:
                        type: string
                        example: 38453251-6be2-5f8f-df93-5ce19e295837
                        description: ID of the batch
                      batchSize:
                        type: integer
                        format: int64
                        example: 100
                        description: How many approvals are going to be in this batch. Defaults to 1 if not provided.
                  approvalConfig:
                    type: object
                    description: The configuration of the approval, such as the approval criteria and whether it is a parallel or serial approval
                    properties:
                      reminderConfig:
                        type: object
                        properties:
                          enabled:
                            type: boolean
                            example: false
                            description: Indicates if reminders are enabled.
                            default: false
                          daysUntilFirstReminder:
                            type: integer
                            example: 0
                            format: int64
                            description: Number of days until the first reminder.
                          reminderCronSchedule:
                            type: string
                            example: '@every 24h'
                            description: Cron schedule for reminders.
                            externalDocs:
                              description: Predefined schedules and cron expression format
                              url: https://pkg.go.dev/github.com/robfig/cron#hdr-Predefined_schedules
                          maxReminders:
                            type: integer
                            example: 5
                            format: int64
                            description: Maximum number of reminders. Max is 20.
                        description: Configuration for reminders.
                      escalationConfig:
                        type: object
                        properties:
                          enabled:
                            type: boolean
                            example: true
                            description: Indicates if escalations are enabled.
                            default: false
                          daysUntilFirstEscalation:
                            type: integer
                            example: 2
                            format: int64
                            description: Number of days until the first escalation.
                          escalationCronSchedule:
                            type: string
                            example: '@every 72h'
                            description: Cron schedule for escalations.
                            externalDocs:
                              description: Predefined schedules and cron expression format
                              url: https://pkg.go.dev/github.com/robfig/cron#hdr-Predefined_schedules
                          escalationChain:
                            type: array
                            items:
                              type: object
                              properties:
                                identityId:
                                  type: string
                                  example: fdfda352157d4cc79bb749953131b457
                                  description: Optional Identity ID of the type of identity defined in the 'identityType' field.
                                identityType:
                                  type: string
                                  enum:
                                    - IDENTITY
                                    - GOVERNANCE_GROUP
                                    - MANAGER_OF
                                    - ACCOUNT_OWNER
                                    - MACHINE_ACCOUNT_OWNER
                                    - MACHINE_IDENTITY_OWNER
                                    - MANAGER_OF_REQUESTED_TARGET_OWNER
                                    - MANAGER_OF_MACHINE_IDENTITY_OWNER
                                    - MANAGER_OF_ACCOUNT_OWNER
                                    - MANAGER_OF_MACHINE_ACCOUNT_OWNER
                                    - MANAGER_OF_REQUESTER
                                    - MANAGER_OF_REQUESTER_OWNER
                                    - MANAGER_OF_OWNER
                                    - ACCESS_PROFILE_OWNER
                                    - APPLICATION_OWNER
                                    - ENTITLEMENT_OWNER
                                    - ROLE_OWNER
                                    - SOURCE_OWNER
                                    - REQUESTED_TARGET_OWNER
                                    - ACCESS_PROFILE_PRIMARY_OWNER
                                    - APPLICATION_PRIMARY_OWNER
                                    - ENTITLEMENT_PRIMARY_OWNER
                                    - ROLE_PRIMARY_OWNER
                                    - SOURCE_PRIMARY_OWNER
                                    - ACCOUNT_PRIMARY_OWNER
                                    - MACHINE_ACCOUNT_PRIMARY_OWNER
                                    - MACHINE_IDENTITY_PRIMARY_OWNER
                                    - REQUESTED_TARGET_PRIMARY_OWNER
                                    - ACCESS_PROFILE_SECONDARY_OWNER_GROUP
                                    - APPLICATION_SECONDARY_OWNER_GROUP
                                    - ENTITLEMENT_SECONDARY_OWNER_GROUP
                                    - ROLE_SECONDARY_OWNER_GROUP
                                    - SOURCE_SECONDARY_OWNER_GROUP
                                    - ACCOUNT_SECONDARY_OWNER_GROUP
                                    - MACHINE_ACCOUNT_SECONDARY_OWNER_GROUP
                                    - MACHINE_IDENTITY_SECONDARY_OWNER_GROUP
                                    - REQUESTED_TARGET_SECONDARY_OWNER_GROUP
                                    - ACCESS_PROFILE_ALL_OWNER_GROUP
                                    - APPLICATION_ALL_OWNER_GROUP
                                    - ENTITLEMENT_ALL_OWNER_GROUP
                                    - ROLE_ALL_OWNER_GROUP
                                    - SOURCE_ALL_OWNER_GROUP
                                    - ACCOUNT_ALL_OWNER_GROUP
                                    - MACHINE_ACCOUNT_ALL_OWNER_GROUP
                                    - MACHINE_IDENTITY_ALL_OWNER_GROUP
                                    - REQUESTED_TARGET_ALL_OWNER_GROUP
                                  example: IDENTITY
                                  description: Type of identityId in the escalation chain.
                            description: Escalation chain configuration.
                        description: Configuration for escalations.
                      timeoutConfig:
                        type: object
                        properties:
                          enabled:
                            type: boolean
                            example: true
                            description: Indicates if timeout is enabled.
                            default: false
                          daysUntilTimeout:
                            type: integer
                            example: 2
                            format: int64
                            description: Number of days until approval request times out. Max value is 90.
                          timeoutResult:
                            type: string
                            enum:
                              - EXPIRED
                              - APPROVED
                            example: EXPIRED
                            description: Result of timeout.
                        description: TimeoutConfig contains configurations around when the approval request should expire.
                      cronTimezone:
                        type: object
                        properties:
                          location:
                            type: string
                            example: America/New_York
                            description: Timezone location for cron schedules.
                          offset:
                            type: string
                            example: ''
                            description: Timezone offset for cron schedules.
                        description: Timezone configuration for cron schedules.
                      serialChain:
                        type: array
                        items:
                          type: object
                          properties:
                            identityId:
                              type: string
                              example: 2c9180858090ea8801809a0465e829da
                              description: Optional Identity ID of the type of identity defined in the 'identityType' field.
                            identityType:
                              type: string
                              enum:
                                - IDENTITY
                                - GOVERNANCE_GROUP
                                - MANAGER_OF
                                - ACCOUNT_OWNER
                                - MACHINE_ACCOUNT_OWNER
                                - MACHINE_IDENTITY_OWNER
                                - MANAGER_OF_REQUESTED_TARGET_OWNER
                                - MANAGER_OF_MACHINE_IDENTITY_OWNER
                                - MANAGER_OF_ACCOUNT_OWNER
                                - MANAGER_OF_MACHINE_ACCOUNT_OWNER
                                - MANAGER_OF_REQUESTER
                                - MANAGER_OF_REQUESTER_OWNER
                                - MANAGER_OF_OWNER
                                - ACCESS_PROFILE_OWNER
                                - APPLICATION_OWNER
                                - ENTITLEMENT_OWNER
                                - ROLE_OWNER
                                - SOURCE_OWNER
                                - REQUESTED_TARGET_OWNER
                                - ACCESS_PROFILE_PRIMARY_OWNER
                                - APPLICATION_PRIMARY_OWNER
                                - ENTITLEMENT_PRIMARY_OWNER
                                - ROLE_PRIMARY_OWNER
                                - SOURCE_PRIMARY_OWNER
                                - ACCOUNT_PRIMARY_OWNER
                                - MACHINE_ACCOUNT_PRIMARY_OWNER
                                - MACHINE_IDENTITY_PRIMARY_OWNER
                                - REQUESTED_TARGET_PRIMARY_OWNER
                                - ACCESS_PROFILE_SECONDARY_OWNER_GROUP
                                - APPLICATION_SECONDARY_OWNER_GROUP
                                - ENTITLEMENT_SECONDARY_OWNER_GROUP
                                - ROLE_SECONDARY_OWNER_GROUP
                                - SOURCE_SECONDARY_OWNER_GROUP
                                - ACCOUNT_SECONDARY_OWNER_GROUP
                                - MACHINE_ACCOUNT_SECONDARY_OWNER_GROUP
                                - MACHINE_IDENTITY_SECONDARY_OWNER_GROUP
                                - REQUESTED_TARGET_SECONDARY_OWNER_GROUP
                                - ACCESS_PROFILE_ALL_OWNER_GROUP
                                - APPLICATION_ALL_OWNER_GROUP
                                - ENTITLEMENT_ALL_OWNER_GROUP
                                - ROLE_ALL_OWNER_GROUP
                                - SOURCE_ALL_OWNER_GROUP
                                - ACCOUNT_ALL_OWNER_GROUP
                                - MACHINE_ACCOUNT_ALL_OWNER_GROUP
                                - MACHINE_IDENTITY_ALL_OWNER_GROUP
                                - REQUESTED_TARGET_ALL_OWNER_GROUP
                              example: IDENTITY
                              description: Type of identityId in the serial chain.
                        description: If the approval request has an approvalCriteria of SERIAL this chain will be used to determine the assignment order.
                      requiresComment:
                        type: string
                        enum:
                          - APPROVAL
                          - REJECTION
                          - ALL
                          - 'OFF'
                        example: ALL
                        description: Determines whether a comment is required when approving or rejecting the approval request.
                      fallbackApprover:
                        type: object
                        properties:
                          identityID:
                            type: string
                            example: fdfda352157d4cc79bb749953131b457
                            description: Optional Identity ID of the type of identity defined in the 'type' field.
                          type:
                            type: string
                            enum:
                              - IDENTITY
                              - GOVERNANCE_GROUP
                              - MANAGER_OF
                              - ACCOUNT_OWNER
                              - MACHINE_ACCOUNT_OWNER
                              - MACHINE_IDENTITY_OWNER
                              - MANAGER_OF_REQUESTED_TARGET_OWNER
                              - MANAGER_OF_MACHINE_IDENTITY_OWNER
                              - MANAGER_OF_ACCOUNT_OWNER
                              - MANAGER_OF_MACHINE_ACCOUNT_OWNER
                              - MANAGER_OF_REQUESTER
                              - MANAGER_OF_REQUESTER_OWNER
                              - MANAGER_OF_OWNER
                              - ACCESS_PROFILE_OWNER
                              - APPLICATION_OWNER
                              - ENTITLEMENT_OWNER
                              - ROLE_OWNER
                              - SOURCE_OWNER
                              - REQUESTED_TARGET_OWNER
                              - ACCESS_PROFILE_PRIMARY_OWNER
                              - APPLICATION_PRIMARY_OWNER
                              - ENTITLEMENT_PRIMARY_OWNER
                              - ROLE_PRIMARY_OWNER
                              - SOURCE_PRIMARY_OWNER
                              - ACCOUNT_PRIMARY_OWNER
                              - MACHINE_ACCOUNT_PRIMARY_OWNER
                              - MACHINE_IDENTITY_PRIMARY_OWNER
                              - REQUESTED_TARGET_PRIMARY_OWNER
                              - ACCESS_PROFILE_SECONDARY_OWNER_GROUP
                              - APPLICATION_SECONDARY_OWNER_GROUP
                              - ENTITLEMENT_SECONDARY_OWNER_GROUP
                              - ROLE_SECONDARY_OWNER_GROUP
                              - SOURCE_SECONDARY_OWNER_GROUP
                              - ACCOUNT_SECONDARY_OWNER_GROUP
                              - MACHINE_ACCOUNT_SECONDARY_OWNER_GROUP
                              - MACHINE_IDENTITY_SECONDARY_OWNER_GROUP
                              - REQUESTED_TARGET_SECONDARY_OWNER_GROUP
                              - ACCESS_PROFILE_ALL_OWNER_GROUP
                              - APPLICATION_ALL_OWNER_GROUP
                              - ENTITLEMENT_ALL_OWNER_GROUP
                              - ROLE_ALL_OWNER_GROUP
                              - SOURCE_ALL_OWNER_GROUP
                              - ACCOUNT_ALL_OWNER_GROUP
                              - MACHINE_ACCOUNT_ALL_OWNER_GROUP
                              - MACHINE_IDENTITY_ALL_OWNER_GROUP
                              - REQUESTED_TARGET_ALL_OWNER_GROUP
                            example: MANAGER_OF
                            description: Type of identityID for the fallback approver.
                        description: Configuration for fallback approver. Used if the user cannot be found for whatever reason and escalation config does not exist.
                      machineIdentityManagerAssignment:
                        type: string
                        enum:
                          - MANAGER_OF_REQUESTER
                          - MACHINE_IDENTITY_OWNER
                          - MANAGER_OF_MACHINE_IDENTITY_OWNER
                          - REQUESTED_TARGET_OWNER
                          - MANAGER_OF_REQUESTED_TARGET_OWNER
                          - ACCOUNT_OWNER
                          - MANAGER_OF_ACCOUNT_OWNER
                        example: MACHINE_IDENTITY_OWNER
                        default: MANAGER_OF_REQUESTER
                        description: Specifies how to treat the identity type "MANAGER_OF" when the requestee is a machine identity.
                      circumventApprovalProcess:
                        type: boolean
                        example: false
                        default: false
                        description: When true, all approvals will be created with the status "PASSED" effectively skipping the approval process. Note this field should only be used for Machine Account or Machine related approvals.
                      autoApprove:
                        type: string
                        enum:
                          - 'OFF'
                          - DIRECT
                          - INDIRECT
                        description: |-
                          OFF will prevent the approval request from being assigned to the requester or requestee by assigning it to their manager instead.
                          DIRECT when the requester != requestee this will cause steps assigned directly to the requester to be auto-approved.
                          INDIRECT when the requester != requestee this will cause steps assigned to the requester or a group containing the requester to be auto-approved.
                          This field will only be effective if requestedTarget.reauthRequired is set to false, otherwise the approval will have to be manually approved.
                        example: 'OFF'
                    title: approvalconfig
                  description:
                    type: array
                    items:
                      type: object
                      title: Approval Description
                      properties:
                        value:
                          type: string
                          example: This access allows viewing and editing of workflow resource
                          description: The description of what the approval is asking for
                        locale:
                          type: string
                          example: en_US
                          description: What locale the description of the approval is using
                      description: The description of what the approval is asking for
                    description: The description of the approval for a given locale
                  medium:
                    type: string
                    enum:
                      - EMAIL
                      - SLACK
                      - TEAMS
                    example: EMAIL
                    description: Signifies what medium to use when sending notifications (currently only email is utilized)
                  priority:
                    type: string
                    enum:
                      - HIGH
                      - MEDIUM
                      - LOW
                    example: HIGH
                    description: The priority of the approval
                  requester:
                    type: object
                    title: Approval Identity
                    properties:
                      email:
                        type: string
                        example: mail@mail.com
                        description: Email address.
                      identityID:
                        type: string
                        example: 17e633e7d57e481569df76323169deb6a
                        description: Identity ID of the type of identity defined in the 'type' field.
                      members:
                        type: array
                        items:
                          type: object
                          properties:
                            email:
                              type: string
                              example: mail@mail.com
                              description: Email of the member.
                            id:
                              type: string
                              example: 17e633e7d57e481569df76323169deb6a
                              description: ID of the member.
                            name:
                              type: string
                              example: Bob Neil
                              description: Name of the member.
                            type:
                              type: string
                              example: IDENTITY
                              description: Type of the member.
                        description: List of members of a governance group. Will be omitted if the identity is not a governance group.
                      name:
                        type: string
                        example: Jim Bob
                        description: Name of the identity.
                      ownerOf:
                        type: array
                        items:
                          type: object
                          properties:
                            id:
                              type: string
                              example: string
                              description: ID of the object that is owned.
                            name:
                              type: string
                              example: Access Request App
                              description: Name of the object that is owned.
                            type:
                              type: string
                              example: APPLICATION
                              description: Type of the object that is owned.
                        description: List of owned items. For example, will show the items in which a ROLE_OWNER owns. Omitted if not an owner of anything.
                      serialOrder:
                        type: integer
                        example: 0
                        format: int64
                        description: The serial step of the identity in the approval. For example serialOrder 1 is the first identity to action in an approval request chain. Parallel approvals are set to 0.
                      type:
                        type: string
                        enum:
                          - IDENTITY
                          - GOVERNANCE_GROUP
                          - MANAGER_OF
                          - ACCOUNT_OWNER
                          - MACHINE_ACCOUNT_OWNER
                          - MACHINE_IDENTITY_OWNER
                          - MANAGER_OF_REQUESTED_TARGET_OWNER
                          - MANAGER_OF_MACHINE_IDENTITY_OWNER
                          - MANAGER_OF_ACCOUNT_OWNER
                          - MANAGER_OF_MACHINE_ACCOUNT_OWNER
                          - MANAGER_OF_REQUESTER
                          - MANAGER_OF_REQUESTER_OWNER
                          - MANAGER_OF_OWNER
                          - ACCESS_PROFILE_OWNER
                          - APPLICATION_OWNER
                          - ENTITLEMENT_OWNER
                          - ROLE_OWNER
                          - SOURCE_OWNER
                          - REQUESTED_TARGET_OWNER
                          - ACCESS_PROFILE_PRIMARY_OWNER
                          - APPLICATION_PRIMARY_OWNER
                          - ENTITLEMENT_PRIMARY_OWNER
                          - ROLE_PRIMARY_OWNER
                          - SOURCE_PRIMARY_OWNER
                          - ACCOUNT_PRIMARY_OWNER
                          - MACHINE_ACCOUNT_PRIMARY_OWNER
                          - MACHINE_IDENTITY_PRIMARY_OWNER
                          - REQUESTED_TARGET_PRIMARY_OWNER
                          - ACCESS_PROFILE_SECONDARY_OWNER_GROUP
                          - APPLICATION_SECONDARY_OWNER_GROUP
                          - ENTITLEMENT_SECONDARY_OWNER_GROUP
                          - ROLE_SECONDARY_OWNER_GROUP
                          - SOURCE_SECONDARY_OWNER_GROUP
                          - ACCOUNT_SECONDARY_OWNER_GROUP
                          - MACHINE_ACCOUNT_SECONDARY_OWNER_GROUP
                          - MACHINE_IDENTITY_SECONDARY_OWNER_GROUP
                          - REQUESTED_TARGET_SECONDARY_OWNER_GROUP
                          - ACCESS_PROFILE_ALL_OWNER_GROUP
                          - APPLICATION_ALL_OWNER_GROUP
                          - ENTITLEMENT_ALL_OWNER_GROUP
                          - ROLE_ALL_OWNER_GROUP
                          - SOURCE_ALL_OWNER_GROUP
                          - ACCOUNT_ALL_OWNER_GROUP
                          - MACHINE_ACCOUNT_ALL_OWNER_GROUP
                          - MACHINE_IDENTITY_ALL_OWNER_GROUP
                          - REQUESTED_TARGET_ALL_OWNER_GROUP
                        example: IDENTITY
                        description: Type of identityID.
                    description: Approval Identity Object
                  requestee:
                    type: object
                    title: Approval Identity
                    properties:
                      email:
                        type: string
                        example: mail@mail.com
                        description: Email address.
                      identityID:
                        type: string
                        example: 17e633e7d57e481569df76323169deb6a
                        description: Identity ID of the type of identity defined in the 'type' field.
                      members:
                        type: array
                        items:
                          type: object
                          properties:
                            email:
                              type: string
                              example: mail@mail.com
                              description: Email of the member.
                            id:
                              type: string
                              example: 17e633e7d57e481569df76323169deb6a
                              description: ID of the member.
                            name:
                              type: string
                              example: Bob Neil
                              description: Name of the member.
                            type:
                              type: string
                              example: IDENTITY
                              description: Type of the member.
                        description: List of members of a governance group. Will be omitted if the identity is not a governance group.
                      name:
                        type: string
                        example: Jim Bob
                        description: Name of the identity.
                      ownerOf:
                        type: array
                        items:
                          type: object
                          properties:
                            id:
                              type: string
                              example: string
                              description: ID of the object that is owned.
                            name:
                              type: string
                              example: Access Request App
                              description: Name of the object that is owned.
                            type:
                              type: string
                              example: APPLICATION
                              description: Type of the object that is owned.
                        description: List of owned items. For example, will show the items in which a ROLE_OWNER owns. Omitted if not an owner of anything.
                      serialOrder:
                        type: integer
                        example: 0
                        format: int64
                        description: The serial step of the identity in the approval. For example serialOrder 1 is the first identity to action in an approval request chain. Parallel approvals are set to 0.
                      type:
                        type: string
                        enum:
                          - IDENTITY
                          - GOVERNANCE_GROUP
                          - MANAGER_OF
                          - ACCOUNT_OWNER
                          - MACHINE_ACCOUNT_OWNER
                          - MACHINE_IDENTITY_OWNER
                          - MANAGER_OF_REQUESTED_TARGET_OWNER
                          - MANAGER_OF_MACHINE_IDENTITY_OWNER
                          - MANAGER_OF_ACCOUNT_OWNER
                          - MANAGER_OF_MACHINE_ACCOUNT_OWNER
                          - MANAGER_OF_REQUESTER
                          - MANAGER_OF_REQUESTER_OWNER
                          - MANAGER_OF_OWNER
                          - ACCESS_PROFILE_OWNER
                          - APPLICATION_OWNER
                          - ENTITLEMENT_OWNER
                          - ROLE_OWNER
                          - SOURCE_OWNER
                          - REQUESTED_TARGET_OWNER
                          - ACCESS_PROFILE_PRIMARY_OWNER
                          - APPLICATION_PRIMARY_OWNER
                          - ENTITLEMENT_PRIMARY_OWNER
                          - ROLE_PRIMARY_OWNER
                          - SOURCE_PRIMARY_OWNER
                          - ACCOUNT_PRIMARY_OWNER
                          - MACHINE_ACCOUNT_PRIMARY_OWNER
                          - MACHINE_IDENTITY_PRIMARY_OWNER
                          - REQUESTED_TARGET_PRIMARY_OWNER
                          - ACCESS_PROFILE_SECONDARY_OWNER_GROUP
                          - APPLICATION_SECONDARY_OWNER_GROUP
                          - ENTITLEMENT_SECONDARY_OWNER_GROUP
                          - ROLE_SECONDARY_OWNER_GROUP
                          - SOURCE_SECONDARY_OWNER_GROUP
                          - ACCOUNT_SECONDARY_OWNER_GROUP
                          - MACHINE_ACCOUNT_SECONDARY_OWNER_GROUP
                          - MACHINE_IDENTITY_SECONDARY_OWNER_GROUP
                          - REQUESTED_TARGET_SECONDARY_OWNER_GROUP
                          - ACCESS_PROFILE_ALL_OWNER_GROUP
                          - APPLICATION_ALL_OWNER_GROUP
                          - ENTITLEMENT_ALL_OWNER_GROUP
                          - ROLE_ALL_OWNER_GROUP
                          - SOURCE_ALL_OWNER_GROUP
                          - ACCOUNT_ALL_OWNER_GROUP
                          - MACHINE_ACCOUNT_ALL_OWNER_GROUP
                          - MACHINE_IDENTITY_ALL_OWNER_GROUP
                          - REQUESTED_TARGET_ALL_OWNER_GROUP
                        example: IDENTITY
                        description: Type of identityID.
                    description: Approval Identity Object
                  comments:
                    type: array
                    items:
                      type: object
                      title: Approval Comment
                      properties:
                        author:
                          type: object
                          title: Approval Identity
                          properties:
                            email:
                              type: string
                              example: mail@mail.com
                              description: Email address.
                            identityID:
                              type: string
                              example: 17e633e7d57e481569df76323169deb6a
                              description: Identity ID of the type of identity defined in the 'type' field.
                            members:
                              type: array
                              items:
                                type: object
                                properties:
                                  email:
                                    type: string
                                    example: mail@mail.com
                                    description: Email of the member.
                                  id:
                                    type: string
                                    example: 17e633e7d57e481569df76323169deb6a
                                    description: ID of the member.
                                  name:
                                    type: string
                                    example: Bob Neil
                                    description: Name of the member.
                                  type:
                                    type: string
                                    example: IDENTITY
                                    description: Type of the member.
                              description: List of members of a governance group. Will be omitted if the identity is not a governance group.
                            name:
                              type: string
                              example: Jim Bob
                              description: Name of the identity.
                            ownerOf:
                              type: array
                              items:
                                type: object
                                properties:
                                  id:
                                    type: string
                                    example: string
                                    description: ID of the object that is owned.
                                  name:
                                    type: string
                                    example: Access Request App
                                    description: Name of the object that is owned.
                                  type:
                                    type: string
                                    example: APPLICATION
                                    description: Type of the object that is owned.
                              description: List of owned items. For example, will show the items in which a ROLE_OWNER owns. Omitted if not an owner of anything.
                            serialOrder:
                              type: integer
                              example: 0
                              format: int64
                              description: The serial step of the identity in the approval. For example serialOrder 1 is the first identity to action in an approval request chain. Parallel approvals are set to 0.
                            type:
                              type: string
                              enum:
                                - IDENTITY
                                - GOVERNANCE_GROUP
                                - MANAGER_OF
                                - ACCOUNT_OWNER
                                - MACHINE_ACCOUNT_OWNER
                                - MACHINE_IDENTITY_OWNER
                                - MANAGER_OF_REQUESTED_TARGET_OWNER
                                - MANAGER_OF_MACHINE_IDENTITY_OWNER
                                - MANAGER_OF_ACCOUNT_OWNER
                                - MANAGER_OF_MACHINE_ACCOUNT_OWNER
                                - MANAGER_OF_REQUESTER
                                - MANAGER_OF_REQUESTER_OWNER
                                - MANAGER_OF_OWNER
                                - ACCESS_PROFILE_OWNER
                                - APPLICATION_OWNER
                                - ENTITLEMENT_OWNER
                                - ROLE_OWNER
                                - SOURCE_OWNER
                                - REQUESTED_TARGET_OWNER
                                - ACCESS_PROFILE_PRIMARY_OWNER
                                - APPLICATION_PRIMARY_OWNER
                                - ENTITLEMENT_PRIMARY_OWNER
                                - ROLE_PRIMARY_OWNER
                                - SOURCE_PRIMARY_OWNER
                                - ACCOUNT_PRIMARY_OWNER
                                - MACHINE_ACCOUNT_PRIMARY_OWNER
                                - MACHINE_IDENTITY_PRIMARY_OWNER
                                - REQUESTED_TARGET_PRIMARY_OWNER
                                - ACCESS_PROFILE_SECONDARY_OWNER_GROUP
                                - APPLICATION_SECONDARY_OWNER_GROUP
                                - ENTITLEMENT_SECONDARY_OWNER_GROUP
                                - ROLE_SECONDARY_OWNER_GROUP
                                - SOURCE_SECONDARY_OWNER_GROUP
                                - ACCOUNT_SECONDARY_OWNER_GROUP
                                - MACHINE_ACCOUNT_SECONDARY_OWNER_GROUP
                                - MACHINE_IDENTITY_SECONDARY_OWNER_GROUP
                                - REQUESTED_TARGET_SECONDARY_OWNER_GROUP
                                - ACCESS_PROFILE_ALL_OWNER_GROUP
                                - APPLICATION_ALL_OWNER_GROUP
                                - ENTITLEMENT_ALL_OWNER_GROUP
                                - ROLE_ALL_OWNER_GROUP
                                - SOURCE_ALL_OWNER_GROUP
                                - ACCOUNT_ALL_OWNER_GROUP
                                - MACHINE_ACCOUNT_ALL_OWNER_GROUP
                                - MACHINE_IDENTITY_ALL_OWNER_GROUP
                                - REQUESTED_TARGET_ALL_OWNER_GROUP
                              example: IDENTITY
                              description: Type of identityID.
                          description: Approval Identity Object
                        comment:
                          type: string
                          example: Looks good
                          description: Comment to be left on an approval
                        createdDate:
                          type: string
                          example: '2023-04-12T23:20:50.52Z'
                          description: Date the comment was created
                        commentId:
                          type: string
                          example: 38453251-6be2-5f8f-df93-5ce19e295837
                          description: ID of the comment
                      description: Comments Object
                    description: Object representation of a comment on the approval
                  approvedBy:
                    type: array
                    items:
                      type: object
                      properties:
                        identityID:
                          type: string
                          example: 17e633e7d57e481569df76323169deb6a
                          description: Identity ID.
                        type:
                          type: string
                          enum:
                            - IDENTITY
                          example: IDENTITY
                          description: Type of identity.
                        name:
                          type: string
                          example: Jim Bob
                          description: Name of the identity.
                        actionedAs:
                          type: array
                          items:
                            type: object
                            title: Approval Reference
                            properties:
                              id:
                                type: string
                                example: 64012350-8fd9-4f6c-a170-1fe123683899
                                description: Id of the reference object
                              type:
                                type: string
                                example: AccessRequestId
                                description: What reference object does this ID correspond to
                              name:
                                type: string
                                example: Access Request
                                description: Name of the reference object
                              email:
                                type: string
                                format: email
                                example: user@example.com
                                description: Email associated with the reference object
                              serialOrder:
                                type: integer
                                example: 0
                                format: int64
                                description: The serial step of the identity in the approval. For example serialOrder 1 is the first identity to action in an approval request chain. Parallel approvals are set to 0.
                            description: Reference objects related to the approval
                          description: List of references representing actions taken by the identity.
                        members:
                          type: array
                          items:
                            type: object
                            title: Approval Reference
                            properties:
                              id:
                                type: string
                                example: 64012350-8fd9-4f6c-a170-1fe123683899
                                description: Id of the reference object
                              type:
                                type: string
                                example: AccessRequestId
                                description: What reference object does this ID correspond to
                              name:
                                type: string
                                example: Access Request
                                description: Name of the reference object
                              email:
                                type: string
                                format: email
                                example: user@example.com
                                description: Email associated with the reference object
                              serialOrder:
                                type: integer
                                example: 0
                                format: int64
                                description: The serial step of the identity in the approval. For example serialOrder 1 is the first identity to action in an approval request chain. Parallel approvals are set to 0.
                            description: Reference objects related to the approval
                          description: List of references representing members of the identity.
                        decisionDate:
                          type: string
                          format: date-time
                          example: '2023-04-12T23:20:50.52Z'
                          description: Date when the decision was made.
                        email:
                          type: string
                          format: email
                          example: user@example.com
                          description: Email associated with the identity.
                      description: Identity Record Object
                      title: approvalidentityrecord
                    description: Array of approvers who have approved the approval
                  rejectedBy:
                    type: array
                    items:
                      type: object
                      properties:
                        identityID:
                          type: string
                          example: 17e633e7d57e481569df76323169deb6a
                          description: Identity ID.
                        type:
                          type: string
                          enum:
                            - IDENTITY
                          example: IDENTITY
                          description: Type of identity.
                        name:
                          type: string
                          example: Jim Bob
                          description: Name of the identity.
                        actionedAs:
                          type: array
                          items:
                            type: object
                            title: Approval Reference
                            properties:
                              id:
                                type: string
                                example: 64012350-8fd9-4f6c-a170-1fe123683899
                                description: Id of the reference object
                              type:
                                type: string
                                example: AccessRequestId
                                description: What reference object does this ID correspond to
                              name:
                                type: string
                                example: Access Request
                                description: Name of the reference object
                              email:
                                type: string
                                format: email
                                example: user@example.com
                                description: Email associated with the reference object
                              serialOrder:
                                type: integer
                                example: 0
                                format: int64
                                description: The serial step of the identity in the approval. For example serialOrder 1 is the first identity to action in an approval request chain. Parallel approvals are set to 0.
                            description: Reference objects related to the approval
                          description: List of references representing actions taken by the identity.
                        members:
                          type: array
                          items:
                            type: object
                            title: Approval Reference
                            properties:
                              id:
                                type: string
                                example: 64012350-8fd9-4f6c-a170-1fe123683899
                                description: Id of the reference object
                              type:
                                type: string
                                example: AccessRequestId
                                description: What reference object does this ID correspond to
                              name:
                                type: string
                                example: Access Request
                                description: Name of the reference object
                              email:
                                type: string
                                format: email
                                example: user@example.com
                                description: Email associated with the reference object
                              serialOrder:
                                type: integer
                                example: 0
                                format: int64
                                description: The serial step of the identity in the approval. For example serialOrder 1 is the first identity to action in an approval request chain. Parallel approvals are set to 0.
                            description: Reference objects related to the approval
                          description: List of references representing members of the identity.
                        decisionDate:
                          type: string
                          format: date-time
                          example: '2023-04-12T23:20:50.52Z'
                          description: Date when the decision was made.
                        email:
                          type: string
                          format: email
                          example: user@example.com
                          description: Email associated with the identity.
                      description: Identity Record Object
                      title: approvalidentityrecord
                    description: Array of approvers who have rejected the approval
                  assignedTo:
                    type: array
                    items:
                      type: object
                      title: Approval Identity
                      properties:
                        email:
                          type: string
                          example: mail@mail.com
                          description: Email address.
                        identityID:
                          type: string
                          example: 17e633e7d57e481569df76323169deb6a
                          description: Identity ID of the type of identity defined in the 'type' field.
                        members:
                          type: array
                          items:
                            type: object
                            properties:
                              email:
                                type: string
                                example: mail@mail.com
                                description: Email of the member.
                              id:
                                type: string
                                example: 17e633e7d57e481569df76323169deb6a
                                description: ID of the member.
                              name:
                                type: string
                                example: Bob Neil
                                description: Name of the member.
                              type:
                                type: string
                                example: IDENTITY
                                description: Type of the member.
                          description: List of members of a governance group. Will be omitted if the identity is not a governance group.
                        name:
                          type: string
                          example: Jim Bob
                          description: Name of the identity.
                        ownerOf:
                          type: array
                          items:
                            type: object
                            properties:
                              id:
                                type: string
                                example: string
                                description: ID of the object that is owned.
                              name:
                                type: string
                                example: Access Request App
                                description: Name of the object that is owned.
                              type:
                                type: string
                                example: APPLICATION
                                description: Type of the object that is owned.
                          description: List of owned items. For example, will show the items in which a ROLE_OWNER owns. Omitted if not an owner of anything.
                        serialOrder:
                          type: integer
                          example: 0
                          format: int64
                          description: The serial step of the identity in the approval. For example serialOrder 1 is the first identity to action in an approval request chain. Parallel approvals are set to 0.
                        type:
                          type: string
                          enum:
                            - IDENTITY
                            - GOVERNANCE_GROUP
                            - MANAGER_OF
                            - ACCOUNT_OWNER
                            - MACHINE_ACCOUNT_OWNER
                            - MACHINE_IDENTITY_OWNER
                            - MANAGER_OF_REQUESTED_TARGET_OWNER
                            - MANAGER_OF_MACHINE_IDENTITY_OWNER
                            - MANAGER_OF_ACCOUNT_OWNER
                            - MANAGER_OF_MACHINE_ACCOUNT_OWNER
                            - MANAGER_OF_REQUESTER
                            - MANAGER_OF_REQUESTER_OWNER
                            - MANAGER_OF_OWNER
                            - ACCESS_PROFILE_OWNER
                            - APPLICATION_OWNER
                            - ENTITLEMENT_OWNER
                            - ROLE_OWNER
                            - SOURCE_OWNER
                            - REQUESTED_TARGET_OWNER
                            - ACCESS_PROFILE_PRIMARY_OWNER
                            - APPLICATION_PRIMARY_OWNER
                            - ENTITLEMENT_PRIMARY_OWNER
                            - ROLE_PRIMARY_OWNER
                            - SOURCE_PRIMARY_OWNER
                            - ACCOUNT_PRIMARY_OWNER
                            - MACHINE_ACCOUNT_PRIMARY_OWNER
                            - MACHINE_IDENTITY_PRIMARY_OWNER
                            - REQUESTED_TARGET_PRIMARY_OWNER
                            - ACCESS_PROFILE_SECONDARY_OWNER_GROUP
                            - APPLICATION_SECONDARY_OWNER_GROUP
                            - ENTITLEMENT_SECONDARY_OWNER_GROUP
                            - ROLE_SECONDARY_OWNER_GROUP
                            - SOURCE_SECONDARY_OWNER_GROUP
                            - ACCOUNT_SECONDARY_OWNER_GROUP
                            - MACHINE_ACCOUNT_SECONDARY_OWNER_GROUP
                            - MACHINE_IDENTITY_SECONDARY_OWNER_GROUP
                            - REQUESTED_TARGET_SECONDARY_OWNER_GROUP
                            - ACCESS_PROFILE_ALL_OWNER_GROUP
                            - APPLICATION_ALL_OWNER_GROUP
                            - ENTITLEMENT_ALL_OWNER_GROUP
                            - ROLE_ALL_OWNER_GROUP
                            - SOURCE_ALL_OWNER_GROUP
                            - ACCOUNT_ALL_OWNER_GROUP
                            - MACHINE_ACCOUNT_ALL_OWNER_GROUP
                            - MACHINE_IDENTITY_ALL_OWNER_GROUP
                            - REQUESTED_TARGET_ALL_OWNER_GROUP
                          example: IDENTITY
                          description: Type of identityID.
                      description: Approval Identity Object
                    description: Array of identities that the approval request is currently assigned to/waiting on. For parallel approvals, this is set to all approvers left to approve.
                  completedDate:
                    type: string
                    example: '2023-04-12T23:20:50.52Z'
                    description: Date the approval was completed
                  approvalCriteria:
                    type: object
                    properties:
                      type:
                        type: string
                        description: Type of approval criteria, such as SERIAL or PARALLEL
                        example: SERIAL
                      approval:
                        type: object
                        properties:
                          calculationType:
                            type: string
                            enum:
                              - COUNT
                              - PERCENT
                            description: This defines what the field "value" will be used as, either a count or percentage of the total approvers that need to approve
                            example: COUNT
                          value:
                            type: integer
                            format: int64
                            description: The value that needs to be met for the approval criteria
                            example: 70
                        description: Criteria for approval
                      rejection:
                        type: object
                        properties:
                          calculationType:
                            type: string
                            enum:
                              - COUNT
                              - PERCENT
                            description: This defines what the field "value" will be used as, either a count or percentage of the total approvers that need to reject
                            example: COUNT
                          value:
                            type: integer
                            format: int64
                            description: The value that needs to be met for the rejection criteria
                            example: 30
                        description: Criteria for rejection
                    description: Criteria that needs to be met for an approval or rejection
                  additionalAttributes:
                    type: string
                    example: '{ "llm_description": "generated description" }'
                    description: Json string representing additional attributes known about the object to be approved.
                  referenceData:
                    type: array
                    items:
                      type: object
                      title: Approval Reference
                      properties:
                        id:
                          type: string
                          example: 64012350-8fd9-4f6c-a170-1fe123683899
                          description: Id of the reference object
                        type:
                          type: string
                          example: AccessRequestId
                          description: What reference object does this ID correspond to
                        name:
                          type: string
                          example: Access Request
                          description: Name of the reference object
                        email:
                          type: string
                          format: email
                          example: user@example.com
                          description: Email associated with the reference object
                        serialOrder:
                          type: integer
                          example: 0
                          format: int64
                          description: The serial step of the identity in the approval. For example serialOrder 1 is the first identity to action in an approval request chain. Parallel approvals are set to 0.
                      description: Reference objects related to the approval
                    description: Reference data related to the approval
                  reassignmentHistory:
                    type: array
                    description: History of whom the approval request was assigned to
                    items:
                      type: object
                      properties:
                        commentID:
                          type: string
                          example: f47ac10b-58cc-4372-a567-0e02b2c3d479
                          description: Unique identifier for the comment associated with the reassignment.
                        reassignedFrom:
                          type: object
                          title: Approval Identity
                          properties:
                            email:
                              type: string
                              example: mail@mail.com
                              description: Email address.
                            identityID:
                              type: string
                              example: 17e633e7d57e481569df76323169deb6a
                              description: Identity ID of the type of identity defined in the 'type' field.
                            members:
                              type: array
                              items:
                                type: object
                                properties:
                                  email:
                                    type: string
                                    example: mail@mail.com
                                    description: Email of the member.
                                  id:
                                    type: string
                                    example: 17e633e7d57e481569df76323169deb6a
                                    description: ID of the member.
                                  name:
                                    type: string
                                    example: Bob Neil
                                    description: Name of the member.
                                  type:
                                    type: string
                                    example: IDENTITY
                                    description: Type of the member.
                              description: List of members of a governance group. Will be omitted if the identity is not a governance group.
                            name:
                              type: string
                              example: Jim Bob
                              description: Name of the identity.
                            ownerOf:
                              type: array
                              items:
                                type: object
                                properties:
                                  id:
                                    type: string
                                    example: string
                                    description: ID of the object that is owned.
                                  name:
                                    type: string
                                    example: Access Request App
                                    description: Name of the object that is owned.
                                  type:
                                    type: string
                                    example: APPLICATION
                                    description: Type of the object that is owned.
                              description: List of owned items. For example, will show the items in which a ROLE_OWNER owns. Omitted if not an owner of anything.
                            serialOrder:
                              type: integer
                              example: 0
                              format: int64
                              description: The serial step of the identity in the approval. For example serialOrder 1 is the first identity to action in an approval request chain. Parallel approvals are set to 0.
                            type:
                              type: string
                              enum:
                                - IDENTITY
                                - GOVERNANCE_GROUP
                                - MANAGER_OF
                                - ACCOUNT_OWNER
                                - MACHINE_ACCOUNT_OWNER
                                - MACHINE_IDENTITY_OWNER
                                - MANAGER_OF_REQUESTED_TARGET_OWNER
                                - MANAGER_OF_MACHINE_IDENTITY_OWNER
                                - MANAGER_OF_ACCOUNT_OWNER
                                - MANAGER_OF_MACHINE_ACCOUNT_OWNER
                                - MANAGER_OF_REQUESTER
                                - MANAGER_OF_REQUESTER_OWNER
                                - MANAGER_OF_OWNER
                                - ACCESS_PROFILE_OWNER
                                - APPLICATION_OWNER
                                - ENTITLEMENT_OWNER
                                - ROLE_OWNER
                                - SOURCE_OWNER
                                - REQUESTED_TARGET_OWNER
                                - ACCESS_PROFILE_PRIMARY_OWNER
                                - APPLICATION_PRIMARY_OWNER
                                - ENTITLEMENT_PRIMARY_OWNER
                                - ROLE_PRIMARY_OWNER
                                - SOURCE_PRIMARY_OWNER
                                - ACCOUNT_PRIMARY_OWNER
                                - MACHINE_ACCOUNT_PRIMARY_OWNER
                                - MACHINE_IDENTITY_PRIMARY_OWNER
                                - REQUESTED_TARGET_PRIMARY_OWNER
                                - ACCESS_PROFILE_SECONDARY_OWNER_GROUP
                                - APPLICATION_SECONDARY_OWNER_GROUP
                                - ENTITLEMENT_SECONDARY_OWNER_GROUP
                                - ROLE_SECONDARY_OWNER_GROUP
                                - SOURCE_SECONDARY_OWNER_GROUP
                                - ACCOUNT_SECONDARY_OWNER_GROUP
                                - MACHINE_ACCOUNT_SECONDARY_OWNER_GROUP
                                - MACHINE_IDENTITY_SECONDARY_OWNER_GROUP
                                - REQUESTED_TARGET_SECONDARY_OWNER_GROUP
                                - ACCESS_PROFILE_ALL_OWNER_GROUP
                                - APPLICATION_ALL_OWNER_GROUP
                                - ENTITLEMENT_ALL_OWNER_GROUP
                                - ROLE_ALL_OWNER_GROUP
                                - SOURCE_ALL_OWNER_GROUP
                                - ACCOUNT_ALL_OWNER_GROUP
                                - MACHINE_ACCOUNT_ALL_OWNER_GROUP
                                - MACHINE_IDENTITY_ALL_OWNER_GROUP
                                - REQUESTED_TARGET_ALL_OWNER_GROUP
                              example: IDENTITY
                              description: Type of identityID.
                          description: Approval Identity Object
                        reassignedTo:
                          type: object
                          title: Approval Identity
                          properties:
                            email:
                              type: string
                              example: mail@mail.com
                              description: Email address.
                            identityID:
                              type: string
                              example: 17e633e7d57e481569df76323169deb6a
                              description: Identity ID of the type of identity defined in the 'type' field.
                            members:
                              type: array
                              items:
                                type: object
                                properties:
                                  email:
                                    type: string
                                    example: mail@mail.com
                                    description: Email of the member.
                                  id:
                                    type: string
                                    example: 17e633e7d57e481569df76323169deb6a
                                    description: ID of the member.
                                  name:
                                    type: string
                                    example: Bob Neil
                                    description: Name of the member.
                                  type:
                                    type: string
                                    example: IDENTITY
                                    description: Type of the member.
                              description: List of members of a governance group. Will be omitted if the identity is not a governance group.
                            name:
                              type: string
                              example: Jim Bob
                              description: Name of the identity.
                            ownerOf:
                              type: array
                              items:
                                type: object
                                properties:
                                  id:
                                    type: string
                                    example: string
                                    description: ID of the object that is owned.
                                  name:
                                    type: string
                                    example: Access Request App
                                    description: Name of the object that is owned.
                                  type:
                                    type: string
                                    example: APPLICATION
                                    description: Type of the object that is owned.
                              description: List of owned items. For example, will show the items in which a ROLE_OWNER owns. Omitted if not an owner of anything.
                            serialOrder:
                              type: integer
                              example: 0
                              format: int64
                              description: The serial step of the identity in the approval. For example serialOrder 1 is the first identity to action in an approval request chain. Parallel approvals are set to 0.
                            type:
                              type: string
                              enum:
                                - IDENTITY
                                - GOVERNANCE_GROUP
                                - MANAGER_OF
                                - ACCOUNT_OWNER
                                - MACHINE_ACCOUNT_OWNER
                                - MACHINE_IDENTITY_OWNER
                                - MANAGER_OF_REQUESTED_TARGET_OWNER
                                - MANAGER_OF_MACHINE_IDENTITY_OWNER
                                - MANAGER_OF_ACCOUNT_OWNER
                                - MANAGER_OF_MACHINE_ACCOUNT_OWNER
                                - MANAGER_OF_REQUESTER
                                - MANAGER_OF_REQUESTER_OWNER
                                - MANAGER_OF_OWNER
                                - ACCESS_PROFILE_OWNER
                                - APPLICATION_OWNER
                                - ENTITLEMENT_OWNER
                                - ROLE_OWNER
                                - SOURCE_OWNER
                                - REQUESTED_TARGET_OWNER
                                - ACCESS_PROFILE_PRIMARY_OWNER
                                - APPLICATION_PRIMARY_OWNER
                                - ENTITLEMENT_PRIMARY_OWNER
                                - ROLE_PRIMARY_OWNER
                                - SOURCE_PRIMARY_OWNER
                                - ACCOUNT_PRIMARY_OWNER
                                - MACHINE_ACCOUNT_PRIMARY_OWNER
                                - MACHINE_IDENTITY_PRIMARY_OWNER
                                - REQUESTED_TARGET_PRIMARY_OWNER
                                - ACCESS_PROFILE_SECONDARY_OWNER_GROUP
                                - APPLICATION_SECONDARY_OWNER_GROUP
                                - ENTITLEMENT_SECONDARY_OWNER_GROUP
                                - ROLE_SECONDARY_OWNER_GROUP
                                - SOURCE_SECONDARY_OWNER_GROUP
                                - ACCOUNT_SECONDARY_OWNER_GROUP
                                - MACHINE_ACCOUNT_SECONDARY_OWNER_GROUP
                                - MACHINE_IDENTITY_SECONDARY_OWNER_GROUP
                                - REQUESTED_TARGET_SECONDARY_OWNER_GROUP
                                - ACCESS_PROFILE_ALL_OWNER_GROUP
                                - APPLICATION_ALL_OWNER_GROUP
                                - ENTITLEMENT_ALL_OWNER_GROUP
                                - ROLE_ALL_OWNER_GROUP
                                - SOURCE_ALL_OWNER_GROUP
                                - ACCOUNT_ALL_OWNER_GROUP
                                - MACHINE_ACCOUNT_ALL_OWNER_GROUP
                                - MACHINE_IDENTITY_ALL_OWNER_GROUP
                                - REQUESTED_TARGET_ALL_OWNER_GROUP
                              example: IDENTITY
                              description: Type of identityID.
                          description: Approval Identity Object
                        reassigner:
                          type: object
                          title: Approval Identity
                          properties:
                            email:
                              type: string
                              example: mail@mail.com
                              description: Email address.
                            identityID:
                              type: string
                              example: 17e633e7d57e481569df76323169deb6a
                              description: Identity ID of the type of identity defined in the 'type' field.
                            members:
                              type: array
                              items:
                                type: object
                                properties:
                                  email:
                                    type: string
                                    example: mail@mail.com
                                    description: Email of the member.
                                  id:
                                    type: string
                                    example: 17e633e7d57e481569df76323169deb6a
                                    description: ID of the member.
                                  name:
                                    type: string
                                    example: Bob Neil
                                    description: Name of the member.
                                  type:
                                    type: string
                                    example: IDENTITY
                                    description: Type of the member.
                              description: List of members of a governance group. Will be omitted if the identity is not a governance group.
                            name:
                              type: string
                              example: Jim Bob
                              description: Name of the identity.
                            ownerOf:
                              type: array
                              items:
                                type: object
                                properties:
                                  id:
                                    type: string
                                    example: string
                                    description: ID of the object that is owned.
                                  name:
                                    type: string
                                    example: Access Request App
                                    description: Name of the object that is owned.
                                  type:
                                    type: string
                                    example: APPLICATION
                                    description: Type of the object that is owned.
                              description: List of owned items. For example, will show the items in which a ROLE_OWNER owns. Omitted if not an owner of anything.
                            serialOrder:
                              type: integer
                              example: 0
                              format: int64
                              description: The serial step of the identity in the approval. For example serialOrder 1 is the first identity to action in an approval request chain. Parallel approvals are set to 0.
                            type:
                              type: string
                              enum:
                                - IDENTITY
                                - GOVERNANCE_GROUP
                                - MANAGER_OF
                                - ACCOUNT_OWNER
                                - MACHINE_ACCOUNT_OWNER
                                - MACHINE_IDENTITY_OWNER
                                - MANAGER_OF_REQUESTED_TARGET_OWNER
                                - MANAGER_OF_MACHINE_IDENTITY_OWNER
                                - MANAGER_OF_ACCOUNT_OWNER
                                - MANAGER_OF_MACHINE_ACCOUNT_OWNER
                                - MANAGER_OF_REQUESTER
                                - MANAGER_OF_REQUESTER_OWNER
                                - MANAGER_OF_OWNER
                                - ACCESS_PROFILE_OWNER
                                - APPLICATION_OWNER
                                - ENTITLEMENT_OWNER
                                - ROLE_OWNER
                                - SOURCE_OWNER
                                - REQUESTED_TARGET_OWNER
                                - ACCESS_PROFILE_PRIMARY_OWNER
                                - APPLICATION_PRIMARY_OWNER
                                - ENTITLEMENT_PRIMARY_OWNER
                                - ROLE_PRIMARY_OWNER
                                - SOURCE_PRIMARY_OWNER
                                - ACCOUNT_PRIMARY_OWNER
                                - MACHINE_ACCOUNT_PRIMARY_OWNER
                                - MACHINE_IDENTITY_PRIMARY_OWNER
                                - REQUESTED_TARGET_PRIMARY_OWNER
                                - ACCESS_PROFILE_SECONDARY_OWNER_GROUP
                                - APPLICATION_SECONDARY_OWNER_GROUP
                                - ENTITLEMENT_SECONDARY_OWNER_GROUP
                                - ROLE_SECONDARY_OWNER_GROUP
                                - SOURCE_SECONDARY_OWNER_GROUP
                                - ACCOUNT_SECONDARY_OWNER_GROUP
                                - MACHINE_ACCOUNT_SECONDARY_OWNER_GROUP
                                - MACHINE_IDENTITY_SECONDARY_OWNER_GROUP
                                - REQUESTED_TARGET_SECONDARY_OWNER_GROUP
                                - ACCESS_PROFILE_ALL_OWNER_GROUP
                                - APPLICATION_ALL_OWNER_GROUP
                                - ENTITLEMENT_ALL_OWNER_GROUP
                                - ROLE_ALL_OWNER_GROUP
                                - SOURCE_ALL_OWNER_GROUP
                                - ACCOUNT_ALL_OWNER_GROUP
                                - MACHINE_ACCOUNT_ALL_OWNER_GROUP
                                - MACHINE_IDENTITY_ALL_OWNER_GROUP
                                - REQUESTED_TARGET_ALL_OWNER_GROUP
                              example: IDENTITY
                              description: Type of identityID.
                          description: Approval Identity Object
                        reassignmentDate:
                          type: string
                          format: date-time
                          example: '2023-10-01T12:34:56.789Z'
                          description: Date and time when the reassignment occurred.
                        reassignmentType:
                          type: string
                          enum:
                            - ESCALATION
                            - MANUAL_REASSIGNMENT
                            - AUTO_REASSIGNMENT
                          example: ESCALATION
                          description: Type of reassignment, such as escalation or manual reassignment.
                      description: ReassignmentHistoryRecord holds a history record of reassignment and escalation actions for an approval request
                      title: approvalreassignmenthistory
                  staticAttributes:
                    type: object
                    additionalProperties: {}
                    description: Field that can include any static additional info that may be needed by the service that the approval request originated from
                    example:
                      serviceName: ApprovalService
                      requestType: AccessRequest
                      metadata:
                        environment: production
                        region: us-east-1
                  modifiedDate:
                    type: string
                    format: date-time
                    description: Date/time that the approval request was last updated
                    example: '2023-10-01T12:34:56.789Z'
                  requestedTarget:
                    type: array
                    items:
                      type: object
                      properties:
                        forcedAuthSignature:
                          type: string
                          example: string
                          description: Signature required for forced authentication.
                        id:
                          type: string
                          example: string
                          description: ID of the requested target.
                        name:
                          type: string
                          example: string
                          description: Name of the requested target.
                        reauthRequired:
                          type: boolean
                          example: true
                          description: Indicates if reauthentication is required.
                          default: false
                        removalDate:
                          type: string
                          format: date-time
                          example: '2025-07-07T18:10:13.687Z'
                          description: Date when the target will be removed.
                        requestType:
                          type: string
                          example: string
                          description: Type of the request.
                        targetType:
                          type: string
                          example: string
                          description: Type of the target.
                      description: Represents a requested target in an approval process, including details such as ID, name, reauthentication requirements, and removal date.
                      title: approvalrequestedtarget
                    description: RequestedTarget used to specify the actual object or target the approval request is for
                description: Approval Object
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
