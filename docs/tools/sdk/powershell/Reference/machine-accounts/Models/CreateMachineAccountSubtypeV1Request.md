---
id: create-machine-account-subtype-v1-request
title: CreateMachineAccountSubtypeV1Request
pagination_label: CreateMachineAccountSubtypeV1Request
sidebar_label: CreateMachineAccountSubtypeV1Request
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'CreateMachineAccountSubtypeV1Request', 'CreateMachineAccountSubtypeV1Request'] 
slug: /tools/sdk/powershell/machineaccounts/models/create-machine-account-subtype-v1-request
tags: ['SDK', 'Software Development Kit', 'CreateMachineAccountSubtypeV1Request', 'CreateMachineAccountSubtypeV1Request']
---


# CreateMachineAccountSubtypeV1Request

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TechnicalName** | **String** | Technical name of the subtype. | [required]
**DisplayName** | **String** | Display name of the subtype. | [required]
**Description** | **String** | Description of the subtype. | [required]
**Type** | **String** | Type of the subtype. | [optional] 

## Examples

- Prepare the resource
```powershell
$CreateMachineAccountSubtypeV1Request = Initialize-CreateMachineAccountSubtypeV1Request  -TechnicalName foo `
 -DisplayName Mr Foo `
 -Description fighters `
 -Type MACHINE
```

- Convert the resource to JSON
```powershell
$CreateMachineAccountSubtypeV1Request | ConvertTo-JSON
```


[[Back to top]](#) 

