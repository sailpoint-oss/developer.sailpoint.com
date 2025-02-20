---
id: beta-model-field
title: ModelField
pagination_label: ModelField
sidebar_label: ModelField
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ModelField', 'BetaModelField'] 
slug: /tools/sdk/python/beta/models/model-field
tags: ['SDK', 'Software Development Kit', 'ModelField', 'BetaModelField']
---

# ModelField


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the FormItem | [optional] 
**display_name** | **str** | Display name of the field | [optional] 
**display_type** | **str** | Type of the field to display | [optional] 
**required** | **bool** | True if the field is required | [optional] 
**allowed_values_list** | **[]object** | List of allowed values for the field | [optional] 
**value** | **object** | Value of the field | [optional] 
}

## Example

```python
from sailpoint.beta.models.model_field import ModelField

model_field = ModelField(
name='Field1',
display_name='Field 1',
display_type='checkbox',
required=True,
allowed_values_list=[{Val1Display=null, Val1Value=null}, {Val2Display=null, Val2Value=null}],
value=None
)

```
[[Back to top]](#) 

