---
id: v2024-form-element
title: FormElement
pagination_label: FormElement
sidebar_label: FormElement
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'FormElement', 'V2024FormElement'] 
slug: /tools/sdk/python/v2024/models/form-element
tags: ['SDK', 'Software Development Kit', 'FormElement', 'V2024FormElement']
---

# FormElement


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Form element identifier. | [optional] 
**element_type** |  **Enum** [  'TEXT',    'TOGGLE',    'TEXTAREA',    'HIDDEN',    'PHONE',    'EMAIL',    'SELECT',    'DATE',    'SECTION',    'COLUMN_SET',    'IMAGE',    'DESCRIPTION' ] | FormElementType value.  TEXT FormElementTypeText TOGGLE FormElementTypeToggle TEXTAREA FormElementTypeTextArea HIDDEN FormElementTypeHidden PHONE FormElementTypePhone EMAIL FormElementTypeEmail SELECT FormElementTypeSelect DATE FormElementTypeDate SECTION FormElementTypeSection COLUMN_SET FormElementTypeColumns IMAGE FormElementTypeImage DESCRIPTION FormElementTypeDescription | [optional] 
**config** | **map[string]object** | Config object. | [optional] 
**key** | **str** | Technical key. | [optional] 
**validations** | [**[]FormElementValidationsSet**](form-element-validations-set) |  | [optional] 
}

## Example

```python
from sailpoint.v2024.models.form_element import FormElement

form_element = FormElement(
id='00000000-0000-0000-0000-000000000000',
element_type='TEXT',
config={label=Department},
key='department',
validations=[
                    sailpoint.v2024.models.form_element_validations_set.FormElementValidationsSet(
                        validation_type = 'REQUIRED', )
                    ]
)

```
[[Back to top]](#) 

