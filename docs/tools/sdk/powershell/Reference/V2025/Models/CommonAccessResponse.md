---
id: v2025-common-access-response
title: CommonAccessResponse
pagination_label: CommonAccessResponse
sidebar_label: CommonAccessResponse
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'CommonAccessResponse', 'V2025CommonAccessResponse'] 
slug: /tools/sdk/powershell/v2025/models/common-access-response
tags: ['SDK', 'Software Development Kit', 'CommonAccessResponse', 'V2025CommonAccessResponse']
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
$CommonAccessResponse = Initialize-V2025CommonAccessResponse  -Id 555ab47a-0d32-4813-906f-adf3567de6a4 `
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

