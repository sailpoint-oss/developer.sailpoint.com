---
id: machineaccountsubtypeconfigdto-machine-account-delete
title: MachineaccountsubtypeconfigdtoMachineAccountDelete
pagination_label: MachineaccountsubtypeconfigdtoMachineAccountDelete
sidebar_label: MachineaccountsubtypeconfigdtoMachineAccountDelete
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'MachineaccountsubtypeconfigdtoMachineAccountDelete', 'MachineaccountsubtypeconfigdtoMachineAccountDelete'] 
slug: /tools/sdk/powershell/machineaccountsubtypes/models/machineaccountsubtypeconfigdto-machine-account-delete
tags: ['SDK', 'Software Development Kit', 'MachineaccountsubtypeconfigdtoMachineAccountDelete', 'MachineaccountsubtypeconfigdtoMachineAccountDelete']
---


# MachineaccountsubtypeconfigdtoMachineAccountDelete

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ApprovalRequired** | **Boolean** | Indicates whether approval is required for an account deletion request. | [optional] [default to $false]
**ApprovalConfig** | [**Machinesubtypeapprovalconfig**](machinesubtypeapprovalconfig) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$MachineaccountsubtypeconfigdtoMachineAccountDelete = Initialize-MachineaccountsubtypeconfigdtoMachineAccountDelete  -ApprovalRequired true `
 -ApprovalConfig null
```

- Convert the resource to JSON
```powershell
$MachineaccountsubtypeconfigdtoMachineAccountDelete | ConvertTo-JSON
```


[[Back to top]](#) 

