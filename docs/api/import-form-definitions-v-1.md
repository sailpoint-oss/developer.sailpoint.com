## OpenAPI

```yaml POST /form-definitions/v1/import
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
  /form-definitions/v1/import:
    post:
      description: Import form definitions from export.
      operationId: importFormDefinitionsV1
      security:
        - userAuth:
            - sp:forms:manage
            - sp:config:manage
      requestBody:
        description: Body is the request payload to import form definitions
        content:
          application/json:
            schema:
              type: array
              items:
                type: object
                properties:
                  object:
                    properties:
                      id:
                        description: Unique guid identifying the form definition.
                        example: 00000000-0000-0000-0000-000000000000
                        type: string
                        x-go-name: FormDefinitionID
                      name:
                        description: Name of the form definition.
                        example: My form
                        type: string
                        x-go-name: Name
                      description:
                        description: Form definition's description.
                        example: My form description
                        type: string
                        x-go-name: Description
                      owner:
                        properties:
                          type:
                            description: |-
                              FormOwnerType value.
                              IDENTITY FormOwnerTypeIdentity
                            enum:
                              - IDENTITY
                            example: IDENTITY
                            type: string
                            x-go-enum-desc: IDENTITY FormOwnerTypeIdentity
                            x-go-name: Type
                          id:
                            description: Unique identifier of the form's owner.
                            example: 2c9180867624cbd7017642d8c8c81f67
                            type: string
                            x-go-name: ID
                          name:
                            description: Name of the form's owner.
                            example: Grant Smith
                            type: string
                        type: object
                        x-go-package: github.com/sailpoint/sp-forms/domain
                        title: formowner
                      usedBy:
                        description: List of objects using the form definition. Whenever a system uses a form, the API reaches out to the form service to record that the system is currently using it.
                        items:
                          properties:
                            type:
                              description: |-
                                FormUsedByType value. 
                                WORKFLOW FormUsedByTypeWorkflow
                                SOURCE FormUsedByTypeSource
                                MySailPoint FormUsedByType
                              enum:
                                - WORKFLOW
                                - SOURCE
                                - MySailPoint
                              example: WORKFLOW
                              type: string
                              x-go-enum-desc: |-
                                WORKFLOW FormUsedByTypeWorkflow
                                SOURCE FormUsedByTypeSource
                              x-go-name: Type
                            id:
                              description: Unique identifier of the system using the form.
                              example: 61940a92-5484-42bc-bc10-b9982b218cdf
                              type: string
                              x-go-name: ID
                            name:
                              description: Name of the system using the form.
                              example: Access Request Form
                              type: string
                          type: object
                          x-go-package: github.com/sailpoint/sp-forms/domain
                          title: formusedby
                        type: array
                        x-go-name: UsedBy
                      formInput:
                        description: List of form inputs required to create a form-instance object.
                        items:
                          properties:
                            id:
                              description: Unique identifier for the form input.
                              example: 00000000-0000-0000-0000-000000000000
                              type: string
                              x-go-name: ID
                            type:
                              description: |-
                                FormDefinitionInputType value.
                                STRING FormDefinitionInputTypeString
                              enum:
                                - STRING
                                - ARRAY
                              example: STRING
                              type: string
                              x-go-enum-desc: STRING FormDefinitionInputTypeString
                              x-go-name: Type
                            label:
                              description: Name for the form input.
                              example: input1
                              type: string
                              x-go-name: Label
                            description:
                              description: Form input's description.
                              example: A single dynamic scalar value (i.e. number, string, date, etc.) that can be passed into the form for use in conditional logic
                              type: string
                              x-go-name: Description
                          type: object
                          x-go-package: github.com/sailpoint/sp-forms/domain
                          title: formdefinitioninput
                        type: array
                        x-go-name: FormInput
                      formElements:
                        description: List of nested form elements.
                        items:
                          properties:
                            id:
                              description: Form element identifier.
                              example: 00000000-0000-0000-0000-000000000000
                              type: string
                              x-go-name: ID
                            elementType:
                              description: |-
                                FormElementType value. 
                                TEXT FormElementTypeText
                                TOGGLE FormElementTypeToggle
                                TEXTAREA FormElementTypeTextArea
                                HIDDEN FormElementTypeHidden
                                PHONE FormElementTypePhone
                                EMAIL FormElementTypeEmail
                                SELECT FormElementTypeSelect
                                DATE FormElementTypeDate
                                SECTION FormElementTypeSection
                                COLUMN_SET FormElementTypeColumns
                                IMAGE FormElementTypeImage
                                DESCRIPTION FormElementTypeDescription
                              enum:
                                - TEXT
                                - TOGGLE
                                - TEXTAREA
                                - HIDDEN
                                - PHONE
                                - EMAIL
                                - SELECT
                                - DATE
                                - SECTION
                                - COLUMN_SET
                                - IMAGE
                                - DESCRIPTION
                              example: TEXT
                              type: string
                              x-go-name: ElementType
                            config:
                              additionalProperties: true
                              description: Config object.
                              example:
                                label: Department
                              type: object
                              x-go-name: Config
                              x-go-enum-desc: |-
                                TEXT FormElementTypeText
                                TOGGLE FormElementTypeToggle
                                TEXTAREA FormElementTypeTextArea
                                HIDDEN FormElementTypeHidden
                                PHONE FormElementTypePhone
                                EMAIL FormElementTypeEmail
                                SELECT FormElementTypeSelect
                                DATE FormElementTypeDate
                                SECTION FormElementTypeSection
                                COLUMNS FormElementTypeColumns
                            key:
                              description: Technical key.
                              example: department
                              type: string
                              x-go-name: Key
                            validations:
                              nullable: true
                              type: array
                              items:
                                description: Set of FormElementValidation items.
                                type: object
                                properties:
                                  validationType:
                                    description: The type of data validation that you wish to enforce, e.g., a required field, a minimum length, etc.
                                    example: REQUIRED
                                    type: string
                                    enum:
                                      - REQUIRED
                                      - MIN_LENGTH
                                      - MAX_LENGTH
                                      - REGEX
                                      - DATE
                                      - MAX_DATE
                                      - MIN_DATE
                                      - LESS_THAN_DATE
                                      - PHONE
                                      - EMAIL
                                      - DATA_SOURCE
                                      - TEXTAREA
                                x-go-package: github.com/sailpoint/sp-forms/domain
                                title: formelementvalidationsset
                          type: object
                          x-go-package: github.com/sailpoint/sp-forms/domain
                          title: formelement
                        type: array
                        x-go-name: FormElements
                      formConditions:
                        description: Conditional logic that can dynamically modify the form as the recipient is interacting with it.
                        items:
                          description: Represent a form conditional.
                          properties:
                            ruleOperator:
                              description: |-
                                ConditionRuleLogicalOperatorType value.
                                AND ConditionRuleLogicalOperatorTypeAnd
                                OR ConditionRuleLogicalOperatorTypeOr
                              enum:
                                - AND
                                - OR
                              example: AND
                              type: string
                              x-go-enum-desc: |-
                                AND ConditionRuleLogicalOperatorTypeAnd
                                OR ConditionRuleLogicalOperatorTypeOr
                              x-go-name: RuleOperator
                            rules:
                              description: List of rules.
                              items:
                                properties:
                                  sourceType:
                                    description: |-
                                      Defines the type of object being selected. It will be either a reference to a form input (by input name) or a form element (by technical key).
                                      INPUT ConditionRuleSourceTypeInput
                                      ELEMENT ConditionRuleSourceTypeElement
                                    enum:
                                      - INPUT
                                      - ELEMENT
                                    example: ELEMENT
                                    type: string
                                    x-go-enum-desc: |-
                                      INPUT ConditionRuleSourceTypeInput
                                      ELEMENT ConditionRuleSourceTypeElement
                                    x-go-name: SourceType
                                  source:
                                    description: |-
                                      Source - if the sourceType is ConditionRuleSourceTypeInput, the source type is the name of the form input to accept. However, if the sourceType is ConditionRuleSourceTypeElement,
                                      the source is the name of a technical key of an element to retrieve its value.
                                    example: department
                                    type: string
                                    x-go-name: Source
                                  operator:
                                    description: |-
                                      ConditionRuleComparisonOperatorType value.
                                      EQ ConditionRuleComparisonOperatorTypeEquals  This comparison operator compares the source and target for equality.
                                      NE ConditionRuleComparisonOperatorTypeNotEquals  This comparison operator compares the source and target for inequality.
                                      CO ConditionRuleComparisonOperatorTypeContains  This comparison operator searches the source to see whether it contains the value.
                                      NOT_CO ConditionRuleComparisonOperatorTypeNotContains
                                      IN ConditionRuleComparisonOperatorTypeIncludes  This comparison operator searches the source if it equals any of the values.
                                      NOT_IN ConditionRuleComparisonOperatorTypeNotIncludes
                                      EM ConditionRuleComparisonOperatorTypeEmpty
                                      NOT_EM ConditionRuleComparisonOperatorTypeNotEmpty
                                      SW ConditionRuleComparisonOperatorTypeStartsWith  Checks whether a string starts with another substring of the same string. This operator is case-sensitive.
                                      NOT_SW ConditionRuleComparisonOperatorTypeNotStartsWith
                                      EW ConditionRuleComparisonOperatorTypeEndsWith  Checks whether a string ends with another substring of the same string. This operator is case-sensitive.
                                      NOT_EW ConditionRuleComparisonOperatorTypeNotEndsWith
                                    enum:
                                      - EQ
                                      - NE
                                      - CO
                                      - NOT_CO
                                      - IN
                                      - NOT_IN
                                      - EM
                                      - NOT_EM
                                      - SW
                                      - NOT_SW
                                      - EW
                                      - NOT_EW
                                    example: EQ
                                    type: string
                                    x-go-enum-desc: |-
                                      EQ ConditionRuleComparisonOperatorTypeEquals  This comparison operator compares the source and target for equality.
                                      NE ConditionRuleComparisonOperatorTypeNotEquals  This comparison operator compares the source and target for inequality.
                                      CO ConditionRuleComparisonOperatorTypeContains  This comparison operator searches the source to see whether it contains the value.
                                      NOT_CO ConditionRuleComparisonOperatorTypeNotContains
                                      IN ConditionRuleComparisonOperatorTypeIncludes  This comparison operator searches the source if it equals any of the values.
                                      NOT_IN ConditionRuleComparisonOperatorTypeNotIncludes
                                      EM ConditionRuleComparisonOperatorTypeEmpty
                                      NOT_EM ConditionRuleComparisonOperatorTypeNotEmpty
                                      SW ConditionRuleComparisonOperatorTypeStartsWith  Checks whether a string starts with another substring of the same string. This operator is case-sensitive.
                                      NOT_SW ConditionRuleComparisonOperatorTypeNotStartsWith
                                      EW ConditionRuleComparisonOperatorTypeEndsWith  Checks whether a string ends with another substring of the same string. This operator is case-sensitive.
                                      NOT_EW ConditionRuleComparisonOperatorTypeNotEndsWith
                                    x-go-name: Operator
                                  valueType:
                                    description: |-
                                      ConditionRuleValueType type.
                                      STRING ConditionRuleValueTypeString  This value is a static string.
                                      STRING_LIST ConditionRuleValueTypeStringList  This value is an array of string values.
                                      INPUT ConditionRuleValueTypeInput  This value is a reference to a form input.
                                      ELEMENT ConditionRuleValueTypeElement  This value is a reference to a form element (by technical key).
                                      LIST ConditionRuleValueTypeList
                                      BOOLEAN ConditionRuleValueTypeBoolean
                                    enum:
                                      - STRING
                                      - STRING_LIST
                                      - INPUT
                                      - ELEMENT
                                      - LIST
                                      - BOOLEAN
                                    example: STRING
                                    type: string
                                    x-go-enum-desc: |-
                                      STRING ConditionRuleValueTypeString  This value is a static string.
                                      STRING_LIST ConditionRuleValueTypeStringList   This value is an array of string values.
                                      INPUT ConditionRuleValueTypeInput  This value is a reference to a form input.
                                      ELEMENT ConditionRuleValueTypeElement  This value is a reference to a form element (by technical key).
                                      LIST ConditionRuleValueTypeList
                                      BOOLEAN ConditionRuleValueTypeBoolean
                                    x-go-name: ValueType
                                  value:
                                    type: string
                                    description: Based on the ValueType.
                                    example: Engineering
                                    x-go-name: Value
                                type: object
                                x-go-package: github.com/sailpoint/sp-forms/domain
                                title: conditionrule
                              type: array
                              x-go-name: Rules
                            effects:
                              description: List of effects.
                              items:
                                description: Effect produced by a condition.
                                properties:
                                  effectType:
                                    description: |-
                                      Type of effect to perform when the conditions are evaluated for this logic block.
                                      HIDE ConditionEffectTypeHide  Disables validations.
                                      SHOW ConditionEffectTypeShow  Enables validations.
                                      DISABLE ConditionEffectTypeDisable  Disables validations.
                                      ENABLE ConditionEffectTypeEnable  Enables validations.
                                      REQUIRE ConditionEffectTypeRequire
                                      OPTIONAL ConditionEffectTypeOptional
                                      SUBMIT_MESSAGE ConditionEffectTypeSubmitMessage
                                      SUBMIT_NOTIFICATION ConditionEffectTypeSubmitNotification
                                      SET_DEFAULT_VALUE ConditionEffectTypeSetDefaultValue  This value is ignored on purpose.
                                    enum:
                                      - HIDE
                                      - SHOW
                                      - DISABLE
                                      - ENABLE
                                      - REQUIRE
                                      - OPTIONAL
                                      - SUBMIT_MESSAGE
                                      - SUBMIT_NOTIFICATION
                                      - SET_DEFAULT_VALUE
                                    example: HIDE
                                    type: string
                                    x-go-enum-desc: |-
                                      HIDE ConditionEffectTypeHide  Disables validations.
                                      SHOW ConditionEffectTypeShow  Enables validations.
                                      DISABLE ConditionEffectTypeDisable  Disables validations.
                                      ENABLE ConditionEffectTypeEnable  Enables validations.
                                      REQUIRE ConditionEffectTypeRequire
                                      OPTIONAL ConditionEffectTypeOptional
                                      SUBMIT_MESSAGE ConditionEffectTypeSubmitMessage
                                      SUBMIT_NOTIFICATION ConditionEffectTypeSubmitNotification
                                      SET_DEFAULT_VALUE ConditionEffectTypeSetDefaultValue  This value is ignored on purpose.
                                    x-go-name: EffectType
                                  config:
                                    description: Arbitrary map containing a configuration based on the EffectType.
                                    type: object
                                    properties:
                                      defaultValueLabel:
                                        type: string
                                        description: Effect type's label.
                                        example: Access to Remove
                                      element:
                                        type: string
                                        description: Element's identifier.
                                        example: 8110662963316867
                                    x-go-name: Config
                                type: object
                                x-go-package: github.com/sailpoint/sp-forms/domain
                                title: conditioneffect
                              type: array
                              x-go-name: Effects
                          type: object
                          x-go-package: github.com/sailpoint/sp-forms/domain
                          title: formcondition
                        type: array
                        x-go-name: FormConditions
                      created:
                        description: Created is the date the form definition was created
                        example: '2023-07-12T20:14:57.74486Z'
                        format: date-time
                        type: string
                        x-go-name: Created
                      modified:
                        description: Modified is the last date the form definition was modified
                        example: '2023-07-12T20:14:57.74486Z'
                        format: date-time
                        type: string
                        x-go-name: Modified
                    type: object
                    x-go-package: github.com/sailpoint/sp-forms/domain
                    title: formdefinitionresponse
                  self:
                    type: string
                    x-go-name: Self
                  version:
                    type: integer
                    format: int32
                    x-go-name: Version
            example:
              - version: 1
                self:
                  name: All fields not required
                  id: 05ed4edb-d0a9-41d9-ad0c-2f6e486ec4aa
                  type: FORM_DEFINITION
                object:
                  id: 05ed4edb-d0a9-41d9-ad0c-2f6e486ec4aa
                  name: All fields not required
                  description: description
                  owner:
                    type: IDENTITY
                    id: 3447d8ec2602455ab6f1e8408a0f0150
                  usedBy:
                    - type: WORKFLOW
                      id: 5008594c-dacc-4295-8fee-41df60477304
                    - type: WORKFLOW
                      id: 97e75a75-c179-4fbc-a2da-b5fa4aaa8743
                  formInput:
                    - type: STRING
                      label: input1
                      description: A single dynamic scalar value (i.e. number, string, date, etc) that can be passed into the form for use in conditional logic
                  formElements:
                    - id: '3069272797630701'
                      elementType: SECTION
                      config:
                        label: First Section
                        formElements:
                          - id: '3069272797630700'
                            elementType: TEXT
                            key: firstName
                            config:
                              label: First Name
                          - id: '3498415402897539'
                            elementType: TEXT
                            key: lastName
                            config:
                              label: Last Name
                  formConditions:
                    - ruleOperator: AND
                      rules:
                        - sourceType: INPUT
                          source: Department
                          operator: EQ
                          valueType: STRING
                          value: Sales
                      effects:
                        - effectType: HIDE
                          config:
                            element: '2614088730489570'
                  created: '2022-10-04T19:27:04.456Z'
                  modified: '2022-11-16T20:45:02.172Z'
        required: false
      responses:
        '202':
          description: Returns statuses of those form definition objects imported
          content:
            application/json:
              schema:
                type: object
                properties:
                  errors:
                    type: array
                    items:
                      type: object
                      properties:
                        detail:
                          type: object
                          additionalProperties:
                            type: object
                          x-go-name: Detail
                        key:
                          type: string
                          x-go-name: Key
                        text:
                          type: string
                          x-go-name: Text
                    x-go-name: Errors
                  importedObjects:
                    type: array
                    items:
                      type: object
                      properties:
                        object:
                          properties:
                            id:
                              description: Unique guid identifying the form definition.
                              example: 00000000-0000-0000-0000-000000000000
                              type: string
                              x-go-name: FormDefinitionID
                            name:
                              description: Name of the form definition.
                              example: My form
                              type: string
                              x-go-name: Name
                            description:
                              description: Form definition's description.
                              example: My form description
                              type: string
                              x-go-name: Description
                            owner:
                              properties:
                                type:
                                  description: |-
                                    FormOwnerType value.
                                    IDENTITY FormOwnerTypeIdentity
                                  enum:
                                    - IDENTITY
                                  example: IDENTITY
                                  type: string
                                  x-go-enum-desc: IDENTITY FormOwnerTypeIdentity
                                  x-go-name: Type
                                id:
                                  description: Unique identifier of the form's owner.
                                  example: 2c9180867624cbd7017642d8c8c81f67
                                  type: string
                                  x-go-name: ID
                                name:
                                  description: Name of the form's owner.
                                  example: Grant Smith
                                  type: string
                              type: object
                              x-go-package: github.com/sailpoint/sp-forms/domain
                              title: formowner
                            usedBy:
                              description: List of objects using the form definition. Whenever a system uses a form, the API reaches out to the form service to record that the system is currently using it.
                              items:
                                properties:
                                  type:
                                    description: |-
                                      FormUsedByType value. 
                                      WORKFLOW FormUsedByTypeWorkflow
                                      SOURCE FormUsedByTypeSource
                                      MySailPoint FormUsedByType
                                    enum:
                                      - WORKFLOW
                                      - SOURCE
                                      - MySailPoint
                                    example: WORKFLOW
                                    type: string
                                    x-go-enum-desc: |-
                                      WORKFLOW FormUsedByTypeWorkflow
                                      SOURCE FormUsedByTypeSource
                                    x-go-name: Type
                                  id:
                                    description: Unique identifier of the system using the form.
                                    example: 61940a92-5484-42bc-bc10-b9982b218cdf
                                    type: string
                                    x-go-name: ID
                                  name:
                                    description: Name of the system using the form.
                                    example: Access Request Form
                                    type: string
                                type: object
                                x-go-package: github.com/sailpoint/sp-forms/domain
                                title: formusedby
                              type: array
                              x-go-name: UsedBy
                            formInput:
                              description: List of form inputs required to create a form-instance object.
                              items:
                                properties:
                                  id:
                                    description: Unique identifier for the form input.
                                    example: 00000000-0000-0000-0000-000000000000
                                    type: string
                                    x-go-name: ID
                                  type:
                                    description: |-
                                      FormDefinitionInputType value.
                                      STRING FormDefinitionInputTypeString
                                    enum:
                                      - STRING
                                      - ARRAY
                                    example: STRING
                                    type: string
                                    x-go-enum-desc: STRING FormDefinitionInputTypeString
                                    x-go-name: Type
                                  label:
                                    description: Name for the form input.
                                    example: input1
                                    type: string
                                    x-go-name: Label
                                  description:
                                    description: Form input's description.
                                    example: A single dynamic scalar value (i.e. number, string, date, etc.) that can be passed into the form for use in conditional logic
                                    type: string
                                    x-go-name: Description
                                type: object
                                x-go-package: github.com/sailpoint/sp-forms/domain
                                title: formdefinitioninput
                              type: array
                              x-go-name: FormInput
                            formElements:
                              description: List of nested form elements.
                              items:
                                properties:
                                  id:
                                    description: Form element identifier.
                                    example: 00000000-0000-0000-0000-000000000000
                                    type: string
                                    x-go-name: ID
                                  elementType:
                                    description: |-
                                      FormElementType value. 
                                      TEXT FormElementTypeText
                                      TOGGLE FormElementTypeToggle
                                      TEXTAREA FormElementTypeTextArea
                                      HIDDEN FormElementTypeHidden
                                      PHONE FormElementTypePhone
                                      EMAIL FormElementTypeEmail
                                      SELECT FormElementTypeSelect
                                      DATE FormElementTypeDate
                                      SECTION FormElementTypeSection
                                      COLUMN_SET FormElementTypeColumns
                                      IMAGE FormElementTypeImage
                                      DESCRIPTION FormElementTypeDescription
                                    enum:
                                      - TEXT
                                      - TOGGLE
                                      - TEXTAREA
                                      - HIDDEN
                                      - PHONE
                                      - EMAIL
                                      - SELECT
                                      - DATE
                                      - SECTION
                                      - COLUMN_SET
                                      - IMAGE
                                      - DESCRIPTION
                                    example: TEXT
                                    type: string
                                    x-go-name: ElementType
                                  config:
                                    additionalProperties: true
                                    description: Config object.
                                    example:
                                      label: Department
                                    type: object
                                    x-go-name: Config
                                    x-go-enum-desc: |-
                                      TEXT FormElementTypeText
                                      TOGGLE FormElementTypeToggle
                                      TEXTAREA FormElementTypeTextArea
                                      HIDDEN FormElementTypeHidden
                                      PHONE FormElementTypePhone
                                      EMAIL FormElementTypeEmail
                                      SELECT FormElementTypeSelect
                                      DATE FormElementTypeDate
                                      SECTION FormElementTypeSection
                                      COLUMNS FormElementTypeColumns
                                  key:
                                    description: Technical key.
                                    example: department
                                    type: string
                                    x-go-name: Key
                                  validations:
                                    nullable: true
                                    type: array
                                    items:
                                      description: Set of FormElementValidation items.
                                      type: object
                                      properties:
                                        validationType:
                                          description: The type of data validation that you wish to enforce, e.g., a required field, a minimum length, etc.
                                          example: REQUIRED
                                          type: string
                                          enum:
                                            - REQUIRED
                                            - MIN_LENGTH
                                            - MAX_LENGTH
                                            - REGEX
                                            - DATE
                                            - MAX_DATE
                                            - MIN_DATE
                                            - LESS_THAN_DATE
                                            - PHONE
                                            - EMAIL
                                            - DATA_SOURCE
                                            - TEXTAREA
                                      x-go-package: github.com/sailpoint/sp-forms/domain
                                      title: formelementvalidationsset
                                type: object
                                x-go-package: github.com/sailpoint/sp-forms/domain
                                title: formelement
                              type: array
                              x-go-name: FormElements
                            formConditions:
                              description: Conditional logic that can dynamically modify the form as the recipient is interacting with it.
                              items:
                                description: Represent a form conditional.
                                properties:
                                  ruleOperator:
                                    description: |-
                                      ConditionRuleLogicalOperatorType value.
                                      AND ConditionRuleLogicalOperatorTypeAnd
                                      OR ConditionRuleLogicalOperatorTypeOr
                                    enum:
                                      - AND
                                      - OR
                                    example: AND
                                    type: string
                                    x-go-enum-desc: |-
                                      AND ConditionRuleLogicalOperatorTypeAnd
                                      OR ConditionRuleLogicalOperatorTypeOr
                                    x-go-name: RuleOperator
                                  rules:
                                    description: List of rules.
                                    items:
                                      properties:
                                        sourceType:
                                          description: |-
                                            Defines the type of object being selected. It will be either a reference to a form input (by input name) or a form element (by technical key).
                                            INPUT ConditionRuleSourceTypeInput
                                            ELEMENT ConditionRuleSourceTypeElement
                                          enum:
                                            - INPUT
                                            - ELEMENT
                                          example: ELEMENT
                                          type: string
                                          x-go-enum-desc: |-
                                            INPUT ConditionRuleSourceTypeInput
                                            ELEMENT ConditionRuleSourceTypeElement
                                          x-go-name: SourceType
                                        source:
                                          description: |-
                                            Source - if the sourceType is ConditionRuleSourceTypeInput, the source type is the name of the form input to accept. However, if the sourceType is ConditionRuleSourceTypeElement,
                                            the source is the name of a technical key of an element to retrieve its value.
                                          example: department
                                          type: string
                                          x-go-name: Source
                                        operator:
                                          description: |-
                                            ConditionRuleComparisonOperatorType value.
                                            EQ ConditionRuleComparisonOperatorTypeEquals  This comparison operator compares the source and target for equality.
                                            NE ConditionRuleComparisonOperatorTypeNotEquals  This comparison operator compares the source and target for inequality.
                                            CO ConditionRuleComparisonOperatorTypeContains  This comparison operator searches the source to see whether it contains the value.
                                            NOT_CO ConditionRuleComparisonOperatorTypeNotContains
                                            IN ConditionRuleComparisonOperatorTypeIncludes  This comparison operator searches the source if it equals any of the values.
                                            NOT_IN ConditionRuleComparisonOperatorTypeNotIncludes
                                            EM ConditionRuleComparisonOperatorTypeEmpty
                                            NOT_EM ConditionRuleComparisonOperatorTypeNotEmpty
                                            SW ConditionRuleComparisonOperatorTypeStartsWith  Checks whether a string starts with another substring of the same string. This operator is case-sensitive.
                                            NOT_SW ConditionRuleComparisonOperatorTypeNotStartsWith
                                            EW ConditionRuleComparisonOperatorTypeEndsWith  Checks whether a string ends with another substring of the same string. This operator is case-sensitive.
                                            NOT_EW ConditionRuleComparisonOperatorTypeNotEndsWith
                                          enum:
                                            - EQ
                                            - NE
                                            - CO
                                            - NOT_CO
                                            - IN
                                            - NOT_IN
                                            - EM
                                            - NOT_EM
                                            - SW
                                            - NOT_SW
                                            - EW
                                            - NOT_EW
                                          example: EQ
                                          type: string
                                          x-go-enum-desc: |-
                                            EQ ConditionRuleComparisonOperatorTypeEquals  This comparison operator compares the source and target for equality.
                                            NE ConditionRuleComparisonOperatorTypeNotEquals  This comparison operator compares the source and target for inequality.
                                            CO ConditionRuleComparisonOperatorTypeContains  This comparison operator searches the source to see whether it contains the value.
                                            NOT_CO ConditionRuleComparisonOperatorTypeNotContains
                                            IN ConditionRuleComparisonOperatorTypeIncludes  This comparison operator searches the source if it equals any of the values.
                                            NOT_IN ConditionRuleComparisonOperatorTypeNotIncludes
                                            EM ConditionRuleComparisonOperatorTypeEmpty
                                            NOT_EM ConditionRuleComparisonOperatorTypeNotEmpty
                                            SW ConditionRuleComparisonOperatorTypeStartsWith  Checks whether a string starts with another substring of the same string. This operator is case-sensitive.
                                            NOT_SW ConditionRuleComparisonOperatorTypeNotStartsWith
                                            EW ConditionRuleComparisonOperatorTypeEndsWith  Checks whether a string ends with another substring of the same string. This operator is case-sensitive.
                                            NOT_EW ConditionRuleComparisonOperatorTypeNotEndsWith
                                          x-go-name: Operator
                                        valueType:
                                          description: |-
                                            ConditionRuleValueType type.
                                            STRING ConditionRuleValueTypeString  This value is a static string.
                                            STRING_LIST ConditionRuleValueTypeStringList  This value is an array of string values.
                                            INPUT ConditionRuleValueTypeInput  This value is a reference to a form input.
                                            ELEMENT ConditionRuleValueTypeElement  This value is a reference to a form element (by technical key).
                                            LIST ConditionRuleValueTypeList
                                            BOOLEAN ConditionRuleValueTypeBoolean
                                          enum:
                                            - STRING
                                            - STRING_LIST
                                            - INPUT
                                            - ELEMENT
                                            - LIST
                                            - BOOLEAN
                                          example: STRING
                                          type: string
                                          x-go-enum-desc: |-
                                            STRING ConditionRuleValueTypeString  This value is a static string.
                                            STRING_LIST ConditionRuleValueTypeStringList   This value is an array of string values.
                                            INPUT ConditionRuleValueTypeInput  This value is a reference to a form input.
                                            ELEMENT ConditionRuleValueTypeElement  This value is a reference to a form element (by technical key).
                                            LIST ConditionRuleValueTypeList
                                            BOOLEAN ConditionRuleValueTypeBoolean
                                          x-go-name: ValueType
                                        value:
                                          type: string
                                          description: Based on the ValueType.
                                          example: Engineering
                                          x-go-name: Value
                                      type: object
                                      x-go-package: github.com/sailpoint/sp-forms/domain
                                      title: conditionrule
                                    type: array
                                    x-go-name: Rules
                                  effects:
                                    description: List of effects.
                                    items:
                                      description: Effect produced by a condition.
                                      properties:
                                        effectType:
                                          description: |-
                                            Type of effect to perform when the conditions are evaluated for this logic block.
                                            HIDE ConditionEffectTypeHide  Disables validations.
                                            SHOW ConditionEffectTypeShow  Enables validations.
                                            DISABLE ConditionEffectTypeDisable  Disables validations.
                                            ENABLE ConditionEffectTypeEnable  Enables validations.
                                            REQUIRE ConditionEffectTypeRequire
                                            OPTIONAL ConditionEffectTypeOptional
                                            SUBMIT_MESSAGE ConditionEffectTypeSubmitMessage
                                            SUBMIT_NOTIFICATION ConditionEffectTypeSubmitNotification
                                            SET_DEFAULT_VALUE ConditionEffectTypeSetDefaultValue  This value is ignored on purpose.
                                          enum:
                                            - HIDE
                                            - SHOW
                                            - DISABLE
                                            - ENABLE
                                            - REQUIRE
                                            - OPTIONAL
                                            - SUBMIT_MESSAGE
                                            - SUBMIT_NOTIFICATION
                                            - SET_DEFAULT_VALUE
                                          example: HIDE
                                          type: string
                                          x-go-enum-desc: |-
                                            HIDE ConditionEffectTypeHide  Disables validations.
                                            SHOW ConditionEffectTypeShow  Enables validations.
                                            DISABLE ConditionEffectTypeDisable  Disables validations.
                                            ENABLE ConditionEffectTypeEnable  Enables validations.
                                            REQUIRE ConditionEffectTypeRequire
                                            OPTIONAL ConditionEffectTypeOptional
                                            SUBMIT_MESSAGE ConditionEffectTypeSubmitMessage
                                            SUBMIT_NOTIFICATION ConditionEffectTypeSubmitNotification
                                            SET_DEFAULT_VALUE ConditionEffectTypeSetDefaultValue  This value is ignored on purpose.
                                          x-go-name: EffectType
                                        config:
                                          description: Arbitrary map containing a configuration based on the EffectType.
                                          type: object
                                          properties:
                                            defaultValueLabel:
                                              type: string
                                              description: Effect type's label.
                                              example: Access to Remove
                                            element:
                                              type: string
                                              description: Element's identifier.
                                              example: 8110662963316867
                                          x-go-name: Config
                                      type: object
                                      x-go-package: github.com/sailpoint/sp-forms/domain
                                      title: conditioneffect
                                    type: array
                                    x-go-name: Effects
                                type: object
                                x-go-package: github.com/sailpoint/sp-forms/domain
                                title: formcondition
                              type: array
                              x-go-name: FormConditions
                            created:
                              description: Created is the date the form definition was created
                              example: '2023-07-12T20:14:57.74486Z'
                              format: date-time
                              type: string
                              x-go-name: Created
                            modified:
                              description: Modified is the last date the form definition was modified
                              example: '2023-07-12T20:14:57.74486Z'
                              format: date-time
                              type: string
                              x-go-name: Modified
                          type: object
                          x-go-package: github.com/sailpoint/sp-forms/domain
                          title: formdefinitionresponse
                        self:
                          type: string
                          x-go-name: Self
                        version:
                          type: integer
                          format: int32
                          x-go-name: Version
                    x-go-name: ImportedObjects
                  infos:
                    type: array
                    items:
                      type: object
                      properties:
                        detail:
                          type: object
                          additionalProperties:
                            type: object
                          x-go-name: Detail
                        key:
                          type: string
                          x-go-name: Key
                        text:
                          type: string
                          x-go-name: Text
                    x-go-name: Infos
                  warnings:
                    type: array
                    items:
                      type: object
                      properties:
                        detail:
                          type: object
                          additionalProperties:
                            type: object
                          x-go-name: Detail
                        key:
                          type: string
                          x-go-name: Key
                        text:
                          type: string
                          x-go-name: Text
                    x-go-name: Warnings
        '400':
          description: An error with the request occurred
          content:
            application/json:
              schema:
                type: object
                properties:
                  detailCode:
                    type: string
                    x-go-name: DetailCode
                  messages:
                    type: array
                    items:
                      title: ErrorMessage is the standard API error response message type.
                      type: object
                      properties:
                        locale:
                          description: Locale is the current Locale
                          example: en-US
                          type: string
                          x-go-name: Locale
                        localeOrigin:
                          description: LocaleOrigin holds possible values of how the locale was selected
                          example: DEFAULT
                          type: string
                          x-go-name: LocaleOrigin
                        text:
                          description: Text is the actual text of the error message
                          example: This is an error
                          type: string
                          x-go-name: Text
                      x-go-package: github.com/sailpoint/atlas-go/atlas/web
                    x-go-name: Messages
                  statusCode:
                    type: integer
                    format: int64
                    x-go-name: StatusCode
                  trackingId:
                    type: string
                    x-go-name: TrackingID
        '401':
          description: An error with the authorization occurred
          content:
            application/json:
              schema:
                type: object
                properties:
                  detailCode:
                    type: string
                    x-go-name: DetailCode
                  messages:
                    type: array
                    items:
                      title: ErrorMessage is the standard API error response message type.
                      type: object
                      properties:
                        locale:
                          description: Locale is the current Locale
                          example: en-US
                          type: string
                          x-go-name: Locale
                        localeOrigin:
                          description: LocaleOrigin holds possible values of how the locale was selected
                          example: DEFAULT
                          type: string
                          x-go-name: LocaleOrigin
                        text:
                          description: Text is the actual text of the error message
                          example: This is an error
                          type: string
                          x-go-name: Text
                      x-go-package: github.com/sailpoint/atlas-go/atlas/web
                    x-go-name: Messages
                  statusCode:
                    type: integer
                    format: int64
                    x-go-name: StatusCode
                  trackingId:
                    type: string
                    x-go-name: TrackingID
        '403':
          description: An error with the user permissions occurred
          content:
            application/json:
              schema:
                type: object
                properties:
                  detailCode:
                    type: string
                    x-go-name: DetailCode
                  messages:
                    type: array
                    items:
                      title: ErrorMessage is the standard API error response message type.
                      type: object
                      properties:
                        locale:
                          description: Locale is the current Locale
                          example: en-US
                          type: string
                          x-go-name: Locale
                        localeOrigin:
                          description: LocaleOrigin holds possible values of how the locale was selected
                          example: DEFAULT
                          type: string
                          x-go-name: LocaleOrigin
                        text:
                          description: Text is the actual text of the error message
                          example: This is an error
                          type: string
                          x-go-name: Text
                      x-go-package: github.com/sailpoint/atlas-go/atlas/web
                    x-go-name: Messages
                  statusCode:
                    type: integer
                    format: int64
                    x-go-name: StatusCode
                  trackingId:
                    type: string
                    x-go-name: TrackingID
        '429':
          description: Too many requests
          content:
            application/json:
              schema:
                title: Error is the standard API error response type.
                type: object
                properties:
                  detailCode:
                    description: DetailCode is the text of the status code returned
                    example: Internal Server Error
                    type: string
                    x-go-name: DetailCode
                  messages:
                    type: array
                    items:
                      title: ErrorMessage is the standard API error response message type.
                      type: object
                      properties:
                        locale:
                          description: Locale is the current Locale
                          example: en-US
                          type: string
                          x-go-name: Locale
                        localeOrigin:
                          description: LocaleOrigin holds possible values of how the locale was selected
                          example: DEFAULT
                          type: string
                          x-go-name: LocaleOrigin
                        text:
                          description: Text is the actual text of the error message
                          example: This is an error
                          type: string
                          x-go-name: Text
                      x-go-package: github.com/sailpoint/atlas-go/atlas/web
                    x-go-name: Messages
                  trackingId:
                    description: TrackingID is the request tracking unique identifier
                    example: 9cd03ef80e6a425eb6b11bdbb057cdb4
                    type: string
                    x-go-name: TrackingID
                x-go-package: github.com/sailpoint/atlas-go/atlas/web
        '500':
          description: An internal server error occurred
          content:
            application/json:
              schema:
                type: object
                properties:
                  detailCode:
                    type: string
                    x-go-name: DetailCode
                  messages:
                    type: array
                    items:
                      title: ErrorMessage is the standard API error response message type.
                      type: object
                      properties:
                        locale:
                          description: Locale is the current Locale
                          example: en-US
                          type: string
                          x-go-name: Locale
                        localeOrigin:
                          description: LocaleOrigin holds possible values of how the locale was selected
                          example: DEFAULT
                          type: string
                          x-go-name: LocaleOrigin
                        text:
                          description: Text is the actual text of the error message
                          example: This is an error
                          type: string
                          x-go-name: Text
                      x-go-package: github.com/sailpoint/atlas-go/atlas/web
                    x-go-name: Messages
                  statusCode:
                    type: integer
                    format: int64
                    x-go-name: StatusCode
                  trackingId:
                    type: string
                    x-go-name: TrackingID
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
