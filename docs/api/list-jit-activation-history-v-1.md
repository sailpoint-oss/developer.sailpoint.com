## OpenAPI

```yaml GET /jit-activation-history/v1
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
  /jit-activation-history/v1:
    get:
      description: |
        Returns JIT activation history records for the tenant.

        This is the admin/operator view - it returns activations across all identities in the tenant.
        Requires `idn:jit-activation-history:read`.

        Returns HTTP 403 when the `PSPM_858_JIT_ACCESS_ACTIVATION_HISTORY_SEARCH` feature flag is disabled.
      operationId: listJitActivationHistoryV1
      security:
        - userAuth:
            - idn:jit-activation-history:read
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
          name: sorters
          required: false
          schema:
            type: string
            format: comma-separated
          description: |-
            Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)

            Sorting is supported for the following fields: **activationInitiated, provisionCompleted, status**

            Default sort is **-activationInitiated** (newest first).
          example: '-activationInitiated'
        - in: query
          name: searchAfter
          required: false
          schema:
            type: string
            format: comma-separated
          style: form
          explode: true
          description: |-
            Used to begin the search window at the values specified. This parameter consists of the last values of the sorted fields in the current record set.

            searchAfter length must match the number of sorters. Used to paginate beyond the offset limit of 10,000.

            It is recommended to always include the ID of the object in addition to any other sort fields to ensure no duplicate results while paging.

            For example, if sorting by activationInitiated you will also want to include ID: searchAfter=2026-07-08T14:33:52.029Z,367fb802-1026-1835-a619-11a56e4c5be3&sorters=activationInitiated,id
          example: 2026-07-08T14:33:52.029Z,367fb802-1026-1835-a619-11a56e4c5be3
        - in: query
          name: filters
          required: false
          schema:
            type: string
          description: |-
            Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)

            Filtering is supported for the following fields and operators:

            **identityId**: *eq, in*

            **entitlementId**: *eq, in*

            **sourceId**: *eq*

            **connectionId**: *eq*

            **status**: *eq, in*

            **activationInitiated**: *gt, lt, ge, le*

            **policyFrictionOutcome**: *eq, in*
          example: status eq "PROVISIONED"
        - name: X-SailPoint-Experimental
          in: header
          description: Use this header to enable this experimental API.
          example: true
          schema:
            type: string
            default: true
          required: true
      responses:
        '200':
          description: List of JIT activation history records matching the request.
          headers:
            X-Total-Count:
              description: The total result count (returned when count=true is passed).
              schema:
                type: integer
                format: int32
          content:
            application/json:
              schema:
                type: array
                items:
                  type: object
                  description: A single JIT activation history record.
                  properties:
                    id:
                      type: string
                      description: Unique identifier of the activation record.
                      example: 2c9180867e20630b017e20be7c222499
                    tenantId:
                      type: string
                      description: Tenant (pod/org) identifier.
                      example: 2c9180867e20630b017e20be7c222491
                    identityId:
                      type: string
                      description: Identifier of the identity that requested activation.
                      example: 2c9180867e20630b017e20be7c222492
                    accountId:
                      type: string
                      description: Identifier of the account on which the entitlement was provisioned.
                      example: 2c9180867e20630b017e20be7c222493
                    entitlementId:
                      type: string
                      description: Identifier of the entitlement that was activated.
                      example: ae735f40-4de9-4163-801d-4a1444e59d35
                    sourceId:
                      type: string
                      description: Identifier of the source that owns the entitlement.
                      example: 2c9180867e20630b017e20be7c222494
                    connectionId:
                      type: string
                      description: Identifier of the entitlement connection used for this activation.
                      example: 667fb802-0025-4865-a519-91a56e4c5b7e
                    identityName:
                      type: string
                      description: Display name of the identity.
                      example: Jane Doe
                    entitlementName:
                      type: string
                      description: Display name of the entitlement.
                      example: Azure AD - Global Admin
                    sourceDisplayName:
                      type: string
                      description: Display name of the source.
                      example: Azure Active Directory
                    policyDisplayNames:
                      type: array
                      description: Display names of the JIT policies that matched this activation.
                      items:
                        type: string
                      example:
                        - Privileged Access Policy
                    status:
                      type: string
                      description: 'Current or final status of the activation workflow. Possible values: ACTIVATING, AWAITING_FRICTIONS, PROVISIONING, PROVISIONED, DEPROVISIONING, COMPLETE, CANCELLED, ERROR, TIMED_OUT, REVOKED.'
                      example: PROVISIONED
                    error:
                      type: string
                      nullable: true
                      description: Error message if the activation ended in an ERROR state.
                      example: Upstream provisioning failed after 3 retries (503)
                    policyFrictionOutcome:
                      type: string
                      nullable: true
                      description: Outcome of policy friction evaluation (e.g. SUCCESS_ENFORCED, BYPASSED).
                      example: SUCCESS_ENFORCED
                    policyMatchDetails:
                      type: array
                      nullable: true
                      description: UUIDs of the policy records that matched this activation.
                      items:
                        type: string
                      example:
                        - 4d79eca9-8a77-4d06-8297-9be9868906f1
                    activationInitiated:
                      type: string
                      format: date-time
                      nullable: true
                      description: Timestamp when the activation was initiated.
                      example: '2026-04-01T10:00:00Z'
                    provisionStart:
                      type: string
                      format: date-time
                      nullable: true
                      description: Timestamp when provisioning started.
                      example: '2026-04-01T10:00:05Z'
                    provisionCompleted:
                      type: string
                      format: date-time
                      nullable: true
                      description: Timestamp when provisioning completed.
                      example: '2026-04-01T10:00:30Z'
                    deprovisionStart:
                      type: string
                      format: date-time
                      nullable: true
                      description: Timestamp when deprovisioning started.
                      example: '2026-04-01T11:00:00Z'
                    deprovisionComplete:
                      type: string
                      format: date-time
                      nullable: true
                      description: Timestamp when deprovisioning completed.
                      example: '2026-04-01T11:00:20Z'
                    provisionDurationMins:
                      type: number
                      format: float
                      nullable: true
                      description: Duration of the provisioning phase in minutes.
                      example: 0.42
                    deprovisionDurationMins:
                      type: number
                      format: float
                      nullable: true
                      description: Duration of the deprovisioning phase in minutes.
                      example: 0.33
                    summary:
                      Type: object
                      nullable: true
                      description: High-level friction summary for the activation, including policy matches, reauthentication, justification, and ticket details. Null when no policy was matched or frictions were not evaluated.
                      properties:
                        policyMatches:
                          type: array
                          description: List of policies that matched during activation evaluation.
                          items:
                            type: object
                            properties:
                              policyId:
                                type: string
                                description: UUID of the matched policy.
                                example: 4d79eca9-8a77-4d06-8297-9be9868906f1
                              policyName:
                                type: string
                                description: Display name of the matched policy.
                                example: Austin Engineering Policy
                        reauthentication:
                          type: object
                          nullable: true
                          description: Reauthentication friction details.
                          properties:
                            required:
                              type: boolean
                              default: false
                              description: Whether reauthentication was required for this activation.
                              example: true
                            bypassed:
                              type: boolean
                              default: false
                              description: Whether the reauthentication requirement was bypassed.
                              example: false
                        justification:
                          type: object
                          nullable: true
                          description: Justification friction details.
                          properties:
                            required:
                              type: boolean
                              default: false
                              description: Whether a justification was required for this activation.
                              example: true
                            bypassed:
                              type: boolean
                              default: false
                              description: Whether the justification requirement was bypassed.
                              example: false
                        serviceNowTicket:
                          type: object
                          nullable: true
                          description: ServiceNow ticket friction details.
                          properties:
                            required:
                              type: boolean
                              default: false
                              description: Whether a ServiceNow ticket was required for this activation.
                              example: true
                            bypassed:
                              type: boolean
                              default: false
                              description: Whether the ServiceNow ticket requirement was bypassed.
                              example: false
                            ticketReference:
                              type: string
                              nullable: true
                              description: ServiceNow ticket reference submitted by the user.
                              example: INC0012345
                    frictions:
                      type: array
                      nullable: true
                      description: Individual friction items presented to the user during activation (e.g. TICKET, JUSTIFICATION, REAUTH). Null when no friction was evaluated.
                      items:
                        type: object
                        properties:
                          type:
                            type: string
                            description: Type of friction control.
                            example: TICKET
                          bypassAllowed:
                            type: boolean
                            default: false
                            description: Whether the user had permission to bypass this friction.
                            example: false
                          submittedData:
                            type: string
                            nullable: true
                            description: Data submitted by the user to satisfy this friction (e.g. ticket ID, justification text).
                            example: INC0012345
                          status:
                            type: string
                            description: Completion status of this friction item.
                            example: COMPLETE
                      example:
                        - type: TICKET
                          bypassAllowed: false
                          submittedData: INC0012345
                          status: COMPLETE
                        - type: JUSTIFICATION
                          bypassAllowed: false
                          submittedData: Need access to deploy to production.
                          status: COMPLETE
                    activationDetails:
                      type: object
                      nullable: true
                      description: Additional structured metadata about the activation. Shape is subject to change.
                      additionalProperties: true
                      example: null
                    activationDuration:
                      type: object
                      nullable: true
                      description: Duration breakdown of the full activation lifecycle. Shape is subject to change.
                      additionalProperties: true
                      example: null
                    provisioningDetails:
                      type: object
                      nullable: true
                      description: Low-level provisioning operation detail. Shape is subject to change.
                      additionalProperties: true
                      example: null
                  title: jitactivationhistorydocument
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
