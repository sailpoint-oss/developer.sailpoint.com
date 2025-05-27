---
id: v2024-role-bulk-delete-request
title: RoleBulkDeleteRequest
pagination_label: RoleBulkDeleteRequest
sidebar_label: RoleBulkDeleteRequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'RoleBulkDeleteRequest', 'V2024RoleBulkDeleteRequest'] 
slug: /tools/sdk/powershell/v2024/models/role-bulk-delete-request
tags: ['SDK', 'Software Development Kit', 'RoleBulkDeleteRequest', 'V2024RoleBulkDeleteRequest']
---


# RoleBulkDeleteRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RoleIds** | **[]String** | List of IDs of Roles to be deleted. | [required]

## Examples

- Prepare the resource
```powershell
$RoleBulkDeleteRequest = Initialize-V2024RoleBulkDeleteRequest  -RoleIds [2c9180847812e0b1017817051919ecca, 2c9180887812e0b201781e129f151816]
```

- Convert the resource to JSON
```powershell
$RoleBulkDeleteRequest | ConvertTo-JSON
```


[[Back to top]](#) 

