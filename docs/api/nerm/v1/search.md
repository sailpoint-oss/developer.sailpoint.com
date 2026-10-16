## OpenAPI

```yaml POST /audit_events/query
openapi: 3.0.1
info:
  version: 1.0.0
  title: NERM API
  description: The NERM API accesss and modifies resources in your environment.
  license:
    name: MIT
servers:
  - url: https://{tenantName}.nonemployee.com/api
    variables:
      tenantName:
        default: acmeco
        description: Tenant name assigned to customer
paths:
  /audit_events/query:
    post:
      description: |-
        This endpoint provides a search engine for Audit Events by optionally combining subject_type, type, and subject_id to narrow down the audit events. A Subject Type of Profile links up to the AuditableProfile types. An Subject Type of WorkflowSession links up to the AuditableWorkflow types. An Subject Type of Get/Post/Patch/Delete links up to the AuditableApi types. The remaining Subject Types link up to the ActiveRecord types (configuration changes).

        - Any workflow audit event created as of 10/11/2024 will be able to be queried by workflow name, workflow uid, or workflow profile type.
        - Any profile audit event created as of 10/11/2024 will be able to be queried by profile type.
        - The entity_type parameter has been updated to subject_type, which now matches what is in the response object.
        - With the additional query filters added, there is a max of 5 filter parameters at one time (aside from pagination parameters)

        To accommodate these changes, an API contract change was required.  Please read the updated API documentation for the new request syntax.
      operationId: search
      security:
        - userAuth: []
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              properties:
                audit_events:
                  type: object
                  properties:
                    offset:
                      description: How many records to skip before pulling records to return.
                      type: integer
                      format: int32
                      example: 100
                    sort_by:
                      description: A column that we are sorting these records from.
                      type: string
                      example: created_at
                    limit:
                      description: The limiting count for the amount of records returned.
                      type: integer
                      example: 10
                      format: int32
                      maximum: 100
                    order:
                      description: Which direction the list should be sorted by
                      type: string
                      enum:
                        - asc
                        - desc
                      example: asc
                    filters:
                      type: object
                      properties:
                        created_at:
                          description: Search for record based on the created_at date
                          type: object
                          properties:
                            gt:
                              description: Greater Than - search for events with a date greater than the value
                              type: string
                              format: date
                              example: 2024-10-18T16:41:23.232+00:00 | 10/18/2024
                            lt:
                              description: Less Than - search for events with a date less than the value
                              type: string
                              format: date
                              example: 2024-10-18T16:41:23.232+00:00 | 10/18/2024
                            eq:
                              description: Equal - search for events with a date equal to the value
                              type: string
                              format: date
                              example: 2024-10-18T16:41:23.232+00:00 | 10/18/2024
                        subject_type:
                          description: Categorization of audit event.
                          type: string
                          enum:
                            - ApprovalAction
                            - AutomatedUser
                            - AutomatedWorkflow
                            - BatchWorkflow
                            - CreateWorkflow
                            - DelegateUser
                            - Delegation
                            - Delete
                            - Email
                            - ExpirationWorkflow
                            - Form
                            - FormAttribute
                            - FormAttributeForm
                            - Get
                            - IdentityProofingResult
                            - IdproxyPermission
                            - IdproxyRole
                            - InvitationWorkflow
                            - LoginWorkflow
                            - NeaccessRole
                            - NeaccessUser
                            - NeAttribute
                            - NeAttributeOption
                            - NeprofileRole
                            - NeprofileUser
                            - Notification
                            - Page
                            - PasswordResetWorkflow
                            - Patch
                            - Permission
                            - Portal
                            - PortalRegistrationWorkflow
                            - Post
                            - Profile
                            - ProfilePage
                            - ProfileType
                            - ProfileTypeRole
                            - RegistrationWorkflow
                            - Role
                            - RoleProfile
                            - SamlConfiguration
                            - SchemaMapping
                            - SchemaMappingField
                            - SecurityQuestion
                            - UpdateWorkflow
                            - User
                            - UserManager
                            - UserProfile
                            - UserRole
                            - Validation
                            - VerificationEmail
                            - Workflow
                            - WorkflowAction
                            - WorkflowPage
                            - WorkflowSession
                          example: Profile
                        type:
                          description: The type of audit event
                          type: string
                          enum:
                            - AuditableProfileCreate
                            - AuditableProfileUpdate
                            - AuditableProfileDestroy
                            - AuditableBulkProfileUpdate
                            - AuditableProfileContributorAdd
                            - AuditableProfileContributorRemove
                            - AuditableProfileContributorRoleAdd
                            - AuditableProfileContributorRoleRemove
                            - AuditableProfileOwnerUpdate
                            - AuditableProfileWorkflowEvent
                            - AuditableWorkflowActionSkippedEvent
                            - AuditableWorkflowApprovedEvent
                            - AuditableWorkflowApprovedEvent
                            - AuditableWorkflowAssignedEvent
                            - AuditableWorkflowAutoAssignedEvent
                            - AuditableWorkflowBatchCompleteEvent
                            - AuditableWorkflowClosedEvent
                            - AuditableWorkflowDuplicateCheckStartEvent
                            - AuditableWorkflowDuplicateResolutionEvent
                            - AuditableWorkflowFailedEvent
                            - AuditableWorkflowIdentityProofedEvent
                            - AuditableWorkflowInvitationSentEvent
                            - AuditableWorkflowLdapProvidedEvent
                            - AuditableWorkflowNotificationSentEvent
                            - AuditableWorkflowPendingApprovalEvent
                            - AuditableWorkflowPendingAssignmentEvent
                            - AuditableWorkflowPendingFulfillmentEvent
                            - AuditableWorkflowFulfilledEvent
                            - AuditableWorkflowPendingIdentityProofEvent
                            - AuditableWorkflowPendingLdapEvent
                            - AuditableWorkflowPendingRequestEvent
                            - AuditableWorkflowPendingReviewEvent
                            - AuditableWorkflowProfileCreatedEvent
                            - AuditableWorkflowProfileSelectEvent
                            - AuditableWorkflowProfileUpdatedEvent
                            - AuditableWorkflowRejectedEvent
                            - AuditableWorkflowRequestMadeEvent
                            - AuditableWorkflowRestApiEvent
                            - AuditableWorkflowReviewedEvent
                            - AuditableWorkflowRunningWorkflowEvent
                            - AuditableWorkflowSoapApiEvent
                            - AuditableWorkflowStatusChangedEvent
                            - AuditableWorkflowStoredProcedureEvent
                            - AuditableWorkflowUnassignEvent
                            - AuditableWorkflowWaitingForWorkflowEvent
                            - AuditableWorkflowWorkflowChangedEvent
                            - AuditableWorkflowVersionCreatedEvent
                            - AuditableWorkflowVersionForkedEvent
                            - AuditableWorkflowVersionDeprecatedEvent
                            - AuditableWorkflowVersionDeletedEvent
                            - AuditableWorkflowStepCreatedEvent
                            - AuditableWorkflowStepUpdatedEvent
                            - ActiveRecordCreate
                            - ActiveRecordUpdate
                            - ActiveRecordDestroy
                            - AuditableApiEvent
                          example: AuditableProfileCreate
                        subject_id:
                          description: Identifier of the subject
                          type: string
                          format: uuid
                          example: 7d8c53ca-e99d-485c-9524-ea3849e82c79
                        data:
                          type: object
                          properties:
                            profile_id:
                              description: The profile id associated with the event
                              type: string
                              example: 7d8c53ca-e99d-485c-9524-ea3849e82c79
                              format: uuid
                            workflow_id:
                              description: The workflow id associated with the event
                              type: string
                              example: 7d8c53ca-e99d-485c-9524-ea3849e82c79
                              format: uuid
                            workflow_name:
                              description: The workflow name associated with the event
                              type: string
                              example: My Workflow
                            workflow_uid:
                              description: The workflow uid associated with the event
                              type: string
                              example: my_workflow
                            profile_type_id:
                              description: The profile type associated with the event
                              type: string
                              example: 7d8c53ca-e99d-485c-9524-ea3849e82c79
                              format: uuid
                            workflow_version_id:
                              description: The workflow version a change belongs to. Can be used for both Workflow configurations and Workflow Session events.
                              type: string
                              example: e309339f-551f-48ab-b4f6-58d93123911f
                              format: uuid
                            version:
                              description: The workflow version SHA.
                              type: string
                              example: aadf95e45846365fa4b4c60f02c76ecffe718ee5
                            step_id:
                              description: The id of the workflow action or condition the step event refers to.
                              type: string
                              example: 2f4b24c6-d420-4eee-b860-5ad24c743185
                              format: uuid
                            step_label:
                              description: The name associated to an action configuration.
                              type: string
                              example: RequestAction
                            source:
                              description: What triggered the versioning change.
                              type: string
                              enum:
                                - ui
                                - import
                                - fork
                                - cleanup_worker
                                - delete_worker
                              example: ui
                      title: AuditEvent
      responses:
        '200':
          description: AuditEvents
          content:
            application/json:
              schema:
                type: object
                properties:
                  audit_events:
                    type: array
                    items:
                      type: object
                      properties:
                        created_at:
                          description: Search for record based on the created_at date
                          type: object
                          properties:
                            gt:
                              description: Greater Than - search for events with a date greater than the value
                              type: string
                              format: date
                              example: 2024-10-18T16:41:23.232+00:00 | 10/18/2024
                            lt:
                              description: Less Than - search for events with a date less than the value
                              type: string
                              format: date
                              example: 2024-10-18T16:41:23.232+00:00 | 10/18/2024
                            eq:
                              description: Equal - search for events with a date equal to the value
                              type: string
                              format: date
                              example: 2024-10-18T16:41:23.232+00:00 | 10/18/2024
                        subject_type:
                          description: Categorization of audit event.
                          type: string
                          enum:
                            - ApprovalAction
                            - AutomatedUser
                            - AutomatedWorkflow
                            - BatchWorkflow
                            - CreateWorkflow
                            - DelegateUser
                            - Delegation
                            - Delete
                            - Email
                            - ExpirationWorkflow
                            - Form
                            - FormAttribute
                            - FormAttributeForm
                            - Get
                            - IdentityProofingResult
                            - IdproxyPermission
                            - IdproxyRole
                            - InvitationWorkflow
                            - LoginWorkflow
                            - NeaccessRole
                            - NeaccessUser
                            - NeAttribute
                            - NeAttributeOption
                            - NeprofileRole
                            - NeprofileUser
                            - Notification
                            - Page
                            - PasswordResetWorkflow
                            - Patch
                            - Permission
                            - Portal
                            - PortalRegistrationWorkflow
                            - Post
                            - Profile
                            - ProfilePage
                            - ProfileType
                            - ProfileTypeRole
                            - RegistrationWorkflow
                            - Role
                            - RoleProfile
                            - SamlConfiguration
                            - SchemaMapping
                            - SchemaMappingField
                            - SecurityQuestion
                            - UpdateWorkflow
                            - User
                            - UserManager
                            - UserProfile
                            - UserRole
                            - Validation
                            - VerificationEmail
                            - Workflow
                            - WorkflowAction
                            - WorkflowPage
                            - WorkflowSession
                          example: Profile
                        type:
                          description: The type of audit event
                          type: string
                          enum:
                            - AuditableProfileCreate
                            - AuditableProfileUpdate
                            - AuditableProfileDestroy
                            - AuditableBulkProfileUpdate
                            - AuditableProfileContributorAdd
                            - AuditableProfileContributorRemove
                            - AuditableProfileContributorRoleAdd
                            - AuditableProfileContributorRoleRemove
                            - AuditableProfileOwnerUpdate
                            - AuditableProfileWorkflowEvent
                            - AuditableWorkflowActionSkippedEvent
                            - AuditableWorkflowApprovedEvent
                            - AuditableWorkflowApprovedEvent
                            - AuditableWorkflowAssignedEvent
                            - AuditableWorkflowAutoAssignedEvent
                            - AuditableWorkflowBatchCompleteEvent
                            - AuditableWorkflowClosedEvent
                            - AuditableWorkflowDuplicateCheckStartEvent
                            - AuditableWorkflowDuplicateResolutionEvent
                            - AuditableWorkflowFailedEvent
                            - AuditableWorkflowIdentityProofedEvent
                            - AuditableWorkflowInvitationSentEvent
                            - AuditableWorkflowLdapProvidedEvent
                            - AuditableWorkflowNotificationSentEvent
                            - AuditableWorkflowPendingApprovalEvent
                            - AuditableWorkflowPendingAssignmentEvent
                            - AuditableWorkflowPendingFulfillmentEvent
                            - AuditableWorkflowFulfilledEvent
                            - AuditableWorkflowPendingIdentityProofEvent
                            - AuditableWorkflowPendingLdapEvent
                            - AuditableWorkflowPendingRequestEvent
                            - AuditableWorkflowPendingReviewEvent
                            - AuditableWorkflowProfileCreatedEvent
                            - AuditableWorkflowProfileSelectEvent
                            - AuditableWorkflowProfileUpdatedEvent
                            - AuditableWorkflowRejectedEvent
                            - AuditableWorkflowRequestMadeEvent
                            - AuditableWorkflowRestApiEvent
                            - AuditableWorkflowReviewedEvent
                            - AuditableWorkflowRunningWorkflowEvent
                            - AuditableWorkflowSoapApiEvent
                            - AuditableWorkflowStatusChangedEvent
                            - AuditableWorkflowStoredProcedureEvent
                            - AuditableWorkflowUnassignEvent
                            - AuditableWorkflowWaitingForWorkflowEvent
                            - AuditableWorkflowWorkflowChangedEvent
                            - AuditableWorkflowVersionCreatedEvent
                            - AuditableWorkflowVersionForkedEvent
                            - AuditableWorkflowVersionDeprecatedEvent
                            - AuditableWorkflowVersionDeletedEvent
                            - AuditableWorkflowStepCreatedEvent
                            - AuditableWorkflowStepUpdatedEvent
                            - ActiveRecordCreate
                            - ActiveRecordUpdate
                            - ActiveRecordDestroy
                            - AuditableApiEvent
                          example: AuditableProfileCreate
                        subject_id:
                          description: Identifier of the subject
                          type: string
                          format: uuid
                          example: 7d8c53ca-e99d-485c-9524-ea3849e82c79
                        data:
                          type: object
                          properties:
                            profile_id:
                              description: The profile id associated with the event
                              type: string
                              example: 7d8c53ca-e99d-485c-9524-ea3849e82c79
                              format: uuid
                            workflow_id:
                              description: The workflow id associated with the event
                              type: string
                              example: 7d8c53ca-e99d-485c-9524-ea3849e82c79
                              format: uuid
                            workflow_name:
                              description: The workflow name associated with the event
                              type: string
                              example: My Workflow
                            workflow_uid:
                              description: The workflow uid associated with the event
                              type: string
                              example: my_workflow
                            profile_type_id:
                              description: The profile type associated with the event
                              type: string
                              example: 7d8c53ca-e99d-485c-9524-ea3849e82c79
                              format: uuid
                            workflow_version_id:
                              description: The workflow version a change belongs to. Can be used for both Workflow configurations and Workflow Session events.
                              type: string
                              example: e309339f-551f-48ab-b4f6-58d93123911f
                              format: uuid
                            version:
                              description: The workflow version SHA.
                              type: string
                              example: aadf95e45846365fa4b4c60f02c76ecffe718ee5
                            step_id:
                              description: The id of the workflow action or condition the step event refers to.
                              type: string
                              example: 2f4b24c6-d420-4eee-b860-5ad24c743185
                              format: uuid
                            step_label:
                              description: The name associated to an action configuration.
                              type: string
                              example: RequestAction
                            source:
                              description: What triggered the versioning change.
                              type: string
                              enum:
                                - ui
                                - import
                                - fork
                                - cleanup_worker
                                - delete_worker
                              example: ui
                      title: AuditEvent
        '400':
          description: Bad Request - unable to complete.
          content:
            application/json:
              schema:
                oneOf:
                  - type: object
                    properties:
                      error:
                        example: Invalid JSON syntax. Please check your syntax and try again.
                    title: InvalidJson
                  - type: object
                    properties:
                      error:
                        example: The <object> failed to create/update
                      errors:
                        example:
                          attribute: can't be blank
                    title: ValidationErrors
        '500':
          description: Internal Server Error - returned on unhandled exceptions.
          content:
            application/json:
              schema:
                type: object
                properties:
                  error:
                    description: A message describing the error
                    example: Sorry something went wrong
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
```
