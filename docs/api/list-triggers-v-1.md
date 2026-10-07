## OpenAPI

```yaml GET /triggers/v1
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
  /triggers/v1:
    get:
      description: Gets a list of triggers that are available in the tenant.
      operationId: listTriggersV1
      security:
        - userAuth:
            - sp:trigger-service-subscriptions:read
        - applicationAuth:
            - sp:trigger-service-subscriptions:read
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
          name: filters
          required: false
          schema:
            type: string
          description: |-
            Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)

            Filtering is supported for the following fields and operators:

            **id**: *eq, ge, le*
          example: id eq "idn:access-request-post-approval"
        - in: query
          name: sorters
          required: false
          schema:
            type: string
            format: comma-separated
          description: |-
            Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)

            Sorting is supported for the following fields: **id, name**
          example: name
      responses:
        '200':
          description: List of triggers.
          content:
            application/json:
              schema:
                type: array
                items:
                  type: object
                  title: Trigger
                  required:
                    - id
                    - name
                    - type
                    - inputSchema
                    - exampleInput
                  properties:
                    id:
                      type: string
                      description: Unique identifier of the trigger.
                      example: idn:access-request-dynamic-approver
                    name:
                      type: string
                      description: Trigger Name.
                      example: Access Request Dynamic Approver
                    type:
                      example: REQUEST_RESPONSE
                      type: string
                      description: The type of trigger.
                      enum:
                        - REQUEST_RESPONSE
                        - FIRE_AND_FORGET
                      title: triggertype
                    description:
                      type: string
                      description: Trigger Description.
                      example: Trigger for getting a dynamic approver.
                    inputSchema:
                      type: string
                      description: The JSON schema of the payload that will be sent by the trigger to the subscribed service.
                      example: '{"definitions":{"record:AccessRequestDynamicApproverInput":{"type":"object","required":["accessRequestId","requestedFor","requestedItems","requestedBy"],"additionalProperties":true,"properties":{"accessRequestId":{"type":"string"},"requestedFor":{"$ref":"#/definitions/record:requestedForIdentityRef"},"requestedItems":{"type":"array","items":{"$ref":"#/definitions/record:requestedObjectRef"}},"requestedBy":{"$ref":"#/definitions/record:requestedByIdentityRef"}}},"record:requestedForIdentityRef":{"type":"object","required":["id","name","type"],"additionalProperties":true,"properties":{"id":{"type":"string"},"name":{"type":"string"},"type":{"type":"string"}}},"record:requestedObjectRef":{"type":"object","optional":["description","comment"],"required":["id","name","type","operation"],"additionalProperties":true,"properties":{"id":{"type":"string"},"name":{"type":"string"},"description":{"oneOf":[{"type":"null"},{"type":"string"}]},"type":{"type":"string"},"operation":{"type":"string"},"comment":{"oneOf":[{"type":"null"},{"type":"string"}]}}},"record:requestedByIdentityRef":{"type":"object","required":["type","id","name"],"additionalProperties":true,"properties":{"type":{"type":"string"},"id":{"type":"string"},"name":{"type":"string"}}}},"$ref":"#/definitions/record:AccessRequestDynamicApproverInput"}'
                    exampleInput:
                      description: An example of the JSON payload that will be sent by the trigger to the subscribed service.
                      oneOf:
                        - title: Access Request Dynamic Approver
                          type: object
                          required:
                            - accessRequestId
                            - requestedFor
                            - requestedItems
                            - requestedBy
                          properties:
                            accessRequestId:
                              type: string
                              description: |
                                The unique ID of the access request object. Can be used with the [access request status endpoint](https://developer.sailpoint.com/docs/api/list-access-request-status-v-1) to get the status of the request.
                              example: 4b4d982dddff4267ab12f0f1e72b5a6d
                            requestedFor:
                              type: array
                              description: Identities access was requested for.
                              items:
                                type: object
                                description: Identity the access item is requested for.
                                properties:
                                  type:
                                    type: string
                                    description: DTO type of identity the access item is requested for.
                                    enum:
                                      - IDENTITY
                                    example: IDENTITY
                                  id:
                                    type: string
                                    description: ID of identity the access item is requested for.
                                    example: 2c4180a46faadee4016fb4e018c20626
                                  name:
                                    type: string
                                    description: Human-readable display name of identity the access item is requested for.
                                    example: Robert Robinson
                                title: accessitemrequestedfordto
                              minItems: 1
                              maxItems: 10
                            requestedItems:
                              description: The access items that are being requested.
                              type: array
                              items:
                                type: object
                                required:
                                  - id
                                  - name
                                  - type
                                  - operation
                                properties:
                                  id:
                                    type: string
                                    description: The unique ID of the access item.
                                    example: 2c91808b6ef1d43e016efba0ce470904
                                  name:
                                    type: string
                                    description: Human friendly name of the access item.
                                    example: Engineering Access
                                  description:
                                    nullable: true
                                    type: string
                                    description: Extended description of the access item.
                                    example: Engineering Access
                                  type:
                                    enum:
                                      - ACCESS_PROFILE
                                      - ROLE
                                      - ENTITLEMENT
                                    description: The type of access item being requested.
                                    example: ACCESS_PROFILE
                                  operation:
                                    enum:
                                      - Add
                                      - Remove
                                    description: Grant or revoke the access item
                                    example: Add
                                  comment:
                                    nullable: true
                                    type: string
                                    description: A comment from the requestor on why the access is needed.
                                    example: William needs this access for his day to day job activities.
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
                                        description: Completed form data for this requested item when the access item has an associated form.
                              minItems: 1
                              maxItems: 25
                            requestedBy:
                              allOf:
                                - type: object
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
                                  title: accessitemrequesterdto
                        - title: Access Request Post Approval
                          type: object
                          required:
                            - accessRequestId
                            - requestedFor
                            - requestedItemsStatus
                            - requestedBy
                          properties:
                            accessRequestId:
                              type: string
                              description: The unique ID of the access request.
                              example: 2c91808b6ef1d43e016efba0ce470904
                            requestedFor:
                              required:
                                - id
                                - type
                                - name
                              type: array
                              description: Identities access was requested for.
                              items:
                                type: object
                                description: Identity the access item is requested for.
                                properties:
                                  type:
                                    type: string
                                    description: DTO type of identity the access item is requested for.
                                    enum:
                                      - IDENTITY
                                    example: IDENTITY
                                  id:
                                    type: string
                                    description: ID of identity the access item is requested for.
                                    example: 2c4180a46faadee4016fb4e018c20626
                                  name:
                                    type: string
                                    description: Human-readable display name of identity the access item is requested for.
                                    example: Robert Robinson
                                title: accessitemrequestedfordto
                              minItems: 1
                              maxItems: 10
                            requestedItemsStatus:
                              description: Details on the outcome of each access item.
                              type: array
                              items:
                                type: object
                                required:
                                  - id
                                  - name
                                  - type
                                  - operation
                                  - approvalInfo
                                properties:
                                  id:
                                    type: string
                                    description: The unique ID of the access item being requested.
                                    example: 2c91808b6ef1d43e016efba0ce470904
                                  name:
                                    type: string
                                    description: The human friendly name of the access item.
                                    example: Engineering Access
                                  description:
                                    nullable: true
                                    type: string
                                    description: Detailed description of the access item.
                                    example: Access to engineering database
                                  type:
                                    enum:
                                      - ACCESS_PROFILE
                                      - ROLE
                                      - ENTITLEMENT
                                    description: The type of access item.
                                    example: ACCESS_PROFILE
                                  operation:
                                    enum:
                                      - Add
                                      - Remove
                                    description: The action to perform on the access item.
                                    example: Add
                                  comment:
                                    nullable: true
                                    type: string
                                    description: A comment from the identity requesting the access.
                                    example: William needs this access to do his job.
                                  clientMetadata:
                                    description: Additional customer defined metadata about the access item.
                                    nullable: true
                                    type: object
                                    additionalProperties: true
                                    example:
                                      applicationName: My application
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
                                        description: Completed form data for this requested item when the access item has an associated form.
                                  approvalInfo:
                                    description: A list of one or more approvers for the access request.
                                    type: array
                                    items:
                                      type: object
                                      required:
                                        - approvalDecision
                                        - approverName
                                        - approver
                                      properties:
                                        approvalComment:
                                          nullable: true
                                          type: string
                                          description: A comment left by the approver.
                                          example: This access looks good.  Approved.
                                        approvalDecision:
                                          enum:
                                            - APPROVED
                                            - DENIED
                                          description: The final decision of the approver.
                                          example: APPROVED
                                        approverName:
                                          type: string
                                          description: The name of the approver
                                          example: Stephen.Austin
                                        approver:
                                          required:
                                            - id
                                            - type
                                            - name
                                          allOf:
                                            - type: object
                                              description: Identity who approved the access item request.
                                              properties:
                                                type:
                                                  type: string
                                                  description: DTO type of identity who approved the access item request.
                                                  enum:
                                                    - IDENTITY
                                                  example: IDENTITY
                                                id:
                                                  type: string
                                                  description: ID of identity who approved the access item request.
                                                  example: 2c3780a46faadee4016fb4e018c20652
                                                name:
                                                  type: string
                                                  description: Human-readable display name of identity who approved the access item request.
                                                  example: Allen Albertson
                                              title: accessitemapproverdto
                                          description: The identity of the approver.
                                          properties:
                                            type:
                                              enum:
                                                - IDENTITY
                                              example: IDENTITY
                                              description: The type of object that is referenced
                            requestedBy:
                              required:
                                - id
                                - type
                                - name
                              allOf:
                                - type: object
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
                                  title: accessitemrequesterdto
                        - title: Access Request Pre Approval
                          type: object
                          required:
                            - accessRequestId
                            - requestedFor
                            - requestedItems
                            - requestedBy
                          properties:
                            accessRequestId:
                              type: string
                              description: The unique ID of the access request.
                              example: 2c91808b6ef1d43e016efba0ce470904
                            requestedFor:
                              required:
                                - id
                                - type
                                - name
                              type: array
                              description: Identities access was requested for.
                              items:
                                type: object
                                description: Identity the access item is requested for.
                                properties:
                                  type:
                                    type: string
                                    description: DTO type of identity the access item is requested for.
                                    enum:
                                      - IDENTITY
                                    example: IDENTITY
                                  id:
                                    type: string
                                    description: ID of identity the access item is requested for.
                                    example: 2c4180a46faadee4016fb4e018c20626
                                  name:
                                    type: string
                                    description: Human-readable display name of identity the access item is requested for.
                                    example: Robert Robinson
                                title: accessitemrequestedfordto
                              minItems: 1
                              maxItems: 10
                            requestedItems:
                              description: Details of the access items being requested.
                              type: array
                              items:
                                type: object
                                required:
                                  - id
                                  - name
                                  - type
                                  - operation
                                properties:
                                  id:
                                    type: string
                                    description: The unique ID of the access item being requested.
                                    example: 2c91808b6ef1d43e016efba0ce470904
                                  name:
                                    type: string
                                    description: The human friendly name of the access item.
                                    example: Engineering Access
                                  description:
                                    nullable: true
                                    type: string
                                    description: Detailed description of the access item.
                                    example: Access to engineering database
                                  type:
                                    enum:
                                      - ACCESS_PROFILE
                                      - ROLE
                                      - ENTITLEMENT
                                    description: The type of access item.
                                    example: ACCESS_PROFILE
                                  operation:
                                    enum:
                                      - Add
                                      - Remove
                                    description: The action to perform on the access item.
                                    example: Add
                                  comment:
                                    nullable: true
                                    type: string
                                    description: A comment from the identity requesting the access.
                                    example: William needs this access to do his job.
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
                                        description: Completed form data for this requested item when the access item has an associated form.
                              minItems: 1
                              maxItems: 25
                            requestedBy:
                              required:
                                - id
                                - type
                                - name
                              allOf:
                                - type: object
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
                                  title: accessitemrequesterdto
                        - title: Account Aggregation Completed
                          type: object
                          required:
                            - source
                            - status
                            - started
                            - completed
                            - errors
                            - warnings
                            - stats
                          properties:
                            source:
                              required:
                                - type
                                - name
                                - id
                              type: object
                              description: The source the accounts are being aggregated from.
                              properties:
                                type:
                                  type: string
                                  description: The DTO type of the source the accounts are being aggregated from.
                                  enum:
                                    - SOURCE
                                  example: SOURCE
                                id:
                                  type: string
                                  description: The ID of the source the accounts are being aggregated from.
                                  example: 2c9180835d191a86015d28455b4b232a
                                name:
                                  type: string
                                  description: Display name of the source the accounts are being aggregated from.
                                  example: HR Active Directory
                            status:
                              description: The overall status of the aggregation.
                              enum:
                                - Success
                                - Failed
                                - Terminated
                              example: Success
                            started:
                              type: string
                              format: date-time
                              description: The date and time when the account aggregation started.
                              example: '2020-06-29T22:01:50.474Z'
                            completed:
                              type: string
                              format: date-time
                              description: The date and time when the account aggregation finished.
                              example: '2020-06-29T22:02:04.090Z'
                            errors:
                              nullable: true
                              description: A list of errors that occurred during the aggregation.
                              type: array
                              items:
                                type: string
                                description: A descriptive error message.
                                example: Accounts unable to be aggregated.
                            warnings:
                              nullable: true
                              description: A list of warnings that occurred during the aggregation.
                              type: array
                              items:
                                type: string
                                description: A descriptive warning message.
                                example: Account Skipped
                            stats:
                              type: object
                              description: Overall statistics about the account aggregation.
                              required:
                                - scanned
                                - unchanged
                                - changed
                                - added
                                - removed
                              properties:
                                scanned:
                                  type: integer
                                  format: int32
                                  minimum: 0
                                  maximum: 2147483647
                                  description: The number of accounts which were scanned / iterated over.
                                  example: 200
                                unchanged:
                                  type: integer
                                  format: int32
                                  minimum: 0
                                  maximum: 2147483647
                                  description: The number of accounts which existed before, but had no changes.
                                  example: 190
                                changed:
                                  type: integer
                                  format: int32
                                  minimum: 0
                                  maximum: 2147483647
                                  description: The number of accounts which existed before, but had changes.
                                  example: 6
                                added:
                                  type: integer
                                  format: int32
                                  minimum: 0
                                  maximum: 2147483647
                                  description: The number of accounts which are new - have not existed before.
                                  example: 4
                                removed:
                                  type: integer
                                  minimum: 0
                                  maximum: 2147483647
                                  format: int32
                                  description: The number accounts which existed before, but no longer exist (thus getting removed).
                                  example: 3
                        - title: Account Attributes Changed
                          type: object
                          required:
                            - identity
                            - source
                            - account
                            - changes
                          properties:
                            identity:
                              required:
                                - id
                                - type
                                - name
                              type: object
                              description: The identity whose account attributes were updated.
                              properties:
                                type:
                                  type: string
                                  description: DTO type of the identity whose account attributes were updated.
                                  enum:
                                    - IDENTITY
                                  example: IDENTITY
                                id:
                                  type: string
                                  description: ID of the identity whose account attributes were updated.
                                  example: 2c7180a46faadee4016fb4e018c20642
                                name:
                                  type: string
                                  description: Display name of the identity whose account attributes were updated.
                                  example: Michael Michaels
                            source:
                              required:
                                - id
                                - type
                                - name
                              type: object
                              description: The source that contains the account.
                              properties:
                                id:
                                  description: ID of the object to which this reference applies
                                  type: string
                                  example: 4e4d982dddff4267ab12f0f1e72b5a6d
                                type:
                                  type: string
                                  enum:
                                    - SOURCE
                                  example: SOURCE
                                  description: The type of object that is referenced
                                name:
                                  type: string
                                  description: Human-readable display name of the object to which this reference applies
                                  example: Corporate Active Directory
                            account:
                              type: object
                              description: Details of the account where the attributes changed.
                              required:
                                - id
                                - uuid
                                - name
                                - nativeIdentity
                                - type
                              properties:
                                id:
                                  type: string
                                  description: SailPoint generated unique identifier.
                                  example: 52170a74-ca89-11ea-87d0-0242ac130003
                                uuid:
                                  nullable: true
                                  type: string
                                  description: The source's unique identifier for the account. UUID is generated by the source system.
                                  example: 1cb1f07d-3e5a-4431-becd-234fa4306108
                                name:
                                  type: string
                                  description: Name of the account.
                                  example: john.doe
                                nativeIdentity:
                                  type: string
                                  description: Unique ID of the account on the source.
                                  example: cn=john.doe,ou=users,dc=acme,dc=com
                                type:
                                  enum:
                                    - ACCOUNT
                                  description: The type of the account
                                  example: ACCOUNT
                            changes:
                              type: array
                              description: A list of attributes that changed.
                              items:
                                type: object
                                required:
                                  - attribute
                                  - oldValue
                                  - newValue
                                properties:
                                  attribute:
                                    type: string
                                    description: The name of the attribute.
                                    example: sn
                                  oldValue:
                                    description: The previous value of the attribute.
                                    nullable: true
                                    oneOf:
                                      - type: string
                                      - type: boolean
                                      - type: array
                                        items:
                                          nullable: true
                                          type: string
                                    example: doe
                                  newValue:
                                    description: The new value of the attribute.
                                    nullable: true
                                    oneOf:
                                      - type: string
                                      - type: boolean
                                      - type: array
                                        items:
                                          nullable: true
                                          type: string
                                    example: ryans
                        - title: Account Correlated
                          type: object
                          required:
                            - identity
                            - source
                            - account
                            - attributes
                          properties:
                            identity:
                              required:
                                - type
                                - name
                                - id
                              type: object
                              description: Identity the account is correlated with.
                              properties:
                                type:
                                  type: string
                                  description: DTO type of the identity the account is correlated with.
                                  enum:
                                    - IDENTITY
                                  example: IDENTITY
                                id:
                                  type: string
                                  description: ID of the identity the account is correlated with.
                                  example: 2c7180a46faadee4016fb4e018c20642
                                name:
                                  type: string
                                  description: Display name of the identity the account is correlated with.
                                  example: Michael Michaels
                            source:
                              required:
                                - id
                                - type
                                - name
                              type: object
                              description: The source the accounts are being correlated from.
                              properties:
                                type:
                                  type: string
                                  description: The DTO type of the source the accounts are being correlated from.
                                  enum:
                                    - SOURCE
                                  example: SOURCE
                                id:
                                  type: string
                                  description: The ID of the source the accounts are being correlated from.
                                  example: 2c9180835d191a86015d28455b4b232a
                                name:
                                  type: string
                                  description: Display name of the source the accounts are being correlated from.
                                  example: HR Active Directory
                            account:
                              type: object
                              description: The correlated account.
                              required:
                                - id
                                - name
                                - nativeIdentity
                                - type
                              properties:
                                type:
                                  type: string
                                  description: The correlated account's DTO type.
                                  enum:
                                    - ACCOUNT
                                  example: ACCOUNT
                                id:
                                  type: string
                                  description: The correlated account's ID.
                                  example: 98da47c31df444558c211f9b205184f6
                                name:
                                  type: string
                                  description: The correlated account's display name.
                                  example: Brian Mendoza
                                nativeIdentity:
                                  type: string
                                  description: Unique ID of the account on the source.
                                  example: cn=john.doe,ou=users,dc=acme,dc=com
                                uuid:
                                  nullable: true
                                  type: string
                                  description: The source's unique identifier for the account. UUID is generated by the source system.
                                  example: 1cb1f07d-3e5a-4431-becd-234fa4306108
                            attributes:
                              type: object
                              description: The attributes associated with the account.  Attributes are unique per source.
                              additionalProperties: true
                              example:
                                sn: doe
                                givenName: john
                                memberOf:
                                  - cn=g1,ou=groups,dc=acme,dc=com
                                  - cn=g2,ou=groups,dc=acme,dc=com
                                  - cn=g3,ou=groups,dc=acme,dc=com
                            entitlementCount:
                              type: integer
                              format: int32
                              description: The number of entitlements associated with this account.
                              example: 0
                        - title: Accounts Collected for Aggregation
                          type: object
                          required:
                            - source
                            - status
                            - started
                            - completed
                            - errors
                            - warnings
                            - stats
                          properties:
                            source:
                              required:
                                - id
                                - type
                                - name
                              type: object
                              description: Reference to the source that has been aggregated.
                              properties:
                                id:
                                  description: ID of the object to which this reference applies
                                  type: string
                                  example: 4e4d982dddff4267ab12f0f1e72b5a6d
                                type:
                                  type: string
                                  enum:
                                    - SOURCE
                                  example: SOURCE
                                  description: The type of object that is referenced
                                name:
                                  type: string
                                  description: Human-readable display name of the object to which this reference applies
                                  example: Corporate Active Directory
                            status:
                              description: The overall status of the collection.
                              enum:
                                - Success
                                - Failed
                                - Terminated
                              example: Success
                            started:
                              type: string
                              format: date-time
                              description: The date and time when the account collection started.
                              example: '2020-06-29T22:01:50.474Z'
                            completed:
                              type: string
                              format: date-time
                              description: The date and time when the account collection finished.
                              example: '2020-06-29T22:02:04.090Z'
                            errors:
                              nullable: true
                              description: A list of errors that occurred during the collection.
                              type: array
                              items:
                                type: string
                                description: A descriptive error message.
                                example: Unable to collect accounts for aggregation.
                            warnings:
                              nullable: true
                              description: A list of warnings that occurred during the collection.
                              type: array
                              items:
                                type: string
                                description: A descriptive warning message.
                                example: Account Skipped
                            stats:
                              type: object
                              description: Overall statistics about the account collection.
                              required:
                                - scanned
                                - unchanged
                                - changed
                                - added
                                - removed
                              properties:
                                scanned:
                                  type: integer
                                  format: int32
                                  minimum: 0
                                  maximum: 2147483647
                                  description: The number of accounts which were scanned / iterated over.
                                  example: 200
                                unchanged:
                                  type: integer
                                  format: int32
                                  minimum: 0
                                  maximum: 2147483647
                                  description: The number of accounts which existed before, but had no changes.
                                  example: 190
                                changed:
                                  type: integer
                                  format: int32
                                  minimum: 0
                                  maximum: 2147483647
                                  description: The number of accounts which existed before, but had changes.
                                  example: 6
                                added:
                                  type: integer
                                  format: int32
                                  minimum: 0
                                  maximum: 2147483647
                                  description: The number of accounts which are new - have not existed before.
                                  example: 4
                                removed:
                                  type: integer
                                  minimum: 0
                                  maximum: 2147483647
                                  format: int32
                                  description: The number accounts which existed before, but no longer exist (thus getting removed).
                                  example: 3
                        - title: Account Created
                          type: object
                          required:
                            - event
                            - source
                            - account
                            - identity
                          properties:
                            event:
                              type: object
                              description: Details about the event.
                              required:
                                - type
                                - cause
                              properties:
                                type:
                                  type: string
                                  description: The type of event.
                                  enum:
                                    - ACCOUNT_CREATED_V2
                                  example: ACCOUNT_CREATED_V2
                                cause:
                                  type: string
                                  description: The cause of the event.
                                  enum:
                                    - AGGREGATION
                                    - PROVISIONING
                                  example: AGGREGATION
                            source:
                              type: object
                              description: Details about the account source.
                              required:
                                - id
                                - name
                                - alias
                                - owner
                                - governanceGroup
                              properties:
                                id:
                                  type: string
                                  description: The unique ID of the source.
                                  example: 2c918082814e693601816e09471b29b6
                                name:
                                  type: string
                                  description: The name of the source.
                                  example: Active Directory
                                alias:
                                  type: string
                                  description: The alias of the source.
                                  example: AD
                                owner:
                                  type: object
                                  description: Details about the owner of the source.
                                  required:
                                    - id
                                    - name
                                  properties:
                                    id:
                                      type: string
                                      description: ID of the source owner.
                                      example: owner-123
                                    name:
                                      type: string
                                      description: Name of the source owner.
                                      example: owner-name
                                governanceGroup:
                                  type: object
                                  description: Details about the governance group of the source.
                                  required:
                                    - id
                                    - name
                                  properties:
                                    id:
                                      type: string
                                      description: ID of the governance group.
                                      example: group-456
                                    name:
                                      type: string
                                      description: Name of the governance group.
                                      example: governance-group-name
                              title: accountsourcereference
                            account:
                              type: object
                              description: Details about the account.
                              required:
                                - id
                                - name
                                - nativeIdentity
                                - uuid
                                - correlated
                                - isMachine
                                - origin
                                - attributes
                              properties:
                                id:
                                  type: string
                                  description: The unique identifier of the account.
                                  example: 2c9180835d2e5168015d32f890ca1581
                                name:
                                  type: string
                                  description: The name of the account.
                                  example: john.doe
                                nativeIdentity:
                                  type: string
                                  description: The unique ID of the account generated by the source system.
                                  example: CN=John Doe,OU=Austin,OU=Americas,OU=Demo,DC=seri,DC=acme,DC=com
                                uuid:
                                  type: string
                                  description: The unique ID associated with this account.
                                  nullable: true
                                  example: b7264868-7201-415f-9118-b581d431c688
                                correlated:
                                  type: boolean
                                  description: Indicates if the account is correlated to an identity.
                                  example: true
                                isMachine:
                                  type: boolean
                                  description: Indicates if the account is a machine account.
                                  example: false
                                origin:
                                  type: string
                                  description: The origin of the account.
                                  nullable: true
                                  example: Active Directory
                                attributes:
                                  type: object
                                  description: The attributes of the account. The contents of attributes depends on the account schema for the source.
                                  nullable: true
                                  additionalProperties: true
                                  example:
                                    firstname: John
                                    lastname: Doe
                              title: accountv2
                            identity:
                              type: object
                              description: Details about the identity correlated with the account.
                              required:
                                - id
                                - name
                                - alias
                                - email
                              properties:
                                id:
                                  type: string
                                  description: The ID of the identity that is correlated with this account.
                                  example: ee769173319b41d19ccec6c235423237b
                                name:
                                  type: string
                                  description: The name of the identity that is correlated with this account.
                                  example: john.doe
                                alias:
                                  type: string
                                  description: The alias of the identity.
                                  example: jdoe
                                email:
                                  type: string
                                  description: The email of the identity.
                                  example: john.doe@email.com
                              title: identityreference-2
                        - title: Account Uncorrelated
                          type: object
                          required:
                            - identity
                            - source
                            - account
                          properties:
                            identity:
                              required:
                                - type
                                - name
                                - id
                              type: object
                              description: Identity the account is uncorrelated with.
                              properties:
                                type:
                                  type: string
                                  description: DTO type of the identity the account is uncorrelated with.
                                  enum:
                                    - IDENTITY
                                  example: IDENTITY
                                id:
                                  type: string
                                  description: ID of the identity the account is uncorrelated with.
                                  example: 2c3780a46faadee4016fb4e018c20652
                                name:
                                  type: string
                                  description: Display name of the identity the account is uncorrelated with.
                                  example: Allen Albertson
                            source:
                              required:
                                - type
                                - name
                                - id
                              type: object
                              description: The source the accounts are uncorrelated from.
                              properties:
                                type:
                                  type: string
                                  description: The DTO type of the source the accounts are uncorrelated from.
                                  enum:
                                    - SOURCE
                                  example: SOURCE
                                id:
                                  type: string
                                  description: The ID of the source the accounts are uncorrelated from.
                                  example: 2c6180835d191a86015d28455b4b231b
                                name:
                                  type: string
                                  description: Display name of the source the accounts are uncorrelated from.
                                  example: Corporate Directory
                            account:
                              type: object
                              description: Uncorrelated account.
                              required:
                                - id
                                - name
                                - nativeIdentity
                                - type
                              properties:
                                type:
                                  enum:
                                    - ACCOUNT
                                  description: Uncorrelated account's DTO type.
                                  example: ACCOUNT
                                id:
                                  type: string
                                  description: Uncorrelated account's ID.
                                  example: 4dd497e3723e439991cb6d0e478375dd
                                name:
                                  type: string
                                  description: Uncorrelated account's display name.
                                  example: Sadie Jensen
                                nativeIdentity:
                                  type: string
                                  description: Unique ID of the account on the source.
                                  example: cn=john.doe,ou=users,dc=acme,dc=com
                                uuid:
                                  nullable: true
                                  type: string
                                  description: The source's unique identifier for the account. UUID is generated by the source system.
                                  example: 1cb1f07d-3e5a-4431-becd-234fa4306108
                            entitlementCount:
                              type: integer
                              format: int32
                              description: The number of entitlements associated with this account.
                              example: 0
                        - title: Account Deleted
                          type: object
                          required:
                            - event
                            - source
                            - account
                            - identity
                          properties:
                            event:
                              type: object
                              description: Details about the event.
                              required:
                                - type
                                - cause
                              properties:
                                type:
                                  type: string
                                  description: The type of event.
                                  enum:
                                    - ACCOUNT_DELETED_V2
                                  example: ACCOUNT_DELETED_V2
                                cause:
                                  type: string
                                  description: The cause of the event.
                                  enum:
                                    - AGGREGATION
                                    - PROVISIONING
                                  example: AGGREGATION
                            source:
                              type: object
                              description: Details about the account source.
                              required:
                                - id
                                - name
                                - alias
                                - owner
                                - governanceGroup
                              properties:
                                id:
                                  type: string
                                  description: The unique ID of the source.
                                  example: 2c918082814e693601816e09471b29b6
                                name:
                                  type: string
                                  description: The name of the source.
                                  example: Active Directory
                                alias:
                                  type: string
                                  description: The alias of the source.
                                  example: AD
                                owner:
                                  type: object
                                  description: Details about the owner of the source.
                                  required:
                                    - id
                                    - name
                                  properties:
                                    id:
                                      type: string
                                      description: ID of the source owner.
                                      example: owner-123
                                    name:
                                      type: string
                                      description: Name of the source owner.
                                      example: owner-name
                                governanceGroup:
                                  type: object
                                  description: Details about the governance group of the source.
                                  required:
                                    - id
                                    - name
                                  properties:
                                    id:
                                      type: string
                                      description: ID of the governance group.
                                      example: group-456
                                    name:
                                      type: string
                                      description: Name of the governance group.
                                      example: governance-group-name
                              title: accountsourcereference
                            account:
                              type: object
                              description: Details about the account.
                              required:
                                - id
                                - name
                                - nativeIdentity
                                - uuid
                                - correlated
                                - isMachine
                                - origin
                                - attributes
                              properties:
                                id:
                                  type: string
                                  description: The unique identifier of the account.
                                  example: 2c9180835d2e5168015d32f890ca1581
                                name:
                                  type: string
                                  description: The name of the account.
                                  example: john.doe
                                nativeIdentity:
                                  type: string
                                  description: The unique ID of the account generated by the source system.
                                  example: CN=John Doe,OU=Austin,OU=Americas,OU=Demo,DC=seri,DC=acme,DC=com
                                uuid:
                                  type: string
                                  description: The unique ID associated with this account.
                                  nullable: true
                                  example: b7264868-7201-415f-9118-b581d431c688
                                correlated:
                                  type: boolean
                                  description: Indicates if the account is correlated to an identity.
                                  example: true
                                isMachine:
                                  type: boolean
                                  description: Indicates if the account is a machine account.
                                  example: false
                                origin:
                                  type: string
                                  description: The origin of the account.
                                  nullable: true
                                  example: Active Directory
                                attributes:
                                  type: object
                                  description: The attributes of the account. The contents of attributes depends on the account schema for the source.
                                  nullable: true
                                  additionalProperties: true
                                  example:
                                    firstname: John
                                    lastname: Doe
                              title: accountv2
                            identity:
                              type: object
                              description: Details about the identity correlated with the account.
                              required:
                                - id
                                - name
                                - alias
                                - email
                              properties:
                                id:
                                  type: string
                                  description: The ID of the identity that is correlated with this account.
                                  example: ee769173319b41d19ccec6c235423237b
                                name:
                                  type: string
                                  description: The name of the identity that is correlated with this account.
                                  example: john.doe
                                alias:
                                  type: string
                                  description: The alias of the identity.
                                  example: jdoe
                                email:
                                  type: string
                                  description: The email of the identity.
                                  example: john.doe@email.com
                              title: identityreference-2
                        - title: Account Updated
                          type: object
                          required:
                            - event
                            - source
                            - account
                            - identity
                            - accountChangeTypes
                            - singleValueAttributeChanges
                            - multiValueAttributeChanges
                            - entitlementChanges
                          properties:
                            event:
                              type: object
                              description: Details about the event.
                              required:
                                - type
                                - cause
                              properties:
                                type:
                                  type: string
                                  description: The type of event.
                                  enum:
                                    - ACCOUNT_UPDATED_V2
                                  example: ACCOUNT_UPDATED_V2
                                cause:
                                  type: string
                                  description: The cause of the event.
                                  enum:
                                    - AGGREGATION
                                    - PROVISIONING
                                    - PASSWORD_CHANGE
                                  example: AGGREGATION
                            source:
                              type: object
                              description: Details about the account source.
                              required:
                                - id
                                - name
                                - alias
                                - owner
                                - governanceGroup
                              properties:
                                id:
                                  type: string
                                  description: The unique ID of the source.
                                  example: 2c918082814e693601816e09471b29b6
                                name:
                                  type: string
                                  description: The name of the source.
                                  example: Active Directory
                                alias:
                                  type: string
                                  description: The alias of the source.
                                  example: AD
                                owner:
                                  type: object
                                  description: Details about the owner of the source.
                                  required:
                                    - id
                                    - name
                                  properties:
                                    id:
                                      type: string
                                      description: ID of the source owner.
                                      example: owner-123
                                    name:
                                      type: string
                                      description: Name of the source owner.
                                      example: owner-name
                                governanceGroup:
                                  type: object
                                  description: Details about the governance group of the source.
                                  required:
                                    - id
                                    - name
                                  properties:
                                    id:
                                      type: string
                                      description: ID of the governance group.
                                      example: group-456
                                    name:
                                      type: string
                                      description: Name of the governance group.
                                      example: governance-group-name
                              title: accountsourcereference
                            account:
                              type: object
                              description: Details about the account.
                              required:
                                - id
                                - name
                                - nativeIdentity
                                - uuid
                                - correlated
                                - isMachine
                                - origin
                                - attributes
                              properties:
                                id:
                                  type: string
                                  description: The unique identifier of the account.
                                  example: 2c9180835d2e5168015d32f890ca1581
                                name:
                                  type: string
                                  description: The name of the account.
                                  example: john.doe
                                nativeIdentity:
                                  type: string
                                  description: The unique ID of the account generated by the source system.
                                  example: CN=John Doe,OU=Austin,OU=Americas,OU=Demo,DC=seri,DC=acme,DC=com
                                uuid:
                                  type: string
                                  description: The unique ID associated with this account.
                                  nullable: true
                                  example: b7264868-7201-415f-9118-b581d431c688
                                correlated:
                                  type: boolean
                                  description: Indicates if the account is correlated to an identity.
                                  example: true
                                isMachine:
                                  type: boolean
                                  description: Indicates if the account is a machine account.
                                  example: false
                                origin:
                                  type: string
                                  description: The origin of the account.
                                  nullable: true
                                  example: Active Directory
                                attributes:
                                  type: object
                                  description: The attributes of the account. The contents of attributes depends on the account schema for the source.
                                  nullable: true
                                  additionalProperties: true
                                  example:
                                    firstname: John
                                    lastname: Doe
                              title: accountv2
                            identity:
                              type: object
                              description: Details about the identity correlated with the account.
                              required:
                                - id
                                - name
                                - alias
                                - email
                              properties:
                                id:
                                  type: string
                                  description: The ID of the identity that is correlated with this account.
                                  example: ee769173319b41d19ccec6c235423237b
                                name:
                                  type: string
                                  description: The name of the identity that is correlated with this account.
                                  example: john.doe
                                alias:
                                  type: string
                                  description: The alias of the identity.
                                  example: jdoe
                                email:
                                  type: string
                                  description: The email of the identity.
                                  example: john.doe@email.com
                              title: identityreference-2
                            accountChangeTypes:
                              type: array
                              description: The types of changes that occurred to the account.
                              items:
                                type: string
                                enum:
                                  - ATTRIBUTES_CHANGED
                                  - ENTITLEMENTS_ADDED
                                  - ENTITLEMENTS_REMOVED
                                example: ATTRIBUTES_CHANGED
                            singleValueAttributeChanges:
                              type: array
                              description: Details about the single-value attribute changes that occurred to the account.
                              nullable: true
                              items:
                                type: object
                                required:
                                  - name
                                  - oldValue
                                  - newValue
                                properties:
                                  name:
                                    type: string
                                    description: The name of the attribute that was changed.
                                    example: displayName
                                  oldValue:
                                    description: The old value of the attribute before the change.
                                    nullable: true
                                    oneOf:
                                      - type: string
                                      - type: boolean
                                      - type: number
                                      - type: array
                                        items:
                                          type: string
                                        nullable: true
                                    example: John Doe
                                  newValue:
                                    description: The new value of the attribute after the change.
                                    nullable: true
                                    oneOf:
                                      - type: string
                                      - type: boolean
                                      - type: number
                                      - type: array
                                        items:
                                          type: string
                                        nullable: true
                                    example: John A. Doe
                            multiValueAttributeChanges:
                              type: array
                              nullable: true
                              description: Details about the multi-value attribute changes that occurred to the account.
                              items:
                                type: object
                                required:
                                  - name
                                  - addedValues
                                  - removedValues
                                properties:
                                  name:
                                    type: string
                                    description: The name of the attribute that was changed.
                                    example: memberOf
                                  addedValues:
                                    type: array
                                    description: The values that were added to the attribute.
                                    items:
                                      oneOf:
                                        - type: string
                                        - type: boolean
                                        - type: number
                                        - type: array
                                          items:
                                            type: string
                                          nullable: true
                                    example:
                                      - CN=Sales,OU=Groups,DC=acme,DC=com
                                      - CN=AllEmployees,OU=Groups,DC=acme,DC=com
                                  removedValues:
                                    type: array
                                    description: The values that were removed from the attribute.
                                    items:
                                      oneOf:
                                        - type: string
                                        - type: boolean
                                        - type: number
                                        - type: array
                                          items:
                                            type: string
                                          nullable: true
                                    example:
                                      - CN=AllEmployees,OU=Groups,DC=acme,DC=com
                                      - CN=Contractors,OU=Groups,DC=acme,DC=com
                            entitlementChanges:
                              type: array
                              description: Details about the entitlement changes that occurred to the account.
                              nullable: true
                              items:
                                type: object
                                required:
                                  - attributeName
                                  - added
                                  - removed
                                properties:
                                  attributeName:
                                    type: string
                                    description: The name of the entitlement attribute that was changed.
                                    example: roles
                                  added:
                                    type: array
                                    nullable: true
                                    description: The entitlements that were added.
                                    items:
                                      type: object
                                      properties:
                                        id:
                                          type: string
                                          description: The unique identifier of the entitlement.
                                          nullable: true
                                          example: 2c9180835d2e5168015d32f890ca1581
                                        name:
                                          type: string
                                          description: The name of the entitlement.
                                          nullable: true
                                          example: Admin
                                        owner:
                                          type: object
                                          description: The type of the entitlement.
                                          properties:
                                            id:
                                              type: string
                                              description: The unique identifier of the owner.
                                              example: 2c9180835d2e5168015d32f890ca1581
                                            name:
                                              type: string
                                              description: The name of the owner.
                                              nullable: true
                                              example: Owner Name
                                            type:
                                              type: string
                                              description: The type of the owner.
                                              example: Primary
                                        value:
                                          type: string
                                          description: The value of the entitlement.
                                          example: Admin
                                    example:
                                      - id: 2c9180835d2e5168015d32f890ca1581
                                        name: Admin
                                        owner:
                                          id: 2c9180835d2e5168015d32f890ca1581
                                          name: Owner Name
                                          type: Primary
                                        value: Admin
                                      - id: 2c9180835d2e5168015d32f890ca1582
                                        name: User
                                        owner:
                                          id: 2c9180835d2e5168015d32f890ca1582
                                          name: Owner Name 2
                                          type: Secondary
                                        value: User
                                  removed:
                                    type: array
                                    description: The entitlements that were removed.
                                    nullable: true
                                    items:
                                      type: object
                                      properties:
                                        id:
                                          type: string
                                          description: The unique identifier of the entitlement.
                                          nullable: true
                                          example: 2c9180835d2e5168015d32f890ca1581
                                        name:
                                          type: string
                                          description: The name of the entitlement.
                                          nullable: true
                                          example: Admin
                                        owner:
                                          type: object
                                          description: The type of the entitlement.
                                          properties:
                                            id:
                                              type: string
                                              description: The unique identifier of the owner.
                                              example: 2c9180835d2e5168015d32f890ca1581
                                            name:
                                              type: string
                                              description: The name of the owner.
                                              nullable: true
                                              example: Owner Name
                                            type:
                                              type: string
                                              description: The type of the owner.
                                              example: Primary
                                        value:
                                          type: string
                                          description: The value of the entitlement.
                                          example: Admin
                                    example:
                                      - id: 2c9180835d2e5168015d32f890ca1583
                                        name: Group
                                        owner:
                                          id: 2c9180835d2e5168015d32f890ca1583
                                          name: Owner Name 3
                                          type: Primary
                                        value: Group
                        - title: Campaign Activated
                          type: object
                          required:
                            - campaign
                          properties:
                            campaign:
                              type: object
                              description: Details about the certification campaign that was activated.
                              required:
                                - id
                                - name
                                - description
                                - created
                                - deadline
                                - type
                                - campaignOwner
                                - status
                              properties:
                                id:
                                  type: string
                                  description: Unique ID for the campaign.
                                  example: 2c91808576f886190176f88cac5a0010
                                name:
                                  type: string
                                  description: The human friendly name of the campaign.
                                  example: Manager Access Campaign
                                description:
                                  type: string
                                  description: Extended description of the campaign.
                                  example: Audit access for all employees.
                                created:
                                  type: string
                                  format: date-time
                                  description: The date and time the campaign was created.
                                  example: '2021-02-16T03:04:45.815Z'
                                modified:
                                  nullable: true
                                  type: string
                                  format: date-time
                                  description: The date and time the campaign was last modified.
                                  example: '2021-02-16T03:06:45.815Z'
                                deadline:
                                  type: string
                                  format: date-time
                                  description: The date and time the campaign is due.
                                  example: '2021-03-16T03:04:45.815Z'
                                type:
                                  description: The type of campaign.
                                  enum:
                                    - MANAGER
                                    - SOURCE_OWNER
                                    - SEARCH
                                    - ROLE_COMPOSITION
                                  example: MANAGER
                                campaignOwner:
                                  type: object
                                  description: Details of the identity that owns the campaign.
                                  required:
                                    - id
                                    - displayName
                                    - email
                                  properties:
                                    id:
                                      type: string
                                      description: The unique ID of the identity.
                                      example: 37f080867702c1910177031320c40n27
                                    displayName:
                                      type: string
                                      description: The human friendly name of the identity.
                                      example: John Snow
                                    email:
                                      type: string
                                      description: The primary email address of the identity.
                                      example: john.snow@example.com
                                status:
                                  enum:
                                    - ACTIVE
                                  description: The current status of the campaign.
                                  example: ACTIVE
                        - title: Campaign Ended
                          type: object
                          required:
                            - campaign
                          properties:
                            campaign:
                              type: object
                              description: Details about the certification campaign that ended.
                              required:
                                - id
                                - name
                                - description
                                - created
                                - deadline
                                - type
                                - campaignOwner
                                - status
                              properties:
                                id:
                                  type: string
                                  description: Unique ID for the campaign.
                                  example: 2c91808576f886190176f88cac5a0010
                                name:
                                  type: string
                                  description: The human friendly name of the campaign.
                                  example: Manager Access Campaign
                                description:
                                  type: string
                                  description: Extended description of the campaign.
                                  example: Audit access for all employees.
                                created:
                                  type: string
                                  format: date-time
                                  description: The date and time the campaign was created.
                                  example: '2021-02-16T03:04:45.815Z'
                                modified:
                                  nullable: true
                                  type: string
                                  format: date-time
                                  description: The date and time the campaign was last modified.
                                  example: '2021-03-16T03:06:45.815Z'
                                deadline:
                                  type: string
                                  format: date-time
                                  description: The date and time the campaign is due.
                                  example: '2021-03-16T03:04:45.815Z'
                                type:
                                  description: The type of campaign.
                                  enum:
                                    - MANAGER
                                    - SOURCE_OWNER
                                    - SEARCH
                                    - ROLE_COMPOSITION
                                  example: MANAGER
                                campaignOwner:
                                  type: object
                                  description: Details of the identity that owns the campaign.
                                  required:
                                    - id
                                    - displayName
                                    - email
                                  properties:
                                    id:
                                      type: string
                                      description: The unique ID of the identity.
                                      example: 37f080867702c1910177031320c40n27
                                    displayName:
                                      type: string
                                      description: The human friendly name of the identity.
                                      example: John Snow
                                    email:
                                      type: string
                                      description: The primary email address of the identity.
                                      example: john.snow@example.com
                                status:
                                  enum:
                                    - COMPLETED
                                  description: The current status of the campaign.
                                  example: COMPLETED
                        - title: Campaign Generated
                          type: object
                          required:
                            - campaign
                          properties:
                            campaign:
                              description: Details about the campaign that was generated.
                              type: object
                              required:
                                - id
                                - name
                                - description
                                - created
                                - type
                                - campaignOwner
                                - status
                              properties:
                                id:
                                  type: string
                                  description: The unique ID of the campaign.
                                  example: 2c91808576f886190176f88cac5a0010
                                name:
                                  type: string
                                  description: Human friendly name of the campaign.
                                  example: Manager Access Campaign
                                description:
                                  type: string
                                  description: Extended description of the campaign.
                                  example: Audit access for all employees.
                                created:
                                  type: string
                                  format: date-time
                                  description: The date and time the campaign was created.
                                  example: '2021-02-16T03:04:45.815Z'
                                modified:
                                  nullable: true
                                  type: string
                                  description: The date and time the campaign was last modified.
                                  example: '2021-02-17T03:04:45.815Z'
                                deadline:
                                  nullable: true
                                  type: string
                                  description: The date and time when the campaign must be finished by.
                                  example: '2021-02-18T03:04:45.815Z'
                                type:
                                  enum:
                                    - MANAGER
                                    - SOURCE_OWNER
                                    - SEARCH
                                    - ROLE_COMPOSITION
                                  description: The type of campaign that was generated.
                                  example: MANAGER
                                campaignOwner:
                                  type: object
                                  description: The identity that owns the campaign.
                                  required:
                                    - id
                                    - displayName
                                    - email
                                  properties:
                                    id:
                                      type: string
                                      description: The unique ID of the identity.
                                      example: 37f080867702c1910177031320c40n27
                                    displayName:
                                      type: string
                                      description: The display name of the identity.
                                      example: John Snow
                                    email:
                                      type: string
                                      description: The primary email address of the identity.
                                      example: john.snow@example.com
                                status:
                                  enum:
                                    - STAGED
                                    - ACTIVATING
                                    - ACTIVE
                                  description: The current status of the campaign.
                                  example: STAGED
                        - title: Certification Signed Off
                          type: object
                          required:
                            - certification
                          properties:
                            certification:
                              description: The certification campaign that was signed off on.
                              required:
                                - id
                                - name
                                - created
                              allOf:
                                - type: object
                                  title: Certification Dto
                                  required:
                                    - campaignRef
                                    - completed
                                    - decisionsMade
                                    - decisionsTotal
                                    - due
                                    - signed
                                    - reviewer
                                    - campaignOwner
                                    - hasErrors
                                    - phase
                                    - entitiesCompleted
                                    - entitiesTotal
                                  properties:
                                    campaignRef:
                                      type: object
                                      title: Campaign Reference
                                      required:
                                        - id
                                        - name
                                        - type
                                        - campaignType
                                        - description
                                        - correlatedStatus
                                        - mandatoryCommentRequirement
                                      properties:
                                        id:
                                          type: string
                                          description: The unique ID of the campaign.
                                          example: ef38f94347e94562b5bb8424a56397d8
                                        name:
                                          type: string
                                          description: The name of the campaign.
                                          example: Campaign Name
                                        type:
                                          type: string
                                          enum:
                                            - CAMPAIGN
                                          description: The type of object that is being referenced.
                                          example: CAMPAIGN
                                        campaignType:
                                          type: string
                                          enum:
                                            - MANAGER
                                            - SOURCE_OWNER
                                            - SEARCH
                                            - ROLE_COMPOSITION
                                            - MACHINE_ACCOUNT
                                          description: The type of the campaign.
                                          example: MANAGER
                                        description:
                                          type: string
                                          description: The description of the campaign set by the admin who created it.
                                          nullable: true
                                          example: A description of the campaign
                                        correlatedStatus:
                                          type: string
                                          description: The correlatedStatus of the campaign. Only SOURCE_OWNER campaigns can be Uncorrelated. An Uncorrelated certification campaign only includes Uncorrelated identities (An identity is uncorrelated if it has no accounts on an authoritative source).
                                          enum:
                                            - CORRELATED
                                            - UNCORRELATED
                                          example: CORRELATED
                                        mandatoryCommentRequirement:
                                          type: string
                                          description: Determines whether comments are required for decisions during certification reviews. You can require comments for all decisions, revoke-only decisions, or no decisions. By default, comments are not required for decisions.
                                          enum:
                                            - ALL_DECISIONS
                                            - REVOKE_ONLY_DECISIONS
                                            - NO_DECISIONS
                                          example: NO_DECISIONS
                                    phase:
                                      type: string
                                      description: |
                                        The current phase of the campaign.
                                        * `STAGED`: The campaign is waiting to be activated.
                                        * `ACTIVE`: The campaign is active.
                                        * `SIGNED`: The reviewer has signed off on the campaign, and it is considered complete.
                                      enum:
                                        - STAGED
                                        - ACTIVE
                                        - SIGNED
                                      example: ACTIVE
                                      title: certificationphase
                                    due:
                                      type: string
                                      format: date-time
                                      description: The due date of the certification.
                                      example: '2018-10-19T13:49:37.385Z'
                                    signed:
                                      type: string
                                      format: date-time
                                      description: The date the reviewer signed off on the certification.
                                      example: '2018-10-19T13:49:37.385Z'
                                    reviewer:
                                      type: object
                                      title: Reviewer
                                      properties:
                                        id:
                                          type: string
                                          description: The id of the reviewer.
                                          example: ef38f94347e94562b5bb8424a56397d8
                                        name:
                                          type: string
                                          description: The name of the reviewer.
                                          example: Reviewer Name
                                        email:
                                          type: string
                                          nullable: true
                                          description: The email of the reviewing identity. This is only applicable to reviewers of the `IDENTITY` type.
                                          example: reviewer@test.com
                                        type:
                                          type: string
                                          enum:
                                            - IDENTITY
                                            - GOVERNANCE_GROUP
                                          description: The type of the reviewing identity.
                                          example: IDENTITY
                                        created:
                                          nullable: true
                                          example: '2018-06-25T20:22:28.104Z'
                                          format: date-time
                                          type: string
                                          description: The created date of the reviewing identity.
                                        modified:
                                          nullable: true
                                          example: '2018-06-25T20:22:28.104Z'
                                          format: date-time
                                          type: string
                                          description: The modified date of the reviewing identity.
                                      description: A reference to the reviewer of the campaign.
                                    reassignment:
                                      type: object
                                      title: Reassignment
                                      nullable: true
                                      properties:
                                        from:
                                          type: object
                                          title: Certification Reference
                                          properties:
                                            id:
                                              type: string
                                              description: The id of the certification.
                                              example: ef38f94347e94562b5bb8424a56397d8
                                            name:
                                              type: string
                                              description: The name of the certification.
                                              example: Certification Name
                                            type:
                                              type: string
                                              enum:
                                                - CERTIFICATION
                                              example: CERTIFICATION
                                            reviewer:
                                              type: object
                                              title: Reviewer
                                              properties:
                                                id:
                                                  type: string
                                                  description: The id of the reviewer.
                                                  example: ef38f94347e94562b5bb8424a56397d8
                                                name:
                                                  type: string
                                                  description: The name of the reviewer.
                                                  example: Reviewer Name
                                                email:
                                                  type: string
                                                  nullable: true
                                                  description: The email of the reviewing identity. This is only applicable to reviewers of the `IDENTITY` type.
                                                  example: reviewer@test.com
                                                type:
                                                  type: string
                                                  enum:
                                                    - IDENTITY
                                                    - GOVERNANCE_GROUP
                                                  description: The type of the reviewing identity.
                                                  example: IDENTITY
                                                created:
                                                  nullable: true
                                                  example: '2018-06-25T20:22:28.104Z'
                                                  format: date-time
                                                  type: string
                                                  description: The created date of the reviewing identity.
                                                modified:
                                                  nullable: true
                                                  example: '2018-06-25T20:22:28.104Z'
                                                  format: date-time
                                                  type: string
                                                  description: The modified date of the reviewing identity.
                                        comment:
                                          type: string
                                          description: The comment entered when the Certification was reassigned
                                          example: Reassigned for a reason
                                      description: A reference to a reviewer that this campaign has been reassigned to.
                                    hasErrors:
                                      type: boolean
                                      example: false
                                      description: Indicates it the certification has any errors.
                                    errorMessage:
                                      type: string
                                      nullable: true
                                      example: The certification has an error
                                      description: A message indicating what the error is.
                                    completed:
                                      type: boolean
                                      description: Indicates if all certification decisions have been made.
                                      example: false
                                    decisionsMade:
                                      type: integer
                                      description: The number of approve/revoke/acknowledge decisions that have been made by the reviewer.
                                      example: 20
                                      format: int32
                                    decisionsTotal:
                                      type: integer
                                      description: The total number of approve/revoke/acknowledge decisions for the certification.
                                      example: 40
                                      format: int32
                                    entitiesCompleted:
                                      type: integer
                                      description: The number of entities (identities, access profiles, roles, etc.) for which all decisions have been made and are complete.
                                      example: 5
                                      format: int32
                                    entitiesTotal:
                                      type: integer
                                      format: int32
                                      description: The total number of entities (identities, access profiles, roles, etc.) in the certification, both complete and incomplete.
                                      example: 10
                              properties:
                                id:
                                  type: string
                                  description: Unique ID of the certification.
                                  example: 2c91808576f886190176f88caf0d0067
                                name:
                                  type: string
                                  description: The name of the certification.
                                  example: Manager Access Review for Alice Baker
                                created:
                                  type: string
                                  format: date-time
                                  description: The date and time the certification was created.
                                  example: '2020-02-16T03:04:45.815Z'
                                modified:
                                  nullable: true
                                  type: string
                                  format: date-time
                                  description: The date and time the certification was last modified.
                                  example: '2020-02-16T03:06:45.815Z'
                        - title: Identity Attributes Changed
                          type: object
                          required:
                            - identity
                            - changes
                          properties:
                            identity:
                              required:
                                - id
                                - type
                                - name
                              type: object
                              description: Identity whose attributes changed.
                              properties:
                                type:
                                  type: string
                                  description: DTO type of identity whose attributes changed.
                                  enum:
                                    - IDENTITY
                                  example: IDENTITY
                                id:
                                  type: string
                                  description: ID of identity whose attributes changed.
                                  example: 2c7180a46faadee4016fb4e018c20642
                                name:
                                  type: string
                                  description: Display name of identity whose attributes changed.
                                  example: Michael Michaels
                            changes:
                              description: A list of one or more identity attributes that changed on the identity.
                              type: array
                              items:
                                type: object
                                required:
                                  - attribute
                                properties:
                                  attribute:
                                    type: string
                                    description: The name of the identity attribute that changed.
                                    example: department
                                  oldValue:
                                    description: The value of the identity attribute before it changed.
                                    nullable: true
                                    example: sales
                                    oneOf:
                                      - type: string
                                      - type: boolean
                                      - type: array
                                        items:
                                          type: string
                                      - type: object
                                        nullable: true
                                        additionalProperties:
                                          oneOf:
                                            - type: string
                                            - type: number
                                            - type: integer
                                            - type: boolean
                                  newValue:
                                    description: The value of the identity attribute after it changed.
                                    example: marketing
                                    oneOf:
                                      - type: string
                                      - type: boolean
                                      - type: array
                                        items:
                                          type: string
                                      - type: object
                                        nullable: true
                                        additionalProperties:
                                          oneOf:
                                            - type: string
                                            - type: number
                                            - type: integer
                                            - type: boolean
                        - title: Identity Created
                          type: object
                          required:
                            - identity
                            - attributes
                          properties:
                            identity:
                              required:
                                - id
                                - type
                                - name
                              type: object
                              description: Created identity.
                              properties:
                                type:
                                  type: string
                                  description: Created identity's DTO type.
                                  enum:
                                    - IDENTITY
                                  example: IDENTITY
                                id:
                                  type: string
                                  description: Created identity ID.
                                  example: 2c7180a46faadee4016fb4e018c20642
                                name:
                                  type: string
                                  description: Created identity's display name.
                                  example: Michael Michaels
                            attributes:
                              type: object
                              description: The attributes assigned to the identity. Attributes are determined by the identity profile.
                              additionalProperties: true
                              example:
                                firstname: John
                        - title: Identity Deleted
                          type: object
                          required:
                            - identity
                            - attributes
                          properties:
                            identity:
                              required:
                                - id
                                - type
                                - name
                              type: object
                              description: Deleted identity.
                              properties:
                                type:
                                  type: string
                                  description: Deleted identity's DTO type.
                                  enum:
                                    - IDENTITY
                                  example: IDENTITY
                                id:
                                  type: string
                                  description: Deleted identity ID.
                                  example: 2c7180a46faadee4016fb4e018c20642
                                name:
                                  type: string
                                  description: Deleted identity's display name.
                                  example: Michael Michaels
                            attributes:
                              type: object
                              description: The attributes assigned to the identity. Attributes are determined by the identity profile.
                              additionalProperties: true
                              example:
                                firstname: John
                        - title: Machine Identity Created
                          type: object
                          required:
                            - eventType
                            - machineIdentity
                          properties:
                            eventType:
                              type: string
                              description: Type of the event.
                              enum:
                                - MACHINE_IDENTITY_CREATED
                              example: MACHINE_IDENTITY_CREATED
                            machineIdentity:
                              type: object
                              description: Details of the created machine identity.
                              required:
                                - id
                                - created
                                - modified
                                - subtype
                                - manuallyEdited
                              properties:
                                id:
                                  type: string
                                  description: Unique identifier for the machine identity.
                                  example: 8cd6c945-0057-4a6e-ad65-9cbf3b3c71b6
                                name:
                                  type: string
                                  description: Name of the machine identity.
                                  example: TestName
                                created:
                                  type: string
                                  format: date-time
                                  description: Creation timestamp.
                                  example: '2025-08-08T12:42:21.491666Z'
                                modified:
                                  type: string
                                  format: date-time
                                  description: Last modified timestamp.
                                  example: '2025-09-01T06:36:54.401476Z'
                                businessApplication:
                                  type: string
                                  description: Associated business application.
                                  example: MyBusinessApplication2
                                description:
                                  type: string
                                  description: Description of the machine identity.
                                  example: test description event
                                attributes:
                                  type: object
                                  description: The attributes assigned to the identity.
                                  example:
                                    botUserId: 005KV00000BLoMCYA1
                                  additionalProperties: true
                                subtype:
                                  type: string
                                  description: Subtype of the machine identity.
                                  enum:
                                    - AI Agent
                                    - Application
                                  example: AI Agent
                                owners:
                                  type: array
                                  description: List of owners.
                                  items:
                                    type: object
                                    description: Reference to an owner of the machine identity.
                                    required:
                                      - id
                                      - name
                                      - type
                                    properties:
                                      type:
                                        type: string
                                        description: Owner's type.
                                        example: IDENTITY
                                      id:
                                        type: string
                                        description: Owner ID.
                                        example: 84d8c1b819144608b8b8bc3b84ddbb7b
                                      name:
                                        type: string
                                        description: Owner's display name.
                                        example: Jerrie admin3cf084
                                      isPrimary:
                                        type: boolean
                                        description: Indicates if this owner is the primary owner.
                                        default: false
                                        example: true
                                    additionalProperties: true
                                    example:
                                      type: IDENTITY
                                      id: 84d8c1b819144608b8b8bc3b84ddbb7b
                                      name: Jerrie admin3cf084
                                      isPrimary: true
                                    title: machineidentityownerreference
                                sourceId:
                                  type: string
                                  description: Source identifier.
                                  example: c0201251a6ce4d268aba536cdd60a7f2
                                uuid:
                                  type: string
                                  description: UUID of the machine identity.
                                  example: f5dd23fe-3414-42b7-bb1c-869400ad7a10
                                nativeIdentity:
                                  type: string
                                  description: Native identity value.
                                  example: abc:123:dddd1
                                manuallyEdited:
                                  type: boolean
                                  default: false
                                  description: Indicates if manually edited.
                                  example: true
                                manuallyCreated:
                                  type: boolean
                                  default: false
                                  description: Indicates if manually created.
                                  example: true
                                datasetId:
                                  type: string
                                  description: Dataset identifier.
                                  example: agentforce:agents
                                source:
                                  type: object
                                  description: Reference to a source of entity.
                                  required:
                                    - type
                                    - id
                                    - name
                                  properties:
                                    type:
                                      type: string
                                      description: Source Type.
                                      example: SOURCE
                                    id:
                                      type: string
                                      description: Unique identifier.
                                      example: c0201251a6ce4d268aba536cdd60a7f2
                                    name:
                                      type: string
                                      description: Display name.
                                      example: IdentityNow
                                  additionalProperties: true
                                  example:
                                    type: SOURCE
                                    id: c0201251a6ce4d268aba536cdd60a7f2
                                    name: IdentityNow
                                  title: machineidentitysourcereference
                                userEntitlements:
                                  type: array
                                  description: List of user entitlements.
                                  items:
                                    type: object
                                    description: Reference to a user entitlement.
                                    required:
                                      - entitlementId
                                      - displayName
                                      - source
                                    properties:
                                      entitlementId:
                                        type: string
                                        description: Entitlement identifier.
                                        example: 2509f650c20a3ab5956be70f6f136fbc
                                      displayName:
                                        type: string
                                        description: Display name of the entitlement.
                                        example: CN=Engineering-test-org3,OU=megapod-useast1-test-org3,OU=org-data-service,DC=TestAutomationAD,DC=local
                                      source:
                                        type: object
                                        description: Reference to a source of entity.
                                        required:
                                          - type
                                          - id
                                          - name
                                        properties:
                                          type:
                                            type: string
                                            description: Source Type.
                                            example: SOURCE
                                          id:
                                            type: string
                                            description: Unique identifier.
                                            example: c0201251a6ce4d268aba536cdd60a7f2
                                          name:
                                            type: string
                                            description: Display name.
                                            example: IdentityNow
                                        additionalProperties: true
                                        example:
                                          type: SOURCE
                                          id: c0201251a6ce4d268aba536cdd60a7f2
                                          name: IdentityNow
                                        title: machineidentitysourcereference
                                    additionalProperties: true
                                    example:
                                      entitlementId: 2509f650c20a3ab5956be70f6f136fbc
                                      displayName: CN=Engineering-test-org3,OU=megapod-useast1-test-org3,OU=org-data-service,DC=TestAutomationAD,DC=local
                                      source:
                                        type: SOURCE
                                        id: 7443d0ffb1304bbcbdf4c07b5c09d4f2
                                        name: ODS-AD-Source
                                    title: machineidentityuserentitlements
                                existsOnSource:
                                  type: string
                                  description: Existence status on source.
                                  example: NOT_APPLICABLE
                        - title: Machine Identity Updated
                          type: object
                          required:
                            - eventType
                            - machineIdentity
                            - machineIdentityChangeTypes
                            - userEntitlementChanges
                            - ownerChanges
                            - singleValueAttributeChanges
                          properties:
                            eventType:
                              type: string
                              description: Type of the event.
                              enum:
                                - MACHINE_IDENTITY_UPDATED
                              example: MACHINE_IDENTITY_UPDATED
                            machineIdentity:
                              type: object
                              description: Details of the updated machine identity.
                              required:
                                - id
                                - created
                                - modified
                                - subtype
                                - manuallyEdited
                              properties:
                                id:
                                  type: string
                                  description: Unique identifier for the machine identity.
                                  example: 8cd6c945-0057-4a6e-ad65-9cbf3b3c71b6
                                name:
                                  type: string
                                  description: Name of the machine identity.
                                  example: test
                                created:
                                  type: string
                                  format: date-time
                                  description: Creation timestamp.
                                  example: '2025-08-08T12:42:21.491666Z'
                                modified:
                                  type: string
                                  format: date-time
                                  description: Last modified timestamp.
                                  example: '2025-09-01T06:36:54.401476Z'
                                businessApplication:
                                  type: string
                                  description: Associated business application.
                                  example: MyBusinessApplication2
                                description:
                                  type: string
                                  description: Description of the machine identity.
                                  example: test description event
                                attributes:
                                  type: object
                                  description: The attributes assigned to the identity.
                                  example:
                                    botUserId: 005KV00000BLoMCYA1
                                  additionalProperties: true
                                subtype:
                                  type: string
                                  enum:
                                    - AI Agent
                                    - Application
                                  description: Subtype of the machine identity.
                                  example: AI Agent
                                owners:
                                  type: array
                                  description: List of owners.
                                  items:
                                    type: object
                                    description: Reference to an owner of the machine identity.
                                    required:
                                      - id
                                      - name
                                      - type
                                    properties:
                                      type:
                                        type: string
                                        description: Owner's type.
                                        example: IDENTITY
                                      id:
                                        type: string
                                        description: Owner ID.
                                        example: 84d8c1b819144608b8b8bc3b84ddbb7b
                                      name:
                                        type: string
                                        description: Owner's display name.
                                        example: Jerrie admin3cf084
                                      isPrimary:
                                        type: boolean
                                        description: Indicates if this owner is the primary owner.
                                        default: false
                                        example: true
                                    additionalProperties: true
                                    example:
                                      type: IDENTITY
                                      id: 84d8c1b819144608b8b8bc3b84ddbb7b
                                      name: Jerrie admin3cf084
                                      isPrimary: true
                                    title: machineidentityownerreference
                                sourceId:
                                  type: string
                                  description: Source identifier.
                                  example: c0201251a6ce4d268aba536cdd60a7f2
                                uuid:
                                  type: string
                                  description: UUID of the machine identity.
                                  example: f5dd23fe-3414-42b7-bb1c-869400ad7a10
                                nativeIdentity:
                                  type: string
                                  description: Native identity value.
                                  example: abc:123:dddd1
                                manuallyEdited:
                                  type: boolean
                                  default: false
                                  description: Indicates if manually edited.
                                  example: true
                                manuallyCreated:
                                  type: boolean
                                  default: false
                                  description: Indicates if manually created.
                                  example: true
                                datasetId:
                                  type: string
                                  description: Dataset identifier.
                                  example: agentforce:agents
                                source:
                                  type: object
                                  description: Reference to a source of entity.
                                  required:
                                    - type
                                    - id
                                    - name
                                  properties:
                                    type:
                                      type: string
                                      description: Source Type.
                                      example: SOURCE
                                    id:
                                      type: string
                                      description: Unique identifier.
                                      example: c0201251a6ce4d268aba536cdd60a7f2
                                    name:
                                      type: string
                                      description: Display name.
                                      example: IdentityNow
                                  additionalProperties: true
                                  example:
                                    type: SOURCE
                                    id: c0201251a6ce4d268aba536cdd60a7f2
                                    name: IdentityNow
                                  title: machineidentitysourcereference
                                userEntitlements:
                                  type: array
                                  description: List of user entitlements.
                                  items:
                                    type: object
                                    description: Reference to a user entitlement.
                                    required:
                                      - entitlementId
                                      - displayName
                                      - source
                                    properties:
                                      entitlementId:
                                        type: string
                                        description: Entitlement identifier.
                                        example: 2509f650c20a3ab5956be70f6f136fbc
                                      displayName:
                                        type: string
                                        description: Display name of the entitlement.
                                        example: CN=Engineering-test-org3,OU=megapod-useast1-test-org3,OU=org-data-service,DC=TestAutomationAD,DC=local
                                      source:
                                        type: object
                                        description: Reference to a source of entity.
                                        required:
                                          - type
                                          - id
                                          - name
                                        properties:
                                          type:
                                            type: string
                                            description: Source Type.
                                            example: SOURCE
                                          id:
                                            type: string
                                            description: Unique identifier.
                                            example: c0201251a6ce4d268aba536cdd60a7f2
                                          name:
                                            type: string
                                            description: Display name.
                                            example: IdentityNow
                                        additionalProperties: true
                                        example:
                                          type: SOURCE
                                          id: c0201251a6ce4d268aba536cdd60a7f2
                                          name: IdentityNow
                                        title: machineidentitysourcereference
                                    additionalProperties: true
                                    example:
                                      entitlementId: 2509f650c20a3ab5956be70f6f136fbc
                                      displayName: CN=Engineering-test-org3,OU=megapod-useast1-test-org3,OU=org-data-service,DC=TestAutomationAD,DC=local
                                      source:
                                        type: SOURCE
                                        id: 7443d0ffb1304bbcbdf4c07b5c09d4f2
                                        name: ODS-AD-Source
                                    title: machineidentityuserentitlements
                                existsOnSource:
                                  type: string
                                  description: Existence status on source.
                                  example: NOT_APPLICABLE
                            machineIdentityChangeTypes:
                              type: array
                              description: Types of changes that occurred to the machine identity.
                              items:
                                type: string
                                enum:
                                  - ATTRIBUTES_CHANGED
                                  - USER_ENTITLEMENTS_ADDED
                                  - USER_ENTITLEMENTS_REMOVED
                                  - OWNERS_ADDED
                                  - OWNERS_REMOVED
                              example:
                                - ATTRIBUTES_CHANGED
                                - USER_ENTITLEMENTS_ADDED
                                - USER_ENTITLEMENTS_REMOVED
                                - OWNERS_ADDED
                                - OWNERS_REMOVED
                            userEntitlementChanges:
                              type: object
                              description: Changes to user entitlements.
                              properties:
                                attributeName:
                                  type: string
                                  description: Name of the attribute that changed.
                                  example: userEntitlements
                                added:
                                  type: array
                                  description: User entitlements that were added.
                                  items:
                                    type: object
                                    description: Reference to a user entitlement.
                                    required:
                                      - entitlementId
                                      - displayName
                                      - source
                                    properties:
                                      entitlementId:
                                        type: string
                                        description: Entitlement identifier.
                                        example: 2509f650c20a3ab5956be70f6f136fbc
                                      displayName:
                                        type: string
                                        description: Display name of the entitlement.
                                        example: CN=Engineering-test-org3,OU=megapod-useast1-test-org3,OU=org-data-service,DC=TestAutomationAD,DC=local
                                      source:
                                        type: object
                                        description: Reference to a source of entity.
                                        required:
                                          - type
                                          - id
                                          - name
                                        properties:
                                          type:
                                            type: string
                                            description: Source Type.
                                            example: SOURCE
                                          id:
                                            type: string
                                            description: Unique identifier.
                                            example: c0201251a6ce4d268aba536cdd60a7f2
                                          name:
                                            type: string
                                            description: Display name.
                                            example: IdentityNow
                                        additionalProperties: true
                                        example:
                                          type: SOURCE
                                          id: c0201251a6ce4d268aba536cdd60a7f2
                                          name: IdentityNow
                                        title: machineidentitysourcereference
                                    additionalProperties: true
                                    example:
                                      entitlementId: 2509f650c20a3ab5956be70f6f136fbc
                                      displayName: CN=Engineering-test-org3,OU=megapod-useast1-test-org3,OU=org-data-service,DC=TestAutomationAD,DC=local
                                      source:
                                        type: SOURCE
                                        id: 7443d0ffb1304bbcbdf4c07b5c09d4f2
                                        name: ODS-AD-Source
                                    title: machineidentityuserentitlements
                                removed:
                                  type: array
                                  description: User entitlements that were removed.
                                  items:
                                    type: object
                                    description: Reference to a user entitlement.
                                    required:
                                      - entitlementId
                                      - displayName
                                      - source
                                    properties:
                                      entitlementId:
                                        type: string
                                        description: Entitlement identifier.
                                        example: 2509f650c20a3ab5956be70f6f136fbc
                                      displayName:
                                        type: string
                                        description: Display name of the entitlement.
                                        example: CN=Engineering-test-org3,OU=megapod-useast1-test-org3,OU=org-data-service,DC=TestAutomationAD,DC=local
                                      source:
                                        type: object
                                        description: Reference to a source of entity.
                                        required:
                                          - type
                                          - id
                                          - name
                                        properties:
                                          type:
                                            type: string
                                            description: Source Type.
                                            example: SOURCE
                                          id:
                                            type: string
                                            description: Unique identifier.
                                            example: c0201251a6ce4d268aba536cdd60a7f2
                                          name:
                                            type: string
                                            description: Display name.
                                            example: IdentityNow
                                        additionalProperties: true
                                        example:
                                          type: SOURCE
                                          id: c0201251a6ce4d268aba536cdd60a7f2
                                          name: IdentityNow
                                        title: machineidentitysourcereference
                                    additionalProperties: true
                                    example:
                                      entitlementId: 2509f650c20a3ab5956be70f6f136fbc
                                      displayName: CN=Engineering-test-org3,OU=megapod-useast1-test-org3,OU=org-data-service,DC=TestAutomationAD,DC=local
                                      source:
                                        type: SOURCE
                                        id: 7443d0ffb1304bbcbdf4c07b5c09d4f2
                                        name: ODS-AD-Source
                                    title: machineidentityuserentitlements
                            ownerChanges:
                              type: object
                              description: Changes to owners.
                              properties:
                                attributeName:
                                  type: string
                                  description: Name of the attribute that changed.
                                  example: owners
                                added:
                                  type: array
                                  description: Owners that were added.
                                  items:
                                    type: object
                                    description: Reference to an owner of the machine identity.
                                    required:
                                      - id
                                      - name
                                      - type
                                    properties:
                                      type:
                                        type: string
                                        description: Owner's type.
                                        example: IDENTITY
                                      id:
                                        type: string
                                        description: Owner ID.
                                        example: 84d8c1b819144608b8b8bc3b84ddbb7b
                                      name:
                                        type: string
                                        description: Owner's display name.
                                        example: Jerrie admin3cf084
                                      isPrimary:
                                        type: boolean
                                        description: Indicates if this owner is the primary owner.
                                        default: false
                                        example: true
                                    additionalProperties: true
                                    example:
                                      type: IDENTITY
                                      id: 84d8c1b819144608b8b8bc3b84ddbb7b
                                      name: Jerrie admin3cf084
                                      isPrimary: true
                                    title: machineidentityownerreference
                                removed:
                                  type: array
                                  description: Owners that were removed.
                                  items:
                                    type: object
                                    description: Reference to an owner of the machine identity.
                                    required:
                                      - id
                                      - name
                                      - type
                                    properties:
                                      type:
                                        type: string
                                        description: Owner's type.
                                        example: IDENTITY
                                      id:
                                        type: string
                                        description: Owner ID.
                                        example: 84d8c1b819144608b8b8bc3b84ddbb7b
                                      name:
                                        type: string
                                        description: Owner's display name.
                                        example: Jerrie admin3cf084
                                      isPrimary:
                                        type: boolean
                                        description: Indicates if this owner is the primary owner.
                                        default: false
                                        example: true
                                    additionalProperties: true
                                    example:
                                      type: IDENTITY
                                      id: 84d8c1b819144608b8b8bc3b84ddbb7b
                                      name: Jerrie admin3cf084
                                      isPrimary: true
                                    title: machineidentityownerreference
                            singleValueAttributeChanges:
                              type: array
                              description: Details about the single-value attribute changes that occurred.
                              nullable: true
                              items:
                                type: object
                                required:
                                  - name
                                  - oldValue
                                  - newValue
                                properties:
                                  name:
                                    type: string
                                    description: The name of the attribute that was changed.
                                    example: displayName
                                  oldValue:
                                    description: The old value of the attribute before the change.
                                    nullable: true
                                    oneOf:
                                      - type: string
                                        example: Sample Old Value
                                        title: string
                                      - type: boolean
                                        example: true
                                        title: boolean
                                      - type: number
                                        example: 123456789
                                        title: number
                                      - type: array
                                        title: array
                                        items:
                                          type: string
                                          example:
                                            - '001'
                                            - '002'
                                            - '003'
                                        nullable: true
                                    example: John Doe
                                  newValue:
                                    description: The new value of the attribute after the change.
                                    nullable: true
                                    oneOf:
                                      - type: string
                                        example: Sample New Value
                                        title: string
                                      - type: boolean
                                        example: true
                                        title: boolean
                                      - type: number
                                        example: 123456789
                                        title: number
                                      - type: array
                                        title: array
                                        items:
                                          type: string
                                          example:
                                            - '001'
                                            - '002'
                                            - '003'
                                        nullable: true
                                    example: John A. Doe
                        - title: Machine Identity Deleted
                          type: object
                          required:
                            - eventType
                            - machineIdentity
                          properties:
                            eventType:
                              type: string
                              description: Type of the event.
                              enum:
                                - MACHINE_IDENTITY_DELETED
                              example: MACHINE_IDENTITY_DELETED
                            machineIdentity:
                              type: object
                              description: Details of the deleted machine identity.
                              required:
                                - id
                                - created
                                - modified
                                - subtype
                                - manuallyEdited
                              properties:
                                id:
                                  type: string
                                  description: Unique identifier for the machine identity.
                                  example: 8cd6c945-0057-4a6e-ad65-9cbf3b3c71b6
                                name:
                                  type: string
                                  description: Name of the machine identity.
                                  example: TestName
                                created:
                                  type: string
                                  format: date-time
                                  description: Creation timestamp.
                                  example: '2025-08-08T12:42:21.491666Z'
                                modified:
                                  type: string
                                  format: date-time
                                  description: Last modified timestamp.
                                  example: '2025-09-01T06:36:54.401476Z'
                                businessApplication:
                                  type: string
                                  description: Associated business application.
                                  example: MyBusinessApplication2
                                description:
                                  type: string
                                  description: Description of the machine identity.
                                  example: test description event
                                attributes:
                                  type: object
                                  description: The attributes assigned to the identity.
                                  example:
                                    botUserId: 005KV00000BLoMCYA1
                                  additionalProperties: true
                                subtype:
                                  type: string
                                  enum:
                                    - AI Agent
                                    - Application
                                  description: Subtype of the machine identity.
                                  example: AI Agent
                                owners:
                                  type: array
                                  description: List of owners.
                                  items:
                                    type: object
                                    description: Reference to an owner of the machine identity.
                                    required:
                                      - id
                                      - name
                                      - type
                                    properties:
                                      type:
                                        type: string
                                        description: Owner's type.
                                        example: IDENTITY
                                      id:
                                        type: string
                                        description: Owner ID.
                                        example: 84d8c1b819144608b8b8bc3b84ddbb7b
                                      name:
                                        type: string
                                        description: Owner's display name.
                                        example: Jerrie admin3cf084
                                      isPrimary:
                                        type: boolean
                                        description: Indicates if this owner is the primary owner.
                                        default: false
                                        example: true
                                    additionalProperties: true
                                    example:
                                      type: IDENTITY
                                      id: 84d8c1b819144608b8b8bc3b84ddbb7b
                                      name: Jerrie admin3cf084
                                      isPrimary: true
                                    title: machineidentityownerreference
                                sourceId:
                                  type: string
                                  description: Source identifier.
                                  example: c0201251a6ce4d268aba536cdd60a7f2
                                uuid:
                                  type: string
                                  description: UUID of the machine identity.
                                  example: f5dd23fe-3414-42b7-bb1c-869400ad7a10
                                nativeIdentity:
                                  type: string
                                  description: Native identity value.
                                  example: abc:123:dddd1
                                manuallyEdited:
                                  type: boolean
                                  default: false
                                  description: Indicates if manually edited.
                                  example: true
                                manuallyCreated:
                                  type: boolean
                                  default: false
                                  description: Indicates if manually created.
                                  example: true
                                datasetId:
                                  type: string
                                  description: Dataset identifier.
                                  example: agentforce:agents
                                source:
                                  type: object
                                  description: Reference to a source of entity.
                                  required:
                                    - type
                                    - id
                                    - name
                                  properties:
                                    type:
                                      type: string
                                      description: Source Type.
                                      example: SOURCE
                                    id:
                                      type: string
                                      description: Unique identifier.
                                      example: c0201251a6ce4d268aba536cdd60a7f2
                                    name:
                                      type: string
                                      description: Display name.
                                      example: IdentityNow
                                  additionalProperties: true
                                  example:
                                    type: SOURCE
                                    id: c0201251a6ce4d268aba536cdd60a7f2
                                    name: IdentityNow
                                  title: machineidentitysourcereference
                                userEntitlements:
                                  type: array
                                  description: List of user entitlements.
                                  items:
                                    type: object
                                    description: Reference to a user entitlement.
                                    required:
                                      - entitlementId
                                      - displayName
                                      - source
                                    properties:
                                      entitlementId:
                                        type: string
                                        description: Entitlement identifier.
                                        example: 2509f650c20a3ab5956be70f6f136fbc
                                      displayName:
                                        type: string
                                        description: Display name of the entitlement.
                                        example: CN=Engineering-test-org3,OU=megapod-useast1-test-org3,OU=org-data-service,DC=TestAutomationAD,DC=local
                                      source:
                                        type: object
                                        description: Reference to a source of entity.
                                        required:
                                          - type
                                          - id
                                          - name
                                        properties:
                                          type:
                                            type: string
                                            description: Source Type.
                                            example: SOURCE
                                          id:
                                            type: string
                                            description: Unique identifier.
                                            example: c0201251a6ce4d268aba536cdd60a7f2
                                          name:
                                            type: string
                                            description: Display name.
                                            example: IdentityNow
                                        additionalProperties: true
                                        example:
                                          type: SOURCE
                                          id: c0201251a6ce4d268aba536cdd60a7f2
                                          name: IdentityNow
                                        title: machineidentitysourcereference
                                    additionalProperties: true
                                    example:
                                      entitlementId: 2509f650c20a3ab5956be70f6f136fbc
                                      displayName: CN=Engineering-test-org3,OU=megapod-useast1-test-org3,OU=org-data-service,DC=TestAutomationAD,DC=local
                                      source:
                                        type: SOURCE
                                        id: 7443d0ffb1304bbcbdf4c07b5c09d4f2
                                        name: ODS-AD-Source
                                    title: machineidentityuserentitlements
                                existsOnSource:
                                  type: string
                                  description: Existence status on source.
                                  example: NOT_APPLICABLE
                        - title: Provisioning Completed
                          type: object
                          required:
                            - trackingNumber
                            - sources
                            - recipient
                            - accountRequests
                          properties:
                            trackingNumber:
                              type: string
                              description: The reference number of the provisioning request. Useful for tracking status in the Account Activity search interface.
                              example: 4b4d982dddff4267ab12f0f1e72b5a6d
                            sources:
                              type: string
                              description: One or more sources that the provisioning transaction(s) were done against.  Sources are comma separated.
                              example: Corp AD, Corp LDAP, Corp Salesforce
                            action:
                              nullable: true
                              type: string
                              description: Origin of where the provisioning request came from.
                              example: IdentityRefresh
                            errors:
                              nullable: true
                              description: A list of any accumulated error messages that occurred during provisioning.
                              type: array
                              items:
                                type: string
                                example: Connector AD Failed
                            warnings:
                              nullable: true
                              description: A list of any accumulated warning messages that occurred during provisioning.
                              type: array
                              items:
                                type: string
                                example: Notification Skipped due to invalid email
                            recipient:
                              required:
                                - id
                                - type
                                - name
                              type: object
                              description: Provisioning recpient.
                              properties:
                                type:
                                  type: string
                                  description: Provisioning recipient DTO type.
                                  enum:
                                    - IDENTITY
                                  example: IDENTITY
                                id:
                                  type: string
                                  description: Provisioning recipient's identity ID.
                                  example: 2c7180a46faadee4016fb4e018c20642
                                name:
                                  type: string
                                  description: Provisioning recipient's display name.
                                  example: Michael Michaels
                            requester:
                              nullable: true
                              required:
                                - id
                                - type
                                - name
                              type: object
                              description: Provisioning requester's identity.
                              properties:
                                type:
                                  type: string
                                  description: Provisioning requester's DTO type.
                                  enum:
                                    - IDENTITY
                                  example: IDENTITY
                                id:
                                  type: string
                                  description: Provisioning requester's identity ID.
                                  example: 2c7180a46faadee4016fb4e018c20648
                                name:
                                  type: string
                                  description: Provisioning owner's human-readable display name.
                                  example: William Wilson
                            accountRequests:
                              type: array
                              description: A list of provisioning instructions to be executed on a per-account basis. The order in which operations are executed may not always be predictable.
                              items:
                                type: object
                                required:
                                  - source
                                  - accountOperation
                                  - provisioningResult
                                  - provisioningTarget
                                properties:
                                  source:
                                    required:
                                      - id
                                      - type
                                      - name
                                    type: object
                                    description: Reference to the source being provisioned against.
                                    properties:
                                      id:
                                        description: ID of the object to which this reference applies
                                        type: string
                                        example: 4e4d982dddff4267ab12f0f1e72b5a6d
                                      type:
                                        type: string
                                        enum:
                                          - SOURCE
                                        example: SOURCE
                                        description: The type of object that is referenced
                                      name:
                                        type: string
                                        description: Human-readable display name of the object to which this reference applies
                                        example: Corporate Active Directory
                                  accountId:
                                    type: string
                                    description: The unique idenfier of the account being provisioned.
                                    example: CN=Chewy.Bacca,ou=hardcorefigter,ou=wookies,dc=starwars,dc=com
                                  accountOperation:
                                    type: string
                                    description: The provisioning operation; typically Create, Modify, Enable, Disable, Unlock, or Delete.
                                    example: Modify
                                  provisioningResult:
                                    description: The overall result of the provisioning transaction; this could be success, pending, failed, etc.
                                    enum:
                                      - SUCCESS
                                      - PENDING
                                      - FAILED
                                    example: SUCCESS
                                  provisioningTarget:
                                    type: string
                                    description: The name of the provisioning channel selected; this could be the same as the source, or could be a Service Desk Integration Module (SDIM).
                                    example: Corp AD
                                  ticketId:
                                    nullable: true
                                    type: string
                                    description: A reference to a tracking number, if this is sent to a Service Desk Integration Module (SDIM).
                                    example: '72619262'
                                  attributeRequests:
                                    nullable: true
                                    description: A list of attributes as part of the provisioning transaction.
                                    type: array
                                    items:
                                      type: object
                                      required:
                                        - attributeName
                                        - operation
                                      properties:
                                        attributeName:
                                          type: string
                                          description: The name of the attribute being provisioned.
                                          example: memberOf
                                        attributeValue:
                                          nullable: true
                                          type: string
                                          description: The value of the attribute being provisioned.
                                          example: CN=jedi,DC=starwars,DC=com
                                        operation:
                                          enum:
                                            - Add
                                            - Set
                                            - Remove
                                          description: The operation to handle the attribute.
                                          example: Add
                        - title: Saved Search Complete
                          type: object
                          required:
                            - fileName
                            - ownerEmail
                            - ownerName
                            - query
                            - searchName
                            - searchResults
                            - signedS3Url
                          properties:
                            fileName:
                              type: string
                              description: A name for the report file.
                              example: Modified.zip
                            ownerEmail:
                              type: string
                              description: The email address of the identity that owns the saved search.
                              example: test@sailpoint.com
                            ownerName:
                              type: string
                              description: The name of the identity that owns the saved search.
                              example: Cloud Support
                            query:
                              type: string
                              description: The search query that was used to generate the report.
                              example: modified:[now-7y/d TO now]
                            searchName:
                              type: string
                              description: The name of the saved search.
                              example: Modified Activity
                            searchResults:
                              type: object
                              description: A preview of the search results for each object type. This includes a count as well as headers, and the first several rows of data, per object type.
                              properties:
                                Account:
                                  description: A table of accounts that match the search criteria.
                                  nullable: true
                                  type: object
                                  required:
                                    - count
                                    - noun
                                    - preview
                                  properties:
                                    count:
                                      type: string
                                      description: The number of rows in the table.
                                      example: 3
                                    noun:
                                      type: string
                                      description: The type of object represented in the table.
                                      example: accounts
                                    preview:
                                      description: A sample of the data in the table.
                                      type: array
                                      items:
                                        type: array
                                        items:
                                          type: string
                                          example: Robert.Chase
                                        example: []
                                Entitlement:
                                  description: A table of entitlements that match the search criteria.
                                  nullable: true
                                  type: object
                                  required:
                                    - count
                                    - noun
                                    - preview
                                  properties:
                                    count:
                                      type: string
                                      description: The number of rows in the table.
                                      example: 2
                                    noun:
                                      type: string
                                      description: The type of object represented in the table.
                                      example: entitlements
                                    preview:
                                      description: A sample of the data in the table.
                                      type: array
                                      items:
                                        type: array
                                        items:
                                          type: string
                                          example: Administrator
                                        example: []
                                Identity:
                                  description: A table of identities that match the search criteria.
                                  nullable: true
                                  type: object
                                  required:
                                    - count
                                    - noun
                                    - preview
                                  properties:
                                    count:
                                      type: string
                                      description: The number of rows in the table.
                                      example: 2
                                    noun:
                                      type: string
                                      description: The type of object represented in the table.
                                      example: identities
                                    preview:
                                      description: A sample of the data in the table.
                                      type: array
                                      items:
                                        type: array
                                        items:
                                          type: string
                                          example: Carol Shelby
                                        example: []
                            signedS3Url:
                              type: string
                              description: The Amazon S3 URL to download the report from.
                              example: https://sptcbu-org-data-useast1.s3.amazonaws.com/arsenal-john/reports/Events%20Export.2020-05-06%2018%2759%20GMT.3e580592-86e4-4953-8aea-49e6ef20a086.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20200506T185919Z&X-Amz-SignedHeaders=host&X-Amz-Expires=899&X-Amz-Credential=AKIAV5E54XOGTS4Q4L7A%2F20200506%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=2e732bb97a12a1fd8a215613e3c31fcdae8ba1fb6a25916843ab5b51d2ddefbc
                        - title: Source Account Created
                          type: object
                          required:
                            - id
                            - nativeIdentifier
                            - sourceId
                            - sourceName
                            - identityId
                            - identityName
                            - attributes
                          properties:
                            uuid:
                              type: string
                              description: Source unique identifier for the identity. UUID is generated by the source system.
                              example: b7264868-7201-415f-9118-b581d431c688
                            id:
                              type: string
                              description: SailPoint generated unique identifier.
                              example: ee769173319b41d19ccec35ba52f237b
                            nativeIdentifier:
                              type: string
                              description: Unique ID of the account on the source.
                              example: E009
                            sourceId:
                              type: string
                              description: The ID of the source.
                              example: 2c918082814e693601816e09471b29b6
                            sourceName:
                              type: string
                              description: The name of the source.
                              example: Active Directory
                            identityId:
                              type: string
                              description: The ID of the identity that is correlated with this account.
                              example: ee769173319b41d19ccec6c235423237b
                            identityName:
                              type: string
                              description: The name of the identity that is correlated with this account.
                              example: john.doe
                            attributes:
                              type: object
                              additionalProperties: true
                              description: The attributes of the account. The contents of attributes depends on the account schema for the source.
                              example:
                                firstname: John
                                lastname: Doe
                                email: john.doe@gmail.com
                                department: Sales
                                displayName: John Doe
                                created: '2020-04-27T16:48:33.597Z'
                                employeeNumber: E009
                                uid: E009
                                inactive: 'true'
                                phone: null
                                identificationNumber: E009
                        - title: Source Account Deleted
                          type: object
                          required:
                            - id
                            - nativeIdentifier
                            - sourceId
                            - sourceName
                            - identityId
                            - identityName
                            - attributes
                          properties:
                            uuid:
                              type: string
                              description: Source unique identifier for the identity. UUID is generated by the source system.
                              example: b7264868-7201-415f-9118-b581d431c688
                            id:
                              type: string
                              description: SailPoint generated unique identifier.
                              example: ee769173319b41d19ccec35ba52f237b
                            nativeIdentifier:
                              type: string
                              description: Unique ID of the account on the source.
                              example: E009
                            sourceId:
                              type: string
                              description: The ID of the source.
                              example: 2c918082814e693601816e09471b29b6
                            sourceName:
                              type: string
                              description: The name of the source.
                              example: Active Directory
                            identityId:
                              type: string
                              description: The ID of the identity that is correlated with this account.
                              example: ee769173319b41d19ccec6c235423237b
                            identityName:
                              type: string
                              description: The name of the identity that is correlated with this account.
                              example: john.doe
                            attributes:
                              type: object
                              additionalProperties: true
                              description: The attributes of the account. The contents of attributes depends on the account schema for the source.
                              example:
                                firstname: John
                                lastname: Doe
                                email: john.doe@gmail.com
                                department: Sales
                                displayName: John Doe
                                created: '2020-04-27T16:48:33.597Z'
                                employeeNumber: E009
                                uid: E009
                                inactive: 'true'
                                phone: null
                                identificationNumber: E009
                        - title: Source Account Updated
                          type: object
                          required:
                            - id
                            - nativeIdentifier
                            - sourceId
                            - sourceName
                            - identityId
                            - identityName
                            - attributes
                          properties:
                            uuid:
                              type: string
                              description: Source unique identifier for the identity. UUID is generated by the source system.
                              example: b7264868-7201-415f-9118-b581d431c688
                            id:
                              type: string
                              description: SailPoint generated unique identifier.
                              example: ee769173319b41d19ccec35ba52f237b
                            nativeIdentifier:
                              type: string
                              description: Unique ID of the account on the source.
                              example: E009
                            sourceId:
                              type: string
                              description: The ID of the source.
                              example: 2c918082814e693601816e09471b29b6
                            sourceName:
                              type: string
                              description: The name of the source.
                              example: Active Directory
                            identityId:
                              type: string
                              description: The ID of the identity that is correlated with this account.
                              example: ee769173319b41d19ccec6c235423237b
                            identityName:
                              type: string
                              description: The name of the identity that is correlated with this account.
                              example: john.doe
                            attributes:
                              type: object
                              additionalProperties: true
                              description: The attributes of the account. The contents of attributes depends on the account schema for the source.
                              example:
                                firstname: John
                                lastname: Doe
                                email: john.doe@gmail.com
                                department: Sales
                                displayName: John Doe
                                created: '2020-04-27T16:48:33.597Z'
                                employeeNumber: E009
                                uid: E009
                                inactive: 'true'
                                phone: null
                                identificationNumber: E009
                        - title: Source Created
                          type: object
                          required:
                            - id
                            - name
                            - type
                            - created
                            - connector
                            - actor
                          properties:
                            id:
                              type: string
                              description: The unique ID of the source.
                              example: 2c9180866166b5b0016167c32ef31a66
                            name:
                              type: string
                              description: Human friendly name of the source.
                              example: Test source
                            type:
                              type: string
                              description: The connection type.
                              example: DIRECT_CONNECT
                            created:
                              type: string
                              format: date-time
                              description: The date and time the source was created.
                              example: '2021-03-29T22:01:50.474Z'
                            connector:
                              type: string
                              description: The connector type used to connect to the source.
                              example: active-directory
                            actor:
                              required:
                                - id
                                - name
                                - type
                              type: object
                              description: Identity who created the source.
                              properties:
                                type:
                                  type: string
                                  description: DTO type of identity who created the source.
                                  enum:
                                    - IDENTITY
                                  example: IDENTITY
                                id:
                                  type: string
                                  description: ID of identity who created the source.
                                  example: 2c7180a46faadee4016fb4e018c20648
                                name:
                                  type: string
                                  description: Display name of identity who created the source.
                                  example: William Wilson
                        - title: Source Deleted
                          type: object
                          required:
                            - id
                            - name
                            - type
                            - deleted
                            - connector
                            - actor
                          properties:
                            id:
                              type: string
                              description: The unique ID of the source.
                              example: 2c9180866166b5b0016167c32ef31a66
                            name:
                              type: string
                              description: Human friendly name of the source.
                              example: Test source
                            type:
                              type: string
                              description: The connection type.
                              example: DIRECT_CONNECT
                            deleted:
                              type: string
                              format: date-time
                              description: The date and time the source was deleted.
                              example: '2021-03-29T22:01:50.474Z'
                            connector:
                              type: string
                              description: The connector type used to connect to the source.
                              example: active-directory
                            actor:
                              required:
                                - id
                                - name
                                - type
                              type: object
                              description: Identity who deleted the source.
                              properties:
                                type:
                                  type: string
                                  description: DTO type of identity who deleted the source.
                                  enum:
                                    - IDENTITY
                                  example: IDENTITY
                                id:
                                  type: string
                                  description: ID of identity who deleted the source.
                                  example: 2c7180a46faadee4016fb4e018c20648
                                name:
                                  type: string
                                  description: Display name of identity who deleted the source.
                                  example: William Wilson
                        - title: Source Updated
                          type: object
                          required:
                            - id
                            - name
                            - type
                            - modified
                            - connector
                            - actor
                          properties:
                            id:
                              type: string
                              description: The unique ID of the source.
                              example: 2c9180866166b5b0016167c32ef31a66
                            name:
                              type: string
                              description: The user friendly name of the source.
                              example: Corporate Active Directory
                            type:
                              type: string
                              description: The connection type of the source.
                              example: DIRECT_CONNECT
                            modified:
                              type: string
                              format: date-time
                              description: The date and time the source was modified.
                              example: '2021-03-29T22:01:50.474Z'
                            connector:
                              type: string
                              description: The connector type used to connect to the source.
                              example: active-directory
                            actor:
                              required:
                                - type
                                - name
                              type: object
                              description: Identity who updated the source.
                              properties:
                                type:
                                  type: string
                                  description: DTO type of identity who updated the source.
                                  enum:
                                    - IDENTITY
                                  example: IDENTITY
                                id:
                                  type: string
                                  description: ID of identity who updated the source.
                                  example: 2c7180a46faadee4016fb4e018c20648
                                name:
                                  type: string
                                  description: Display name of identity who updated the source.
                                  example: William Wilson
                        - title: VA Cluster Status Change Event
                          type: object
                          required:
                            - created
                            - type
                            - application
                            - healthCheckResult
                            - previousHealthCheckResult
                          properties:
                            created:
                              type: string
                              format: date-time
                              description: The date and time the status change occurred.
                              example: '2020-06-29T22:01:50.474Z'
                            type:
                              enum:
                                - SOURCE
                                - CLUSTER
                              description: The type of the object that initiated this event.
                              example: CLUSTER
                            application:
                              type: object
                              description: Details about the `CLUSTER` or `SOURCE` that initiated this event.
                              required:
                                - id
                                - name
                                - attributes
                              properties:
                                id:
                                  type: string
                                  description: The GUID of the application
                                  example: 2c9180866166b5b0016167c32ef31a66
                                name:
                                  type: string
                                  description: The name of the application
                                  example: Production VA Cluster
                                attributes:
                                  type: object
                                  description: Custom map of attributes for a source.  This will only be populated if type is `SOURCE` and the source has a proxy.
                                  additionalProperties: true
                                  nullable: true
                                  example: null
                            healthCheckResult:
                              type: object
                              description: The results of the most recent health check.
                              required:
                                - message
                                - resultType
                                - status
                              properties:
                                message:
                                  type: string
                                  description: Detailed message of the result of the health check.
                                  example: Test Connection failed with exception. Error message - java.lang Exception
                                resultType:
                                  type: string
                                  description: The type of the health check result.
                                  example: SOURCE_STATE_ERROR_CLUSTER
                                status:
                                  enum:
                                    - Succeeded
                                    - Failed
                                  description: The status of the health check.
                                  example: Succeeded
                            previousHealthCheckResult:
                              type: object
                              description: The results of the last health check.
                              required:
                                - message
                                - resultType
                                - status
                              properties:
                                message:
                                  type: string
                                  description: Detailed message of the result of the health check.
                                  example: Test Connection failed with exception. Error message - java.lang Exception
                                resultType:
                                  type: string
                                  description: The type of the health check result.
                                  example: SOURCE_STATE_ERROR_CLUSTER
                                status:
                                  enum:
                                    - Succeeded
                                    - Failed
                                  description: The status of the health check.
                                  example: Failed
                    outputSchema:
                      type: string
                      description: The JSON schema of the response that will be sent by the subscribed service to the trigger in response to an event.  This only applies to a trigger type of `REQUEST_RESPONSE`.
                      nullable: true
                      example: '{"definitions":{"record:AccessRequestDynamicApproverOutput":{"type":["null","object"],"required":["id","name","type"],"additionalProperties":true,"properties":{"id":{"type":"string"},"name":{"type":"string"},"type":{"type":"string"}}}},"$ref":"#/definitions/record:AccessRequestDynamicApproverOutput"}'
                    exampleOutput:
                      description: An example of the JSON payload that will be sent by the subscribed service to the trigger in response to an event.
                      nullable: true
                      oneOf:
                        - title: Access Request Dynamic Approver
                          type: object
                          nullable: true
                          required:
                            - id
                            - name
                            - type
                          properties:
                            id:
                              type: string
                              description: The unique ID of the identity to add to the approver list for the access request.
                              example: 2c91808b6ef1d43e016efba0ce470906
                            name:
                              type: string
                              description: The name of the identity to add to the approver list for the access request.
                              example: Adam Adams
                            type:
                              enum:
                                - IDENTITY
                                - GOVERNANCE_GROUP
                              description: The type of object being referenced.
                              example: IDENTITY
                        - title: Access Request Pre Approval
                          type: object
                          required:
                            - approved
                            - comment
                            - approver
                          properties:
                            approved:
                              type: boolean
                              description: Whether or not to approve the access request.
                              example: false
                            comment:
                              type: string
                              description: A comment about the decision to approve or deny the request.
                              example: This access should be denied, because this will cause an SOD violation.
                            approver:
                              type: string
                              description: The name of the entity that approved or denied the request.
                              example: AcmeCorpExternalIntegration
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
