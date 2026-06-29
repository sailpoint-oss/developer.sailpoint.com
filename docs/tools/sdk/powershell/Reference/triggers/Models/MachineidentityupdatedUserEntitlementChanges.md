---
id: machineidentityupdated-user-entitlement-changes
title: MachineidentityupdatedUserEntitlementChanges
pagination_label: MachineidentityupdatedUserEntitlementChanges
sidebar_label: MachineidentityupdatedUserEntitlementChanges
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'MachineidentityupdatedUserEntitlementChanges', 'MachineidentityupdatedUserEntitlementChanges'] 
slug: /tools/sdk/powershell/triggers/models/machineidentityupdated-user-entitlement-changes
tags: ['SDK', 'Software Development Kit', 'MachineidentityupdatedUserEntitlementChanges', 'MachineidentityupdatedUserEntitlementChanges']
---


# MachineidentityupdatedUserEntitlementChanges

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AttributeName** | **String** | Name of the attribute that changed. | [optional] 
**Added** | [**[]Machineidentityuserentitlements**](machineidentityuserentitlements) | User entitlements that were added. | [optional] 
**Removed** | [**[]Machineidentityuserentitlements**](machineidentityuserentitlements) | User entitlements that were removed. | [optional] 

## Examples

- Prepare the resource
```powershell
$MachineidentityupdatedUserEntitlementChanges = Initialize-MachineidentityupdatedUserEntitlementChanges  -AttributeName userEntitlements `
 -Added null `
 -Removed null
```

- Convert the resource to JSON
```powershell
$MachineidentityupdatedUserEntitlementChanges | ConvertTo-JSON
```


[[Back to top]](#) 

