## OpenAPI

```yaml POST /scheduled-searches/v1
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
  /scheduled-searches/v1:
    post:
      description: |
        Creates a new scheduled search.
      operationId: createScheduledSearchV1
      security:
        - userAuth:
            - sp:scheduled-search:manage
      requestBody:
        description: The scheduled search to persist.
        content:
          application/json:
            schema:
              allOf:
                - type: object
                  properties:
                    name:
                      description: |
                        The name of the scheduled search.
                      type: string
                      example: Daily disabled accounts
                      nullable: true
                    description:
                      description: |
                        The description of the scheduled search.
                      type: string
                      nullable: true
                      example: Daily disabled accounts
                  title: scheduledsearchname
                - type: object
                  properties:
                    savedSearchId:
                      description: The ID of the saved search that will be executed.
                      type: string
                      example: 554f1511-f0a1-4744-ab14-599514d3e57c
                    created:
                      allOf:
                        - type: string
                          nullable: true
                          format: date-time
                          example: '2018-06-25T20:22:28.104Z'
                          description: A date-time in ISO-8601 format
                          title: datetime
                      description: The date the scheduled search was initially created.
                      readOnly: true
                    modified:
                      allOf:
                        - type: string
                          nullable: true
                          format: date-time
                          example: '2018-06-25T20:22:28.104Z'
                          description: A date-time in ISO-8601 format
                          title: datetime
                      description: The last date the scheduled search was modified.
                      readOnly: true
                    schedule:
                      type: object
                      description: The schedule information.
                      properties:
                        type:
                          description: |
                            Enum representing the currently supported schedule types.

                            Additional values may be added in the future without notice.
                          type: string
                          enum:
                            - DAILY
                            - WEEKLY
                            - MONTHLY
                            - CALENDAR
                            - ANNUALLY
                          example: WEEKLY
                          title: scheduletype
                        months:
                          allOf:
                            - type: object
                              properties:
                                type:
                                  description: |
                                    Enum representing the currently supported selector types.

                                    LIST - the *values* array contains one or more distinct values.

                                    RANGE - the *values* array contains two values: the start and end of the range, inclusive.

                                    Additional values may be added in the future without notice.
                                  type: string
                                  enum:
                                    - LIST
                                    - RANGE
                                  example: LIST
                                  title: selectortype
                                values:
                                  description: |
                                    The selected values.
                                  type: array
                                  items:
                                    type: string
                                  example:
                                    - MON
                                    - WED
                                interval:
                                  nullable: true
                                  description: |
                                    The selected interval for RANGE selectors.
                                  type: integer
                                  format: int32
                                  example: 3
                              required:
                                - type
                                - values
                              title: selector
                            - description: |
                                The months to execute the search. This only applies to schedules with a type of `ANNUALLY`.
                              example:
                                type: LIST
                                values:
                                  - '3'
                                  - '6'
                                  - '9'
                                  - '12'
                              nullable: true
                        days:
                          allOf:
                            - type: object
                              properties:
                                type:
                                  description: |
                                    Enum representing the currently supported selector types.

                                    LIST - the *values* array contains one or more distinct values.

                                    RANGE - the *values* array contains two values: the start and end of the range, inclusive.

                                    Additional values may be added in the future without notice.
                                  type: string
                                  enum:
                                    - LIST
                                    - RANGE
                                  example: LIST
                                  title: selectortype
                                values:
                                  description: |
                                    The selected values.
                                  type: array
                                  items:
                                    type: string
                                  example:
                                    - MON
                                    - WED
                                interval:
                                  nullable: true
                                  description: |
                                    The selected interval for RANGE selectors.
                                  type: integer
                                  format: int32
                                  example: 3
                              required:
                                - type
                                - values
                              title: selector
                            - description: |
                                The days to execute the search.

                                If `type` is `WEEKLY`, the values will be `MON`, `TUE`, `WED`, `THU`, `FRI`, `SAT`, and `SUN`.

                                If `type` is `MONTHLY` or `ANNUALLY`, the values will be a number in double quotes, like `"1"`, `"10"`, or `"28"`.  Optionally, the value `"L"` can be used to refer to the last day of the month.
                              example:
                                type: LIST
                                values:
                                  - MON
                                  - WED
                                  - FRI
                              nullable: true
                        hours:
                          allOf:
                            - type: object
                              properties:
                                type:
                                  description: |
                                    Enum representing the currently supported selector types.

                                    LIST - the *values* array contains one or more distinct values.

                                    RANGE - the *values* array contains two values: the start and end of the range, inclusive.

                                    Additional values may be added in the future without notice.
                                  type: string
                                  enum:
                                    - LIST
                                    - RANGE
                                  example: LIST
                                  title: selectortype
                                values:
                                  description: |
                                    The selected values.
                                  type: array
                                  items:
                                    type: string
                                  example:
                                    - MON
                                    - WED
                                interval:
                                  nullable: true
                                  description: |
                                    The selected interval for RANGE selectors.
                                  type: integer
                                  format: int32
                                  example: 3
                              required:
                                - type
                                - values
                              title: selector
                            - description: The hours selected.
                              example:
                                type: RANGE
                                values:
                                  - '9'
                                  - '18'
                                interval: 3
                        expiration:
                          type: string
                          nullable: true
                          format: date-time
                          example: '2018-06-25T20:22:28.104Z'
                          description: A date-time in ISO-8601 format
                          title: datetime
                        timeZoneId:
                          description: The canonical TZ identifier the schedule will run in (ex. America/New_York).  If no timezone is specified, the org's default timezone is used.
                          nullable: true
                          type: string
                          example: America/Chicago
                      required:
                        - type
                        - hours
                      title: schedule
                    recipients:
                      description: A list of identities that should receive the scheduled search report via email.
                      type: array
                      items:
                        type: object
                        properties:
                          type:
                            type: string
                            description: The type of object being referenced
                            enum:
                              - IDENTITY
                            example: IDENTITY
                          id:
                            type: string
                            description: The ID of the referenced object
                            example: 2c9180867624cbd7017642d8c8c81f67
                        required:
                          - type
                          - id
                    enabled:
                      description: |
                        Indicates if the scheduled search is enabled.
                      type: boolean
                      default: false
                      example: false
                    emailEmptyResults:
                      description: |
                        Indicates if email generation should occur when search returns no results.
                      type: boolean
                      default: false
                      example: false
                    displayQueryDetails:
                      description: |
                        Indicates if the generated email should include the query and search results preview (which could include PII).
                      type: boolean
                      default: false
                      example: false
                  required:
                    - savedSearchId
                    - schedule
                    - recipients
                  title: searchschedule
            examples:
              Daily Search:
                description: A search that executes each day at a 9 AM
                value:
                  savedSearchId: 9c620e13-cd33-4804-a13d-403bd7bcdbad
                  schedule:
                    type: DAILY
                    hours:
                      type: LIST
                      values:
                        - '9'
                  recipients:
                    - type: IDENTITY
                      id: 2c9180867624cbd7017642d8c8c81f67
              Weekly Search:
                description: A search that executes each week on select days and times
                value:
                  savedSearchId: 9c620e13-cd33-4804-a13d-403bd7bcdbad
                  schedule:
                    type: WEEKLY
                    days:
                      type: LIST
                      values:
                        - MON
                        - TUE
                        - WED
                        - THU
                        - FRI
                        - SAT
                        - SUN
                    hours:
                      type: LIST
                      values:
                        - '9'
                  recipients:
                    - type: IDENTITY
                      id: 2c9180867624cbd7017642d8c8c81f67
              Monthly Search:
                description: A search that executes each month on select days and times
                value:
                  savedSearchId: 9c620e13-cd33-4804-a13d-403bd7bcdbad
                  schedule:
                    type: MONTHLY
                    days:
                      type: LIST
                      values:
                        - '1'
                        - '7'
                        - '14'
                        - L
                    hours:
                      type: LIST
                      values:
                        - '9'
                  recipients:
                    - type: IDENTITY
                      id: 2c9180867624cbd7017642d8c8c81f67
              Annual Search:
                description: A search that executes each year on the defined months, days, and times.
                value:
                  savedSearchId: 9c620e13-cd33-4804-a13d-403bd7bcdbad
                  schedule:
                    type: ANNUALLY
                    months:
                      type: LIST
                      values:
                        - '1'
                      interval: 3
                    days:
                      type: LIST
                      values:
                        - '1'
                        - '7'
                        - '14'
                        - L
                    hours:
                      type: LIST
                      values:
                        - '9'
                  recipients:
                    - type: IDENTITY
                      id: 2c9180867624cbd7017642d8c8c81f67
              Calendar Search:
                description: A search that executes on specific calendar days
                value:
                  savedSearchId: 9c620e13-cd33-4804-a13d-403bd7bcdbad
                  schedule:
                    type: CALENDAR
                    days:
                      type: LIST
                      values:
                        - '2023-01-22'
                        - '2023-02-22'
                    hours:
                      type: LIST
                      values:
                        - '9'
                  recipients:
                    - type: IDENTITY
                      id: 2c9180867624cbd7017642d8c8c81f67
        required: true
      responses:
        '201':
          description: The persisted scheduled search.
          content:
            application/json:
              schema:
                type: object
                allOf:
                  - type: object
                    properties:
                      id:
                        description: The scheduled search ID.
                        type: string
                        example: 0de46054-fe90-434a-b84e-c6b3359d0c64
                        readOnly: true
                      owner:
                        description: The owner of the scheduled search
                        readOnly: true
                        type: object
                        properties:
                          type:
                            type: string
                            description: The type of object being referenced
                            enum:
                              - IDENTITY
                            example: IDENTITY
                          id:
                            type: string
                            description: The ID of the referenced object
                            example: 2c9180867624cbd7017642d8c8c81f67
                        required:
                          - type
                          - id
                      ownerId:
                        description: |
                          The ID of the scheduled search owner.

                          Please use the `id` in the `owner` object instead.
                        type: string
                        example: 2c9180867624cbd7017642d8c8c81f67
                        readOnly: true
                        deprecated: true
                  - type: object
                    properties:
                      name:
                        description: |
                          The name of the scheduled search.
                        type: string
                        example: Daily disabled accounts
                        nullable: true
                      description:
                        description: |
                          The description of the scheduled search.
                        type: string
                        nullable: true
                        example: Daily disabled accounts
                    title: scheduledsearchname
                  - type: object
                    properties:
                      savedSearchId:
                        description: The ID of the saved search that will be executed.
                        type: string
                        example: 554f1511-f0a1-4744-ab14-599514d3e57c
                      created:
                        allOf:
                          - type: string
                            nullable: true
                            format: date-time
                            example: '2018-06-25T20:22:28.104Z'
                            description: A date-time in ISO-8601 format
                            title: datetime
                        description: The date the scheduled search was initially created.
                        readOnly: true
                      modified:
                        allOf:
                          - type: string
                            nullable: true
                            format: date-time
                            example: '2018-06-25T20:22:28.104Z'
                            description: A date-time in ISO-8601 format
                            title: datetime
                        description: The last date the scheduled search was modified.
                        readOnly: true
                      schedule:
                        type: object
                        description: The schedule information.
                        properties:
                          type:
                            description: |
                              Enum representing the currently supported schedule types.

                              Additional values may be added in the future without notice.
                            type: string
                            enum:
                              - DAILY
                              - WEEKLY
                              - MONTHLY
                              - CALENDAR
                              - ANNUALLY
                            example: WEEKLY
                            title: scheduletype
                          months:
                            allOf:
                              - type: object
                                properties:
                                  type:
                                    description: |
                                      Enum representing the currently supported selector types.

                                      LIST - the *values* array contains one or more distinct values.

                                      RANGE - the *values* array contains two values: the start and end of the range, inclusive.

                                      Additional values may be added in the future without notice.
                                    type: string
                                    enum:
                                      - LIST
                                      - RANGE
                                    example: LIST
                                    title: selectortype
                                  values:
                                    description: |
                                      The selected values.
                                    type: array
                                    items:
                                      type: string
                                    example:
                                      - MON
                                      - WED
                                  interval:
                                    nullable: true
                                    description: |
                                      The selected interval for RANGE selectors.
                                    type: integer
                                    format: int32
                                    example: 3
                                required:
                                  - type
                                  - values
                                title: selector
                              - description: |
                                  The months to execute the search. This only applies to schedules with a type of `ANNUALLY`.
                                example:
                                  type: LIST
                                  values:
                                    - '3'
                                    - '6'
                                    - '9'
                                    - '12'
                                nullable: true
                          days:
                            allOf:
                              - type: object
                                properties:
                                  type:
                                    description: |
                                      Enum representing the currently supported selector types.

                                      LIST - the *values* array contains one or more distinct values.

                                      RANGE - the *values* array contains two values: the start and end of the range, inclusive.

                                      Additional values may be added in the future without notice.
                                    type: string
                                    enum:
                                      - LIST
                                      - RANGE
                                    example: LIST
                                    title: selectortype
                                  values:
                                    description: |
                                      The selected values.
                                    type: array
                                    items:
                                      type: string
                                    example:
                                      - MON
                                      - WED
                                  interval:
                                    nullable: true
                                    description: |
                                      The selected interval for RANGE selectors.
                                    type: integer
                                    format: int32
                                    example: 3
                                required:
                                  - type
                                  - values
                                title: selector
                              - description: |
                                  The days to execute the search.

                                  If `type` is `WEEKLY`, the values will be `MON`, `TUE`, `WED`, `THU`, `FRI`, `SAT`, and `SUN`.

                                  If `type` is `MONTHLY` or `ANNUALLY`, the values will be a number in double quotes, like `"1"`, `"10"`, or `"28"`.  Optionally, the value `"L"` can be used to refer to the last day of the month.
                                example:
                                  type: LIST
                                  values:
                                    - MON
                                    - WED
                                    - FRI
                                nullable: true
                          hours:
                            allOf:
                              - type: object
                                properties:
                                  type:
                                    description: |
                                      Enum representing the currently supported selector types.

                                      LIST - the *values* array contains one or more distinct values.

                                      RANGE - the *values* array contains two values: the start and end of the range, inclusive.

                                      Additional values may be added in the future without notice.
                                    type: string
                                    enum:
                                      - LIST
                                      - RANGE
                                    example: LIST
                                    title: selectortype
                                  values:
                                    description: |
                                      The selected values.
                                    type: array
                                    items:
                                      type: string
                                    example:
                                      - MON
                                      - WED
                                  interval:
                                    nullable: true
                                    description: |
                                      The selected interval for RANGE selectors.
                                    type: integer
                                    format: int32
                                    example: 3
                                required:
                                  - type
                                  - values
                                title: selector
                              - description: The hours selected.
                                example:
                                  type: RANGE
                                  values:
                                    - '9'
                                    - '18'
                                  interval: 3
                          expiration:
                            type: string
                            nullable: true
                            format: date-time
                            example: '2018-06-25T20:22:28.104Z'
                            description: A date-time in ISO-8601 format
                            title: datetime
                          timeZoneId:
                            description: The canonical TZ identifier the schedule will run in (ex. America/New_York).  If no timezone is specified, the org's default timezone is used.
                            nullable: true
                            type: string
                            example: America/Chicago
                        required:
                          - type
                          - hours
                        title: schedule
                      recipients:
                        description: A list of identities that should receive the scheduled search report via email.
                        type: array
                        items:
                          type: object
                          properties:
                            type:
                              type: string
                              description: The type of object being referenced
                              enum:
                                - IDENTITY
                              example: IDENTITY
                            id:
                              type: string
                              description: The ID of the referenced object
                              example: 2c9180867624cbd7017642d8c8c81f67
                          required:
                            - type
                            - id
                      enabled:
                        description: |
                          Indicates if the scheduled search is enabled.
                        type: boolean
                        default: false
                        example: false
                      emailEmptyResults:
                        description: |
                          Indicates if email generation should occur when search returns no results.
                        type: boolean
                        default: false
                        example: false
                      displayQueryDetails:
                        description: |
                          Indicates if the generated email should include the query and search results preview (which could include PII).
                        type: boolean
                        default: false
                        example: false
                    required:
                      - savedSearchId
                      - schedule
                      - recipients
                    title: searchschedule
                required:
                  - id
                  - owner
                  - ownerId
                title: scheduledsearch
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
