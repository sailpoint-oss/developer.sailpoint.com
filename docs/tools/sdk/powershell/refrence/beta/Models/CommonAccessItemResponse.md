---
id: common-access-item-response
title: CommonAccessItemResponse
pagination_label: CommonAccessItemResponse
sidebar_label: CommonAccessItemResponse
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'CommonAccessItemResponse'] 
slug: /tools/sdk/powershell/beta/models/common-access-item-response
tags: ['SDK', 'Software Development Kit', 'CommonAccessItemResponse']
---


# CommonAccessItemResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **String** | Common Access Item ID | [optional] 
**Access** |  Pointer to [**CommonAccessItemAccess**](common-access-item-access) |  | [optional] 
**Status** |  Pointer to [**CommonAccessItemState**](common-access-item-state) |  | [optional] 
**LastUpdated** |  Pointer to **String** |  | [optional] 
**ReviewedByUser** |  Pointer to **Boolean** |  | [optional] 
**LastReviewed** |  Pointer to **String** |  | [optional] 
**CreatedByUser** |  Pointer to **String** |  | [optional] 

## Examples

- Prepare the resource
```powershell
$CommonAccessItemResponse = Initialize-PSSailpoint.BetaCommonAccessItemResponse  -Id null `
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

