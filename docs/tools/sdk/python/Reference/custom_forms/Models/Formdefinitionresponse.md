---
id: formdefinitionresponse
title: Formdefinitionresponse
pagination_label: Formdefinitionresponse
sidebar_label: Formdefinitionresponse
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Formdefinitionresponse', 'Formdefinitionresponse'] 
slug: /tools/sdk/python/custom-forms/models/formdefinitionresponse
tags: ['SDK', 'Software Development Kit', 'Formdefinitionresponse', 'Formdefinitionresponse']
---

# Formdefinitionresponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Unique guid identifying the form definition. | [optional] 
**name** | **str** | Name of the form definition. | [optional] 
**description** | **str** | Form definition's description. | [optional] 
**owner** | [**Formowner**](formowner) |  | [optional] 
**used_by** | [**[]Formusedby**](formusedby) | List of objects using the form definition. Whenever a system uses a form, the API reaches out to the form service to record that the system is currently using it. | [optional] 
**form_input** | [**[]Formdefinitioninput**](formdefinitioninput) | List of form inputs required to create a form-instance object. | [optional] 
**form_elements** | [**[]Formelement**](formelement) | List of nested form elements. | [optional] 
**form_conditions** | [**[]Formcondition**](formcondition) | Conditional logic that can dynamically modify the form as the recipient is interacting with it. | [optional] 
**created** | **datetime** | Created is the date the form definition was created | [optional] 
**modified** | **datetime** | Modified is the last date the form definition was modified | [optional] 
}

## Example

```python
from sailpoint.custom_forms.models.formdefinitionresponse import Formdefinitionresponse

formdefinitionresponse = Formdefinitionresponse(
id='00000000-0000-0000-0000-000000000000',
name='My form',
description='My form description',
owner=sailpoint.custom_forms.models.formowner.formowner(
                    type = 'IDENTITY', 
                    id = '2c9180867624cbd7017642d8c8c81f67', 
                    name = 'Grant Smith', ),
used_by=[
                    sailpoint.custom_forms.models.formusedby.formusedby(
                        type = 'WORKFLOW', 
                        id = '61940a92-5484-42bc-bc10-b9982b218cdf', 
                        name = 'Access Request Form', )
                    ],
form_input=[
                    sailpoint.custom_forms.models.formdefinitioninput.formdefinitioninput(
                        id = '00000000-0000-0000-0000-000000000000', 
                        type = 'STRING', 
                        label = 'input1', 
                        description = 'A single dynamic scalar value (i.e. number, string, date, etc.) that can be passed into the form for use in conditional logic', )
                    ],
form_elements=[
                    sailpoint.custom_forms.models.formelement.formelement(
                        id = '00000000-0000-0000-0000-000000000000', 
                        element_type = 'TEXT', 
                        config = {"label":"Department"}, 
                        key = 'department', 
                        validations = [
                            sailpoint.custom_forms.models.formelementvalidationsset.formelementvalidationsset(
                                validation_type = 'REQUIRED', )
                            ], )
                    ],
form_conditions=[
                    sailpoint.custom_forms.models.formcondition.formcondition(
                        rule_operator = 'AND', 
                        rules = [
                            sailpoint.custom_forms.models.conditionrule.conditionrule(
                                source_type = 'ELEMENT', 
                                source = 'department', 
                                operator = 'EQ', 
                                value_type = 'STRING', 
                                value = 'Engineering', )
                            ], 
                        effects = [
                            sailpoint.custom_forms.models.conditioneffect.conditioneffect(
                                effect_type = 'HIDE', 
                                config = sailpoint.custom_forms.models.conditioneffect_config.conditioneffect_config(
                                    default_value_label = 'Access to Remove', 
                                    element = '8110662963316867', ), )
                            ], )
                    ],
created='2023-07-12T20:14:57.744860Z',
modified='2023-07-12T20:14:57.744860Z'
)

```
[[Back to top]](#) 

