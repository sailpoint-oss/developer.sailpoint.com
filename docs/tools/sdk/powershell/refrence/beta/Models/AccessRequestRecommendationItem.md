---
id: access-request-recommendation-item
title: AccessRequestRecommendationItem
pagination_label: AccessRequestRecommendationItem
sidebar_label: AccessRequestRecommendationItem
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccessRequestRecommendationItem'] 
slug: /tools/sdk/powershell/beta/models/access-request-recommendation-item
tags: ['SDK', 'Software Development Kit', 'AccessRequestRecommendationItem']
---


# AccessRequestRecommendationItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **String** | ID of access item being recommended. | [optional] 
**Type** |  Pointer to [**AccessRequestRecommendationItemType**](access-request-recommendation-item-type) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$AccessRequestRecommendationItem = Initialize-PSSailpoint.BetaAccessRequestRecommendationItem  -Id 2c9180835d2e5168015d32f890ca1581 `
 -Type null
```

- Convert the resource to JSON
```powershell
$AccessRequestRecommendationItem | ConvertTo-JSON
```


[[Back to top]](#) 

