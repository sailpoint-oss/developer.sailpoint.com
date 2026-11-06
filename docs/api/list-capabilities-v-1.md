## OpenAPI

```yaml GET /capabilities/v1
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
  /capabilities/v1:
    get:
      description: |
        This API returns a list of capabilities.


        Source sub-admins only see capabilities on the sources they manage.


        When Machine Identity Security is not enabled for the tenant, this API returns `404`. When the capabilities API is
        not enabled for the tenant, this API returns `403`.
      operationId: listCapabilitiesV1
      security:
        - userAuth:
            - idn:mis-identity:read
            - idn:mis-identity:manage
        - applicationAuth:
            - idn:mis-identity:read
            - idn:mis-identity:manage
      parameters:
        - in: query
          name: filters
          required: false
          schema:
            type: string
          example: type eq "MCP"
          description: |-
            Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)

            Filtering is supported for the following fields and operators:

            **name**: *eq, in, sw*

            **nativeIdentity**: *eq, in, sw*

            **type**: *eq, in*

            **environment**: *eq, in*

            **datasetId**: *eq, in*

            **resource.id**: *eq, in*

            **source.id**: *eq, in*

            **source.name**: *eq, in, sw*

            **owners.primary.id**: *eq, in*

            **owners.primary.name**: *eq, in, sw*

            **owners.primaryIdentity.id**: *eq, in*

            **owners.primaryIdentity.name**: *eq, in, sw*

            **owners.secondaryIdentity.id**: *eq, in*

            **owners.secondaryIdentity.name**: *eq, in, sw*

            **owners.secondaryGovernanceGroup.id**: *eq, in*

            **owners.secondaryGovernanceGroup.name**: *eq, in, sw*

            **owners.governanceGroup.id**: *eq, in*

            **owners.governanceGroup.name**: *eq, in, sw*

            **created**: *gt, ge, lt, le*

            **modified**: *gt, ge, lt, le*
        - in: query
          name: sorters
          schema:
            type: string
            format: comma-separated
          required: false
          description: |-
            Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)

            Sorting is supported for the following fields: **created, modified, name, type, source.id, source.name, resource.id, environment, datasetId, nativeIdentity, owners.primary.id, owners.primary.name, owners.primaryIdentity.id, owners.primaryIdentity.name, owners.secondaryIdentity.id, owners.secondaryIdentity.name, owners.secondaryGovernanceGroup.id, owners.secondaryGovernanceGroup.name, owners.governanceGroup.id, owners.governanceGroup.name**
          example: name
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
          description: List of capabilities.
          content:
            application/json:
              schema:
                type: array
                items:
                  title: Capability
                  type: object
                  description: A capability, such as an MCP server or tool, discovered from a connected source.
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
                      properties:
                        description:
                          type: string
                          description: Description of the capability.
                          example: MCP server that exposes the ticketing tools
                        type:
                          type: string
                          description: The capability type. UNDEFINED is returned when the source does not report a known type.
                          enum:
                            - MCP
                            - TOOL
                            - SKILL
                            - PLUGIN
                            - PROCESS
                            - UNDEFINED
                          example: MCP
                        status:
                          type: string
                          description: The capability status reported by the source.
                          example: Active
                        nativeIdentity:
                          type: string
                          description: The capability's unique identifier on the source.
                          example: mcp-ticketing-01
                        environment:
                          type: string
                          description: The environment the capability belongs to.
                          example: production
                        source:
                          description: The source the capability was discovered from.
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
                                name: AI Agent Platform
                                type: SOURCE
                        resource:
                          description: The source resource the capability is derived from.
                          title: Capability Resource
                          type: object
                          properties:
                            id:
                              type: string
                              description: The source resource identifier.
                              example: 8886e5e3-63d0-462f-a195-d98da885b8dc
                            type:
                              type: string
                              description: The type of the source resource.
                              example: mcp-server
                            name:
                              type: string
                              description: The display name of the source resource.
                              example: ticketing-mcp
                            features:
                              type: array
                              description: The set of features supported by the source resource.
                              items:
                                type: string
                              example:
                                - PROVISIONING
                        datasetId:
                          type: string
                          description: The ID of the source dataset the capability was retrieved from.
                          example: 8886e5e3-63d0-462f-a195-d98da885b8dc
                        owners:
                          description: The owner configuration of the capability.
                          title: Capability Owners
                          type: object
                          properties:
                            primary:
                              description: The identity selected as the primary owner.
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
                                    id: 2c9180858082150f0180893dbaf44201
                                    name: John Doe
                                    type: IDENTITY
                            secondary:
                              type: array
                              maxItems: 10
                              description: Additional owners. Entries are either up to ten human (IDENTITY) references or exactly one GOVERNANCE_GROUP reference - not both. Governance-group owners appear here with type GOVERNANCE_GROUP.
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
                              example:
                                - id: 2c9180858082150f0180893dbaf44202
                                  name: Jane Doe
                                  type: IDENTITY
                        attributes:
                          type: object
                          additionalProperties: true
                          description: A map of curated capability attributes.
                          example:
                            status: Active
                        connectorAttributes:
                          type: object
                          additionalProperties: true
                          description: A map of attributes sourced from the connector during aggregation.
                          example:
                            endpoint: https://mcp.example.com/ticketing
                        manuallyEdited:
                          type: boolean
                          description: Indicates if the capability has been manually edited.
                          default: false
                          example: true
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
