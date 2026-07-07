---
id: dimensioncriteriakey
title: Dimensioncriteriakey
pagination_label: Dimensioncriteriakey
sidebar_label: Dimensioncriteriakey
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Dimensioncriteriakey', 'Dimensioncriteriakey'] 
slug: /tools/sdk/python/dimensions/models/dimensioncriteriakey
tags: ['SDK', 'Software Development Kit', 'Dimensioncriteriakey', 'Dimensioncriteriakey']
---

# Dimensioncriteriakey

Refers to a specific Identity attribute used in Dimension membership criteria.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | [**Dimensioncriteriakeytype**](dimensioncriteriakeytype) |  | [required]
**var_property** | **str** | The name of the identity attribute to which the associated criteria applies. | [required]
}

## Example

```python
from sailpoint.dimensions.models.dimensioncriteriakey import Dimensioncriteriakey

dimensioncriteriakey = Dimensioncriteriakey(
type='IDENTITY',
var_property='attribute.email'
)

```
[[Back to top]](#) 

