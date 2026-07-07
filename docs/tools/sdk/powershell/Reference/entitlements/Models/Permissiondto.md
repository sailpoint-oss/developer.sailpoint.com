---
id: permissiondto
title: Permissiondto
pagination_label: Permissiondto
sidebar_label: Permissiondto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Permissiondto', 'Permissiondto'] 
slug: /tools/sdk/powershell/entitlements/models/permissiondto
tags: ['SDK', 'Software Development Kit', 'Permissiondto', 'Permissiondto']
---


# Permissiondto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Rights** | **[]String** | All the rights (e.g. actions) that this permission allows on the target | [optional] [readonly] 
**Target** | **String** | The target the permission would grants rights on. | [optional] [readonly] 

## Examples

- Prepare the resource
```powershell
$Permissiondto = Initialize-Permissiondto  -Rights HereIsRight1 `
 -Target SYS.GV_$TRANSACTION
```

- Convert the resource to JSON
```powershell
$Permissiondto | ConvertTo-JSON
```


[[Back to top]](#) 

