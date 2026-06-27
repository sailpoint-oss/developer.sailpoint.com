---
id: multihostintegrations-management-workgroup
title: MultihostintegrationsManagementWorkgroup
pagination_label: MultihostintegrationsManagementWorkgroup
sidebar_label: MultihostintegrationsManagementWorkgroup
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'MultihostintegrationsManagementWorkgroup', 'MultihostintegrationsManagementWorkgroup'] 
slug: /tools/sdk/powershell/multihostintegration/models/multihostintegrations-management-workgroup
tags: ['SDK', 'Software Development Kit', 'MultihostintegrationsManagementWorkgroup', 'MultihostintegrationsManagementWorkgroup']
---


# MultihostintegrationsManagementWorkgroup

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "GOVERNANCE_GROUP" ] | Type of object being referenced. | [optional] 
**Id** | **String** | Management workgroup ID. | [optional] 
**Name** | **String** | Management workgroup's human-readable display name. | [optional] 

## Examples

- Prepare the resource
```powershell
$MultihostintegrationsManagementWorkgroup = Initialize-MultihostintegrationsManagementWorkgroup  -Type GOVERNANCE_GROUP `
 -Id 2c91808568c529c60168cca6f90c2222 `
 -Name My Management Workgroup
```

- Convert the resource to JSON
```powershell
$MultihostintegrationsManagementWorkgroup | ConvertTo-JSON
```


[[Back to top]](#) 

