---
id: beta-recommender-calculations
title: RecommenderCalculations
pagination_label: RecommenderCalculations
sidebar_label: RecommenderCalculations
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'RecommenderCalculations'] 
slug: /tools/sdk/powershell/beta/models/recommender-calculations
tags: ['SDK', 'Software Development Kit', 'RecommenderCalculations']
---


# RecommenderCalculations

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IdentityId** |  Pointer to **String** | The ID of the identity | [optional] 
**EntitlementId** |  Pointer to **String** | The entitlement ID | [optional] 
**Recommendation** |  Pointer to **String** | The actual recommendation | [optional] 
**OverallWeightedScore** |  Pointer to **Decimal** | The overall weighted score | [optional] 
**FeatureWeightedScores** |  Pointer to **map[string]Decimal** | The weighted score of each individual feature | [optional] 
**Threshold** |  Pointer to **Decimal** | The configured value against which the overallWeightedScore is compared | [optional] 
**IdentityAttributes** |  Pointer to [**map[string]RecommenderCalculationsIdentityAttributesValue**](recommender-calculations-identity-attributes-value) | The values for your configured features | [optional] 
**FeatureValues** |  Pointer to [**FeatureValueDto**](feature-value-dto) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$RecommenderCalculations = Initialize-PSSailpoint.BetaRecommenderCalculations  -IdentityId 2c91808457d8f3ab0157e3e62cb4213c `
 -EntitlementId 2c91809050db617d0150e0bf3215385e `
 -Recommendation YES `
 -OverallWeightedScore null `
 -FeatureWeightedScores null `
 -Threshold null `
 -IdentityAttributes null `
 -FeatureValues null
```

- Convert the resource to JSON
```powershell
$RecommenderCalculations | ConvertTo-JSON
```


[[Back to top]](#) 

