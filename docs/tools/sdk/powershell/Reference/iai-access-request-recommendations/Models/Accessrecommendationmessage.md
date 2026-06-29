---
id: accessrecommendationmessage
title: Accessrecommendationmessage
pagination_label: Accessrecommendationmessage
sidebar_label: Accessrecommendationmessage
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Accessrecommendationmessage', 'Accessrecommendationmessage'] 
slug: /tools/sdk/powershell/iaiaccessrequestrecommendations/models/accessrecommendationmessage
tags: ['SDK', 'Software Development Kit', 'Accessrecommendationmessage', 'Accessrecommendationmessage']
---


# Accessrecommendationmessage

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Interpretation** | **String** | Information about why the access item was recommended. | [optional] 

## Examples

- Prepare the resource
```powershell
$Accessrecommendationmessage = Initialize-Accessrecommendationmessage  -Interpretation 95% of your peers have this access.
```

- Convert the resource to JSON
```powershell
$Accessrecommendationmessage | ConvertTo-JSON
```


[[Back to top]](#) 

