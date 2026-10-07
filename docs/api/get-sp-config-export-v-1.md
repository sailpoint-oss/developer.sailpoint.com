## OpenAPI

```yaml GET /sp-config/v1/export/{id}/download
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
  /sp-config/v1/export/{id}/download:
    get:
      description: |-
        This endpoint gets the export file resulting from the export job with the requested `id` and downloads it to a file.
        The request will need one of the following security scopes:
        - sp:config:read - sp:config:manage
      operationId: getSpConfigExportV1
      security:
        - userAuth:
            - sp:config:read
            - sp:config:manage
      parameters:
        - in: path
          name: id
          schema:
            type: string
          required: true
          x-sailpoint-resource-operation-id: exportSpConfigV1
          description: The ID of the export job whose results will be downloaded.
          example: ef38f94347e94562b5bb8424a56397d8
      responses:
        '200':
          description: Exported JSON objects.
          content:
            application/json:
              schema:
                type: object
                title: Config Export Response Body
                description: Response model for config export download response.
                properties:
                  version:
                    type: integer
                    description: Current version of the export results object.
                    example: 1
                  timestamp:
                    type: string
                    format: date-time
                    description: Time the export was completed.
                    example: '2021-05-11T22:23:16Z'
                  tenant:
                    type: string
                    description: Name of the tenant where this export originated.
                    example: sample-tenant
                  description:
                    type: string
                    description: Optional user defined description/name for export job.
                    example: Export Job 1 Test
                  options:
                    type: object
                    title: Export Options
                    properties:
                      excludeTypes:
                        description: Object type names to be excluded from an sp-config export command.
                        type: array
                        items:
                          type: string
                          enum:
                            - ACCESS_PROFILE
                            - ACCESS_REQUEST_CONFIG
                            - ATTR_SYNC_SOURCE_CONFIG
                            - AUTH_ORG
                            - CAMPAIGN_FILTER
                            - CONNECTOR_RULE
                            - FORM_DEFINITION
                            - GOVERNANCE_GROUP
                            - IDENTITY_OBJECT_CONFIG
                            - IDENTITY_PROFILE
                            - LIFECYCLE_STATE
                            - NOTIFICATION_TEMPLATE
                            - PASSWORD_POLICY
                            - PASSWORD_SYNC_GROUP
                            - PUBLIC_IDENTITIES_CONFIG
                            - ROLE
                            - RULE
                            - SEGMENT
                            - SERVICE_DESK_INTEGRATION
                            - SOD_POLICY
                            - SOURCE
                            - TAG
                            - TRANSFORM
                            - TRIGGER_SUBSCRIPTION
                            - WORKFLOW
                          example: SOURCE
                      includeTypes:
                        description: Object type names to be included in an sp-config export command. IncludeTypes takes precedence over excludeTypes.
                        type: array
                        items:
                          type: string
                          enum:
                            - ACCESS_PROFILE
                            - ACCESS_REQUEST_CONFIG
                            - ATTR_SYNC_SOURCE_CONFIG
                            - AUTH_ORG
                            - CAMPAIGN_FILTER
                            - CONNECTOR_RULE
                            - FORM_DEFINITION
                            - GOVERNANCE_GROUP
                            - IDENTITY_OBJECT_CONFIG
                            - IDENTITY_PROFILE
                            - LIFECYCLE_STATE
                            - NOTIFICATION_TEMPLATE
                            - PASSWORD_POLICY
                            - PASSWORD_SYNC_GROUP
                            - PUBLIC_IDENTITIES_CONFIG
                            - ROLE
                            - RULE
                            - SEGMENT
                            - SERVICE_DESK_INTEGRATION
                            - SOD_POLICY
                            - SOURCE
                            - TAG
                            - TRANSFORM
                            - TRIGGER_SUBSCRIPTION
                            - WORKFLOW
                          example: TRIGGER_SUBSCRIPTION
                      objectOptions:
                        description: Additional options targeting specific objects related to each item in the includeTypes field
                        type: object
                        additionalProperties:
                          type: object
                          title: Object Export Import Options
                          properties:
                            includedIds:
                              description: Object ids to be included in an import or export.
                              type: array
                              items:
                                type: string
                                example: be9e116d-08e1-49fc-ab7f-fa585e96c9e4
                            includedNames:
                              description: Object names to be included in an import or export.
                              type: array
                              items:
                                type: string
                                example: Test Object
                        example:
                          TRIGGER_SUBSCRIPTION:
                            includedIds:
                              - be9e116d-08e1-49fc-ab7f-fa585e96c9e4
                            includedNames:
                              - Test 2
                    description: Options used to create this export.
                  objects:
                    type: array
                    items:
                      type: object
                      title: Config Object for Export and Import
                      description: Config export and import format for individual object configurations.
                      properties:
                        version:
                          type: integer
                          description: Current version of configuration object.
                          example: 1
                        self:
                          type: object
                          title: Self Import Export Dto
                          description: Self block for imported/exported object.
                          properties:
                            type:
                              type: string
                              description: Imported/exported object's DTO type. Import is currently only possible with the CONNECTOR_RULE, IDENTITY_OBJECT_CONFIG, IDENTITY_PROFILE, RULE, SOURCE, TRANSFORM, and TRIGGER_SUBSCRIPTION object types.
                              enum:
                                - ACCESS_PROFILE
                                - ACCESS_REQUEST_CONFIG
                                - ATTR_SYNC_SOURCE_CONFIG
                                - AUTH_ORG
                                - CAMPAIGN_FILTER
                                - CONNECTOR_RULE
                                - FORM_DEFINITION
                                - GOVERNANCE_GROUP
                                - IDENTITY_OBJECT_CONFIG
                                - IDENTITY_PROFILE
                                - LIFECYCLE_STATE
                                - NOTIFICATION_TEMPLATE
                                - PASSWORD_POLICY
                                - PASSWORD_SYNC_GROUP
                                - PUBLIC_IDENTITIES_CONFIG
                                - ROLE
                                - RULE
                                - SEGMENT
                                - SERVICE_DESK_INTEGRATION
                                - SOD_POLICY
                                - SOURCE
                                - TAG
                                - TRANSFORM
                                - TRIGGER_SUBSCRIPTION
                                - WORKFLOW
                              example: SOURCE
                            id:
                              type: string
                              description: Imported/exported object's ID.
                              example: 2c9180835d191a86015d28455b4b232a
                            name:
                              type: string
                              description: Imported/exported object's display name.
                              example: HR Active Directory
                        object:
                          description: Object details. Format dependant on the object type.
                          additionalProperties: true
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
