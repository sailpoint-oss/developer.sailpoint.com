---
id: outlier-feature-translation
title: OutlierFeatureTranslation
pagination_label: OutlierFeatureTranslation
sidebar_label: OutlierFeatureTranslation
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'OutlierFeatureTranslation'] 
slug: /tools/sdk/powershell/beta/models/outlier-feature-translation
tags: ['SDK', 'Software Development Kit', 'OutlierFeatureTranslation']
---


# OutlierFeatureTranslation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DisplayName** |  Pointer to [**TranslationMessage**](translation-message) |  | [optional] 
**Description** |  Pointer to [**TranslationMessage**](translation-message) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$OutlierFeatureTranslation = Initialize-BetaOutlierFeatureTranslation  -DisplayName null `
 -Description null
```

- Convert the resource to JSON
```powershell
$OutlierFeatureTranslation | ConvertTo-JSON
```


[[Back to top]](#) 

