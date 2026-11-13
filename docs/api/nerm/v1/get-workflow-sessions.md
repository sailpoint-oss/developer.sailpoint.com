## OpenAPI

```yaml GET /workflow_sessions
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
  /workflow_sessions:
    get:
      description: Get workflow sessions
      operationId: getWorkflowSessions
      security:
        - userAuth: []
      parameters:
        - name: limit
          in: query
          description: The maximum number of items to return.
          required: false
          schema:
            type: integer
            format: int32
            minimum: 1
            example: 5
        - name: offset
          in: query
          description: The number of items to skip before starting to collect the result set.
          required: false
          schema:
            type: integer
            format: int32
            minimum: 1
            example: 5
        - name: order
          in: query
          description: The field to order results by.
          required: false
          schema:
            type: string
            example: created_at
        - name: profile_id
          in: query
          description: Profile ID to filter by
          required: false
          schema:
            type: string
            format: uuid
            example: 4e480441-451d-47d9-87c2-9a0f0fe135eb
        - name: uid
          in: query
          description: Workflow session user-specified identifier (UID) for filtering
          required: false
          schema:
            type: string
            example: some_workflow_session_123
        - name: workflow_id
          in: query
          description: Workflow ID for filtering
          required: false
          schema:
            type: string
            format: uuid
            example: bba9cfb2-96c1-4acb-ac79-a21732527265
        - name: requester_id
          in: query
          description: Requester ID for filtering
          required: false
          schema:
            type: string
            format: uuid
            example: c5e1dd38-7e29-464f-a0da-0c0d886d022a
        - name: status
          in: query
          description: filter by workflow session status
          required: false
          schema:
            type: string
            enum:
              - waiting on workflow
              - identity proofing completed
              - new
              - closing
              - pending request
              - requested
              - pending approval
              - approved
              - pending notification
              - notified
              - pending review
              - reviewed
              - pending trigger
              - stored procedure
              - pending status change
              - status changed
              - pending update
              - non employee updated
              - non employee created
              - pending creation
              - rejected
              - pending assignment
              - assigned
              - default
              - failed
              - un assigned
              - auto assigned
              - ldap provided
              - pending ldap
              - pending fulfillment
              - pending stored procedure
              - pending courion add
              - fulfilled
              - pending courion update
              - courion add
              - pending courion_extend
              - courion update
              - pending courion terminate
              - courion extend
              - pending profile select
              - courion terminate
              - batch completed
              - profiles selected
              - answered questions
              - pending questions
              - attempting to start workflow
              - started workflow
              - profile check complete
              - completed
              - processing
              - pending set attribute
              - invitation sent
              - action skipped
              - api request sent
              - attribute set
              - disabled
              - duplicates resolved
              - soap request sent
              - checking for duplicates
              - pending identity proofing
              - closed
              - workflow changed
            example: pending approval
        - name: metadata
          in: query
          description: Returns batching metadata in the response. This includes `total` as the total quantity, `next` as the path of the following query url, `limit` and `after_id` (if requested) with the next following id (null if it is the last "page").
          required: false
          schema:
            type: boolean
            default: false
            example: true
      responses:
        '200':
          description: Expected response to a valid request
          content:
            application/json:
              schema:
                type: object
                properties:
                  workflow_sessions:
                    type: array
                    items:
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
                  _metadata:
                    type: object
                    properties:
                      limit:
                        type: integer
                      offset:
                        type: integer
                      total:
                        type: integer
                      next:
                        type: string
                        example: /endpoint?limit=10&offset=60
                      previous:
                        type: string
                        example: /endpoint?limit=10&offset=40
                    title: Metadata
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
