---
id: v2025-access-request-recommendation-item-detail-access
title: AccessRequestRecommendationItemDetailAccess
pagination_label: AccessRequestRecommendationItemDetailAccess
sidebar_label: AccessRequestRecommendationItemDetailAccess
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccessRequestRecommendationItemDetailAccess', 'V2025AccessRequestRecommendationItemDetailAccess'] 
slug: /tools/sdk/powershell/v2025/models/access-request-recommendation-item-detail-access
tags: ['SDK', 'Software Development Kit', 'AccessRequestRecommendationItemDetailAccess', 'V2025AccessRequestRecommendationItemDetailAccess']
---


# AccessRequestRecommendationItemDetailAccess

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | ID of access item being recommended. | [optional] 
**Type** | [**AccessRequestRecommendationItemType**](access-request-recommendation-item-type) |  | [optional] 
**Name** | **String** | Name of the access item | [optional] 
**Description** | **String** | Description of the access item | [optional] 

## Examples

- Prepare the resource
```powershell
$AccessRequestRecommendationItemDetailAccess = Initialize-PSSailpoint.V2025AccessRequestRecommendationItemDetailAccess  -Id 2c9180835d2e5168015d32f890ca1581 `
 -Type null `
 -Name Employee-database-read-write `
 -Description This item grants an employee read and write access to the database
```

- Convert the resource to JSON
```powershell
$AccessRequestRecommendationItemDetailAccess | ConvertTo-JSON
```


[[Back to top]](#) 

