---
id: roleinsightsresponse
title: Roleinsightsresponse
pagination_label: Roleinsightsresponse
sidebar_label: Roleinsightsresponse
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Roleinsightsresponse', 'Roleinsightsresponse'] 
slug: /tools/sdk/powershell/roleinsights/models/roleinsightsresponse
tags: ['SDK', 'Software Development Kit', 'Roleinsightsresponse', 'Roleinsightsresponse']
---


# Roleinsightsresponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Request Id for a role insight generation request | [optional] 
**CreatedDate** | **System.DateTime** | The date-time role insights request was created. | [optional] 
**LastGenerated** | **System.DateTime** | The date-time role insights request was completed. | [optional] 
**NumberOfUpdates** | **Int32** | Total number of updates for this request. Starts with 0 and will have correct number when request is COMPLETED. | [optional] 
**RoleIds** | **[]String** | The role IDs that are in this request. | [optional] 
**Status** |  **Enum** [  "CREATED",    "IN PROGRESS",    "COMPLETED",    "FAILED" ] | Request status | [optional] 

## Examples

- Prepare the resource
```powershell
$Roleinsightsresponse = Initialize-Roleinsightsresponse  -Id 8c190e67-87aa-4ed9-a90b-d9d5344523fb `
 -CreatedDate 2020-09-16T18:49:32.150Z `
 -LastGenerated 2020-09-16T18:50:12.150Z `
 -NumberOfUpdates 0 `
 -RoleIds null `
 -Status null
```

- Convert the resource to JSON
```powershell
$Roleinsightsresponse | ConvertTo-JSON
```


[[Back to top]](#) 

