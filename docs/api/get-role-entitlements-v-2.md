## OpenAPI

```yaml GET /roles/v2/{id}/entitlements
openapi: 3.0.1
info:
  title: SailPoint Identity Security API
  description: Use these APIs to interact with the SailPoint Identity Security platform to achieve repeatable, automated processes with greater scalability. We encourage you to join the SailPoint Developer Community forum at https://developer.sailpoint.com/discuss to connect with other developers using our APIs.
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
  /roles/v2/{id}/entitlements:
    get:
      description: |-
        Get a list of entitlements assigned directly to a specified Role. Each entitlement includes its privilege level in `privilegeLevel`, with the direct, inherited, and effective levels.

        Use either offset pagination (`offset` and `limit`) or cursor pagination (`cursor` and `limit`). When more results are available, the `x-next-cursor` response header contains the cursor for the next page. You can't use `cursor` together with an `offset` greater than 0, and `offset` plus `limit` can't be greater than 10,000.
      operationId: getRoleEntitlementsV2
      security:
        - userAuth:
            - idn:role-unchecked:read
            - idn:role-unchecked:manage
            - idn:role-checked:manage
            - idn:role-checked:read
      parameters:
        - name: X-SailPoint-Experimental
          in: header
          description: Use this header to enable this experimental API.
          example: 'true'
          schema:
            type: string
            default: 'true'
          required: true
        - name: id
          in: path
          description: Containing role's ID.
          required: true
          x-sailpoint-resource-operation-id: listRolesV2
          schema:
            type: string
            example: 2c91808a7813090a017814121919ecca
        - in: query
          name: limit
          description: |-
            Max number of results to return.
            See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
          required: false
          example: 50
          schema:
            type: integer
            format: int32
            minimum: 0
            maximum: 250
            default: 50
        - in: query
          name: offset
          description: |-
            Offset into the full result set. Usually specified with *limit* to paginate through the results. Must be 0 or omitted when *cursor* is specified.
            See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
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

            See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
          required: false
          example: true
          schema:
            type: boolean
            default: false
        - in: query
          name: cursor
          schema:
            type: string
            default: ''
          description: Opaque cursor returned in the `x-next-cursor` response header of the previous page. Pass it with the same `sorters` to get the next page of results. Can't be used with an *offset* greater than 0.
          example: eyJzb3J0IjpbImNyZWF0ZWQiLCJpZCJdLCJzZWFyY2hBZnRlciI6WyIxNjAyMTgyMDMyMDI5IiwiMmM5MSJdfQ
          required: false
        - in: query
          name: filters
          schema:
            type: string
            default: ''
          description: |-
            Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)

            Filtering is supported for the following fields and operators:

            **id**: *eq, in*

            **name**: *eq, in, sw, co*

            **attribute**: *eq, sw, co*

            **value**: *eq, sw, co*

            **created**: *gt, lt, ge, le*

            **modified**: *gt, lt, ge, le*

            **privilegeLevel.effective**: *eq, in*
          example: privilegeLevel.effective eq "HIGH"
          required: false
        - in: query
          name: sorters
          schema:
            type: string
            format: comma-separated
            default: created
          description: |-
            Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)

            Sorting is supported for the following fields: **id, name, attribute, value, created, modified, privilegeLevel.effective**

            The default sort is **created**. **id** is always added as the final sort field so that cursor pagination is stable.
          example: '-privilegeLevel.effective,name'
          required: false
        - in: query
          name: for-segment-ids
          schema:
            type: string
            format: comma-separated
            default: ''
          description: If present and not empty, filters entitlements to those assigned to the segment(s) with the specified IDs. Can't be used with *segmented-for-identity*.
          example: 0b5c9f25-83c6-4762-9073-e38f7bb2ae26,2e8d8180-24bc-4d21-91c6-7affdb473b0d
          required: false
        - in: query
          name: segmented-for-identity
          schema:
            type: string
            default: ''
          description: If present, filters entitlements to those in the segments visible to the specified identity. The value must be the calling identity's ID or the special value **me**. Can't be used with *for-segment-ids*.
          example: me
          required: false
        - in: query
          name: include-unsegmented
          schema:
            type: boolean
            default: true
          description: Whether the response list should contain unsegmented entitlements. If *for-segment-ids* is absent or empty, specifying *include-unsegmented* as false results in an error.
          example: false
          required: false
      responses:
        '200':
          description: List of entitlements.
          headers:
            x-total-count:
              description: The total result count (returned only if the *count* parameter is specified as *true*).
              schema:
                type: integer
                format: int32
              example: 12
            x-next-cursor:
              description: Opaque cursor for the next page of results. Returned only when more results are available. Pass it in the *cursor* query parameter to get the next page.
              schema:
                type: string
              example: eyJzb3J0IjpbImNyZWF0ZWQiLCJpZCJdLCJzZWFyY2hBZnRlciI6WyIxNjAyMTgyMDMyMDI5IiwiMmM5MSJdfQ
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
