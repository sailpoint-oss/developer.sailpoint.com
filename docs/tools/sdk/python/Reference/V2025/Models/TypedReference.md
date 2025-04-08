---
id: v2025-typed-reference
title: TypedReference
pagination_label: TypedReference
sidebar_label: TypedReference
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'TypedReference', 'V2025TypedReference'] 
slug: /tools/sdk/python/v2025/models/typed-reference
tags: ['SDK', 'Software Development Kit', 'TypedReference', 'V2025TypedReference']
---

# TypedReference

A typed reference to the object. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | [**DtoType**](dto-type) |  | [required]
**id** | **str** | The id of the object.  | [required]
}

## Example

```python
from sailpoint.v2025.models.typed_reference import TypedReference

typed_reference = TypedReference(
type='IDENTITY',
id='2c91808568c529c60168cca6f90c1313'
)

```
[[Back to top]](#) 

