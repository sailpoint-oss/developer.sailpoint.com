## OpenAPI

```yaml GET /transforms/v1/{id}
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
  /transforms/v1/{id}:
    get:
      description: This API returns the transform specified by the given ID.
      operationId: getTransformV1
      security:
        - userAuth:
            - idn:transform:read
            - idn:transform:manage
        - applicationAuth:
            - idn:transform:read
            - idn:transform:manage
      parameters:
        - name: id
          in: path
          description: ID of the transform to retrieve
          required: true
          x-sailpoint-resource-operation-id: listTransformsV1
          style: simple
          explode: false
          example: 2cd78adghjkja34jh2b1hkjhasuecd
          schema:
            type: string
      responses:
        '200':
          description: Transform with the given ID
          content:
            application/json:
              schema:
                allOf:
                  - type: object
                    title: Transform
                    description: The representation of an internally- or customer-defined transform.
                    required:
                      - name
                      - type
                      - attributes
                    properties:
                      name:
                        type: string
                        description: Unique name of this transform
                        example: Timestamp To Date
                        minLength: 1
                        maxLength: 50
                      type:
                        type: string
                        description: The type of transform operation
                        enum:
                          - accountAttribute
                          - base64Decode
                          - base64Encode
                          - concat
                          - conditional
                          - dateCompare
                          - dateFormat
                          - dateMath
                          - decomposeDiacriticalMarks
                          - e164phone
                          - firstValid
                          - rule
                          - identityAttribute
                          - indexOf
                          - iso3166
                          - lastIndexOf
                          - leftPad
                          - lookup
                          - lower
                          - normalizeNames
                          - randomAlphaNumeric
                          - randomNumeric
                          - reference
                          - replaceAll
                          - replace
                          - rightPad
                          - split
                          - static
                          - substring
                          - trim
                          - upper
                          - usernameGenerator
                          - uuid
                          - displayName
                          - rfc5646
                        example: dateFormat
                        externalDocs:
                          description: Transform Operations
                          url: https://developer.sailpoint.com/docs/extensibility/transforms/operations
                      attributes:
                        nullable: true
                        description: Meta-data about the transform. Values in this list are specific to the type of transform to be executed.
                        oneOf:
                          - title: accountAttribute
                            type: object
                            required:
                              - sourceName
                              - attributeName
                            properties:
                              sourceName:
                                type: string
                                description: A reference to the source to search for the account
                                example: Workday
                              attributeName:
                                type: string
                                description: The name of the attribute on the account to return. This should match the name of the account attribute name visible in the user interface, or on the source schema.
                                example: DEPARTMENT
                              accountSortAttribute:
                                type: string
                                description: The value of this configuration is a string name of the attribute to use when determining the ordering of returned accounts when there are multiple entries
                                example: created
                                default: created
                              accountSortDescending:
                                type: boolean
                                description: The value of this configuration is a boolean (true/false). Controls the order of the sort when there are multiple accounts. If not defined, the transform will default to false (ascending order)
                                example: false
                                default: false
                              accountReturnFirstLink:
                                type: boolean
                                description: The value of this configuration is a boolean (true/false). Controls which account to source a value from for an attribute.  If this flag is set to true, the transform returns the value from the first account in the list, even if it is null. If it is set to false, the transform returns the first non-null value. If not defined, the transform will default to false
                                example: false
                                default: false
                              accountFilter:
                                type: string
                                description: |-
                                  This expression queries the database to narrow search results. The value of this configuration is a sailpoint.object.Filter expression and used when searching against the database.  The default filter will always include the source and identity, and any subsequent expressions will be combined in an AND operation to the existing search criteria.
                                  Only certain searchable attributes are available:  - `nativeIdentity` - the Account ID  - `displayName` - the Account Name  - `entitlements` - a boolean value to determine if the account has entitlements
                                example: '!(nativeIdentity.startsWith("*DELETED*"))'
                              accountPropertyFilter:
                                type: string
                                description: |-
                                  This expression is used to search and filter accounts in memory. The value of this configuration is a sailpoint.object.Filter expression and used when searching against the returned resultset.

                                  All account attributes are available for filtering as this operation is performed in memory.
                                example: (groups.containsAll({'Admin'}) || location == 'Austin')
                              requiresPeriodicRefresh:
                                type: boolean
                                description: A value that indicates whether the transform logic should be re-evaluated every evening as part of the identity refresh process
                                example: false
                                default: false
                                title: requiresperiodicrefresh
                              input:
                                type: object
                                description: This is an optional attribute that can explicitly define the input data which will be fed into the transform logic. If input is not provided, the transform will take its input from the source and attribute combination configured via the UI.
                                additionalProperties: true
                                example:
                                  type: accountAttribute
                                  attributes:
                                    attributeName: first_name
                                    sourceName: Source
                                title: input
                          - title: base64Decode
                            type: object
                            properties:
                              requiresPeriodicRefresh:
                                type: boolean
                                description: A value that indicates whether the transform logic should be re-evaluated every evening as part of the identity refresh process
                                example: false
                                default: false
                                title: requiresperiodicrefresh
                              input:
                                type: object
                                description: This is an optional attribute that can explicitly define the input data which will be fed into the transform logic. If input is not provided, the transform will take its input from the source and attribute combination configured via the UI.
                                additionalProperties: true
                                example:
                                  type: accountAttribute
                                  attributes:
                                    attributeName: first_name
                                    sourceName: Source
                                title: input
                          - title: base64Encode
                            type: object
                            properties:
                              requiresPeriodicRefresh:
                                type: boolean
                                description: A value that indicates whether the transform logic should be re-evaluated every evening as part of the identity refresh process
                                example: false
                                default: false
                                title: requiresperiodicrefresh
                              input:
                                type: object
                                description: This is an optional attribute that can explicitly define the input data which will be fed into the transform logic. If input is not provided, the transform will take its input from the source and attribute combination configured via the UI.
                                additionalProperties: true
                                example:
                                  type: accountAttribute
                                  attributes:
                                    attributeName: first_name
                                    sourceName: Source
                                title: input
                          - title: concat
                            type: object
                            required:
                              - values
                            properties:
                              values:
                                type: array
                                items:
                                  type: object
                                description: An array of items to join together
                                example:
                                  - John
                                  - ' '
                                  - Smith
                              requiresPeriodicRefresh:
                                type: boolean
                                description: A value that indicates whether the transform logic should be re-evaluated every evening as part of the identity refresh process
                                example: false
                                default: false
                                title: requiresperiodicrefresh
                              input:
                                type: object
                                description: This is an optional attribute that can explicitly define the input data which will be fed into the transform logic. If input is not provided, the transform will take its input from the source and attribute combination configured via the UI.
                                additionalProperties: true
                                example:
                                  type: accountAttribute
                                  attributes:
                                    attributeName: first_name
                                    sourceName: Source
                                title: input
                          - title: conditional
                            type: object
                            required:
                              - expression
                              - positiveCondition
                              - negativeCondition
                            properties:
                              expression:
                                type: string
                                description: |-
                                  A comparison statement that follows the structure of `ValueA eq ValueB` where `ValueA` and `ValueB` are static strings or outputs of other transforms. 

                                  The `eq` operator is the only valid comparison
                                example: ValueA eq ValueB
                              positiveCondition:
                                type: string
                                description: The output of the transform if the expression evalutes to true
                                example: 'true'
                              negativeCondition:
                                type: string
                                description: The output of the transform if the expression evalutes to false
                                example: 'false'
                              requiresPeriodicRefresh:
                                type: boolean
                                description: A value that indicates whether the transform logic should be re-evaluated every evening as part of the identity refresh process
                                example: false
                                default: false
                                title: requiresperiodicrefresh
                              input:
                                type: object
                                description: This is an optional attribute that can explicitly define the input data which will be fed into the transform logic. If input is not provided, the transform will take its input from the source and attribute combination configured via the UI.
                                additionalProperties: true
                                example:
                                  type: accountAttribute
                                  attributes:
                                    attributeName: first_name
                                    sourceName: Source
                                title: input
                          - title: dateCompare
                            type: object
                            required:
                              - firstDate
                              - secondDate
                              - operator
                              - positiveCondition
                              - negativeCondition
                            properties:
                              firstDate:
                                description: This is the first date to consider (The date that would be on the left hand side of the comparison operation).
                                oneOf:
                                  - title: accountAttribute
                                    type: object
                                    required:
                                      - sourceName
                                      - attributeName
                                    properties:
                                      sourceName:
                                        type: string
                                        description: A reference to the source to search for the account
                                        example: Workday
                                      attributeName:
                                        type: string
                                        description: The name of the attribute on the account to return. This should match the name of the account attribute name visible in the user interface, or on the source schema.
                                        example: DEPARTMENT
                                      accountSortAttribute:
                                        type: string
                                        description: The value of this configuration is a string name of the attribute to use when determining the ordering of returned accounts when there are multiple entries
                                        example: created
                                        default: created
                                      accountSortDescending:
                                        type: boolean
                                        description: The value of this configuration is a boolean (true/false). Controls the order of the sort when there are multiple accounts. If not defined, the transform will default to false (ascending order)
                                        example: false
                                        default: false
                                      accountReturnFirstLink:
                                        type: boolean
                                        description: The value of this configuration is a boolean (true/false). Controls which account to source a value from for an attribute.  If this flag is set to true, the transform returns the value from the first account in the list, even if it is null. If it is set to false, the transform returns the first non-null value. If not defined, the transform will default to false
                                        example: false
                                        default: false
                                      accountFilter:
                                        type: string
                                        description: |-
                                          This expression queries the database to narrow search results. The value of this configuration is a sailpoint.object.Filter expression and used when searching against the database.  The default filter will always include the source and identity, and any subsequent expressions will be combined in an AND operation to the existing search criteria.
                                          Only certain searchable attributes are available:  - `nativeIdentity` - the Account ID  - `displayName` - the Account Name  - `entitlements` - a boolean value to determine if the account has entitlements
                                        example: '!(nativeIdentity.startsWith("*DELETED*"))'
                                      accountPropertyFilter:
                                        type: string
                                        description: |-
                                          This expression is used to search and filter accounts in memory. The value of this configuration is a sailpoint.object.Filter expression and used when searching against the returned resultset.

                                          All account attributes are available for filtering as this operation is performed in memory.
                                        example: (groups.containsAll({'Admin'}) || location == 'Austin')
                                      requiresPeriodicRefresh:
                                        type: boolean
                                        description: A value that indicates whether the transform logic should be re-evaluated every evening as part of the identity refresh process
                                        example: false
                                        default: false
                                        title: requiresperiodicrefresh
                                      input:
                                        type: object
                                        description: This is an optional attribute that can explicitly define the input data which will be fed into the transform logic. If input is not provided, the transform will take its input from the source and attribute combination configured via the UI.
                                        additionalProperties: true
                                        example:
                                          type: accountAttribute
                                          attributes:
                                            attributeName: first_name
                                            sourceName: Source
                                        title: input
                                  - title: dateFormat
                                    type: object
                                    properties:
                                      inputFormat:
                                        description: |-
                                          A string value indicating either the explicit SimpleDateFormat or the built-in named format that the data is coming in as.

                                          *If no inputFormat is provided, the transform assumes that it is in ISO8601 format*
                                        oneOf:
                                          - title: Named Construct
                                            type: string
                                            description: |
                                              | Construct       | Date Time Pattern | Description |
                                              | ---------       | ----------------- | ----------- |
                                              | ISO8601         | `yyyy-MM-dd'T'HH:mm:ss.SSSX` | The ISO8601 standard. |          
                                              | LDAP            | `yyyyMMddHHmmss.Z`           | The LDAP standard.    |
                                              | PEOPLE_SOFT     | `MM/dd/yyyy`                 | The date format People Soft uses. |
                                              | EPOCH_TIME_JAVA | # ms from midnight, January 1st, 1970 | The incoming date value as elapsed time in milliseconds from midnight, January 1st, 1970. |
                                              | EPOCH_TIME_WIN32| # intervals of 100ns from midnight, January 1st, 1601 | The incoming date value as elapsed time in 100-nanosecond intervals from midnight, January 1st, 1601. |
                                            enum:
                                              - ISO8601
                                              - LDAP
                                              - PEOPLE_SOFT
                                              - EPOCH_TIME_JAVA
                                              - EPOCH_TIME_WIN32
                                            example: PEOPLE_SOFT
                                          - title: Java Simple Date Format
                                            type: string
                                            description: |
                                              There are a variety of date time patterns you can express using SimpleDateFormat. The following table lists examples of different date time patterns expressed in the SimpleDateFormat and how they display. Refer to the SimpleDateFormat syntax page for more information.

                                              >NOTE: The following examples show how date and time patterns are interpreted in the U.S. locale. The given date and time are 2001-07-04 12:08:56 local time in the U.S. Pacific Time time zone.
                                                (This table is from the SimpleDateFormat page.)

                                              | Date Time Pattern | Result |
                                              | ----------------- | ------ |
                                              | `yyyy.MM.dd G 'at' HH:mm:ss z` | `2001.07.04 AD at 12:08:56 PDT` |
                                              | `EEE, MMM d, ''yy` | Wed, Jul 4, '01 |
                                              | `h:mm a`           | 12:08 PM |
                                              | `hh 'o''clock' a, zzzz` | 12 o'clock PM, Pacific Daylight Time |
                                              | `K:mm a, z`             | 0:08 PM, PDT |
                                              | `yyyyy.MMMMM.dd GGG hh:mm aaa` | 02001.July.04 AD 12:08 PM |
                                              | `EEE, d MMM yyyy HH:mm:ss Z`  | Wed, 4 Jul 2001 12:08:56 -0700 |
                                              | `yyMMddHHmmssZ`               | 010704120856-0700 |
                                              | `yyyy-MM-dd'T'HH:mm:ss.SSSZ`  | 2001-07-04T12:08:56.235-0700 |
                                              | `yyyy-MM-dd'T'HH:mm:ss.SSSXXX` | 2001-07-04T12:08:56.235-07:00 |
                                              | `YYYY-'W'ww-u`                 | 2001-W27-3 |
                                            example: mm/dd/yyyy
                                      outputFormat:
                                        description: |-
                                          A string value indicating either the explicit SimpleDateFormat or the built-in named format that the data should be formatted into.

                                          *If no inputFormat is provided, the transform assumes that it is in ISO8601 format*
                                        oneOf:
                                          - title: Named Construct
                                            type: string
                                            description: |
                                              | Construct       | Date Time Pattern | Description |
                                              | ---------       | ----------------- | ----------- |
                                              | ISO8601         | `yyyy-MM-dd'T'HH:mm:ss.SSSX` | The ISO8601 standard. |          
                                              | LDAP            | `yyyyMMddHHmmss.Z`           | The LDAP standard.    |
                                              | PEOPLE_SOFT     | `MM/dd/yyyy`                 | The date format People Soft uses. |
                                              | EPOCH_TIME_JAVA | # ms from midnight, January 1st, 1970 | The incoming date value as elapsed time in milliseconds from midnight, January 1st, 1970. |
                                              | EPOCH_TIME_WIN32| # intervals of 100ns from midnight, January 1st, 1601 | The incoming date value as elapsed time in 100-nanosecond intervals from midnight, January 1st, 1601. |
                                            enum:
                                              - ISO8601
                                              - LDAP
                                              - PEOPLE_SOFT
                                              - EPOCH_TIME_JAVA
                                              - EPOCH_TIME_WIN32
                                            example: PEOPLE_SOFT
                                          - title: Java Simple Date Format
                                            type: string
                                            description: |
                                              There are a variety of date time patterns you can express using SimpleDateFormat. The following table lists examples of different date time patterns expressed in the SimpleDateFormat and how they display. Refer to the SimpleDateFormat syntax page for more information.

                                              >NOTE: The following examples show how date and time patterns are interpreted in the U.S. locale. The given date and time are 2001-07-04 12:08:56 local time in the U.S. Pacific Time time zone.
                                                (This table is from the SimpleDateFormat page.)

                                              | Date Time Pattern | Result |
                                              | ----------------- | ------ |
                                              | `yyyy.MM.dd G 'at' HH:mm:ss z` | `2001.07.04 AD at 12:08:56 PDT` |
                                              | `EEE, MMM d, ''yy` | Wed, Jul 4, '01 |
                                              | `h:mm a`           | 12:08 PM |
                                              | `hh 'o''clock' a, zzzz` | 12 o'clock PM, Pacific Daylight Time |
                                              | `K:mm a, z`             | 0:08 PM, PDT |
                                              | `yyyyy.MMMMM.dd GGG hh:mm aaa` | 02001.July.04 AD 12:08 PM |
                                              | `EEE, d MMM yyyy HH:mm:ss Z`  | Wed, 4 Jul 2001 12:08:56 -0700 |
                                              | `yyMMddHHmmssZ`               | 010704120856-0700 |
                                              | `yyyy-MM-dd'T'HH:mm:ss.SSSZ`  | 2001-07-04T12:08:56.235-0700 |
                                              | `yyyy-MM-dd'T'HH:mm:ss.SSSXXX` | 2001-07-04T12:08:56.235-07:00 |
                                              | `YYYY-'W'ww-u`                 | 2001-W27-3 |
                                            example: mm/dd/yyyy
                                      requiresPeriodicRefresh:
                                        type: boolean
                                        description: A value that indicates whether the transform logic should be re-evaluated every evening as part of the identity refresh process
                                        example: false
                                        default: false
                                        title: requiresperiodicrefresh
                                      input:
                                        type: object
                                        description: This is an optional attribute that can explicitly define the input data which will be fed into the transform logic. If input is not provided, the transform will take its input from the source and attribute combination configured via the UI.
                                        additionalProperties: true
                                        example:
                                          type: accountAttribute
                                          attributes:
                                            attributeName: first_name
                                            sourceName: Source
                                        title: input
                              secondDate:
                                description: This is the second date to consider (The date that would be on the right hand side of the comparison operation).
                                oneOf:
                                  - title: accountAttribute
                                    type: object
                                    required:
                                      - sourceName
                                      - attributeName
                                    properties:
                                      sourceName:
                                        type: string
                                        description: A reference to the source to search for the account
                                        example: Workday
                                      attributeName:
                                        type: string
                                        description: The name of the attribute on the account to return. This should match the name of the account attribute name visible in the user interface, or on the source schema.
                                        example: DEPARTMENT
                                      accountSortAttribute:
                                        type: string
                                        description: The value of this configuration is a string name of the attribute to use when determining the ordering of returned accounts when there are multiple entries
                                        example: created
                                        default: created
                                      accountSortDescending:
                                        type: boolean
                                        description: The value of this configuration is a boolean (true/false). Controls the order of the sort when there are multiple accounts. If not defined, the transform will default to false (ascending order)
                                        example: false
                                        default: false
                                      accountReturnFirstLink:
                                        type: boolean
                                        description: The value of this configuration is a boolean (true/false). Controls which account to source a value from for an attribute.  If this flag is set to true, the transform returns the value from the first account in the list, even if it is null. If it is set to false, the transform returns the first non-null value. If not defined, the transform will default to false
                                        example: false
                                        default: false
                                      accountFilter:
                                        type: string
                                        description: |-
                                          This expression queries the database to narrow search results. The value of this configuration is a sailpoint.object.Filter expression and used when searching against the database.  The default filter will always include the source and identity, and any subsequent expressions will be combined in an AND operation to the existing search criteria.
                                          Only certain searchable attributes are available:  - `nativeIdentity` - the Account ID  - `displayName` - the Account Name  - `entitlements` - a boolean value to determine if the account has entitlements
                                        example: '!(nativeIdentity.startsWith("*DELETED*"))'
                                      accountPropertyFilter:
                                        type: string
                                        description: |-
                                          This expression is used to search and filter accounts in memory. The value of this configuration is a sailpoint.object.Filter expression and used when searching against the returned resultset.

                                          All account attributes are available for filtering as this operation is performed in memory.
                                        example: (groups.containsAll({'Admin'}) || location == 'Austin')
                                      requiresPeriodicRefresh:
                                        type: boolean
                                        description: A value that indicates whether the transform logic should be re-evaluated every evening as part of the identity refresh process
                                        example: false
                                        default: false
                                        title: requiresperiodicrefresh
                                      input:
                                        type: object
                                        description: This is an optional attribute that can explicitly define the input data which will be fed into the transform logic. If input is not provided, the transform will take its input from the source and attribute combination configured via the UI.
                                        additionalProperties: true
                                        example:
                                          type: accountAttribute
                                          attributes:
                                            attributeName: first_name
                                            sourceName: Source
                                        title: input
                                  - title: dateFormat
                                    type: object
                                    properties:
                                      inputFormat:
                                        description: |-
                                          A string value indicating either the explicit SimpleDateFormat or the built-in named format that the data is coming in as.

                                          *If no inputFormat is provided, the transform assumes that it is in ISO8601 format*
                                        oneOf:
                                          - title: Named Construct
                                            type: string
                                            description: |
                                              | Construct       | Date Time Pattern | Description |
                                              | ---------       | ----------------- | ----------- |
                                              | ISO8601         | `yyyy-MM-dd'T'HH:mm:ss.SSSX` | The ISO8601 standard. |          
                                              | LDAP            | `yyyyMMddHHmmss.Z`           | The LDAP standard.    |
                                              | PEOPLE_SOFT     | `MM/dd/yyyy`                 | The date format People Soft uses. |
                                              | EPOCH_TIME_JAVA | # ms from midnight, January 1st, 1970 | The incoming date value as elapsed time in milliseconds from midnight, January 1st, 1970. |
                                              | EPOCH_TIME_WIN32| # intervals of 100ns from midnight, January 1st, 1601 | The incoming date value as elapsed time in 100-nanosecond intervals from midnight, January 1st, 1601. |
                                            enum:
                                              - ISO8601
                                              - LDAP
                                              - PEOPLE_SOFT
                                              - EPOCH_TIME_JAVA
                                              - EPOCH_TIME_WIN32
                                            example: PEOPLE_SOFT
                                          - title: Java Simple Date Format
                                            type: string
                                            description: |
                                              There are a variety of date time patterns you can express using SimpleDateFormat. The following table lists examples of different date time patterns expressed in the SimpleDateFormat and how they display. Refer to the SimpleDateFormat syntax page for more information.

                                              >NOTE: The following examples show how date and time patterns are interpreted in the U.S. locale. The given date and time are 2001-07-04 12:08:56 local time in the U.S. Pacific Time time zone.
                                                (This table is from the SimpleDateFormat page.)

                                              | Date Time Pattern | Result |
                                              | ----------------- | ------ |
                                              | `yyyy.MM.dd G 'at' HH:mm:ss z` | `2001.07.04 AD at 12:08:56 PDT` |
                                              | `EEE, MMM d, ''yy` | Wed, Jul 4, '01 |
                                              | `h:mm a`           | 12:08 PM |
                                              | `hh 'o''clock' a, zzzz` | 12 o'clock PM, Pacific Daylight Time |
                                              | `K:mm a, z`             | 0:08 PM, PDT |
                                              | `yyyyy.MMMMM.dd GGG hh:mm aaa` | 02001.July.04 AD 12:08 PM |
                                              | `EEE, d MMM yyyy HH:mm:ss Z`  | Wed, 4 Jul 2001 12:08:56 -0700 |
                                              | `yyMMddHHmmssZ`               | 010704120856-0700 |
                                              | `yyyy-MM-dd'T'HH:mm:ss.SSSZ`  | 2001-07-04T12:08:56.235-0700 |
                                              | `yyyy-MM-dd'T'HH:mm:ss.SSSXXX` | 2001-07-04T12:08:56.235-07:00 |
                                              | `YYYY-'W'ww-u`                 | 2001-W27-3 |
                                            example: mm/dd/yyyy
                                      outputFormat:
                                        description: |-
                                          A string value indicating either the explicit SimpleDateFormat or the built-in named format that the data should be formatted into.

                                          *If no inputFormat is provided, the transform assumes that it is in ISO8601 format*
                                        oneOf:
                                          - title: Named Construct
                                            type: string
                                            description: |
                                              | Construct       | Date Time Pattern | Description |
                                              | ---------       | ----------------- | ----------- |
                                              | ISO8601         | `yyyy-MM-dd'T'HH:mm:ss.SSSX` | The ISO8601 standard. |          
                                              | LDAP            | `yyyyMMddHHmmss.Z`           | The LDAP standard.    |
                                              | PEOPLE_SOFT     | `MM/dd/yyyy`                 | The date format People Soft uses. |
                                              | EPOCH_TIME_JAVA | # ms from midnight, January 1st, 1970 | The incoming date value as elapsed time in milliseconds from midnight, January 1st, 1970. |
                                              | EPOCH_TIME_WIN32| # intervals of 100ns from midnight, January 1st, 1601 | The incoming date value as elapsed time in 100-nanosecond intervals from midnight, January 1st, 1601. |
                                            enum:
                                              - ISO8601
                                              - LDAP
                                              - PEOPLE_SOFT
                                              - EPOCH_TIME_JAVA
                                              - EPOCH_TIME_WIN32
                                            example: PEOPLE_SOFT
                                          - title: Java Simple Date Format
                                            type: string
                                            description: |
                                              There are a variety of date time patterns you can express using SimpleDateFormat. The following table lists examples of different date time patterns expressed in the SimpleDateFormat and how they display. Refer to the SimpleDateFormat syntax page for more information.

                                              >NOTE: The following examples show how date and time patterns are interpreted in the U.S. locale. The given date and time are 2001-07-04 12:08:56 local time in the U.S. Pacific Time time zone.
                                                (This table is from the SimpleDateFormat page.)

                                              | Date Time Pattern | Result |
                                              | ----------------- | ------ |
                                              | `yyyy.MM.dd G 'at' HH:mm:ss z` | `2001.07.04 AD at 12:08:56 PDT` |
                                              | `EEE, MMM d, ''yy` | Wed, Jul 4, '01 |
                                              | `h:mm a`           | 12:08 PM |
                                              | `hh 'o''clock' a, zzzz` | 12 o'clock PM, Pacific Daylight Time |
                                              | `K:mm a, z`             | 0:08 PM, PDT |
                                              | `yyyyy.MMMMM.dd GGG hh:mm aaa` | 02001.July.04 AD 12:08 PM |
                                              | `EEE, d MMM yyyy HH:mm:ss Z`  | Wed, 4 Jul 2001 12:08:56 -0700 |
                                              | `yyMMddHHmmssZ`               | 010704120856-0700 |
                                              | `yyyy-MM-dd'T'HH:mm:ss.SSSZ`  | 2001-07-04T12:08:56.235-0700 |
                                              | `yyyy-MM-dd'T'HH:mm:ss.SSSXXX` | 2001-07-04T12:08:56.235-07:00 |
                                              | `YYYY-'W'ww-u`                 | 2001-W27-3 |
                                            example: mm/dd/yyyy
                                      requiresPeriodicRefresh:
                                        type: boolean
                                        description: A value that indicates whether the transform logic should be re-evaluated every evening as part of the identity refresh process
                                        example: false
                                        default: false
                                        title: requiresperiodicrefresh
                                      input:
                                        type: object
                                        description: This is an optional attribute that can explicitly define the input data which will be fed into the transform logic. If input is not provided, the transform will take its input from the source and attribute combination configured via the UI.
                                        additionalProperties: true
                                        example:
                                          type: accountAttribute
                                          attributes:
                                            attributeName: first_name
                                            sourceName: Source
                                        title: input
                              operator:
                                type: string
                                description: |
                                  This is the comparison to perform.
                                  | Operation | Description |
                                  | --------- | ------- |
                                  | LT        | Strictly less than: `firstDate < secondDate` |
                                  | LTE       | Less than or equal to: `firstDate <= secondDate` |
                                  | GT        | Strictly greater than: `firstDate > secondDate` |
                                  | GTE       | Greater than or equal to: `firstDate >= secondDate` |
                                enum:
                                  - LT
                                  - LTE
                                  - GT
                                  - GTE
                                example: LT
                              positiveCondition:
                                type: string
                                description: The output of the transform if the expression evalutes to true
                                example: 'true'
                              negativeCondition:
                                type: string
                                description: The output of the transform if the expression evalutes to false
                                example: false
                              requiresPeriodicRefresh:
                                type: boolean
                                description: A value that indicates whether the transform logic should be re-evaluated every evening as part of the identity refresh process
                                example: false
                                default: false
                                title: requiresperiodicrefresh
                              input:
                                type: object
                                description: This is an optional attribute that can explicitly define the input data which will be fed into the transform logic. If input is not provided, the transform will take its input from the source and attribute combination configured via the UI.
                                additionalProperties: true
                                example:
                                  type: accountAttribute
                                  attributes:
                                    attributeName: first_name
                                    sourceName: Source
                                title: input
                          - title: dateFormat
                            type: object
                            properties:
                              inputFormat:
                                description: |-
                                  A string value indicating either the explicit SimpleDateFormat or the built-in named format that the data is coming in as.

                                  *If no inputFormat is provided, the transform assumes that it is in ISO8601 format*
                                oneOf:
                                  - title: Named Construct
                                    type: string
                                    description: |
                                      | Construct       | Date Time Pattern | Description |
                                      | ---------       | ----------------- | ----------- |
                                      | ISO8601         | `yyyy-MM-dd'T'HH:mm:ss.SSSX` | The ISO8601 standard. |          
                                      | LDAP            | `yyyyMMddHHmmss.Z`           | The LDAP standard.    |
                                      | PEOPLE_SOFT     | `MM/dd/yyyy`                 | The date format People Soft uses. |
                                      | EPOCH_TIME_JAVA | # ms from midnight, January 1st, 1970 | The incoming date value as elapsed time in milliseconds from midnight, January 1st, 1970. |
                                      | EPOCH_TIME_WIN32| # intervals of 100ns from midnight, January 1st, 1601 | The incoming date value as elapsed time in 100-nanosecond intervals from midnight, January 1st, 1601. |
                                    enum:
                                      - ISO8601
                                      - LDAP
                                      - PEOPLE_SOFT
                                      - EPOCH_TIME_JAVA
                                      - EPOCH_TIME_WIN32
                                    example: PEOPLE_SOFT
                                  - title: Java Simple Date Format
                                    type: string
                                    description: |
                                      There are a variety of date time patterns you can express using SimpleDateFormat. The following table lists examples of different date time patterns expressed in the SimpleDateFormat and how they display. Refer to the SimpleDateFormat syntax page for more information.

                                      >NOTE: The following examples show how date and time patterns are interpreted in the U.S. locale. The given date and time are 2001-07-04 12:08:56 local time in the U.S. Pacific Time time zone.
                                        (This table is from the SimpleDateFormat page.)

                                      | Date Time Pattern | Result |
                                      | ----------------- | ------ |
                                      | `yyyy.MM.dd G 'at' HH:mm:ss z` | `2001.07.04 AD at 12:08:56 PDT` |
                                      | `EEE, MMM d, ''yy` | Wed, Jul 4, '01 |
                                      | `h:mm a`           | 12:08 PM |
                                      | `hh 'o''clock' a, zzzz` | 12 o'clock PM, Pacific Daylight Time |
                                      | `K:mm a, z`             | 0:08 PM, PDT |
                                      | `yyyyy.MMMMM.dd GGG hh:mm aaa` | 02001.July.04 AD 12:08 PM |
                                      | `EEE, d MMM yyyy HH:mm:ss Z`  | Wed, 4 Jul 2001 12:08:56 -0700 |
                                      | `yyMMddHHmmssZ`               | 010704120856-0700 |
                                      | `yyyy-MM-dd'T'HH:mm:ss.SSSZ`  | 2001-07-04T12:08:56.235-0700 |
                                      | `yyyy-MM-dd'T'HH:mm:ss.SSSXXX` | 2001-07-04T12:08:56.235-07:00 |
                                      | `YYYY-'W'ww-u`                 | 2001-W27-3 |
                                    example: mm/dd/yyyy
                              outputFormat:
                                description: |-
                                  A string value indicating either the explicit SimpleDateFormat or the built-in named format that the data should be formatted into.

                                  *If no inputFormat is provided, the transform assumes that it is in ISO8601 format*
                                oneOf:
                                  - title: Named Construct
                                    type: string
                                    description: |
                                      | Construct       | Date Time Pattern | Description |
                                      | ---------       | ----------------- | ----------- |
                                      | ISO8601         | `yyyy-MM-dd'T'HH:mm:ss.SSSX` | The ISO8601 standard. |          
                                      | LDAP            | `yyyyMMddHHmmss.Z`           | The LDAP standard.    |
                                      | PEOPLE_SOFT     | `MM/dd/yyyy`                 | The date format People Soft uses. |
                                      | EPOCH_TIME_JAVA | # ms from midnight, January 1st, 1970 | The incoming date value as elapsed time in milliseconds from midnight, January 1st, 1970. |
                                      | EPOCH_TIME_WIN32| # intervals of 100ns from midnight, January 1st, 1601 | The incoming date value as elapsed time in 100-nanosecond intervals from midnight, January 1st, 1601. |
                                    enum:
                                      - ISO8601
                                      - LDAP
                                      - PEOPLE_SOFT
                                      - EPOCH_TIME_JAVA
                                      - EPOCH_TIME_WIN32
                                    example: PEOPLE_SOFT
                                  - title: Java Simple Date Format
                                    type: string
                                    description: |
                                      There are a variety of date time patterns you can express using SimpleDateFormat. The following table lists examples of different date time patterns expressed in the SimpleDateFormat and how they display. Refer to the SimpleDateFormat syntax page for more information.

                                      >NOTE: The following examples show how date and time patterns are interpreted in the U.S. locale. The given date and time are 2001-07-04 12:08:56 local time in the U.S. Pacific Time time zone.
                                        (This table is from the SimpleDateFormat page.)

                                      | Date Time Pattern | Result |
                                      | ----------------- | ------ |
                                      | `yyyy.MM.dd G 'at' HH:mm:ss z` | `2001.07.04 AD at 12:08:56 PDT` |
                                      | `EEE, MMM d, ''yy` | Wed, Jul 4, '01 |
                                      | `h:mm a`           | 12:08 PM |
                                      | `hh 'o''clock' a, zzzz` | 12 o'clock PM, Pacific Daylight Time |
                                      | `K:mm a, z`             | 0:08 PM, PDT |
                                      | `yyyyy.MMMMM.dd GGG hh:mm aaa` | 02001.July.04 AD 12:08 PM |
                                      | `EEE, d MMM yyyy HH:mm:ss Z`  | Wed, 4 Jul 2001 12:08:56 -0700 |
                                      | `yyMMddHHmmssZ`               | 010704120856-0700 |
                                      | `yyyy-MM-dd'T'HH:mm:ss.SSSZ`  | 2001-07-04T12:08:56.235-0700 |
                                      | `yyyy-MM-dd'T'HH:mm:ss.SSSXXX` | 2001-07-04T12:08:56.235-07:00 |
                                      | `YYYY-'W'ww-u`                 | 2001-W27-3 |
                                    example: mm/dd/yyyy
                              requiresPeriodicRefresh:
                                type: boolean
                                description: A value that indicates whether the transform logic should be re-evaluated every evening as part of the identity refresh process
                                example: false
                                default: false
                                title: requiresperiodicrefresh
                              input:
                                type: object
                                description: This is an optional attribute that can explicitly define the input data which will be fed into the transform logic. If input is not provided, the transform will take its input from the source and attribute combination configured via the UI.
                                additionalProperties: true
                                example:
                                  type: accountAttribute
                                  attributes:
                                    attributeName: first_name
                                    sourceName: Source
                                title: input
                          - title: dateMath
                            type: object
                            required:
                              - expression
                            properties:
                              expression:
                                type: string
                                description: |
                                  A string value of the date and time components to operation on, along with the math operations to execute.
                                externalDocs:
                                  description: Date Math Expressions
                                  url: https://developer.sailpoint.com/docs/extensibility/transforms/operations/date-math#transform-structure
                                example: now+1w
                              roundUp:
                                type: boolean
                                description: |
                                  A boolean value to indicate whether the transform should round up or down when a rounding `/` operation is defined in the expression. 


                                  If not provided, the transform will default to `false`


                                  `true` indicates the transform should round up (i.e., truncate the fractional date/time component indicated and then add one unit of that component)


                                  `false` indicates the transform should round down (i.e., truncate the fractional date/time component indicated)
                                example: false
                                default: false
                              requiresPeriodicRefresh:
                                type: boolean
                                description: A value that indicates whether the transform logic should be re-evaluated every evening as part of the identity refresh process
                                example: false
                                default: false
                                title: requiresperiodicrefresh
                              input:
                                type: object
                                description: This is an optional attribute that can explicitly define the input data which will be fed into the transform logic. If input is not provided, the transform will take its input from the source and attribute combination configured via the UI.
                                additionalProperties: true
                                example:
                                  type: accountAttribute
                                  attributes:
                                    attributeName: first_name
                                    sourceName: Source
                                title: input
                          - title: decomposeDiacriticalMarks
                            type: object
                            properties:
                              requiresPeriodicRefresh:
                                type: boolean
                                description: A value that indicates whether the transform logic should be re-evaluated every evening as part of the identity refresh process
                                example: false
                                default: false
                                title: requiresperiodicrefresh
                              input:
                                type: object
                                description: This is an optional attribute that can explicitly define the input data which will be fed into the transform logic. If input is not provided, the transform will take its input from the source and attribute combination configured via the UI.
                                additionalProperties: true
                                example:
                                  type: accountAttribute
                                  attributes:
                                    attributeName: first_name
                                    sourceName: Source
                                title: input
                          - title: e164phone
                            type: object
                            properties:
                              defaultRegion:
                                type: string
                                description: |
                                  This is an optional attribute that can be used to define the region of the phone number to format into.


                                  If defaultRegion is not provided, it will take US as the default country.


                                  The format of the country code should be in [ISO 3166-1 alpha-2 format](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)
                                example: US
                              requiresPeriodicRefresh:
                                type: boolean
                                description: A value that indicates whether the transform logic should be re-evaluated every evening as part of the identity refresh process
                                example: false
                                default: false
                                title: requiresperiodicrefresh
                              input:
                                type: object
                                description: This is an optional attribute that can explicitly define the input data which will be fed into the transform logic. If input is not provided, the transform will take its input from the source and attribute combination configured via the UI.
                                additionalProperties: true
                                example:
                                  type: accountAttribute
                                  attributes:
                                    attributeName: first_name
                                    sourceName: Source
                                title: input
                          - title: firstValid
                            type: object
                            required:
                              - values
                            properties:
                              values:
                                type: array
                                items:
                                  type: object
                                description: An array of attributes to evaluate for existence.
                                example:
                                  - attributes:
                                      sourceName: Active Directory
                                      attributeName: sAMAccountName
                                    type: accountAttribute
                                  - attributes:
                                      sourceName: Okta
                                      attributeName: login
                                    type: accountAttribute
                                  - attributes:
                                      sourceName: HR Source
                                      attributeName: employeeID
                                    type: accountAttribute
                              ignoreErrors:
                                type: boolean
                                description: a true or false value representing to move on to the next option if an error (like an Null Pointer Exception) were to occur.
                                example: false
                                default: false
                              requiresPeriodicRefresh:
                                type: boolean
                                description: A value that indicates whether the transform logic should be re-evaluated every evening as part of the identity refresh process
                                example: false
                                default: false
                                title: requiresperiodicrefresh
                          - title: rule
                            oneOf:
                              - type: object
                                required:
                                  - name
                                properties:
                                  name:
                                    type: string
                                    description: This is the name of the Transform rule that needs to be invoked by the transform
                                    example: Transform Calculation Rule
                                  requiresPeriodicRefresh:
                                    type: boolean
                                    description: A value that indicates whether the transform logic should be re-evaluated every evening as part of the identity refresh process
                                    example: false
                                    default: false
                                    title: requiresperiodicrefresh
                                title: transformrule
                              - type: object
                                required:
                                  - name
                                  - operation
                                  - includeNumbers
                                  - includeSpecialChars
                                  - length
                                properties:
                                  name:
                                    type: string
                                    description: This must always be set to "Cloud Services Deployment Utility"
                                    example: Cloud Services Deployment Utility
                                  operation:
                                    type: string
                                    description: The operation to perform `generateRandomString`
                                    example: generateRandomString
                                  includeNumbers:
                                    type: boolean
                                    description: This must be either "true" or "false" to indicate whether the generator logic should include numbers
                                    example: true
                                  includeSpecialChars:
                                    type: boolean
                                    description: This must be either "true" or "false" to indicate whether the generator logic should include special characters
                                    example: true
                                  length:
                                    type: string
                                    description: |
                                      This specifies how long the randomly generated string needs to be


                                      >NOTE Due to identity attribute data constraints, the maximum allowable value is 450 characters
                                    example: '10'
                                  requiresPeriodicRefresh:
                                    type: boolean
                                    description: A value that indicates whether the transform logic should be re-evaluated every evening as part of the identity refresh process
                                    example: false
                                title: generaterandomstring
                              - type: object
                                required:
                                  - name
                                  - operation
                                  - uid
                                properties:
                                  name:
                                    type: string
                                    description: This must always be set to "Cloud Services Deployment Utility"
                                    example: Cloud Services Deployment Utility
                                  operation:
                                    type: string
                                    description: The operation to perform `getReferenceIdentityAttribute`
                                    example: getReferenceIdentityAttribute
                                  uid:
                                    type: string
                                    description: |
                                      This is the SailPoint User Name (uid) value of the identity whose attribute is desired

                                      As a convenience feature, you can use the `manager` keyword to dynamically look up the user's manager and then get that manager's identity attribute.
                                    example: 2c91808570313110017040b06f344ec9
                                  requiresPeriodicRefresh:
                                    type: boolean
                                    description: A value that indicates whether the transform logic should be re-evaluated every evening as part of the identity refresh process
                                    example: false
                                title: getreferenceidentityattribute
                          - title: identityAttribute
                            type: object
                            required:
                              - name
                            properties:
                              name:
                                type: string
                                description: The system (camel-cased) name of the identity attribute to bring in
                                example: email
                              requiresPeriodicRefresh:
                                type: boolean
                                description: A value that indicates whether the transform logic should be re-evaluated every evening as part of the identity refresh process
                                example: false
                                default: false
                                title: requiresperiodicrefresh
                              input:
                                type: object
                                description: This is an optional attribute that can explicitly define the input data which will be fed into the transform logic. If input is not provided, the transform will take its input from the source and attribute combination configured via the UI.
                                additionalProperties: true
                                example:
                                  type: accountAttribute
                                  attributes:
                                    attributeName: first_name
                                    sourceName: Source
                                title: input
                          - title: indexOf
                            type: object
                            required:
                              - substring
                            properties:
                              substring:
                                type: string
                                description: A substring to search for, searches the entire calling string, and returns the index of the first occurrence of the specified substring.
                                example: admin_
                              requiresPeriodicRefresh:
                                type: boolean
                                description: A value that indicates whether the transform logic should be re-evaluated every evening as part of the identity refresh process
                                example: false
                                default: false
                                title: requiresperiodicrefresh
                              input:
                                type: object
                                description: This is an optional attribute that can explicitly define the input data which will be fed into the transform logic. If input is not provided, the transform will take its input from the source and attribute combination configured via the UI.
                                additionalProperties: true
                                example:
                                  type: accountAttribute
                                  attributes:
                                    attributeName: first_name
                                    sourceName: Source
                                title: input
                          - title: iso3166
                            type: object
                            properties:
                              format:
                                type: string
                                description: |
                                  An optional value to denote which ISO 3166 format to return. Valid values are:


                                  `alpha2` - Two-character country code (e.g., "US"); this is the default value if no format is supplied


                                  `alpha3` - Three-character country code (e.g., "USA")


                                  `numeric` - The numeric country code (e.g., "840")
                                example: alpha2
                              requiresPeriodicRefresh:
                                type: boolean
                                description: A value that indicates whether the transform logic should be re-evaluated every evening as part of the identity refresh process
                                example: false
                                default: false
                                title: requiresperiodicrefresh
                              input:
                                type: object
                                description: This is an optional attribute that can explicitly define the input data which will be fed into the transform logic. If input is not provided, the transform will take its input from the source and attribute combination configured via the UI.
                                additionalProperties: true
                                example:
                                  type: accountAttribute
                                  attributes:
                                    attributeName: first_name
                                    sourceName: Source
                                title: input
                          - title: leftPad
                            type: object
                            required:
                              - length
                            properties:
                              length:
                                type: string
                                description: An integer value for the desired length of the final output string
                                example: '4'
                              padding:
                                type: string
                                description: |
                                  A string value representing the character that the incoming data should be padded with to get to the desired length


                                  If not provided, the transform will default to a single space (" ") character for padding
                                example: '0'
                              requiresPeriodicRefresh:
                                type: boolean
                                description: A value that indicates whether the transform logic should be re-evaluated every evening as part of the identity refresh process
                                example: false
                                default: false
                                title: requiresperiodicrefresh
                              input:
                                type: object
                                description: This is an optional attribute that can explicitly define the input data which will be fed into the transform logic. If input is not provided, the transform will take its input from the source and attribute combination configured via the UI.
                                additionalProperties: true
                                example:
                                  type: accountAttribute
                                  attributes:
                                    attributeName: first_name
                                    sourceName: Source
                                title: input
                          - title: lookup
                            type: object
                            required:
                              - table
                            properties:
                              table:
                                type: object
                                additionalProperties: true
                                description: |
                                  This is a JSON object of key-value pairs. The key is the string that will attempt to be matched to the input, and the value is the output string that should be returned if the key is matched


                                  >**Note** the use of the optional default key value here; if none of the three countries in the above example match the input string, the transform will return "Unknown Region" for the attribute that is mapped to this transform.
                                example:
                                  USA: Americas
                                  FRA: EMEA
                                  AUS: APAC
                                  default: Unknown Region
                              requiresPeriodicRefresh:
                                type: boolean
                                description: A value that indicates whether the transform logic should be re-evaluated every evening as part of the identity refresh process
                                example: false
                                default: false
                                title: requiresperiodicrefresh
                              input:
                                type: object
                                description: This is an optional attribute that can explicitly define the input data which will be fed into the transform logic. If input is not provided, the transform will take its input from the source and attribute combination configured via the UI.
                                additionalProperties: true
                                example:
                                  type: accountAttribute
                                  attributes:
                                    attributeName: first_name
                                    sourceName: Source
                                title: input
                          - title: lower
                            type: object
                            properties:
                              requiresPeriodicRefresh:
                                type: boolean
                                description: A value that indicates whether the transform logic should be re-evaluated every evening as part of the identity refresh process
                                example: false
                                default: false
                                title: requiresperiodicrefresh
                              input:
                                type: object
                                description: This is an optional attribute that can explicitly define the input data which will be fed into the transform logic. If input is not provided, the transform will take its input from the source and attribute combination configured via the UI.
                                additionalProperties: true
                                example:
                                  type: accountAttribute
                                  attributes:
                                    attributeName: first_name
                                    sourceName: Source
                                title: input
                          - title: nameNormalizer
                            type: object
                            properties:
                              requiresPeriodicRefresh:
                                type: boolean
                                description: A value that indicates whether the transform logic should be re-evaluated every evening as part of the identity refresh process
                                example: false
                                default: false
                                title: requiresperiodicrefresh
                              input:
                                type: object
                                description: This is an optional attribute that can explicitly define the input data which will be fed into the transform logic. If input is not provided, the transform will take its input from the source and attribute combination configured via the UI.
                                additionalProperties: true
                                example:
                                  type: accountAttribute
                                  attributes:
                                    attributeName: first_name
                                    sourceName: Source
                                title: input
                          - title: randomAlphaNumeric
                            type: object
                            properties:
                              length:
                                type: string
                                description: |
                                  This is an integer value specifying the size/number of characters the random string must contain


                                  * This value must be a positive number and cannot be blank


                                  * If no length is provided, the transform will default to a value of `32`


                                  * Due to identity attribute data constraints, the maximum allowable value is `450` characters
                                example: '10'
                              requiresPeriodicRefresh:
                                type: boolean
                                description: A value that indicates whether the transform logic should be re-evaluated every evening as part of the identity refresh process
                                example: false
                                default: false
                                title: requiresperiodicrefresh
                              input:
                                type: object
                                description: This is an optional attribute that can explicitly define the input data which will be fed into the transform logic. If input is not provided, the transform will take its input from the source and attribute combination configured via the UI.
                                additionalProperties: true
                                example:
                                  type: accountAttribute
                                  attributes:
                                    attributeName: first_name
                                    sourceName: Source
                                title: input
                          - title: randomNumeric
                            type: object
                            properties:
                              length:
                                type: string
                                description: |
                                  This is an integer value specifying the size/number of characters the random string must contain


                                  * This value must be a positive number and cannot be blank


                                  * If no length is provided, the transform will default to a value of `32`


                                  * Due to identity attribute data constraints, the maximum allowable value is `450` characters
                                example: '10'
                              requiresPeriodicRefresh:
                                type: boolean
                                description: A value that indicates whether the transform logic should be re-evaluated every evening as part of the identity refresh process
                                example: false
                                default: false
                                title: requiresperiodicrefresh
                              input:
                                type: object
                                description: This is an optional attribute that can explicitly define the input data which will be fed into the transform logic. If input is not provided, the transform will take its input from the source and attribute combination configured via the UI.
                                additionalProperties: true
                                example:
                                  type: accountAttribute
                                  attributes:
                                    attributeName: first_name
                                    sourceName: Source
                                title: input
                          - title: reference
                            type: object
                            required:
                              - id
                            properties:
                              id:
                                type: string
                                description: This ID specifies the name of the pre-existing transform which you want to use within your current transform
                                example: Existing Transform
                              requiresPeriodicRefresh:
                                type: boolean
                                description: A value that indicates whether the transform logic should be re-evaluated every evening as part of the identity refresh process
                                example: false
                                default: false
                                title: requiresperiodicrefresh
                              input:
                                type: object
                                description: This is an optional attribute that can explicitly define the input data which will be fed into the transform logic. If input is not provided, the transform will take its input from the source and attribute combination configured via the UI.
                                additionalProperties: true
                                example:
                                  type: accountAttribute
                                  attributes:
                                    attributeName: first_name
                                    sourceName: Source
                                title: input
                          - title: replaceAll
                            type: object
                            required:
                              - table
                            properties:
                              table:
                                type: object
                                additionalProperties: true
                                description: An attribute of key-value pairs. Each pair identifies the pattern to search for as its key, and the replacement string as its value.
                                example:
                                  '-': ' '
                                  '"': ''''
                                  ñ: 'n'
                              requiresPeriodicRefresh:
                                type: boolean
                                description: A value that indicates whether the transform logic should be re-evaluated every evening as part of the identity refresh process
                                example: false
                                default: false
                                title: requiresperiodicrefresh
                              input:
                                type: object
                                description: This is an optional attribute that can explicitly define the input data which will be fed into the transform logic. If input is not provided, the transform will take its input from the source and attribute combination configured via the UI.
                                additionalProperties: true
                                example:
                                  type: accountAttribute
                                  attributes:
                                    attributeName: first_name
                                    sourceName: Source
                                title: input
                          - title: replace
                            type: object
                            required:
                              - regex
                              - replacement
                            properties:
                              regex:
                                type: string
                                description: This can be a string or a regex pattern in which you want to replace.
                                example: '[^a-zA-Z]'
                                externalDocs:
                                  description: Regex Builder
                                  url: https://regex101.com/
                              replacement:
                                type: string
                                description: This is the replacement string that should be substituded wherever the string or pattern is found.
                                example: ' '
                              requiresPeriodicRefresh:
                                type: boolean
                                description: A value that indicates whether the transform logic should be re-evaluated every evening as part of the identity refresh process
                                example: false
                                default: false
                                title: requiresperiodicrefresh
                              input:
                                type: object
                                description: This is an optional attribute that can explicitly define the input data which will be fed into the transform logic. If input is not provided, the transform will take its input from the source and attribute combination configured via the UI.
                                additionalProperties: true
                                example:
                                  type: accountAttribute
                                  attributes:
                                    attributeName: first_name
                                    sourceName: Source
                                title: input
                          - title: rightPad
                            type: object
                            required:
                              - length
                            properties:
                              length:
                                type: string
                                description: An integer value for the desired length of the final output string
                                example: '4'
                              padding:
                                type: string
                                description: |
                                  A string value representing the character that the incoming data should be padded with to get to the desired length


                                  If not provided, the transform will default to a single space (" ") character for padding
                                example: '0'
                              requiresPeriodicRefresh:
                                type: boolean
                                description: A value that indicates whether the transform logic should be re-evaluated every evening as part of the identity refresh process
                                example: false
                                default: false
                                title: requiresperiodicrefresh
                              input:
                                type: object
                                description: This is an optional attribute that can explicitly define the input data which will be fed into the transform logic. If input is not provided, the transform will take its input from the source and attribute combination configured via the UI.
                                additionalProperties: true
                                example:
                                  type: accountAttribute
                                  attributes:
                                    attributeName: first_name
                                    sourceName: Source
                                title: input
                          - title: split
                            type: object
                            required:
                              - delimiter
                              - index
                            properties:
                              delimiter:
                                type: string
                                description: This can be either a single character or a regex expression, and is used by the transform to identify the break point between two substrings in the incoming data
                                example: ','
                              index:
                                type: string
                                description: An integer value for the desired array element after the incoming data has been split into a list; the array is a 0-based object, so the first array element would be index 0, the second element would be index 1, etc.
                                example: '5'
                              throws:
                                type: boolean
                                description: |
                                  A boolean (true/false) value which indicates whether an exception should be thrown and returned as an output when an index is out of bounds with the resultant array (i.e., the provided index value is larger than the size of the array)


                                  `true` - The transform should return "IndexOutOfBoundsException"


                                  `false` - The transform should return null


                                  If not provided, the transform will default to false and return a null
                                example: true
                                default: false
                              requiresPeriodicRefresh:
                                type: boolean
                                description: A value that indicates whether the transform logic should be re-evaluated every evening as part of the identity refresh process
                                example: false
                                default: false
                                title: requiresperiodicrefresh
                              input:
                                type: object
                                description: This is an optional attribute that can explicitly define the input data which will be fed into the transform logic. If input is not provided, the transform will take its input from the source and attribute combination configured via the UI.
                                additionalProperties: true
                                example:
                                  type: accountAttribute
                                  attributes:
                                    attributeName: first_name
                                    sourceName: Source
                                title: input
                          - title: static
                            type: object
                            required:
                              - values
                            properties:
                              values:
                                type: string
                                description: This must evaluate to a JSON string, either through a fixed value or through conditional logic using the Apache Velocity Template Language.
                                example: string$variable
                                externalDocs:
                                  description: Static Transform Documentation
                                  url: https://developer.sailpoint.com/docs/extensibility/transforms/operations/static
                              requiresPeriodicRefresh:
                                type: boolean
                                description: A value that indicates whether the transform logic should be re-evaluated every evening as part of the identity refresh process
                                example: false
                                default: false
                                title: requiresperiodicrefresh
                          - title: substring
                            type: object
                            required:
                              - begin
                            properties:
                              begin:
                                type: integer
                                description: |
                                  The index of the first character to include in the returned substring.


                                  If `begin` is set to -1, the transform will begin at character 0 of the input data
                                example: 1
                                format: int32
                              beginOffset:
                                type: integer
                                description: |
                                  This integer value is the number of characters to add to the begin attribute when returning a substring. 

                                  This attribute is only used if begin is not -1.
                                example: 3
                                format: int32
                              end:
                                type: integer
                                description: |
                                  The index of the first character to exclude from the returned substring.

                                  If end is -1 or not provided at all, the substring transform will return everything up to the end of the input string.
                                example: 6
                                format: int32
                              endOffset:
                                type: integer
                                description: |
                                  This integer value is the number of characters to add to the end attribute when returning a substring. 

                                  This attribute is only used if end is provided and is not -1.
                                example: 1
                                format: int32
                              requiresPeriodicRefresh:
                                type: boolean
                                description: A value that indicates whether the transform logic should be re-evaluated every evening as part of the identity refresh process
                                example: false
                                default: false
                                title: requiresperiodicrefresh
                              input:
                                type: object
                                description: This is an optional attribute that can explicitly define the input data which will be fed into the transform logic. If input is not provided, the transform will take its input from the source and attribute combination configured via the UI.
                                additionalProperties: true
                                example:
                                  type: accountAttribute
                                  attributes:
                                    attributeName: first_name
                                    sourceName: Source
                                title: input
                          - title: trim
                            type: object
                            properties:
                              requiresPeriodicRefresh:
                                type: boolean
                                description: A value that indicates whether the transform logic should be re-evaluated every evening as part of the identity refresh process
                                example: false
                                default: false
                                title: requiresperiodicrefresh
                              input:
                                type: object
                                description: This is an optional attribute that can explicitly define the input data which will be fed into the transform logic. If input is not provided, the transform will take its input from the source and attribute combination configured via the UI.
                                additionalProperties: true
                                example:
                                  type: accountAttribute
                                  attributes:
                                    attributeName: first_name
                                    sourceName: Source
                                title: input
                          - title: upper
                            type: object
                            properties:
                              requiresPeriodicRefresh:
                                type: boolean
                                description: A value that indicates whether the transform logic should be re-evaluated every evening as part of the identity refresh process
                                example: false
                                default: false
                                title: requiresperiodicrefresh
                              input:
                                type: object
                                description: This is an optional attribute that can explicitly define the input data which will be fed into the transform logic. If input is not provided, the transform will take its input from the source and attribute combination configured via the UI.
                                additionalProperties: true
                                example:
                                  type: accountAttribute
                                  attributes:
                                    attributeName: first_name
                                    sourceName: Source
                                title: input
                          - title: uuid
                            type: object
                            properties:
                              requiresPeriodicRefresh:
                                type: boolean
                                description: A value that indicates whether the transform logic should be re-evaluated every evening as part of the identity refresh process
                                example: false
                                default: false
                                title: requiresperiodicrefresh
                  - type: object
                    required:
                      - id
                      - internal
                    properties:
                      id:
                        type: string
                        description: Unique ID of this transform
                        example: 2cd78adghjkja34jh2b1hkjhasuecd
                      internal:
                        type: boolean
                        description: Indicates whether this is an internal SailPoint-created transform or a customer-created transform
                        example: false
                        default: false
                title: transformread
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
