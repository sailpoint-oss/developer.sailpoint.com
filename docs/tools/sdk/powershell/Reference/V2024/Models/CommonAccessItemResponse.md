---
id: v2024-common-access-item-response
title: CommonAccessItemResponse
pagination_label: CommonAccessItemResponse
sidebar_label: CommonAccessItemResponse
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'CommonAccessItemResponse', 'V2024CommonAccessItemResponse'] 
slug: /tools/sdk/powershell/v2024/models/common-access-item-response
tags: ['SDK', 'Software Development Kit', 'CommonAccessItemResponse', 'V2024CommonAccessItemResponse']
---


# CommonAccessItemResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Common Access Item ID | [optional] 
**Access** | [**CommonAccessItemAccess**](common-access-item-access) |  | [optional] 
**Status** | [**CommonAccessItemState**](common-access-item-state) |  | [optional] 
**LastUpdated** | **String** |  | [optional] 
**ReviewedByUser** | **Boolean** |  | [optional] 
**LastReviewed** | **String** |  | [optional] 
**CreatedByUser** | **String** |  | [optional] 

## Examples

- Prepare the resource
```powershell
$CommonAccessItemResponse = Initialize-PSSailpoint.V2024CommonAccessItemResponse  -Id null `
 -Access null `
 -Status null `
 -LastUpdated null `
 -ReviewedByUser null `
 -LastReviewed null `
 -CreatedByUser null
```

- Convert the resource to JSON
```powershell
$CommonAccessItemResponse | ConvertTo-JSON
```


[[Back to top]](#) 

