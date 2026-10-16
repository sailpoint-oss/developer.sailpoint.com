## OpenAPI

```yaml POST /source-apps/v1/{id}/access-profiles/bulk-remove
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
  /source-apps/v1/{id}/access-profiles/bulk-remove:
    post:
      description: This API returns the final list of access profiles for the specified source app after removing
      operationId: deleteAccessProfilesFromSourceAppByBulkV1
      security:
        - userAuth:
            - idn:app-roles:manage
      parameters:
        - name: id
          in: path
          description: ID of the source app
          required: true
          x-sailpoint-resource-operation-id: listAllSourceAppV1
          schema:
            type: string
            example: 2c91808a7813090a017814121e121518
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
        - name: X-SailPoint-Experimental
          in: header
          description: Use this header to enable this experimental API.
          example: true
          schema:
            type: string
            default: true
          required: true
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: array
              items:
                type: string
            example:
              - c9575abb5e3a4e3db82b2f989a738aa2
              - c9dc28e148a24d65b3ccb5fb8ca5ddd9
        description: List of access profile IDs for removal
      responses:
        '200':
          description: The final list of access profiles for the specified source app
          content:
            application/json:
              schema:
                type: array
                items:
                  type: object
                  properties:
                    id:
                      type: string
                      description: The ID of the Access Profile
                      example: 2c91808a7190d06e01719938fcd20792
                    name:
                      type: string
                      description: Name of the Access Profile
                      example: Employee-database-read-write
                    description:
                      type: string
                      nullable: true
                      description: Information about the Access Profile
                      example: Collection of entitlements to read/write the employee database
                    created:
                      type: string
                      description: Date the Access Profile was created
                      format: date-time
                      example: '2021-03-01T22:32:58.104Z'
                    modified:
                      type: string
                      description: Date the Access Profile was last modified.
                      format: date-time
                      example: '2021-03-02T20:22:28.104Z'
                    disabled:
                      type: boolean
                      default: true
                      description: Whether the Access Profile is enabled.
                      example: true
                    requestable:
                      type: boolean
                      default: false
                      description: Whether the Access Profile is requestable via access request.
                      example: true
                    protected:
                      type: boolean
                      default: false
                      description: Whether the Access Profile is protected.
                      example: false
                    ownerId:
                      type: string
                      description: The owner ID of the Access Profile
                      example: 9870808a7190d06e01719938fcd20792
                    sourceId:
                      type: integer
                      format: int64
                      nullable: true
                      description: The source ID of the Access Profile
                      example: 10360661
                    sourceName:
                      type: string
                      description: The source name of the Access Profile
                      example: AD Source
                    appId:
                      type: integer
                      format: int64
                      nullable: true
                      description: The source app ID of the Access Profile
                      example: 10360661
                    appName:
                      type: string
                      nullable: true
                      description: The source app name of the Access Profile
                      example: mail app
                    applicationId:
                      type: string
                      description: The id of the application
                      example: edcb0951812949d085b60cd8bf35bc78
                    type:
                      type: string
                      description: The type of the access profile
                      example: source
                    entitlements:
                      type: array
                      items:
                        type: string
                      description: List of IDs of entitlements
                      example:
                        - 2c9180857725c14301772a93bb77242d
                        - c9dc28e148a24d65b3ccb5fb8ca5ddd9
                    entitlementCount:
                      type: integer
                      format: int32
                      example: 12
                      description: The number of entitlements in the access profile
                    segments:
                      type: array
                      items:
                        type: string
                      description: List of IDs of segments, if any, to which this Access Profile is assigned.
                      example:
                        - f7b1b8a3-5fed-4fd4-ad29-82014e137e19
                        - 29cb6c06-1da8-43ea-8be4-b3125f248f2a
                    approvalSchemes:
                      type: string
                      description: |
                        Comma-separated list of approval schemes. Each approval scheme is one of -
                        manager - appOwner - sourceOwner - accessProfileOwner - workgroup:&lt;workgroupId&gt;
                      example: accessProfileOwner
                    revokeRequestApprovalSchemes:
                      type: string
                      description: |
                        Comma-separated list of revoke request approval schemes. Each approval
                        scheme is one of - manager - sourceOwner - accessProfileOwner - workgroup:&lt;workgroupId&gt;
                      example: accessProfileOwner
                    requestCommentsRequired:
                      type: boolean
                      default: false
                      description: Whether the access profile require request comment for access request.
                      example: true
                    deniedCommentsRequired:
                      type: boolean
                      default: false
                      description: Whether denied comment is required when access request is denied.
                      example: true
                    accountSelector:
                      type: object
                      description: How to select account when there are multiple accounts for the user
                      properties:
                        selectors:
                          type: array
                          nullable: true
                          items:
                            type: object
                            properties:
                              applicationId:
                                type: string
                                description: The application id
                                example: 2c91808874ff91550175097daaec161c"
                              accountMatchConfig:
                                type: object
                                properties:
                                  matchExpression:
                                    type: object
                                    properties:
                                      matchTerms:
                                        type: array
                                        items:
                                          type: object
                                          properties:
                                            name:
                                              type: string
                                              description: The attribute name
                                              example: mail
                                            value:
                                              type: string
                                              description: The attribute value
                                              example: 1234 Albany Dr
                                            op:
                                              type: string
                                              description: The operator between name and value
                                              example: eq
                                            container:
                                              type: boolean
                                              default: false
                                              description: If it is a container or a real match term
                                              example: true
                                            and:
                                              type: boolean
                                              description: If it is AND logical operator for the children match terms
                                              default: false
                                              example: false
                                            children:
                                              type: array
                                              nullable: true
                                              items:
                                                type: object
                                                additionalProperties: true
                                              description: The children under this match term
                                              example:
                                                - name: businessCategory
                                                  value: Service
                                                  op: eq
                                                  container: false
                                                  and: false
                                                  children: null
                                          title: matchterm
                                        example:
                                          - name: ''
                                            value: ''
                                            op: null
                                            container: true
                                            and: false
                                            children:
                                              - name: businessCategory
                                                value: Service
                                                op: eq
                                                container: false
                                                and: false
                                                children: null
                                      and:
                                        type: boolean
                                        description: If it is AND operators for match terms
                                        default: true
                                        example: true
                            title: appaccessprofileselector
                  title: accessprofiledetails
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
