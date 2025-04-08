---
id: beta-form-definition-input
title: FormDefinitionInput
pagination_label: FormDefinitionInput
sidebar_label: FormDefinitionInput
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'FormDefinitionInput', 'BetaFormDefinitionInput'] 
slug: /tools/sdk/python/beta/models/form-definition-input
tags: ['SDK', 'Software Development Kit', 'FormDefinitionInput', 'BetaFormDefinitionInput']
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
from sailpoint.beta.models.form_definition_input import FormDefinitionInput

form_definition_input = FormDefinitionInput(
id='00000000-0000-0000-0000-000000000000',
type='STRING',
label='input1',
description='A single dynamic scalar value (i.e. number, string, date, etc.) that can be passed into the form for use in conditional logic'
)

```
[[Back to top]](#) 

