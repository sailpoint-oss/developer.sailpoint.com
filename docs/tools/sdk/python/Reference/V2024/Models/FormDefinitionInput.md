---
id: v2024-form-definition-input
title: FormDefinitionInput
pagination_label: FormDefinitionInput
sidebar_label: FormDefinitionInput
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'FormDefinitionInput', 'V2024FormDefinitionInput'] 
slug: /tools/sdk/python/v2024/models/form-definition-input
tags: ['SDK', 'Software Development Kit', 'FormDefinitionInput', 'V2024FormDefinitionInput']
---

# FormDefinitionInput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Unique identifier for the form input. | [optional] 
**type** |  **Enum** [  'STRING',    'ARRAY' ] | FormDefinitionInputType value. STRING FormDefinitionInputTypeString | [optional] 
**label** | **str** | Name for the form input. | [optional] 
**description** | **str** | Form input's description. | [optional] 
}

## Example

```python
from sailpoint.v2024.models.form_definition_input import FormDefinitionInput

form_definition_input = FormDefinitionInput(
id='00000000-0000-0000-0000-000000000000',
type='STRING',
label='input1',
description='A single dynamic scalar value (i.e. number, string, date, etc.) that can be passed into the form for use in conditional logic'
)

```
[[Back to top]](#) 

