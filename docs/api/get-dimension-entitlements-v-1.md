## OpenAPI

```yaml GET /roles/v1/{roleId}/dimensions/{dimensionId}/entitlements
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
  /roles/v1/{roleId}/dimensions/{dimensionId}/entitlements:
    get:
      description: |-
        This API lists the Entitlements associated with a given dimension.

        A token with API, ORG_ADMIN, ROLE_ADMIN, or ROLE_SUBADMIN authority is required to call this API.
      operationId: getDimensionEntitlementsV1
      security:
        - userAuth:
            - idn:role-unchecked:read
            - idn:role-unchecked:manage
            - idn:role-checked:manage
            - idn:role-checked:read
      parameters:
        - in: path
          name: roleId
          required: true
          x-sailpoint-resource-operation-id: listRolesV1
          schema:
            type: string
          description: Parent Role Id of the dimension.
          example: 6603fba3004f43c687610a29195252ce
        - in: path
          name: dimensionId
          schema:
            type: string
          required: true
          x-sailpoint-resource-operation-id: listDimensionsV1
          description: Id of the Dimension
          example: 2c9180835d191a86015d28455b4a2329
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
          name: filters
          schema:
            type: string
          description: |-
            Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)

            Filtering is supported for the following fields and operators:

            **id**: *eq, in*

            **name**: *eq, sw*

            **attribute**: *eq, sw*

            **value**: *eq, sw*

            **created**: *gt, lt, ge, le*

            **modified**: *gt, lt, ge, le*

            **owner.id**: *eq, in*

            **source.id**: *eq, in*
          example: attribute eq "memberOf"
          required: false
        - in: query
          name: sorters
          schema:
            type: string
            format: comma-separated
          description: |-
            Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)

            Sorting is supported for the following fields: **name, attribute, value, created, modified**
          example: name,-modified
          required: false
      responses:
        '200':
          description: List of Entitlements
          content:
            application/json:
              schema:
                type: array
                items:
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
                      example: PayrollControls
                    attribute:
                      type: string
                      description: The entitlement attribute name
                      example: memberOf
                    value:
                      type: string
                      description: The value of the entitlement
                      example: CN=PayrollControls,OU=Groups,OU=Demo,DC=seri,DC=sailpointdemo,DC=com
                    sourceSchemaObjectType:
                      type: string
                      description: The object type of the entitlement from the source schema
                      example: group
                    description:
                      type: string
                      description: The description of the entitlement
                      example: Grants the ability to access and manage payroll-related controls and settings within the Corporate Active Directory system.
                      nullable: true
                    privileged:
                      type: boolean
                      description: True if the entitlement is privileged
                      default: false
                      example: true
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
                    additionalOwners:
                      type: array
                      nullable: true
                      description: List of additional owner references beyond the primary owner. Each entry may be an identity (IDENTITY) or a governance group (GOVERNANCE_GROUP).
                      items:
                        type: object
                        description: Reference to an additional owner (identity or governance group).
                        properties:
                          type:
                            type: string
                            enum:
                              - IDENTITY
                              - GOVERNANCE_GROUP
                            description: Type of the additional owner; IDENTITY for an identity, GOVERNANCE_GROUP for a governance group.
                            example: IDENTITY
                          id:
                            type: string
                            description: ID of the identity or governance group.
                            example: 2c9180a46faadee4016fb4e018c20639
                          name:
                            type: string
                            nullable: true
                            description: Display name. It may be left null or omitted on input. If set, it must match the current display name of the identity or governance group, otherwise a 400 Bad Request error may result.
                            example: support
                        title: additionalownerref
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
                          example: Corporate Active Directory
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
