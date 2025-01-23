---
id: access-request-recommendation-action-item-response-dto
title: AccessRequestRecommendationActionItemResponseDto
pagination_label: AccessRequestRecommendationActionItemResponseDto
sidebar_label: AccessRequestRecommendationActionItemResponseDto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccessRequestRecommendationActionItemResponseDto'] 
slug: /tools/sdk/powershell/v2024/models/access-request-recommendation-action-item-response-dto
tags: ['SDK', 'Software Development Kit', 'AccessRequestRecommendationActionItemResponseDto']
---


# AccessRequestRecommendationActionItemResponseDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IdentityId** |  Pointer to **String** | The identity ID taking the action. | [optional] 
**Access** |  Pointer to [**AccessRequestRecommendationItem**](access-request-recommendation-item) |  | [optional] 
**Timestamp** |  Pointer to **System.DateTime** |  | [optional] 

## Examples

- Prepare the resource
```powershell
$AccessRequestRecommendationActionItemResponseDto = Initialize-PSSailpoint.V2024AccessRequestRecommendationActionItemResponseDto  -IdentityId 2c91808570313110017040b06f344ec9 `
 -Access null `
 -Timestamp 2017-07-11T18:45:37.098Z
```

- Convert the resource to JSON
```powershell
$AccessRequestRecommendationActionItemResponseDto | ConvertTo-JSON
```


[[Back to top]](#) 

