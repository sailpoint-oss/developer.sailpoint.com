---
id: v2025-recommender-calculations
title: RecommenderCalculations
pagination_label: RecommenderCalculations
sidebar_label: RecommenderCalculations
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'RecommenderCalculations', 'V2025RecommenderCalculations'] 
slug: /tools/sdk/powershell/v2025/models/recommender-calculations
tags: ['SDK', 'Software Development Kit', 'RecommenderCalculations', 'V2025RecommenderCalculations']
---


# RecommenderCalculations

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IdentityId** | **String** | The ID of the identity | [optional] 
**EntitlementId** | **String** | The entitlement ID | [optional] 
**Recommendation** | **String** | The actual recommendation | [optional] 
**OverallWeightedScore** | **Decimal** | The overall weighted score | [optional] 
**FeatureWeightedScores** | **map[string]Decimal** | The weighted score of each individual feature | [optional] 
**Threshold** | **Decimal** | The configured value against which the overallWeightedScore is compared | [optional] 
**IdentityAttributes** | [**map[string]RecommenderCalculationsIdentityAttributesValue**](recommender-calculations-identity-attributes-value) | The values for your configured features | [optional] 
**FeatureValues** | [**FeatureValueDto**](feature-value-dto) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$RecommenderCalculations = Initialize-V2025RecommenderCalculations  -IdentityId 2c91808457d8f3ab0157e3e62cb4213c `
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

