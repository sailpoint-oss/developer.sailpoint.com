## OpenAPI

```yaml GET /data-segments/v1/{segmentId}
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
  /data-segments/v1/{segmentId}:
    get:
      description: This API returns the segment specified by the given ID.
      operationId: getDataSegmentV1
      security:
        - userAuth:
            - idn:data-segment:read
      parameters:
        - in: path
          name: segmentId
          schema:
            type: string
          required: true
          description: The segment ID to retrieve.
          example: ef38f943-47e9-4562-b5bb-8424a56397d8
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
          description: Segment
          content:
            application/json:
              schema:
                type: object
                properties:
                  id:
                    type: string
                    description: The segment's ID.
                    example: 0f11f2a4-7c94-4bf3-a2bd-742580fe3bde
                    title: segmentid
                  name:
                    type: string
                    description: The segment's business name.
                    example: segment-xyz
                  created:
                    type: string
                    format: date-time
                    description: The time when the segment is created.
                    example: '2020-01-01T00:00:00.000000Z'
                  modified:
                    type: string
                    format: date-time
                    description: The time when the segment is modified.
                    example: '2020-01-01T00:00:00.000000Z'
                  description:
                    type: string
                    description: The segment's optional description.
                    example: This segment represents xyz
                  scopes:
                    type: array
                    items:
                      type: object
                      description: This defines what access the segment is giving
                      properties:
                        scope:
                          type: string
                          enum:
                            - ENTITLEMENT
                            - CERTIFICATION
                            - IDENTITY
                            - ENTITLEMENTREQUEST
                          description: An enumeration of the types of scope choices
                          example: ALL
                          title: scopetype
                        visibility:
                          type: string
                          enum:
                            - ALL
                            - FILTER
                            - SELECTION
                            - UNSEGMENTED
                          description: An enumeration of the types of scope visibility choices
                          example: ALL
                          title: scopevisibilitytype
                        scopeFilter:
                          type: object
                          title: Visibility Criteria
                          properties:
                            expression:
                              type: object
                              title: Expression
                              properties:
                                operator:
                                  type: string
                                  description: Operator for the expression
                                  enum:
                                    - AND
                                    - EQUALS
                                  example: EQUALS
                                attribute:
                                  type: string
                                  description: Name for the attribute
                                  example: location
                                  nullable: true
                                value:
                                  type: object
                                  title: Value
                                  nullable: true
                                  properties:
                                    type:
                                      type: string
                                      description: The type of attribute value
                                      example: STRING
                                    value:
                                      type: string
                                      description: The attribute value
                                      example: Austin
                                children:
                                  type: array
                                  nullable: true
                                  description: List of expressions
                                  items:
                                    type: object
                                    properties:
                                      operator:
                                        type: string
                                        description: Operator for the expression
                                        enum:
                                          - AND
                                          - EQUALS
                                        example: EQUALS
                                      attribute:
                                        type: string
                                        description: Name for the attribute
                                        example: location
                                        nullable: true
                                      value:
                                        type: object
                                        title: Value
                                        nullable: true
                                        properties:
                                          type:
                                            type: string
                                            description: The type of attribute value
                                            example: STRING
                                          value:
                                            type: string
                                            description: The attribute value
                                            example: Austin
                                      children:
                                        type: string
                                        nullable: true
                                        description: There cannot be anymore nested children. This will always be null.
                                        example: null
                                  example: []
                        scopeSelection:
                          type: array
                          items:
                            type: object
                            properties:
                              type:
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
                                description: An enumeration of the types of DTOs supported within the IdentityNow infrastructure.
                                example: IDENTITY
                                title: dtotype
                              id:
                                type: string
                                description: ID of the object to which this reference applies
                                example: 2c91808568c529c60168cca6f90c1313
                            title: ref
                          nullable: false
                          description: List of Identities that are assigned to the segment
                          example:
                            - type: IDENTITY
                              id: 29cb6c061da843ea8be4b3125f248f2a
                            - type: IDENTITY
                              id: f7b1b8a35fed4fd4ad2982014e137e19
                          title: selection
                      title: scope
                    nullable: false
                    description: List of Scopes that are assigned to the segment
                    example:
                      - scope: ENTITLEMENT
                        visibility: SELECTION
                        scopeFilter: null
                        scopeSelection:
                          - type: ENTITLEMENT
                            id: 34d73f611449463ea4fdcf02cda0c397
                    title: scopes
                  memberSelection:
                    type: array
                    items:
                      type: object
                      properties:
                        type:
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
                          description: An enumeration of the types of DTOs supported within the IdentityNow infrastructure.
                          example: IDENTITY
                          title: dtotype
                        id:
                          type: string
                          description: ID of the object to which this reference applies
                          example: 2c91808568c529c60168cca6f90c1313
                      title: ref
                    nullable: false
                    description: List of Identities that are assigned to the segment
                    example:
                      - type: IDENTITY
                        id: 29cb6c061da843ea8be4b3125f248f2a
                      - type: IDENTITY
                        id: f7b1b8a35fed4fd4ad2982014e137e19
                    title: selection
                  memberFilter:
                    type: object
                    title: Visibility Criteria
                    properties:
                      expression:
                        type: object
                        title: Expression
                        properties:
                          operator:
                            type: string
                            description: Operator for the expression
                            enum:
                              - AND
                              - EQUALS
                            example: EQUALS
                          attribute:
                            type: string
                            description: Name for the attribute
                            example: location
                            nullable: true
                          value:
                            type: object
                            title: Value
                            nullable: true
                            properties:
                              type:
                                type: string
                                description: The type of attribute value
                                example: STRING
                              value:
                                type: string
                                description: The attribute value
                                example: Austin
                          children:
                            type: array
                            nullable: true
                            description: List of expressions
                            items:
                              type: object
                              properties:
                                operator:
                                  type: string
                                  description: Operator for the expression
                                  enum:
                                    - AND
                                    - EQUALS
                                  example: EQUALS
                                attribute:
                                  type: string
                                  description: Name for the attribute
                                  example: location
                                  nullable: true
                                value:
                                  type: object
                                  title: Value
                                  nullable: true
                                  properties:
                                    type:
                                      type: string
                                      description: The type of attribute value
                                      example: STRING
                                    value:
                                      type: string
                                      description: The attribute value
                                      example: Austin
                                children:
                                  type: string
                                  nullable: true
                                  description: There cannot be anymore nested children. This will always be null.
                                  example: null
                            example: []
                  membership:
                    type: string
                    enum:
                      - ALL
                      - FILTER
                      - SELECTION
                    description: An enumeration of the types of membership choices
                    example: ALL
                    title: membershiptype
                  enabled:
                    type: boolean
                    description: This boolean indicates whether the segment is currently active. Inactive segments have no effect.
                    default: false
                    example: true
                    title: enabled
                  published:
                    type: boolean
                    description: This boolean indicates whether the segment is being applied to the accounts. If unpublished its being actively modified to until published
                    default: false
                    example: true
                    title: published
                title: data-segment
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
