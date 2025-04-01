---
id: v2025-role-mining-entitlement-ref
title: RoleMiningEntitlementRef
pagination_label: RoleMiningEntitlementRef
sidebar_label: RoleMiningEntitlementRef
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'RoleMiningEntitlementRef', 'V2025RoleMiningEntitlementRef'] 
slug: /tools/sdk/powershell/v2025/models/role-mining-entitlement-ref
tags: ['SDK', 'Software Development Kit', 'RoleMiningEntitlementRef', 'V2025RoleMiningEntitlementRef']
---


# RoleMiningEntitlementRef

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Id of the entitlement | [optional] 
**Name** | **String** | Name of the entitlement | [optional] 
**Description** | **String** | Description forthe entitlement | [optional] 
**Attribute** | **String** | The entitlement attribute | [optional] 

## Examples

- Prepare the resource
```powershell
$RoleMiningEntitlementRef = Initialize-PSSailpoint.V2025RoleMiningEntitlementRef  -Id 2c91808a7e95e6e0017e96e2086206c8 `
 -Name App.entitlement.1 `
 -Description Entitlement 1 `
 -Attribute groups
```

- Convert the resource to JSON
```powershell
$RoleMiningEntitlementRef | ConvertTo-JSON
```


[[Back to top]](#) 

