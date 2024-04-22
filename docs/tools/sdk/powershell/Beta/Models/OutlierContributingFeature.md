---
id: outlier-contributing-feature
title: OutlierContributingFeature
pagination_label: OutlierContributingFeature
sidebar_label: OutlierContributingFeature
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'OutlierContributingFeature'] 
slug: /tools/sdk/powershell/beta/models/outlier-contributing-feature
tags: ['SDK', 'Software Development Kit', 'OutlierContributingFeature']
---


# OutlierContributingFeature

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **String** | Contributing feature id | [optional] 
**Name** |  Pointer to **String** | The name of the feature | [optional] 
**ValueType** |  Pointer to  **Enum** [  "INTEGER",    "FLOAT" ] | The data type of the value field | [optional] 
**Value** |  Pointer to [**OutlierContributingFeatureValue**](outlier-contributing-feature-value) |  | [optional] 
**Importance** |  Pointer to **Double** | The importance of the feature. This can also be a negative value | [optional] 
**DisplayName** |  Pointer to **String** | The (translated if header is passed) displayName for the feature | [optional] 
**Description** |  Pointer to **String** | The (translated if header is passed) description for the feature | [optional] 
**TranslationMessages** |  Pointer to [**OutlierFeatureTranslation**](outlier-feature-translation) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$OutlierContributingFeature = Initialize-BetaOutlierContributingFeature  -Id 66e38828-5017-47af-92ff-9844871352c5 `
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

