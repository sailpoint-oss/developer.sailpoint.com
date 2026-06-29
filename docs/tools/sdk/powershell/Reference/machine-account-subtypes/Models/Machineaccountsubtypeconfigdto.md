---
id: machineaccountsubtypeconfigdto
title: Machineaccountsubtypeconfigdto
pagination_label: Machineaccountsubtypeconfigdto
sidebar_label: Machineaccountsubtypeconfigdto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Machineaccountsubtypeconfigdto', 'Machineaccountsubtypeconfigdto'] 
slug: /tools/sdk/powershell/machineaccountsubtypes/models/machineaccountsubtypeconfigdto
tags: ['SDK', 'Software Development Kit', 'Machineaccountsubtypeconfigdto', 'Machineaccountsubtypeconfigdto']
---


# Machineaccountsubtypeconfigdto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SubtypeId** | **String** | Unique identifier representing the specific subtype of the machine account, used to distinguish between different machine account categories. | [optional] 
**MachineAccountCreate** | [**MachineaccountsubtypeconfigdtoMachineAccountCreate**](machineaccountsubtypeconfigdto-machine-account-create) |  | [optional] 
**MachineAccountDelete** | [**MachineaccountsubtypeconfigdtoMachineAccountDelete**](machineaccountsubtypeconfigdto-machine-account-delete) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Machineaccountsubtypeconfigdto = Initialize-Machineaccountsubtypeconfigdto  -SubtypeId 1419fc28-a8ed-4a07-9f5c-0cb5dfad6311 `
 -MachineAccountCreate null `
 -MachineAccountDelete null
```

- Convert the resource to JSON
```powershell
$Machineaccountsubtypeconfigdto | ConvertTo-JSON
```


[[Back to top]](#) 

