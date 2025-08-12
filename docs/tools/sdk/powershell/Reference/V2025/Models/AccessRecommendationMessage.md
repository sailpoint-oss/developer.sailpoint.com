---
id: v2025-access-recommendation-message
title: AccessRecommendationMessage
pagination_label: AccessRecommendationMessage
sidebar_label: AccessRecommendationMessage
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccessRecommendationMessage', 'V2025AccessRecommendationMessage'] 
slug: /tools/sdk/powershell/v2025/models/access-recommendation-message
tags: ['SDK', 'Software Development Kit', 'AccessRecommendationMessage', 'V2025AccessRecommendationMessage']
---


# AccessRecommendationMessage

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Interpretation** | **String** | Information about why the access item was recommended. | [optional] 

## Examples

- Prepare the resource
```powershell
$AccessRecommendationMessage = Initialize-V2025AccessRecommendationMessage  -Interpretation 95% of your peers have this access.
```

- Convert the resource to JSON
```powershell
$AccessRecommendationMessage | ConvertTo-JSON
```


[[Back to top]](#) 

