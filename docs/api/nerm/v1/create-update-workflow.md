## OpenAPI

```yaml POST /workflows/update_workflows
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
  /workflows/update_workflows:
    post:
      description: Create an update workflow
      operationId: createUpdateWorkflow
      security:
        - userAuth: []
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              properties:
                workflow:
                  type: object
                  required:
                    - profile_type_id
                    - status
                    - uid
                    - name
                    - profile_status
                  properties:
                    profile_type_id:
                      type: string
                      format: uuid
                      description: The profile type the workflow effects.
                      example: 33f072dd-13b4-41e1-8ea0-16f2a59b57c8
                    status:
                      type: string
                      enum:
                        - Enabled
                        - Disabled
                      description: Whether or not the workflow is enabled or disabled.
                      example: Enabled
                    uid:
                      type: string
                      description: The user-specified identifier of the workflow.
                      example: my_uid
                    name:
                      type: string
                      description: Name of the workflow
                      example: my_workflow
                    profile_status:
                      type: string
                      description: The status of the profiles the workflow will effect.
                      example: active
                    disable_failure_email_notifications:
                      type: boolean
                      nullable: true
                      description: When honored at runtime, suppresses failure email notifications for this workflow's sessions.
                      example: false
                  title: UpdateWorkflow
      responses:
        '200':
          description: Expected response to a valid request
          content:
            application/json:
              schema:
                type: object
                properties:
                  workflow:
                    type: object
                    properties:
                      id:
                        type: string
                        format: uuid
                        readOnly: true
                        description: The objects ID.
                        example: 33f072dd-13b4-41e1-8ea0-16f2a59b57c8
                      uid:
                        type: string
                        readOnly: true
                        description: The objects UID.
                        example: wsUid
                      workflow_id:
                        type: string
                        format: uuid
                        description: The workflow id.
                        example: 33f072dd-13b4-41e1-8ea0-16f2a59b57c8
                      requester_id:
                        type: string
                        format: uuid
                        description: The requester's id.
                        example: 33f072dd-13b4-41e1-8ea0-16f2a59b57c8
                      requester_type:
                        type: string
                        enum:
                          - User
                          - NeprofileUser
                          - NeaccessUser
                        description: The requester type.
                        example: User
                      profile_id:
                        type: string
                        format: uuid
                        example: 33f072dd-13b4-41e1-8ea0-16f2a59b57c8
                        description: The profile this workflow session will be working with. Only Applicable for Update workflows
                      profile_ids:
                        type: array
                        items:
                          type: string
                          format: uuid
                        example: 59ed1cb6-9977-4965-9bfe-f2bcc242523e, 89ed1cb6-9977-4965-9bfe-f2bcc242523e
                        description: The profiles this workflow session will be working with. Only Applicable for Batch workflows
                      status:
                        type: string
                        enum:
                          - api_request_sent
                          - approved
                          - assigned
                          - attempting_to_start_workflow
                          - AUTH-STATUS1
                          - AUTH-STATUS2
                          - AUTH-STATUS3
                          - AUTH-STATUS4
                          - AUTH-STATUS5
                          - AUTH-STATUS6
                          - AUTH-STATUS7
                          - AUTH-STATUS8
                          - AUTH-STATUS9
                          - auto_assigned
                          - batch_completed
                          - checking_for_duplicates
                          - closed
                          - completed
                          - courion_add
                          - courion_extend
                          - courion_terminate
                          - courion_update
                          - duplicates_resolved
                          - failed
                          - fulfilled
                          - invitation_sent
                          - ldap_provided
                          - new
                          - non_employee_created
                          - non_employee_updated
                          - notified
                          - pending_approval
                          - pending_assignment
                          - pending_courion_add
                          - pending_courion_extend
                          - pending_courion_terminate
                          - pending_courion_update
                          - pending_creation
                          - pending_fulfillment
                          - pending_ldap
                          - pending_notification
                          - pending_profile_select
                          - pending_request
                          - pending_review
                          - pending_status_change
                          - pending_stored_procedure
                          - pending_trigger
                          - pending_update
                          - processing
                          - profile_check_complete
                          - profiles_selected
                          - rejected
                          - requested
                          - reviewed
                          - soap_request_sent
                          - started_workflow
                          - status_changed
                          - stored_procedure
                          - un_assigned
                          - waiting_on_workflow
                          - workflow_changed
                        example: completed
                        description: The status of the workflow session.
                      attributes:
                        type: object
                        additionalProperties:
                          type: string
                        description: The attributes asscoiated with the workflow session.
                        example:
                          text_attribute_uid: static text
                          date_attribute_uid: 01/15/2020
                          profile_select_attribute_uid: Profile Name
                          profile_search_attribute_uid: Profile Name
                          multiple_profile_search_attribute_uid: Profile Name,Second Profile Name,Third Profile Name
                          multiple_profile_select_attribute_uid: Profile Name,Second Profile Name,Third Profile Name
                          contributor_select_attribute_uid: User Name (user_email@test.com)
                          contributor_search_attribute_uid: User Name (user_email@test.com)
                          multiple_contributor_search_attribute_uid: User Name (user_email@test.com),Second User Name (user_email@test.com),Third User Name (user_email@test.com)
                          owner_select_attribute_uid: User Name (user_email@test.com)
                          owner_search_attribute_uid: User Name (user_email@test.com)
                          dropdown_attribute_uid: yes, no
                          tags_attribute_uid: yes, no
                          checkbox_attribute_uid: yes, no
                          text_area_uid: static text
                          radio_attribute_uid: yes, no
                    title: WorkflowSession
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
