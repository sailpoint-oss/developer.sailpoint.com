---
id: beta-common-access-response
title: CommonAccessResponse
pagination_label: CommonAccessResponse
sidebar_label: CommonAccessResponse
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'CommonAccessResponse', 'BetaCommonAccessResponse'] 
slug: /tools/sdk/powershell/beta/models/common-access-response
tags: ['SDK', 'Software Development Kit', 'CommonAccessResponse', 'BetaCommonAccessResponse']
---


# CommonAccessResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **String** | Unique ID of the common access item | [optional] 
**Access** |  Pointer to [**CommonAccessItemAccess**](common-access-item-access) |  | [optional] 
**Status** |  Pointer to **String** | CONFIRMED or DENIED | [optional] 
**CommonAccessType** |  Pointer to **String** |  | [optional] 
**LastUpdated** |  Pointer to **System.DateTime** |  | [optional] [readonly] 
**ReviewedByUser** |  Pointer to **Boolean** | true if user has confirmed or denied status | [optional] 
**LastReviewed** |  Pointer to **System.DateTime** |  | [optional] [readonly] 
**CreatedByUser** |  Pointer to **Boolean** |  | [optional] [default to $false]

## Examples

- Prepare the resource
```powershell
$CommonAccessResponse = Initialize-PSSailpoint.BetaCommonAccessResponse  -Id 555ab47a-0d32-4813-906f-adf3567de6a4 `
 -Access null `
 -Status null `
 -CommonAccessType UNSET `
 -LastUpdated null `
 -ReviewedByUser null `
 -LastReviewed null `
 -CreatedByUser false
```

- Convert the resource to JSON
```powershell
$CommonAccessResponse | ConvertTo-JSON
```


[[Back to top]](#) 

