---
id: v2025-permission-dto
title: PermissionDto
pagination_label: PermissionDto
sidebar_label: PermissionDto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'PermissionDto', 'V2025PermissionDto'] 
slug: /tools/sdk/powershell/v2025/models/permission-dto
tags: ['SDK', 'Software Development Kit', 'PermissionDto', 'V2025PermissionDto']
---


# PermissionDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Rights** | **[]String** | All the rights (e.g. actions) that this permission allows on the target | [optional] [readonly] 
**Target** | **String** | The target the permission would grants rights on. | [optional] [readonly] 

## Examples

- Prepare the resource
```powershell
$PermissionDto = Initialize-V2025PermissionDto  -Rights HereIsRight1 `
 -Target SYS.GV_$TRANSACTION
```

- Convert the resource to JSON
```powershell
$PermissionDto | ConvertTo-JSON
```


[[Back to top]](#) 

