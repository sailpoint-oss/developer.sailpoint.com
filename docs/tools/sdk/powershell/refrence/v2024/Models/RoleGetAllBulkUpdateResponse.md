---
id: role-get-all-bulk-update-response
title: RoleGetAllBulkUpdateResponse
pagination_label: RoleGetAllBulkUpdateResponse
sidebar_label: RoleGetAllBulkUpdateResponse
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'RoleGetAllBulkUpdateResponse'] 
slug: /tools/sdk/powershell/v2024/models/role-get-all-bulk-update-response
tags: ['SDK', 'Software Development Kit', 'RoleGetAllBulkUpdateResponse']
---


# RoleGetAllBulkUpdateResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **String** | ID of the task which is executing the bulk update. This also used in to the bulk-update/** API to track status. | [optional] 
**Type** |  Pointer to **String** | Type of the bulk update object. | [optional] 
**Status** |  Pointer to  **Enum** [  "CREATED",    "PRE_PROCESS",    "POST_PROCESS",    "CHUNK_PENDING",    "CHUNK_PROCESSING" ] | The status of the bulk update request, only list unfinished request's status, the status could also checked by getBulkUpdateStatus API | [optional] 
**Created** |  Pointer to **System.DateTime** | Time when the bulk update request was created | [optional] 

## Examples

- Prepare the resource
```powershell
$RoleGetAllBulkUpdateResponse = Initialize-PSSailpoint.V2024RoleGetAllBulkUpdateResponse  -Id 2c9180867817ac4d017817c491119a20 `
 -Type Role `
 -Status CREATED `
 -Created 2020-10-08T18:33:52.029Z
```

- Convert the resource to JSON
```powershell
$RoleGetAllBulkUpdateResponse | ConvertTo-JSON
```


[[Back to top]](#) 

