---
id: v2025-translation-message
title: TranslationMessage
pagination_label: TranslationMessage
sidebar_label: TranslationMessage
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'TranslationMessage', 'V2025TranslationMessage'] 
slug: /tools/sdk/powershell/v2025/models/translation-message
tags: ['SDK', 'Software Development Kit', 'TranslationMessage', 'V2025TranslationMessage']
---


# TranslationMessage

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Key** | **String** | The key of the translation message | [optional] 
**Values** | **[]String** | The values corresponding to the translation messages | [optional] 

## Examples

- Prepare the resource
```powershell
$TranslationMessage = Initialize-PSSailpoint.V2025TranslationMessage  -Key recommender-api.V2_WEIGHT_FEATURE_PRODUCT_INTERPRETATION_HIGH `
 -Values [75, department]
```

- Convert the resource to JSON
```powershell
$TranslationMessage | ConvertTo-JSON
```


[[Back to top]](#) 

