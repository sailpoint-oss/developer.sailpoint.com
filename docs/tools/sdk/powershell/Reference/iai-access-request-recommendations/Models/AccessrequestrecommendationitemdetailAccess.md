---
id: accessrequestrecommendationitemdetail-access
title: AccessrequestrecommendationitemdetailAccess
pagination_label: AccessrequestrecommendationitemdetailAccess
sidebar_label: AccessrequestrecommendationitemdetailAccess
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccessrequestrecommendationitemdetailAccess', 'AccessrequestrecommendationitemdetailAccess'] 
slug: /tools/sdk/powershell/iaiaccessrequestrecommendations/models/accessrequestrecommendationitemdetail-access
tags: ['SDK', 'Software Development Kit', 'AccessrequestrecommendationitemdetailAccess', 'AccessrequestrecommendationitemdetailAccess']
---


# AccessrequestrecommendationitemdetailAccess

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | ID of access item being recommended. | [optional] 
**Type** | [**Accessrequestrecommendationitemtype**](accessrequestrecommendationitemtype) |  | [optional] 
**Name** | **String** | Name of the access item | [optional] 
**Description** | **String** | Description of the access item | [optional] 

## Examples

- Prepare the resource
```powershell
$AccessrequestrecommendationitemdetailAccess = Initialize-AccessrequestrecommendationitemdetailAccess  -Id 2c9180835d2e5168015d32f890ca1581 `
 -Type null `
 -Name Employee-database-read-write `
 -Description This item grants an employee read and write access to the database
```

- Convert the resource to JSON
```powershell
$AccessrequestrecommendationitemdetailAccess | ConvertTo-JSON
```


[[Back to top]](#) 

