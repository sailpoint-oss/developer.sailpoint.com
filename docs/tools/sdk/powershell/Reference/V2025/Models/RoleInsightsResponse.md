---
id: v2025-role-insights-response
title: RoleInsightsResponse
pagination_label: RoleInsightsResponse
sidebar_label: RoleInsightsResponse
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'RoleInsightsResponse', 'V2025RoleInsightsResponse'] 
slug: /tools/sdk/powershell/v2025/models/role-insights-response
tags: ['SDK', 'Software Development Kit', 'RoleInsightsResponse', 'V2025RoleInsightsResponse']
---


# RoleInsightsResponse

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
$RoleInsightsResponse = Initialize-V2025RoleInsightsResponse  -Id 8c190e67-87aa-4ed9-a90b-d9d5344523fb `
 -CreatedDate 2020-09-16T18:49:32.150Z `
 -LastGenerated 2020-09-16T18:50:12.150Z `
 -NumberOfUpdates 0 `
 -RoleIds null `
 -Status null
```

- Convert the resource to JSON
```powershell
$RoleInsightsResponse | ConvertTo-JSON
```


[[Back to top]](#) 

