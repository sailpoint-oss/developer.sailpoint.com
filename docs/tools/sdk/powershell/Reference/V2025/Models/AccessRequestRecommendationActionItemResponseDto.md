---
id: v2025-access-request-recommendation-action-item-response-dto
title: AccessRequestRecommendationActionItemResponseDto
pagination_label: AccessRequestRecommendationActionItemResponseDto
sidebar_label: AccessRequestRecommendationActionItemResponseDto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccessRequestRecommendationActionItemResponseDto', 'V2025AccessRequestRecommendationActionItemResponseDto'] 
slug: /tools/sdk/powershell/v2025/models/access-request-recommendation-action-item-response-dto
tags: ['SDK', 'Software Development Kit', 'AccessRequestRecommendationActionItemResponseDto', 'V2025AccessRequestRecommendationActionItemResponseDto']
---


# AccessRequestRecommendationActionItemResponseDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IdentityId** | **String** | The identity ID taking the action. | [optional] 
**Access** | [**AccessRequestRecommendationItem**](access-request-recommendation-item) |  | [optional] 
**Timestamp** | **System.DateTime** |  | [optional] 

## Examples

- Prepare the resource
```powershell
$AccessRequestRecommendationActionItemResponseDto = Initialize-V2025AccessRequestRecommendationActionItemResponseDto  -IdentityId 2c91808570313110017040b06f344ec9 `
 -Access null `
 -Timestamp 2017-07-11T18:45:37.098Z
```

- Convert the resource to JSON
```powershell
$AccessRequestRecommendationActionItemResponseDto | ConvertTo-JSON
```


[[Back to top]](#) 

