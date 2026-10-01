## OpenAPI

```yaml POST /roles/v1/{roleId}/dimensions
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
  /roles/v1/{roleId}/dimensions:
    post:
      description: |-
        This API creates a dimension.
        You must have a token with API, ORG_ADMIN, ROLE_ADMIN, or ROLE_SUBADMIN authority to call this API. 
        Additionally, a ROLE_SUBADMIN cannot create a dimension that includes an access profile or entitlement if that access profile or entitlement is linked to a source that the ROLE_SUBADMIN is not associated with. 
        The maximum supported length for the description field is 2000 characters.
      operationId: createDimensionV1
      security:
        - userAuth:
            - idn:role-unchecked:manage
            - idn:role-checked:manage
      parameters:
        - in: path
          name: roleId
          required: true
          x-sailpoint-resource-operation-id: listRolesV1
          schema:
            type: string
          description: Parent Role Id of the dimension.
          example: 6603fba3004f43c687610a29195252ce
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              description: A Dimension
              properties:
                id:
                  type: string
                  description: The id of the Dimension. This field must be left null when creating a dimension, otherwise a 400 Bad Request error will result.
                  example: 2c918086749d78830174a1a40e121518
                name:
                  type: string
                  description: The human-readable display name of the Dimension
                  maxLength: 128
                  example: Dimension 2567
                created:
                  type: string
                  description: Date the Dimension was created
                  format: date-time
                  example: '2021-03-01T22:32:58.104Z'
                  readOnly: true
                modified:
                  type: string
                  description: Date the Dimension was last modified.
                  format: date-time
                  example: '2021-03-02T20:22:28.104Z'
                  readOnly: true
                description:
                  type: string
                  nullable: true
                  description: A human-readable description of the Dimension
                  example: Urna amet cursus pellentesque nisl orci maximus lorem nisl euismod fusce morbi placerat adipiscing maecenas nisi tristique et metus et lacus sed morbi nunc nisl maximus magna arcu varius sollicitudin elementum enim maecenas nisi id ipsum tempus fusce diam ipsum tortor.
                owner:
                  type: object
                  nullable: true
                  description: Owner of the object.
                  properties:
                    type:
                      type: string
                      enum:
                        - IDENTITY
                      description: Owner type. This field must be either left null or set to 'IDENTITY' on input, otherwise a 400 Bad Request error will result.
                      example: IDENTITY
                    id:
                      type: string
                      description: Owner's identity ID.
                      example: 2c9180a46faadee4016fb4e018c20639
                    name:
                      type: string
                      description: Owner's name. It may be left null or omitted in a POST or PATCH. If set, it must match the current value of the owner's display name, otherwise a 400 Bad Request error will result.
                      example: support
                  title: ownerreference
                accessProfiles:
                  type: array
                  items:
                    type: object
                    properties:
                      id:
                        type: string
                        description: ID of the Access Profile
                        example: ff808081751e6e129f1518161919ecca
                      type:
                        type: string
                        description: Type of requested object. This field must be either left null or set to 'ACCESS_PROFILE' when creating an Access Profile, otherwise a 400 Bad Request error will result.
                        enum:
                          - ACCESS_PROFILE
                        example: ACCESS_PROFILE
                      name:
                        type: string
                        description: Human-readable display name of the Access Profile. This field is ignored on input.
                        example: Access Profile 2567
                    title: accessprofileref
                  nullable: true
                entitlements:
                  type: array
                  items:
                    type: object
                    description: Entitlement including a specific set of access.
                    properties:
                      type:
                        type: string
                        description: Entitlement's DTO type.
                        enum:
                          - ENTITLEMENT
                        example: ENTITLEMENT
                      id:
                        type: string
                        description: Entitlement's ID.
                        example: 2c91809773dee32014e13e122092014e
                      name:
                        type: string
                        nullable: true
                        description: Entitlement's display name.
                        example: CN=entitlement.490efde5,OU=OrgCo,OU=ServiceDept,DC=HQAD,DC=local
                    title: entitlementref
                membership:
                  nullable: true
                  type: object
                  description: When present, specifies that the Dimension is to be granted to Identities which either satisfy specific criteria.
                  properties:
                    type:
                      type: string
                      enum:
                        - STANDARD
                      description: |-
                        This enum characterizes the type of a Dimension's membership selector. Only the STANDARD type supported:

                        STANDARD: Indicates that Dimension membership is defined in terms of a criteria expression
                      example: STANDARD
                      title: dimensionmembershipselectortype
                    criteria:
                      nullable: true
                      type: object
                      description: Defines STANDARD type Dimension membership
                      properties:
                        operation:
                          type: string
                          enum:
                            - EQUALS
                            - AND
                            - OR
                          description: An operation
                          example: EQUALS
                          title: dimensioncriteriaoperation
                        key:
                          type: object
                          nullable: true
                          description: Refers to a specific Identity attribute used in Dimension membership criteria.
                          properties:
                            type:
                              type: string
                              enum:
                                - IDENTITY
                              description: Indicates whether the associated criteria represents an expression on identity attributes.
                              example: IDENTITY
                              title: dimensioncriteriakeytype
                            property:
                              type: string
                              description: The name of the identity attribute to which the associated criteria applies.
                              example: attribute.email
                          required:
                            - type
                            - property
                          title: dimensioncriteriakey
                        stringValue:
                          type: string
                          nullable: true
                          description: String value to test the Identity attribute specified in the key w/r/t the specified operation. If this criteria is a leaf node, that is, if the operation is  EQUALS, this field is required. Otherwise, specifying it is an error.
                          example: carlee.cert1c9f9b6fd@mailinator.com
                        children:
                          type: array
                          items:
                            type: object
                            nullable: true
                            description: Defines STANDARD type Role membership
                            properties:
                              operation:
                                type: string
                                enum:
                                  - EQUALS
                                  - AND
                                  - OR
                                description: An operation
                                example: EQUALS
                                title: dimensioncriteriaoperation
                              key:
                                type: object
                                nullable: true
                                description: Refers to a specific Identity attribute used in Dimension membership criteria.
                                properties:
                                  type:
                                    type: string
                                    enum:
                                      - IDENTITY
                                    description: Indicates whether the associated criteria represents an expression on identity attributes.
                                    example: IDENTITY
                                    title: dimensioncriteriakeytype
                                  property:
                                    type: string
                                    description: The name of the identity attribute to which the associated criteria applies.
                                    example: attribute.email
                                required:
                                  - type
                                  - property
                                title: dimensioncriteriakey
                              stringValue:
                                type: string
                                nullable: true
                                description: String value to test the Identity attribute specified in the key w/r/t the specified operation. If this criteria is a leaf node, that is, if the operation is one of EQUALS, this field is required. Otherwise, specifying it is an error.
                                example: carlee.cert1c9f9b6fd@mailinator.com
                              children:
                                type: array
                                items:
                                  type: object
                                  description: Defines STANDARD type Dimension membership
                                  properties:
                                    operation:
                                      type: string
                                      enum:
                                        - EQUALS
                                        - AND
                                        - OR
                                      description: An operation
                                      example: EQUALS
                                      title: dimensioncriteriaoperation
                                    key:
                                      type: object
                                      nullable: true
                                      description: Refers to a specific Identity attribute used in Dimension membership criteria.
                                      properties:
                                        type:
                                          type: string
                                          enum:
                                            - IDENTITY
                                          description: Indicates whether the associated criteria represents an expression on identity attributes.
                                          example: IDENTITY
                                          title: dimensioncriteriakeytype
                                        property:
                                          type: string
                                          description: The name of the identity attribute to which the associated criteria applies.
                                          example: attribute.email
                                      required:
                                        - type
                                        - property
                                      title: dimensioncriteriakey
                                    stringValue:
                                      type: string
                                      description: String value to test the Identity attribute specified in the key w/r/t the specified operation. If this criteria is a leaf node, that is, if the operation is one of EQUALS, this field is required. Otherwise, specifying it is an error.
                                      example: carlee.cert1c9f9b6fd@mailinator.com
                                  title: dimensioncriterialevel3
                                nullable: true
                                description: Array of child criteria. Required if the operation is AND or OR, otherwise it must be left null. A maximum of three levels of criteria are supported, including leaf nodes. Additionally, AND nodes can only be children or OR nodes and vice-versa.
                            title: dimensioncriterialevel2
                          nullable: true
                          description: Array of child criteria. Required if the operation is AND or OR, otherwise it must be left null. A maximum of three levels of criteria are supported, including leaf nodes. Additionally, AND nodes can only be children or OR nodes and vice-versa.
                      title: dimensioncriterialevel1
                  title: dimensionmembershipselector
                parentId:
                  type: string
                  nullable: true
                  description: The ID of the parent role. This field can be left null when creating a dimension, but if provided, it must match the role ID specified in the path variable of the API call.
                  example: 2c918086749d78830174a1a40e121518
              required:
                - name
                - owner
              title: dimension
      responses:
        '201':
          description: Dimension created
          content:
            application/json:
              schema:
                type: object
                description: A Dimension
                properties:
                  id:
                    type: string
                    description: The id of the Dimension. This field must be left null when creating a dimension, otherwise a 400 Bad Request error will result.
                    example: 2c918086749d78830174a1a40e121518
                  name:
                    type: string
                    description: The human-readable display name of the Dimension
                    maxLength: 128
                    example: Dimension 2567
                  created:
                    type: string
                    description: Date the Dimension was created
                    format: date-time
                    example: '2021-03-01T22:32:58.104Z'
                    readOnly: true
                  modified:
                    type: string
                    description: Date the Dimension was last modified.
                    format: date-time
                    example: '2021-03-02T20:22:28.104Z'
                    readOnly: true
                  description:
                    type: string
                    nullable: true
                    description: A human-readable description of the Dimension
                    example: Urna amet cursus pellentesque nisl orci maximus lorem nisl euismod fusce morbi placerat adipiscing maecenas nisi tristique et metus et lacus sed morbi nunc nisl maximus magna arcu varius sollicitudin elementum enim maecenas nisi id ipsum tempus fusce diam ipsum tortor.
                  owner:
                    type: object
                    nullable: true
                    description: Owner of the object.
                    properties:
                      type:
                        type: string
                        enum:
                          - IDENTITY
                        description: Owner type. This field must be either left null or set to 'IDENTITY' on input, otherwise a 400 Bad Request error will result.
                        example: IDENTITY
                      id:
                        type: string
                        description: Owner's identity ID.
                        example: 2c9180a46faadee4016fb4e018c20639
                      name:
                        type: string
                        description: Owner's name. It may be left null or omitted in a POST or PATCH. If set, it must match the current value of the owner's display name, otherwise a 400 Bad Request error will result.
                        example: support
                    title: ownerreference
                  accessProfiles:
                    type: array
                    items:
                      type: object
                      properties:
                        id:
                          type: string
                          description: ID of the Access Profile
                          example: ff808081751e6e129f1518161919ecca
                        type:
                          type: string
                          description: Type of requested object. This field must be either left null or set to 'ACCESS_PROFILE' when creating an Access Profile, otherwise a 400 Bad Request error will result.
                          enum:
                            - ACCESS_PROFILE
                          example: ACCESS_PROFILE
                        name:
                          type: string
                          description: Human-readable display name of the Access Profile. This field is ignored on input.
                          example: Access Profile 2567
                      title: accessprofileref
                    nullable: true
                  entitlements:
                    type: array
                    items:
                      type: object
                      description: Entitlement including a specific set of access.
                      properties:
                        type:
                          type: string
                          description: Entitlement's DTO type.
                          enum:
                            - ENTITLEMENT
                          example: ENTITLEMENT
                        id:
                          type: string
                          description: Entitlement's ID.
                          example: 2c91809773dee32014e13e122092014e
                        name:
                          type: string
                          nullable: true
                          description: Entitlement's display name.
                          example: CN=entitlement.490efde5,OU=OrgCo,OU=ServiceDept,DC=HQAD,DC=local
                      title: entitlementref
                  membership:
                    nullable: true
                    type: object
                    description: When present, specifies that the Dimension is to be granted to Identities which either satisfy specific criteria.
                    properties:
                      type:
                        type: string
                        enum:
                          - STANDARD
                        description: |-
                          This enum characterizes the type of a Dimension's membership selector. Only the STANDARD type supported:

                          STANDARD: Indicates that Dimension membership is defined in terms of a criteria expression
                        example: STANDARD
                        title: dimensionmembershipselectortype
                      criteria:
                        nullable: true
                        type: object
                        description: Defines STANDARD type Dimension membership
                        properties:
                          operation:
                            type: string
                            enum:
                              - EQUALS
                              - AND
                              - OR
                            description: An operation
                            example: EQUALS
                            title: dimensioncriteriaoperation
                          key:
                            type: object
                            nullable: true
                            description: Refers to a specific Identity attribute used in Dimension membership criteria.
                            properties:
                              type:
                                type: string
                                enum:
                                  - IDENTITY
                                description: Indicates whether the associated criteria represents an expression on identity attributes.
                                example: IDENTITY
                                title: dimensioncriteriakeytype
                              property:
                                type: string
                                description: The name of the identity attribute to which the associated criteria applies.
                                example: attribute.email
                            required:
                              - type
                              - property
                            title: dimensioncriteriakey
                          stringValue:
                            type: string
                            nullable: true
                            description: String value to test the Identity attribute specified in the key w/r/t the specified operation. If this criteria is a leaf node, that is, if the operation is  EQUALS, this field is required. Otherwise, specifying it is an error.
                            example: carlee.cert1c9f9b6fd@mailinator.com
                          children:
                            type: array
                            items:
                              type: object
                              nullable: true
                              description: Defines STANDARD type Role membership
                              properties:
                                operation:
                                  type: string
                                  enum:
                                    - EQUALS
                                    - AND
                                    - OR
                                  description: An operation
                                  example: EQUALS
                                  title: dimensioncriteriaoperation
                                key:
                                  type: object
                                  nullable: true
                                  description: Refers to a specific Identity attribute used in Dimension membership criteria.
                                  properties:
                                    type:
                                      type: string
                                      enum:
                                        - IDENTITY
                                      description: Indicates whether the associated criteria represents an expression on identity attributes.
                                      example: IDENTITY
                                      title: dimensioncriteriakeytype
                                    property:
                                      type: string
                                      description: The name of the identity attribute to which the associated criteria applies.
                                      example: attribute.email
                                  required:
                                    - type
                                    - property
                                  title: dimensioncriteriakey
                                stringValue:
                                  type: string
                                  nullable: true
                                  description: String value to test the Identity attribute specified in the key w/r/t the specified operation. If this criteria is a leaf node, that is, if the operation is one of EQUALS, this field is required. Otherwise, specifying it is an error.
                                  example: carlee.cert1c9f9b6fd@mailinator.com
                                children:
                                  type: array
                                  items:
                                    type: object
                                    description: Defines STANDARD type Dimension membership
                                    properties:
                                      operation:
                                        type: string
                                        enum:
                                          - EQUALS
                                          - AND
                                          - OR
                                        description: An operation
                                        example: EQUALS
                                        title: dimensioncriteriaoperation
                                      key:
                                        type: object
                                        nullable: true
                                        description: Refers to a specific Identity attribute used in Dimension membership criteria.
                                        properties:
                                          type:
                                            type: string
                                            enum:
                                              - IDENTITY
                                            description: Indicates whether the associated criteria represents an expression on identity attributes.
                                            example: IDENTITY
                                            title: dimensioncriteriakeytype
                                          property:
                                            type: string
                                            description: The name of the identity attribute to which the associated criteria applies.
                                            example: attribute.email
                                        required:
                                          - type
                                          - property
                                        title: dimensioncriteriakey
                                      stringValue:
                                        type: string
                                        description: String value to test the Identity attribute specified in the key w/r/t the specified operation. If this criteria is a leaf node, that is, if the operation is one of EQUALS, this field is required. Otherwise, specifying it is an error.
                                        example: carlee.cert1c9f9b6fd@mailinator.com
                                    title: dimensioncriterialevel3
                                  nullable: true
                                  description: Array of child criteria. Required if the operation is AND or OR, otherwise it must be left null. A maximum of three levels of criteria are supported, including leaf nodes. Additionally, AND nodes can only be children or OR nodes and vice-versa.
                              title: dimensioncriterialevel2
                            nullable: true
                            description: Array of child criteria. Required if the operation is AND or OR, otherwise it must be left null. A maximum of three levels of criteria are supported, including leaf nodes. Additionally, AND nodes can only be children or OR nodes and vice-versa.
                        title: dimensioncriterialevel1
                    title: dimensionmembershipselector
                  parentId:
                    type: string
                    nullable: true
                    description: The ID of the parent role. This field can be left null when creating a dimension, but if provided, it must match the role ID specified in the path variable of the API call.
                    example: 2c918086749d78830174a1a40e121518
                required:
                  - name
                  - owner
                title: dimension
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
