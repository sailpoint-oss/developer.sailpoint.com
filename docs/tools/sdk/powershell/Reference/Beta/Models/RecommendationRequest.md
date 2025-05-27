---
id: beta-recommendation-request
title: RecommendationRequest
pagination_label: RecommendationRequest
sidebar_label: RecommendationRequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'RecommendationRequest', 'BetaRecommendationRequest'] 
slug: /tools/sdk/powershell/beta/models/recommendation-request
tags: ['SDK', 'Software Development Kit', 'RecommendationRequest', 'BetaRecommendationRequest']
---


# RecommendationRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IdentityId** | **String** | The identity ID | [optional] 
**Item** | [**AccessItemRef**](access-item-ref) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$RecommendationRequest = Initialize-BetaRecommendationRequest  -IdentityId 2c938083633d259901633d25c68c00fa `
 -Item null
```

- Convert the resource to JSON
```powershell
$RecommendationRequest | ConvertTo-JSON
```


[[Back to top]](#) 

