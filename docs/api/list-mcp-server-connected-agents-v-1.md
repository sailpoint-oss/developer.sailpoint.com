## OpenAPI

```yaml GET /business-applications/v1/mcp-servers/{id}/connected-agents
openapi: 3.0.1
info:
  title: SailPoint Identity Security API
  description: Use these APIs to interact with the SailPoint Identity Security platform to achieve repeatable, automated processes with greater scalability. We encourage you to join the SailPoint Developer Community forum at https://developer.sailpoint.com/discuss to connect with other developers using our APIs.
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
  /business-applications/v1/mcp-servers/{id}/connected-agents:
    get:
      description: Returns the AI agents connected to an MCP server. Results are sorted by `name` ascending unless `sorters` is provided. Filtering is not supported on this endpoint. Requires the `idn:business-application:read` right and the Machine Identity Security product to be enabled for the tenant. Returns `404` if MCP server discovery is not enabled for the tenant.
      operationId: listMcpServerConnectedAgentsV1
      security:
        - userAuth:
            - idn:business-application:read
      parameters:
        - in: path
          name: id
          schema:
            type: string
            format: uuid
          required: true
          x-sailpoint-resource-operation-id: listMcpServersV1
          description: MCP server ID.
          example: 2ee5e239-e68c-4d69-93fb-6c7ce4576190
        - in: query
          name: sorters
          required: false
          schema:
            type: string
            format: comma-separated
          example: name
          description: |-
            Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)

            Sorting is supported for the following fields: **created, modified, name, nativeIdentity, owners.primaryIdentity.name, owners.secondaryIdentity.name, source.name, resource.id**
        - in: query
          name: count
          description: |-
            If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.

            Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.

            See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
          required: false
          example: true
          schema:
            type: boolean
            default: false
        - in: query
          name: limit
          description: |-
            Max number of results to return.
            See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
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
            See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
          required: false
          example: 0
          schema:
            type: integer
            format: int32
            minimum: 0
            default: 0
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
          description: A list of AI agents connected to the MCP server.
          headers:
            X-Total-Count:
              description: Included when `count=true`.
              schema:
                type: string
          content:
            application/json:
              schema:
                type: array
                items:
                  allOf:
                    - type: object
                      title: Base Common Dto
                      required:
                        - name
                      properties:
                        id:
                          description: System-generated unique ID of the Object
                          type: string
                          example: id12345
                          readOnly: true
                        name:
                          description: Name of the Object
                          type: string
                          example: aName
                          nullable: true
                        created:
                          description: Creation date of the Object
                          type: string
                          example: '2015-05-28T14:07:17Z'
                          format: date-time
                          readOnly: true
                        modified:
                          description: Last modification date of the Object
                          type: string
                          example: '2015-05-28T14:07:17Z'
                          format: date-time
                          readOnly: true
                    - type: object
                      title: MCP Connected Agent
                      description: A machine identity (AI agent) connected to an MCP server.
                      properties:
                        nativeIdentity:
                          type: string
                          description: Native identity of the AI agent, as aggregated from the source.
                          example: abc:123:dddd
                        description:
                          type: string
                          nullable: true
                          description: AI agent description.
                          example: Code review assistant.
                        attributes:
                          type: object
                          description: Map of custom machine identity attributes.
                          additionalProperties: true
                          example:
                            Region: EU
                        subtype:
                          type: string
                          description: Machine identity subtype.
                          example: AI Agent
                        owners:
                          type: object
                          nullable: true
                          description: Owners of the AI agent.
                          properties:
                            primaryIdentity:
                              allOf:
                                - type: object
                                  title: Base Reference Dto
                                  properties:
                                    type:
                                      description: DTO type
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
                                      example: IDENTITY
                                      title: dtotype
                                    id:
                                      type: string
                                      description: ID of the object to which this reference applies
                                      example: 2c91808568c529c60168cca6f90c1313
                                    name:
                                      type: string
                                      description: Human-readable display name of the object to which this reference applies
                                      example: William Wilson
                              nullable: true
                              description: Primary owner.
                            secondaryIdentities:
                              type: array
                              description: Secondary owners.
                              items:
                                type: object
                                title: Base Reference Dto
                                properties:
                                  type:
                                    description: DTO type
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
                                    example: IDENTITY
                                    title: dtotype
                                  id:
                                    type: string
                                    description: ID of the object to which this reference applies
                                    example: 2c91808568c529c60168cca6f90c1313
                                  name:
                                    type: string
                                    description: Human-readable display name of the object to which this reference applies
                                    example: William Wilson
                        sourceId:
                          type: string
                          description: ID of the source the AI agent was aggregated from.
                          example: 6d28b7c1-620c-49c6-b6d5-cbf81eb4b5fa
                        uuid:
                          type: string
                          description: UUID of the AI agent, as aggregated from the source.
                          example: f5dd23fe-3414-42b7-bb1c-869400ad7a10
                        datasetId:
                          type: string
                          description: Dataset ID of the source the AI agent was aggregated from.
                          example: 8886e5e3-63d0-462f-a195-d98da885b8dc
                        source:
                          allOf:
                            - type: object
                              title: Base Reference Dto
                              properties:
                                type:
                                  description: DTO type
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
                                  example: IDENTITY
                                  title: dtotype
                                id:
                                  type: string
                                  description: ID of the object to which this reference applies
                                  example: 2c91808568c529c60168cca6f90c1313
                                name:
                                  type: string
                                  description: Human-readable display name of the object to which this reference applies
                                  example: William Wilson
                            - example:
                                id: 6d28b7c1-620c-49c6-b6d5-cbf81eb4b5fa
                                name: Cursor Agents
                                type: SOURCE
                          description: Source the AI agent was aggregated from.
                        manuallyEdited:
                          type: boolean
                          default: false
                          description: Indicates whether the AI agent has been manually edited.
                          example: false
                        manuallyCreated:
                          type: boolean
                          default: false
                          description: Indicates whether the AI agent was manually created.
                          example: false
                        existsOnSource:
                          type: string
                          description: Whether the AI agent still exists on its source.
                          enum:
                            - 'TRUE'
                            - 'FALSE'
                            - NOT_APPLICABLE
                          example: 'TRUE'
                        userEntitlements:
                          type: array
                          description: User entitlements associated with the AI agent.
                          items:
                            type: object
                            properties:
                              sourceId:
                                type: string
                                description: Source ID of the entitlement.
                                example: 5898b7c1-620c-49c6-cccc-cbf81eb4bddd
                              entitlementId:
                                type: string
                                description: Entitlement ID.
                                example: 6d28b7c1-620c-49c6-b6d5-cbf81eb4b5fa
                              displayName:
                                type: string
                                description: Entitlement display name.
                                example: Entitlement Name
                              source:
                                allOf:
                                  - type: object
                                    title: Base Reference Dto
                                    properties:
                                      type:
                                        description: DTO type
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
                                        example: IDENTITY
                                        title: dtotype
                                      id:
                                        type: string
                                        description: ID of the object to which this reference applies
                                        example: 2c91808568c529c60168cca6f90c1313
                                      name:
                                        type: string
                                        description: Human-readable display name of the object to which this reference applies
                                        example: William Wilson
                                description: Source of the entitlement.
                        businessApplicationRefs:
                          type: array
                          description: Business Applications the AI agent is linked to. Omitted when Business Application context is not available for the tenant.
                          items:
                            type: object
                            properties:
                              type:
                                type: string
                                description: Reference type.
                                enum:
                                  - BUSINESS_APPLICATION
                                example: BUSINESS_APPLICATION
                              id:
                                type: string
                                format: uuid
                                description: Business Application ID.
                                example: 2ee5e239-e68c-4d69-93fb-6c7ce4576190
                              name:
                                type: string
                                nullable: true
                                description: Business Application name.
                                example: Cursor
                              sanctionedStatus:
                                allOf:
                                  - type: string
                                    title: Sanctioned Status
                                    description: Indicates whether a Business Application is sanctioned for use within the organization. Machine identities linked to a Business Application inherit this value. Defaults to `UNKNOWN` when not explicitly set.
                                    enum:
                                      - SANCTIONED
                                      - UNSANCTIONED
                                      - UNKNOWN
                                    example: SANCTIONED
                                description: Sanctioned status of the linked Business Application.
                              correlationType:
                                type: string
                                description: Whether the link was assigned manually or correlated automatically.
                                enum:
                                  - MANUAL
                                  - AUTOMATIC
                                example: AUTOMATIC
                        effectiveSanctionedStatus:
                          allOf:
                            - type: string
                              title: Sanctioned Status
                              description: Indicates whether a Business Application is sanctioned for use within the organization. Machine identities linked to a Business Application inherit this value. Defaults to `UNKNOWN` when not explicitly set.
                              enum:
                                - SANCTIONED
                                - UNSANCTIONED
                                - UNKNOWN
                              example: SANCTIONED
                          description: Sanctioned status the AI agent inherits from its linked Business Applications. Omitted when Business Application context is not available for the tenant.
                  title: mcpconnectedagent
        '400':
          description: Client Error - Returned if `id` is not a valid UUID, if `filters` is provided, or if `sorters` names an unsupported field.
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
          description: Not Found - Returned if no MCP server exists for the given ID, or if MCP server discovery is not enabled for the tenant.
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
