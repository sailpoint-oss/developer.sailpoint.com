---
id: list-machine-account-mappings-v1401-response
title: ListMachineAccountMappingsV1401Response
pagination_label: ListMachineAccountMappingsV1401Response
sidebar_label: ListMachineAccountMappingsV1401Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ListMachineAccountMappingsV1401Response', 'ListMachineAccountMappingsV1401Response'] 
slug: /tools/sdk/powershell/machineaccountmappings/models/list-machine-account-mappings-v1401-response
tags: ['SDK', 'Software Development Kit', 'ListMachineAccountMappingsV1401Response', 'ListMachineAccountMappingsV1401Response']
---


# ListMachineAccountMappingsV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarError** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$ListMachineAccountMappingsV1401Response = Initialize-ListMachineAccountMappingsV1401Response  -VarError JWT validation failed: JWT is expired
```

- Convert the resource to JSON
```powershell
$ListMachineAccountMappingsV1401Response | ConvertTo-JSON
```


[[Back to top]](#) 

