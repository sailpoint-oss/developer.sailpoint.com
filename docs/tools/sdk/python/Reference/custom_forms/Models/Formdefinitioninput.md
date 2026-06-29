---
id: formdefinitioninput
title: Formdefinitioninput
pagination_label: Formdefinitioninput
sidebar_label: Formdefinitioninput
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Formdefinitioninput', 'Formdefinitioninput'] 
slug: /tools/sdk/python/custom-forms/models/formdefinitioninput
tags: ['SDK', 'Software Development Kit', 'Formdefinitioninput', 'Formdefinitioninput']
---

# Formdefinitioninput


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
from sailpoint.custom_forms.models.formdefinitioninput import Formdefinitioninput

formdefinitioninput = Formdefinitioninput(
id='00000000-0000-0000-0000-000000000000',
type='STRING',
label='input1',
description='A single dynamic scalar value (i.e. number, string, date, etc.) that can be passed into the form for use in conditional logic'
)

```
[[Back to top]](#) 

