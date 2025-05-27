---
id: v2024-access-profile-bulk-delete-response
title: AccessProfileBulkDeleteResponse
pagination_label: AccessProfileBulkDeleteResponse
sidebar_label: AccessProfileBulkDeleteResponse
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccessProfileBulkDeleteResponse', 'V2024AccessProfileBulkDeleteResponse'] 
slug: /tools/sdk/powershell/v2024/models/access-profile-bulk-delete-response
tags: ['SDK', 'Software Development Kit', 'AccessProfileBulkDeleteResponse', 'V2024AccessProfileBulkDeleteResponse']
---


# AccessProfileBulkDeleteResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TaskId** | **String** | ID of the task which is executing the bulk deletion. This can be passed to the **/task-status** API to track status. | [optional] 
**Pending** | **[]String** | List of IDs of Access Profiles which are pending deletion. | [optional] 
**InUse** | [**[]AccessProfileUsage**](access-profile-usage) | List of usages of Access Profiles targeted for deletion. | [optional] 

## Examples

- Prepare the resource
```powershell
$AccessProfileBulkDeleteResponse = Initialize-V2024AccessProfileBulkDeleteResponse  -TaskId 2c9180867817ac4d017817c491119a20 `
 -Pending [2c91808876438bbb017668c21919ecca, 2c91808876438bb201766e129f151816] `
 -InUse null
```

- Convert the resource to JSON
```powershell
$AccessProfileBulkDeleteResponse | ConvertTo-JSON
```


[[Back to top]](#) 

