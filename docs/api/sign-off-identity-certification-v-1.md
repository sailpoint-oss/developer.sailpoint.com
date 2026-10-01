## OpenAPI

```yaml POST /certifications/v1/{id}/sign-off
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
  /certifications/v1/{id}/sign-off:
    post:
      description: This API finalizes all decisions made on an identity campaign certification and initiates any remediations required. Reviewers for this certification can also call this API. This API does not support requests for certifications assigned to Governance Groups.
      operationId: signOffIdentityCertificationV1
      security:
        - userAuth:
            - idn:campaign:manage
      parameters:
        - in: path
          name: id
          schema:
            type: string
          required: true
          x-sailpoint-resource-operation-id: listIdentityCertificationsV1
          description: The identity campaign certification ID
          example: ef38f94347e94562b5bb8424a56397d8
      responses:
        '200':
          description: An identity campaign certification object
          content:
            application/json:
              schema:
                type: object
                title: Identity Certification Dto
                properties:
                  id:
                    example: 2c9180835d2e5168015d32f890ca1581
                    type: string
                    description: id of the certification
                  name:
                    example: Source Owner Access Review for Employees [source]
                    type: string
                    description: name of the certification
                  campaign:
                    type: object
                    title: Campaign Reference
                    required:
                      - id
                      - name
                      - type
                      - campaignType
                      - description
                      - correlatedStatus
                      - mandatoryCommentRequirement
                    properties:
                      id:
                        type: string
                        description: The unique ID of the campaign.
                        example: ef38f94347e94562b5bb8424a56397d8
                      name:
                        type: string
                        description: The name of the campaign.
                        example: Campaign Name
                      type:
                        type: string
                        enum:
                          - CAMPAIGN
                        description: The type of object that is being referenced.
                        example: CAMPAIGN
                      campaignType:
                        type: string
                        enum:
                          - MANAGER
                          - SOURCE_OWNER
                          - SEARCH
                          - ROLE_COMPOSITION
                          - MACHINE_ACCOUNT
                        description: The type of the campaign.
                        example: MANAGER
                      description:
                        type: string
                        description: The description of the campaign set by the admin who created it.
                        nullable: true
                        example: A description of the campaign
                      correlatedStatus:
                        type: string
                        description: The correlatedStatus of the campaign. Only SOURCE_OWNER campaigns can be Uncorrelated. An Uncorrelated certification campaign only includes Uncorrelated identities (An identity is uncorrelated if it has no accounts on an authoritative source).
                        enum:
                          - CORRELATED
                          - UNCORRELATED
                        example: CORRELATED
                      mandatoryCommentRequirement:
                        type: string
                        description: Determines whether comments are required for decisions during certification reviews. You can require comments for all decisions, revoke-only decisions, or no decisions. By default, comments are not required for decisions.
                        enum:
                          - ALL_DECISIONS
                          - REVOKE_ONLY_DECISIONS
                          - NO_DECISIONS
                        example: NO_DECISIONS
                  completed:
                    type: boolean
                    description: Have all decisions been made?
                    example: true
                  identitiesCompleted:
                    type: integer
                    description: The number of identities for whom all decisions have been made and are complete.
                    example: 5
                    format: int32
                  identitiesTotal:
                    type: integer
                    description: The total number of identities in the Certification, both complete and incomplete.
                    example: 10
                    format: int32
                  created:
                    example: '2018-06-25T20:22:28.104Z'
                    format: date-time
                    type: string
                    description: created date
                  modified:
                    example: '2018-06-25T20:22:28.104Z'
                    format: date-time
                    type: string
                    description: modified date
                  decisionsMade:
                    type: integer
                    description: The number of approve/revoke/acknowledge decisions that have been made.
                    example: 20
                    format: int32
                  decisionsTotal:
                    type: integer
                    description: The total number of approve/revoke/acknowledge decisions.
                    example: 40
                    format: int32
                  due:
                    type: string
                    format: date-time
                    description: The due date of the certification.
                    example: '2018-10-19T13:49:37.385Z'
                    nullable: true
                  signed:
                    type: string
                    format: date-time
                    nullable: true
                    description: The date the reviewer signed off on the Certification.
                    example: '2018-10-19T13:49:37.385Z'
                  reviewer:
                    type: object
                    title: Reviewer
                    properties:
                      id:
                        type: string
                        description: The id of the reviewer.
                        example: ef38f94347e94562b5bb8424a56397d8
                      name:
                        type: string
                        description: The name of the reviewer.
                        example: Reviewer Name
                      email:
                        type: string
                        nullable: true
                        description: The email of the reviewing identity. This is only applicable to reviewers of the `IDENTITY` type.
                        example: reviewer@test.com
                      type:
                        type: string
                        enum:
                          - IDENTITY
                          - GOVERNANCE_GROUP
                        description: The type of the reviewing identity.
                        example: IDENTITY
                      created:
                        nullable: true
                        example: '2018-06-25T20:22:28.104Z'
                        format: date-time
                        type: string
                        description: The created date of the reviewing identity.
                      modified:
                        nullable: true
                        example: '2018-06-25T20:22:28.104Z'
                        format: date-time
                        type: string
                        description: The modified date of the reviewing identity.
                  reassignment:
                    type: object
                    title: Reassignment
                    nullable: true
                    properties:
                      from:
                        type: object
                        title: Certification Reference
                        properties:
                          id:
                            type: string
                            description: The id of the certification.
                            example: ef38f94347e94562b5bb8424a56397d8
                          name:
                            type: string
                            description: The name of the certification.
                            example: Certification Name
                          type:
                            type: string
                            enum:
                              - CERTIFICATION
                            example: CERTIFICATION
                          reviewer:
                            type: object
                            title: Reviewer
                            properties:
                              id:
                                type: string
                                description: The id of the reviewer.
                                example: ef38f94347e94562b5bb8424a56397d8
                              name:
                                type: string
                                description: The name of the reviewer.
                                example: Reviewer Name
                              email:
                                type: string
                                nullable: true
                                description: The email of the reviewing identity. This is only applicable to reviewers of the `IDENTITY` type.
                                example: reviewer@test.com
                              type:
                                type: string
                                enum:
                                  - IDENTITY
                                  - GOVERNANCE_GROUP
                                description: The type of the reviewing identity.
                                example: IDENTITY
                              created:
                                nullable: true
                                example: '2018-06-25T20:22:28.104Z'
                                format: date-time
                                type: string
                                description: The created date of the reviewing identity.
                              modified:
                                nullable: true
                                example: '2018-06-25T20:22:28.104Z'
                                format: date-time
                                type: string
                                description: The modified date of the reviewing identity.
                      comment:
                        type: string
                        description: The comment entered when the Certification was reassigned
                        example: Reassigned for a reason
                  hasErrors:
                    description: Identifies if the certification has an error
                    type: boolean
                    example: false
                  errorMessage:
                    description: Description of the certification error
                    nullable: true
                    type: string
                    example: The certification has an error
                  phase:
                    type: string
                    description: |
                      The current phase of the campaign.
                      * `STAGED`: The campaign is waiting to be activated.
                      * `ACTIVE`: The campaign is active.
                      * `SIGNED`: The reviewer has signed off on the campaign, and it is considered complete.
                    enum:
                      - STAGED
                      - ACTIVE
                      - SIGNED
                    example: ACTIVE
                    title: certificationphase
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
