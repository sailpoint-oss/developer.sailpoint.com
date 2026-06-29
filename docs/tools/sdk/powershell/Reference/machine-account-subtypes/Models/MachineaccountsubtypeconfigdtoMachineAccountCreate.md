---
id: machineaccountsubtypeconfigdto-machine-account-create
title: MachineaccountsubtypeconfigdtoMachineAccountCreate
pagination_label: MachineaccountsubtypeconfigdtoMachineAccountCreate
sidebar_label: MachineaccountsubtypeconfigdtoMachineAccountCreate
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'MachineaccountsubtypeconfigdtoMachineAccountCreate', 'MachineaccountsubtypeconfigdtoMachineAccountCreate'] 
slug: /tools/sdk/powershell/machineaccountsubtypes/models/machineaccountsubtypeconfigdto-machine-account-create
tags: ['SDK', 'Software Development Kit', 'MachineaccountsubtypeconfigdtoMachineAccountCreate', 'MachineaccountsubtypeconfigdtoMachineAccountCreate']
---


# MachineaccountsubtypeconfigdtoMachineAccountCreate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccountCreateEnabled** | **Boolean** | Specifies if the creation of machine accounts is allowed for this subtype. | [optional] [default to $false]
**ApprovalRequired** | **Boolean** | Specifies if approval is required for machine account creation requests for this subtype. | [optional] [default to $false]
**FormId** | **String** | Id of the form linked to subtype. | [optional] 
**EntitlementId** | **String** | Id of the system created entitlement entitlement upon enabling account creation for this subtype. | [optional] 
**PasswordSetting** |  **Enum** [  "DO_NOT_SET_PASSWORD",    "SET_TO_EXISTING_ATTRIBUTE",    "SET_TO_NEW_ATTRIBUTE" ] | This is required before enabling the account creation to true. Default value will be null. | [optional] 
**PasswordAttribute** | **String** | Name of the account attribute from the source's schema or new custom attribute to use when password settings is enabled. | [optional] 
**ApprovalConfig** | [**Machinesubtypeapprovalconfig**](machinesubtypeapprovalconfig) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$MachineaccountsubtypeconfigdtoMachineAccountCreate = Initialize-MachineaccountsubtypeconfigdtoMachineAccountCreate  -AccountCreateEnabled true `
 -ApprovalRequired true `
 -FormId 4f1bb61b-a0ab-4c0a-b9fb-20f44407b75a `
 -EntitlementId 858d2151-ff19-464b-ae0d-6938b3af2baf `
 -PasswordSetting SET_TO_EXISTING_ATTRIBUTE `
 -PasswordAttribute accountName `
 -ApprovalConfig null
```

- Convert the resource to JSON
```powershell
$MachineaccountsubtypeconfigdtoMachineAccountCreate | ConvertTo-JSON
```


[[Back to top]](#) 

