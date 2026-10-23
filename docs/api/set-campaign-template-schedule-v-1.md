## OpenAPI

```yaml PUT /campaign-templates/v1/{id}/schedule
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
  /campaign-templates/v1/{id}/schedule:
    put:
      description: |
        Use this API to set the schedule for a certification campaign template. If a schedule already exists, the API overwrites it with the new one.
      operationId: setCampaignTemplateScheduleV1
      security:
        - userAuth:
            - idn:campaign-template:manage
      parameters:
        - in: path
          name: id
          schema:
            type: string
          required: true
          x-sailpoint-resource-operation-id: getCampaignTemplatesV1
          description: ID of the campaign template being scheduled.
          example: 04bedce387bd47b2ae1f86eb0bb36dee
      requestBody:
        content:
          application/json:
            schema:
              type: object
              title: Schedule
              properties:
                type:
                  type: string
                  description: Determines the overall schedule cadence. In general, all time period fields smaller than the chosen type can be configured. For example, a DAILY schedule can have 'hours' set, but not 'days'; a WEEKLY schedule can have both 'hours' and 'days' set.
                  enum:
                    - WEEKLY
                    - MONTHLY
                    - ANNUALLY
                    - CALENDAR
                  example: WEEKLY
                months:
                  type: object
                  nullable: true
                  description: |
                    Specifies which months of a schedule are active. Only valid for ANNUALLY schedule types. Examples:

                    On February and March:
                    * type LIST
                    * values "2", "3"

                    Every 3 months, starting in January (quarterly):
                    * type LIST
                    * values "1"
                    * interval 3

                    Every two months between July and December:
                    * type RANGE
                    * values "7", "12"
                    * interval 2
                  properties:
                    type:
                      type: string
                      description: Enum type to specify months value
                      enum:
                        - LIST
                        - RANGE
                      example: LIST
                    values:
                      type: array
                      description: Values of the months based on the enum type mentioned above
                      items:
                        type: string
                      example:
                        - '1'
                    interval:
                      type: integer
                      example: 2
                      format: int64
                      description: Interval between the cert generations
                  required:
                    - type
                    - values
                days:
                  type: object
                  description: |
                    Specifies which day(s) a schedule is active for. This is required for all schedule types.
                    The "values" field holds different data depending on the type of schedule:
                    * WEEKLY: days of the week (1-7)
                    * MONTHLY: days of the month (1-31, L, L-1...)
                    * ANNUALLY: if the "months" field is also set: days of the month (1-31, L, L-1...); otherwise: ISO-8601 dates without year ("--12-31")
                    * CALENDAR: ISO-8601 dates ("2020-12-31")

                    Note that CALENDAR only supports the LIST type, and ANNUALLY does not support the RANGE type when provided
                    with ISO-8601 dates without year.

                    Examples:

                    On Sundays:
                    * type LIST
                    * values "1"

                    The second to last day of the month:
                    * type LIST
                    * values "L-1"

                    From the 20th to the last day of the month:
                    * type RANGE
                    * values "20", "L"

                    Every March 2nd:
                    * type LIST
                    * values "--03-02"

                    On March 2nd, 2021:
                    * type: LIST
                    * values "2021-03-02"
                  properties:
                    type:
                      type: string
                      description: Enum type to specify days value
                      enum:
                        - LIST
                        - RANGE
                      example: LIST
                    values:
                      type: array
                      description: Values of the days based on the enum type mentioned above
                      items:
                        type: string
                      example:
                        - '1'
                    interval:
                      type: integer
                      example: 2
                      format: int64
                      description: Interval between the cert generations
                      nullable: true
                  required:
                    - type
                    - values
                hours:
                  type: object
                  description: |
                    Specifies which hour(s) a schedule is active for. Examples:

                    Every three hours starting from 8AM, inclusive:
                    * type LIST
                    * values "8"
                    * interval 3

                    During business hours:
                    * type RANGE
                    * values "9", "5"

                    At 5AM, noon, and 5PM:
                    * type LIST
                    * values "5", "12", "17"
                  properties:
                    type:
                      type: string
                      description: Enum type to specify hours value
                      enum:
                        - LIST
                        - RANGE
                      example: LIST
                    values:
                      type: array
                      description: Values of the days based on the enum type mentioned above
                      items:
                        type: string
                      example:
                        - '1'
                    interval:
                      type: integer
                      format: int64
                      example: 2
                      description: Interval between the cert generations
                      nullable: true
                  required:
                    - type
                    - values
                expiration:
                  type: string
                  format: date-time
                  description: Specifies the time after which this schedule will no longer occur.
                  example: '2022-09-19 13:55:26'
                  nullable: true
                timeZoneId:
                  type: string
                  description: The time zone to use when running the schedule. For instance, if the schedule is scheduled to run at 1AM, and this field is set to "CST", the schedule will run at 1AM CST.
                  example: CST
              required:
                - type
                - hours
            examples:
              Monthly:
                description: Runs on the 15th and last day of the month, at 5PM.
                value:
                  type: MONTHLY
                  hours:
                    type: LIST
                    values:
                      - '17'
                  days:
                    type: LIST
                    values:
                      - '15'
              Once a year:
                description: Runs every January 1st at midnight.
                value:
                  type: ANNUALLY
                  hours:
                    type: LIST
                    values:
                      - '0'
                  days:
                    type: LIST
                    values:
                      - '--01-01'
              Quarterly:
                description: Runs once a quarter (every 3 months) on the first of the month at 1AM.
                value:
                  type: ANNUALLY
                  hours:
                    type: LIST
                    values:
                      - '1'
                  days:
                    type: LIST
                    values:
                      - '1'
                  months:
                    type: LIST
                    values:
                      - '1'
                    interval: 3
              Yearly on Specific Days:
                description: Runs on March 12 and December 5 at 1AM, every year.
                value:
                  type: ANNUALLY
                  hours:
                    type: LIST
                    values:
                      - '1'
                  days:
                    type: LIST
                    values:
                      - '--03-12'
                      - '--12-05'
              On a Specific Date:
                description: Runs at 1AM on February 18th, 2020
                value:
                  type: CALENDAR
                  hours:
                    type: LIST
                    values:
                      - '1'
                  days:
                    type: LIST
                    values:
                      - '2020-02-18'
      responses:
        '204':
          description: No content - indicates the request was successful but there is no content to be returned in the response.
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
