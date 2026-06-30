---
id: entitlementprivilegelevel
title: Entitlementprivilegelevel
pagination_label: Entitlementprivilegelevel
sidebar_label: Entitlementprivilegelevel
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Entitlementprivilegelevel', 'Entitlementprivilegelevel'] 
slug: /tools/sdk/powershell/entitlements/models/entitlementprivilegelevel
tags: ['SDK', 'Software Development Kit', 'Entitlementprivilegelevel', 'Entitlementprivilegelevel']
---


# Entitlementprivilegelevel

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
$Entitlementprivilegelevel = Initialize-Entitlementprivilegelevel  -Direct HIGH `
 -SetBy SAILPOINT_MIGRATION `
 -SetByType OVERRIDE `
 -Inherited null `
 -Effective HIGH
```

- Convert the resource to JSON
```powershell
$Entitlementprivilegelevel | ConvertTo-JSON
```


[[Back to top]](#) 

