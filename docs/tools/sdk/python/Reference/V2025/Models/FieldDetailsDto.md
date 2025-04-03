---
id: v2025-field-details-dto
title: FieldDetailsDto
pagination_label: FieldDetailsDto
sidebar_label: FieldDetailsDto
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'FieldDetailsDto', 'V2025FieldDetailsDto'] 
slug: /tools/sdk/python/v2025/models/field-details-dto
tags: ['SDK', 'Software Development Kit', 'FieldDetailsDto', 'V2025FieldDetailsDto']
---

# FieldDetailsDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the attribute. | [optional] 
**transform** | **object** | The transform to apply to the field | [optional] 
**attributes** | **object** | Attributes required for the transform | [optional] 
**is_required** | **bool** | Flag indicating whether or not the attribute is required. | [optional] [readonly] [default to False]
**type** | **str** | The type of the attribute. | [optional] 
**is_multi_valued** | **bool** | Flag indicating whether or not the attribute is multi-valued. | [optional] [default to False]
}

## Example

```python
from sailpoint.v2025.models.field_details_dto import FieldDetailsDto

field_details_dto = FieldDetailsDto(
name='userName',
transform={type=rule, attributes={name=Create Unique LDAP Attribute}},
attributes={template=${firstname}.${lastname}${uniqueCounter}, cloudMaxUniqueChecks=50, cloudMaxSize=20, cloudRequired=true},
is_required=False,
type='string',
is_multi_valued=False
)

```
[[Back to top]](#) 

