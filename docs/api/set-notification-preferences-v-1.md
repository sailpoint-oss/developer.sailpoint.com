## OpenAPI

```yaml PUT /notification-preferences/v1/{key}
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
  /notification-preferences/v1/{key}:
    put:
      description: Overwrites the notification preferences for a specific notification key. Controls which mediums are enabled and optional CC/BCC email recipients. The `key` property in the request body is optional; if provided, it must match the key in the path or a 400 is returned. Each of `ccList` and `bccList` supports a maximum of five entries, and the same recipient cannot appear in both lists. CC/BCC configuration requires EMAIL to be enabled in `mediums` and is only allowed for templates which support it (i.e., templates which contain sensitive data like reset tokens do not allow for carbon copy emails to be configured).
      operationId: setNotificationPreferencesV1
      security:
        - userAuth:
            - idn:notification-preferences:create
      parameters:
        - in: path
          name: key
          schema:
            type: string
          required: true
          x-sailpoint-resource-operation-id: listNotificationPreferencesV1
          description: The notification key.
          example: approval_completed_notification
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              title: Preferences Dto
              description: Tenant notification preferences for a notification key, including preferred mediums and optional CC/BCC email recipients.
              properties:
                key:
                  type: string
                  description: The template notification key.
                  example: cloud_manual_work_item_summary
                mediums:
                  type: array
                  description: List of preferred notification mediums, i.e., the mediums (or method) for which notifications are enabled. An empty list means the notification is disabled for the tenant. More mediums may be added in the future.
                  items:
                    type: string
                    description: The notification medium (EMAIL, SLACK, TEAMS, or INBOX)
                    example: EMAIL
                    enum:
                      - EMAIL
                      - SLACK
                      - TEAMS
                      - INBOX
                    title: medium
                  example:
                    - EMAIL
                modified:
                  type: string
                  description: Modified date of preference.
                  format: date-time
                  readOnly: true
                  example: '2020-05-15T14:37:06.909Z'
                ccList:
                  type: array
                  maxItems: 5
                  description: Optional CC recipients for email notifications for this key. Requires EMAIL to be included in `mediums`. Maximum of five entries. The same recipient cannot appear in both `ccList` and `bccList`.
                  items:
                    type: object
                    title: CC/BCC Preference Entry
                    description: 'One CC or BCC routing entry. Dynamic recipient types are resolved at notification send time. Field applicability depends on type: IDENTITY and GOVERNANCE_GROUP require `id`; STATIC_EMAIL requires `email`; MANAGER_OF may optionally include `id` (manager of that identity, otherwise manager of the notification recipient); ORG_ADMINS does not use `id` or `email`.'
                    required:
                      - type
                    properties:
                      type:
                        type: string
                        title: CC/BCC Recipient Type
                        description: Recipient resolution type for a CC or BCC preference entry. Dynamic types are resolved at notification send time based on the triggering event's context.
                        example: IDENTITY
                        enum:
                          - IDENTITY
                          - MANAGER_OF
                          - GOVERNANCE_GROUP
                          - ORG_ADMINS
                          - STATIC_EMAIL
                      id:
                        type: string
                        nullable: true
                        description: Identity or governance group id when required by the recipient type. For MANAGER_OF, when provided this is the identity whose manager should receive the email.
                        example: 6b0b8e47cc1f4c3fa961a38fc718e989
                      email:
                        type: string
                        format: email
                        nullable: true
                        description: Static email address when type is STATIC_EMAIL.
                        example: cc-recipient@example.com
                  example:
                    - type: IDENTITY
                      id: 6b0b8e47cc1f4c3fa961a38fc718e989
                    - type: STATIC_EMAIL
                      email: cc-recipient@example.com
                bccList:
                  type: array
                  maxItems: 5
                  description: Optional BCC recipients for email notifications for this key. Requires EMAIL to be included in `mediums`. Maximum of five entries. The same recipient cannot appear in both `ccList` and `bccList`.
                  items:
                    type: object
                    title: CC/BCC Preference Entry
                    description: 'One CC or BCC routing entry. Dynamic recipient types are resolved at notification send time. Field applicability depends on type: IDENTITY and GOVERNANCE_GROUP require `id`; STATIC_EMAIL requires `email`; MANAGER_OF may optionally include `id` (manager of that identity, otherwise manager of the notification recipient); ORG_ADMINS does not use `id` or `email`.'
                    required:
                      - type
                    properties:
                      type:
                        type: string
                        title: CC/BCC Recipient Type
                        description: Recipient resolution type for a CC or BCC preference entry. Dynamic types are resolved at notification send time based on the triggering event's context.
                        example: IDENTITY
                        enum:
                          - IDENTITY
                          - MANAGER_OF
                          - GOVERNANCE_GROUP
                          - ORG_ADMINS
                          - STATIC_EMAIL
                      id:
                        type: string
                        nullable: true
                        description: Identity or governance group id when required by the recipient type. For MANAGER_OF, when provided this is the identity whose manager should receive the email.
                        example: 6b0b8e47cc1f4c3fa961a38fc718e989
                      email:
                        type: string
                        format: email
                        nullable: true
                        description: Static email address when type is STATIC_EMAIL.
                        example: cc-recipient@example.com
                  example:
                    - type: MANAGER_OF
                    - type: ORG_ADMINS
            example:
              key: approval_completed_notification
              mediums:
                - EMAIL
              ccList:
                - type: IDENTITY
                  id: 6b0b8e47cc1f4c3fa961a38fc718e989
                - type: STATIC_EMAIL
                  email: cc-recipient@example.com
              bccList:
                - type: MANAGER_OF
      responses:
        '200':
          description: Preferences updated successfully. An echo of the saved preferences is returned.
          content:
            application/json:
              schema:
                type: object
                title: Preferences Dto
                description: Tenant notification preferences for a notification key, including preferred mediums and optional CC/BCC email recipients.
                properties:
                  key:
                    type: string
                    description: The template notification key.
                    example: cloud_manual_work_item_summary
                  mediums:
                    type: array
                    description: List of preferred notification mediums, i.e., the mediums (or method) for which notifications are enabled. An empty list means the notification is disabled for the tenant. More mediums may be added in the future.
                    items:
                      type: string
                      description: The notification medium (EMAIL, SLACK, TEAMS, or INBOX)
                      example: EMAIL
                      enum:
                        - EMAIL
                        - SLACK
                        - TEAMS
                        - INBOX
                      title: medium
                    example:
                      - EMAIL
                  modified:
                    type: string
                    description: Modified date of preference.
                    format: date-time
                    readOnly: true
                    example: '2020-05-15T14:37:06.909Z'
                  ccList:
                    type: array
                    maxItems: 5
                    description: Optional CC recipients for email notifications for this key. Requires EMAIL to be included in `mediums`. Maximum of five entries. The same recipient cannot appear in both `ccList` and `bccList`.
                    items:
                      type: object
                      title: CC/BCC Preference Entry
                      description: 'One CC or BCC routing entry. Dynamic recipient types are resolved at notification send time. Field applicability depends on type: IDENTITY and GOVERNANCE_GROUP require `id`; STATIC_EMAIL requires `email`; MANAGER_OF may optionally include `id` (manager of that identity, otherwise manager of the notification recipient); ORG_ADMINS does not use `id` or `email`.'
                      required:
                        - type
                      properties:
                        type:
                          type: string
                          title: CC/BCC Recipient Type
                          description: Recipient resolution type for a CC or BCC preference entry. Dynamic types are resolved at notification send time based on the triggering event's context.
                          example: IDENTITY
                          enum:
                            - IDENTITY
                            - MANAGER_OF
                            - GOVERNANCE_GROUP
                            - ORG_ADMINS
                            - STATIC_EMAIL
                        id:
                          type: string
                          nullable: true
                          description: Identity or governance group id when required by the recipient type. For MANAGER_OF, when provided this is the identity whose manager should receive the email.
                          example: 6b0b8e47cc1f4c3fa961a38fc718e989
                        email:
                          type: string
                          format: email
                          nullable: true
                          description: Static email address when type is STATIC_EMAIL.
                          example: cc-recipient@example.com
                    example:
                      - type: IDENTITY
                        id: 6b0b8e47cc1f4c3fa961a38fc718e989
                      - type: STATIC_EMAIL
                        email: cc-recipient@example.com
                  bccList:
                    type: array
                    maxItems: 5
                    description: Optional BCC recipients for email notifications for this key. Requires EMAIL to be included in `mediums`. Maximum of five entries. The same recipient cannot appear in both `ccList` and `bccList`.
                    items:
                      type: object
                      title: CC/BCC Preference Entry
                      description: 'One CC or BCC routing entry. Dynamic recipient types are resolved at notification send time. Field applicability depends on type: IDENTITY and GOVERNANCE_GROUP require `id`; STATIC_EMAIL requires `email`; MANAGER_OF may optionally include `id` (manager of that identity, otherwise manager of the notification recipient); ORG_ADMINS does not use `id` or `email`.'
                      required:
                        - type
                      properties:
                        type:
                          type: string
                          title: CC/BCC Recipient Type
                          description: Recipient resolution type for a CC or BCC preference entry. Dynamic types are resolved at notification send time based on the triggering event's context.
                          example: IDENTITY
                          enum:
                            - IDENTITY
                            - MANAGER_OF
                            - GOVERNANCE_GROUP
                            - ORG_ADMINS
                            - STATIC_EMAIL
                        id:
                          type: string
                          nullable: true
                          description: Identity or governance group id when required by the recipient type. For MANAGER_OF, when provided this is the identity whose manager should receive the email.
                          example: 6b0b8e47cc1f4c3fa961a38fc718e989
                        email:
                          type: string
                          format: email
                          nullable: true
                          description: Static email address when type is STATIC_EMAIL.
                          example: cc-recipient@example.com
                    example:
                      - type: MANAGER_OF
                      - type: ORG_ADMINS
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
