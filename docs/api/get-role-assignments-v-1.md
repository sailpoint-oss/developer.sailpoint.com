## OpenAPI

```yaml GET /identities/v1/{identityId}/role-assignments
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
  /identities/v1/{identityId}/role-assignments:
    get:
      description: This returns either a list of Role Assignments when querying with either a Role Id or Role Name, or a list of Role Assignment References if querying with only identity Id.
      operationId: getRoleAssignmentsV1
      security:
        - userAuth:
            - idn:identity:read
            - idn:identity-direct-report:read
            - idn:identity:manage
      parameters:
        - in: path
          name: identityId
          schema:
            type: string
          required: true
          x-sailpoint-resource-operation-id: listIdentitiesV1
          description: Identity Id to get the role assignments for
          example: ef38f94347e94562b5bb8424a56397d8
        - in: query
          name: roleId
          schema:
            type: string
          required: false
          description: Role Id to filter the role assignments with
          example: e7697a1e96d04db1ac7b0f4544915d2c
        - in: query
          name: roleName
          schema:
            type: string
          required: false
          description: Role name to filter the role assignments with
          example: Engineer
      responses:
        '200':
          description: A role assignment object
          content:
            application/json:
              schema:
                type: array
                items:
                  anyOf:
                    - type: object
                      title: Role Assignment Ref
                      properties:
                        id:
                          type: string
                          description: Assignment Id
                          example: 1cbb0705b38c4226b1334eadd8874086
                        role:
                          type: object
                          title: Base Reference Dto
                          properties:
                            type:
                              description: DTO type
                              type: string
                              enum:
                                - ACCOUNT_CORRELATION_CONFIG
                                - ACCESS_PROFILE
                                - ACCESS_REQUEST_APPROVAL
                                - ACCOUNT
                                - APPLICATION
                                - CAMPAIGN
                                - CAMPAIGN_FILTER
                                - CERTIFICATION
                                - CLUSTER
                                - CONNECTOR_SCHEMA
                                - ENTITLEMENT
                                - GOVERNANCE_GROUP
                                - IDENTITY
                                - IDENTITY_PROFILE
                                - IDENTITY_REQUEST
                                - MACHINE_IDENTITY
                                - LIFECYCLE_STATE
                                - PASSWORD_POLICY
                                - ROLE
                                - RULE
                                - SOD_POLICY
                                - SOURCE
                                - TAG
                                - TAG_CATEGORY
                                - TASK_RESULT
                                - REPORT_RESULT
                                - SOD_VIOLATION
                                - ACCOUNT_ACTIVITY
                                - WORKGROUP
                              example: IDENTITY
                              title: dtotype
                            id:
                              type: string
                              description: ID of the object to which this reference applies
                              example: 2c91808568c529c60168cca6f90c1313
                            name:
                              type: string
                              description: Human-readable display name of the object to which this reference applies
                              example: William Wilson
                          description: Role Id and Name related to this assignment
                          example:
                            id: e7697a1e96d04db1ac7b0f4544915d2c
                            type: ROLE
                            name: Engineer
                        addedDate:
                          type: string
                          format: date-time
                          description: Date that the assignment was added
                          example: '2025-07-11T18:45:37.098Z'
                        startDate:
                          type: string
                          format: date-time
                          nullable: true
                          description: Date when assignment will be active, if requested with a future date. If null, assignment is active immediately
                          example: '2026-01-22T19:15:00.000Z'
                        removeDate:
                          type: string
                          format: date-time
                          nullable: true
                          description: Date that the assignment will be removed
                          example: '2026-01-23T19:15:00.000Z'
                    - type: object
                      title: Role Assignment Dto
                      properties:
                        id:
                          type: string
                          description: Assignment Id
                          example: 1cbb0705b38c4226b1334eadd8874086
                        role:
                          type: object
                          title: Base Reference Dto
                          properties:
                            type:
                              description: DTO type
                              type: string
                              enum:
                                - ACCOUNT_CORRELATION_CONFIG
                                - ACCESS_PROFILE
                                - ACCESS_REQUEST_APPROVAL
                                - ACCOUNT
                                - APPLICATION
                                - CAMPAIGN
                                - CAMPAIGN_FILTER
                                - CERTIFICATION
                                - CLUSTER
                                - CONNECTOR_SCHEMA
                                - ENTITLEMENT
                                - GOVERNANCE_GROUP
                                - IDENTITY
                                - IDENTITY_PROFILE
                                - IDENTITY_REQUEST
                                - MACHINE_IDENTITY
                                - LIFECYCLE_STATE
                                - PASSWORD_POLICY
                                - ROLE
                                - RULE
                                - SOD_POLICY
                                - SOURCE
                                - TAG
                                - TAG_CATEGORY
                                - TASK_RESULT
                                - REPORT_RESULT
                                - SOD_VIOLATION
                                - ACCOUNT_ACTIVITY
                                - WORKGROUP
                              example: IDENTITY
                              title: dtotype
                            id:
                              type: string
                              description: ID of the object to which this reference applies
                              example: 2c91808568c529c60168cca6f90c1313
                            name:
                              type: string
                              description: Human-readable display name of the object to which this reference applies
                              example: William Wilson
                          description: Role Id and Name related to this assignment
                          example:
                            id: e7697a1e96d04db1ac7b0f4544915d2c
                            type: ROLE
                            name: Engineer
                        comments:
                          type: string
                          nullable: true
                          description: Comments added by the user when the assignment was made
                          example: I'm a new Engineer and need this role to do my work
                        assignmentSource:
                          type: string
                          description: Source describing how this assignment was made
                          example: UI
                        assigner:
                          type: object
                          description: The identity that performed the assignment. This could be blank or system
                          properties:
                            type:
                              type: string
                              enum:
                                - IDENTITY
                                - UNKNOWN
                              description: Object type
                              example: IDENTITY
                            id:
                              type: string
                              description: ID of the object to which this reference applies
                              example: 2c91808568c529c60168cca6f90c1313
                            name:
                              type: string
                              nullable: true
                              description: Human-readable display name of the object to which this reference applies
                              example: William Wilson
                        assignedDimensions:
                          type: array
                          description: Dimensions assigned related to this role
                          example:
                            - id: 1acc8ffe5fcf457090de28bee2af36ee
                              type: DIMENSION
                              name: Northeast region
                          items:
                            type: object
                            title: Base Reference Dto
                            properties:
                              type:
                                description: DTO type
                                type: string
                                enum:
                                  - ACCOUNT_CORRELATION_CONFIG
                                  - ACCESS_PROFILE
                                  - ACCESS_REQUEST_APPROVAL
                                  - ACCOUNT
                                  - APPLICATION
                                  - CAMPAIGN
                                  - CAMPAIGN_FILTER
                                  - CERTIFICATION
                                  - CLUSTER
                                  - CONNECTOR_SCHEMA
                                  - ENTITLEMENT
                                  - GOVERNANCE_GROUP
                                  - IDENTITY
                                  - IDENTITY_PROFILE
                                  - IDENTITY_REQUEST
                                  - MACHINE_IDENTITY
                                  - LIFECYCLE_STATE
                                  - PASSWORD_POLICY
                                  - ROLE
                                  - RULE
                                  - SOD_POLICY
                                  - SOURCE
                                  - TAG
                                  - TAG_CATEGORY
                                  - TASK_RESULT
                                  - REPORT_RESULT
                                  - SOD_VIOLATION
                                  - ACCOUNT_ACTIVITY
                                  - WORKGROUP
                                example: IDENTITY
                                title: dtotype
                              id:
                                type: string
                                description: ID of the object to which this reference applies
                                example: 2c91808568c529c60168cca6f90c1313
                              name:
                                type: string
                                description: Human-readable display name of the object to which this reference applies
                                example: William Wilson
                        assignmentContext:
                          allOf:
                            - type: object
                              title: Assignment Context Dto
                              properties:
                                requested:
                                  type: object
                                  title: Access Request Context
                                  properties:
                                    contextAttributes:
                                      type: array
                                      items:
                                        type: object
                                        title: Context Attribute Dto
                                        properties:
                                          attribute:
                                            type: string
                                            description: The name of the attribute
                                            example: location
                                          value:
                                            oneOf:
                                              - type: string
                                                example: Austin
                                              - type: array
                                                items:
                                                  type: string
                                                  example:
                                                    - Austin
                                                    - Houston
                                                    - Dallas
                                            description: The value of the attribute.  This can be either a string or a multi-valued string
                                            example: Austin
                                          derived:
                                            type: boolean
                                            description: True if the attribute was derived.
                                            default: false
                                            example: false
                                matched:
                                  type: array
                                  items:
                                    type: object
                                    title: Role Match Dto
                                    properties:
                                      roleRef:
                                        type: object
                                        title: Base Reference Dto
                                        properties:
                                          type:
                                            description: DTO type
                                            type: string
                                            enum:
                                              - ACCOUNT_CORRELATION_CONFIG
                                              - ACCESS_PROFILE
                                              - ACCESS_REQUEST_APPROVAL
                                              - ACCOUNT
                                              - APPLICATION
                                              - CAMPAIGN
                                              - CAMPAIGN_FILTER
                                              - CERTIFICATION
                                              - CLUSTER
                                              - CONNECTOR_SCHEMA
                                              - ENTITLEMENT
                                              - GOVERNANCE_GROUP
                                              - IDENTITY
                                              - IDENTITY_PROFILE
                                              - IDENTITY_REQUEST
                                              - MACHINE_IDENTITY
                                              - LIFECYCLE_STATE
                                              - PASSWORD_POLICY
                                              - ROLE
                                              - RULE
                                              - SOD_POLICY
                                              - SOURCE
                                              - TAG
                                              - TAG_CATEGORY
                                              - TASK_RESULT
                                              - REPORT_RESULT
                                              - SOD_VIOLATION
                                              - ACCOUNT_ACTIVITY
                                              - WORKGROUP
                                            example: IDENTITY
                                            title: dtotype
                                          id:
                                            type: string
                                            description: ID of the object to which this reference applies
                                            example: 2c91808568c529c60168cca6f90c1313
                                          name:
                                            type: string
                                            description: Human-readable display name of the object to which this reference applies
                                            example: William Wilson
                                        description: Role Id and Name related to this match
                                        example:
                                          id: e7697a1e96d04db1ac7b0f4544915d2c
                                          type: DIMENSION
                                          name: Engineer
                                      matchedAttributes:
                                        type: array
                                        items:
                                          type: object
                                          title: Context Attribute Dto
                                          properties:
                                            attribute:
                                              type: string
                                              description: The name of the attribute
                                              example: location
                                            value:
                                              oneOf:
                                                - type: string
                                                  example: Austin
                                                - type: array
                                                  items:
                                                    type: string
                                                    example:
                                                      - Austin
                                                      - Houston
                                                      - Dallas
                                              description: The value of the attribute.  This can be either a string or a multi-valued string
                                              example: Austin
                                            derived:
                                              type: boolean
                                              description: True if the attribute was derived.
                                              default: false
                                              example: false
                                computedDate:
                                  type: string
                                  description: Date that the assignment will was evaluated
                                  example: Wed Feb 14 10:58:42
                            - nullable: true
                              description: The context around the role assignment
                          example:
                            requested:
                              contextAttributes:
                                - attribute: department
                                  value: Engineering
                                  derived: false
                            matched:
                              - id: e7697a1e96d04db1ac7b0f4544915d2c
                                type: DIMENSION
                                name: Engineer
                            computedDate: Wed Feb 14 10:58:42
                        accountTargets:
                          type: array
                          items:
                            type: object
                            title: Role Target Dto
                            properties:
                              source:
                                type: object
                                title: Base Reference Dto
                                properties:
                                  type:
                                    description: DTO type
                                    type: string
                                    enum:
                                      - ACCOUNT_CORRELATION_CONFIG
                                      - ACCESS_PROFILE
                                      - ACCESS_REQUEST_APPROVAL
                                      - ACCOUNT
                                      - APPLICATION
                                      - CAMPAIGN
                                      - CAMPAIGN_FILTER
                                      - CERTIFICATION
                                      - CLUSTER
                                      - CONNECTOR_SCHEMA
                                      - ENTITLEMENT
                                      - GOVERNANCE_GROUP
                                      - IDENTITY
                                      - IDENTITY_PROFILE
                                      - IDENTITY_REQUEST
                                      - MACHINE_IDENTITY
                                      - LIFECYCLE_STATE
                                      - PASSWORD_POLICY
                                      - ROLE
                                      - RULE
                                      - SOD_POLICY
                                      - SOURCE
                                      - TAG
                                      - TAG_CATEGORY
                                      - TASK_RESULT
                                      - REPORT_RESULT
                                      - SOD_VIOLATION
                                      - ACCOUNT_ACTIVITY
                                      - WORKGROUP
                                    example: IDENTITY
                                    title: dtotype
                                  id:
                                    type: string
                                    description: ID of the object to which this reference applies
                                    example: 2c91808568c529c60168cca6f90c1313
                                  name:
                                    type: string
                                    description: Human-readable display name of the object to which this reference applies
                                    example: William Wilson
                                description: Source Id and Name related to this assignment
                                example:
                                  id: d18b74853739439986501ad180b27db6
                                  type: SOURCE
                                  name: Active Directory
                              accountInfo:
                                type: object
                                title: Account Info Dto
                                properties:
                                  nativeIdentity:
                                    type: string
                                    description: The unique ID of the account generated by the source system
                                    example: CN=Abby Smith,OU=Austin,OU=Americas,OU=Demo,DC=seri,DC=acme,DC=com
                                  displayName:
                                    type: string
                                    description: Display name for this account
                                    example: Abby.Smith
                                  uuid:
                                    type: string
                                    description: UUID associated with this account
                                    example: '{ad9fc391-246d-40af-b248-b6556a2b7c01}'
                              role:
                                type: object
                                title: Base Reference Dto
                                properties:
                                  type:
                                    description: DTO type
                                    type: string
                                    enum:
                                      - ACCOUNT_CORRELATION_CONFIG
                                      - ACCESS_PROFILE
                                      - ACCESS_REQUEST_APPROVAL
                                      - ACCOUNT
                                      - APPLICATION
                                      - CAMPAIGN
                                      - CAMPAIGN_FILTER
                                      - CERTIFICATION
                                      - CLUSTER
                                      - CONNECTOR_SCHEMA
                                      - ENTITLEMENT
                                      - GOVERNANCE_GROUP
                                      - IDENTITY
                                      - IDENTITY_PROFILE
                                      - IDENTITY_REQUEST
                                      - MACHINE_IDENTITY
                                      - LIFECYCLE_STATE
                                      - PASSWORD_POLICY
                                      - ROLE
                                      - RULE
                                      - SOD_POLICY
                                      - SOURCE
                                      - TAG
                                      - TAG_CATEGORY
                                      - TASK_RESULT
                                      - REPORT_RESULT
                                      - SOD_VIOLATION
                                      - ACCOUNT_ACTIVITY
                                      - WORKGROUP
                                    example: IDENTITY
                                    title: dtotype
                                  id:
                                    type: string
                                    description: ID of the object to which this reference applies
                                    example: 2c91808568c529c60168cca6f90c1313
                                  name:
                                    type: string
                                    description: Human-readable display name of the object to which this reference applies
                                    example: William Wilson
                                description: Role reference for this account target
                                example:
                                  id: e7697a1e96d04db1ac7b0f4544915d2c
                                  type: ACCESS_PROFILE
                                  name: Marketing Access Profile
                        startDate:
                          type: string
                          format: date-time
                          nullable: true
                          description: Date when assignment will be active, if access was requested with a future start date. If null, assignment is active immediately
                          example: '2026-07-10T18:45:37.098Z'
                        removeDate:
                          type: string
                          format: date-time
                          nullable: true
                          description: Date that the assignment will be removed
                          example: '2026-07-11T18:45:37.098Z'
                        addedDate:
                          type: string
                          format: date-time
                          description: Date that the assignment was added
                          example: '2025-07-11T18:45:37.098Z'
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
