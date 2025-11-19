---
id: v2025-outlier-feature-translation
title: OutlierFeatureTranslation
pagination_label: OutlierFeatureTranslation
sidebar_label: OutlierFeatureTranslation
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'OutlierFeatureTranslation', 'V2025OutlierFeatureTranslation'] 
slug: /tools/sdk/powershell/v2025/models/outlier-feature-translation
tags: ['SDK', 'Software Development Kit', 'OutlierFeatureTranslation', 'V2025OutlierFeatureTranslation']
---


# OutlierFeatureTranslation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DisplayName** | [**TranslationMessage**](translation-message) |  | [optional] 
**Description** | [**TranslationMessage**](translation-message) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$OutlierFeatureTranslation = Initialize-V2025OutlierFeatureTranslation  -DisplayName null `
 -Description null
```

- Convert the resource to JSON
```powershell
$OutlierFeatureTranslation | ConvertTo-JSON
```


[[Back to top]](#) 

