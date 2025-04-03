---
id: v2024-feature-value-dto
title: FeatureValueDto
pagination_label: FeatureValueDto
sidebar_label: FeatureValueDto
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'FeatureValueDto', 'V2024FeatureValueDto'] 
slug: /tools/sdk/python/v2024/models/feature-value-dto
tags: ['SDK', 'Software Development Kit', 'FeatureValueDto', 'V2024FeatureValueDto']
---

# FeatureValueDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**feature** | **str** | The type of feature | [optional] 
**numerator** | **int** | The number of identities that have access to the feature | [optional] 
**denominator** | **int** | The number of identities with the corresponding feature | [optional] 
}

## Example

```python
from sailpoint.v2024.models.feature_value_dto import FeatureValueDto

feature_value_dto = FeatureValueDto(
feature='department',
numerator=14,
denominator=14
)

```
[[Back to top]](#) 

