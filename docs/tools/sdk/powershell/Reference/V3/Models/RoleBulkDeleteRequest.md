---
id: role-bulk-delete-request
title: RoleBulkDeleteRequest
pagination_label: RoleBulkDeleteRequest
sidebar_label: RoleBulkDeleteRequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'RoleBulkDeleteRequest', 'RoleBulkDeleteRequest'] 
slug: /tools/sdk/powershell/v3/models/role-bulk-delete-request
tags: ['SDK', 'Software Development Kit', 'RoleBulkDeleteRequest', 'RoleBulkDeleteRequest']
---


# RoleBulkDeleteRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RoleIds** | **[]String** | List of IDs of Roles to be deleted. | [required]

## Examples

- Prepare the resource
```powershell
$RoleBulkDeleteRequest = Initialize-PSSailpoint.V3RoleBulkDeleteRequest  -RoleIds [2c9180847812e0b1017817051919ecca, 2c9180887812e0b201781e129f151816]
```

- Convert the resource to JSON
```powershell
$RoleBulkDeleteRequest | ConvertTo-JSON
```


[[Back to top]](#) 

