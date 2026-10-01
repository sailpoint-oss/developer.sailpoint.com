## OpenAPI

```yaml POST /sources/v2/{sourceId}/provisioning-policies
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
  /sources/v2/{sourceId}/provisioning-policies:
    post:
      description: |-
        This API generates a create policy/template based on field value transforms. This API is intended for use when setting up JDBC Provisioning type sources, but it will also work on other source types.
        Transforms can be used in the provisioning policy to create a new attribute that you only need during provisioning.
        The V2 API allows you to use a unique identifier (id) for each provisioning policy instead of usageType. This enables read, update, and delete operations on policies using their id.
        Note: The subtypeId field is required if usageType is CREATE_MACHINE_ACCOUNT.
        Refer to [Transforms in Provisioning Policies](https://developer.sailpoint.com/docs/extensibility/transforms/guides/transforms-in-provisioning-policies) for more information.
      operationId: createProvisioningPolicyV2
      security:
        - userAuth:
            - idn:provisioning-policy-source-admin-operations:manage
            - idn:provisioning-policy:manage
        - applicationAuth:
            - idn:provisioning-policy-source-admin-operations:manage
            - idn:provisioning-policy:manage
      parameters:
        - in: path
          name: sourceId
          required: true
          x-sailpoint-resource-operation-id: listSourcesV1
          schema:
            type: string
          description: The Source id
          example: 2c9180835d191a86015d28455b4a2329
        - in: query
          name: useDefaultFields
          schema:
            type: boolean
            default: false
          required: false
          description: If passed as true, then it uses default fields from the connector template.
          example: false
        - name: X-SailPoint-Experimental
          in: header
          description: Use this header to enable this experimental API.
          example: true
          schema:
            type: string
            default: true
          required: true
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              title: Provisioning Policy Dto V2
              required:
                - name
              properties:
                id:
                  type: string
                  description: System-generated unique ID of the provisioning policy.
                  example: d7ae9ea3-507f-4d00-9d4f-b4464b344b88
                name:
                  nullable: true
                  type: string
                  description: the provisioning policy name
                  example: example provisioning policy for inactive identities
                subtypeId:
                  nullable: true
                  type: string
                  description: Subtype ID for which provisioning policy will be created when usageType is CREATE_MACHINE_ACCOUNT.
                  example: d7ae9ea3-507f-4d00-9d4f-b4464b344b88
                description:
                  type: string
                  description: the description of the provisioning policy
                  example: this provisioning policy creates access based on an identity going inactive
                usageType:
                  type: string
                  nullable: false
                  enum:
                    - CREATE
                    - UPDATE
                    - ENABLE
                    - DISABLE
                    - DELETE
                    - ASSIGN
                    - UNASSIGN
                    - CREATE_GROUP
                    - UPDATE_GROUP
                    - DELETE_GROUP
                    - REGISTER
                    - CREATE_IDENTITY
                    - UPDATE_IDENTITY
                    - EDIT_GROUP
                    - UNLOCK
                    - CHANGE_PASSWORD
                    - CREATE_MACHINE_ACCOUNT
                  example: CREATE
                  description: |-
                    The type of provisioning policy usage. 
                    In IdentityNow, a source can support various provisioning operations. For example, when a joiner is added to a source, this may trigger both CREATE and UPDATE provisioning operations.  Each usage type is considered a provisioning policy.  A source can have any number of these provisioning policies defined. 
                    These are the common usage types: 
                    CREATE - This usage type relates to 'Create Account Profile', the provisioning template for the account to be created. For example, this would be used for a joiner on a source.  
                    UPDATE - This usage type relates to 'Update Account Profile', the provisioning template for the 'Update' connector operations. For example, this would be used for an attribute sync on a source.
                    ENABLE - This usage type relates to 'Enable Account Profile', the provisioning template for the account to be enabled. For example, this could be used for a joiner on a source once the joiner's account is created. 
                    DISABLE - This usage type relates to 'Disable Account Profile', the provisioning template for the account to be disabled. For example, this could be used when a leaver is removed temporarily from a source.
                    CREATE_MACHINE_ACCOUNT - This usage type can be used to create the provisioning template for a source subtype which will be used in creating a machine account.
                    You can use these usage types for all your provisioning policy needs. 
                  title: usagetypev2
                fields:
                  type: array
                  items:
                    type: object
                    title: Field Details Dto V2
                    properties:
                      name:
                        type: string
                        description: The name of the attribute.
                        example: userName
                      transform:
                        type: object
                        description: The transform to apply to the field
                        example:
                          type: rule
                          attributes:
                            name: Create Unique LDAP Attribute
                        default: {}
                      attributes:
                        type: object
                        description: Attributes required for the transform
                        example:
                          template: firstname.lastname.uniqueCounter
                          cloudMaxUniqueChecks: '50'
                          cloudMaxSize: '20'
                          cloudRequired: 'true'
                      isRequired:
                        type: boolean
                        readOnly: true
                        description: Flag indicating whether or not the attribute is required.
                        default: false
                        example: false
                      type:
                        type: string
                        description: |
                          The type of the attribute.

                          string: For text-based data.

                          int: For whole numbers.

                          long: For larger whole numbers.

                          date: For date and time values.

                          boolean: For true/false values.

                          secret: For sensitive data like passwords, which will be masked and encrypted.
                        enum:
                          - string
                          - int
                          - long
                          - date
                          - boolean
                          - secret
                        example: string
                      isMultiValued:
                        type: boolean
                        description: Flag indicating whether or not the attribute is multi-valued.
                        default: false
                        example: false
            examples:
              Create Account Provisioning Policy:
                value:
                  name: Account
                  description: Account Provisioning Policy
                  usageType: CREATE
                  fields:
                    - name: displayName
                      transform:
                        type: identityAttribute
                        attributes:
                          name: displayName
                      attributes: {}
                      isRequired: false
                      type: string
                      isMultiValued: false
                    - name: distinguishedName
                      transform:
                        type: usernameGenerator
                        attributes:
                          sourceCheck: true
                          patterns:
                            - CN=$fi $ln,OU=zzUsers,OU=Demo,DC=seri,DC=sailpointdemo,DC=com
                            - CN=$fti $ln,OU=zzUsers,OU=Demo,DC=seri,DC=sailpointdemo,DC=com
                            - CN=$fn $ln,OU=zzUsers,OU=Demo,DC=seri,DC=sailpointdemo,DC=com
                            - CN=$fn$ln<uniqueCounter>,OU=zzUsers,OU=Demo,DC=seri,DC=sailpointdemo,DC=com
                          fn:
                            type: identityAttribute
                            attributes:
                              name: firstname
                          ln:
                            type: identityAttribute
                            attributes:
                              name: lastname
                          fi:
                            type: substring
                            attributes:
                              input:
                                type: identityAttribute
                                attributes:
                                  name: firstname
                              begin: 0
                              end: 1
                          fti:
                            type: substring
                            attributes:
                              input:
                                type: identityAttribute
                                attributes:
                                  name: firstname
                              begin: 0
                              end: 2
                      attributes:
                        cloudMaxUniqueChecks: '5'
                        cloudMaxSize: '100'
                        cloudRequired: 'true'
                      isRequired: false
                      type: ''
                      isMultiValued: false
                    - name: description
                      transform:
                        type: static
                        attributes:
                          value: ''
                      attributes: {}
                      isRequired: false
                      type: string
                      isMultiValued: false
      responses:
        '201':
          description: Created ProvisioningPolicyDtoV2 object
          content:
            application/json:
              schema:
                type: object
                title: Provisioning Policy Dto V2
                required:
                  - name
                properties:
                  id:
                    type: string
                    description: System-generated unique ID of the provisioning policy.
                    example: d7ae9ea3-507f-4d00-9d4f-b4464b344b88
                  name:
                    nullable: true
                    type: string
                    description: the provisioning policy name
                    example: example provisioning policy for inactive identities
                  subtypeId:
                    nullable: true
                    type: string
                    description: Subtype ID for which provisioning policy will be created when usageType is CREATE_MACHINE_ACCOUNT.
                    example: d7ae9ea3-507f-4d00-9d4f-b4464b344b88
                  description:
                    type: string
                    description: the description of the provisioning policy
                    example: this provisioning policy creates access based on an identity going inactive
                  usageType:
                    type: string
                    nullable: false
                    enum:
                      - CREATE
                      - UPDATE
                      - ENABLE
                      - DISABLE
                      - DELETE
                      - ASSIGN
                      - UNASSIGN
                      - CREATE_GROUP
                      - UPDATE_GROUP
                      - DELETE_GROUP
                      - REGISTER
                      - CREATE_IDENTITY
                      - UPDATE_IDENTITY
                      - EDIT_GROUP
                      - UNLOCK
                      - CHANGE_PASSWORD
                      - CREATE_MACHINE_ACCOUNT
                    example: CREATE
                    description: |-
                      The type of provisioning policy usage. 
                      In IdentityNow, a source can support various provisioning operations. For example, when a joiner is added to a source, this may trigger both CREATE and UPDATE provisioning operations.  Each usage type is considered a provisioning policy.  A source can have any number of these provisioning policies defined. 
                      These are the common usage types: 
                      CREATE - This usage type relates to 'Create Account Profile', the provisioning template for the account to be created. For example, this would be used for a joiner on a source.  
                      UPDATE - This usage type relates to 'Update Account Profile', the provisioning template for the 'Update' connector operations. For example, this would be used for an attribute sync on a source.
                      ENABLE - This usage type relates to 'Enable Account Profile', the provisioning template for the account to be enabled. For example, this could be used for a joiner on a source once the joiner's account is created. 
                      DISABLE - This usage type relates to 'Disable Account Profile', the provisioning template for the account to be disabled. For example, this could be used when a leaver is removed temporarily from a source.
                      CREATE_MACHINE_ACCOUNT - This usage type can be used to create the provisioning template for a source subtype which will be used in creating a machine account.
                      You can use these usage types for all your provisioning policy needs. 
                    title: usagetypev2
                  fields:
                    type: array
                    items:
                      type: object
                      title: Field Details Dto V2
                      properties:
                        name:
                          type: string
                          description: The name of the attribute.
                          example: userName
                        transform:
                          type: object
                          description: The transform to apply to the field
                          example:
                            type: rule
                            attributes:
                              name: Create Unique LDAP Attribute
                          default: {}
                        attributes:
                          type: object
                          description: Attributes required for the transform
                          example:
                            template: firstname.lastname.uniqueCounter
                            cloudMaxUniqueChecks: '50'
                            cloudMaxSize: '20'
                            cloudRequired: 'true'
                        isRequired:
                          type: boolean
                          readOnly: true
                          description: Flag indicating whether or not the attribute is required.
                          default: false
                          example: false
                        type:
                          type: string
                          description: |
                            The type of the attribute.

                            string: For text-based data.

                            int: For whole numbers.

                            long: For larger whole numbers.

                            date: For date and time values.

                            boolean: For true/false values.

                            secret: For sensitive data like passwords, which will be masked and encrypted.
                          enum:
                            - string
                            - int
                            - long
                            - date
                            - boolean
                            - secret
                          example: string
                        isMultiValued:
                          type: boolean
                          description: Flag indicating whether or not the attribute is multi-valued.
                          default: false
                          example: false
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
