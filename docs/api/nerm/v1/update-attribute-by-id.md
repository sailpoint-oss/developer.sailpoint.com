## OpenAPI

```yaml PATCH /ne_attributes/{id}
openapi: 3.0.1
info:
  version: 1.0.0
  title: NERM API
  description: The NERM API accesss and modifies resources in your environment.
  license:
    name: MIT
servers:
  - url: https://{tenantName}.nonemployee.com/api
    variables:
      tenantName:
        default: acmeco
        description: Tenant name assigned to customer
paths:
  /ne_attributes/{id}:
    patch:
      description: Update info for a specific attribute
      operationId: updateAttributeById
      security:
        - userAuth: []
      parameters:
        - name: id
          in: path
          description: ID of the object to retrieve, update, or delete
          required: true
          schema:
            type: string
            format: uuid
            example: 1246d8b3-ac29-4015-8154-dea4434a73fa
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              properties:
                ne_attribute:
                  type: object
                  properties:
                    id:
                      type: string
                      format: uuid
                      readOnly: true
                      description: The id of the attribute
                      example: ac4aae0b-4140-49a4-a84c-126762fd0c8f
                    uid:
                      type: string
                      readOnly: true
                      description: The user-specified identifier of the attribute
                      example: myattribute
                    label:
                      type: string
                      description: The label for the attribute
                      example: birthday
                    description:
                      type: string
                      description: A description of the attribute
                      example: Your birthday
                    tool_tip:
                      type: string
                      description: The helper text that accompanies the attribute
                      example: Put your birthday here mm-dd-yyyy
                    archived:
                      type: boolean
                      description: Whether the attribute is archived
                      example: false
                    date_format:
                      type: string
                      enum:
                        - mm/dd/yyyy
                        - mm-dd-yyyy
                        - dd/mm/yyyy
                        - dd-mm-yyyy
                        - yyyy/mm/dd
                        - yyyy-mm-dd
                      description: The format of the date input if it is a date input
                      example: mm/dd/yyyy
                    selectable_status:
                      type: string
                      description: The status of the profiles that can be selected
                      example: Active
                    risk_type:
                      type: string
                      description: Type of risk that applies to the attribute
                      example: OverallRisk
                    ownership_driven:
                      type: boolean
                      description: Only shows profiles that the user currently has access to, to be selected
                      example: true
                    allow_multiple_selections:
                      type: boolean
                      description: Whether or not multiple selections can be made on something like a contributor search.
                      example: true
                    filtered_by_ne_attribute:
                      type: boolean
                      description: Whether or not the attribute is filtered by another attribute
                      example: true
                    filtering_ne_attribute_id:
                      type: string
                      format: uuid
                      description: The ID of the filtering attribute
                      example: ac4aae0b-4140-49a4-a84c-126762fd0c8f
                    ne_attribute_filter_id:
                      type: string
                      format: uuid
                      description: The ID of the attribute filter
                      example: ac4aae0b-4140-49a4-a84c-126762fd0c8f
                    reverse_association_attribute:
                      type: object
                      properties:
                        id:
                          type: string
                          format: uuid
                          readOnly: true
                          description: The id of the attribute
                          example: ac4aae0b-4140-49a4-a84c-126762fd0c8f
                        uid:
                          type: string
                          readOnly: true
                          description: The user-specified identifier of the attribute
                          example: myattribute
                        label:
                          type: string
                          description: The label for the attribute
                          example: birthday
                        description:
                          type: string
                          description: A description of the attribute
                          example: Your birthday
                        tool_tip:
                          type: string
                          description: The helper text that accompanies the attribute
                          example: Put your birthday here mm-dd-yyyy
                        crypt:
                          type: boolean
                          description: Whether or not the attribute is encrypted
                          example: false
                        archived:
                          type: boolean
                          description: Whether the attribute is archived
                          example: false
                        archived_on:
                          type: string
                          format: date-time
                          readOnly: true
                          description: When the attribute was archived
                          example: Wed, 07 Feb 2024 12:55:20.456682000 EST -05:00
                        created_at:
                          type: string
                          format: date-time
                          readOnly: true
                          description: When the attribute was created
                          example: Wed, 07 Feb 2024 12:55:20.456682000 EST -05:00
                        updated_at:
                          type: string
                          format: date-time
                          readOnly: true
                          description: When the attribute was last updated
                          example: Wed, 07 Feb 2024 12:55:20.456682000 EST -05:00
                        date_format:
                          type: string
                          enum:
                            - mm/dd/yyyy
                            - mm-dd-yyyy
                            - dd/mm/yyyy
                            - dd-mm-yyyy
                            - yyyy/mm/dd
                            - yyyy-mm-dd
                          description: The format of the date input if it is a date input
                          example: mm/dd/yyyy
                        selectable_status:
                          type: string
                          description: The status of the profiles that can be selected
                          example: Active
                        risk_score_setting:
                          type: string
                          description: What setting is used for the risk score
                          example: standard
                        risk_type:
                          type: string
                          description: Type of risk that applies to the attribute
                          example: OverallRisk
                        ownership_driven:
                          type: boolean
                          description: Only shows profiles that the user currently has access to, to be selected
                          example: true
                        allow_multiple_selections:
                          type: boolean
                          description: Whether or not multiple selections can be made on something like a contributor search.
                          example: true
                        filtered_by_ne_attribute:
                          type: boolean
                          description: Whether or not the attribute is filtered by another attribute
                          example: true
                        filtering_ne_attribute_id:
                          type: string
                          format: uuid
                          description: The ID of the filtering attribute
                          example: ac4aae0b-4140-49a4-a84c-126762fd0c8f
                        ne_attribute_filter_id:
                          type: string
                          format: uuid
                          description: The ID of the attribute filter
                          example: ac4aae0b-4140-49a4-a84c-126762fd0c8f
                        reverse_association_attribute_id:
                          type: string
                          format: uuid
                          description: The ID of the attribute used with reverse association
                          example: ac4aae0b-4140-49a4-a84c-126762fd0c8f
                        profile_type_id:
                          type: string
                          format: uuid
                          description: The ID of the profile type the attribute applies to
                          example: ac4aae0b-4140-49a4-a84c-126762fd0c8f
                        legacy_id:
                          type: string
                          format: uuid
                          description: The legacy ID
                          example: ac4aae0b-4140-49a4-a84c-126762fd0c8f
                        tmp_created_at:
                          type: string
                          format: date-time
                          readOnly: true
                          description: the temp of when attribute was created
                          example: Wed, 07 Feb 2024 12:55:20.456682000 EST -05:00
                        tmp_updated_at:
                          type: string
                          format: date-time
                          readOnly: true
                          description: the temp of when attribute was last updated
                          example: Wed, 07 Feb 2024 12:55:20.456682000 EST -05:00
                      title: AttributeProperties
                    profile_type_id:
                      type: string
                      format: uuid
                      description: The ID of the profile type the attribute applies to
                      example: ac4aae0b-4140-49a4-a84c-126762fd0c8f
                    data_type:
                      type: string
                      enum:
                        - text field
                        - text area
                        - drop-down
                        - radio buttons
                        - check boxes
                        - date
                        - tags
                        - attachment
                        - profile select
                        - profile search
                        - owner select
                        - owner search
                        - contributor select
                        - contributor search
                      description: The type of data that applies to the attribute
                      example: text field
                    type:
                      type: string
                      enum:
                        - AttachmentAttribute
                        - CheckBoxesAttribute
                        - ContributorSearchAttribute
                        - ContributorSelectAttribute
                        - DateAttribute
                        - DropDownAttribute
                        - OwnerSearchAttribute
                        - OwnerSelectAttribute
                        - ProfileSearchAttribute
                        - ProfileSelectAttribute
                        - RadioButtonsAttribute
                        - TagsAttribute
                        - TextAreaAttribute
                        - TextFieldAttribute
                      description: The attribute's type
                      example: AttachmentAttribute
                    validations_attributes:
                      type: object
                      properties:
                        validation_method:
                          type: string
                          enum:
                            - required
                            - unique
                            - date_format
                            - days
                            - characters
                            - extension
                            - numericality
                            - email_format
                            - custom_format
                            - no_special_chars
                          description: The type of validation to be applied
                          example: required
                        value:
                          type: string
                          description: The value of the validator
                          example: mm-dd-yyyy
                        _destroy:
                          type: boolean
                          description: If the validator should be removed
                          example: false
                  title: Attribute-2
      responses:
        '200':
          description: Expected response to a valid request
          content:
            application/json:
              schema:
                type: object
                properties:
                  ne_attribute:
                    type: object
                    properties:
                      id:
                        type: string
                        format: uuid
                        readOnly: true
                        description: The id of the attribute
                        example: ac4aae0b-4140-49a4-a84c-126762fd0c8f
                      uid:
                        type: string
                        readOnly: true
                        description: The user-specified identifier of the attribute
                        example: myattribute
                      label:
                        type: string
                        description: The label for the attribute
                        example: birthday
                      description:
                        type: string
                        description: A description of the attribute
                        example: Your birthday
                      tool_tip:
                        type: string
                        description: The helper text that accompanies the attribute
                        example: Put your birthday here mm-dd-yyyy
                      crypt:
                        type: boolean
                        description: Whether the attribute is encrypted
                        example: false
                      archived:
                        type: boolean
                        description: Whether the attribute is archived
                        example: false
                      archived_on:
                        type: string
                        format: date-time
                        description: When the attribute was archived
                        example: Wed, 07 Feb 2024 12:55:20.456682000 EST -05:00
                      created_at:
                        type: string
                        format: date-time
                        description: When the attribute was created
                        example: Wed, 07 Feb 2024 12:55:20.456682000 EST -05:00
                      updated_at:
                        type: string
                        format: date-time
                        description: When the attribute was updated
                        example: Wed, 07 Feb 2024 12:55:20.456682000 EST -05:00
                      date_format:
                        type: string
                        enum:
                          - mm/dd/yyyy
                          - mm-dd-yyyy
                          - dd/mm/yyyy
                          - dd-mm-yyyy
                          - yyyy/mm/dd
                          - yyyy-mm-dd
                        description: The format of the date input if it is a date input
                        example: mm/dd/yyyy
                      selectable_status:
                        type: string
                        description: The status of the profiles that can be selected
                        example: Active
                      risk_type:
                        type: string
                        description: Type of risk that applies to the attribute
                        example: OverallRisk
                      ownership_driven:
                        type: boolean
                        description: Only shows profiles that the user currently has access to, to be selected
                        example: true
                      allow_multiple_selections:
                        type: boolean
                        description: Whether or not multiple selections can be made on something like a contributor search.
                        example: true
                      filtered_by_ne_attribute:
                        type: boolean
                        description: Whether or not the attribute is filtered by another attribute
                        example: true
                      filtering_ne_attribute_id:
                        type: string
                        format: uuid
                        description: The ID of the filtering attribute
                        example: ac4aae0b-4140-49a4-a84c-126762fd0c8f
                      ne_attribute_filter_id:
                        type: string
                        format: uuid
                        description: The ID of the attribute filter
                        example: ac4aae0b-4140-49a4-a84c-126762fd0c8f
                      reverse_association_attribute:
                        type: object
                        properties:
                          id:
                            type: string
                            format: uuid
                            readOnly: true
                            description: The id of the attribute
                            example: ac4aae0b-4140-49a4-a84c-126762fd0c8f
                          uid:
                            type: string
                            readOnly: true
                            description: The user-specified identifier of the attribute
                            example: myattribute
                          label:
                            type: string
                            description: The label for the attribute
                            example: birthday
                          description:
                            type: string
                            description: A description of the attribute
                            example: Your birthday
                          tool_tip:
                            type: string
                            description: The helper text that accompanies the attribute
                            example: Put your birthday here mm-dd-yyyy
                          crypt:
                            type: boolean
                            description: Whether or not the attribute is encrypted
                            example: false
                          archived:
                            type: boolean
                            description: Whether the attribute is archived
                            example: false
                          archived_on:
                            type: string
                            format: date-time
                            readOnly: true
                            description: When the attribute was archived
                            example: Wed, 07 Feb 2024 12:55:20.456682000 EST -05:00
                          created_at:
                            type: string
                            format: date-time
                            readOnly: true
                            description: When the attribute was created
                            example: Wed, 07 Feb 2024 12:55:20.456682000 EST -05:00
                          updated_at:
                            type: string
                            format: date-time
                            readOnly: true
                            description: When the attribute was last updated
                            example: Wed, 07 Feb 2024 12:55:20.456682000 EST -05:00
                          date_format:
                            type: string
                            enum:
                              - mm/dd/yyyy
                              - mm-dd-yyyy
                              - dd/mm/yyyy
                              - dd-mm-yyyy
                              - yyyy/mm/dd
                              - yyyy-mm-dd
                            description: The format of the date input if it is a date input
                            example: mm/dd/yyyy
                          selectable_status:
                            type: string
                            description: The status of the profiles that can be selected
                            example: Active
                          risk_score_setting:
                            type: string
                            description: What setting is used for the risk score
                            example: standard
                          risk_type:
                            type: string
                            description: Type of risk that applies to the attribute
                            example: OverallRisk
                          ownership_driven:
                            type: boolean
                            description: Only shows profiles that the user currently has access to, to be selected
                            example: true
                          allow_multiple_selections:
                            type: boolean
                            description: Whether or not multiple selections can be made on something like a contributor search.
                            example: true
                          filtered_by_ne_attribute:
                            type: boolean
                            description: Whether or not the attribute is filtered by another attribute
                            example: true
                          filtering_ne_attribute_id:
                            type: string
                            format: uuid
                            description: The ID of the filtering attribute
                            example: ac4aae0b-4140-49a4-a84c-126762fd0c8f
                          ne_attribute_filter_id:
                            type: string
                            format: uuid
                            description: The ID of the attribute filter
                            example: ac4aae0b-4140-49a4-a84c-126762fd0c8f
                          reverse_association_attribute_id:
                            type: string
                            format: uuid
                            description: The ID of the attribute used with reverse association
                            example: ac4aae0b-4140-49a4-a84c-126762fd0c8f
                          profile_type_id:
                            type: string
                            format: uuid
                            description: The ID of the profile type the attribute applies to
                            example: ac4aae0b-4140-49a4-a84c-126762fd0c8f
                          legacy_id:
                            type: string
                            format: uuid
                            description: The legacy ID
                            example: ac4aae0b-4140-49a4-a84c-126762fd0c8f
                          tmp_created_at:
                            type: string
                            format: date-time
                            readOnly: true
                            description: the temp of when attribute was created
                            example: Wed, 07 Feb 2024 12:55:20.456682000 EST -05:00
                          tmp_updated_at:
                            type: string
                            format: date-time
                            readOnly: true
                            description: the temp of when attribute was last updated
                            example: Wed, 07 Feb 2024 12:55:20.456682000 EST -05:00
                        title: AttributeProperties
                      profile_type_id:
                        type: string
                        format: uuid
                        description: The ID of the profile type the attribute applies to
                        example: ac4aae0b-4140-49a4-a84c-126762fd0c8f
                      data_type:
                        type: string
                        enum:
                          - text field
                          - text area
                          - drop-down
                          - radio buttons
                          - check boxes
                          - date
                          - tags
                          - attachment
                          - profile select
                          - profile search
                          - owner select
                          - owner search
                          - contributor select
                          - contributor search
                        description: The type of data that applies to the attribute
                        example: text field
                      type:
                        type: string
                        enum:
                          - AttachmentAttribute
                          - CheckBoxesAttribute
                          - ContributorSearchAttribute
                          - ContributorSelectAttribute
                          - DateAttribute
                          - DropDownAttribute
                          - OwnerSearchAttribute
                          - OwnerSelectAttribute
                          - ProfileSearchAttribute
                          - ProfileSelectAttribute
                          - RadioButtonsAttribute
                          - TagsAttribute
                          - TextAreaAttribute
                          - TextFieldAttribute
                        description: The attribute's type
                        example: AttachmentAttribute
                    title: Attribute
        '400':
          description: Bad Request - unable to complete.
          content:
            application/json:
              schema:
                oneOf:
                  - type: object
                    properties:
                      error:
                        example: Invalid JSON syntax. Please check your syntax and try again.
                    title: InvalidJson
                  - type: object
                    properties:
                      error:
                        example: The <object> failed to create/update
                      errors:
                        example:
                          attribute: can't be blank
                    title: ValidationErrors
        '500':
          description: Internal Server Error - returned on unhandled exceptions.
          content:
            application/json:
              schema:
                type: object
                properties:
                  error:
                    description: A message describing the error
                    example: Sorry something went wrong
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
```
