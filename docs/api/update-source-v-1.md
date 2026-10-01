## OpenAPI

```yaml PATCH /sources/v1/{id}
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
  /sources/v1/{id}:
    patch:
      description: |
        Use this API to partially update a source in Identity Security Cloud (ISC), using a list of patch operations according to the
        [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.

        These fields are immutable, so they cannot be changed:

        * id
        * type
        * authoritative
        * created
        * modified
        * connector
        * connectorClass
        * passwordPolicies

        Attempts to modify these fields will result in a 400 error.
      operationId: updateSourceV1
      security:
        - userAuth:
            - idn:sources:manage
        - applicationAuth:
            - idn:sources:manage
      parameters:
        - in: path
          name: id
          schema:
            type: string
          required: true
          x-sailpoint-resource-operation-id: listSourcesV1
          description: Source ID.
          example: 2c9180835d191a86015d28455b4a2329
      requestBody:
        required: true
        description: A list of account update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. Any password changes are submitted as plain-text and encrypted upon receipt in Identity Security Cloud (ISC).
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
            examples:
              Edit the source description:
                description: This example shows how to edit a source description.
                value:
                  - op: replace
                    path: /description
                    value: new description
              Edit the source cluster:
                description: This example shows how to edit a source cluster by ID.
                value:
                  - op: replace
                    path: /cluster/id
                    value: 2c918087813a902001813f3f85736b45
              Edit source features:
                description: This example illustrates how you can update source supported features.
                value:
                  - op: replace
                    path: /features
                    value:
                      - PASSWORD
                      - PROVISIONING
                      - ENABLE
                      - AUTHENTICATE
              Change a source description and cluster in one call:
                description: This example shows how multiple fields may be updated with a single PATCH call.
                value:
                  - op: replace
                    path: /description
                    value: new description
                  - op: replace
                    path: /cluster/id
                    value: 2c918087813a902001813f3f85736b45
              Add a filter string to the connector:
                description: This example shows how you can add a filter to incoming accounts during the account aggregation process. In the example, any account that does not have an "m" or "d" in the ID will be aggregated.
                value:
                  - op: add
                    path: /connectorAttributes/filterString
                    value: '!( id.contains( "m" ) ) || !( id.contains( "d" ) )'
              Update connector attribute for specific operation type:
                description: This example shows how you can update the 3rd object in the connection parameter's `operationType`. This changes it from a standard group aggregation to a group aggregation on the "test" entitlement type.
                value:
                  - op: replace
                    path: /connectorAttributes/connectionParameters/2/operationType
                    value: Group Aggregation-test
              Enable notifications for new account provisioning on a source:
                description: This example shows how you can configure and enable email notifications that will send when new accounts are provisioned on a source.
                value:
                  - op: replace
                    path: /connectorAttributes/accountCreateNotification
                    value:
                      notifyList:
                        - Distribution.list@demo.com
                      notifyAccountOwner: true
                      enabled: true
                      notifyAccountOwnerAltEmail: false
      responses:
        '200':
          description: Updated Source object. Any passwords will only show the the encrypted cipher-text so that they aren't decryptable in Identity Security Cloud (ISC) cloud-based services, per ISC security design.
          content:
            application/json:
              schema:
                type: object
                title: Source
                properties:
                  id:
                    type: string
                    readOnly: true
                    description: Source ID.
                    example: 2c91808568c529c60168cca6f90c1324
                  name:
                    type: string
                    description: Source's human-readable name.
                    example: My Source
                  description:
                    type: string
                    description: Source's human-readable description.
                    example: This is the corporate directory.
                  owner:
                    description: Reference to identity object who owns the source.
                    type: object
                    nullable: true
                    properties:
                      type:
                        description: Type of object being referenced.
                        type: string
                        enum:
                          - IDENTITY
                        example: IDENTITY
                      id:
                        type: string
                        description: Owner identity's ID.
                        example: 2c91808568c529c60168cca6f90c1313
                      name:
                        type: string
                        description: Owner identity's human-readable display name.
                        example: MyName
                  cluster:
                    description: Reference to the source's associated cluster.
                    type: object
                    nullable: true
                    required:
                      - name
                      - id
                      - type
                    properties:
                      type:
                        description: Type of object being referenced.
                        type: string
                        enum:
                          - CLUSTER
                        example: CLUSTER
                      id:
                        type: string
                        description: Cluster ID.
                        example: 2c9180866166b5b0016167c32ef31a66
                      name:
                        type: string
                        description: Cluster's human-readable display name.
                        example: Corporate Cluster
                  accountCorrelationConfig:
                    description: Reference to account correlation config object.
                    type: object
                    nullable: true
                    properties:
                      type:
                        description: Type of object being referenced.
                        type: string
                        enum:
                          - ACCOUNT_CORRELATION_CONFIG
                        example: ACCOUNT_CORRELATION_CONFIG
                      id:
                        type: string
                        description: Account correlation config ID.
                        example: 2c9180855d191c59015d28583727245a
                      name:
                        type: string
                        description: Account correlation config's human-readable display name.
                        example: Directory [source-62867] Account Correlation
                  accountCorrelationRule:
                    description: Reference to a rule that can do COMPLEX correlation. Only use this rule when you can't use accountCorrelationConfig.
                    type: object
                    nullable: true
                    properties:
                      type:
                        description: Type of object being referenced.
                        type: string
                        enum:
                          - RULE
                        example: RULE
                      id:
                        type: string
                        description: Rule ID.
                        example: 2c918085708c274401708c2a8a760001
                      name:
                        type: string
                        description: Rule's human-readable display name.
                        example: Example Rule
                  managerCorrelationMapping:
                    allOf:
                      - type: object
                        title: Manager Correlation Mapping
                        properties:
                          accountAttributeName:
                            type: string
                            description: Name of the attribute to use for manager correlation. The value found on the account attribute will be used to lookup the manager's identity.
                            example: manager
                          identityAttributeName:
                            type: string
                            description: Name of the identity attribute to search when trying to find a manager using the value from the accountAttribute.
                            example: manager
                      - nullable: true
                        description: |
                          Filter object used during manager correlation to match incoming manager values to an existing manager's
                          account/identity.
                  managerCorrelationRule:
                    description: Reference to the ManagerCorrelationRule. Only use this rule when a simple filter isn't sufficient.
                    type: object
                    nullable: true
                    properties:
                      type:
                        description: Type of object being referenced.
                        type: string
                        enum:
                          - RULE
                        example: RULE
                      id:
                        type: string
                        description: Rule ID.
                        example: 2c918085708c274401708c2a8a760001
                      name:
                        type: string
                        description: Rule's human-readable display name.
                        example: Example Rule
                  beforeProvisioningRule:
                    description: 'Rule that runs on the CCG and allows for customization of provisioning plans before the API calls the connector. '
                    type: object
                    nullable: true
                    properties:
                      type:
                        description: Type of object being referenced.
                        type: string
                        enum:
                          - RULE
                        example: RULE
                      id:
                        type: string
                        description: Rule ID.
                        example: 2c918085708c274401708c2a8a760001
                      name:
                        type: string
                        description: Rule's human-readable display name.
                        example: Example Rule
                  schemas:
                    type: array
                    items:
                      type: object
                      properties:
                        type:
                          description: Type of object being referenced.
                          type: string
                          enum:
                            - CONNECTOR_SCHEMA
                          example: CONNECTOR_SCHEMA
                        id:
                          type: string
                          description: Schema ID.
                          example: 2c91808568c529c60168cca6f90c1777
                        name:
                          type: string
                          description: Schema's human-readable display name.
                          example: MySchema
                    description: List of references to schema objects.
                    example:
                      - type: CONNECTOR_SCHEMA
                        id: 2c9180835d191a86015d28455b4b232a
                        name: account
                      - type: CONNECTOR_SCHEMA
                        id: 2c9180835d191a86015d28455b4b232b
                        name: group
                  passwordPolicies:
                    type: array
                    nullable: true
                    items:
                      type: object
                      properties:
                        type:
                          description: Type of object being referenced.
                          type: string
                          enum:
                            - PASSWORD_POLICY
                          example: PASSWORD_POLICY
                        id:
                          type: string
                          description: Policy ID.
                          example: 2c91808568c529c60168cca6f90c1777
                        name:
                          type: string
                          description: Policy's human-readable display name.
                          example: My Password Policy
                    description: List of references to the associated PasswordPolicy objects.
                    example:
                      - type: PASSWORD_POLICY
                        id: 2c9180855d191c59015d291ceb053980
                        name: Corporate Password Policy
                      - type: PASSWORD_POLICY
                        id: 2c9180855d191c59015d291ceb057777
                        name: Vendor Password Policy
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
                  type:
                    type: string
                    description: 'Specifies the type of system being managed e.g. Active Directory, Workday, etc.. If you are creating a delimited file source, you must set the `provisionasCsv` query parameter to `true`. '
                    example: OpenLDAP - Direct
                  connector:
                    type: string
                    description: Connector script name.
                    example: active-directory
                  connectorClass:
                    type: string
                    description: Fully qualified name of the Java class that implements the connector interface.
                    example: sailpoint.connector.LDAPConnector
                  connectorAttributes:
                    type: object
                    description: Connector specific configuration. This configuration will differ from type to type.
                    example:
                      healthCheckTimeout: 30
                      authSearchAttributes:
                        - cn
                        - uid
                        - mail
                  deleteThreshold:
                    type: integer
                    format: int32
                    description: Number from 0 to 100 that specifies when to skip the delete phase.
                    example: 10
                  authoritative:
                    type: boolean
                    description: When this is true, it indicates that the source is referenced by an identity profile.
                    default: false
                    example: false
                  managementWorkgroup:
                    description: Reference to management workgroup for the source.
                    type: object
                    nullable: true
                    properties:
                      type:
                        description: Type of object being referenced.
                        type: string
                        enum:
                          - GOVERNANCE_GROUP
                        example: GOVERNANCE_GROUP
                      id:
                        type: string
                        description: Management workgroup ID.
                        example: 2c91808568c529c60168cca6f90c2222
                      name:
                        type: string
                        description: Management workgroup's human-readable display name.
                        example: My Management Workgroup
                  healthy:
                    type: boolean
                    description: When this is true, it indicates that the source is healthy.
                    default: false
                    example: true
                  status:
                    type: string
                    enum:
                      - SOURCE_STATE_ERROR_ACCOUNT_FILE_IMPORT
                      - SOURCE_STATE_ERROR_CLUSTER
                      - SOURCE_STATE_ERROR_SOURCE
                      - SOURCE_STATE_ERROR_VA
                      - SOURCE_STATE_FAILURE_CLUSTER
                      - SOURCE_STATE_FAILURE_SOURCE
                      - SOURCE_STATE_HEALTHY
                      - SOURCE_STATE_UNCHECKED_CLUSTER
                      - SOURCE_STATE_UNCHECKED_CLUSTER_NO_SOURCES
                      - SOURCE_STATE_UNCHECKED_SOURCE
                      - SOURCE_STATE_UNCHECKED_SOURCE_NO_ACCOUNTS
                    description: 'Status identifier that gives specific information about why a source is or isn''t healthy. '
                    example: SOURCE_STATE_HEALTHY
                  since:
                    type: string
                    description: Timestamp that shows when a source health check was last performed.
                    example: '2021-09-28T15:48:29.3801666300Z'
                  connectorId:
                    type: string
                    description: Connector ID
                    example: active-directory
                  connectorName:
                    type: string
                    description: Name of the connector that was chosen during source creation.
                    example: Active Directory
                  connectionType:
                    type: string
                    description: Type of connection (direct or file).
                    example: file
                  connectorImplementationId:
                    type: string
                    description: Connector implementation ID.
                    example: delimited-file
                  created:
                    type: string
                    description: Date-time when the source was created
                    format: date-time
                    example: '2022-02-08T14:50:03.827Z'
                  modified:
                    type: string
                    description: Date-time when the source was last modified.
                    format: date-time
                    example: '2024-01-23T18:08:50.897Z'
                  credentialProviderEnabled:
                    type: boolean
                    description: If this is true, it enables a credential provider for the source. If credentialProvider is turned on,  then the source can use credential provider(s) to fetch credentials.
                    default: false
                    example: false
                  category:
                    type: string
                    nullable: true
                    default: null
                    description: Source category (e.g. null, CredentialProvider).
                    example: CredentialProvider
                required:
                  - name
                  - owner
                  - connector
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
