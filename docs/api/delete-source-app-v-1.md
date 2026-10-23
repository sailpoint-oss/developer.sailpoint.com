## OpenAPI

```yaml DELETE /source-apps/v1/{id}
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
  /source-apps/v1/{id}:
    delete:
      description: Use this API to delete a specific source app
      operationId: deleteSourceAppV1
      security:
        - userAuth:
            - idn:app-roles:manage
      parameters:
        - in: path
          name: id
          schema:
            type: string
          required: true
          x-sailpoint-resource-operation-id: listAllSourceAppV1
          description: source app ID.
          example: 2c9180835d191a86015d28455b4a2329
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
          description: Responds with the source app as deleted.
          content:
            application/json:
              schema:
                type: object
                properties:
                  id:
                    type: string
                    description: The source app id
                    example: 2c91808874ff91550175097daaec161c
                  cloudAppId:
                    type: string
                    description: The deprecated source app id
                    example: '9854520'
                  name:
                    type: string
                    description: The source app name
                    example: my app
                  created:
                    type: string
                    description: Time when the source app was created
                    format: date-time
                    example: '2020-10-08T18:33:52.029Z'
                  modified:
                    type: string
                    description: Time when the source app was last modified
                    format: date-time
                    example: '2020-10-08T18:33:52.029Z'
                  enabled:
                    type: boolean
                    default: false
                    description: True if the source app is enabled
                    example: true
                  provisionRequestEnabled:
                    type: boolean
                    default: false
                    description: True if the app allows access request
                    example: true
                  description:
                    type: string
                    nullable: false
                    description: The description of the source app
                    example: the source app for engineers
                  matchAllAccounts:
                    type: boolean
                    default: false
                    description: True if the source app match all accounts
                    example: true
                  appCenterEnabled:
                    type: boolean
                    default: true
                    description: True if the app is visible in the request center
                    example: true
                  accountSource:
                    type: object
                    nullable: true
                    properties:
                      id:
                        type: string
                        description: The source ID
                        example: 2c9180827ca885d7017ca8ce28a000eb
                      type:
                        type: string
                        description: The source type, will always be "SOURCE"
                        example: SOURCE
                      name:
                        type: string
                        description: The source name
                        example: ODS-AD-Source
                      useForPasswordManagement:
                        type: boolean
                        default: false
                        description: If the source is used for password management
                        example: ture
                      passwordPolicies:
                        type: array
                        nullable: true
                        description: The password policies for the source
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
                          - type: PASSWORD_POLICY
                            id: 006a072ecc6647f68bba9f4a4ad34649
                            name: Password Policy 1
                  owner:
                    type: object
                    nullable: true
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
                    description: The owner of source app
                    example:
                      id: 85d173e7d57e496569df763231d6deb6a
                      type: IDENTITY
                      name: John Doe
                title: sourceapp
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
