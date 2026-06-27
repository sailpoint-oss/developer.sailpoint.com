---
id: entitlementv2-privilege-level
title: Entitlementv2PrivilegeLevel
pagination_label: Entitlementv2PrivilegeLevel
sidebar_label: Entitlementv2PrivilegeLevel
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Entitlementv2PrivilegeLevel', 'Entitlementv2PrivilegeLevel'] 
slug: /tools/sdk/powershell/entitlements/models/entitlementv2-privilege-level
tags: ['SDK', 'Software Development Kit', 'Entitlementv2PrivilegeLevel', 'Entitlementv2PrivilegeLevel']
---


# Entitlementv2PrivilegeLevel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Direct** |  **Enum** [  "HIGH",    "LOW",    "MEDIUM",    "NONE" ] | Direct privilege level assigned to the entitlement | [optional] 
**SetBy** | **String** | User or process that set the privilege level | [optional] 
**SetByType** |  **Enum** [  "OVERRIDE",    "CUSTOM_CRITERIA",    "CONNECTOR_CRITERIA",    "SINGLE_LEVEL_CRITERIA" ] | Method by which the privilege level was set | [optional] 
**Inherited** |  **Enum** [  "HIGH",    "LOW",    "MEDIUM",    "NONE" ] | Inherited privilege level on the entitlement, if any | [optional] 
**Effective** |  **Enum** [  "HIGH",    "LOW",    "MEDIUM",    "NONE" ] | Effective privilege level assigned to the entitlement | [optional] 

## Examples

- Prepare the resource
```powershell
$Entitlementv2PrivilegeLevel = Initialize-Entitlementv2PrivilegeLevel  -Direct HIGH `
 -SetBy SAILPOINT_MIGRATION `
 -SetByType OVERRIDE `
 -Inherited null `
 -Effective HIGH
```

- Convert the resource to JSON
```powershell
$Entitlementv2PrivilegeLevel | ConvertTo-JSON
```


[[Back to top]](#) 

