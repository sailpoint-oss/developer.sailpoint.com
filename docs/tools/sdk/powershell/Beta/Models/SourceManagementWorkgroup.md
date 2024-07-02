---
id: source-management-workgroup
title: SourceManagementWorkgroup
pagination_label: SourceManagementWorkgroup
sidebar_label: SourceManagementWorkgroup
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'SourceManagementWorkgroup'] 
slug: /tools/sdk/powershell/beta/models/source-management-workgroup
tags: ['SDK', 'Software Development Kit', 'SourceManagementWorkgroup']
---


# SourceManagementWorkgroup

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  Pointer to  **Enum** [  "GOVERNANCE_GROUP" ] | The type of object being referenced | [optional] 
**Id** |  Pointer to **String** | ID of the management workgroup | [optional] 
**Name** |  Pointer to **String** | Human-readable display name of the management workgroup | [optional] 

## Examples

- Prepare the resource
```powershell
$SourceManagementWorkgroup = Initialize-BetaSourceManagementWorkgroup  -Type GOVERNANCE_GROUP `
 -Id 2c91808568c529c60168cca6f90c2222 `
 -Name My Management Workgroup
```

- Convert the resource to JSON
```powershell
$SourceManagementWorkgroup | ConvertTo-JSON
```


[[Back to top]](#) 

