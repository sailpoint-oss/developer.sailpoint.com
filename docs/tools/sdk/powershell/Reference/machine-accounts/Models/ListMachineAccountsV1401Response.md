---
id: list-machine-accounts-v1401-response
title: ListMachineAccountsV1401Response
pagination_label: ListMachineAccountsV1401Response
sidebar_label: ListMachineAccountsV1401Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ListMachineAccountsV1401Response', 'ListMachineAccountsV1401Response'] 
slug: /tools/sdk/powershell/machineaccounts/models/list-machine-accounts-v1401-response
tags: ['SDK', 'Software Development Kit', 'ListMachineAccountsV1401Response', 'ListMachineAccountsV1401Response']
---


# ListMachineAccountsV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarError** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$ListMachineAccountsV1401Response = Initialize-ListMachineAccountsV1401Response  -VarError JWT validation failed: JWT is expired
```

- Convert the resource to JSON
```powershell
$ListMachineAccountsV1401Response | ConvertTo-JSON
```


[[Back to top]](#) 

