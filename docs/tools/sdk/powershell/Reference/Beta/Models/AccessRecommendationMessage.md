---
id: beta-access-recommendation-message
title: AccessRecommendationMessage
pagination_label: AccessRecommendationMessage
sidebar_label: AccessRecommendationMessage
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccessRecommendationMessage', 'BetaAccessRecommendationMessage'] 
slug: /tools/sdk/powershell/beta/models/access-recommendation-message
tags: ['SDK', 'Software Development Kit', 'AccessRecommendationMessage', 'BetaAccessRecommendationMessage']
---


# AccessRecommendationMessage

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Interpretation** | **String** | Information about why the access item was recommended. | [optional] 

## Examples

- Prepare the resource
```powershell
$AccessRecommendationMessage = Initialize-PSSailpoint.BetaAccessRecommendationMessage  -Interpretation 95% of your peers have this access.
```

- Convert the resource to JSON
```powershell
$AccessRecommendationMessage | ConvertTo-JSON
```


[[Back to top]](#) 

