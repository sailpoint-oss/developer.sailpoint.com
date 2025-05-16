---
id: v2025-recommendation-request
title: RecommendationRequest
pagination_label: RecommendationRequest
sidebar_label: RecommendationRequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'RecommendationRequest', 'V2025RecommendationRequest'] 
slug: /tools/sdk/powershell/v2025/models/recommendation-request
tags: ['SDK', 'Software Development Kit', 'RecommendationRequest', 'V2025RecommendationRequest']
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
$RecommendationRequest = Initialize-V2025RecommendationRequest  -IdentityId 2c938083633d259901633d25c68c00fa `
 -Item null
```

- Convert the resource to JSON
```powershell
$RecommendationRequest | ConvertTo-JSON
```


[[Back to top]](#) 

