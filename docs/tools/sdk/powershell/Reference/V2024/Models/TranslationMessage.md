---
id: v2024-translation-message
title: TranslationMessage
pagination_label: TranslationMessage
sidebar_label: TranslationMessage
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'TranslationMessage', 'V2024TranslationMessage'] 
slug: /tools/sdk/powershell/v2024/models/translation-message
tags: ['SDK', 'Software Development Kit', 'TranslationMessage', 'V2024TranslationMessage']
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
$TranslationMessage = Initialize-V2024TranslationMessage  -Key recommender-api.V2_WEIGHT_FEATURE_PRODUCT_INTERPRETATION_HIGH `
 -Values [75, department]
```

- Convert the resource to JSON
```powershell
$TranslationMessage | ConvertTo-JSON
```


[[Back to top]](#) 

