## OpenAPI

```yaml GET /business-applications/v1/{id}
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
  /business-applications/v1/{id}:
    get:
      description: Returns a single Business Application by ID for the requesting tenant. Requires the `idn:business-application:read` right and the Machine Identity Security product to be enabled.
      operationId: getBusinessApplicationV1
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
          x-sailpoint-resource-operation-id: listBusinessApplicationsV1
          description: Business Application ID.
          example: a1b2c3d4-e5f6-7890-abcd-ef1234567890
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
          description: A Business Application object.
          content:
            application/json:
              schema:
                type: object
                title: Business Application
                description: A Business Application groups machine identities (for example AI agents or applications) under a common owner and sanctioned status, either discovered from a source or defined by an administrator.
                required:
                  - name
                properties:
                  id:
                    type: string
                    format: uuid
                    readOnly: true
                    description: Business Application ID. Assigned by the service on create.
                    example: a1b2c3d4-e5f6-7890-abcd-ef1234567890
                  name:
                    type: string
                    description: Human-readable display name. Must be unique within the tenant.
                    example: Cursor
                  description:
                    type: string
                    nullable: true
                    description: Free-text description of the Business Application.
                    example: AI coding assistant used by the platform engineering team.
                  vendor:
                    type: string
                    nullable: true
                    description: Vendor or publisher of the Business Application.
                    example: Cursor
                  signatures:
                    type: array
                    description: Signatures used to automatically correlate machine identities to this Business Application. Modifying this field requires the custom Business Application feature to be enabled.
                    items:
                      type: object
                      title: Business Application Signature
                      description: A `(type, name)` rule used to automatically correlate machine identities to this Business Application. A signature matches a machine identity when the identity's `subtype` equals `type` and its `connector_attributes.spBusinessApplication` equals `name`. Each `(type, name)` pair is unique across all Business Applications in the tenant; assigning a signature already owned by another Business Application returns a 409 conflict. Modifying signatures requires the custom Business Application feature to be enabled.
                      required:
                        - type
                        - name
                      properties:
                        type:
                          type: string
                          description: Signature type, matched against the machine identity's subtype. Kept consistent with the machine identity subtype values.
                          enum:
                            - AI Agent
                            - Application
                          example: AI Agent
                        name:
                          type: string
                          description: Connector signature value to match against the machine identity's `spBusinessApplication` connector attribute.
                          example: cursor
                  owner:
                    type: object
                    nullable: true
                    description: Primary owner of the Business Application.
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
                          type: IDENTITY
                          id: 2c91808568c529c60168cca6f90c1313
                          name: William Wilson
                  additionalOwners:
                    type: array
                    nullable: true
                    description: Additional (secondary) owners of the Business Application.
                    items:
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
                            type: IDENTITY
                            id: 5898b7c1-620c-49c6-cccc-cbf81eb4bddd
                            name: Jane Doe
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
                    description: Sanctioned status of the Business Application. Defaults to `UNKNOWN`.
                  origin:
                    allOf:
                      - type: string
                        title: Business Application Origin
                        description: How the Business Application entered the tenant catalog. Read-only; assigned by the service on creation and immutable thereafter.
                        enum:
                          - OOTB
                          - CUSTOM
                        example: CUSTOM
                    readOnly: true
                  source:
                    type: object
                    nullable: true
                    readOnly: true
                    description: Discovery source of the Business Application. `null` for out-of-the-box or administrator-defined Business Applications that were not discovered from a source.
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
                          type: SOURCE
                          id: 6d28b7c1-620c-49c6-b6d5-cbf81eb4b5fa
                          name: Active Directory
                  created:
                    type: string
                    format: date-time
                    readOnly: true
                    description: Time the Business Application was created.
                    example: '2026-01-15T13:45:12.312Z'
                  modified:
                    type: string
                    format: date-time
                    readOnly: true
                    description: Time the Business Application was last modified.
                    example: '2026-02-20T09:31:47.882Z'
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
          description: Not Found - Returned if no Business Application exists for the given ID.
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
                  value:
                    detailCode: 400.1.404 Referenced Object Not Found
                    trackingId: b21b1f7ce4da4d639f2c62a57171b427
                    messages:
                      - locale: en-US
                        localeOrigin: DEFAULT
                        text: Referenced 'BusinessApplication' with id 'a1b2c3d4-e5f6-7890-abcd-ef1234567890' not found.
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
