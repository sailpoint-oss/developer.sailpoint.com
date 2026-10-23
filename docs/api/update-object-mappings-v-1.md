## OpenAPI

```yaml POST /configuration-hub/v1/object-mappings/{sourceOrg}/bulk-patch
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
  /configuration-hub/v1/object-mappings/{sourceOrg}/bulk-patch:
    post:
      description: |-
        This updates a set of object mappings, only enabled and targetValue fields can be updated.
        Source org should be "default" when updating object mappings that are not associated to any particular org.
        The request will need the following security scope:
        - sp:config-object-mapping:manage
      operationId: updateObjectMappingsV1
      security:
        - userAuth:
            - sp:config-object-mapping:manage
      parameters:
        - in: path
          name: sourceOrg
          schema:
            type: string
          required: true
          description: The name of the source org.
          example: source-org
      requestBody:
        description: The object mapping request body.
        required: true
        content:
          application/json:
            schema:
              type: object
              title: Bulk Update Object Mapping Request
              required:
                - patches
              properties:
                patches:
                  description: Map of id of the object mapping to a JsonPatchOperation describing what to patch on that object mapping.
                  type: object
                  additionalProperties:
                    type: array
                    items:
                      type: object
                      title: Json Patch Operation
                      description: A JSONPatch Operation as defined by [RFC 6902 - JSON Patch](https://tools.ietf.org/html/rfc6902)
                      required:
                        - op
                        - path
                      properties:
                        op:
                          type: string
                          description: The operation to be performed
                          enum:
                            - add
                            - remove
                            - replace
                            - move
                            - copy
                            - test
                          example: replace
                        path:
                          type: string
                          description: A string JSON Pointer representing the target path to an element to be affected by the operation
                          example: /description
                        value:
                          oneOf:
                            - type: string
                              example: New description
                              title: string
                            - type: boolean
                              example: true
                              title: boolean
                            - type: integer
                              example: 300
                              title: integer
                            - type: object
                              title: object
                              example:
                                attributes:
                                  name: philip
                            - type: array
                              title: array
                              items:
                                anyOf:
                                  - type: string
                                  - type: integer
                                  - type: object
                                example:
                                  - '001'
                                  - '002'
                                  - '003'
                          description: The value to be used for the operation, required for "add" and "replace" operations
                          example: New description
                  example:
                    603b1a61-d03d-4ed1-864f-a508fbd1995d:
                      - op: replace
                        path: /enabled
                        value: true
                    00bece34-f50d-4227-8878-76f620b5a971:
                      - op: replace
                        path: /targetValue
                        value: New Target Value
            example:
              patches:
                603b1a61-d03d-4ed1-864f-a508fbd1995d:
                  - op: replace
                    path: /enabled
                    value: true
                00bece34-f50d-4227-8878-76f620b5a971:
                  - op: replace
                    path: /targetValue
                    value: New Target Value
      responses:
        '200':
          description: The updated object mappings.
          content:
            application/json:
              schema:
                type: object
                title: Bulk Update Object Mapping Response
                properties:
                  patchedObjects:
                    type: array
                    items:
                      type: object
                      title: Object Mapping Response
                      properties:
                        objectMappingId:
                          type: string
                          description: Id of the object mapping
                          example: 3d6e0144-963f-4bd6-8d8d-d77b4e507ce4
                        objectType:
                          type: string
                          description: Type of the object the mapping value applies to
                          example: IDENTITY
                          enum:
                            - ACCESS_PROFILE
                            - ACCESS_REQUEST_CONFIG
                            - ATTR_SYNC_SOURCE_CONFIG
                            - AUTH_ORG
                            - CAMPAIGN_FILTER
                            - ENTITLEMENT
                            - FORM_DEFINITION
                            - GOVERNANCE_GROUP
                            - IDENTITY
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
                        jsonPath:
                          type: string
                          description: JSONPath expression denoting the path within the object where the mapping value should be applied
                          example: $.name
                        sourceValue:
                          type: string
                          description: Original value at the jsonPath location within the object
                          example: My Governance Group Name
                        targetValue:
                          type: string
                          description: Value to be assigned at the jsonPath location within the object
                          example: My New Governance Group Name
                        enabled:
                          type: boolean
                          description: Whether or not this object mapping is enabled
                          default: false
                          example: false
                        created:
                          type: string
                          description: Object mapping creation timestamp
                          example: '2024-03-19T23:18:53.732Z'
                        modified:
                          type: string
                          description: Object mapping latest update timestamp
                          example: '2024-03-19T23:18:53.732Z'
              example:
                patchedObjects:
                  - objectMappingId: 603b1a61-d03d-4ed1-864f-a508fbd1995d
                    objectType: SOURCE
                    jsonPath: $.name
                    sourceValue: Original SOURCE Name
                    targetValue: New SOURCE Name
                    enabled: true
                    created: '2024-03-25T15:50:41.314Z'
                    modified: '2024-03-25T15:50:41.299Z'
                  - objectMappingId: 00bece34-f50d-4227-8878-76f620b5a971
                    objectType: IDENTITY
                    jsonPath: $.name
                    sourceValue: Original IDENTITY Name
                    targetValue: 'New IDENTITY Name '
                    enabled: true
                    created: '2024-03-25T15:50:41.316Z'
                    modified: '2024-03-25T15:50:41.316Z'
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
