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
**Id** | **String** | Unique ID of the common access item | [optional] 
**Access** | [**CommonAccessItemAccess**](common-access-item-access) |  | [optional] 
**Status** | **String** | CONFIRMED or DENIED | [optional] 
**CommonAccessType** | **String** |  | [optional] 
**LastUpdated** | **System.DateTime** |  | [optional] [readonly] 
**ReviewedByUser** | **Boolean** | true if user has confirmed or denied status | [optional] 
**LastReviewed** | **System.DateTime** |  | [optional] [readonly] 
**CreatedByUser** | **Boolean** |  | [optional] [default to $false]

## Examples

- Prepare the resource
```powershell
$CommonAccessResponse = Initialize-BetaCommonAccessResponse  -Id 555ab47a-0d32-4813-906f-adf3567de6a4 `
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

