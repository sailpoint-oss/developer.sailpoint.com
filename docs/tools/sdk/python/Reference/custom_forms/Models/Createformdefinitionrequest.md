---
id: createformdefinitionrequest
title: Createformdefinitionrequest
pagination_label: Createformdefinitionrequest
sidebar_label: Createformdefinitionrequest
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Createformdefinitionrequest', 'Createformdefinitionrequest'] 
slug: /tools/sdk/python/custom-forms/models/createformdefinitionrequest
tags: ['SDK', 'Software Development Kit', 'Createformdefinitionrequest', 'Createformdefinitionrequest']
---

# Createformdefinitionrequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Description is the form definition description | [optional] 
**form_conditions** | [**[]Formcondition**](formcondition) | FormConditions is the conditional logic that modify the form dynamically modify the form as the recipient is interacting out the form | [optional] 
**form_elements** | [**[]Formelement**](formelement) | FormElements is a list of nested form elements | [optional] 
**form_input** | [**[]Formdefinitioninput**](formdefinitioninput) | FormInput is a list of form inputs that are required when creating a form-instance object | [optional] 
**name** | **str** | Name is the form definition name | [required]
**owner** | [**Formowner**](formowner) |  | [required]
**used_by** | [**[]Formusedby**](formusedby) | UsedBy is a list of objects where when any system uses a particular form it reaches out to the form service to record it is currently being used | [optional] 
}

## Example

```python
from sailpoint.custom_forms.models.createformdefinitionrequest import Createformdefinitionrequest

createformdefinitionrequest = Createformdefinitionrequest(
description='My form description',
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
form_input=[
                    sailpoint.custom_forms.models.formdefinitioninput.formdefinitioninput(
                        id = '00000000-0000-0000-0000-000000000000', 
                        type = 'STRING', 
                        label = 'input1', 
                        description = 'A single dynamic scalar value (i.e. number, string, date, etc.) that can be passed into the form for use in conditional logic', )
                    ],
name='My form',
owner=sailpoint.custom_forms.models.formowner.formowner(
                    type = 'IDENTITY', 
                    id = '2c9180867624cbd7017642d8c8c81f67', 
                    name = 'Grant Smith', ),
used_by=[
                    sailpoint.custom_forms.models.formusedby.formusedby(
                        type = 'WORKFLOW', 
                        id = '61940a92-5484-42bc-bc10-b9982b218cdf', 
                        name = 'Access Request Form', )
                    ]
)

```
[[Back to top]](#) 

