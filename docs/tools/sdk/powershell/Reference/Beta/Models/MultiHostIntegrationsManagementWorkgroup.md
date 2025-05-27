---
id: beta-multi-host-integrations-management-workgroup
title: MultiHostIntegrationsManagementWorkgroup
pagination_label: MultiHostIntegrationsManagementWorkgroup
sidebar_label: MultiHostIntegrationsManagementWorkgroup
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'MultiHostIntegrationsManagementWorkgroup', 'BetaMultiHostIntegrationsManagementWorkgroup'] 
slug: /tools/sdk/powershell/beta/models/multi-host-integrations-management-workgroup
tags: ['SDK', 'Software Development Kit', 'MultiHostIntegrationsManagementWorkgroup', 'BetaMultiHostIntegrationsManagementWorkgroup']
---


# MultiHostIntegrationsManagementWorkgroup

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "GOVERNANCE_GROUP" ] | Type of object being referenced. | [optional] 
**Id** | **String** | Management workgroup ID. | [optional] 
**Name** | **String** | Management workgroup's human-readable display name. | [optional] 

## Examples

- Prepare the resource
```powershell
$MultiHostIntegrationsManagementWorkgroup = Initialize-BetaMultiHostIntegrationsManagementWorkgroup  -Type GOVERNANCE_GROUP `
 -Id 2c91808568c529c60168cca6f90c2222 `
 -Name My Management Workgroup
```

- Convert the resource to JSON
```powershell
$MultiHostIntegrationsManagementWorkgroup | ConvertTo-JSON
```


[[Back to top]](#) 

