---
id: formelement
title: Formelement
pagination_label: Formelement
sidebar_label: Formelement
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Formelement', 'Formelement'] 
slug: /tools/sdk/python/custom-forms/models/formelement
tags: ['SDK', 'Software Development Kit', 'Formelement', 'Formelement']
---

# Formelement


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Form element identifier. | [optional] 
**element_type** |  **Enum** [  'TEXT',    'TOGGLE',    'TEXTAREA',    'HIDDEN',    'PHONE',    'EMAIL',    'SELECT',    'DATE',    'SECTION',    'COLUMN_SET',    'IMAGE',    'DESCRIPTION' ] | FormElementType value.  TEXT FormElementTypeText TOGGLE FormElementTypeToggle TEXTAREA FormElementTypeTextArea HIDDEN FormElementTypeHidden PHONE FormElementTypePhone EMAIL FormElementTypeEmail SELECT FormElementTypeSelect DATE FormElementTypeDate SECTION FormElementTypeSection COLUMN_SET FormElementTypeColumns IMAGE FormElementTypeImage DESCRIPTION FormElementTypeDescription | [optional] 
**config** | **map[string]object** | Config object. | [optional] 
**key** | **str** | Technical key. | [optional] 
**validations** | [**[]Formelementvalidationsset**](formelementvalidationsset) |  | [optional] 
}

## Example

```python
from sailpoint.custom_forms.models.formelement import Formelement

formelement = Formelement(
id='00000000-0000-0000-0000-000000000000',
element_type='TEXT',
config={"label":"Department"},
key='department',
validations=[
                    sailpoint.custom_forms.models.formelementvalidationsset.formelementvalidationsset(
                        validation_type = 'REQUIRED', )
                    ]
)

```
[[Back to top]](#) 

