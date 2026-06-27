---
id: outliercontributingfeature
title: Outliercontributingfeature
pagination_label: Outliercontributingfeature
sidebar_label: Outliercontributingfeature
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Outliercontributingfeature', 'Outliercontributingfeature'] 
slug: /tools/sdk/powershell/iaioutliers/models/outliercontributingfeature
tags: ['SDK', 'Software Development Kit', 'Outliercontributingfeature', 'Outliercontributingfeature']
---


# Outliercontributingfeature

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Contributing feature id | [optional] 
**Name** | **String** | The name of the feature | [optional] 
**ValueType** | [**Outliervaluetype**](outliervaluetype) |  | [optional] 
**Value** | **Double** | The feature value | [optional] 
**Importance** | **Double** | The importance of the feature. This can also be a negative value | [optional] 
**DisplayName** | **String** | The (translated if header is passed) displayName for the feature | [optional] 
**Description** | **String** | The (translated if header is passed) description for the feature | [optional] 
**TranslationMessages** | [**Outlierfeaturetranslation**](outlierfeaturetranslation) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Outliercontributingfeature = Initialize-Outliercontributingfeature  -Id 66e38828-5017-47af-92ff-9844871352c5 `
 -Name entitlement_count `
 -ValueType null `
 -Value 1 `
 -Importance -0.15 `
 -DisplayName Number of entitlements `
 -Description The total number of entitlements belonging to an identity `
 -TranslationMessages null
```

- Convert the resource to JSON
```powershell
$Outliercontributingfeature | ConvertTo-JSON
```


[[Back to top]](#) 

