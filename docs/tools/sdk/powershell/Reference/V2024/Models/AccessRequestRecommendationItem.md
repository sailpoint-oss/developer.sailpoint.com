---
id: v2024-access-request-recommendation-item
title: AccessRequestRecommendationItem
pagination_label: AccessRequestRecommendationItem
sidebar_label: AccessRequestRecommendationItem
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccessRequestRecommendationItem', 'V2024AccessRequestRecommendationItem'] 
slug: /tools/sdk/powershell/v2024/models/access-request-recommendation-item
tags: ['SDK', 'Software Development Kit', 'AccessRequestRecommendationItem', 'V2024AccessRequestRecommendationItem']
---


# AccessRequestRecommendationItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | ID of access item being recommended. | [optional] 
**Type** | [**AccessRequestRecommendationItemType**](access-request-recommendation-item-type) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$AccessRequestRecommendationItem = Initialize-PSSailpoint.V2024AccessRequestRecommendationItem  -Id 2c9180835d2e5168015d32f890ca1581 `
 -Type null
```

- Convert the resource to JSON
```powershell
$AccessRequestRecommendationItem | ConvertTo-JSON
```


[[Back to top]](#) 

