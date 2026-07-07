---
id: list-machine-identities-v1401-response
title: ListMachineIdentitiesV1401Response
pagination_label: ListMachineIdentitiesV1401Response
sidebar_label: ListMachineIdentitiesV1401Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ListMachineIdentitiesV1401Response', 'ListMachineIdentitiesV1401Response'] 
slug: /tools/sdk/powershell/machineidentities/models/list-machine-identities-v1401-response
tags: ['SDK', 'Software Development Kit', 'ListMachineIdentitiesV1401Response', 'ListMachineIdentitiesV1401Response']
---


# ListMachineIdentitiesV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarError** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$ListMachineIdentitiesV1401Response = Initialize-ListMachineIdentitiesV1401Response  -VarError JWT validation failed: JWT is expired
```

- Convert the resource to JSON
```powershell
$ListMachineIdentitiesV1401Response | ConvertTo-JSON
```


[[Back to top]](#) 

