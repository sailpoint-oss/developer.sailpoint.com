## OpenAPI

```yaml PATCH /form-instances/v1/{formInstanceID}
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
  /form-instances/v1/{formInstanceID}:
    patch:
      description: |-
        Parameter `{formInstanceID}` should match a form instance ID.

        Only the assigned recipient (`recipients[].id` when `type` is `IDENTITY`) may call this.
      operationId: patchFormInstanceV1
      security:
        - userAuth: []
      parameters:
        - name: formInstanceID
          in: path
          description: Form instance ID
          required: true
          x-sailpoint-resource-operation-id: searchFormInstancesByTenantV1
          schema:
            type: string
            x-go-name: FormInstanceID
          example: 00000000-0000-0000-0000-000000000000
          x-go-name: FormInstanceID
      requestBody:
        description: 'Body is the request payload to patch a form instance, check: https://jsonpatch.com'
        content:
          application/json:
            schema:
              title: Patch is an ordered collection of Operations.
              description: Patch is an ordered collection of Operations.
              type: array
              example:
                - op: replace
                  path: /description
                  value: a new description
              items:
                title: Operation is a single JSON-Patch step, such as a single 'add' operation.
                type: object
                additionalProperties:
                  type: object
                  properties: {}
                x-go-package: github.com/evanphx/json-patch
              x-go-package: github.com/evanphx/json-patch
            example:
              - op: replace
                path: /state
                value: SUBMITTED
              - op: replace
                path: /formData
                value:
                  a-key-1: a-value-1
                  a-key-2: true
                  a-key-3: 1
        required: false
      responses:
        '200':
          description: Returns the form instance updated
          content:
            application/json:
              schema:
                properties:
                  id:
                    description: Unique guid identifying this form instance
                    example: 06a2d961-07fa-44d1-8d0a-2f6470e30fd2
                    type: string
                    x-go-name: FormInstanceID
                  expire:
                    description: Expire is the maximum amount of time that a form can be in progress. After this time is reached then the form will be moved to a CANCELED state automatically. The user will no longer be able to complete the submission. When a form instance is expires an audit log will be generated for that record
                    example: '2023-08-12T20:14:57.74486Z'
                    type: string
                    x-go-name: Expire
                  state:
                    description: |-
                      State the state of the form instance
                      ASSIGNED FormInstanceStateAssigned
                      IN_PROGRESS FormInstanceStateInProgress
                      SUBMITTED FormInstanceStateSubmitted
                      COMPLETED FormInstanceStateCompleted
                      CANCELLED FormInstanceStateCancelled
                    enum:
                      - ASSIGNED
                      - IN_PROGRESS
                      - SUBMITTED
                      - COMPLETED
                      - CANCELLED
                    example: ASSIGNED
                    type: string
                    x-go-enum-desc: |-
                      ASSIGNED FormInstanceStateAssigned
                      IN_PROGRESS FormInstanceStateInProgress
                      SUBMITTED FormInstanceStateSubmitted
                      COMPLETED FormInstanceStateCompleted
                      CANCELLED FormInstanceStateCancelled
                    x-go-name: State
                  standAloneForm:
                    default: false
                    description: StandAloneForm is a boolean flag to indicate if this form should be available for users to complete via the standalone form UI or should this only be available to be completed by as an embedded form
                    example: false
                    type: boolean
                    x-go-name: StandAloneForm
                  standAloneFormUrl:
                    description: StandAloneFormURL is the URL where this form may be completed by the designated recipients using the standalone form UI
                    example: https://my-org.identitynow.com/ui/d/forms/00000000-0000-0000-0000-000000000000
                    type: string
                    x-go-name: StandAloneFormURL
                  createdBy:
                    properties:
                      id:
                        description: ID is a unique identifier
                        example: 00000000-0000-0000-0000-000000000000
                        type: string
                        x-go-name: ID
                      type:
                        description: |-
                          Type is a form instance created by type enum value
                          WORKFLOW_EXECUTION FormInstanceCreatedByTypeWorkflowExecution
                          SOURCE FormInstanceCreatedByTypeSource
                        enum:
                          - WORKFLOW_EXECUTION
                          - SOURCE
                        example: WORKFLOW_EXECUTION
                        type: string
                        x-go-enum-desc: |-
                          WORKFLOW_EXECUTION FormInstanceCreatedByTypeWorkflowExecution
                          SOURCE FormInstanceCreatedByTypeSource
                        x-go-name: Type
                    type: object
                    x-go-package: github.com/sailpoint/sp-forms/domain
                    title: forminstancecreatedby
                  formDefinitionId:
                    description: FormDefinitionID is the id of the form definition that created this form
                    example: 49841cb8-00a5-4fbd-9888-8bbb28d48331
                    type: string
                    x-go-name: FormDefinitionID
                  formInput:
                    additionalProperties: {}
                    nullable: true
                    description: FormInput is an object of form input labels to value
                    example:
                      input1: Sales
                    type: object
                    x-go-name: FormInput
                  formElements:
                    description: FormElements is the configuration of the form, this would be a repeat of the fields from the form-config
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
                  formData:
                    nullable: true
                    additionalProperties: true
                    description: FormData is the data provided by the form on submit. The data is in a key -> value map
                    example:
                      department: Engineering
                    type: object
                    x-go-name: FormData
                  formErrors:
                    description: FormErrors is an array of form validation errors from the last time the form instance was transitioned to the SUBMITTED state. If the form instance had validation errors then it would be moved to the IN PROGRESS state where the client can retrieve these errors
                    items:
                      properties:
                        key:
                          description: Key is the technical key
                          example: department
                          type: string
                          x-go-name: Key
                        messages:
                          description: Messages is a list of web.ErrorMessage items
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
                          type: array
                          x-go-name: Messages
                        value:
                          description: Value is the value associated with a Key
                          example: Engineering
                          x-go-name: Value
                      type: object
                      x-go-package: github.com/sailpoint/sp-forms/domain
                      title: formerror
                    type: array
                    x-go-name: FormErrors
                  formConditions:
                    description: FormConditions is the conditional logic that modify the form dynamically modify the form as the recipient is interacting out the form
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
                    description: Created is the date the form instance was assigned
                    example: '2023-07-12T20:14:57.74486Z'
                    format: date-time
                    type: string
                    x-go-name: Created
                  modified:
                    description: Modified is the last date the form instance was modified
                    example: '2023-07-12T20:14:57.74486Z'
                    format: date-time
                    type: string
                    x-go-name: Modified
                  recipients:
                    description: Recipients references to the recipient of a form. The recipients are those who are responsible for filling out a form and completing it
                    items:
                      properties:
                        id:
                          description: ID is a unique identifier
                          example: 00000000-0000-0000-0000-000000000000
                          type: string
                          x-go-name: ID
                        type:
                          description: |-
                            Type is a FormInstanceRecipientType value
                            IDENTITY FormInstanceRecipientIdentity
                          enum:
                            - IDENTITY
                          example: IDENTITY
                          type: string
                          x-go-enum-desc: IDENTITY FormInstanceRecipientIdentity
                          x-go-name: Type
                      type: object
                      x-go-package: github.com/sailpoint/sp-forms/domain
                      title: forminstancerecipient
                    type: array
                    x-go-name: Recipients
                type: object
                x-go-package: github.com/sailpoint/sp-forms/domain
                title: forminstanceresponse
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
        '404':
          description: An error with the item not found
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
        '409':
          description: An error with the request property conflicts with stored
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
