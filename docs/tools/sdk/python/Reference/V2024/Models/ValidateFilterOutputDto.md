---
id: v2024-validate-filter-output-dto
title: ValidateFilterOutputDto
pagination_label: ValidateFilterOutputDto
sidebar_label: ValidateFilterOutputDto
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ValidateFilterOutputDto', 'V2024ValidateFilterOutputDto'] 
slug: /tools/sdk/python/v2024/models/validate-filter-output-dto
tags: ['SDK', 'Software Development Kit', 'ValidateFilterOutputDto', 'V2024ValidateFilterOutputDto']
---

# ValidateFilterOutputDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_valid** | **bool** | When this field is true, the filter expression is valid against the input. | [optional] [default to False]
**is_valid_json_path** | **bool** | When this field is true, the filter expression is using a valid JSON path. | [optional] [default to False]
**is_path_exist** | **bool** | When this field is true, the filter expression is using an existing path. | [optional] [default to False]
}

## Example

```python
from sailpoint.v2024.models.validate_filter_output_dto import ValidateFilterOutputDto

validate_filter_output_dto = ValidateFilterOutputDto(
is_valid=True,
is_valid_json_path=True,
is_path_exist=True
)

```
[[Back to top]](#) 

