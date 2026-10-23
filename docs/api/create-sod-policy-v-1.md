## OpenAPI

```yaml POST /sod-policies/v1
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
  /sod-policies/v1:
    post:
      description: |-
        This creates both General and Conflicting Access Based policy, with a limit of 50 entitlements for each (left & right) criteria for Conflicting Access Based SOD policy.
        Requires role of ORG_ADMIN.
      operationId: createSodPolicyV1
      security:
        - userAuth:
            - idn:sod-policy:manage
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              title: Sod Policy
              properties:
                id:
                  type: string
                  description: Policy id
                  example: 0f11f2a4-7c94-4bf3-a2bd-742580fe3bde
                  readOnly: true
                name:
                  type: string
                  description: Policy Business Name
                  example: policy-xyz
                created:
                  type: string
                  format: date-time
                  description: The time when this SOD policy is created.
                  example: '2020-01-01T00:00:00.000000Z'
                  readOnly: true
                modified:
                  type: string
                  format: date-time
                  description: The time when this SOD policy is modified.
                  example: '2020-01-01T00:00:00.000000Z'
                  readOnly: true
                description:
                  type: string
                  description: Optional description of the SOD policy
                  example: This policy ensures compliance of xyz
                  nullable: true
                ownerRef:
                  type: object
                  description: The owner of the SOD policy.
                  properties:
                    type:
                      type: string
                      description: Owner type.
                      enum:
                        - IDENTITY
                        - GOVERNANCE_GROUP
                      example: IDENTITY
                    id:
                      type: string
                      description: Owner's ID.
                      example: 2c9180a46faadee4016fb4e018c20639
                    name:
                      type: string
                      description: Owner's name.
                      example: Support
                secondaryOwnerRefs:
                  type: array
                  description: Additional owners of the SOD policy.(Max 10). Applicable only to Conflicting Access Based policies.
                  example:
                    - type: IDENTITY
                      id: 2c9180a46faadee4016fb4e018c20639
                      name: Support
                  items:
                    type: object
                    properties:
                      type:
                        type: string
                        description: Secondary Owner Type
                        enum:
                          - IDENTITY
                          - GOVERNANCE_GROUP
                        example: IDENTITY
                      id:
                        type: string
                        description: Secondary Owner ID
                        example: 2c9180a46faadee4016fb4e018c20639
                      name:
                        type: string
                        description: Secondary Owner Name
                        example: Support
                allowedControls:
                  type: array
                  description: Compensating or other controls allowed for this policy.(Max 10). Applicable only to Conflicting Access Based policies.
                  example:
                    - type: COMPENSATING_CONTROL
                      id: 2c9180a46faadee4016fb4e018c20639
                      name: Mitigating Control 1
                  items:
                    type: object
                    properties:
                      type:
                        type: string
                        description: Control reference type.
                        enum:
                          - COMPENSATING_CONTROL
                        example: COMPENSATING_CONTROL
                      id:
                        type: string
                        description: Control reference ID.
                        example: 2c9180a46faadee4016fb4e018
                      name:
                        type: string
                        description: Control reference name.
                        example: Mitigating Control 1
                level:
                  type: string
                  description: Policy severity or priority level. Applicable only to Conflicting Access Based policies. If not specified, default will be HIGH.
                  nullable: true
                  enum:
                    - CRITICAL
                    - HIGH
                    - MEDIUM
                    - LOW
                  example: HIGH
                externalPolicyReference:
                  type: string
                  description: Optional External Policy Reference
                  example: XYZ policy
                  nullable: true
                policyQuery:
                  type: string
                  description: Search query of the SOD policy
                  example: '@access(id:0f11f2a4-7c94-4bf3-a2bd-742580fe3bdg) AND @access(id:0f11f2a4-7c94-4bf3-a2bd-742580fe3bdf)'
                compensatingControls:
                  type: string
                  description: Optional compensating controls(Mitigating Controls)
                  example: Have a manager review the transaction decisions for their "out of compliance" employee
                  nullable: true
                correctionAdvice:
                  type: string
                  description: Optional correction advice
                  example: Based on the role of the employee, managers should remove access that is not required for their job function.
                  nullable: true
                state:
                  type: string
                  description: whether the policy is enforced or not
                  enum:
                    - ENFORCED
                    - NOT_ENFORCED
                  example: ENFORCED
                tags:
                  type: array
                  description: tags for this policy object
                  example:
                    - TAG1
                    - TAG2
                  items:
                    type: string
                creatorId:
                  type: string
                  description: Policy's creator ID
                  example: 0f11f2a4-7c94-4bf3-a2bd-742580fe3bde
                  readOnly: true
                modifierId:
                  type: string
                  description: Policy's modifier ID
                  example: 0f11f2a4-7c94-4bf3-a2bd-742580fe3bde
                  nullable: true
                  readOnly: true
                violationOwnerAssignmentConfig:
                  nullable: true
                  type: object
                  title: Violation Owner Assignment Config
                  properties:
                    assignmentRule:
                      type: string
                      enum:
                        - MANAGER
                        - STATIC
                        - null
                      description: |-
                        Details about the violations owner.
                        MANAGER - identity's manager
                        STATIC - Governance Group or Identity
                      example: MANAGER
                      nullable: true
                    ownerRef:
                      type: object
                      description: The owner of the violation assignment config.
                      nullable: true
                      properties:
                        type:
                          type: string
                          description: Owner type.
                          enum:
                            - IDENTITY
                            - GOVERNANCE_GROUP
                            - MANAGER
                            - null
                          example: IDENTITY
                        id:
                          type: string
                          description: Owner's ID.
                          example: 2c9180a46faadee4016fb4e018c20639
                        name:
                          type: string
                          description: Owner's name.
                          example: Support
                scheduled:
                  type: boolean
                  description: defines whether a policy has been scheduled or not
                  example: true
                  default: false
                type:
                  type: string
                  description: whether a policy is query based or conflicting access based
                  default: GENERAL
                  enum:
                    - GENERAL
                    - CONFLICTING_ACCESS_BASED
                  example: GENERAL
                conflictingAccessCriteria:
                  allOf:
                    - type: object
                      title: Conflicting Access Criteria
                      properties:
                        leftCriteria:
                          type: object
                          title: Access Criteria
                          properties:
                            name:
                              type: string
                              description: Business name for the access construct list
                              example: money-in
                            criteriaList:
                              type: array
                              description: List of criteria. There is a min of 1 and max of 50 items in the list.
                              minItems: 1
                              maxItems: 50
                              items:
                                type: object
                                properties:
                                  type:
                                    type: string
                                    enum:
                                      - ENTITLEMENT
                                    description: Type of the propery to which this reference applies to
                                    example: ENTITLEMENT
                                  id:
                                    type: string
                                    description: ID of the object to which this reference applies to
                                    example: 2c91808568c529c60168cca6f90c1313
                                  name:
                                    type: string
                                    description: Human-readable display name of the object to which this reference applies to
                                    example: Administrator
                              example:
                                - type: ENTITLEMENT
                                  id: 2c9180866166b5b0016167c32ef31a66
                                  name: Administrator
                                - type: ENTITLEMENT
                                  id: 2c9180866166b5b0016167c32ef31a67
                                  name: Administrator
                        rightCriteria:
                          type: object
                          title: Access Criteria
                          properties:
                            name:
                              type: string
                              description: Business name for the access construct list
                              example: money-in
                            criteriaList:
                              type: array
                              description: List of criteria. There is a min of 1 and max of 50 items in the list.
                              minItems: 1
                              maxItems: 50
                              items:
                                type: object
                                properties:
                                  type:
                                    type: string
                                    enum:
                                      - ENTITLEMENT
                                    description: Type of the propery to which this reference applies to
                                    example: ENTITLEMENT
                                  id:
                                    type: string
                                    description: ID of the object to which this reference applies to
                                    example: 2c91808568c529c60168cca6f90c1313
                                  name:
                                    type: string
                                    description: Human-readable display name of the object to which this reference applies to
                                    example: Administrator
                              example:
                                - type: ENTITLEMENT
                                  id: 2c9180866166b5b0016167c32ef31a66
                                  name: Administrator
                                - type: ENTITLEMENT
                                  id: 2c9180866166b5b0016167c32ef31a67
                                  name: Administrator
                    - nullable: true
            examples:
              Conflicting Access Based Policy:
                value:
                  name: Conflicting-Policy-Name
                  description: This policy ensures compliance of xyz
                  ownerRef:
                    type: IDENTITY
                    id: 2c91808568c529c60168cca6f90c1313
                    name: Owner Name
                  externalPolicyReference: XYZ policy
                  compensatingControls: Have a manager review the transaction decisions for their "out of compliance" employee
                  correctionAdvice: Based on the role of the employee, managers should remove access that is not required for their job function.
                  state: ENFORCED
                  tags:
                    - string
                  creatorId: 0f11f2a4-7c94-4bf3-a2bd-742580fe3bde
                  modifierId: 0f11f2a4-7c94-4bf3-a2bd-742580fe3bde
                  violationOwnerAssignmentConfig:
                    assignmentRule: MANAGER
                    ownerRef:
                      type: IDENTITY
                      id: 2c91808568c529c60168cca6f90c1313
                      name: Violation Owner Name
                  scheduled: true
                  type: CONFLICTING_ACCESS_BASED
                  conflictingAccessCriteria:
                    leftCriteria:
                      name: money-in
                      criteriaList:
                        - type: ENTITLEMENT
                          id: 2c9180866166b5b0016167c32ef31a66
                        - type: ENTITLEMENT
                          id: 2c9180866166b5b0016167c32ef31a67
                    rightCriteria:
                      name: money-out
                      criteriaList:
                        - type: ENTITLEMENT
                          id: 2c9180866166b5b0016167c32ef31a68
                        - type: ENTITLEMENT
                          id: 2c9180866166b5b0016167c32ef31a69
              General Policy:
                value:
                  description: Description
                  ownerRef:
                    type: IDENTITY
                    id: 2c918087682f9a86016839c05e8f1aff
                    name: Owner Name
                  externalPolicyReference: New policy
                  policyQuery: policy query implementation
                  compensatingControls: Compensating controls
                  correctionAdvice: Correction advice
                  tags: []
                  state: ENFORCED
                  scheduled: false
                  creatorId: 2c918087682f9a86016839c05e8f1aff
                  modifierId: null
                  violationOwnerAssignmentConfig: null
                  name: General-Policy-Name
      responses:
        '201':
          description: SOD policy created
          content:
            application/json:
              schema:
                type: object
                title: Sod Policy
                properties:
                  id:
                    type: string
                    description: Policy id
                    example: 0f11f2a4-7c94-4bf3-a2bd-742580fe3bde
                    readOnly: true
                  name:
                    type: string
                    description: Policy Business Name
                    example: policy-xyz
                  created:
                    type: string
                    format: date-time
                    description: The time when this SOD policy is created.
                    example: '2020-01-01T00:00:00.000000Z'
                    readOnly: true
                  modified:
                    type: string
                    format: date-time
                    description: The time when this SOD policy is modified.
                    example: '2020-01-01T00:00:00.000000Z'
                    readOnly: true
                  description:
                    type: string
                    description: Optional description of the SOD policy
                    example: This policy ensures compliance of xyz
                    nullable: true
                  ownerRef:
                    type: object
                    description: The owner of the SOD policy.
                    properties:
                      type:
                        type: string
                        description: Owner type.
                        enum:
                          - IDENTITY
                          - GOVERNANCE_GROUP
                        example: IDENTITY
                      id:
                        type: string
                        description: Owner's ID.
                        example: 2c9180a46faadee4016fb4e018c20639
                      name:
                        type: string
                        description: Owner's name.
                        example: Support
                  secondaryOwnerRefs:
                    type: array
                    description: Additional owners of the SOD policy.(Max 10). Applicable only to Conflicting Access Based policies.
                    example:
                      - type: IDENTITY
                        id: 2c9180a46faadee4016fb4e018c20639
                        name: Support
                    items:
                      type: object
                      properties:
                        type:
                          type: string
                          description: Secondary Owner Type
                          enum:
                            - IDENTITY
                            - GOVERNANCE_GROUP
                          example: IDENTITY
                        id:
                          type: string
                          description: Secondary Owner ID
                          example: 2c9180a46faadee4016fb4e018c20639
                        name:
                          type: string
                          description: Secondary Owner Name
                          example: Support
                  allowedControls:
                    type: array
                    description: Compensating or other controls allowed for this policy.(Max 10). Applicable only to Conflicting Access Based policies.
                    example:
                      - type: COMPENSATING_CONTROL
                        id: 2c9180a46faadee4016fb4e018c20639
                        name: Mitigating Control 1
                    items:
                      type: object
                      properties:
                        type:
                          type: string
                          description: Control reference type.
                          enum:
                            - COMPENSATING_CONTROL
                          example: COMPENSATING_CONTROL
                        id:
                          type: string
                          description: Control reference ID.
                          example: 2c9180a46faadee4016fb4e018
                        name:
                          type: string
                          description: Control reference name.
                          example: Mitigating Control 1
                  level:
                    type: string
                    description: Policy severity or priority level. Applicable only to Conflicting Access Based policies. If not specified, default will be HIGH.
                    nullable: true
                    enum:
                      - CRITICAL
                      - HIGH
                      - MEDIUM
                      - LOW
                    example: HIGH
                  externalPolicyReference:
                    type: string
                    description: Optional External Policy Reference
                    example: XYZ policy
                    nullable: true
                  policyQuery:
                    type: string
                    description: Search query of the SOD policy
                    example: '@access(id:0f11f2a4-7c94-4bf3-a2bd-742580fe3bdg) AND @access(id:0f11f2a4-7c94-4bf3-a2bd-742580fe3bdf)'
                  compensatingControls:
                    type: string
                    description: Optional compensating controls(Mitigating Controls)
                    example: Have a manager review the transaction decisions for their "out of compliance" employee
                    nullable: true
                  correctionAdvice:
                    type: string
                    description: Optional correction advice
                    example: Based on the role of the employee, managers should remove access that is not required for their job function.
                    nullable: true
                  state:
                    type: string
                    description: whether the policy is enforced or not
                    enum:
                      - ENFORCED
                      - NOT_ENFORCED
                    example: ENFORCED
                  tags:
                    type: array
                    description: tags for this policy object
                    example:
                      - TAG1
                      - TAG2
                    items:
                      type: string
                  creatorId:
                    type: string
                    description: Policy's creator ID
                    example: 0f11f2a4-7c94-4bf3-a2bd-742580fe3bde
                    readOnly: true
                  modifierId:
                    type: string
                    description: Policy's modifier ID
                    example: 0f11f2a4-7c94-4bf3-a2bd-742580fe3bde
                    nullable: true
                    readOnly: true
                  violationOwnerAssignmentConfig:
                    nullable: true
                    type: object
                    title: Violation Owner Assignment Config
                    properties:
                      assignmentRule:
                        type: string
                        enum:
                          - MANAGER
                          - STATIC
                          - null
                        description: |-
                          Details about the violations owner.
                          MANAGER - identity's manager
                          STATIC - Governance Group or Identity
                        example: MANAGER
                        nullable: true
                      ownerRef:
                        type: object
                        description: The owner of the violation assignment config.
                        nullable: true
                        properties:
                          type:
                            type: string
                            description: Owner type.
                            enum:
                              - IDENTITY
                              - GOVERNANCE_GROUP
                              - MANAGER
                              - null
                            example: IDENTITY
                          id:
                            type: string
                            description: Owner's ID.
                            example: 2c9180a46faadee4016fb4e018c20639
                          name:
                            type: string
                            description: Owner's name.
                            example: Support
                  scheduled:
                    type: boolean
                    description: defines whether a policy has been scheduled or not
                    example: true
                    default: false
                  type:
                    type: string
                    description: whether a policy is query based or conflicting access based
                    default: GENERAL
                    enum:
                      - GENERAL
                      - CONFLICTING_ACCESS_BASED
                    example: GENERAL
                  conflictingAccessCriteria:
                    allOf:
                      - type: object
                        title: Conflicting Access Criteria
                        properties:
                          leftCriteria:
                            type: object
                            title: Access Criteria
                            properties:
                              name:
                                type: string
                                description: Business name for the access construct list
                                example: money-in
                              criteriaList:
                                type: array
                                description: List of criteria. There is a min of 1 and max of 50 items in the list.
                                minItems: 1
                                maxItems: 50
                                items:
                                  type: object
                                  properties:
                                    type:
                                      type: string
                                      enum:
                                        - ENTITLEMENT
                                      description: Type of the propery to which this reference applies to
                                      example: ENTITLEMENT
                                    id:
                                      type: string
                                      description: ID of the object to which this reference applies to
                                      example: 2c91808568c529c60168cca6f90c1313
                                    name:
                                      type: string
                                      description: Human-readable display name of the object to which this reference applies to
                                      example: Administrator
                                example:
                                  - type: ENTITLEMENT
                                    id: 2c9180866166b5b0016167c32ef31a66
                                    name: Administrator
                                  - type: ENTITLEMENT
                                    id: 2c9180866166b5b0016167c32ef31a67
                                    name: Administrator
                          rightCriteria:
                            type: object
                            title: Access Criteria
                            properties:
                              name:
                                type: string
                                description: Business name for the access construct list
                                example: money-in
                              criteriaList:
                                type: array
                                description: List of criteria. There is a min of 1 and max of 50 items in the list.
                                minItems: 1
                                maxItems: 50
                                items:
                                  type: object
                                  properties:
                                    type:
                                      type: string
                                      enum:
                                        - ENTITLEMENT
                                      description: Type of the propery to which this reference applies to
                                      example: ENTITLEMENT
                                    id:
                                      type: string
                                      description: ID of the object to which this reference applies to
                                      example: 2c91808568c529c60168cca6f90c1313
                                    name:
                                      type: string
                                      description: Human-readable display name of the object to which this reference applies to
                                      example: Administrator
                                example:
                                  - type: ENTITLEMENT
                                    id: 2c9180866166b5b0016167c32ef31a66
                                    name: Administrator
                                  - type: ENTITLEMENT
                                    id: 2c9180866166b5b0016167c32ef31a67
                                    name: Administrator
                      - nullable: true
              examples:
                Conflicting Access Based Policy:
                  value:
                    id: 0f11f2a4-7c94-4bf3-a2bd-742580fe3bde
                    name: Conflicting-Policy-Name
                    created: '2020-01-01T00:00:00.000000Z'
                    modified: '2020-01-01T00:00:00.000000Z'
                    description: This policy ensures compliance of xyz
                    ownerRef:
                      type: IDENTITY
                      id: 2c91808568c529c60168cca6f90c1313
                      name: Owner Name
                    externalPolicyReference: XYZ policy
                    policyQuery: '@access(id:2c9180866166b5b0016167c32ef31a66 OR id:2c9180866166b5b0016167c32ef31a67) AND @access(id:2c9180866166b5b0016167c32ef31a68 OR id:2c9180866166b5b0016167c32ef31a69)'
                    compensatingControls: Have a manager review the transaction decisions for their "out of compliance" employee
                    correctionAdvice: Based on the role of the employee, managers should remove access that is not required for their job function.
                    state: ENFORCED
                    tags:
                      - string
                    creatorId: 0f11f2a4-7c94-4bf3-a2bd-742580fe3bde
                    modifierId: 0f11f2a4-7c94-4bf3-a2bd-742580fe3bde
                    violationOwnerAssignmentConfig:
                      assignmentRule: MANAGER
                      ownerRef:
                        type: IDENTITY
                        id: 2c91808568c529c60168cca6f90c1313
                        name: Violation Owner Name
                    scheduled: true
                    type: CONFLICTING_ACCESS_BASED
                    conflictingAccessCriteria:
                      leftCriteria:
                        name: money-in
                        criteriaList:
                          - type: ENTITLEMENT
                            id: 2c9180866166b5b0016167c32ef31a66
                          - type: ENTITLEMENT
                            id: 2c9180866166b5b0016167c32ef31a67
                      rightCriteria:
                        name: money-out
                        criteriaList:
                          - type: ENTITLEMENT
                            id: 2c9180866166b5b0016167c32ef31a68
                          - type: ENTITLEMENT
                            id: 2c9180866166b5b0016167c32ef31a69
                General Policy:
                  value:
                    description: Description
                    ownerRef:
                      type: IDENTITY
                      id: 2c918087682f9a86016839c05e8f1aff
                      name: Owner Name
                    externalPolicyReference: New policy
                    policyQuery: policy query implementation
                    compensatingControls: Compensating controls
                    correctionAdvice: Correction advice
                    tags: []
                    state: ENFORCED
                    scheduled: false
                    creatorId: 2c918087682f9a86016839c05e8f1aff
                    modifierId: null
                    violationOwnerAssignmentConfig: null
                    type: GENERAL
                    conflictingAccessCriteria: null
                    id: 52c11db4-733e-4c31-949a-766c95ec95f1
                    name: General-Policy-Name
                    created: '2020-05-12T19:47:38Z'
                    modified: '2020-05-12T19:47:38Z'
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
