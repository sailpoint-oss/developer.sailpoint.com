---
id: v2024-outlier-value-type
title: OutlierValueType
pagination_label: OutlierValueType
sidebar_label: OutlierValueType
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'OutlierValueType', 'V2024OutlierValueType'] 
slug: /tools/sdk/python/v2024/models/outlier-value-type
tags: ['SDK', 'Software Development Kit', 'OutlierValueType', 'V2024OutlierValueType']
---

# OutlierValueType

The data type of the value field

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** |  **Enum** [  'INTEGER',    'FLOAT' ] | The data type of the value field | [optional] 
**ordinal** | **int** | The position of the value type | [optional] 
}

## Example

```python
from sailpoint.v2024.models.outlier_value_type import OutlierValueType

outlier_value_type = OutlierValueType(
name='INTEGER',
ordinal=0
)

```
[[Back to top]](#) 

