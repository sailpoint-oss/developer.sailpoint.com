## OpenAPI

```yaml POST /access-requests/v1
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
  /access-requests/v1:
    post:
      description: |
        Use this API to submit an access request in Identity Security Cloud (ISC), where it follows any ISC approval processes.

        >**Security:** idn:access-request:manage is for ORG_ADMIN level. idn:access-request-self:manage is for USER level.

        :::info
        The ability to request access using this API is constrained by the Access Request Segments defined in the API token's user context.
        :::

        Access requests are processed asynchronously by ISC. A successful response from this endpoint means that the request
        has been submitted to ISC and is queued for processing. Because this endpoint is asynchronous, it does not return an error
        if you submit duplicate access requests in quick succession or submit an access request for access that is already in progress, approved, or rejected.

        It is best practice to check for any existing access requests that reference the same access items before submitting a new access request. This can
        be accomplished by using the [List Access Request Status](https://developer.sailpoint.com/docs/api/list-access-request-status-v-1) or the [Pending Access Request Approvals](https://developer.sailpoint.com/docs/api/list-pending-approvals-v-1) APIs. You can also
        use the [Search API](https://developer.sailpoint.com/docs/api/search) to check the existing access items an identity has before submitting
        an access request to ensure that you aren't requesting access that is already granted. If you use this API to request access that an identity already has, 
        without changing the account details or end date information from the existing assignment, 
        the API will cancel the request as a duplicate.

        There are two types of access request:

        __GRANT_ACCESS__
        * Can be requested for multiple identities in a single request.
        * Supports self request and request on behalf of other users. Refer to the [Get Access Request Configuration](https://developer.sailpoint.com/docs/api/get-access-request-config-v-2) endpoint for request configuration options.  
        * Allows any authenticated token (except API) to call this endpoint to request to grant access to themselves. Depending on the configuration, a user can request access for others.
        * Roles, access profiles and entitlements can be requested.
        * You can specify a `startDate` to set or alter a sunrise date-time on an assignment. The startDate must be a future date-time, in the UTC timezone. Additionally, if the user already has the access assigned with a sunrise date and its yet to be provisioned, you can also submit a request without a `startDate` to request immediate provisioning after approval.
        * If a `startDate` is specified, then the requested role, access profile, or entitlement will be provisioned on that date and time.
        * You can specify a `removeDate` to set or alter a sunset date-time on an assignment. The removeDate must be a future date-time, in the UTC timezone. Additionally, if the user already has the access assigned with a sunset date, you can also submit a request without a `removeDate` to request removal of the sunset date and time.
        * If a `removeDate` is specified, then the requested role, access profile, or entitlement will be removed on that date and time.
        * Now supports an alternate field 'requestedForWithRequestedItems' for users to specify account selections while requesting items where they have more than one account on the source.

        __MACHINE IDENTITY ACCESS REQUESTS__
        * Machine identity access requests reuse this same endpoint. They must use `requestedForWithRequestedItems` with `identityType: MACHINE` on each entry. Do not use the flat `requestedFor` / `requestedItems` shape for machines. Mixed human and machine identities in one request are not supported.
        * Request `identityType` uses `HUMAN` / `MACHINE`. List, status, and approval responses use `IDENTITY` / `MACHINE_IDENTITY` on `requestedFor.type` for the same distinction.

        Prerequisites and authorization:
        * The organization must have Machine Identity Security licensed; otherwise the request is rejected with 403.
        * Access request config v2 `machineIdentityAccessRequestEnabled` must be true (default true); otherwise 403.
        * Request-on-behalf-of for machines is controlled by `allowRequestOnBehalfOfForMachineIdentity` and `allowRequestForMachineByOwner` on the access request configuration. See those schema fields for the authorization cascade (open ROBO, owner/admin ROBO, then admin-only fallback).

        Constraints for machine requests:
        * Only `ENTITLEMENT` items are supported (roles and access profiles are rejected).
        * GRANT_ACCESS and MODIFY_ACCESS requests require `accountSelection` to be provided with `accountUuid` and/or `nativeIdentity`  that match a real machine account for that machine identity on the selected source. Prefer values returned by the accounts-selection API.
        * MODIFY_ACCESS requests additionally require each item to have `startDate` and/or `removeDate` to denote date modifications.
        * REVOKE_ACCESS must target exactly one machine identity. Per entitlement item, provide `nativeIdentity` (or it may be auto-resolved when the machine has exactly one account on the entitlement source). Do not send `accountSelection` on machine revoke.
        * Multi-machine GRANT_ACCESS is allowed within existing recipient limits; multi-machine REVOKE_ACCESS is not.

        __FORMS IN ACCESS REQUESTS__
        * Forms apply to human GRANT_ACCESS requests for roles, access profiles, and entitlements. Forms are not used for REVOKE_ACCESS.
        * Roles, access profiles, and entitlements can optionally reference a `formDefinitionId` in their request configuration. When configured, the requester completes that form and includes the resulting `formInstanceId` on each affected GRANT_ACCESS line item when submitting the access request.
        * Provide `formInstanceId` on each GRANT_ACCESS line item in `requestedItems` (flat payload) or in `requestedForWithRequestedItems.requestedItems` (nested payload). An empty `formInstanceId` on a GRANT_ACCESS line item is rejected with HTTP 400.
        * When a configured form is required, a missing `formInstanceId`, a submitted form whose definition does not match the configured `formDefinitionId`, or form instance data that could not be read may fail the request during asynchronous processing even when this endpoint returns success.
        * Reusing the same `formInstanceId` for the same requested object across multiple recipients is supported.
        * Completed form answers are returned on access request status, administration, and approval responses in the `form` object on each item. Access request pre-approval and dynamic approver trigger inputs may include `form` on each entry in `requestedItems`. The post-approval trigger includes `form` on each entry in `requestedItemsStatus`.

        :::caution

        If any entitlements are being requested, then the maximum number of entitlements that can be requested is 25, and the maximum number of identities that can be requested for is 10. If you exceed these limits, the request will fail with a 400 error. If you are not requesting any entitlements, then there are no limits.

        :::

        __REVOKE_ACCESS__
        * Can only be requested for a single identity at a time.
        * You cannot use an access request to revoke access from an identity if that access has been granted by role membership or by birthright provisioning. 
        * Does not support self request. Only manager can request to revoke access for their directly managed employees.
        * If a `removeDate` is specified, then the requested role, access profile, or entitlement will be removed on that date and time.
        * Roles, access profiles, and entitlements can be requested for revocation.
        * Revoke requests for entitlements are limited to 1 entitlement per access request currently.
        * You cannot specify a 'startDate' in a REVOKE_ACCESS request, as startDate is only applicable for GRANT_ACCESS requests to indicate when the access should be provisioned, and it does not make sense in the context of revoking access.
        * You can specify a `removeDate` to add or alter a sunset date and time on an assignment. The `removeDate` must be a future date-time, in the UTC timezone. If the user already has the access assigned with a sunset date and time, the removeDate must be a date-time earlier than the existing sunset date and time. 
        * Allows a manager to request to revoke access for direct employees. A user with ORG_ADMIN authority can also request to revoke access from anyone.
        * Now supports REVOKE_ACCESS requests for identities with multiple accounts on a single source, with the help of 'assignmentId' and 'nativeIdentity' fields. These fields should be used within the 'requestedItems' section for the revoke requests. 
        * For human identities, usage of 'requestedForWithRequestedItems' is not supported for revoke requests. Machine identity revoke requests must use 'requestedForWithRequestedItems' with `identityType: MACHINE` as described above.
      operationId: createAccessRequestV1
      security:
        - userAuth:
            - idn:access-request:manage
            - idn:access-request-self:manage
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              title: Access Request
              properties:
                requestedFor:
                  description: |-
                    A list of Identity IDs for whom the Access is requested. If it's a Revoke request, there can only be one Identity ID.
                    * Used for human identity requests with the 'requestedItems' field.
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
                  description: |-
                    * Used for human identity requests with the 'requestedFor' field.
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
                  description: |
                    Additional submit data structure with requestedFor containing requestedItems allowing distinction for each request item and Identity.
                    * Can only be used when 'requestedFor' and 'requestedItems' are not separately provided
                    * Adds ability to specify which account the user wants the access on, in case they have multiple accounts on a source.
                    * Allows the ability to request items with different start dates and remove dates.
                    * Also allows different combinations of request items and identities in the same request.
                    * For human identities, primarily used with GRANT_ACCESS (and related multi-account flows). Human REVOKE_ACCESS continues to use the flat `requestedFor` / `requestedItems` shape.
                    * Required for machine identity access requests. Set `identityType: MACHINE` on each entry. Machine requests support GRANT_ACCESS, MODIFY_ACCESS, and REVOKE_ACCESS with the constraints documented on the create endpoint and item schemas (entitlement-only; grant/modify account selection; revoke nativeIdentity).
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
              GRANT_ACCESS for Humans:
                description: GRANT_ACCESS for a human identity using the flat requestedFor / requestedItems shape (default when account selection is not needed), with optional formInstanceId when the requested object has an associated form.
                value:
                  requestType: GRANT_ACCESS
                  requestedFor:
                    - 2c918084660f45d6016617daa9210584
                  requestedItems:
                    - type: ACCESS_PROFILE
                      id: 2c9180835d2e5168015d32f890ca1581
                      comment: Requesting access profile for John Doe
                      formInstanceId: 9f3a1d2e-3f4a-5b6c-7d8e-9f0a1b2c3d4e
              GRANT_ACCESS for Humans with account selection:
                description: GRANT_ACCESS for a human identity using requestedForWithRequestedItems, with accountSelection, optional formInstanceId when the requested object has an associated form, and optional sunrise/sunset dates on the item.
                value:
                  requestType: GRANT_ACCESS
                  requestedForWithRequestedItems:
                    - identityId: 2c918084660f45d6016617daa9210584
                      identityType: HUMAN
                      requestedItems:
                        - type: ACCESS_PROFILE
                          id: 2c9180835d2e5168015d32f890ca1581
                          comment: Requesting access profile for John Doe
                          formInstanceId: 9f3a1d2e-3f4a-5b6c-7d8e-9f0a1b2c3d4e
                          startDate: '2027-01-15T21:22:23.000Z'
                          removeDate: '2027-07-11T21:23:15.000Z'
                          accountSelection:
                            - sourceId: cb89bc2f1ee6445fbea12224c526ba3a
                              accounts:
                                - accountUuid: '{fab7119e-004f-4822-9c33-b8d570d6c6a6}'
                                  nativeIdentity: CN=Glen 067da3248e914,OU=YOUROU,OU=org-data-service,DC=YOURDC,DC=local
              GRANT_ACCESS for Machines:
                description: GRANT_ACCESS for a machine identity using requestedForWithRequestedItems.
                value:
                  requestType: GRANT_ACCESS
                  requestedForWithRequestedItems:
                    - identityId: a1111111-bc6d-4ff3-8365-c2d44f2c68d6
                      identityType: MACHINE
                      requestedItems:
                        - id: 2c9180835d2e5168015d32f890ca1581
                          type: ENTITLEMENT
                          accountSelection:
                            - sourceId: cb89bc2f1ee6445fbea12224c526ba3a
                              accounts:
                                - accountUuid: '{fab7119e-004f-4822-9c33-b8d570d6c6a6}'
                                  nativeIdentity: CN=Glen 067da3248e914,OU=YOUROU,OU=org-data-service,DC=YOURDC,DC=local
              REVOKE_ACCESS for Humans:
                description: REVOKE_ACCESS for a human identity using the flat requestedFor / requestedItems shape. Comment is required. Human revoke cannot use requestedForWithRequestedItems.
                value:
                  requestType: REVOKE_ACCESS
                  requestedFor:
                    - 2c918084660f45d6016617daa9210584
                  requestedItems:
                    - type: ACCESS_PROFILE
                      id: 2c9180835d2e5168015d32f890ca1581
                      comment: I no longer need this access profile.
              REVOKE_ACCESS for Machines:
                description: REVOKE_ACCESS for a machine identity using requestedForWithRequestedItems and nativeIdentity.
                value:
                  requestType: REVOKE_ACCESS
                  requestedForWithRequestedItems:
                    - identityId: a1111111-bc6d-4ff3-8365-c2d44f2c68d6
                      identityType: MACHINE
                      requestedItems:
                        - id: 2c9180835d2e5168015d32f890ca1581
                          type: ENTITLEMENT
                          comment: Revoking entitlement from machine identity
                          nativeIdentity: CN=Glen 067da3248e914,OU=YOUROU,OU=org-data-service,DC=YOURDC,DC=local
      responses:
        '202':
          description: Access Request Response.
          content:
            application/json:
              schema:
                type: object
                properties:
                  newRequests:
                    description: A list of new access request tracking data mapped to the values requested.
                    type: array
                    items:
                      type: object
                      properties:
                        requestedFor:
                          type: string
                          description: The identity id in which the access request is for.
                          example: 2c918084660f45d6016617daa9210584
                        requestedItemsDetails:
                          type: array
                          description: The details of the item requested.
                          example: |-
                            {
                            "type": "ENTITLEMENT", 
                            "id": "779c6fd7171540bba1184e5946112c28" 
                             }
                          items:
                            type: object
                            properties:
                              type:
                                type: string
                                description: The type of access item requested.
                                enum:
                                  - ACCESS_PROFILE
                                  - ENTITLEMENT
                                  - ROLE
                                example: ENTITLEMENT
                              id:
                                type: string
                                description: The id of the access item requested.
                                example: 779c6fd7171540bba1184e5946112c28
                            title: requesteditemdetails
                        attributesHash:
                          type: integer
                          format: int32
                          description: a hash representation of the access requested, useful for longer term tracking client side.
                          example: -1928438224
                        accessRequestIds:
                          type: array
                          items:
                            type: string
                          description: a list of access request identifiers, generally only one will be populated, but high volume requested may result in multiple ids.
                          example:
                            - 5d3118c518a44ec7805450d53479ccdb
                      title: accessrequesttracking
                    example:
                      - requestedFor: 899fd612ecfc4cf3bf48f14d0afdef89
                        requestedItemsDetails:
                          - type: ENTITLEMENT
                            id: 779c6fd7171540bba1184e5946112c28
                        attributesHash: -1928438224
                        accessRequestIds:
                          - 5d3118c518a44ec7805450d53479ccdb
                  existingRequests:
                    description: A list of existing access request tracking data mapped to the values requested.  This indicates access has already been requested for this item.
                    type: array
                    items:
                      type: object
                      properties:
                        requestedFor:
                          type: string
                          description: The identity id in which the access request is for.
                          example: 2c918084660f45d6016617daa9210584
                        requestedItemsDetails:
                          type: array
                          description: The details of the item requested.
                          example: |-
                            {
                            "type": "ENTITLEMENT", 
                            "id": "779c6fd7171540bba1184e5946112c28" 
                             }
                          items:
                            type: object
                            properties:
                              type:
                                type: string
                                description: The type of access item requested.
                                enum:
                                  - ACCESS_PROFILE
                                  - ENTITLEMENT
                                  - ROLE
                                example: ENTITLEMENT
                              id:
                                type: string
                                description: The id of the access item requested.
                                example: 779c6fd7171540bba1184e5946112c28
                            title: requesteditemdetails
                        attributesHash:
                          type: integer
                          format: int32
                          description: a hash representation of the access requested, useful for longer term tracking client side.
                          example: -1928438224
                        accessRequestIds:
                          type: array
                          items:
                            type: string
                          description: a list of access request identifiers, generally only one will be populated, but high volume requested may result in multiple ids.
                          example:
                            - 5d3118c518a44ec7805450d53479ccdb
                      title: accessrequesttracking
                    example:
                      - requestedFor: 899fd612ecfc4cf3bf48f14d0afdef89
                        requestedItemsDetails:
                          - type: ROLE
                            id: 779c6fd7171540bbc1184e5946112c28
                        attributesHash: 2843118224
                        accessRequestIds:
                          - 5d3118c518a44ec7805450d53479ccdc
                title: accessrequestresponse
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
