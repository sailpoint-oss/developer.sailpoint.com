---
id: recommendercalculations
title: Recommendercalculations
pagination_label: Recommendercalculations
sidebar_label: Recommendercalculations
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Recommendercalculations', 'Recommendercalculations'] 
slug: /tools/sdk/python/iai-recommendations/models/recommendercalculations
tags: ['SDK', 'Software Development Kit', 'Recommendercalculations', 'Recommendercalculations']
---

# Recommendercalculations


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identity_id** | **str** | The ID of the identity | [optional] 
**entitlement_id** | **str** | The entitlement ID | [optional] 
**recommendation** | **str** | The actual recommendation | [optional] 
**overall_weighted_score** | **float** | The overall weighted score | [optional] 
**feature_weighted_scores** | **map[string]float** | The weighted score of each individual feature | [optional] 
**threshold** | **float** | The configured value against which the overallWeightedScore is compared | [optional] 
**identity_attributes** | [**map[string]RecommendercalculationsIdentityAttributesValue**](recommendercalculations-identity-attributes-value) | The values for your configured features | [optional] 
**feature_values** | [**Featurevaluedto**](featurevaluedto) |  | [optional] 
}

## Example

```python
from sailpoint.iai_recommendations.models.recommendercalculations import Recommendercalculations

recommendercalculations = Recommendercalculations(
identity_id='2c91808457d8f3ab0157e3e62cb4213c',
entitlement_id='2c91809050db617d0150e0bf3215385e',
recommendation='YES',
overall_weighted_score=1.337,
feature_weighted_scores={
                    'key' : 1.337
                    },
threshold=1.337,
identity_attributes={
                    'key' : sailpoint.iai_recommendations.models.recommendercalculations_identity_attributes_value.recommendercalculations_identityAttributes_value(
                        value = '', )
                    },
feature_values=sailpoint.iai_recommendations.models.feature_value_dto.Feature Value Dto(
                    feature = 'department', 
                    numerator = 14, 
                    denominator = 14, )
)

```
[[Back to top]](#) 

