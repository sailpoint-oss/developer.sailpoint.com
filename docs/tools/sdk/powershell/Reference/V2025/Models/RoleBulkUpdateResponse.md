---
id: v2025-role-bulk-update-response
title: RoleBulkUpdateResponse
pagination_label: RoleBulkUpdateResponse
sidebar_label: RoleBulkUpdateResponse
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'RoleBulkUpdateResponse', 'V2025RoleBulkUpdateResponse'] 
slug: /tools/sdk/powershell/v2025/models/role-bulk-update-response
tags: ['SDK', 'Software Development Kit', 'RoleBulkUpdateResponse', 'V2025RoleBulkUpdateResponse']
---


# RoleBulkUpdateResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | ID of the task which is executing the bulk update. This also used in to the bulk-update/** API to track status. | [optional] 
**Type** | **String** | Type of the bulk update object. | [optional] 
**Status** |  **Enum** [  "CREATED",    "PRE_PROCESS",    "PRE_PROCESS_COMPLETED",    "POST_PROCESS",    "COMPLETED",    "CHUNK_PENDING",    "CHUNK_PROCESSING" ] | The status of the bulk update request, could also checked by getBulkUpdateStatus API | [optional] 
**Created** | **System.DateTime** | Time when the bulk update request was created | [optional] 

## Examples

- Prepare the resource
```powershell
$RoleBulkUpdateResponse = Initialize-PSSailpoint.V2025RoleBulkUpdateResponse  -Id 2c9180867817ac4d017817c491119a20 `
 -Type Role `
 -Status CREATED `
 -Created 2020-10-08T18:33:52.029Z
```

- Convert the resource to JSON
```powershell
$RoleBulkUpdateResponse | ConvertTo-JSON
```


[[Back to top]](#) 

