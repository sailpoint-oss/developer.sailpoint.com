---
id: access-recommendation-message
title: AccessRecommendationMessage
pagination_label: AccessRecommendationMessage
sidebar_label: AccessRecommendationMessage
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'AccessRecommendationMessage'] 
slug: /tools/sdk/powershell/beta/models/access-recommendation-message
tags: ['SDK', 'Software Development Kit', 'AccessRecommendationMessage']
---


# AccessRecommendationMessage

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Interpretation** |  Pointer to **String** | Information about why the access item was recommended. | [optional] 

## Examples

- Prepare the resource
```powershell
$AccessRecommendationMessage = Initialize-BetaAccessRecommendationMessage  -Interpretation 95% of your peers have this access.
```

- Convert the resource to JSON
```powershell
$AccessRecommendationMessage | ConvertTo-JSON
```


[[Back to top]](#) 

