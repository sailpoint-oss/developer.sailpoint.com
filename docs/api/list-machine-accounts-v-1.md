## OpenAPI

```yaml GET /machine-accounts/v1
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
  /machine-accounts/v1:
    get:
      description: 'This returns a list of machine accounts.  '
      operationId: listMachineAccountsV1
      security:
        - userAuth:
            - idn:mis-account:read
      parameters:
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
          required: false
          schema:
            type: string
          example: hasEntitlements eq true
          description: |-
            Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)

            Filtering is supported for the following fields and operators:

            **id**: *eq, in*

            **name**: *eq, in, sw*

            **nativeIdentity**: *eq, in, sw*

            **uuid**: *eq, in*

            **description**: *eq, in, sw*

            **machineIdentity.id**: *eq, in*

            **machineIdentity.name**: *eq, in, sw*

            **subtype.technicalName**: *eq, in, sw*

            **subtype.displayName**: *eq, in, sw*

            **accessType**: *eq, in, sw*

            **environment**: *eq, in, sw*

            **ownerIdentity**: *eq, in*

            **ownerIdentity.id**: *eq, in*

            **ownerIdentity.name**: *eq, in, sw*

            **manuallyCorrelated**: *eq*

            **enabled**: *eq*

            **locked**: *eq*

            **hasEntitlements**: *eq*

            **attributes**: *eq*

            **source.id**: *eq, in*

            **source.name**: *eq, in, sw*

            **created**: *eq, gt, lt, ge, le*

            **modified**: *eq, gt, lt, ge, le*

            **risk.severity**: *eq, in*

            **permissionLevel**: *eq, in*

            **lastUsedAt**: *gt, lt, ge, le*

            `risk.severity`, `permissionLevel`, and `lastUsedAt` require Entro enrichment to be enabled for the tenant. When it is not, those filters return `400`. `compliance` and `complianceViolationsCount` are not filter fields. With unknown-severity enabled, a null stored severity matches `risk.severity eq "UNKNOWN"`.
        - in: query
          name: sorters
          required: false
          schema:
            type: string
            format: comma-separated
          example: id,name
          description: |-
            Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)

            Sorting is supported for the following fields: **id, name, nativeIdentity, ownerIdentity, uuid, description, machineIdentity.id, machineIdentity.name, subtype.technicalName, subtype.displayName, accessType, environment, manuallyCorrelated, enabled, locked, hasEntitlements, ownerIdentity.id, ownerIdentity.name, attributes, source.id, source.name, created, modified, risk.severity, permissionLevel, lastUsedAt**

            `risk.severity`, `permissionLevel`, and `lastUsedAt` require Entro enrichment to be enabled; otherwise those sorters return `400`. `risk.severity` sorts by rank (UNKNOWN, LOW, MEDIUM, HIGH, CRITICAL), not alphabetically. Null Entro values sort last. `compliance` is not sortable.
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
          description: List of machine account objects
          content:
            application/json:
              schema:
                type: array
                items:
                  allOf:
                    - type: object
                      title: Base Common Dto
                      required:
                        - name
                      properties:
                        id:
                          description: System-generated unique ID of the Object
                          type: string
                          example: id12345
                          readOnly: true
                        name:
                          description: Name of the Object
                          type: string
                          example: aName
                          nullable: true
                        created:
                          description: Creation date of the Object
                          type: string
                          example: '2015-05-28T14:07:17Z'
                          format: date-time
                          readOnly: true
                        modified:
                          description: Last modification date of the Object
                          type: string
                          example: '2015-05-28T14:07:17Z'
                          format: date-time
                          readOnly: true
                    - type: object
                      required:
                        - nativeIdentity
                        - classificationMethod
                        - connectorAttributes
                        - manuallyEdited
                        - locked
                        - enabled
                        - hasEntitlements
                        - source
                      properties:
                        description:
                          type: string
                          description: A description of the machine account
                          nullable: true
                          example: Service account for Active Directory
                        nativeIdentity:
                          type: string
                          description: The unique ID of the machine account generated by the source system
                          example: '552775'
                        uuid:
                          type: string
                          description: The unique ID of the account as determined by the account schema
                          example: '{b0dce506-d6d4-44d2-8a32-d9a5b21fb175}'
                          nullable: true
                        classificationMethod:
                          description: Classification Method
                          type: string
                          enum:
                            - SOURCE
                            - CRITERIA
                            - DISCOVERY
                            - MANUAL
                          example: SOURCE
                        machineIdentity:
                          description: The machine identity this account is associated with
                          example:
                            id: 1540e5a4-6c2e-4bf1-b88e-c08cae0696e9
                            type: MACHINE_IDENTITY
                            name: SVC_ADService
                        ownerIdentity:
                          description: The identity who owns this account.
                          nullable: true
                          example:
                            id: 2c918084660f45d6016617daa9210584
                            type: IDENTITY
                            name: Adam Kennedy
                        accessType:
                          type: string
                          example: direct
                          description: The connection type of the source this account is from
                        subtype:
                          type: string
                          nullable: true
                          example: null
                          description: The sub-type
                        environment:
                          type: string
                          nullable: true
                          example: TEST
                          description: Environment
                        attributes:
                          type: object
                          nullable: true
                          additionalProperties: true
                          description: Custom attributes specific to the machine account
                          example:
                            firstName: SailPoint
                            lastName: Support
                            displayName: SailPoint Support
                        connectorAttributes:
                          type: object
                          nullable: true
                          additionalProperties: true
                          description: The connector attributes for the account
                          example:
                            mail: machine-178@sailpoint.com
                            givenName: Support
                            displayName: SailPoint Support
                        manuallyCorrelated:
                          type: boolean
                          description: Indicates if the account has been manually correlated to an identity
                          default: false
                          example: true
                        manuallyEdited:
                          type: boolean
                          description: Indicates if the account has been manually edited
                          default: false
                          example: true
                        locked:
                          type: boolean
                          description: Indicates if the account is currently locked
                          example: false
                        enabled:
                          type: boolean
                          description: Indicates if the account is enabled
                          default: false
                          example: false
                        hasEntitlements:
                          type: boolean
                          description: Indicates if the account has entitlements
                          default: true
                          example: false
                        source:
                          description: The source this machine account belongs to.
                          example:
                            id: 8d3e0094e99445de98eef6c75e25jc04
                            type: SOURCE
                            name: Active Directory
                        risk:
                          type: object
                          readOnly: true
                          nullable: true
                          description: Entro risk for this machine account. Present when Entro enrichment is enabled for the tenant. Null when no risk has been recorded. `score` stays null until a risk-engine projection exists. Read-only; written only by aggregation. This is separate from machine-identity SAF risk.
                          properties:
                            score:
                              type: number
                              format: double
                              nullable: true
                              description: Risk score. Null for Entro-only severity.
                              example: 72.5
                            severity:
                              type: string
                              nullable: true
                              description: Risk severity. A null stored severity can render as UNKNOWN when that behavior is enabled.
                              enum:
                                - UNKNOWN
                                - LOW
                                - MEDIUM
                                - HIGH
                                - CRITICAL
                              example: HIGH
                        permissionLevel:
                          type: string
                          readOnly: true
                          nullable: true
                          description: Entro permission level. Null when not enriched. Read-only; written only by aggregation.
                          enum:
                            - PRIVILEGED
                            - ELEVATED
                            - BASIC
                            - UNKNOWN
                          example: PRIVILEGED
                        compliance:
                          type: array
                          readOnly: true
                          nullable: true
                          description: Entro compliance control ids. Null when absent; empty when Entro recorded no violations. A violations count is the length of this array. There is no `complianceViolationsCount` field, and `compliance` is not a list filter or sort field. Read-only; written only by aggregation.
                          items:
                            type: object
                            properties:
                              id:
                                type: string
                                nullable: true
                                description: Framework control id.
                                example: SOC2-CC6.1
                        lastUsedAt:
                          type: string
                          format: date-time
                          readOnly: true
                          nullable: true
                          description: When the machine account was last used, from Entro. Null when not enriched. Read-only; written only by aggregation.
                          example: '2026-03-10T21:38:25Z'
                  title: machineaccount
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
