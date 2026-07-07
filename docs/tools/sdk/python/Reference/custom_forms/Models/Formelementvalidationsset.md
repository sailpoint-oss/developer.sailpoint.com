---
id: formelementvalidationsset
title: Formelementvalidationsset
pagination_label: Formelementvalidationsset
sidebar_label: Formelementvalidationsset
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Formelementvalidationsset', 'Formelementvalidationsset'] 
slug: /tools/sdk/python/custom-forms/models/formelementvalidationsset
tags: ['SDK', 'Software Development Kit', 'Formelementvalidationsset', 'Formelementvalidationsset']
---

# Formelementvalidationsset

Set of FormElementValidation items.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**validation_type** |  **Enum** [  'REQUIRED',    'MIN_LENGTH',    'MAX_LENGTH',    'REGEX',    'DATE',    'MAX_DATE',    'MIN_DATE',    'LESS_THAN_DATE',    'PHONE',    'EMAIL',    'DATA_SOURCE',    'TEXTAREA' ] | The type of data validation that you wish to enforce, e.g., a required field, a minimum length, etc. | [optional] 
}

## Example

```python
from sailpoint.custom_forms.models.formelementvalidationsset import Formelementvalidationsset

formelementvalidationsset = Formelementvalidationsset(
validation_type='REQUIRED'
)

```
[[Back to top]](#) 

