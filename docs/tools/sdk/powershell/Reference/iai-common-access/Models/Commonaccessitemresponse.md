---
id: commonaccessitemresponse
title: Commonaccessitemresponse
pagination_label: Commonaccessitemresponse
sidebar_label: Commonaccessitemresponse
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Commonaccessitemresponse', 'Commonaccessitemresponse'] 
slug: /tools/sdk/powershell/iaicommonaccess/models/commonaccessitemresponse
tags: ['SDK', 'Software Development Kit', 'Commonaccessitemresponse', 'Commonaccessitemresponse']
---


# Commonaccessitemresponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Common Access Item ID | [optional] 
**Access** | [**Commonaccessitemaccess**](commonaccessitemaccess) |  | [optional] 
**Status** | [**Commonaccessitemstate**](commonaccessitemstate) |  | [optional] 
**LastUpdated** | **String** |  | [optional] 
**ReviewedByUser** | **Boolean** |  | [optional] 
**LastReviewed** | **String** |  | [optional] 
**CreatedByUser** | **String** |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Commonaccessitemresponse = Initialize-Commonaccessitemresponse  -Id null `
 -Access null `
 -Status null `
 -LastUpdated null `
 -ReviewedByUser null `
 -LastReviewed null `
 -CreatedByUser null
```

- Convert the resource to JSON
```powershell
$Commonaccessitemresponse | ConvertTo-JSON
```


[[Back to top]](#) 

