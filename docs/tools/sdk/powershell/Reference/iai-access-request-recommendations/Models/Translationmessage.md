---
id: translationmessage
title: Translationmessage
pagination_label: Translationmessage
sidebar_label: Translationmessage
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Translationmessage', 'Translationmessage'] 
slug: /tools/sdk/powershell/iaiaccessrequestrecommendations/models/translationmessage
tags: ['SDK', 'Software Development Kit', 'Translationmessage', 'Translationmessage']
---


# Translationmessage

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Key** | **String** | The key of the translation message | [optional] 
**Values** | **[]String** | The values corresponding to the translation messages | [optional] 

## Examples

- Prepare the resource
```powershell
$Translationmessage = Initialize-Translationmessage  -Key recommender-api.V2_WEIGHT_FEATURE_PRODUCT_INTERPRETATION_HIGH `
 -Values ["75","department"]
```

- Convert the resource to JSON
```powershell
$Translationmessage | ConvertTo-JSON
```


[[Back to top]](#) 

