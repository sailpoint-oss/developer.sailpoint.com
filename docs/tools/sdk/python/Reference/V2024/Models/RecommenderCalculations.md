---
id: v2024-recommender-calculations
title: RecommenderCalculations
pagination_label: RecommenderCalculations
sidebar_label: RecommenderCalculations
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'RecommenderCalculations', 'V2024RecommenderCalculations'] 
slug: /tools/sdk/python/v2024/models/recommender-calculations
tags: ['SDK', 'Software Development Kit', 'RecommenderCalculations', 'V2024RecommenderCalculations']
---

# RecommenderCalculations


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identity_id** | **str** | The ID of the identity | [optional] 
**entitlement_id** | **str** | The entitlement ID | [optional] 
**recommendation** | **str** | The actual recommendation | [optional] 
**overall_weighted_score** | **float** | The overall weighted score | [optional] 
**feature_weighted_scores** | **map[string]float** | The weighted score of each individual feature | [optional] 
**threshold** | **float** | The configured value against which the overallWeightedScore is compared | [optional] 
**identity_attributes** | [**map[string]RecommenderCalculationsIdentityAttributesValue**](recommender-calculations-identity-attributes-value) | The values for your configured features | [optional] 
**feature_values** | [**FeatureValueDto**](feature-value-dto) |  | [optional] 
}

## Example

```python
from sailpoint.v2024.models.recommender_calculations import RecommenderCalculations

recommender_calculations = RecommenderCalculations(
identity_id='2c91808457d8f3ab0157e3e62cb4213c',
entitlement_id='2c91809050db617d0150e0bf3215385e',
recommendation='YES',
overall_weighted_score=1.337,
feature_weighted_scores={
                    'key' : 1.337
                    },
threshold=1.337,
identity_attributes={
                    'key' : sailpoint.v2024.models.recommender_calculations_identity_attributes_value.RecommenderCalculations_identityAttributes_value(
                        value = '', )
                    },
feature_values=sailpoint.v2024.models.feature_value_dto.Feature Value Dto(
                    feature = 'department', 
                    numerator = 14, 
                    denominator = 14, )
)

```
[[Back to top]](#) 

