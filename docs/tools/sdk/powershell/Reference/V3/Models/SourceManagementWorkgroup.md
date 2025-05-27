---
id: source-management-workgroup
title: SourceManagementWorkgroup
pagination_label: SourceManagementWorkgroup
sidebar_label: SourceManagementWorkgroup
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SourceManagementWorkgroup', 'SourceManagementWorkgroup'] 
slug: /tools/sdk/powershell/v3/models/source-management-workgroup
tags: ['SDK', 'Software Development Kit', 'SourceManagementWorkgroup', 'SourceManagementWorkgroup']
---


# SourceManagementWorkgroup

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "GOVERNANCE_GROUP" ] | Type of object being referenced. | [optional] 
**Id** | **String** | Management workgroup ID. | [optional] 
**Name** | **String** | Management workgroup's human-readable display name. | [optional] 

## Examples

- Prepare the resource
```powershell
$SourceManagementWorkgroup = Initialize-SourceManagementWorkgroup  -Type GOVERNANCE_GROUP `
 -Id 2c91808568c529c60168cca6f90c2222 `
 -Name My Management Workgroup
```

- Convert the resource to JSON
```powershell
$SourceManagementWorkgroup | ConvertTo-JSON
```


[[Back to top]](#) 

