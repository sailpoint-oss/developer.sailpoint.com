---
id: v2025-role-mining-potential-role-export-response
title: RoleMiningPotentialRoleExportResponse
pagination_label: RoleMiningPotentialRoleExportResponse
sidebar_label: RoleMiningPotentialRoleExportResponse
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'RoleMiningPotentialRoleExportResponse', 'V2025RoleMiningPotentialRoleExportResponse'] 
slug: /tools/sdk/powershell/v2025/models/role-mining-potential-role-export-response
tags: ['SDK', 'Software Development Kit', 'RoleMiningPotentialRoleExportResponse', 'V2025RoleMiningPotentialRoleExportResponse']
---


# RoleMiningPotentialRoleExportResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MinEntitlementPopularity** | **Int32** | The minimum popularity among identities in the role which an entitlement must have to be included in the report | [optional] 
**IncludeCommonAccess** | **Boolean** | If false, do not include entitlements that are highly popular among the entire orginization | [optional] 
**ExportId** | **String** | ID used to reference this export | [optional] 
**Status** | [**RoleMiningPotentialRoleExportState**](role-mining-potential-role-export-state) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$RoleMiningPotentialRoleExportResponse = Initialize-V2025RoleMiningPotentialRoleExportResponse  -MinEntitlementPopularity 0 `
 -IncludeCommonAccess true `
 -ExportId 0c6cdb76-1227-4aaf-af21-192dbdfbfa04 `
 -Status null
```

- Convert the resource to JSON
```powershell
$RoleMiningPotentialRoleExportResponse | ConvertTo-JSON
```


[[Back to top]](#) 

