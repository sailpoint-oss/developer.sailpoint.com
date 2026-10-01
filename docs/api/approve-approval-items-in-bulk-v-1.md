## OpenAPI

```yaml POST /work-items/v1/bulk-approve/{id}
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
  /work-items/v1/bulk-approve/{id}:
    post:
      description: This API bulk approves Approval Items. Either an admin, or the owning/current user must make this request.
      operationId: approveApprovalItemsInBulkV1
      security:
        - userAuth:
            - sp:scopes:all
      parameters:
        - in: path
          name: id
          schema:
            type: string
          required: true
          x-sailpoint-resource-operation-id: listWorkItemsV1
          description: The ID of the work item
          example: ef38f94347e94562b5bb8424a56397d8
      responses:
        '200':
          description: A work items details object.
          content:
            application/json:
              schema:
                type: object
                title: Work Items
                properties:
                  id:
                    type: string
                    description: ID of the work item
                    example: 2c9180835d2e5168015d32f890ca1581
                  requesterId:
                    type: string
                    description: ID of the requester
                    example: 2c9180835d2e5168015d32f890ca1581
                    nullable: true
                  requesterDisplayName:
                    type: string
                    description: The displayname of the requester
                    example: John Smith
                    nullable: true
                  ownerId:
                    type: string
                    description: The ID of the owner
                    example: 2c9180835d2e5168015d32f890ca1581
                    nullable: true
                  ownerName:
                    type: string
                    description: The name of the owner
                    example: Jason Smith
                  created:
                    type: string
                    format: date-time
                    example: '2017-07-11T18:45:37.098Z'
                    description: Time when the work item was created
                  modified:
                    type: string
                    format: date-time
                    example: '2018-06-25T20:22:28.104Z'
                    description: Time when the work item was last updated
                    nullable: true
                  description:
                    type: string
                    description: The description of the work item
                    example: Create account on source 'AD'
                  state:
                    type: string
                    enum:
                      - Finished
                      - Rejected
                      - Returned
                      - Expired
                      - Pending
                      - Canceled
                    example: Finished
                    description: The state of a work item
                    title: workitemstatemanualworkitems
                  type:
                    type: string
                    enum:
                      - Generic
                      - Certification
                      - Remediation
                      - Delegation
                      - Approval
                      - ViolationReview
                      - Form
                      - PolicyVioloation
                      - Challenge
                      - ImpactAnalysis
                      - Signoff
                      - Event
                      - ManualAction
                      - Test
                    example: Generic
                    description: The type of the work item
                    title: workitemtypemanualworkitems
                  remediationItems:
                    type: array
                    nullable: true
                    items:
                      type: object
                      title: Remediation Item Details
                      properties:
                        id:
                          type: string
                          description: The ID of the certification
                          example: 2c9180835d2e5168015d32f890ca1581
                        targetId:
                          type: string
                          description: The ID of the certification target
                          example: 2c9180835d2e5168015d32f890ca1581
                        targetName:
                          type: string
                          description: The name of the certification target
                          example: john.smith
                        targetDisplayName:
                          type: string
                          description: The display name of the certification target
                          example: emailAddress
                        applicationName:
                          type: string
                          description: The name of the application/source
                          example: Active Directory
                        attributeName:
                          type: string
                          description: The name of the attribute being certified
                          example: phoneNumber
                        attributeOperation:
                          type: string
                          description: The operation of the certification on the attribute
                          example: update
                        attributeValue:
                          type: string
                          description: The value of the attribute being certified
                          example: 512-555-1212
                        nativeIdentity:
                          type: string
                          description: The native identity of the target
                          example: jason.smith2
                    description: A list of remediation items
                  approvalItems:
                    type: array
                    nullable: true
                    items:
                      type: object
                      title: Approval Item Details
                      properties:
                        id:
                          type: string
                          description: The approval item's ID
                          example: 2c9180835d2e5168015d32f890ca1581
                        account:
                          type: string
                          description: The account referenced by the approval item
                          example: john.smith
                          nullable: true
                        application:
                          type: string
                          description: The name of the application/source
                          example: Active Directory
                        name:
                          type: string
                          description: The attribute's name
                          example: emailAddress
                          nullable: true
                        operation:
                          type: string
                          description: The attribute's operation
                          example: update
                        value:
                          type: string
                          description: The attribute's value
                          example: a@b.com
                          nullable: true
                        state:
                          allOf:
                            - type: string
                              nullable: true
                              enum:
                                - Finished
                                - Rejected
                                - Returned
                                - Expired
                                - Pending
                                - Canceled
                                - null
                              example: Pending
                              description: The state of a work item
                              title: workitemstate
                            - nullable: true
                    description: A list of items that need to be approved
                  name:
                    type: string
                    description: The work item name
                    example: Account Create
                    nullable: true
                  completed:
                    type: string
                    format: date-time
                    example: '2018-10-19T13:49:37.385Z'
                    description: The time at which the work item completed
                    nullable: true
                  numItems:
                    type: integer
                    format: int32
                    description: The number of items in the work item
                    example: 19
                    nullable: true
                  form:
                    allOf:
                      - type: object
                        title: Form Details
                        properties:
                          id:
                            type: string
                            description: ID of the form
                            example: 2c9180835d2e5168015d32f890ca1581
                            nullable: true
                          name:
                            type: string
                            description: Name of the form
                            example: AccountSelection Form
                            nullable: true
                          title:
                            type: string
                            nullable: true
                            description: The form title
                            example: Account Selection for John.Doe
                          subtitle:
                            type: string
                            nullable: true
                            description: The form subtitle.
                            example: Please select from the following
                          targetUser:
                            type: string
                            description: The name of the user that should be shown this form
                            example: Jane.Doe
                          sections:
                            type: array
                            items:
                              type: object
                              title: Section Details
                              allOf:
                                - type: object
                                  title: Form Item Details
                                  properties:
                                    name:
                                      type: string
                                      nullable: true
                                      description: Name of the FormItem
                                      example: Field1
                                - type: object
                                  properties:
                                    label:
                                      type: string
                                      nullable: true
                                      description: Label of the section
                                      example: Section 1
                                    formItems:
                                      type: array
                                      items:
                                        type: object
                                      description: List of FormItems. FormItems can be SectionDetails and/or FieldDetails
                                      example: []
                            description: Sections of the form
                      - nullable: true
                  errors:
                    type: array
                    items:
                      type: string
                    example:
                      - The work item ID that was specified was not found.
                    description: An array of errors that ocurred during the work item
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
