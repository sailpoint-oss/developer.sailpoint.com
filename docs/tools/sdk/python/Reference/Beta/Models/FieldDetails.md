---
id: beta-field-details
title: FieldDetails
pagination_label: FieldDetails
sidebar_label: FieldDetails
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'FieldDetails', 'BetaFieldDetails'] 
slug: /tools/sdk/python/beta/models/field-details
tags: ['SDK', 'Software Development Kit', 'FieldDetails', 'BetaFieldDetails']
---

# FieldDetails


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
from sailpoint.beta.models.field_details import FieldDetails

field_details = FieldDetails(
name='Field1',
display_name='Field 1',
display_type='checkbox',
required=True,
allowed_values_list=[{Val1Display=null, Val1Value=null}, {Val2Display=null, Val2Value=null}],
value=None
)

```
[[Back to top]](#) 

