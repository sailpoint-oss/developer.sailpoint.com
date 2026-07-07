---
id: outliervaluetype
title: Outliervaluetype
pagination_label: Outliervaluetype
sidebar_label: Outliervaluetype
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Outliervaluetype', 'Outliervaluetype'] 
slug: /tools/sdk/python/iai-outliers/models/outliervaluetype
tags: ['SDK', 'Software Development Kit', 'Outliervaluetype', 'Outliervaluetype']
---

# Outliervaluetype

The data type of the value field

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** |  **Enum** [  'INTEGER',    'FLOAT' ] | The data type of the value field | [optional] 
**ordinal** | **int** | The position of the value type | [optional] 
}

## Example

```python
from sailpoint.iai_outliers.models.outliervaluetype import Outliervaluetype

outliervaluetype = Outliervaluetype(
name='INTEGER',
ordinal=0
)

```
[[Back to top]](#) 

