## OpenAPI

```yaml GET /access-profiles/v1/{id}
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
  /access-profiles/v1/{id}:
    get:
      description: |-
        This API returns an Access Profile by its ID.
        The `accessRequestConfig.formDefinitionId` field associates an optional custom form with access profile access requests.
      operationId: getAccessProfileV1
      security:
        - userAuth:
            - idn:access-profile:read
      parameters:
        - in: path
          name: id
          required: true
          x-sailpoint-resource-operation-id: listAccessProfilesV1
          schema:
            type: string
          description: ID of the Access Profile
          example: 2c9180837ca6693d017ca8d097500149
      responses:
        '200':
          description: An AccessProfile
          content:
            application/json:
              schema:
                type: object
                description: Access profile.
                properties:
                  id:
                    type: string
                    description: Access profile ID.
                    example: 2c91808a7190d06e01719938fcd20792
                    readOnly: true
                  name:
                    type: string
                    description: Access profile name.
                    example: Employee-database-read-write
                  description:
                    type: string
                    nullable: true
                    description: Access profile description.
                    example: Collection of entitlements to read/write the employee database
                  created:
                    type: string
                    description: Date and time when the access profile was created.
                    format: date-time
                    example: '2021-03-01T22:32:58.104Z'
                    readOnly: true
                  modified:
                    type: string
                    description: Date and time when the access profile was last modified.
                    format: date-time
                    example: '2021-03-02T20:22:28.104Z'
                    readOnly: true
                  enabled:
                    type: boolean
                    default: false
                    description: Indicates whether the access profile is enabled. If it's enabled, you must include at least one entitlement.
                    example: true
                  owner:
                    description: Access profile owner.
                    type: object
                    nullable: true
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
                  source:
                    type: object
                    properties:
                      id:
                        type: string
                        description: ID of the source the access profile is associated with.
                        example: 2c91809773dee3610173fdb0b6061ef4
                      type:
                        type: string
                        enum:
                          - SOURCE
                        description: Source's DTO type.
                        example: SOURCE
                      name:
                        type: string
                        description: Source name.
                        example: ODS-AD-SOURCE
                    title: accessprofilesourceref
                  entitlements:
                    type: array
                    nullable: true
                    description: List of entitlements associated with the access profile. If `enabled` is false, this can be empty. Otherwise, it must contain at least one entitlement.
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
                  requestable:
                    type: boolean
                    default: true
                    description: Indicates whether the access profile is requestable by access request. Currently, making an access profile non-requestable is only supported  for customers enabled with the new Request Center. Otherwise, attempting to create an access profile with a value  **false** in this field results in a 400 error.
                    example: true
                  accessRequestConfig:
                    nullable: true
                    description: Access request configuration for the object.
                    type: object
                    properties:
                      commentsRequired:
                        type: boolean
                        description: Indicates whether the requester of the containing object must provide comments justifying the request.
                        example: true
                        nullable: true
                        default: false
                      denialCommentsRequired:
                        type: boolean
                        description: Indicates whether an approver must provide comments when denying the request.
                        example: true
                        nullable: true
                        default: false
                      reauthorizationRequired:
                        type: boolean
                        description: Indicates whether reauthorization is required for the request.
                        example: true
                        nullable: true
                        default: false
                      requireEndDate:
                        type: boolean
                        description: Indicates whether the requester of the containing object must provide access end date.
                        example: true
                        nullable: true
                        default: false
                      maxPermittedAccessDuration:
                        nullable: true
                        type: object
                        properties:
                          value:
                            type: integer
                            description: The numeric value representing the amount of time, which is defined in the **timeUnit**.
                            format: int32
                            example: 6
                          timeUnit:
                            type: string
                            description: The unit of time that corresponds to the **value**. It defines the scale of the time period.
                            enum:
                              - HOURS
                              - DAYS
                              - WEEKS
                              - MONTHS
                            example: MONTHS
                        title: accessduration
                      approvalSchemes:
                        type: array
                        nullable: true
                        description: List describing the steps involved in approving the request.
                        items:
                          type: object
                          properties:
                            approverType:
                              type: string
                              enum:
                                - APP_OWNER
                                - OWNER
                                - SOURCE_OWNER
                                - MANAGER
                                - GOVERNANCE_GROUP
                                - WORKFLOW
                                - ALL_OWNERS
                                - ADDITIONAL_OWNER
                                - ADDITIONAL_GOVERNANCE_GROUP
                              description: |-
                                Describes the individual or group that is responsible for an approval step. These are the possible values:
                                **APP_OWNER**: The owner of the Application

                                **OWNER**: Owner of the associated Access Profile or Role

                                **SOURCE_OWNER**: Owner of the Source associated with an Access Profile

                                **MANAGER**: Manager of the Identity making the request

                                **GOVERNANCE_GROUP**: A Governance Group, the ID of which is specified by the **approverId** field

                                **WORKFLOW**: A Workflow, the ID of which is specified by the **approverId** field. Workflow is exclusive to other types of approvals and License required.

                                **ALL_OWNERS**: All owners of the Access Profile, including the primary owner and any secondary owners

                                **ADDITIONAL_OWNER**: An additional owner of the Access Profile, the ID of which is specified by the **approverId** field

                                **ADDITIONAL_GOVERNANCE_GROUP**: An additional Governance Group, the ID of which is specified by the **approverId** field
                              example: GOVERNANCE_GROUP
                            approverId:
                              type: string
                              nullable: true
                              description: Id of the specific approver, used when approverType is GOVERNANCE_GROUP, WORKFLOW, or ADDITIONAL_GOVERNANCE_GROUP.
                              example: 46c79819-a69f-49a2-becb-12c971ae66c6
                          title: accessprofileapprovalscheme
                      formDefinitionId:
                        type: string
                        nullable: true
                        description: The ID of the form definition used for the access request. If specified, the form is presented to the requester during the access request process.
                        example: 78258e80-e9e2-4e1a-a11f-ce0b7c62f25d
                    title: requestability
                  revocationRequestConfig:
                    nullable: true
                    description: Revocation request configuration for the object.
                    type: object
                    properties:
                      approvalSchemes:
                        type: array
                        nullable: true
                        description: List describing the steps involved in approving the revocation request.
                        items:
                          type: object
                          properties:
                            approverType:
                              type: string
                              enum:
                                - APP_OWNER
                                - OWNER
                                - SOURCE_OWNER
                                - MANAGER
                                - GOVERNANCE_GROUP
                                - WORKFLOW
                                - ALL_OWNERS
                                - ADDITIONAL_OWNER
                                - ADDITIONAL_GOVERNANCE_GROUP
                              description: |-
                                Describes the individual or group that is responsible for an approval step. These are the possible values:
                                **APP_OWNER**: The owner of the Application

                                **OWNER**: Owner of the associated Access Profile or Role

                                **SOURCE_OWNER**: Owner of the Source associated with an Access Profile

                                **MANAGER**: Manager of the Identity making the request

                                **GOVERNANCE_GROUP**: A Governance Group, the ID of which is specified by the **approverId** field

                                **WORKFLOW**: A Workflow, the ID of which is specified by the **approverId** field. Workflow is exclusive to other types of approvals and License required.

                                **ALL_OWNERS**: All owners of the Access Profile, including the primary owner and any secondary owners

                                **ADDITIONAL_OWNER**: An additional owner of the Access Profile, the ID of which is specified by the **approverId** field

                                **ADDITIONAL_GOVERNANCE_GROUP**: An additional Governance Group, the ID of which is specified by the **approverId** field
                              example: GOVERNANCE_GROUP
                            approverId:
                              type: string
                              nullable: true
                              description: Id of the specific approver, used when approverType is GOVERNANCE_GROUP, WORKFLOW, or ADDITIONAL_GOVERNANCE_GROUP.
                              example: 46c79819-a69f-49a2-becb-12c971ae66c6
                          title: accessprofileapprovalscheme
                    title: revocability
                  segments:
                    type: array
                    nullable: true
                    items:
                      type: string
                    description: List of segment IDs, if any, that the access profile is assigned to.
                    example:
                      - f7b1b8a3-5fed-4fd4-ad29-82014e137e19
                      - 29cb6c06-1da8-43ea-8be4-b3125f248f2a
                  accessModelMetadata:
                    description: This field must be left null or empty when creating an Role, otherwise a 400 Bad Request error will result.
                    example:
                      - key: iscFederalClassifications
                        name: Federal Classifications
                        multiselect: true
                        status: active
                        type: governance
                        objectTypes:
                          - general
                        description: Classification used by government organizations to specify the level of confidentiality for an access item.
                        values:
                          - value: secret
                            name: Secret
                            status: active
                    type: object
                    properties:
                      attributes:
                        type: array
                        nullable: true
                        items:
                          type: object
                          properties:
                            key:
                              type: string
                              pattern: ^[a-zA-Z0-9]([a-zA-Z0-9_-]*[a-zA-Z0-9])?$
                              maxLength: 255
                              description: Technical name of the Attribute. This is unique and cannot be changed after creation. Allowed characters are letters, numbers, dashes (-), and underscores (_); the value cannot start or end with a dash or underscore.
                              example: iscPrivacy
                            name:
                              type: string
                              maxLength: 100
                              description: 'The display name of the key. Allowed characters are letters, numbers, whitespace, and the following special characters: . / | , ( ) & _ -'
                              example: Privacy
                            multiselect:
                              type: boolean
                              default: false
                              description: Indicates whether the attribute can have multiple values.
                              example: false
                            isAdhoc:
                              type: boolean
                              nullable: true
                              default: false
                              description: Indicates whether this Attribute supports ad-hoc (dynamically created) values, in addition to pre-defined static values. Ad-hoc values are created dynamically through an internal service-to-service flow rather than through the public create-value API. This field can be set when creating an Attribute; if omitted, it defaults to false.
                              example: false
                            status:
                              type: string
                              description: The status of the Attribute.
                              example: active
                            type:
                              type: string
                              description: The type of the Attribute. This can be either "custom" or "governance".
                              example: governance
                            objectTypes:
                              type: array
                              items:
                                type: string
                              nullable: true
                              description: An array of object types this attributes values can be applied to. Possible values are "all" or "entitlement". Value "all" means this attribute can be used with all object types that are supported.
                              example:
                                - entitlement
                            description:
                              type: string
                              maxLength: 500
                              description: 'The description of the Attribute. Allowed characters are letters, numbers, whitespace, and the following special characters: . / | , ( ) & _ : -'
                              example: Specifies the level of privacy associated with an access item.
                            values:
                              type: array
                              nullable: true
                              items:
                                type: object
                                properties:
                                  value:
                                    type: string
                                    pattern: ^[a-zA-Z0-9]([a-zA-Z0-9_-]*[a-zA-Z0-9])?$
                                    maxLength: 255
                                    description: Technical name of the Attribute value. This is unique and cannot be changed after creation. Allowed characters are letters, numbers, dashes (-), and underscores (_); the value cannot start or end with a dash or underscore.
                                    example: public
                                  name:
                                    type: string
                                    maxLength: 100
                                    description: 'The display name of the Attribute value. Allowed characters are letters, numbers, whitespace, and the following special characters: . / | , ( ) & _ -'
                                    example: Public
                                  status:
                                    type: string
                                    description: The status of the Attribute value.
                                    example: active
                                  type:
                                    type: string
                                    nullable: true
                                    enum:
                                      - static
                                      - adhoc
                                    description: Indicates how this Attribute value was created. static values are pre-defined and created directly through this API. adhoc values are created dynamically through an internal service-to-service flow when the parent Attribute has isAdhoc set to true, and cannot be created directly through the public create-value API.
                                    example: static
                                title: attributevaluedto
                          title: attributedto
                        example:
                          - key: iscPrivacy
                            name: Privacy
                            multiselect: false
                            status: active
                            type: governance
                            objectTypes:
                              - all
                            description: Specifies the level of privacy associated with an access item.
                            values:
                              - value: public
                                name: Public
                                status: active
                    title: attributedtolist
                  provisioningCriteria:
                    description: When an identity has multiple accounts on the source the access profile is associated with, the API evaluates this expression against those accounts to choose one to provision with the access profile.
                    nullable: true
                    example:
                      operation: OR
                      children:
                        - operation: AND
                          children:
                            - attribute: dn
                              operation: CONTAINS
                              value: useast
                            - attribute: manager
                              operation: CONTAINS
                              value: Scott.Clark
                        - operation: AND
                          children:
                            - attribute: dn
                              operation: EQUALS
                              value: Gibson
                            - attribute: telephoneNumber
                              operation: CONTAINS
                              value: '512'
                    type: object
                    properties:
                      operation:
                        type: string
                        enum:
                          - EQUALS
                          - NOT_EQUALS
                          - CONTAINS
                          - HAS
                          - AND
                          - OR
                        description: Supported operations on `ProvisioningCriteria`.
                        example: EQUALS
                        title: provisioningcriteriaoperation
                      attribute:
                        type: string
                        description: Name of the account attribute to be tested. If **operation** is one of `EQUALS`, `NOT_EQUALS`, `CONTAINS`, or `HAS`, this field is required. Otherwise, specifying it results in an error.
                        example: email
                        nullable: true
                      value:
                        type: string
                        nullable: true
                        description: String value to test the account attribute w/r/t the specified operation. If the operation is one of `EQUALS`, `NOT_EQUALS`, or `CONTAINS`, this field is required. Otherwise, specifying it results in an error. If the attribute is not string-typed, the API will convert it to the appropriate type.
                        example: carlee.cert1c9f9b6fd@mailinator.com
                      children:
                        type: array
                        items:
                          type: object
                          description: Defines matching criteria for an account to be provisioned with a specific access profile.
                          properties:
                            operation:
                              type: string
                              enum:
                                - EQUALS
                                - NOT_EQUALS
                                - CONTAINS
                                - HAS
                                - AND
                                - OR
                              description: Supported operations on `ProvisioningCriteria`.
                              example: EQUALS
                              title: provisioningcriteriaoperation
                            attribute:
                              type: string
                              description: Name of the account attribute to be tested. If **operation** is one of `EQUALS`, `NOT_EQUALS`, `CONTAINS`, or `HAS`, this field is required. Otherwise, specifying it results in an error.
                              example: email
                              nullable: true
                            value:
                              type: string
                              nullable: true
                              description: String value to test the account attribute w/r/t the specified operation. If the operation is one of `EQUALS`, `NOT_EQUALS`, or `CONTAINS`, this field is required. Otherwise, specifying it results in an error. If the attribute is not string-typed, the API will convert it to the appropriate type.
                              example: carlee.cert1c9f9b6fd@mailinator.com
                            children:
                              type: array
                              items:
                                type: object
                                description: Defines matching criteria for an account to be provisioned with a specific access profile.
                                properties:
                                  operation:
                                    type: string
                                    enum:
                                      - EQUALS
                                      - NOT_EQUALS
                                      - CONTAINS
                                      - HAS
                                      - AND
                                      - OR
                                    description: Supported operations on `ProvisioningCriteria`.
                                    example: EQUALS
                                    title: provisioningcriteriaoperation
                                  attribute:
                                    type: string
                                    description: Name of the account attribute to be tested. If **operation** is one of `EQUALS`, `NOT_EQUALS`, `CONTAINS`, or `HAS`, this field is required. Otherwise, specifying it results in an error.
                                    example: email
                                    nullable: true
                                  value:
                                    type: string
                                    nullable: true
                                    description: String value to test the account attribute w/r/t the specified operation. If the operation is one of `EQUALS`, `NOT_EQUALS`, or `CONTAINS`, this field is required. Otherwise, specifying it results in an error. If the attribute is not string-typed, the API will convert it to the appropriate type.
                                    example: carlee.cert1c9f9b6fd@mailinator.com
                                  children:
                                    type: string
                                    nullable: true
                                    description: Array of child criteria. This field is required if the operation is `AND` or `OR`. Otherwise, it must be left null. A maximum of three levels of criteria are supported, including leaf nodes.
                                    example: null
                                title: provisioningcriterialevel3
                              nullable: true
                              description: Array of child criteria. This field is required if the operation is `AND` or `OR`. Otherwise, it must be left null. A maximum of three levels of criteria are supported, including leaf nodes.
                              example: null
                          title: provisioningcriterialevel2
                        nullable: true
                        description: Array of child criteria. This field is required if the operation is `AND` or `OR`. Otherwise, it must be left null. A maximum of three levels of criteria are supported, including leaf nodes.
                        example: null
                    title: provisioningcriterialevel1
                  additionalOwners:
                    type: array
                    nullable: true
                    description: List of additional owner references beyond the primary owner. Each entry may be an identity (IDENTITY) or a governance group (GOVERNANCE_GROUP).
                    items:
                      type: object
                      description: Reference to an additional owner (identity or governance group).
                      properties:
                        type:
                          type: string
                          enum:
                            - IDENTITY
                            - GOVERNANCE_GROUP
                          description: Type of the additional owner; IDENTITY for an identity, GOVERNANCE_GROUP for a governance group.
                          example: IDENTITY
                        id:
                          type: string
                          description: ID of the identity or governance group.
                          example: 2c9180a46faadee4016fb4e018c20639
                        name:
                          type: string
                          nullable: true
                          description: Display name. It may be left null or omitted on input. If set, it must match the current display name of the identity or governance group, otherwise a 400 Bad Request error may result.
                          example: support
                      title: additionalownerref
                required:
                  - owner
                  - name
                  - source
                title: accessprofile
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
