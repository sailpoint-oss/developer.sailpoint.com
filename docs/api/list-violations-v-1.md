## OpenAPI

```yaml GET /violations/v1
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
  /violations/v1:
    get:
      description: |
        Returns a paged list of policy violations for the current tenant. Requires the read scope (idn:sod-violation:read).
        This endpoint uses the standard collection parameters defined in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters/).
        This endpoint supports standard V3 collection parameters: `limit`, `offset`, `count`, `filters`, and `sorters`.
        Embedded references in each violation (`owner`, `target`, `policy`, and references inside `appliedControls`) follow the `ReferenceResponse` schema: `id` and `type` are always present; `name` is included when display metadata resolves.
        Filters and sorters are validated against a fixed whitelist of fields to ensure safe queries and to align with underlying database indexes.
      operationId: listViolationsV1
      security:
        - userAuth:
            - idn:sod-violation:read
      parameters:
        - name: X-SailPoint-Experimental
          in: header
          description: Use this header to enable this experimental API.
          example: true
          schema:
            type: string
            default: true
          required: true
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
          description: |-
            Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)

            Filtering is supported for the following fields and operators:

            **status**: *eq, in*

            **policyId**: *eq*

            **ownerId**: *eq*

            **level**: *eq, in*

            **policyName**: *eq, in, sw, co*

            **ownerName**: *eq, in, sw, co*

            **targetName**: *eq, in, sw, co*

            **targetId**: *eq, in*
          schema:
            type: string
          required: false
          example: status in ("Open","Mitigated") and level eq "High" and policyId eq "bc693f07-e7b6-4553-9626-c25954c58554" and ownerId eq "de305d54-75b4-431b-adb2-eb6b9e546014"
        - in: query
          name: sorters
          description: |-
            Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)

            Sorting is supported for the following fields: **level**

            Prefix a field with - for descending order, for example -level. If no sorters are provided, results default to created descending, then id descending.
          schema:
            type: string
          required: false
          example: '-level'
      responses:
        '200':
          description: List of policy violations
          headers:
            X-Total-Count:
              description: |
                Total number of matching violations (only present when `count=true`).
              schema:
                type: integer
          content:
            application/json:
              schema:
                type: array
                items:
                  type: object
                  description: A separation-of-duties policy violation for an identity.
                  required:
                    - id
                    - owner
                    - created
                    - modified
                    - conflictingCriteria
                    - appliedControls
                    - target
                    - policy
                    - status
                    - level
                    - expiration
                  properties:
                    id:
                      type: string
                      format: uuid
                      description: The system-generated unique identifier of the policy violation.
                      example: 3e078865-55ed-43cf-b83c-85c58d2016e6
                      readOnly: true
                    name:
                      type: string
                      description: The display name of the policy violation.
                      example: Policy Violation 123
                      readOnly: true
                    created:
                      type: string
                      format: date-time
                      description: The date and time when the policy violation was created.
                      example: '2025-01-01T00:00:00-05:00'
                      readOnly: true
                    modified:
                      type: string
                      format: date-time
                      description: The date and time when the policy violation was last modified.
                      example: '2025-01-01T02:00:00-05:00'
                      readOnly: true
                    lastEvaluatedDate:
                      type: string
                      format: date-time
                      description: The date and time when the policy violation was last evaluated by the policy engine.
                      example: '2025-01-01T01:00:00-05:00'
                      readOnly: true
                    owner:
                      type: object
                      description: |
                        Response reference: required id and type; optional name when display metadata resolves (omitted if not).
                        For request bodies use ReferenceInput (id and type only).
                      required:
                        - id
                        - type
                      properties:
                        id:
                          type: string
                          description: The unique identifier of the referenced object.
                          example: 3e07886555ed43cfb83c85c58d2016e6
                        name:
                          type: string
                          readOnly: true
                          description: Optional display name when metadata resolves. Omitted when unknown or not resolvable.
                          example: John Doe
                        type:
                          type: string
                          description: The type of the referenced object.
                          example: IDENTITY
                      title: referenceresponse
                    conflictingCriteria:
                      type: array
                      items:
                        type: object
                        description: A named set of conflicting access items that together define one side of a separation-of-duties conflict.
                        required:
                          - name
                          - conflictingItems
                        properties:
                          name:
                            type: string
                            description: The name of the access criteria grouping.
                            example: money-in
                          conflictingItems:
                            type: array
                            minItems: 1
                            description: The list of access items that make up this side of the conflict.
                            example:
                              - id: 2c9180866166b5b0016167c32ef31a66
                                name: Administrator
                                type: ENTITLEMENT
                            items:
                              type: object
                              description: A single access item that contributes to a separation-of-duties conflict.
                              required:
                                - id
                                - type
                              properties:
                                id:
                                  type: string
                                  description: The unique identifier of the conflicting access item.
                                  example: 3e07886555ed43cfb83c85c58d2016e6
                                name:
                                  type: string
                                  description: The display name of the conflicting access item.
                                  example: Administrator
                                type:
                                  type: string
                                  description: The type of access object represented by the conflicting item.
                                  enum:
                                    - ENTITLEMENT
                                    - ACCESS_PROFILE
                                    - ROLE
                                  example: ENTITLEMENT
                                sourceRef:
                                  type: object
                                  description: |
                                    Reference to the source system or object (for example the application backing an entitlement).
                                    On GET, when the conflicting item type is ENTITLEMENT, hydration may populate these fields from
                                    the entitlement service payload's `source` object.
                                  properties:
                                    id:
                                      type: string
                                      description: Source resource identifier when known.
                                      example: 2c9180825a6c1adc015a71c9db2101a1
                                    name:
                                      type: string
                                      description: Display name of the source.
                                      example: Active Directory
                                    type:
                                      type: string
                                      description: Source type classification (for example application or connector type).
                                      example: DIRECT_CONNECT
                                    description:
                                      type: string
                                      description: Human-readable description of the source.
                                      example: Corporate Active Directory source.
                                  title: conflictingitemsourceref
                                description:
                                  type: string
                                  description: Optional human-readable description of the conflicting item.
                                  example: Grants administrative access to the payroll application.
                              title: conflictingitem
                        title: accesscriteria-2
                      readOnly: true
                      description: |
                        List of conflicting criteria. Each conflicting item supports optional description and optional
                        sourceRef (id, name, type, description); for ENTITLEMENT items, sourceRef may be populated from
                        the entitlement's source on GET via hydration.
                      example:
                        - name: money-in
                          conflictingItems:
                            - id: 2c9180866166b5b0016167c32ef31a66
                              name: Administrator
                              type: ENTITLEMENT
                    appliedControls:
                      type: array
                      items:
                        type: object
                        description: A compensating control that has been applied to a policy violation.
                        required:
                          - id
                          - violation
                          - control
                          - applier
                          - appliedDate
                          - expiration
                        properties:
                          id:
                            type: string
                            format: uuid
                            description: The system-generated unique identifier of the applied control record.
                            example: 3e07886555ed43cfb83c85c58d2016e6
                          violation:
                            type: string
                            format: uuid
                            description: The unique identifier of the policy violation the control was applied to.
                            example: 99fbef9738c146e9b526b6147f57a0e2
                          control:
                            type: object
                            description: |
                              Response reference: required id and type; optional name when display metadata resolves (omitted if not).
                              For request bodies use ReferenceInput (id and type only).
                            required:
                              - id
                              - type
                            properties:
                              id:
                                type: string
                                description: The unique identifier of the referenced object.
                                example: 3e07886555ed43cfb83c85c58d2016e6
                              name:
                                type: string
                                readOnly: true
                                description: Optional display name when metadata resolves. Omitted when unknown or not resolvable.
                                example: John Doe
                              type:
                                type: string
                                description: The type of the referenced object.
                                example: IDENTITY
                            title: referenceresponse
                          applier:
                            type: object
                            description: |
                              Response reference: required id and type; optional name when display metadata resolves (omitted if not).
                              For request bodies use ReferenceInput (id and type only).
                            required:
                              - id
                              - type
                            properties:
                              id:
                                type: string
                                description: The unique identifier of the referenced object.
                                example: 3e07886555ed43cfb83c85c58d2016e6
                              name:
                                type: string
                                readOnly: true
                                description: Optional display name when metadata resolves. Omitted when unknown or not resolvable.
                                example: John Doe
                              type:
                                type: string
                                description: The type of the referenced object.
                                example: IDENTITY
                            title: referenceresponse
                          appliedDate:
                            type: string
                            format: date-time
                            description: The date and time when the control was applied to the violation.
                            example: '2025-01-01T00:00:00-05:00'
                            readOnly: true
                          expiration:
                            type: string
                            format: date-time
                            description: The date and time when the applied control expires.
                            example: '2025-01-01T02:00:00-05:00'
                            readOnly: true
                          comments:
                            type: string
                            description: Optional comments captured when the control was applied.
                            example: Some comments about the applied control
                          status:
                            readOnly: true
                            type: string
                            description: The processing status of a compensating control that has been applied to a policy violation.
                            enum:
                              - Pending
                              - Active
                              - Completed
                              - Canceled
                              - Failed
                            example: Pending
                            title: appliedcontrolstatus
                          workflowId:
                            type: string
                            description: The identifier of the workflow triggered when the control was applied.
                            example: 82044924-daff-4b0b-9dcb-17e64de4d25b
                        title: appliedcontrol
                      readOnly: true
                      description: List of compensating controls that have been applied to this policy violation.
                      example:
                        - id: 3e07886555ed43cfb83c85c58d2016e6
                          violation: 99fbef9738c146e9b526b6147f57a0e2
                          status: Active
                    expiration:
                      type: string
                      format: date-time
                      nullable: true
                      example: '2026-01-01T02:00:00-05:00'
                      readOnly: true
                      description: Expiration on the active applied compensating control row (latest applied_date, tie-break id). Always returned; null when there is no active control or that row has no expiration.
                    target:
                      type: object
                      description: |
                        Response reference: required id and type; optional name when display metadata resolves (omitted if not).
                        For request bodies use ReferenceInput (id and type only).
                      required:
                        - id
                        - type
                      properties:
                        id:
                          type: string
                          description: The unique identifier of the referenced object.
                          example: 3e07886555ed43cfb83c85c58d2016e6
                        name:
                          type: string
                          readOnly: true
                          description: Optional display name when metadata resolves. Omitted when unknown or not resolvable.
                          example: John Doe
                        type:
                          type: string
                          description: The type of the referenced object.
                          example: IDENTITY
                      title: referenceresponse
                    policy:
                      type: object
                      description: |
                        Response reference: required id and type; optional name when display metadata resolves (omitted if not).
                        For request bodies use ReferenceInput (id and type only).
                      required:
                        - id
                        - type
                      properties:
                        id:
                          type: string
                          description: The unique identifier of the referenced object.
                          example: 3e07886555ed43cfb83c85c58d2016e6
                        name:
                          type: string
                          readOnly: true
                          description: Optional display name when metadata resolves. Omitted when unknown or not resolvable.
                          example: John Doe
                        type:
                          type: string
                          description: The type of the referenced object.
                          example: IDENTITY
                      title: referenceresponse
                    status:
                      type: string
                      description: The current status of a policy violation.
                      enum:
                        - Open
                        - Mitigated
                        - Remediated
                        - Closed
                      example: Open
                      readOnly: true
                      title: policyviolationstatus
                    level:
                      type: string
                      description: The risk level assigned to a policy violation.
                      enum:
                        - Low
                        - Medium
                        - High
                        - Critical
                      example: High
                      readOnly: true
                      title: policyviolationrisklevel
                  title: policyviolationresponse
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
