## OpenAPI

```yaml POST /roles/v1
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
  /roles/v1:
    post:
      description: |-
        This API creates a role.

        You must have a token with API, ORG_ADMIN, ROLE_ADMIN, or ROLE_SUBADMIN authority to call this API. 

        In addition, a ROLE_SUBADMIN may not create a role including an access profile if that access profile is associated with a source the ROLE_SUBADMIN is not associated with themselves. 

        The maximum supported length for the description field is 2000 characters. Longer descriptions will be preserved for existing roles. However, any new roles as well as any updates to existing descriptions will be limited to 2000 characters.
      operationId: createRoleV1
      security:
        - userAuth:
            - idn:role-unchecked:manage
            - idn:role-checked:manage
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              description: A Role
              properties:
                id:
                  type: string
                  description: The id of the Role. This field must be left null when creating an Role, otherwise a 400 Bad Request error will result.
                  example: 2c918086749d78830174a1a40e121518
                name:
                  type: string
                  description: The human-readable display name of the Role
                  maxLength: 128
                  example: Role 2567
                created:
                  type: string
                  description: Date the Role was created
                  format: date-time
                  example: '2021-03-01T22:32:58.104Z'
                  readOnly: true
                modified:
                  type: string
                  description: Date the Role was last modified.
                  format: date-time
                  example: '2021-03-02T20:22:28.104Z'
                  readOnly: true
                description:
                  type: string
                  nullable: true
                  description: A human-readable description of the Role
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
                  description: When present, specifies that the Role is to be granted to Identities which either satisfy specific criteria or which are members of a given list of Identities.
                  properties:
                    type:
                      type: string
                      enum:
                        - STANDARD
                        - IDENTITY_LIST
                      description: |-
                        This enum characterizes the type of a Role's membership selector. Only the following two are fully supported:

                        STANDARD: Indicates that Role membership is defined in terms of a criteria expression

                        IDENTITY_LIST: Indicates that Role membership is conferred on the specific identities listed
                      example: IDENTITY_LIST
                      title: rolemembershipselectortype
                    criteria:
                      nullable: true
                      type: object
                      description: Defines STANDARD type Role membership
                      properties:
                        operation:
                          type: string
                          enum:
                            - EQUALS
                            - NOT_EQUALS
                            - CONTAINS
                            - DOES_NOT_CONTAIN
                            - STARTS_WITH
                            - ENDS_WITH
                            - GREATER_THAN
                            - LESS_THAN
                            - GREATER_THAN_EQUALS
                            - LESS_THAN_EQUALS
                            - AND
                            - OR
                          description: An operation
                          example: EQUALS
                          title: rolecriteriaoperation
                        key:
                          type: object
                          nullable: true
                          description: Refers to a specific Identity attribute, Account attibute, or Entitlement used in Role membership criteria
                          properties:
                            type:
                              type: string
                              enum:
                                - IDENTITY
                                - ACCOUNT
                                - ENTITLEMENT
                              description: Indicates whether the associated criteria represents an expression on identity attributes, account attributes, or entitlements, respectively.
                              example: ACCOUNT
                              title: rolecriteriakeytype
                            property:
                              type: string
                              description: The name of the attribute or entitlement to which the associated criteria applies.
                              example: attribute.email
                            sourceId:
                              type: string
                              nullable: true
                              description: ID of the Source from which an account attribute or entitlement is drawn. Required if type is ACCOUNT or ENTITLEMENT
                              example: 2c9180867427f3a301745aec18211519
                          required:
                            - type
                            - property
                          title: rolecriteriakey
                        stringValue:
                          type: string
                          nullable: true
                          description: String value to test the Identity attribute, Account attribute, or Entitlement specified in the key w/r/t the specified operation. If this criteria is a leaf node, that is, if the operation is one of EQUALS, NOT_EQUALS, CONTAINS, DOES_NOT_CONTAIN, STARTS_WITH, or ENDS_WITH, this field is required. Otherwise, specifying it is an error.
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
                                  - NOT_EQUALS
                                  - CONTAINS
                                  - DOES_NOT_CONTAIN
                                  - STARTS_WITH
                                  - ENDS_WITH
                                  - GREATER_THAN
                                  - LESS_THAN
                                  - GREATER_THAN_EQUALS
                                  - LESS_THAN_EQUALS
                                  - AND
                                  - OR
                                description: An operation
                                example: EQUALS
                                title: rolecriteriaoperation
                              key:
                                type: object
                                nullable: true
                                description: Refers to a specific Identity attribute, Account attibute, or Entitlement used in Role membership criteria
                                properties:
                                  type:
                                    type: string
                                    enum:
                                      - IDENTITY
                                      - ACCOUNT
                                      - ENTITLEMENT
                                    description: Indicates whether the associated criteria represents an expression on identity attributes, account attributes, or entitlements, respectively.
                                    example: ACCOUNT
                                    title: rolecriteriakeytype
                                  property:
                                    type: string
                                    description: The name of the attribute or entitlement to which the associated criteria applies.
                                    example: attribute.email
                                  sourceId:
                                    type: string
                                    nullable: true
                                    description: ID of the Source from which an account attribute or entitlement is drawn. Required if type is ACCOUNT or ENTITLEMENT
                                    example: 2c9180867427f3a301745aec18211519
                                required:
                                  - type
                                  - property
                                title: rolecriteriakey
                              stringValue:
                                type: string
                                nullable: true
                                description: String value to test the Identity attribute, Account attribute, or Entitlement specified in the key w/r/t the specified operation. If this criteria is a leaf node, that is, if the operation is one of EQUALS, NOT_EQUALS, CONTAINS, DOES_NOT_CONTAIN, STARTS_WITH, or ENDS_WITH, this field is required. Otherwise, specifying it is an error.
                                example: carlee.cert1c9f9b6fd@mailinator.com
                              children:
                                type: array
                                items:
                                  type: object
                                  description: Defines STANDARD type Role membership
                                  properties:
                                    operation:
                                      type: string
                                      enum:
                                        - EQUALS
                                        - NOT_EQUALS
                                        - CONTAINS
                                        - DOES_NOT_CONTAIN
                                        - STARTS_WITH
                                        - ENDS_WITH
                                        - GREATER_THAN
                                        - LESS_THAN
                                        - GREATER_THAN_EQUALS
                                        - LESS_THAN_EQUALS
                                        - AND
                                        - OR
                                      description: An operation
                                      example: EQUALS
                                      title: rolecriteriaoperation
                                    key:
                                      type: object
                                      nullable: true
                                      description: Refers to a specific Identity attribute, Account attibute, or Entitlement used in Role membership criteria
                                      properties:
                                        type:
                                          type: string
                                          enum:
                                            - IDENTITY
                                            - ACCOUNT
                                            - ENTITLEMENT
                                          description: Indicates whether the associated criteria represents an expression on identity attributes, account attributes, or entitlements, respectively.
                                          example: ACCOUNT
                                          title: rolecriteriakeytype
                                        property:
                                          type: string
                                          description: The name of the attribute or entitlement to which the associated criteria applies.
                                          example: attribute.email
                                        sourceId:
                                          type: string
                                          nullable: true
                                          description: ID of the Source from which an account attribute or entitlement is drawn. Required if type is ACCOUNT or ENTITLEMENT
                                          example: 2c9180867427f3a301745aec18211519
                                      required:
                                        - type
                                        - property
                                      title: rolecriteriakey
                                    stringValue:
                                      type: string
                                      nullable: true
                                      description: String value to test the Identity attribute, Account attribute, or Entitlement specified in the key w/r/t the specified operation. If this criteria is a leaf node, that is, if the operation is one of EQUALS, NOT_EQUALS, CONTAINS, DOES_NOT_CONTAIN, STARTS_WITH, or ENDS_WITH, this field is required. Otherwise, specifying it is an error.
                                      example: carlee.cert1c9f9b6fd@mailinator.com
                                  title: rolecriterialevel3
                                nullable: true
                                description: Array of child criteria. Required if the operation is AND or OR, otherwise it must be left null. A maximum of three levels of criteria are supported, including leaf nodes. Additionally, AND nodes can only be children or OR nodes and vice-versa.
                            title: rolecriterialevel2
                          nullable: true
                          description: Array of child criteria. Required if the operation is AND or OR, otherwise it must be left null. A maximum of three levels of criteria are supported, including leaf nodes. Additionally, AND nodes can only be children or OR nodes and vice-versa.
                      title: rolecriterialevel1
                    identities:
                      type: array
                      items:
                        type: object
                        description: A reference to an Identity in an IDENTITY_LIST role membership criteria.
                        properties:
                          type:
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
                            description: An enumeration of the types of DTOs supported within the IdentityNow infrastructure.
                            example: IDENTITY
                            title: dtotype
                            nullable: true
                          id:
                            type: string
                            description: Identity id
                            example: 2c9180a46faadee4016fb4e018c20639
                          name:
                            type: string
                            nullable: true
                            description: Human-readable display name of the Identity.
                            example: Thomas Edison
                          aliasName:
                            type: string
                            nullable: true
                            description: User name of the Identity
                            example: t.edison
                        title: rolemembershipidentity
                      nullable: true
                      description: Defines role membership as being exclusive to the specified Identities, when type is IDENTITY_LIST.
                  title: rolemembershipselector
                legacyMembershipInfo:
                  type: object
                  nullable: true
                  description: This field is not directly modifiable and is generally expected to be *null*. In very rare instances, some Roles may have been created using membership selection criteria that are no longer fully supported. While these Roles will still work, they should be migrated to STANDARD or IDENTITY_LIST selection criteria. This field exists for informational purposes as an aid to such migration.
                  example:
                    type: IDENTITY_LIST
                  additionalProperties: true
                enabled:
                  type: boolean
                  description: Whether the Role is enabled or not.
                  example: true
                  default: false
                requestable:
                  type: boolean
                  description: Whether the Role can be the target of access requests.
                  example: true
                  default: false
                accessRequestConfig:
                  nullable: true
                  description: Access request configuration for this object
                  type: object
                  properties:
                    commentsRequired:
                      type: boolean
                      description: Whether the requester of the containing object must provide comments justifying the request
                      example: true
                      nullable: true
                      default: false
                    denialCommentsRequired:
                      type: boolean
                      description: Whether an approver must provide comments when denying the request
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
                      description: List describing the steps in approving the request
                      items:
                        type: object
                        properties:
                          approverType:
                            type: string
                            enum:
                              - OWNER
                              - MANAGER
                              - GOVERNANCE_GROUP
                              - WORKFLOW
                              - ALL_OWNERS
                              - ADDITIONAL_OWNER
                              - ADDITIONAL_GOVERNANCE_GROUP
                            description: |-
                              Describes the individual or group that is responsible for an approval step. Values are as follows.

                              **OWNER**: Owner of the associated Role

                              **MANAGER**: Manager of the Identity making the request

                              **GOVERNANCE_GROUP**: A Governance Group, the ID of which is specified by the **approverId** field

                              **WORKFLOW**: A Workflow, the ID of which is specified by the **approverId** field. Workflow is exclusive to other types of approvals and License required.

                              **ALL_OWNERS**: All owners of the Role, including the primary owner and any secondary owners

                              **ADDITIONAL_OWNER**: An additional owner of the Role, the ID of which is specified by the **approverId** field

                              **ADDITIONAL_GOVERNANCE_GROUP**: An additional Governance Group, the ID of which is specified by the **approverId** field
                            example: GOVERNANCE_GROUP
                          approverId:
                            type: string
                            nullable: true
                            description: Id of the specific approver, used when approverType is GOVERNANCE_GROUP, WORKFLOW, or ADDITIONAL_GOVERNANCE_GROUP.
                            example: 46c79819-a69f-49a2-becb-12c971ae66c6
                        title: approvalschemeforrole
                    dimensionSchema:
                      type: object
                      description: Contains a list of dimension attributes. Required only for Dynamic Roles
                      properties:
                        dimensionAttributes:
                          type: array
                          items:
                            type: object
                            description: A dimension attribute
                            properties:
                              name:
                                type: string
                                nullable: false
                                description: Name of the attribute
                                example: city
                              displayName:
                                type: string
                                nullable: false
                                description: Display name of the attribute
                                example: City
                              derived:
                                type: boolean
                                nullable: false
                                description: If an attribute is derived, its value comes from the identity. Otherwise, it can be provided with access request
                                example: true
                                default: true
                            title: dimensionattribute
                          nullable: false
                      title: dimensionschema
                    formDefinitionId:
                      type: string
                      nullable: true
                      description: The ID of the form definition used for the access request. If specified, the form is presented to the requester during the access request process.
                      example: 78258e80-e9e2-4e1a-a11f-ce0b7c62f25d
                  title: requestabilityforrole
                revocationRequestConfig:
                  nullable: true
                  default: null
                  description: Revocation request configuration for this object.
                  type: object
                  properties:
                    commentsRequired:
                      type: boolean
                      description: Whether the requester of the containing object must provide comments justifying the request
                      example: false
                      nullable: true
                      default: false
                    denialCommentsRequired:
                      type: boolean
                      description: Whether an approver must provide comments when denying the request
                      example: false
                      nullable: true
                      default: false
                    approvalSchemes:
                      type: array
                      description: List describing the steps in approving the revocation request
                      items:
                        type: object
                        properties:
                          approverType:
                            type: string
                            enum:
                              - OWNER
                              - MANAGER
                              - GOVERNANCE_GROUP
                              - WORKFLOW
                              - ALL_OWNERS
                              - ADDITIONAL_OWNER
                              - ADDITIONAL_GOVERNANCE_GROUP
                            description: |-
                              Describes the individual or group that is responsible for an approval step. Values are as follows.

                              **OWNER**: Owner of the associated Role

                              **MANAGER**: Manager of the Identity making the request

                              **GOVERNANCE_GROUP**: A Governance Group, the ID of which is specified by the **approverId** field

                              **WORKFLOW**: A Workflow, the ID of which is specified by the **approverId** field. Workflow is exclusive to other types of approvals and License required.

                              **ALL_OWNERS**: All owners of the Role, including the primary owner and any secondary owners

                              **ADDITIONAL_OWNER**: An additional owner of the Role, the ID of which is specified by the **approverId** field

                              **ADDITIONAL_GOVERNANCE_GROUP**: An additional Governance Group, the ID of which is specified by the **approverId** field
                            example: GOVERNANCE_GROUP
                          approverId:
                            type: string
                            nullable: true
                            description: Id of the specific approver, used when approverType is GOVERNANCE_GROUP, WORKFLOW, or ADDITIONAL_GOVERNANCE_GROUP.
                            example: 46c79819-a69f-49a2-becb-12c971ae66c6
                        title: approvalschemeforrole
                  title: revocabilityforrole
                segments:
                  type: array
                  items:
                    type: string
                  nullable: true
                  description: List of IDs of segments, if any, to which this Role is assigned.
                  example:
                    - f7b1b8a3-5fed-4fd4-ad29-82014e137e19
                    - 29cb6c06-1da8-43ea-8be4-b3125f248f2a
                dimensional:
                  description: Whether the Role is dimensional.
                  type: boolean
                  nullable: true
                  default: false
                dimensionRefs:
                  type: array
                  items:
                    type: object
                    properties:
                      type:
                        type: string
                        enum:
                          - DIMENSION
                        description: The type of the object to which this reference applies
                        example: DIMENSION
                      id:
                        type: string
                        description: ID of the object to which this reference applies
                        example: 2c91808568c529c60168cca6f90c1313
                      name:
                        type: string
                        description: Human-readable display name of the object to which this reference applies
                        example: Role 2
                    title: dimensionref
                  nullable: true
                  description: List of references to dimensions to which this Role is assigned. This field is only relevant if the Role is dimensional.
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
                privilegeLevel:
                  type: string
                  nullable: true
                  description: The privilege level of the role, if applicable.
                  example: High
              required:
                - name
                - owner
              title: role
      responses:
        '201':
          description: Role created
          content:
            application/json:
              schema:
                type: object
                description: A Role
                properties:
                  id:
                    type: string
                    description: The id of the Role. This field must be left null when creating an Role, otherwise a 400 Bad Request error will result.
                    example: 2c918086749d78830174a1a40e121518
                  name:
                    type: string
                    description: The human-readable display name of the Role
                    maxLength: 128
                    example: Role 2567
                  created:
                    type: string
                    description: Date the Role was created
                    format: date-time
                    example: '2021-03-01T22:32:58.104Z'
                    readOnly: true
                  modified:
                    type: string
                    description: Date the Role was last modified.
                    format: date-time
                    example: '2021-03-02T20:22:28.104Z'
                    readOnly: true
                  description:
                    type: string
                    nullable: true
                    description: A human-readable description of the Role
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
                    description: When present, specifies that the Role is to be granted to Identities which either satisfy specific criteria or which are members of a given list of Identities.
                    properties:
                      type:
                        type: string
                        enum:
                          - STANDARD
                          - IDENTITY_LIST
                        description: |-
                          This enum characterizes the type of a Role's membership selector. Only the following two are fully supported:

                          STANDARD: Indicates that Role membership is defined in terms of a criteria expression

                          IDENTITY_LIST: Indicates that Role membership is conferred on the specific identities listed
                        example: IDENTITY_LIST
                        title: rolemembershipselectortype
                      criteria:
                        nullable: true
                        type: object
                        description: Defines STANDARD type Role membership
                        properties:
                          operation:
                            type: string
                            enum:
                              - EQUALS
                              - NOT_EQUALS
                              - CONTAINS
                              - DOES_NOT_CONTAIN
                              - STARTS_WITH
                              - ENDS_WITH
                              - GREATER_THAN
                              - LESS_THAN
                              - GREATER_THAN_EQUALS
                              - LESS_THAN_EQUALS
                              - AND
                              - OR
                            description: An operation
                            example: EQUALS
                            title: rolecriteriaoperation
                          key:
                            type: object
                            nullable: true
                            description: Refers to a specific Identity attribute, Account attibute, or Entitlement used in Role membership criteria
                            properties:
                              type:
                                type: string
                                enum:
                                  - IDENTITY
                                  - ACCOUNT
                                  - ENTITLEMENT
                                description: Indicates whether the associated criteria represents an expression on identity attributes, account attributes, or entitlements, respectively.
                                example: ACCOUNT
                                title: rolecriteriakeytype
                              property:
                                type: string
                                description: The name of the attribute or entitlement to which the associated criteria applies.
                                example: attribute.email
                              sourceId:
                                type: string
                                nullable: true
                                description: ID of the Source from which an account attribute or entitlement is drawn. Required if type is ACCOUNT or ENTITLEMENT
                                example: 2c9180867427f3a301745aec18211519
                            required:
                              - type
                              - property
                            title: rolecriteriakey
                          stringValue:
                            type: string
                            nullable: true
                            description: String value to test the Identity attribute, Account attribute, or Entitlement specified in the key w/r/t the specified operation. If this criteria is a leaf node, that is, if the operation is one of EQUALS, NOT_EQUALS, CONTAINS, DOES_NOT_CONTAIN, STARTS_WITH, or ENDS_WITH, this field is required. Otherwise, specifying it is an error.
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
                                    - NOT_EQUALS
                                    - CONTAINS
                                    - DOES_NOT_CONTAIN
                                    - STARTS_WITH
                                    - ENDS_WITH
                                    - GREATER_THAN
                                    - LESS_THAN
                                    - GREATER_THAN_EQUALS
                                    - LESS_THAN_EQUALS
                                    - AND
                                    - OR
                                  description: An operation
                                  example: EQUALS
                                  title: rolecriteriaoperation
                                key:
                                  type: object
                                  nullable: true
                                  description: Refers to a specific Identity attribute, Account attibute, or Entitlement used in Role membership criteria
                                  properties:
                                    type:
                                      type: string
                                      enum:
                                        - IDENTITY
                                        - ACCOUNT
                                        - ENTITLEMENT
                                      description: Indicates whether the associated criteria represents an expression on identity attributes, account attributes, or entitlements, respectively.
                                      example: ACCOUNT
                                      title: rolecriteriakeytype
                                    property:
                                      type: string
                                      description: The name of the attribute or entitlement to which the associated criteria applies.
                                      example: attribute.email
                                    sourceId:
                                      type: string
                                      nullable: true
                                      description: ID of the Source from which an account attribute or entitlement is drawn. Required if type is ACCOUNT or ENTITLEMENT
                                      example: 2c9180867427f3a301745aec18211519
                                  required:
                                    - type
                                    - property
                                  title: rolecriteriakey
                                stringValue:
                                  type: string
                                  nullable: true
                                  description: String value to test the Identity attribute, Account attribute, or Entitlement specified in the key w/r/t the specified operation. If this criteria is a leaf node, that is, if the operation is one of EQUALS, NOT_EQUALS, CONTAINS, DOES_NOT_CONTAIN, STARTS_WITH, or ENDS_WITH, this field is required. Otherwise, specifying it is an error.
                                  example: carlee.cert1c9f9b6fd@mailinator.com
                                children:
                                  type: array
                                  items:
                                    type: object
                                    description: Defines STANDARD type Role membership
                                    properties:
                                      operation:
                                        type: string
                                        enum:
                                          - EQUALS
                                          - NOT_EQUALS
                                          - CONTAINS
                                          - DOES_NOT_CONTAIN
                                          - STARTS_WITH
                                          - ENDS_WITH
                                          - GREATER_THAN
                                          - LESS_THAN
                                          - GREATER_THAN_EQUALS
                                          - LESS_THAN_EQUALS
                                          - AND
                                          - OR
                                        description: An operation
                                        example: EQUALS
                                        title: rolecriteriaoperation
                                      key:
                                        type: object
                                        nullable: true
                                        description: Refers to a specific Identity attribute, Account attibute, or Entitlement used in Role membership criteria
                                        properties:
                                          type:
                                            type: string
                                            enum:
                                              - IDENTITY
                                              - ACCOUNT
                                              - ENTITLEMENT
                                            description: Indicates whether the associated criteria represents an expression on identity attributes, account attributes, or entitlements, respectively.
                                            example: ACCOUNT
                                            title: rolecriteriakeytype
                                          property:
                                            type: string
                                            description: The name of the attribute or entitlement to which the associated criteria applies.
                                            example: attribute.email
                                          sourceId:
                                            type: string
                                            nullable: true
                                            description: ID of the Source from which an account attribute or entitlement is drawn. Required if type is ACCOUNT or ENTITLEMENT
                                            example: 2c9180867427f3a301745aec18211519
                                        required:
                                          - type
                                          - property
                                        title: rolecriteriakey
                                      stringValue:
                                        type: string
                                        nullable: true
                                        description: String value to test the Identity attribute, Account attribute, or Entitlement specified in the key w/r/t the specified operation. If this criteria is a leaf node, that is, if the operation is one of EQUALS, NOT_EQUALS, CONTAINS, DOES_NOT_CONTAIN, STARTS_WITH, or ENDS_WITH, this field is required. Otherwise, specifying it is an error.
                                        example: carlee.cert1c9f9b6fd@mailinator.com
                                    title: rolecriterialevel3
                                  nullable: true
                                  description: Array of child criteria. Required if the operation is AND or OR, otherwise it must be left null. A maximum of three levels of criteria are supported, including leaf nodes. Additionally, AND nodes can only be children or OR nodes and vice-versa.
                              title: rolecriterialevel2
                            nullable: true
                            description: Array of child criteria. Required if the operation is AND or OR, otherwise it must be left null. A maximum of three levels of criteria are supported, including leaf nodes. Additionally, AND nodes can only be children or OR nodes and vice-versa.
                        title: rolecriterialevel1
                      identities:
                        type: array
                        items:
                          type: object
                          description: A reference to an Identity in an IDENTITY_LIST role membership criteria.
                          properties:
                            type:
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
                              description: An enumeration of the types of DTOs supported within the IdentityNow infrastructure.
                              example: IDENTITY
                              title: dtotype
                              nullable: true
                            id:
                              type: string
                              description: Identity id
                              example: 2c9180a46faadee4016fb4e018c20639
                            name:
                              type: string
                              nullable: true
                              description: Human-readable display name of the Identity.
                              example: Thomas Edison
                            aliasName:
                              type: string
                              nullable: true
                              description: User name of the Identity
                              example: t.edison
                          title: rolemembershipidentity
                        nullable: true
                        description: Defines role membership as being exclusive to the specified Identities, when type is IDENTITY_LIST.
                    title: rolemembershipselector
                  legacyMembershipInfo:
                    type: object
                    nullable: true
                    description: This field is not directly modifiable and is generally expected to be *null*. In very rare instances, some Roles may have been created using membership selection criteria that are no longer fully supported. While these Roles will still work, they should be migrated to STANDARD or IDENTITY_LIST selection criteria. This field exists for informational purposes as an aid to such migration.
                    example:
                      type: IDENTITY_LIST
                    additionalProperties: true
                  enabled:
                    type: boolean
                    description: Whether the Role is enabled or not.
                    example: true
                    default: false
                  requestable:
                    type: boolean
                    description: Whether the Role can be the target of access requests.
                    example: true
                    default: false
                  accessRequestConfig:
                    nullable: true
                    description: Access request configuration for this object
                    type: object
                    properties:
                      commentsRequired:
                        type: boolean
                        description: Whether the requester of the containing object must provide comments justifying the request
                        example: true
                        nullable: true
                        default: false
                      denialCommentsRequired:
                        type: boolean
                        description: Whether an approver must provide comments when denying the request
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
                        description: List describing the steps in approving the request
                        items:
                          type: object
                          properties:
                            approverType:
                              type: string
                              enum:
                                - OWNER
                                - MANAGER
                                - GOVERNANCE_GROUP
                                - WORKFLOW
                                - ALL_OWNERS
                                - ADDITIONAL_OWNER
                                - ADDITIONAL_GOVERNANCE_GROUP
                              description: |-
                                Describes the individual or group that is responsible for an approval step. Values are as follows.

                                **OWNER**: Owner of the associated Role

                                **MANAGER**: Manager of the Identity making the request

                                **GOVERNANCE_GROUP**: A Governance Group, the ID of which is specified by the **approverId** field

                                **WORKFLOW**: A Workflow, the ID of which is specified by the **approverId** field. Workflow is exclusive to other types of approvals and License required.

                                **ALL_OWNERS**: All owners of the Role, including the primary owner and any secondary owners

                                **ADDITIONAL_OWNER**: An additional owner of the Role, the ID of which is specified by the **approverId** field

                                **ADDITIONAL_GOVERNANCE_GROUP**: An additional Governance Group, the ID of which is specified by the **approverId** field
                              example: GOVERNANCE_GROUP
                            approverId:
                              type: string
                              nullable: true
                              description: Id of the specific approver, used when approverType is GOVERNANCE_GROUP, WORKFLOW, or ADDITIONAL_GOVERNANCE_GROUP.
                              example: 46c79819-a69f-49a2-becb-12c971ae66c6
                          title: approvalschemeforrole
                      dimensionSchema:
                        type: object
                        description: Contains a list of dimension attributes. Required only for Dynamic Roles
                        properties:
                          dimensionAttributes:
                            type: array
                            items:
                              type: object
                              description: A dimension attribute
                              properties:
                                name:
                                  type: string
                                  nullable: false
                                  description: Name of the attribute
                                  example: city
                                displayName:
                                  type: string
                                  nullable: false
                                  description: Display name of the attribute
                                  example: City
                                derived:
                                  type: boolean
                                  nullable: false
                                  description: If an attribute is derived, its value comes from the identity. Otherwise, it can be provided with access request
                                  example: true
                                  default: true
                              title: dimensionattribute
                            nullable: false
                        title: dimensionschema
                      formDefinitionId:
                        type: string
                        nullable: true
                        description: The ID of the form definition used for the access request. If specified, the form is presented to the requester during the access request process.
                        example: 78258e80-e9e2-4e1a-a11f-ce0b7c62f25d
                    title: requestabilityforrole
                  revocationRequestConfig:
                    nullable: true
                    default: null
                    description: Revocation request configuration for this object.
                    type: object
                    properties:
                      commentsRequired:
                        type: boolean
                        description: Whether the requester of the containing object must provide comments justifying the request
                        example: false
                        nullable: true
                        default: false
                      denialCommentsRequired:
                        type: boolean
                        description: Whether an approver must provide comments when denying the request
                        example: false
                        nullable: true
                        default: false
                      approvalSchemes:
                        type: array
                        description: List describing the steps in approving the revocation request
                        items:
                          type: object
                          properties:
                            approverType:
                              type: string
                              enum:
                                - OWNER
                                - MANAGER
                                - GOVERNANCE_GROUP
                                - WORKFLOW
                                - ALL_OWNERS
                                - ADDITIONAL_OWNER
                                - ADDITIONAL_GOVERNANCE_GROUP
                              description: |-
                                Describes the individual or group that is responsible for an approval step. Values are as follows.

                                **OWNER**: Owner of the associated Role

                                **MANAGER**: Manager of the Identity making the request

                                **GOVERNANCE_GROUP**: A Governance Group, the ID of which is specified by the **approverId** field

                                **WORKFLOW**: A Workflow, the ID of which is specified by the **approverId** field. Workflow is exclusive to other types of approvals and License required.

                                **ALL_OWNERS**: All owners of the Role, including the primary owner and any secondary owners

                                **ADDITIONAL_OWNER**: An additional owner of the Role, the ID of which is specified by the **approverId** field

                                **ADDITIONAL_GOVERNANCE_GROUP**: An additional Governance Group, the ID of which is specified by the **approverId** field
                              example: GOVERNANCE_GROUP
                            approverId:
                              type: string
                              nullable: true
                              description: Id of the specific approver, used when approverType is GOVERNANCE_GROUP, WORKFLOW, or ADDITIONAL_GOVERNANCE_GROUP.
                              example: 46c79819-a69f-49a2-becb-12c971ae66c6
                          title: approvalschemeforrole
                    title: revocabilityforrole
                  segments:
                    type: array
                    items:
                      type: string
                    nullable: true
                    description: List of IDs of segments, if any, to which this Role is assigned.
                    example:
                      - f7b1b8a3-5fed-4fd4-ad29-82014e137e19
                      - 29cb6c06-1da8-43ea-8be4-b3125f248f2a
                  dimensional:
                    description: Whether the Role is dimensional.
                    type: boolean
                    nullable: true
                    default: false
                  dimensionRefs:
                    type: array
                    items:
                      type: object
                      properties:
                        type:
                          type: string
                          enum:
                            - DIMENSION
                          description: The type of the object to which this reference applies
                          example: DIMENSION
                        id:
                          type: string
                          description: ID of the object to which this reference applies
                          example: 2c91808568c529c60168cca6f90c1313
                        name:
                          type: string
                          description: Human-readable display name of the object to which this reference applies
                          example: Role 2
                      title: dimensionref
                    nullable: true
                    description: List of references to dimensions to which this Role is assigned. This field is only relevant if the Role is dimensional.
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
                  privilegeLevel:
                    type: string
                    nullable: true
                    description: The privilege level of the role, if applicable.
                    example: High
                required:
                  - name
                  - owner
                title: role
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
