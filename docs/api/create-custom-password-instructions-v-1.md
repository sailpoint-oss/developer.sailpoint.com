## OpenAPI

```yaml POST /custom-password-instructions/v1
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
  /custom-password-instructions/v1:
    post:
      description: |
        This API creates the custom password instructions for the specified page ID.

        The `pageId` determines which login and password-recovery screen your custom instructions appear on. The following table describes each supported page ID and where its text is displayed:

        | Page ID | Where the custom text appears |
        | --- | --- |
        | `flow-selection:select` | Flow-selection landing screen, under "Need help signing in?", above the navigation links. |
        | `reset-password:enter-username` | Reset-password "enter username" step, under the prompt, above the username field. |
        | `unlock-account:enter-username` | Unlock-account "enter username" step, under the prompt, above the username field. |
        | `forget-username:user-email` | Forgot-username screen, under "Enter the email address for", above the email field. |
        | `reset-password:enter-password` | Reset-password "new password" step, under the header, above the password fields. |
        | `change-password:enter-password` | Same "new password" screen, but the authenticated app/sync-group change variant. |
        | `reset-password:finish` | Reset-password success screen, under the success icon/heading, above the return button. |
        | `change-password:finish` | Success screen for the authenticated app/sync-group change, under the heading. |
        | `mfa:select` | MFA method-selection step, under the prompt, above the list of MFA options. |
        | `mfa:enter-code` | MFA code-entry step, under the option label, above the code field. |
        | `mfa:enter-kba` | KBA step, under "Please answer these security questions", above the questions form. |
        | `unlock-account:finish` | Unlock-account success screen, under the success icon/heading, above the return button. |

        In every case the text shows as an info-icon + paragraph block that only appears if custom text is configured for that page ID, positioned between the screen's built-in heading and its form controls.
      operationId: createCustomPasswordInstructionsV1
      security:
        - userAuth: []
      parameters:
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
              title: Custom Password Instruction
              properties:
                pageId:
                  type: string
                  example: change-password:enter-password
                  description: The page ID that represents the page for forget user name, reset password and unlock account flow.
                  enum:
                    - change-password:enter-password
                    - change-password:finish
                    - flow-selection:select
                    - forget-username:user-email
                    - mfa:enter-code
                    - mfa:enter-kba
                    - mfa:select
                    - reset-password:enter-password
                    - reset-password:enter-username
                    - reset-password:finish
                    - unlock-account:enter-username
                    - unlock-account:finish
                pageContent:
                  type: string
                  example: Please enter a new password. Your password must be at least 8 characters long and contain at least one number and one letter.
                  description: |
                    The custom instructions for the specified page. Allow basic HTML format and maximum length is 1000 characters. The custom instructions will be sanitized to avoid attacks.
                    If the customization text includes a link, like `<A HREF=\"URL\">...</A>` clicking on this will open the link on the current browser page.
                    If you want your link to be redirected to a different page, please redirect it to "_blank" like this: `<a href=\"URL" target=\"_blank\" >link</a>`. This will open a new tab when the link is clicked. Notice we're only supporting _blank as the redirection target.
                locale:
                  type: string
                  example: en
                  description: The locale for the custom instructions, a BCP47 language tag. The default value is \"default\".
            example:
              pageId: reset-password:enter-password
              pageContent: See company password policies for details by clicking <a href="url">here</a>
      responses:
        '200':
          description: Reference to the custom password instructions.
          content:
            application/json:
              schema:
                type: object
                title: Custom Password Instruction
                properties:
                  pageId:
                    type: string
                    example: change-password:enter-password
                    description: The page ID that represents the page for forget user name, reset password and unlock account flow.
                    enum:
                      - change-password:enter-password
                      - change-password:finish
                      - flow-selection:select
                      - forget-username:user-email
                      - mfa:enter-code
                      - mfa:enter-kba
                      - mfa:select
                      - reset-password:enter-password
                      - reset-password:enter-username
                      - reset-password:finish
                      - unlock-account:enter-username
                      - unlock-account:finish
                  pageContent:
                    type: string
                    example: Please enter a new password. Your password must be at least 8 characters long and contain at least one number and one letter.
                    description: |
                      The custom instructions for the specified page. Allow basic HTML format and maximum length is 1000 characters. The custom instructions will be sanitized to avoid attacks.
                      If the customization text includes a link, like `<A HREF=\"URL\">...</A>` clicking on this will open the link on the current browser page.
                      If you want your link to be redirected to a different page, please redirect it to "_blank" like this: `<a href=\"URL" target=\"_blank\" >link</a>`. This will open a new tab when the link is clicked. Notice we're only supporting _blank as the redirection target.
                  locale:
                    type: string
                    example: en
                    description: The locale for the custom instructions, a BCP47 language tag. The default value is \"default\".
              example:
                pageId: reset-password:enter-password
                locale: default
                pageContent: See company password policies for details by clicking <a href="url">here</a>
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
