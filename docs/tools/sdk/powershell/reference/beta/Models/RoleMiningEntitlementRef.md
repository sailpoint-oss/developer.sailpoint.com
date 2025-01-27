---
id: beta-role-mining-entitlement-ref
title: RoleMiningEntitlementRef
pagination_label: RoleMiningEntitlementRef
sidebar_label: RoleMiningEntitlementRef
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'RoleMiningEntitlementRef'] 
slug: /tools/sdk/powershell/beta/models/role-mining-entitlement-ref
tags: ['SDK', 'Software Development Kit', 'RoleMiningEntitlementRef']
---


# RoleMiningEntitlementRef

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **String** | Id of the entitlement | [optional] 
**Name** |  Pointer to **String** | Name of the entitlement | [optional] 
**Description** |  Pointer to **String** | Description forthe entitlement | [optional] 
**Attribute** |  Pointer to **String** | The entitlement attribute | [optional] 

## Examples

- Prepare the resource
```powershell
$RoleMiningEntitlementRef = Initialize-PSSailpoint.BetaRoleMiningEntitlementRef  -Id 2c91808a7e95e6e0017e96e2086206c8 `
 -Name App.entitlement.1 `
 -Description Entitlement 1 `
 -Attribute groups
```

- Convert the resource to JSON
```powershell
$RoleMiningEntitlementRef | ConvertTo-JSON
```


[[Back to top]](#) 

