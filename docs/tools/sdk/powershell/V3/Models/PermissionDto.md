---
id: permission-dto
title: PermissionDto
pagination_label: PermissionDto
sidebar_label: PermissionDto
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'PermissionDto'] 
slug: /tools/sdk/powershell/v3/models/permission-dto
tags: ['SDK', 'Software Development Kit', 'PermissionDto']
---


# PermissionDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Rights** |  Pointer to **[]String** | All the rights (e.g. actions) that this permission allows on the target | [optional] [readonly] 
**Target** |  Pointer to **String** | The target the permission would grants rights on. | [optional] [readonly] 

## Examples

- Prepare the resource
```powershell
$PermissionDto = Initialize-PermissionDto  -Rights null `
 -Target SYS.GV_$TRANSACTION
```

- Convert the resource to JSON
```powershell
$PermissionDto | ConvertTo-JSON
```


[[Back to top]](#) 

