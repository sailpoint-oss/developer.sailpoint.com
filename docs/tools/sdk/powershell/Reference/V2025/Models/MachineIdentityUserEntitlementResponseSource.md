---
id: v2025-machine-identity-user-entitlement-response-source
title: MachineIdentityUserEntitlementResponseSource
pagination_label: MachineIdentityUserEntitlementResponseSource
sidebar_label: MachineIdentityUserEntitlementResponseSource
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'MachineIdentityUserEntitlementResponseSource', 'V2025MachineIdentityUserEntitlementResponseSource'] 
slug: /tools/sdk/powershell/v2025/models/machine-identity-user-entitlement-response-source
tags: ['SDK', 'Software Development Kit', 'MachineIdentityUserEntitlementResponseSource', 'V2025MachineIdentityUserEntitlementResponseSource']
---


# MachineIdentityUserEntitlementResponseSource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | [**DtoType**](dto-type) |  | [optional] 
**Id** | **String** | ID of the object to which this reference applies | [optional] 
**Name** | **String** | Human-readable display name of the object to which this reference applies | [optional] 

## Examples

- Prepare the resource
```powershell
$MachineIdentityUserEntitlementResponseSource = Initialize-V2025MachineIdentityUserEntitlementResponseSource  -Type null `
 -Id 2c91808568c529c60168cca6f90c1313 `
 -Name William Wilson
```

- Convert the resource to JSON
```powershell
$MachineIdentityUserEntitlementResponseSource | ConvertTo-JSON
```


[[Back to top]](#) 

