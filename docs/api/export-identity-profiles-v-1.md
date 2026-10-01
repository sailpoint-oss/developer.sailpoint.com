## OpenAPI

```yaml GET /identity-profiles/v1/export
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
  /identity-profiles/v1/export:
    get:
      description: This exports existing identity profiles in the format specified by the sp-config service.
      operationId: exportIdentityProfilesV1
      security:
        - userAuth:
            - idn:identity-profile:read
        - applicationAuth:
            - idn:identity-profile:read
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
          example: id eq "ef38f94347e94562b5bb8424a56397d8"
          description: |-
            Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)

            Filtering is supported for the following fields and operators:

            **id**: *eq, ne*

            **name**: *eq, ne*

            **priority**: *eq, ne*
        - in: query
          name: sorters
          required: false
          schema:
            type: string
            format: comma-separated
          example: id,name
          description: |-
            Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)

            Sorting is supported for the following fields: **id, name, priority**
      responses:
        '200':
          description: List of export objects with identity profiles.
          content:
            application/json:
              schema:
                type: array
                items:
                  type: object
                  title: Identity Profile Exported Object
                  description: Identity profile exported object.
                  properties:
                    version:
                      type: integer
                      example: 1
                      description: Version or object from the target service.
                      format: int32
                    self:
                      type: object
                      description: Self block for exported object.
                      properties:
                        type:
                          type: string
                          description: Exported object's DTO type.
                          enum:
                            - ACCESS_PROFILE
                            - ACCESS_REQUEST_CONFIG
                            - ATTR_SYNC_SOURCE_CONFIG
                            - AUTH_ORG
                            - CAMPAIGN_FILTER
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
                          description: Exported object's ID.
                          example: 2c9180835d191a86015d28455b4b232a
                        name:
                          type: string
                          description: Exported object's display name.
                          example: HR Active Directory
                    object:
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
                          required:
                            - authoritativeSource
                          properties:
                            description:
                              type: string
                              description: Identity profile's description.
                              example: My custom flat file profile
                              nullable: true
                            owner:
                              type: object
                              description: Identity profile's owner.
                              nullable: true
                              properties:
                                type:
                                  type: string
                                  enum:
                                    - IDENTITY
                                  description: Owner's object type.
                                  example: IDENTITY
                                id:
                                  type: string
                                  description: Owner's ID.
                                  example: 2c9180835d191a86015d28455b4b232a
                                name:
                                  type: string
                                  description: Owner's name.
                                  example: William Wilson
                            priority:
                              type: integer
                              format: int64
                              description: Identity profile's priority.
                              example: 10
                            authoritativeSource:
                              type: object
                              properties:
                                type:
                                  type: string
                                  enum:
                                    - SOURCE
                                  description: Authoritative source's object type.
                                  example: SOURCE
                                id:
                                  type: string
                                  description: Authoritative source's ID.
                                  example: 2c9180835d191a86015d28455b4b232a
                                name:
                                  type: string
                                  description: Authoritative source's name.
                                  example: HR Active Directory
                            identityRefreshRequired:
                              type: boolean
                              default: false
                              description: Set this value to 'True' if an identity refresh is necessary. You would typically want to trigger an identity refresh when a change has been made on the source.
                              example: true
                            identityCount:
                              type: integer
                              description: Number of identities belonging to the identity profile.
                              format: int32
                              example: 8
                            identityAttributeConfig:
                              type: object
                              title: Identity Attribute Config
                              description: Defines all the identity attribute mapping configurations. This defines how to generate or collect data for each identity attributes in identity refresh process.
                              properties:
                                enabled:
                                  description: Backend will only promote values if the profile/mapping is enabled.
                                  type: boolean
                                  default: false
                                  example: true
                                attributeTransforms:
                                  type: array
                                  items:
                                    type: object
                                    title: Identity Attribute Transform
                                    description: Transform definition for an identity attribute.
                                    properties:
                                      identityAttributeName:
                                        type: string
                                        description: Identity attribute's name.
                                        example: email
                                      transformDefinition:
                                        description: Seaspray transform definition.
                                        type: object
                                        title: Transform Definition
                                        properties:
                                          type:
                                            type: string
                                            description: Transform definition type.
                                            example: accountAttribute
                                          attributes:
                                            type: object
                                            additionalProperties: true
                                            description: Arbitrary key-value pairs to store any metadata for the object
                                            example:
                                              attributeName: e-mail
                                              sourceName: MySource
                                              sourceId: 2c9180877a826e68017a8c0b03da1a53
                            identityExceptionReportReference:
                              type: object
                              title: Identity Exception Report Reference
                              nullable: true
                              properties:
                                taskResultId:
                                  type: string
                                  format: uuid
                                  description: Task result ID.
                                  example: 2b838de9-db9b-abcf-e646-d4f274ad4238
                                reportName:
                                  type: string
                                  example: My annual report
                                  description: Report name.
                            hasTimeBasedAttr:
                              description: Indicates the value of `requiresPeriodicRefresh` attribute for the identity profile.
                              type: boolean
                              default: false
                              example: true
                      title: identityprofile
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
