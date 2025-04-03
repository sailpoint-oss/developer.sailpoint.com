---
id: v2025-form-definition-response
title: FormDefinitionResponse
pagination_label: FormDefinitionResponse
sidebar_label: FormDefinitionResponse
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'FormDefinitionResponse', 'V2025FormDefinitionResponse'] 
slug: /tools/sdk/python/v2025/models/form-definition-response
tags: ['SDK', 'Software Development Kit', 'FormDefinitionResponse', 'V2025FormDefinitionResponse']
---

# FormDefinitionResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Unique guid identifying the form definition. | [optional] 
**name** | **str** | Name of the form definition. | [optional] 
**description** | **str** | Form definition's description. | [optional] 
**owner** | [**FormOwner**](form-owner) |  | [optional] 
**used_by** | [**[]FormUsedBy**](form-used-by) | List of objects using the form definition. Whenever a system uses a form, the API reaches out to the form service to record that the system is currently using it. | [optional] 
**form_input** | [**[]FormDefinitionInput**](form-definition-input) | List of form inputs required to create a form-instance object. | [optional] 
**form_elements** | [**[]FormElement**](form-element) | List of nested form elements. | [optional] 
**form_conditions** | [**[]FormCondition**](form-condition) | Conditional logic that can dynamically modify the form as the recipient is interacting with it. | [optional] 
**created** | **datetime** | Created is the date the form definition was created | [optional] 
**modified** | **datetime** | Modified is the last date the form definition was modified | [optional] 
}

## Example

```python
from sailpoint.v2025.models.form_definition_response import FormDefinitionResponse

form_definition_response = FormDefinitionResponse(
id='00000000-0000-0000-0000-000000000000',
name='My form',
description='My form description',
owner=sailpoint.v2025.models.form_owner.FormOwner(
                    type = 'IDENTITY', 
                    id = '2c9180867624cbd7017642d8c8c81f67', 
                    name = 'Grant Smith', ),
used_by=[
                    sailpoint.v2025.models.form_used_by.FormUsedBy(
                        type = 'WORKFLOW', 
                        id = '61940a92-5484-42bc-bc10-b9982b218cdf', 
                        name = 'Access Request Form', )
                    ],
form_input=[
                    sailpoint.v2025.models.form_definition_input.FormDefinitionInput(
                        id = '00000000-0000-0000-0000-000000000000', 
                        type = 'STRING', 
                        label = 'input1', 
                        description = 'A single dynamic scalar value (i.e. number, string, date, etc.) that can be passed into the form for use in conditional logic', )
                    ],
form_elements=[
                    sailpoint.v2025.models.form_element.FormElement(
                        id = '00000000-0000-0000-0000-000000000000', 
                        element_type = 'TEXT', 
                        config = {label=Department}, 
                        key = 'department', 
                        validations = [
                            sailpoint.v2025.models.form_element_validations_set.FormElementValidationsSet(
                                validation_type = 'REQUIRED', )
                            ], )
                    ],
form_conditions=[
                    sailpoint.v2025.models.form_condition.FormCondition(
                        rule_operator = 'AND', 
                        rules = [
                            sailpoint.v2025.models.condition_rule.ConditionRule(
                                source_type = 'ELEMENT', 
                                source = 'department', 
                                operator = 'EQ', 
                                value_type = 'STRING', 
                                value = 'Engineering', )
                            ], 
                        effects = [
                            sailpoint.v2025.models.condition_effect.ConditionEffect(
                                effect_type = 'HIDE', 
                                config = sailpoint.v2025.models.condition_effect_config.ConditionEffect_config(
                                    default_value_label = 'Access to Remove', 
                                    element = '8110662963316867', ), )
                            ], )
                    ],
created='2023-07-12T20:14:57.744860Z',
modified='2023-07-12T20:14:57.744860Z'
)

```
[[Back to top]](#) 

