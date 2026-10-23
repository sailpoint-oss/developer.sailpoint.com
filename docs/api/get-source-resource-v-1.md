## OpenAPI

```yaml GET /sources/v1/{sourceId}/resources/{resourceId}
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
  /sources/v1/{sourceId}/resources/{resourceId}:
    get:
      description: |
        Use this API to get a resource by id on the specified source in Identity Security Cloud (ISC).
        The response includes the full CIS schema for the resource.
      operationId: getSourceResourceV1
      security:
        - userAuth:
            - idn:sources:read
            - idn:source-schema:read
            - idn:sources:manage
            - idn:source-schema:manage
        - applicationAuth:
            - idn:sources:read
            - idn:source-schema:read
            - idn:sources:manage
            - idn:source-schema:manage
      parameters:
        - in: path
          name: sourceId
          required: true
          x-sailpoint-resource-operation-id: listSourcesV1
          schema:
            type: string
          description: Source ID.
          example: 2c9180835d191a86015d28455b4a2329
        - in: path
          name: resourceId
          required: true
          x-sailpoint-resource-operation-id: getSourceResourcesV1
          schema:
            type: string
          description: Resource ID.
          example: account
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
          description: The requested source resource was successfully retrieved.
          content:
            application/json:
              schema:
                type: object
                title: Source Dataset Resource
                description: Resource definition for a source. On create, `name`, `type`, `datasetId`, and `schema` are required. The `schema` must define at least one attribute plus `identityAttribute` and `displayAttribute`. The resource `id` is always server-generated from `name` (`customer:` plus a normalized form of `name`); any client-supplied `id` is ignored. After creation, schema attribute edits are made through the source schema APIs. `datasetId` associates the resource with a dataset and is recorded in the resource schema configuration.
                properties:
                  id:
                    type: string
                    readOnly: true
                    description: Resource identifier. Server-generated on create.
                    example: aws:iam-role
                  name:
                    type: string
                    description: Display name of the resource. Required on create.
                    example: Account
                  features:
                    type: array
                    description: Feature identifiers supported by this resource.
                    items:
                      type: string
                    example:
                      - Create
                      - Delete
                  type:
                    type: string
                    description: Resource type. Required on create.
                    example: std:resource
                  datasetId:
                    type: string
                    description: Dataset identifier to associate this resource with. Required on create.
                    example: cmdb-servicenow:applications
                  schema:
                    description: CIS schema for the resource. Required on create.
                    type: object
                    title: Schema
                    properties:
                      id:
                        type: string
                        description: The id of the Schema.
                        example: 2c9180835d191a86015d28455b4a2329
                      name:
                        type: string
                        description: The name of the Schema.
                        example: account
                      nativeObjectType:
                        type: string
                        description: The name of the object type on the native system that the schema represents.
                        example: User
                      identityAttribute:
                        type: string
                        description: The name of the attribute used to calculate the unique identifier for an object in the schema.
                        example: sAMAccountName
                      displayAttribute:
                        type: string
                        description: The name of the attribute used to calculate the display value for an object in the schema.
                        example: distinguishedName
                      hierarchyAttribute:
                        type: string
                        nullable: true
                        description: The name of the attribute whose values represent other objects in a hierarchy. Only relevant to group schemas.
                        example: memberOf
                      includePermissions:
                        type: boolean
                        description: Flag indicating whether or not the include permissions with the object data when aggregating the schema.
                        default: false
                        example: false
                      features:
                        type: array
                        items:
                          type: string
                          enum:
                            - AUTHENTICATE
                            - COMPOSITE
                            - DIRECT_PERMISSIONS
                            - DISCOVER_SCHEMA
                            - ENABLE
                            - MANAGER_LOOKUP
                            - NO_RANDOM_ACCESS
                            - PROXY
                            - SEARCH
                            - TEMPLATE
                            - UNLOCK
                            - UNSTRUCTURED_TARGETS
                            - SHAREPOINT_TARGET
                            - PROVISIONING
                            - GROUP_PROVISIONING
                            - SYNC_PROVISIONING
                            - PASSWORD
                            - CURRENT_PASSWORD
                            - ACCOUNT_ONLY_REQUEST
                            - ADDITIONAL_ACCOUNT_REQUEST
                            - NO_AGGREGATION
                            - GROUPS_HAVE_MEMBERS
                            - NO_PERMISSIONS_PROVISIONING
                            - NO_GROUP_PERMISSIONS_PROVISIONING
                            - NO_UNSTRUCTURED_TARGETS_PROVISIONING
                            - NO_DIRECT_PERMISSIONS_PROVISIONING
                            - PREFER_UUID
                            - ARM_SECURITY_EXTRACT
                            - ARM_UTILIZATION_EXTRACT
                            - ARM_CHANGELOG_EXTRACT
                            - USES_UUID
                            - APPLICATION_DISCOVERY
                            - DELETE
                          example: AUTHENTICATE
                        description: |-
                          Optional features that can be supported by a source. Modifying the features array may cause source configuration errors that are unsupportable. It is recommended to not modify this array for SailPoint supported connectors.
                          * AUTHENTICATE: The source supports pass-through authentication.
                          * COMPOSITE: The source supports composite source creation.
                          * DIRECT_PERMISSIONS: The source supports returning DirectPermissions.
                          * DISCOVER_SCHEMA: The source supports discovering schemas for users and groups.
                          * ENABLE The source supports reading if an account is enabled or disabled.
                          * MANAGER_LOOKUP: The source supports looking up managers as they are encountered in a feed. This is the opposite of NO_RANDOM_ACCESS.
                          * NO_RANDOM_ACCESS: The source does not support random access and the getObject() methods should not be called and expected to perform.
                          * PROXY: The source can serve as a proxy for another source. When an source has a proxy, all connector calls made with that source are redirected through the connector for the proxy source.
                          * SEARCH
                          * TEMPLATE
                          * UNLOCK: The source supports reading if an account is locked or unlocked.
                          * UNSTRUCTURED_TARGETS: The source supports returning unstructured Targets.
                          * SHAREPOINT_TARGET: The source supports returning unstructured Target data for SharePoint. It will be typically used by AD, LDAP sources.
                          * PROVISIONING: The source can both read and write accounts. Having this feature implies that the provision() method is implemented. It also means that direct and target permissions can also be provisioned if they can be returned by aggregation.
                          * GROUP_PROVISIONING: The source can both read and write groups. Having this feature implies that the provision() method is implemented.
                          * SYNC_PROVISIONING: The source can provision accounts synchronously.
                          * PASSWORD: The source can provision password changes. Since sources can never read passwords, this is should only be used in conjunction with the PROVISIONING feature.
                          * CURRENT_PASSWORD: Some source types support verification of the current password
                          * ACCOUNT_ONLY_REQUEST: The source supports requesting accounts without entitlements.
                          * ADDITIONAL_ACCOUNT_REQUEST: The source supports requesting additional accounts.
                          * NO_AGGREGATION: A source that does not support aggregation.
                          * GROUPS_HAVE_MEMBERS: The source models group memberships with a member attribute on the group object rather than a groups attribute on the account object. This effects the implementation of delta account aggregation.
                          * NO_PERMISSIONS_PROVISIONING: Indicates that the connector cannot provision direct or target permissions for accounts. When DIRECT_PERMISSIONS and PROVISIONING features are present, it is assumed that the connector can also provision direct permissions. This feature disables that assumption and causes permission request to be converted to work items for accounts.
                          * NO_GROUP_PERMISSIONS_PROVISIONING: Indicates that the connector cannot provision direct or target permissions for groups. When DIRECT_PERMISSIONS and PROVISIONING features are present, it is assumed that the connector can also provision direct permissions. This feature disables that assumption and causes permission request to be converted to work items for groups.
                          * NO_UNSTRUCTURED_TARGETS_PROVISIONING: This string will be replaced by NO_GROUP_PERMISSIONS_PROVISIONING and NO_PERMISSIONS_PROVISIONING.
                          * NO_DIRECT_PERMISSIONS_PROVISIONING: This string will be replaced by NO_GROUP_PERMISSIONS_PROVISIONING and NO_PERMISSIONS_PROVISIONING.
                          * USES_UUID: Connectivity 2.0 flag used to indicate that the connector supports a compound naming structure.
                          * PREFER_UUID: Used in ISC Provisioning AND Aggregation to decide if it should prefer account.uuid to account.nativeIdentity when data is read in through aggregation OR pushed out through provisioning.
                          * ARM_SECURITY_EXTRACT: Indicates the application supports Security extracts for ARM
                          * ARM_UTILIZATION_EXTRACT: Indicates the application supports Utilization extracts for ARM
                          * ARM_CHANGELOG_EXTRACT: Indicates the application supports Change-log extracts for ARM
                        example:
                          - PROVISIONING
                          - NO_PERMISSIONS_PROVISIONING
                          - GROUPS_HAVE_MEMBERS
                        title: sourcefeature
                      configuration:
                        type: object
                        description: Holds any extra configuration data that the schema may require.
                        example:
                          groupMemberAttribute: member
                      attributes:
                        type: array
                        description: The attribute definitions which form the schema.
                        items:
                          type: object
                          title: Attribute Definition
                          properties:
                            name:
                              type: string
                              description: The name of the attribute.
                              example: sAMAccountName
                            nativeName:
                              type: string
                              nullable: true
                              description: Attribute name in the native system.
                              example: sAMAccountName
                            type:
                              description: The type of the attribute.
                              example: STRING
                              type: string
                              enum:
                                - STRING
                                - LONG
                                - INT
                                - BOOLEAN
                                - DATE
                              title: attributedefinitiontype
                            schema:
                              description: A reference to the schema on the source to the attribute values map to.
                              type: object
                              nullable: true
                              properties:
                                type:
                                  description: The type of object being referenced
                                  type: string
                                  enum:
                                    - CONNECTOR_SCHEMA
                                  example: CONNECTOR_SCHEMA
                                id:
                                  type: string
                                  description: The object ID this reference applies to.
                                  example: 2c91808568c529c60168cca6f90c1313
                                name:
                                  type: string
                                  description: The human-readable display name of the object.
                                  example: group
                            description:
                              type: string
                              description: A human-readable description of the attribute.
                              example: SAM Account Name
                            isMulti:
                              type: boolean
                              description: Flag indicating whether or not the attribute is multi-valued.
                              example: false
                              default: false
                            isEntitlement:
                              type: boolean
                              description: Flag indicating whether or not the attribute is an entitlement.
                              example: false
                              default: false
                            isGroup:
                              type: boolean
                              description: |
                                Flag indicating whether or not the attribute represents a group.
                                This can only be `true` if `isEntitlement` is also `true` **and** there is a schema defined for the attribute..
                              example: false
                              default: false
                        example:
                          - name: sAMAccountName
                            type: STRING
                            isMultiValued: false
                            isEntitlement: false
                            isGroup: false
                          - name: memberOf
                            type: STRING
                            schema:
                              type: CONNECTOR_SCHEMA
                              id: 2c9180887671ff8c01767b4671fc7d60
                              name: group
                            description: Group membership
                            isMultiValued: true
                            isEntitlement: true
                            isGroup: true
                      created:
                        type: string
                        description: The date the Schema was created.
                        format: date-time
                        example: '2019-12-24T22:32:58.104Z'
                      modified:
                        type: string
                        nullable: true
                        description: The date the Schema was last modified.
                        format: date-time
                        example: '2019-12-31T20:22:28.104Z'
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
