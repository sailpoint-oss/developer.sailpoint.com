---
id: v2024-base-reference-dto
title: BaseReferenceDto
pagination_label: BaseReferenceDto
sidebar_label: BaseReferenceDto
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'BaseReferenceDto', 'V2024BaseReferenceDto'] 
slug: /tools/sdk/python/v2024/models/base-reference-dto
tags: ['SDK', 'Software Development Kit', 'BaseReferenceDto', 'V2024BaseReferenceDto']
---

# BaseReferenceDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | [**DtoType**](dto-type) |  | [optional] 
**id** | **str** | ID of the object to which this reference applies | [optional] 
**name** | **str** | Human-readable display name of the object to which this reference applies | [optional] 
}

## Example

```python
from sailpoint.v2024.models.base_reference_dto import BaseReferenceDto

base_reference_dto = BaseReferenceDto(
type='IDENTITY',
id='2c91808568c529c60168cca6f90c1313',
name='William Wilson'
)

```
[[Back to top]](#) 

