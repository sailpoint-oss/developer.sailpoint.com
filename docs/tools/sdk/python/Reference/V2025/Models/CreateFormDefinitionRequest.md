---
id: v2025-create-form-definition-request
title: CreateFormDefinitionRequest
pagination_label: CreateFormDefinitionRequest
sidebar_label: CreateFormDefinitionRequest
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'CreateFormDefinitionRequest', 'V2025CreateFormDefinitionRequest'] 
slug: /tools/sdk/python/v2025/models/create-form-definition-request
tags: ['SDK', 'Software Development Kit', 'CreateFormDefinitionRequest', 'V2025CreateFormDefinitionRequest']
---

# CreateFormDefinitionRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Description is the form definition description | [optional] 
**form_conditions** | [**[]FormCondition**](form-condition) | FormConditions is the conditional logic that modify the form dynamically modify the form as the recipient is interacting out the form | [optional] 
**form_elements** | [**[]FormElement**](form-element) | FormElements is a list of nested form elements | [optional] 
**form_input** | [**[]FormDefinitionInput**](form-definition-input) | FormInput is a list of form inputs that are required when creating a form-instance object | [optional] 
**name** | **str** | Name is the form definition name | [required]
**owner** | [**FormOwner**](form-owner) |  | [required]
**used_by** | [**[]FormUsedBy**](form-used-by) | UsedBy is a list of objects where when any system uses a particular form it reaches out to the form service to record it is currently being used | [optional] 
}

## Example

```python
from sailpoint.v2025.models.create_form_definition_request import CreateFormDefinitionRequest

create_form_definition_request = CreateFormDefinitionRequest(
description='My form description',
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
form_input=[
                    sailpoint.v2025.models.form_definition_input.FormDefinitionInput(
                        id = '00000000-0000-0000-0000-000000000000', 
                        type = 'STRING', 
                        label = 'input1', 
                        description = 'A single dynamic scalar value (i.e. number, string, date, etc.) that can be passed into the form for use in conditional logic', )
                    ],
name='My form',
owner=sailpoint.v2025.models.form_owner.FormOwner(
                    type = 'IDENTITY', 
                    id = '2c9180867624cbd7017642d8c8c81f67', 
                    name = 'Grant Smith', ),
used_by=[
                    sailpoint.v2025.models.form_used_by.FormUsedBy(
                        type = 'WORKFLOW', 
                        id = '61940a92-5484-42bc-bc10-b9982b218cdf', 
                        name = 'Access Request Form', )
                    ]
)

```
[[Back to top]](#) 

