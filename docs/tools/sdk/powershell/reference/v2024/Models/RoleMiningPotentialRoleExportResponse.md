---
id: v2024-role-mining-potential-role-export-response
title: RoleMiningPotentialRoleExportResponse
pagination_label: RoleMiningPotentialRoleExportResponse
sidebar_label: RoleMiningPotentialRoleExportResponse
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'RoleMiningPotentialRoleExportResponse'] 
slug: /tools/sdk/powershell/v2024/models/role-mining-potential-role-export-response
tags: ['SDK', 'Software Development Kit', 'RoleMiningPotentialRoleExportResponse']
---


# RoleMiningPotentialRoleExportResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MinEntitlementPopularity** |  Pointer to **Int32** | The minimum popularity among identities in the role which an entitlement must have to be included in the report | [optional] 
**IncludeCommonAccess** |  Pointer to **Boolean** | If false, do not include entitlements that are highly popular among the entire orginization | [optional] 
**ExportId** |  Pointer to **String** | ID used to reference this export | [optional] 
**Status** |  Pointer to [**RoleMiningPotentialRoleExportState**](role-mining-potential-role-export-state) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$RoleMiningPotentialRoleExportResponse = Initialize-PSSailpoint.V2024RoleMiningPotentialRoleExportResponse  -MinEntitlementPopularity 0 `
 -IncludeCommonAccess true `
 -ExportId 0c6cdb76-1227-4aaf-af21-192dbdfbfa04 `
 -Status null
```

- Convert the resource to JSON
```powershell
$RoleMiningPotentialRoleExportResponse | ConvertTo-JSON
```


[[Back to top]](#) 

