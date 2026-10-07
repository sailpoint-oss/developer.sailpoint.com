## OpenAPI

```yaml GET /authorization/v1/custom-user-levels/{id}
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
  /authorization/v1/custom-user-levels/{id}:
    get:
      description: Fetches the details of a specific user level by its ID.
      operationId: getUserLevelV1
      security:
        - userAuth:
            - idn:user-level:manage
      parameters:
        - name: X-SailPoint-Experimental
          in: header
          description: Use this header to enable this experimental API.
          example: true
          schema:
            type: string
            default: true
          required: true
        - name: id
          in: path
          required: true
          description: The unique identifier of the user level.
          x-sailpoint-resource-operation-id: listUserLevelsV1
          schema:
            type: string
          example: 6e110911-5984-491b-be74-2707980a46a7
      responses:
        '200':
          description: Successfully retrieved the user level details.
          headers:
            accept-language:
              description: The locale to use for translations for the response
              schema:
                type: string
          content:
            application/json:
              schema:
                type: object
                description: It represents a summary of a user level, including its metadata, attributes, and associated properties.
                properties:
                  id:
                    type: string
                    description: The unique identifier of the UserLevel.
                    example: beb02a57-010f-4c29-a6d2-fae9628bda73
                  name:
                    type: string
                    description: The human-readable name of the UserLevel.
                    example: Custom User Level Name
                  description:
                    type: string
                    description: A human-readable description of the UserLevel.
                    example: This is a description of the CustomUserLevel.
                    nullable: true
                  legacyGroup:
                    type: string
                    description: The legacy group associated with the UserLevel, used for backward compatibility for the UserLevel id.
                    example: ORG_ADMIN
                    nullable: true
                  rightSets:
                    type: array
                    items:
                      type: object
                      description: A RightSetDTO represents a collection of rights that assigned to capability or scope, enabling them to possess specific rights to access corresponding APIs.
                      properties:
                        id:
                          type: string
                          description: The unique identifier of the RightSet.
                          example: idn:ui-right-set-example
                        name:
                          type: string
                          description: The human-readable name of the RightSet.
                          example: Right Set Name
                        description:
                          type: string
                          description: A human-readable description of the RightSet.
                          example: This is a description of the RightSet.
                        category:
                          type: string
                          description: The category of the RightSet.
                          example: identity
                        rights:
                          type: array
                          items:
                            type: string
                          description: Right is the most granular unit that determines specific API permissions, this is a list of rights associated with the RightSet.
                          example:
                            - idn:ui-right-set-example:read
                            - idn:ui-right-set-example:write
                        rightSetIds:
                          type: array
                          items:
                            type: string
                          description: List of unique identifiers for related RightSets, current RightSet contains rights from these RightSets.
                          example:
                            - idn:ui-right-set-example-update
                            - idn:ui-right-set-example-delete
                        uiAssignableChildRightSetIds:
                          type: array
                          items:
                            type: string
                          description: List of unique identifiers for UI-assignable child RightSets, used to build UI components.
                          example:
                            - idn:ui-right-set-example-detail
                            - idn:ui-right-set-example-management
                        uiAssignable:
                          type: boolean
                          description: Indicates whether the RightSet is UI-assignable.
                          default: false
                          example: true
                        translatedName:
                          type: string
                          description: The translated name of the RightSet.
                          example: Translated Right Set Name
                        translatedDescription:
                          type: string
                          nullable: true
                          description: The translated description of the RightSet.
                          example: This is a translated description of the RightSet.
                        parentId:
                          type: string
                          description: The unique identifier of the parent RightSet for UI Assignable RightSet.
                          example: idn:ui-parent-example
                          nullable: true
                      title: rightsetdto
                    description: List of RightSets associated with the UserLevel.
                  custom:
                    type: boolean
                    description: Indicates whether the UserLevel is custom.
                    default: true
                    example: true
                  adminAssignable:
                    type: boolean
                    description: Indicates whether the UserLevel is admin-assignable.
                    default: true
                    example: true
                  translatedName:
                    type: string
                    description: The translated name of the UserLevel.
                    example: Translated Custom User Level Name
                    nullable: true
                  translatedGrant:
                    type: string
                    description: The translated grant message for the UserLevel.
                    example: Grant Message
                    nullable: true
                  translatedRemove:
                    type: string
                    description: The translated remove message for the UserLevel.
                    example: Remove Message
                    nullable: true
                  owner:
                    description: The owner of the UserLevel.
                    type: object
                    title: Public Identity
                    properties:
                      id:
                        type: string
                        description: Identity id
                        example: 2c9180857182305e0171993735622948
                      name:
                        type: string
                        description: Human-readable display name of identity.
                        example: Alison Ferguso
                      alias:
                        type: string
                        description: Alternate unique identifier for the identity.
                        example: alison.ferguso
                      email:
                        nullable: true
                        type: string
                        description: Email address of identity.
                        example: alison.ferguso@acme-solar.com
                      status:
                        nullable: true
                        type: string
                        description: The lifecycle status for the identity
                        example: Active
                      identityState:
                        nullable: true
                        type: string
                        enum:
                          - ACTIVE
                          - INACTIVE_SHORT_TERM
                          - INACTIVE_LONG_TERM
                          - null
                        example: ACTIVE
                        description: |
                          The current state of the identity, which determines how Identity Security Cloud interacts with the identity.
                          An identity that is Active will be included identity picklists in Request Center, identity processing, and more.
                          Identities that are Inactive will be excluded from these features.
                      manager:
                        type: object
                        title: Identity Reference
                        nullable: true
                        description: The manager for the identity.
                        properties:
                          type:
                            example: IDENTITY
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
                            title: dtotype
                          id:
                            type: string
                            description: Identity id
                            example: 2c9180a46faadee4016fb4e018c20639
                          name:
                            type: string
                            description: Human-readable display name of identity.
                            example: Thomas Edison
                      attributes:
                        type: array
                        description: The public identity attributes of the identity
                        items:
                          type: object
                          properties:
                            key:
                              type: string
                              description: The attribute key
                              example: country
                            name:
                              type: string
                              description: Human-readable display name of the attribute
                              example: Country
                            value:
                              type: string
                              description: The attribute value
                              example: US
                              nullable: true
                  status:
                    type: string
                    enum:
                      - ACTIVE
                      - DRAFT
                    description: The status of the UserLevel.
                    example: Active
                  created:
                    type: string
                    format: date-time
                    description: The creation timestamp of the UserLevel.
                    example: '2023-01-01T12:00:00Z'
                  modified:
                    type: string
                    format: date-time
                    description: The last modification timestamp of the UserLevel.
                    example: '2023-01-02T12:00:00Z'
                  associatedIdentitiesCount:
                    type: integer
                    description: The count of associated identities for the UserLevel.
                    format: int32
                    example: 10
                    nullable: true
                title: userlevelsummarydto
              example:
                owner:
                  type: IDENTITY
                  id: 29b9da8273b441239238bc041c386817
                  name: John Doe
                status: ACTIVE
                created: '2023-01-01T12:00:00Z'
                modified: '2023-01-02T12:00:00Z'
                associatedIdentitiesCount: 10
                id: beb02a57-010f-4c29-a6d2-fae9628bda73
                name: Identity And Detail Management
                description: This is a description of the custom user level.
                legacyGroup: null
                rightSets:
                  - id: idn:ui-identity-manage-example
                    name: Identity Management
                    description: Access to manage all identities.
                    category: identity
                    rights:
                      - idn:ui-identity-example:read
                      - idn:ui-identity-example:write
                    rightSetIds:
                      - idn:identity-management-example
                    uiAssignableChildRightSetIds:
                      - idn:ui-identity-details-read-example
                      - idn:ui-identity-list-read-example
                    uiAssignable: true
                    translatedName: Identity Management
                    translatedDescription: Access to manage all identities.
                    parentId: null
                  - id: idn:ui-identity-details-read-example
                    name: Identity Details Read
                    description: Read only access for identity details.
                    category: identity
                    rights:
                      - idn:ui-identity-details-example:read
                    rightSetIds: []
                    uiAssignableChildRightSetIds: []
                    uiAssignable: true
                    translatedName: Identity Details Read
                    translatedDescription: Read only access for identity details.
                    parentId: idn:ui-identity-manage-example
                custom: true
                adminAssignable: true
                translatedName: null
                translatedGrant: null
                translatedRemove: null
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
