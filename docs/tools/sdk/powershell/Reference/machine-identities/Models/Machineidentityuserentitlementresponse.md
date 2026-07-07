---
id: machineidentityuserentitlementresponse
title: Machineidentityuserentitlementresponse
pagination_label: Machineidentityuserentitlementresponse
sidebar_label: Machineidentityuserentitlementresponse
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Machineidentityuserentitlementresponse', 'Machineidentityuserentitlementresponse'] 
slug: /tools/sdk/powershell/machineidentities/models/machineidentityuserentitlementresponse
tags: ['SDK', 'Software Development Kit', 'Machineidentityuserentitlementresponse', 'Machineidentityuserentitlementresponse']
---


# Machineidentityuserentitlementresponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | System-generated unique ID of the Object | [optional] 
**MachineIdentityId** | **String** | System-generated unique ID of the Machine Identity | [optional] 
**Source** | [**MachineidentityuserentitlementresponseSource**](machineidentityuserentitlementresponse-source) |  | [optional] 
**Entitlement** | [**MachineidentityuserentitlementresponseEntitlement**](machineidentityuserentitlementresponse-entitlement) |  | [optional] 
**Created** | **System.DateTime** | Creation date of the Object | [optional] [readonly] 

## Examples

- Prepare the resource
```powershell
$Machineidentityuserentitlementresponse = Initialize-Machineidentityuserentitlementresponse  -Id 8886e5e3-63d0-462f-a195-d98da885b8dc `
 -MachineIdentityId 8886e5e3-63d0-462f-a195-d98da885b8dc `
 -Source null `
 -Entitlement null `
 -Created 2015-05-28T14:07:17Z
```

- Convert the resource to JSON
```powershell
$Machineidentityuserentitlementresponse | ConvertTo-JSON
```


[[Back to top]](#) 

