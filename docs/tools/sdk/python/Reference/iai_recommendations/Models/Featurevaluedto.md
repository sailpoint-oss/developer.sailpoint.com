---
id: featurevaluedto
title: Featurevaluedto
pagination_label: Featurevaluedto
sidebar_label: Featurevaluedto
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Featurevaluedto', 'Featurevaluedto'] 
slug: /tools/sdk/python/iai-recommendations/models/featurevaluedto
tags: ['SDK', 'Software Development Kit', 'Featurevaluedto', 'Featurevaluedto']
---

# Featurevaluedto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**feature** | **str** | The type of feature | [optional] 
**numerator** | **int** | The number of identities that have access to the feature | [optional] 
**denominator** | **int** | The number of identities with the corresponding feature | [optional] 
}

## Example

```python
from sailpoint.iai_recommendations.models.featurevaluedto import Featurevaluedto

featurevaluedto = Featurevaluedto(
feature='department',
numerator=14,
denominator=14
)

```
[[Back to top]](#) 

