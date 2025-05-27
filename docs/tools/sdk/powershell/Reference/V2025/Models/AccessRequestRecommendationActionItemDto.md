---
id: v2025-access-request-recommendation-action-item-dto
title: AccessRequestRecommendationActionItemDto
pagination_label: AccessRequestRecommendationActionItemDto
sidebar_label: AccessRequestRecommendationActionItemDto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccessRequestRecommendationActionItemDto', 'V2025AccessRequestRecommendationActionItemDto'] 
slug: /tools/sdk/powershell/v2025/models/access-request-recommendation-action-item-dto
tags: ['SDK', 'Software Development Kit', 'AccessRequestRecommendationActionItemDto', 'V2025AccessRequestRecommendationActionItemDto']
---


# AccessRequestRecommendationActionItemDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IdentityId** | **String** | The identity ID taking the action. | [required]
**Access** | [**AccessRequestRecommendationItem**](access-request-recommendation-item) |  | [required]

## Examples

- Prepare the resource
```powershell
$AccessRequestRecommendationActionItemDto = Initialize-V2025AccessRequestRecommendationActionItemDto  -IdentityId 2c91808570313110017040b06f344ec9 `
 -Access null
```

- Convert the resource to JSON
```powershell
$AccessRequestRecommendationActionItemDto | ConvertTo-JSON
```


[[Back to top]](#) 

