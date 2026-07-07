---
id: commonaccessresponse
title: Commonaccessresponse
pagination_label: Commonaccessresponse
sidebar_label: Commonaccessresponse
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Commonaccessresponse', 'Commonaccessresponse'] 
slug: /tools/sdk/powershell/iaicommonaccess/models/commonaccessresponse
tags: ['SDK', 'Software Development Kit', 'Commonaccessresponse', 'Commonaccessresponse']
---


# Commonaccessresponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Unique ID of the common access item | [optional] 
**Access** | [**Commonaccessitemaccess**](commonaccessitemaccess) |  | [optional] 
**Status** | **String** | CONFIRMED or DENIED | [optional] 
**CommonAccessType** | **String** |  | [optional] 
**LastUpdated** | **System.DateTime** |  | [optional] [readonly] 
**ReviewedByUser** | **Boolean** | true if user has confirmed or denied status | [optional] 
**LastReviewed** | **System.DateTime** |  | [optional] [readonly] 
**CreatedByUser** | **Boolean** |  | [optional] [default to $false]

## Examples

- Prepare the resource
```powershell
$Commonaccessresponse = Initialize-Commonaccessresponse  -Id 555ab47a-0d32-4813-906f-adf3567de6a4 `
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
$Commonaccessresponse | ConvertTo-JSON
```


[[Back to top]](#) 

