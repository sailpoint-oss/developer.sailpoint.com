---
id: beta-multi-host-integrations-management-workgroup
title: MultiHostIntegrationsManagementWorkgroup
pagination_label: MultiHostIntegrationsManagementWorkgroup
sidebar_label: MultiHostIntegrationsManagementWorkgroup
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'MultiHostIntegrationsManagementWorkgroup'] 
slug: /tools/sdk/powershell/beta/models/multi-host-integrations-management-workgroup
tags: ['SDK', 'Software Development Kit', 'MultiHostIntegrationsManagementWorkgroup']
---


# MultiHostIntegrationsManagementWorkgroup

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  Pointer to  **Enum** [  "GOVERNANCE_GROUP" ] | Type of object being referenced. | [optional] 
**Id** |  Pointer to **String** | Management workgroup ID. | [optional] 
**Name** |  Pointer to **String** | Management workgroup's human-readable display name. | [optional] 

## Examples

- Prepare the resource
```powershell
$MultiHostIntegrationsManagementWorkgroup = Initialize-PSSailpoint.BetaMultiHostIntegrationsManagementWorkgroup  -Type GOVERNANCE_GROUP `
 -Id 2c91808568c529c60168cca6f90c2222 `
 -Name My Management Workgroup
```

- Convert the resource to JSON
```powershell
$MultiHostIntegrationsManagementWorkgroup | ConvertTo-JSON
```


[[Back to top]](#) 

