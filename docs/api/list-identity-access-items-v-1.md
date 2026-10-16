## OpenAPI

```yaml GET /historical-identities/v1/{id}/access-items
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
  /historical-identities/v1/{id}/access-items:
    get:
      description: |
        This method retrieves a list of access item for the identity filtered by the access item type
      operationId: listIdentityAccessItemsV1
      security:
        - userAuth:
            - idn:identity-history:read
            - idn:identity-history:manage
        - applicationAuth:
            - idn:identity-history:read
            - idn:identity-history:manage
      parameters:
        - in: path
          name: id
          schema:
            type: string
          required: true
          x-sailpoint-resource-operation-id: listHistoricalIdentitiesV1
          description: The identity id
          example: 8c190e6787aa4ed9a90bd9d5344523fb
        - in: query
          name: type
          schema:
            type: string
            enum:
              - account
              - entitlement
              - app
              - accessProfile
              - role
          required: false
          description: The type of access item for the identity. If not provided, it defaults to account
          example: account
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
      responses:
        '200':
          description: The list of access items.
          content:
            application/json:
              schema:
                type: array
                items:
                  anyOf:
                    - type: object
                      title: Access Item Entitlement Response
                      properties:
                        id:
                          type: string
                          example: 2c918087763e69d901763e72e97f006f
                          description: the access item id
                        accessType:
                          type: string
                          example: entitlement
                          description: the access item type. entitlement in this case
                        displayName:
                          type: string
                          example: Dr. Arden Rogahn MD
                          description: the display name of the identity
                        sourceName:
                          type: string
                          example: DataScienceDataset
                          description: the name of the source
                        attribute:
                          type: string
                          example: groups
                          description: the entitlement attribute
                        value:
                          type: string
                          example: Upward mobility access
                          description: the associated value
                        type:
                          type: string
                          example: ENTITLEMENT
                          description: the type of entitlement
                        description:
                          type: string
                          example: Entitlement - Workday/Citizenship access
                          description: the description for the entitlment
                          nullable: true
                        sourceId:
                          type: string
                          example: 2793o32dwd
                          description: the id of the source
                        standalone:
                          type: boolean
                          example: true
                          description: indicates whether the entitlement is standalone
                          nullable: true
                        privileged:
                          type: boolean
                          example: false
                          description: indicates whether the entitlement is privileged
                          nullable: true
                        cloudGoverned:
                          type: boolean
                          example: true
                          description: indicates whether the entitlement is cloud governed
                          nullable: true
                      required:
                        - attribute
                        - value
                        - type
                        - standalone
                        - privileged
                        - cloudGoverned
                    - type: object
                      title: Access Item Access Profile Response
                      properties:
                        id:
                          type: string
                          example: 2c918087763e69d901763e72e97f006f
                          description: the access item id
                        accessType:
                          type: string
                          example: accessProfile
                          description: the access item type. accessProfile in this case
                        displayName:
                          type: string
                          example: Dr. Arden Rogahn MD
                          description: the display name of the identity
                        sourceName:
                          type: string
                          example: DataScienceDataset
                          description: the name of the source
                        entitlementCount:
                          type: integer
                          format: int32
                          example: 12
                          description: the number of entitlements the access profile will create
                        description:
                          type: string
                          example: AccessProfile - Workday/Citizenship access
                          description: the description for the access profile
                          nullable: true
                        sourceId:
                          type: string
                          example: 2793o32dwd
                          description: the id of the source
                        appRefs:
                          type: array
                          items:
                            type: object
                            properties:
                              cloudAppId:
                                type: string
                                example: 8c190e6787aa4ed9a90bd9d5344523fb
                                description: the cloud app id associated with the access profile
                              cloudAppName:
                                type: string
                                example: Sample App
                                description: the cloud app name associated with the access profile
                          example:
                            - cloudAppId: 8c190e6787aa4ed9a90bd9d5344523fb
                              cloudAppName: Sample App
                            - cloudAppId: 2c91808a77ff216301782327a50f09bf
                              cloudAppName: Another App
                          description: the list of app ids associated with the access profile
                        startDate:
                          type: string
                          example: '2024-07-01T05:00:00.00Z'
                          description: the date the access profile will be assigned to the specified identity, in case requested with a future start date
                          nullable: true
                        removeDate:
                          type: string
                          example: '2024-07-01T06:00:00.00Z'
                          description: the date the access profile is no longer assigned to the specified identity
                          nullable: true
                        standalone:
                          type: boolean
                          example: false
                          description: indicates whether the access profile is standalone
                          nullable: true
                        revocable:
                          type: boolean
                          example: true
                          description: indicates whether the access profile is revocable
                          nullable: true
                      required:
                        - appRefs
                        - standalone
                        - revocable
                        - entitlementCount
                    - type: object
                      title: Access Item Account Response
                      required:
                        - nativeIdentity
                      properties:
                        id:
                          type: string
                          example: 2c918087763e69d901763e72e97f006f
                          description: the access item id
                        accessType:
                          type: string
                          example: account
                          description: the access item type. account in this case
                        displayName:
                          type: string
                          example: Dr. Arden Rogahn MD
                          description: the display name of the identity
                        sourceName:
                          type: string
                          example: DataScienceDataset
                          description: the name of the source
                        nativeIdentity:
                          type: string
                          example: dr.arden.ogahn.d
                          description: the native identifier used to uniquely identify an acccount
                        sourceId:
                          type: string
                          example: 2793o32dwd
                          description: the id of the source
                        entitlementCount:
                          type: integer
                          format: int32
                          example: 12
                          description: the number of entitlements the account will create
                    - type: object
                      title: Access Item Role Response
                      properties:
                        id:
                          type: string
                          example: 2c918087763e69d901763e72e97f006f
                          description: the access item id
                        accessType:
                          type: string
                          example: role
                          description: the access item type. role in this case
                        displayName:
                          type: string
                          example: sample
                          description: the role display name
                        sourceName:
                          type: string
                          example: Source Name
                          description: the associated source name if it exists
                          nullable: true
                        description:
                          type: string
                          example: Role - Workday/Citizenship access
                          description: the description for the role
                        startDate:
                          type: string
                          example: '2024-07-01T05:00:00.00Z'
                          description: the date the access profile will be assigned to the specified identity, in case requested with a future start date
                          nullable: true
                        removeDate:
                          type: string
                          example: '2024-07-01T06:00:00.00Z'
                          description: the date the role is no longer assigned to the specified identity
                        revocable:
                          type: boolean
                          example: true
                          description: indicates whether the role is revocable
                      required:
                        - revocable
                    - type: object
                      title: Access Item App Response
                      required:
                        - appRoleId
                      properties:
                        id:
                          type: string
                          example: 2c918087763e69d901763e72e97f006f
                          description: the access item id
                        accessType:
                          type: string
                          example: app
                          description: the access item type. entitlement in this case
                        displayName:
                          type: string
                          example: Display Name
                          description: the access item display name
                        sourceName:
                          type: string
                          example: appName
                          description: the associated source name if it exists
                          nullable: true
                        appRoleId:
                          type: string
                          example: 2c918087763e69d901763e72e97f006f
                          description: the app role id
                          nullable: true
              examples:
                Access Profile:
                  description: An access profile response
                  value:
                    - accessType: accessProfile
                      id: 2c918087763e69d901763e72e97f006f
                      name: sample
                      sourceName: DataScienceDataset
                      sourceId: 2793o32dwd
                      description: AccessProfile - Workday/Citizenship access
                      displayName: Dr. Arden Rogahn MD
                      entitlementCount: 12
                      appDisplayName: AppName
                Account:
                  description: An account response
                  value:
                    - accessType: account
                      id: 2c918087763e69d901763e72e97f006f
                      nativeIdentity: dr.arden.ogahn.d
                      sourceName: DataScienceDataset
                      sourceId: 2793o32dwd
                      entitlementCount: 12
                      displayName: Dr. Arden Rogahn MD
                App:
                  description: An app response
                  value:
                    - accessType: app
                      id: 2c918087763e69d901763e72e97f006f
                      name: appName
                Entitlement:
                  description: An entitlement event
                  value:
                    - accessType: entitlement
                      id: 2c918087763e69d901763e72e97f006f
                      attribute: groups
                      value: Upward mobility access
                      type: group
                      sourceName: DataScienceDataset
                      sourceId: 2793o32dwd
                      description: Entitlement - Workday/Citizenship access
                      displayName: Dr. Arden Rogahn MD
                Role:
                  description: A role response
                  value:
                    - accessType: role
                      id: 2c918087763e69d901763e72e97f006f
                      name: sample
                      description: Role - Workday/Citizenship access
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
