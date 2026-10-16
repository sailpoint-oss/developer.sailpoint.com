## OpenAPI

```yaml GET /non-employee-approvals/v1/{id}
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
  /non-employee-approvals/v1/{id}:
    get:
      description: |-
        Gets a non-employee approval item detail. There are two contextual uses for this endpoint:
          1. The user has the role context of `idn:nesr:read`, in which case they
        can get any approval.
          2. The user owns the requested approval.
      operationId: getNonEmployeeApprovalV1
      security:
        - userAuth:
            - idn:nelm:read
      parameters:
        - in: path
          name: id
          description: Non-Employee approval item id (UUID)
          required: true
          x-sailpoint-resource-operation-id: listNonEmployeeApprovalsV1
          schema:
            type: string
          example: e136567de87e4d029e60b3c3c55db56d
        - in: query
          name: include-detail
          description: The object nonEmployeeRequest will not be included detail when set to false. *Default value is true*
          required: false
          schema:
            type: boolean
          example: true
      responses:
        '200':
          description: Non-Employee approval item object.
          content:
            application/json:
              schema:
                allOf:
                  - type: object
                    properties:
                      id:
                        type: string
                        format: UUID
                        description: Non-Employee approval item id
                        example: 2c1e388b-1e55-4b0a-ab5c-897f1204159c
                      approver:
                        description: Reference to the associated Identity
                        type: object
                        properties:
                          type:
                            type: string
                            enum:
                              - GOVERNANCE_GROUP
                              - IDENTITY
                            example: IDENTITY
                            description: Identifies if the identity is a normal identity or a governance group
                            title: nonemployeeidentitydtotype
                          id:
                            type: string
                            description: Identity id
                            example: 5168015d32f890ca15812c9180835d2e
                        title: nonemployeeidentityreferencewithid
                      accountName:
                        type: string
                        description: Requested identity account name
                        example: test.account
                      approvalStatus:
                        type: string
                        enum:
                          - APPROVED
                          - REJECTED
                          - PENDING
                          - NOT_READY
                          - CANCELLED
                        description: Enum representing the non-employee request approval status
                        example: APPROVED
                        title: approvalstatus
                      approvalOrder:
                        type: number
                        description: Approval order
                        example: 1
                        format: float
                      comment:
                        type: string
                        description: comment of approver
                        example: I approve
                      modified:
                        type: string
                        format: date-time
                        description: When the request was last modified.
                        example: '2019-08-23T18:52:59.162Z'
                      created:
                        type: string
                        format: date-time
                        description: When the request was created.
                        example: '2019-08-23T18:40:35.772Z'
                    title: nonemployeeapprovalitembase
                  - type: object
                    properties:
                      nonEmployeeRequest:
                        description: Non-Employee request associated to this approval
                        allOf:
                          - type: object
                            properties:
                              id:
                                type: string
                                format: UUID
                                description: Non-Employee request id.
                                example: ac110005-7156-1150-8171-5b292e3e0084
                              requester:
                                type: object
                                properties:
                                  type:
                                    type: string
                                    enum:
                                      - GOVERNANCE_GROUP
                                      - IDENTITY
                                    example: IDENTITY
                                    description: Identifies if the identity is a normal identity or a governance group
                                    title: nonemployeeidentitydtotype
                                  id:
                                    type: string
                                    description: Identity id
                                    example: 5168015d32f890ca15812c9180835d2e
                                title: nonemployeeidentityreferencewithid
                                example:
                                  type: IDENTITY
                                  id: 2c9180866166b5b0016167c32ef31a66
                                  name: William Smith
                            title: nonemployeerequestlite
                          - type: object
                            properties:
                              accountName:
                                type: string
                                description: Requested identity account name.
                                example: william.smith
                              firstName:
                                type: string
                                description: Non-Employee's first name.
                                example: William
                              lastName:
                                type: string
                                description: Non-Employee's last name.
                                example: Smith
                              email:
                                type: string
                                description: Non-Employee's email.
                                example: william.smith@example.com
                              phone:
                                type: string
                                description: Non-Employee's phone.
                                example: '5125555555'
                              manager:
                                type: string
                                description: The account ID of a valid identity to serve as this non-employee's manager.
                                example: jane.doe
                              nonEmployeeSource:
                                allOf:
                                  - type: object
                                    properties:
                                      id:
                                        type: string
                                        format: UUID
                                        description: Non-Employee source id.
                                        example: a0303682-5e4a-44f7-bdc2-6ce6112549c1
                                      sourceId:
                                        type: string
                                        description: Source Id associated with this non-employee source.
                                        example: 2c91808568c529c60168cca6f90c1313
                                      name:
                                        type: string
                                        description: Source name associated with this non-employee source.
                                        example: Retail
                                      description:
                                        type: string
                                        description: Source description associated with this non-employee source.
                                        example: Source description
                                    title: nonemployeesourcelite
                                  - type: object
                                    properties:
                                      schemaAttributes:
                                        description: List of schema attributes associated with this non-employee source.
                                        type: array
                                        items:
                                          type: object
                                          properties:
                                            id:
                                              type: string
                                              format: UUID
                                              example: ac110005-7156-1150-8171-5b292e3e0084
                                              description: Schema Attribute Id
                                            system:
                                              type: boolean
                                              description: True if this schema attribute is mandatory on all non-employees sources.
                                              example: true
                                              default: false
                                            modified:
                                              type: string
                                              format: date-time
                                              description: When the schema attribute was last modified.
                                              example: '2019-08-23T18:52:59.162Z'
                                            created:
                                              type: string
                                              format: date-time
                                              description: When the schema attribute was created.
                                              example: '2019-08-23T18:40:35.772Z'
                                            type:
                                              type: string
                                              enum:
                                                - TEXT
                                                - DATE
                                                - IDENTITY
                                              description: Enum representing the type of data a schema attribute accepts.
                                              example: TEXT
                                              title: nonemployeeschemaattributetype
                                            label:
                                              type: string
                                              description: Label displayed on the UI for this schema attribute.
                                              example: Account Name
                                            technicalName:
                                              type: string
                                              description: The technical name of the attribute. Must be unique per source.
                                              example: account.name
                                            helpText:
                                              type: string
                                              description: help text displayed by UI.
                                              example: The unique identifier for the account
                                            placeholder:
                                              type: string
                                              description: Hint text that fills UI box.
                                              example: Enter a unique user name for this account.
                                            required:
                                              type: boolean
                                              description: If true, the schema attribute is required for all non-employees in the source
                                              example: true
                                              default: false
                                          required:
                                            - type
                                            - technicalName
                                            - label
                                          title: nonemployeeschemaattribute
                                title: nonemployeesourcelitewithschemaattributes
                              data:
                                type: object
                                additionalProperties:
                                  type: string
                                description: Additional attributes for a non-employee. Up to 10 custom attributes can be added.
                                example:
                                  description: Auditing
                              approvalStatus:
                                type: string
                                enum:
                                  - APPROVED
                                  - REJECTED
                                  - PENDING
                                  - NOT_READY
                                  - CANCELLED
                                description: Enum representing the non-employee request approval status
                                example: APPROVED
                                title: approvalstatus
                              comment:
                                type: string
                                description: Comment of requester
                                example: approved
                              completionDate:
                                type: string
                                format: date-time
                                description: When the request was completely approved.
                                example: '2020-03-24T11:11:41.139-05:00'
                              startDate:
                                type: string
                                format: date
                                description: Non-Employee employment start date.
                                example: '2020-03-24'
                              endDate:
                                type: string
                                format: date
                                description: Non-Employee employment end date.
                                example: '2021-03-25'
                              modified:
                                type: string
                                format: date-time
                                description: When the request was last modified.
                                example: '2020-03-24T11:11:41.139-05:00'
                              created:
                                type: string
                                format: date-time
                                description: When the request was created.
                                example: '2020-03-24T11:11:41.139-05:00'
                        title: nonemployeerequestwithoutapprovalitem
                title: nonemployeeapprovalitemdetail
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
