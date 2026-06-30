---
id: validatefilteroutputdto
title: Validatefilteroutputdto
pagination_label: Validatefilteroutputdto
sidebar_label: Validatefilteroutputdto
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Validatefilteroutputdto', 'Validatefilteroutputdto'] 
slug: /tools/sdk/python/triggers/models/validatefilteroutputdto
tags: ['SDK', 'Software Development Kit', 'Validatefilteroutputdto', 'Validatefilteroutputdto']
---

# Validatefilteroutputdto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_valid** | **bool** | When this field is true, the filter expression is valid against the input. | [optional] [default to False]
**is_valid_json_path** | **bool** | When this field is true, the filter expression is using a valid JSON path. | [optional] [default to False]
**is_path_exist** | **bool** | When this field is true, the filter expression is using an existing path. | [optional] [default to False]
}

## Example

```python
from sailpoint.triggers.models.validatefilteroutputdto import Validatefilteroutputdto

validatefilteroutputdto = Validatefilteroutputdto(
is_valid=True,
is_valid_json_path=True,
is_path_exist=True
)

```
[[Back to top]](#) 

