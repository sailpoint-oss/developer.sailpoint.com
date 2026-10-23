## OpenAPI

```yaml POST /access-requests/v1/accounts-selection
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
  /access-requests/v1/accounts-selection:
    post:
      description: |
        Use this API to fetch account information for an identity against the items in an access request.

        Used to fetch accountSelection for the AccessRequest prior to submitting for async processing.

        __Machine identities__

        * Must use `requestedForWithRequestedItems` with `identityType: MACHINE` on each entry.

        * Fields `requestedFor` / `requestedItems` are not supported and should be omitted.

        * Only `ENTITLEMENT` items are supported.

        * Mixed human and machine identities in one request are not supported.

        * Response identities use `type: MACHINE_IDENTITY`. Use the returned account `accountUuid` / `nativeIdentity`
        values when submitting the access request; invalid or mismatched account details are rejected on create.

        * If the machine has no account on a requested source, the item may be returned with
        `accountsSelectionBlocked: true` and `accountsSelectionBlockedReason: NO_ACCOUNT_ON_SOURCE` (empty accounts on the
        response in that blocked case is expected).

        * Same licensing, `machineIdentityAccessRequestEnabled`, and request-on-behalf-of rules as create access request
        apply.
      operationId: loadAccountSelectionsV1
      security:
        - userAuth:
            - idn:access-request:create
      parameters:
        - name: X-SailPoint-Experimental
          in: header
          description: Use this header to enable this experimental API.
          example: true
          schema:
            type: string
            default: true
          required: true
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              title: Accounts Selection Request
              description: |
                Prefetch account selections for an access request before submit. Machine identity accounts-selection must use `requestedForWithRequestedItems` with `identityType: MACHINE` on each entry and only `ENTITLEMENT` items. Flat `requestedFor` / `requestedItems` must be omitted (do not send an empty array) for machine requests.
              properties:
                requestedFor:
                  description: |-
                    A list of Identity IDs for whom the Access is requested.
                    * Must be omitted (do not send an empty array) when using `requestedForWithRequestedItems`
                      (including all machine identity requests).
                  type: array
                  items:
                    type: string
                  example: 2c918084660f45d6016617daa9210584
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
                requestedItems:
                  description: |
                    Access items requested.
                    * Must be omitted (do not send an empty array) when using `requestedForWithRequestedItems`.
                  type: array
                  items:
                    type: object
                    title: Access Request Item
                    properties:
                      type:
                        type: string
                        enum:
                          - ACCESS_PROFILE
                          - ROLE
                          - ENTITLEMENT
                        description: The type of the item being requested.
                        example: ACCESS_PROFILE
                      id:
                        type: string
                        description: ID of Role, Access Profile or Entitlement being requested.
                        example: 2c9180835d2e5168015d32f890ca1581
                      comment:
                        type: string
                        description: |
                          Comment provided by requester.
                          * Comment is required when the request is of type Revoke Access.
                        example: Requesting access profile for John Doe
                      clientMetadata:
                        type: object
                        additionalProperties:
                          type: string
                          example:
                            requestedAppId: 2c91808f7892918f0178b78da4a305a1
                            requestedAppName: test-app
                        example:
                          requestedAppName: test-app
                          requestedAppId: 2c91808f7892918f0178b78da4a305a1
                        description: Arbitrary key-value pairs. They will never be processed by the IdentityNow system but will be returned on associated APIs such as /account-activities and /access-request-status.
                      startDate:
                        type: string
                        description: |
                          The date and time the role or access profile or entitlement is/will be provisioned to the specified identity. Also known as the sunrise date.
                          * Specify a date-time in the future.
                          * This date-time can be used to indicate date-time when access item will be provisioned on the identity account. A GRANT_ACCESS request can use startDate to specify when to schedule provisioning of access item for an identity/account & a MODIFY_ACCESS request can use startDate to change the provisioning date-time of already assigned access item. But REVOKE_ACCESS request can not have startDate field. You can change the sunrise date in requests for yourself or others you are authorized to request for.
                          * If the startDate is in the past, then the provisioning will be processed as soon as possible, but no guarantees can be made about when the provisioning will occur. If the startDate is in the future, then the provisioning will be scheduled to occur on that date and time. If no startDate is provided, then the provisioning will be processed as soon as possible.
                        format: date-time
                        example: '2020-06-12T21:22:23.000Z'
                      removeDate:
                        type: string
                        description: |
                          The date and time the role or access profile or entitlement is no longer assigned to the specified identity. Also known as the expiration date.
                          * Specify a date-time in the future.
                          * The current SLA for the deprovisioning is 24 hours.
                          * This date-time can be used to change the duration of an existing access item assignment for the specified identity. A GRANT_ACCESS request can extend duration or even remove an expiration date, and either a  GRANT_ACCESS or REVOKE_ACCESS request can reduce duration or add an expiration date where one has not previously been present. You can change the expiration date in requests for yourself or others you are authorized to request for.
                        format: date-time
                        example: '2020-07-11T21:23:15.000Z'
                      assignmentId:
                        type: string
                        nullable: true
                        description: |
                          The assignmentId for a specific role assignment on the identity. This id is used to revoke that specific roleAssignment on that identity.
                          * For use with REVOKE_ACCESS requests for roles for identities with multiple accounts on a single source.
                        example: ee48a191c00d49bf9264eb0a4fc3a9fc
                      nativeIdentity:
                        type: string
                        nullable: true
                        description: |
                          The unique identifier for an account on the identity, designated as the account ID attribute in the source's account schema. This is used to revoke a specific attributeAssignment on the identity.
                          * For use with REVOKE_ACCESS requests for entitlements for identities with multiple accounts on a single source.
                        example: CN=User db3377de14bf,OU=YOURCONTAINER, DC=YOURDOMAIN
                      formInstanceId:
                        type: string
                        nullable: true
                        description: Optional ID of a completed form instance for this line item. For human GRANT_ACCESS requests, include when the requested role, access profile, or entitlement has an associated `formDefinitionId` in its request configuration. An empty `formInstanceId` on a GRANT_ACCESS item is rejected with HTTP 400. Not used for REVOKE_ACCESS.
                        example: 9f3a1d2e-3f4a-5b6c-7d8e-9f0a1b2c3d4e
                    required:
                      - id
                      - type
                  minItems: 1
                  maxItems: 25
                clientMetadata:
                  type: object
                  additionalProperties:
                    type: string
                    example:
                      requestedAppId: 2c91808f7892918f0178b78da4a305a1
                      requestedAppName: test-app
                  example:
                    requestedAppId: 2c91808f7892918f0178b78da4a305a1
                    requestedAppName: test-app
                  description: Arbitrary key-value pairs. They will never be processed by the IdentityNow system but will be returned on associated APIs such as /account-activities.
                requestedForWithRequestedItems:
                  description: |-
                    Nested payload pairing each identity with its requested items.
                    * Required for machine identity accounts-selection. Set `identityType: MACHINE` on each entry.
                    * Machine requests support `ENTITLEMENT` items only and do not allow mixed human and machine identities.
                    * When present, `requestedFor` and `requestedItems` must be omitted (do not send an empty array).
                  type: array
                  items:
                    type: object
                    properties:
                      identityId:
                        type: string
                        nullable: false
                        description: |
                          The identity id the access is requested for. * `HUMAN` (default): the human identity id. * `MACHINE`: the machine identity id (hyphenated RFC-4122 UUID, not the correlated human identity).
                        example: cb89bc2f1ee6445fbea12224c526ba3a
                      identityType:
                        type: string
                        enum:
                          - HUMAN
                          - MACHINE
                        default: HUMAN
                        description: |
                          Type of identity the access is requested for.
                          * `HUMAN` (default) - standard human identity access request.
                          * `MACHINE` - machine identity access request. When `MACHINE`, all entries in the request must also be `MACHINE` (mixed human and machine identities in one request are not supported), and only `ENTITLEMENT` items are allowed.
                        example: HUMAN
                      requestedItems:
                        description: the details for the access items that are requested for the identity
                        type: array
                        items:
                          type: object
                          properties:
                            type:
                              type: string
                              enum:
                                - ACCESS_PROFILE
                                - ROLE
                                - ENTITLEMENT
                              description: |
                                The type of the item being requested.
                                * Machine identity access requests support `ENTITLEMENT` only.
                              example: ACCESS_PROFILE
                            id:
                              type: string
                              description: ID of Role, Access Profile or Entitlement being requested.
                              example: 2c9180835d2e5168015d32f890ca1581
                            comment:
                              type: string
                              description: |
                                Comment provided by requester.
                                * Comment is required when the request is of type Revoke Access.
                              example: Requesting access profile for John Doe
                            clientMetadata:
                              type: object
                              additionalProperties:
                                type: string
                                example:
                                  requestedAppId: 2c91808f7892918f0178b78da4a305a1
                                  requestedAppName: test-app
                              example:
                                requestedAppName: test-app
                                requestedAppId: 2c91808f7892918f0178b78da4a305a1
                              description: Arbitrary key-value pairs. They will never be processed by the IdentityNow system but will be returned on associated APIs such as /account-activities and /access-request-status.
                            startDate:
                              type: string
                              description: |
                                The date and time the role or access profile or entitlement is/will be provisioned to the specified identity. Also known as the sunrise date.
                                * Specify a date-time in the future.
                                * This date-time can be used to indicate date-time when access item will be provisioned on the identity account. A GRANT_ACCESS request can use startDate to specify when to schedule provisioning of access item for an identity/account & a MODIFY_ACCESS request can use startDate to change the provisioning date-time of already assigned access item. But REVOKE_ACCESS request can not have startDate field. You can change the sunrise date in requests for yourself or others you are authorized to request for.
                                * If the startDate is in the past, then the provisioning will be processed as soon as possible, but no guarantees can be made about when the provisioning will occur. If the startDate is in the future, then the provisioning will be scheduled to occur on that date and time. If no startDate is provided, then the provisioning will be processed as soon as possible.
                                * For machine identity MODIFY_ACCESS, each requested item must include `startDate` and/or `removeDate`.
                              format: date-time
                              example: '2020-06-12T21:22:23.000Z'
                            removeDate:
                              type: string
                              description: |
                                The date and time the role or access profile or entitlement is no longer assigned to the specified identity. Also known as the expiration date.
                                * Specify a date-time in the future.
                                * The current SLA for the deprovisioning is 24 hours.
                                * This date-time can be used to change the duration of an existing access item assignment for the specified identity. A GRANT_ACCESS request can extend duration or even remove an expiration date, and either a  GRANT_ACCESS or REVOKE_ACCESS request can reduce duration or add an expiration date where one has not previously been present. You can change the expiration date in requests for yourself or others you are authorized to request for.
                                * For machine identity MODIFY_ACCESS, each requested item must include `startDate` and/or `removeDate`.
                              format: date-time
                              example: '2020-07-11T21:23:15.000Z'
                            accountSelection:
                              type: array
                              items:
                                type: object
                                properties:
                                  sourceId:
                                    type: string
                                    nullable: true
                                    description: The id for the source on which account selections are made
                                    example: cb89bc2f1ee6445fbea12224c526ba3a
                                  accounts:
                                    description: A list of account selections on the source. Currently, only one selection per source is supported.
                                    type: array
                                    items:
                                      type: object
                                      properties:
                                        accountUuid:
                                          type: string
                                          nullable: true
                                          description: The uuid for the account on the source, available under the 'objectguid' attribute * Corresponds to the account's unique identifier as returned by accounts-selection or the accounts APIs. * For machine identity GRANT_ACCESS / MODIFY_ACCESS, provide `accountUuid` and/or `nativeIdentity`. Submitted values must match a real machine account for the requested machine identity on the selected source.
                                          example: '{fab7119e-004f-4822-9c33-b8d570d6c6a6}'
                                        nativeIdentity:
                                          type: string
                                          nullable: false
                                          description: The 'distinguishedName' attribute for the account. * For machine identity GRANT_ACCESS / MODIFY_ACCESS, provide `accountUuid` and/or `nativeIdentity`. Submitted values must match a real machine account for the requested machine identity on the selected source.
                                          example: CN=Glen 067da3248e914,OU=YOUROU,OU=org-data-service,DC=YOURDC,DC=local
                                      title: accountitemref
                                    nullable: true
                                title: sourceitemref
                              nullable: true
                              description: |
                                The accounts where the access item will be provisioned to.

                                * Includes selections performed by the user in the event of multiple accounts existing on the same source.

                                * Also includes details for sources where user only has one account.

                                * For machine identity GRANT_ACCESS and MODIFY_ACCESS: required. Provide exactly one source entry and exactly one
                                account on that source. `accountUuid` and/or `nativeIdentity` must match a real machine account for the requested
                                machine identity on that source. Prefer values returned by the accounts-selection API.

                                * For machine identity REVOKE_ACCESS: not supported. Use `nativeIdentity` on the item instead.
                            nativeIdentity:
                              type: string
                              nullable: true
                              description: |
                                The unique identifier for an account on the identity, designated as the account ID attribute in the source's account schema.
                                * For machine identity REVOKE_ACCESS: required per entitlement item (or auto-resolved when the machine has exactly one account on the entitlement source). Must match a machine account on that source. Do not send `accountSelection` on machine revoke. Human REVOKE_ACCESS cannot use this nested item schema; use flat `requestedItems` instead.
                              example: CN=User db3377de14bf,OU=YOURCONTAINER, DC=YOURDOMAIN
                            formInstanceId:
                              type: string
                              nullable: true
                              description: |-
                                Optional ID of a completed form instance for this line item.
                                * For human GRANT_ACCESS: include when the requested role, access profile, or entitlement has an associated `formDefinitionId` in its request configuration. An empty `formInstanceId` on a GRANT_ACCESS item is rejected with HTTP 400.
                                * Not supported for machine identity access requests.
                              example: 9f3a1d2e-3f4a-5b6c-7d8e-9f0a1b2c3d4e
                          required:
                            - id
                            - type
                          title: requesteditemdtoref
                        nullable: false
                    required:
                      - identityId
                      - requestedItems
                    title: requestedfordtoref
                  nullable: true
            examples:
              Humans:
                description: Accounts-selection for a human identity using the flat requestedFor / requestedItems shape.
                value:
                  requestType: GRANT_ACCESS
                  requestedFor:
                    - 2c918084660f45d6016617daa9210584
                  requestedItems:
                    - type: ACCESS_PROFILE
                      id: 2c9180835d2e5168015d32f890ca1581
              Machines:
                description: Accounts-selection for a machine identity using requestedForWithRequestedItems.
                value:
                  requestType: GRANT_ACCESS
                  requestedForWithRequestedItems:
                    - identityId: a1111111-bc6d-4ff3-8365-c2d44f2c68d6
                      identityType: MACHINE
                      requestedItems:
                        - id: 2c9180835d2e5168015d32f890ca1581
                          type: ENTITLEMENT
      responses:
        '200':
          description: Accounts Selection Response
          content:
            application/json:
              schema:
                type: object
                properties:
                  identities:
                    description: A list of available account selections per identity in the request, for all the requested items
                    type: array
                    items:
                      type: object
                      properties:
                        requestedItems:
                          description: Available account selections for the identity, per requested item
                          type: array
                          items:
                            type: object
                            properties:
                              description:
                                type: string
                                description: The description for this requested item
                                example: An access profile for the admins
                              accountsSelectionBlocked:
                                type: boolean
                                default: false
                                description: |
                                  This field indicates if account selections are not allowed for this requested item.
                                  * If true, this field indicates that account selections will not be available for this item and identity combination. In this case, no account selections should be provided in the access request for this item and identity combination, irrespective of whether the identity has single or multiple accounts on a source.
                                  * An example is where a user is requesting an access profile that is already assigned to one of their accounts.
                                  * For machine identities, this can be true with reason `NO_ACCOUNT_ON_SOURCE` when the machine has no account on a requested source. Empty `sources[].accounts` on the accounts-selection response is valid in that blocked case; submitting empty accounts on create is not valid.
                                example: false
                              accountsSelectionBlockedReason:
                                type: string
                                description: |
                                  If account selections are not allowed for an item, this field will denote the reason.
                                  * `ACCESS_PROFILE_ALREADY_ASSIGNED_TO_AN_ACCOUNT` - access profile already assigned on an account.
                                  * `NO_ACCOUNT_ON_SOURCE` - no account found on at least one requested source (only for machine identities).
                                nullable: true
                                example: ACCESS_PROFILE_ALREADY_ASSIGNED_TO_AN_ACCOUNT
                              type:
                                type: string
                                enum:
                                  - ACCESS_PROFILE
                                  - ROLE
                                  - ENTITLEMENT
                                description: The type of the item being requested.
                                example: ACCESS_PROFILE
                              id:
                                type: string
                                description: The id of the requested item
                                example: 720fd239701344aea76c93ba91376aec
                              name:
                                type: string
                                description: The name of the requested item
                                example: Test Access Profile
                              sources:
                                description: The details for the sources and accounts for the requested item and identity combination
                                type: array
                                items:
                                  type: object
                                  properties:
                                    type:
                                      description: DTO type
                                      example: SOURCE
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
                                    id:
                                      description: The source id
                                      type: string
                                      example: 3ac3c43785a845fa9820b0c1ac767cd5
                                    name:
                                      description: The source name
                                      example: Test Source_Name
                                      type: string
                                    accounts:
                                      description: The accounts information for a particular source in the requested item
                                      type: array
                                      items:
                                        type: object
                                        properties:
                                          uuid:
                                            type: string
                                            description: The uuid for the account, available under the 'objectguid' attribute
                                            example: '{fab7119e-004f-4822-9c33-b8d570d6c6a6}'
                                          nativeIdentity:
                                            type: string
                                            description: The 'distinguishedName' attribute for the account
                                            example: CN=Glen 067da3248e914,OU=YOUROU,OU=org-data-service,DC=YOURDC,DC=local
                                          type:
                                            description: DTO type
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
                                          id:
                                            type: string
                                            description: The account id
                                            example: f19d168c27374fd1aff3b483573f997f
                                          name:
                                            type: string
                                            description: The account display name
                                            example: UserAccount.761a2248b
                                        title: accountinforef
                                  title: sourceaccountselections
                            title: requesteditemaccountselections
                        accountsSelectionRequired:
                          description: A boolean indicating whether any account selections will be required for the user to raise an access request
                          type: boolean
                          example: false
                          default: false
                        type:
                          description: |
                            DTO type of the requested-for identity. * `IDENTITY` for human identities. * `MACHINE_IDENTITY` for machine identities.
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
                          title: dtotype
                        id:
                          description: |
                            The identity id for the requested-for identity. * `IDENTITY`: the human identity id. * `MACHINE_IDENTITY`: the machine identity id (not the correlated human identity).
                          type: string
                          example: 70016590f2df4b879bdb1313a9e4e19e
                        name:
                          description: The name of the identity
                          type: string
                          example: User name
                      title: identityaccountselections
                title: accountsselectionresponse
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
