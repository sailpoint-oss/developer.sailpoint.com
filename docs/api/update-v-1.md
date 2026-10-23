## OpenAPI

```yaml POST /managed-clusters/v1/{id}/manualUpgrade
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
  /managed-clusters/v1/{id}/manualUpgrade:
    post:
      description: |-
        Trigger Manual Upgrade for Managed Cluster.
        AMS Security: API, Internal A token with SYSTEM_ADMINISTRATOR authority is required to call this API.
      operationId: updateV1
      security:
        - userAuth:
            - idn:managed-cluster-upgrade:manage
      parameters:
        - name: id
          in: path
          description: ID of managed cluster to trigger manual upgrade.
          required: true
          x-sailpoint-resource-operation-id: getManagedClustersV1
          schema:
            type: string
            format: uuid
          example: 2b838de9-db9b-abcf-e646-d4f274ad4238
      responses:
        '200':
          description: Manual upgrade of managed cluster for given cluster ID.
          content:
            application/json:
              schema:
                description: Manual Upgrade Job Response
                nullable: false
                type: object
                title: Cluster Manual Upgrade
                properties:
                  jobs:
                    description: List of job objects for the upgrade request.
                    type: array
                    items:
                      type: object
                      required:
                        - uuid
                        - cookbook
                        - state
                        - type
                        - targetId
                        - managedProcessConfiguration
                      properties:
                        uuid:
                          description: Unique identifier for the upgrade job.
                          type: string
                          example: 4732440c-dacb-45b2-b2f8-ee2fa1327a07
                        cookbook:
                          description: Identifier for the cookbook used in the upgrade job.
                          type: string
                          example: 4732440c-dacb-45b2-b2f8-ee2fa1327a07
                        state:
                          description: Current state of the upgrade job.
                          type: string
                          example: PENDING
                        type:
                          description: The type of upgrade job (e.g., VA_UPGRADE).
                          type: string
                          example: VA_UPGRADE
                        targetId:
                          description: Unique identifier of the target for the upgrade job.
                          type: string
                          example: 9fe8f1cc-2fd2-4675-a8cf-af4b43488ca2
                        managedProcessConfiguration:
                          description: Configuration of the managed processes involved in the upgrade.
                          type: object
                          properties:
                            charon:
                              description: Configuration details for the 'charon' process.
                              type: object
                              required:
                                - version
                                - path
                                - description
                                - restartNeeded
                              properties:
                                version:
                                  description: Version of the 'charon' process.
                                  type: string
                                  example: '3047'
                                path:
                                  description: Path to the 'charon' process.
                                  type: string
                                  example: sailpoint/charon
                                description:
                                  description: A brief description of the 'charon' process.
                                  type: string
                                  example: version of charon used by the va
                                restartNeeded:
                                  description: Indicates whether the process needs to be restarted.
                                  type: boolean
                                  example: true
                            ccg:
                              description: Configuration details for the 'ccg' process.
                              type: object
                              required:
                                - version
                                - path
                                - description
                                - restartNeeded
                                - dependencies
                              properties:
                                version:
                                  description: Version of the 'ccg' process.
                                  type: string
                                  example: 1798_1054_241.0.0
                                path:
                                  description: Path to the 'ccg' process.
                                  type: string
                                  example: sailpoint/ccg
                                description:
                                  description: A brief description of the 'ccg' process.
                                  type: string
                                  example: CCG Deployment through ops-cli
                                restartNeeded:
                                  description: Indicates whether the process needs to be restarted.
                                  type: boolean
                                  example: true
                                dependencies:
                                  description: A map of dependencies for the 'ccg' process.
                                  type: object
                                  additionalProperties:
                                    type: string
                                  example:
                                    IQService: 743/IQService-743.zip
                                    connector-bundle-jdbc: 432/connector-bundle-jdbc-432.zip
                                    connector-bundle-misc: 437/connector-bundle-misc-437.zip
                                    connector-bundle-unix: 242/connector-bundle-unix-242.zip
                                    connector-common-config: 208/connector-common-config-208.zip
                                    connector-bundle-filebased: 222/connector-bundle-filebased-222.zip
                                    connector-bundle-imprivata: 3/connector-bundle-imprivata-3.zip
                                    connector-bundle-mainframe: 211/connector-bundle-mainframe-211.zip
                                    connector-bundle-directories: 681/connector-bundle-directories-681.zip
                                    connector-bundle-sap-on-prem: 196/connector-bundle-sap-on-prem-196.zip
                                    connector-bundle-webservices: 1535/connector-bundle-webservices-1535.zip
                                    connector-bundle-sap-cloud-app: 175/connector-bundle-sap-cloud-app-175.zip
                                    connector-bundle-healthcare-epic: 302/connector-bundle-healthcare-epic-302.zip
                                    connector-bundle-hrms-oraclefusionhcm: 166/connector-bundle-hrms-oraclefusionhcm-166.zip
                                    connector-bundle-collaboration-connectors: 246/connector-bundle-collaboration-connectors-246.zip
                            otel_agent:
                              description: Configuration details for the 'otel_agent' process.
                              type: object
                              required:
                                - version
                                - path
                                - description
                                - restartNeeded
                              properties:
                                version:
                                  description: Version of the 'otel_agent' process.
                                  type: string
                                  example: '3003'
                                path:
                                  description: Path to the 'otel_agent' process.
                                  type: string
                                  example: sailpoint/otel_agent
                                description:
                                  description: A brief description of the 'otel_agent' process.
                                  type: string
                                  example: version of otel_agent used by the va
                                restartNeeded:
                                  description: Indicates whether the process needs to be restarted.
                                  type: boolean
                                  example: true
                            relay:
                              description: Configuration details for the 'relay' process.
                              type: object
                              required:
                                - version
                                - path
                                - description
                                - restartNeeded
                              properties:
                                version:
                                  description: Version of the 'relay' process.
                                  type: string
                                  example: '3000'
                                path:
                                  description: Path to the 'relay' process.
                                  type: string
                                  example: sailpoint/relay
                                description:
                                  description: A brief description of the 'relay' process.
                                  type: string
                                  example: version of relay used by the va
                                restartNeeded:
                                  description: Indicates whether the process needs to be restarted.
                                  type: boolean
                                  example: true
                            toolbox:
                              description: Configuration details for the 'toolbox' process.
                              type: object
                              required:
                                - version
                                - path
                                - description
                                - restartNeeded
                              properties:
                                version:
                                  description: Version of the 'toolbox' process.
                                  type: string
                                  example: '3004'
                                path:
                                  description: Path to the 'toolbox' process.
                                  type: string
                                  example: sailpoint/toolbox
                                description:
                                  description: A brief description of the 'toolbox' process.
                                  type: string
                                  example: version of toolbox used by the va
                                restartNeeded:
                                  description: Indicates whether the process needs to be restarted.
                                  type: boolean
                                  example: true
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
