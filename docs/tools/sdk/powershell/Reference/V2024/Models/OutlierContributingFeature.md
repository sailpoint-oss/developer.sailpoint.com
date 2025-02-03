---
id: v2024-outlier-contributing-feature
title: OutlierContributingFeature
pagination_label: OutlierContributingFeature
sidebar_label: OutlierContributingFeature
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'OutlierContributingFeature', 'V2024OutlierContributingFeature'] 
slug: /tools/sdk/powershell/v2024/models/outlier-contributing-feature
tags: ['SDK', 'Software Development Kit', 'OutlierContributingFeature', 'V2024OutlierContributingFeature']
---


# OutlierContributingFeature

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Contributing feature id | [optional] 
**Name** | **String** | The name of the feature | [optional] 
**ValueType** |  **Enum** [  "INTEGER",    "FLOAT" ] | The data type of the value field | [optional] 
**Value** | [**OutlierContributingFeatureValue**](outlier-contributing-feature-value) |  | [optional] 
**Importance** | **Double** | The importance of the feature. This can also be a negative value | [optional] 
**DisplayName** | **String** | The (translated if header is passed) displayName for the feature | [optional] 
**Description** | **String** | The (translated if header is passed) description for the feature | [optional] 
**TranslationMessages** | [**OutlierFeatureTranslation**](outlier-feature-translation) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$OutlierContributingFeature = Initialize-PSSailpoint.V2024OutlierContributingFeature  -Id 66e38828-5017-47af-92ff-9844871352c5 `
 -Name entitlement_count `
 -ValueType INTEGER `
 -Value null `
 -Importance -0.15 `
 -DisplayName Number of entitlements `
 -Description The total number of entitlements belonging to an identity `
 -TranslationMessages null
```

- Convert the resource to JSON
```powershell
$OutlierContributingFeature | ConvertTo-JSON
```


[[Back to top]](#) 

