## OpenAPI

```yaml PATCH /entitlements/v1/{id}
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
  /entitlements/v1/{id}:
    patch:
      description: |-
        This API updates an existing entitlement using [JSON Patch](https://tools.ietf.org/html/rfc6902) syntax.

        The following fields are patchable: **requestable**, **segments**, **privilegeOverride/level**, **owner**, **name**, **description**, **manuallyUpdatedFields**, and **accessModelMetadata**

        When you're patching owner, only owner type and owner id must be provided. Owner name is optional, and it won't be modified. If the owner name is provided, it should correspond to the real name. The only owner type currently supported is IDENTITY.

        When you're patching **accessModelMetadata**, each attribute's **key** must match the key of an existing access model metadata attribute, and each **value** must be one of the values configured for that key. Use [List access model metadata attributes](https://developer.sailpoint.com/docs/api/list-access-model-metadata-attribute-v-1) to look up the available keys and values.
      operationId: patchEntitlementV1
      security:
        - userAuth:
            - idn:entitlement:manage
      parameters:
        - name: id
          in: path
          description: ID of the entitlement to patch
          required: true
          x-sailpoint-resource-operation-id: listEntitlementsV1
          schema:
            type: string
            example: 2c91808a7813090a017814121e121518
      requestBody:
        content:
          application/json-patch+json:
            schema:
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
                - op: replace
                  path: /requestable
                  value: true
            examples:
              Assign an entitlement to a segment:
                description: This example shows how to use patch to assign an entitlement to a segment by adding the segment's ID to the entitlement's segments array.
                value:
                  - op: add
                    path: /segments/-
                    value: f7b1b8a3-5fed-4fd4-ad29-82014e137e19
              Assign an owner to an entitlement:
                description: This example shows how to use patch to assign an owner to an entitlement by adding the owner's info to the entitlement.
                value:
                  - op: add
                    path: /owner
                    value:
                      type: IDENTITY
                      id: 2c9180858315595501831958427e5424
              Replace an owner for an entitlement:
                description: This example shows how to use patch to replace an entitlement's owner by replacing the owner's info to the entitlement.
                value:
                  - op: replace
                    path: /owner
                    value:
                      type: IDENTITY
                      id: 2c9180858315595501831958427e5424
              Set entitlement manually updated fields:
                description: 'This example shows how to set an entitlement''s manually updated fields values with patch request. Values for all manually updateable fields must be specified in the request. For now only two entitlement fields support this: DISPLAY_NAME and DESCRIPTION.'
                value:
                  - op: replace
                    path: /manuallyUpdatedFields
                    value:
                      DISPLAY_NAME: true
                      DESCRIPTION: true
              Add the description for an entitlement:
                description: This example shows how to use patch to add a description for the entitlement.
                value:
                  - op: add
                    path: /description
                    value: new description for the entitlement
              Update the name for an entitlement:
                description: This example shows how to use patch to update an entitlement's name.
                value:
                  - op: replace
                    path: /name
                    value: entitlement new name
              Add access model metadata to an entitlement:
                description: This example shows how to use patch to add an access model metadata attribute to an entitlement. The key must match the key of an existing access model metadata attribute, and the value must be one of the values configured for that key.
                value:
                  - op: add
                    path: /accessModelMetadata
                    value:
                      attributes:
                        - key: iscEnvironment
                          values:
                            - value: production
              Override privilege level for an entitlement:
                description: This example shows how to use patch to update an entitlement's privilege level.
                value:
                  - op: replace
                    path: /privilegeOverride/level
                    value: MEDIUM
      responses:
        '200':
          description: Responds with the entitlement as updated.
          content:
            application/json:
              schema:
                type: object
                title: Entitlement
                properties:
                  id:
                    type: string
                    description: The entitlement id
                    example: 2c91808874ff91550175097daaec161c
                  name:
                    type: string
                    description: The entitlement name
                    example: Account Payable
                  attribute:
                    type: string
                    description: The entitlement attribute name
                    example: memberOf
                  value:
                    type: string
                    description: The value of the entitlement
                    example: CN=Account Payable,OU=Finance,DC=xyz company
                  sourceSchemaObjectType:
                    type: string
                    description: The object type of the entitlement from the source schema
                    example: group
                  description:
                    type: string
                    description: The description of the entitlement
                    example: This entitlement allows users to access the accounts payable module of the organization's financial management system. Users can view, process, and approve invoices, manage vendor relationships, and perform other accounts payable-related tasks.
                    nullable: true
                  privilegeLevel:
                    allOf:
                      - type: object
                        title: Requested Account Ref
                        properties:
                          direct:
                            type: string
                            description: Direct privilege level assigned to the entitlement
                            example: HIGH
                            enum:
                              - HIGH
                              - LOW
                              - MEDIUM
                              - NONE
                          setBy:
                            type: string
                            description: User or process that set the privilege level
                            example: SAILPOINT_MIGRATION
                          setByType:
                            type: string
                            nullable: true
                            description: Method by which the privilege level was set
                            example: OVERRIDE
                            enum:
                              - OVERRIDE
                              - CUSTOM_CRITERIA
                              - CONNECTOR_CRITERIA
                              - SINGLE_LEVEL_CRITERIA
                          inherited:
                            type: string
                            nullable: true
                            description: Inherited privilege level on the entitlement, if any
                            example: null
                            enum:
                              - HIGH
                              - LOW
                              - MEDIUM
                              - NONE
                          effective:
                            type: string
                            description: Effective privilege level assigned to the entitlement
                            example: HIGH
                            enum:
                              - HIGH
                              - LOW
                              - MEDIUM
                              - NONE
                      - description: Privilege level of the entitlement
                        nullable: true
                  tags:
                    type: array
                    description: List of tags assigned to the entitlement
                    items:
                      type: string
                    example:
                      - tag1
                      - tag2
                    nullable: true
                  cloudGoverned:
                    type: boolean
                    description: True if the entitlement is cloud governed
                    default: false
                    example: true
                  requestable:
                    type: boolean
                    description: True if the entitlement is able to be directly requested
                    example: true
                    default: false
                  owner:
                    type: object
                    description: The identity that owns the entitlement
                    nullable: true
                    properties:
                      id:
                        type: string
                        description: The identity ID
                        example: 2c9180827ca885d7017ca8ce28a000eb
                      type:
                        type: string
                        enum:
                          - IDENTITY
                        description: The type of object
                        example: IDENTITY
                      name:
                        type: string
                        description: The display name of the identity
                        example: john.doe
                  manuallyUpdatedFields:
                    type: object
                    description: A map of entitlement fields that have been manually updated. The key is the field name in UPPER_SNAKE_CASE format, and the value is true or false to indicate if the field has been updated.
                    nullable: true
                    additionalProperties: true
                    example:
                      DISPLAY_NAME: true
                      DESCRIPTION: true
                  accessModelMetadata:
                    type: object
                    description: Additional data to classify the entitlement
                    properties:
                      attributes:
                        type: array
                        items:
                          type: object
                          title: Access Model Metadata
                          description: Metadata that describes an access item
                          properties:
                            key:
                              type: string
                              description: Unique identifier for the metadata type
                              example: iscCsp
                            name:
                              type: string
                              description: Human readable name of the metadata type
                              example: CSP
                            multiselect:
                              type: boolean
                              default: false
                              example: true
                              description: Allows selecting multiple values
                            status:
                              type: string
                              description: The state of the metadata item
                              example: active
                            type:
                              type: string
                              description: The type of the metadata item
                              example: governance
                            objectTypes:
                              type: array
                              description: The types of objects
                              example:
                                - general
                              items:
                                type: string
                                example: general
                            description:
                              type: string
                              description: Describes the metadata item
                              example: Indicates the type of deployment environment of an access item.
                            values:
                              type: array
                              description: The value to assign to the metadata item
                              items:
                                type: object
                                description: An individual value to assign to the metadata item
                                properties:
                                  value:
                                    type: string
                                    description: The value to assign to the metdata item
                                    example: development
                                  name:
                                    type: string
                                    description: Display name of the value
                                    example: Development
                                  status:
                                    type: string
                                    description: The status of the individual value
                                    example: active
                  created:
                    type: string
                    description: Time when the entitlement was created
                    format: date-time
                    example: '2020-10-08T18:33:52.029Z'
                  modified:
                    type: string
                    description: Time when the entitlement was last modified
                    format: date-time
                    example: '2020-10-08T18:33:52.029Z'
                  source:
                    type: object
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
                  attributes:
                    type: object
                    description: A map of free-form key-value pairs from the source system
                    example:
                      fieldName: fieldValue
                    additionalProperties: true
                  segments:
                    type: array
                    items:
                      type: string
                    nullable: true
                    description: List of IDs of segments, if any, to which this Entitlement is assigned.
                    example:
                      - f7b1b8a3-5fed-4fd4-ad29-82014e137e19
                      - 29cb6c06-1da8-43ea-8be4-b3125f248f2a
                  directPermissions:
                    type: array
                    items:
                      type: object
                      title: Permission DTO
                      description: Simplified DTO for the Permission objects stored in SailPoint's database. The data is aggregated from customer systems and is free-form, so its appearance can vary largely between different clients/customers.
                      properties:
                        rights:
                          type: array
                          description: All the rights (e.g. actions) that this permission allows on the target
                          example: HereIsRight1
                          readOnly: true
                          items:
                            type: string
                            example: SELECT
                        target:
                          type: string
                          description: The target the permission would grants rights on.
                          readOnly: true
                          example: SYS.GV_$TRANSACTION
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
