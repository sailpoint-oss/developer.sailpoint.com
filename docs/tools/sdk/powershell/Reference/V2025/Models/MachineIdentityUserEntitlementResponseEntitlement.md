---
id: v2025-machine-identity-user-entitlement-response-entitlement
title: MachineIdentityUserEntitlementResponseEntitlement
pagination_label: MachineIdentityUserEntitlementResponseEntitlement
sidebar_label: MachineIdentityUserEntitlementResponseEntitlement
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'MachineIdentityUserEntitlementResponseEntitlement', 'V2025MachineIdentityUserEntitlementResponseEntitlement'] 
slug: /tools/sdk/powershell/v2025/models/machine-identity-user-entitlement-response-entitlement
tags: ['SDK', 'Software Development Kit', 'MachineIdentityUserEntitlementResponseEntitlement', 'V2025MachineIdentityUserEntitlementResponseEntitlement']
---


# MachineIdentityUserEntitlementResponseEntitlement

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | [**DtoType**](dto-type) |  | [optional] 
**Id** | **String** | ID of the object to which this reference applies | [optional] 
**Name** | **String** | Human-readable display name of the object to which this reference applies | [optional] 

## Examples

- Prepare the resource
```powershell
$MachineIdentityUserEntitlementResponseEntitlement = Initialize-V2025MachineIdentityUserEntitlementResponseEntitlement  -Type null `
 -Id 2c91808568c529c60168cca6f90c1313 `
 -Name William Wilson
```

- Convert the resource to JSON
```powershell
$MachineIdentityUserEntitlementResponseEntitlement | ConvertTo-JSON
```


[[Back to top]](#) 

