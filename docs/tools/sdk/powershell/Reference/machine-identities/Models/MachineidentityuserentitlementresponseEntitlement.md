---
id: machineidentityuserentitlementresponse-entitlement
title: MachineidentityuserentitlementresponseEntitlement
pagination_label: MachineidentityuserentitlementresponseEntitlement
sidebar_label: MachineidentityuserentitlementresponseEntitlement
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'MachineidentityuserentitlementresponseEntitlement', 'MachineidentityuserentitlementresponseEntitlement'] 
slug: /tools/sdk/powershell/machineidentities/models/machineidentityuserentitlementresponse-entitlement
tags: ['SDK', 'Software Development Kit', 'MachineidentityuserentitlementresponseEntitlement', 'MachineidentityuserentitlementresponseEntitlement']
---


# MachineidentityuserentitlementresponseEntitlement

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | [**Dtotype**](dtotype) |  | [optional] 
**Id** | **String** | ID of the object to which this reference applies | [optional] 
**Name** | **String** | Human-readable display name of the object to which this reference applies | [optional] 

## Examples

- Prepare the resource
```powershell
$MachineidentityuserentitlementresponseEntitlement = Initialize-MachineidentityuserentitlementresponseEntitlement  -Type null `
 -Id 2c91808568c529c60168cca6f90c1313 `
 -Name William Wilson
```

- Convert the resource to JSON
```powershell
$MachineidentityuserentitlementresponseEntitlement | ConvertTo-JSON
```


[[Back to top]](#) 

