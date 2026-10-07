## OpenAPI

```yaml PUT /generic-approvals/v1/config/{id}/{scope}
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
  /generic-approvals/v1/config/{id}/{scope}:
    put:
      description: |-
        Upserts a singular approval configuration that matches the given configID and configScope. 
        For example to update the approval configurations for all Access Request Approvals please use: '/generic-approvals/config/ACCESS_REQUEST_APPROVAL/APPROVAL_TYPE'
      operationId: putApprovalsConfigV1
      security:
        - userAuth:
            - sp:approvals:write
      parameters:
        - in: path
          name: id
          required: true
          schema:
            type: string
          description: |
            The ID defined by the scope field, where id/scope is the following:

            * `{accountID}`/`ACCOUNT`
            * `{roleID}`/`ROLE`
            * `{entitlementID}`/`ENTITLEMENT`
            * `{accessProfileID}`/`ACCESS_PROFILE`
            * `{domainObjectID}`/`DOMAIN_OBJECT`
            * `ENTITLEMENT_DESCRIPTIONS`/`APPROVAL_TYPE`
            * `ACCESS_REQUEST_APPROVAL`/`APPROVAL_TYPE`
            * `ACCOUNT_DELETE_APPROVAL_REQUEST`/`APPROVAL_TYPE`
            * `MACHINE_ACCOUNT_CREATE_APPROVAL_REQUEST`/`APPROVAL_TYPE`
            * `MACHINE_ACCOUNT_DELETE_APPROVAL_REQUEST`/`APPROVAL_TYPE`
            * `AGENT_ACTIVATE_APPROVAL`/`APPROVAL_TYPE`
            * `AGENT_DEACTIVATE_APPROVAL`/`APPROVAL_TYPE`
            * `{tenantID}`/`TENANT`

            Replace placeholders such as `{roleID}` with the actual resource ID.
          example: ACCESS_REQUEST_APPROVAL
          x-sailpoint-resource-operation-id:
            - listEntitlementsV1
            - listRolesV1
            - listAccessProfilesV1
        - in: path
          name: scope
          required: true
          schema:
            type: string
            enum:
              - DOMAIN_OBJECT
              - ACCOUNT
              - ROLE
              - ACCESS_PROFILE
              - ENTITLEMENT
              - APPROVAL_TYPE
              - TENANT
          description: |
            The scope that defines the type of id, where id/scope is the following:

            * `{accountID}`/`ACCOUNT`
            * `{roleID}`/`ROLE`
            * `{entitlementID}`/`ENTITLEMENT`
            * `{accessProfileID}`/`ACCESS_PROFILE`
            * `{domainObjectID}`/`DOMAIN_OBJECT`
            * `ENTITLEMENT_DESCRIPTIONS`/`APPROVAL_TYPE`
            * `ACCESS_REQUEST_APPROVAL`/`APPROVAL_TYPE`
            * `ACCOUNT_DELETE_APPROVAL_REQUEST`/`APPROVAL_TYPE`
            * `MACHINE_ACCOUNT_CREATE_APPROVAL_REQUEST`/`APPROVAL_TYPE`
            * `MACHINE_ACCOUNT_DELETE_APPROVAL_REQUEST`/`APPROVAL_TYPE`
            * `AGENT_ACTIVATE_APPROVAL`/`APPROVAL_TYPE`
            * `AGENT_DEACTIVATE_APPROVAL`/`APPROVAL_TYPE`
            * `{tenantID}`/`TENANT`

            Replace placeholders such as `{roleID}` with the actual resource ID.
          example: APPROVAL_TYPE
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
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
              description: Approval config Object
              title: approvalconfig
      responses:
        '200':
          description: Verified Email Status
          content:
            application/json:
              schema:
                type: object
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
                description: Approval config Object
                title: approvalconfig
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
