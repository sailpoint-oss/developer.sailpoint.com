---
id: v2024-dimension-ref
title: DimensionRef
pagination_label: DimensionRef
sidebar_label: DimensionRef
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'DimensionRef', 'V2024DimensionRef'] 
slug: /tools/sdk/python/v2024/models/dimension-ref
tags: ['SDK', 'Software Development Kit', 'DimensionRef', 'V2024DimensionRef']
---

# DimensionRef


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'DIMENSION' ] | The type of the object to which this reference applies | [optional] 
**id** | **str** | ID of the object to which this reference applies | [optional] 
**name** | **str** | Human-readable display name of the object to which this reference applies | [optional] 
}

## Example

```python
from sailpoint.v2024.models.dimension_ref import DimensionRef

dimension_ref = DimensionRef(
type='DIMENSION',
id='2c91808568c529c60168cca6f90c1313',
name='Role 2'
)

```
[[Back to top]](#) 

