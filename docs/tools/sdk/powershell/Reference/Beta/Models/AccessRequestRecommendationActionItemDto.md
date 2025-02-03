---
id: beta-access-request-recommendation-action-item-dto
title: AccessRequestRecommendationActionItemDto
pagination_label: AccessRequestRecommendationActionItemDto
sidebar_label: AccessRequestRecommendationActionItemDto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccessRequestRecommendationActionItemDto', 'BetaAccessRequestRecommendationActionItemDto'] 
slug: /tools/sdk/powershell/beta/models/access-request-recommendation-action-item-dto
tags: ['SDK', 'Software Development Kit', 'AccessRequestRecommendationActionItemDto', 'BetaAccessRequestRecommendationActionItemDto']
---


# AccessRequestRecommendationActionItemDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IdentityId** |  **String** | The identity ID taking the action. | [required]
**Access** |  [**AccessRequestRecommendationItem**](access-request-recommendation-item) |  | [required]

## Examples

- Prepare the resource
```powershell
$AccessRequestRecommendationActionItemDto = Initialize-PSSailpoint.BetaAccessRequestRecommendationActionItemDto  -IdentityId 2c91808570313110017040b06f344ec9 `
 -Access null
```

- Convert the resource to JSON
```powershell
$AccessRequestRecommendationActionItemDto | ConvertTo-JSON
```


[[Back to top]](#) 

