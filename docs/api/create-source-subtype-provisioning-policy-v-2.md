## OpenAPI

```yaml POST /source-subtypes/v2/{id}/provisioning-policy
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
  /source-subtypes/v2/{id}/provisioning-policy:
    post:
      description: |
        Creates the machine account creation provisioning policy for a subtype. A subtype has at most
        one policy; the request is rejected if one already exists.

        When `useDefaultFields` is `true` and the body has no `fields`, a `CONNECTOR` subtype's policy
        is created with the connector's default account-creation fields. `SOURCE` subtypes ignore
        `useDefaultFields`.

        SOURCE-tier write requires `idn:source-subtypes:update`. CONNECTOR-tier write requires
        `idn:connector-subtypes:update`. A missing subtype or a missing right returns **404**.

        When the experimental header is missing, or when the tiered subtype configuration is not enabled
        for the tenant, the endpoint returns **404**.
      operationId: createSourceSubtypeProvisioningPolicyV2
      security:
        - userAuth:
            - idn:source-subtypes:update
            - idn:connector-subtypes:update
        - applicationAuth:
            - idn:source-subtypes:update
            - idn:connector-subtypes:update
      parameters:
        - in: path
          name: id
          schema:
            type: string
            format: uuid
          required: true
          x-sailpoint-resource-operation-id: listSourceSubtypesV2
          description: The ID of the subtype.
          example: 43bdd144-4b17-4fce-a744-17c7fd3e717b
        - in: query
          name: useDefaultFields
          required: false
          schema:
            type: boolean
            default: true
          description: When `true` and the request body has no `fields`, a `CONNECTOR` subtype's policy is created with the connector's default account-creation fields. Ignored for `SOURCE` subtypes.
          example: true
        - name: X-SailPoint-Experimental
          in: header
          description: Use this header to enable this experimental API.
          example: 'true'
          schema:
            type: string
            default: 'true'
          required: true
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              title: Subtype Provisioning Policy
              description: CREATE_MACHINE_ACCOUNT provisioning policy stored on a source subtype. Field-compatible with source provisioning-policy documents.
              properties:
                id:
                  type: string
                  format: uuid
                  default: ''
                  description: Unique identifier of the stored provisioning policy.
                  example: 54f626b4-c9d8-4f7e-b768-046c20583abb
                subtypeId:
                  type: string
                  format: uuid
                  default: ''
                  description: Identifier of the subtype that owns this policy.
                  example: 43bdd144-4b17-4fce-a744-17c7fd3e717b
                name:
                  type: string
                  nullable: true
                  default: null
                  description: Name of the provisioning policy.
                  example: Create Machine Account
                description:
                  type: string
                  nullable: true
                  default: null
                  description: Description of the provisioning policy.
                  example: Fields used when creating a machine account for this subtype
                usageType:
                  type: string
                  default: ''
                  description: Usage type of the policy. This API stores only `CREATE_MACHINE_ACCOUNT`.
                  example: CREATE_MACHINE_ACCOUNT
                fields:
                  type: array
                  default: []
                  description: Fields in the provisioning policy. Field order is not semantically meaningful.
                  items:
                    type: object
                    title: Field Details Dto
                    properties:
                      name:
                        type: string
                        default: ''
                        description: The name of the attribute.
                        example: userName
                      transform:
                        type: object
                        description: The transform to apply to the field.
                        example:
                          type: rule
                          attributes:
                            name: Create Unique LDAP Attribute
                        default: {}
                      attributes:
                        type: object
                        default: {}
                        description: Attributes required for the transform.
                        example:
                          template: firstname.lastname.uniqueCounter
                          cloudMaxUniqueChecks: '50'
                          cloudMaxSize: '20'
                          cloudRequired: 'true'
                      isRequired:
                        type: boolean
                        description: Flag indicating whether or not the attribute is required.
                        default: false
                        example: false
                      type:
                        x-sailpoint-lint-ignore:
                          schema-property-names-must-not-be-type: The service returns this field as type. It is the provisioning attribute type, for example string.
                        type: string
                        default: string
                        description: The type of the attribute.
                        example: string
                      isMultiValued:
                        type: boolean
                        description: Flag indicating whether or not the attribute is multi-valued.
                        default: false
                        example: false
            examples:
              Policy:
                value:
                  name: Create Machine Account
                  description: Fields used when creating a machine account for this subtype
                  usageType: CREATE_MACHINE_ACCOUNT
                  fields:
                    - name: userName
                      transform:
                        type: static
                        attributes:
                          value: $displayName
                      attributes: {}
                      isRequired: true
                      type: string
                      isMultiValued: false
      responses:
        '201':
          description: Stored CREATE_MACHINE_ACCOUNT provisioning policy.
          headers:
            location:
              description: URL of the stored provisioning policy.
              schema:
                type: string
                format: uri
          content:
            application/json:
              schema:
                type: object
                title: Subtype Provisioning Policy
                description: CREATE_MACHINE_ACCOUNT provisioning policy stored on a source subtype. Field-compatible with source provisioning-policy documents.
                properties:
                  id:
                    type: string
                    format: uuid
                    default: ''
                    description: Unique identifier of the stored provisioning policy.
                    example: 54f626b4-c9d8-4f7e-b768-046c20583abb
                  subtypeId:
                    type: string
                    format: uuid
                    default: ''
                    description: Identifier of the subtype that owns this policy.
                    example: 43bdd144-4b17-4fce-a744-17c7fd3e717b
                  name:
                    type: string
                    nullable: true
                    default: null
                    description: Name of the provisioning policy.
                    example: Create Machine Account
                  description:
                    type: string
                    nullable: true
                    default: null
                    description: Description of the provisioning policy.
                    example: Fields used when creating a machine account for this subtype
                  usageType:
                    type: string
                    default: ''
                    description: Usage type of the policy. This API stores only `CREATE_MACHINE_ACCOUNT`.
                    example: CREATE_MACHINE_ACCOUNT
                  fields:
                    type: array
                    default: []
                    description: Fields in the provisioning policy. Field order is not semantically meaningful.
                    items:
                      type: object
                      title: Field Details Dto
                      properties:
                        name:
                          type: string
                          default: ''
                          description: The name of the attribute.
                          example: userName
                        transform:
                          type: object
                          description: The transform to apply to the field.
                          example:
                            type: rule
                            attributes:
                              name: Create Unique LDAP Attribute
                          default: {}
                        attributes:
                          type: object
                          default: {}
                          description: Attributes required for the transform.
                          example:
                            template: firstname.lastname.uniqueCounter
                            cloudMaxUniqueChecks: '50'
                            cloudMaxSize: '20'
                            cloudRequired: 'true'
                        isRequired:
                          type: boolean
                          description: Flag indicating whether or not the attribute is required.
                          default: false
                          example: false
                        type:
                          x-sailpoint-lint-ignore:
                            schema-property-names-must-not-be-type: The service returns this field as type. It is the provisioning attribute type, for example string.
                          type: string
                          default: string
                          description: The type of the attribute.
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
        '409':
          description: Conflict - a provisioning policy is already stored for the subtype.
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

        Personal access tokens are associated with a user in SailPoint Identity Security and relies on the user's [user level](https://documentation.sailpoint.com/saas/help/common/users/index.html) (ex. Admin, Helpdesk, etc.) to determine a base level of access.

        See [SailPoint Identity Security REST API Authentication](https://developer.sailpoint.com/docs/api/authentication/) for more information.
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

        Client credentials refers to tokens that are not associated with a user in SailPoint Identity Security.

        See [SailPoint Identity Security REST API Authentication](https://developer.sailpoint.com/docs/api/authentication/) for more information.
      flows:
        clientCredentials:
          tokenUrl: https://example-tenant.api.identitynow.com/oauth/token
          scopes:
            sp:scopes:default: default scope
            sp:scopes:all: access to all scopes
```
