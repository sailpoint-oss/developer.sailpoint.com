---
id: recommendercalculations
title: Recommendercalculations
pagination_label: Recommendercalculations
sidebar_label: Recommendercalculations
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Recommendercalculations', 'Recommendercalculations'] 
slug: /tools/sdk/powershell/iairecommendations/models/recommendercalculations
tags: ['SDK', 'Software Development Kit', 'Recommendercalculations', 'Recommendercalculations']
---


# Recommendercalculations

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IdentityId** | **String** | The ID of the identity | [optional] 
**EntitlementId** | **String** | The entitlement ID | [optional] 
**Recommendation** | **String** | The actual recommendation | [optional] 
**OverallWeightedScore** | **Decimal** | The overall weighted score | [optional] 
**FeatureWeightedScores** | **map[string]Decimal** | The weighted score of each individual feature | [optional] 
**Threshold** | **Decimal** | The configured value against which the overallWeightedScore is compared | [optional] 
**IdentityAttributes** | [**map[string]RecommendercalculationsIdentityAttributesValue**](recommendercalculations-identity-attributes-value) | The values for your configured features | [optional] 
**FeatureValues** | [**Featurevaluedto**](featurevaluedto) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Recommendercalculations = Initialize-Recommendercalculations  -IdentityId 2c91808457d8f3ab0157e3e62cb4213c `
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
$Recommendercalculations | ConvertTo-JSON
```


[[Back to top]](#) 

