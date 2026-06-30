---
id: list-machine-account-mappings-v1429-response
title: ListMachineAccountMappingsV1429Response
pagination_label: ListMachineAccountMappingsV1429Response
sidebar_label: ListMachineAccountMappingsV1429Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ListMachineAccountMappingsV1429Response', 'ListMachineAccountMappingsV1429Response'] 
slug: /tools/sdk/powershell/machineaccountmappings/models/list-machine-account-mappings-v1429-response
tags: ['SDK', 'Software Development Kit', 'ListMachineAccountMappingsV1429Response', 'ListMachineAccountMappingsV1429Response']
---


# ListMachineAccountMappingsV1429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$ListMachineAccountMappingsV1429Response = Initialize-ListMachineAccountMappingsV1429Response  -Message  Rate Limit Exceeded 
```

- Convert the resource to JSON
```powershell
$ListMachineAccountMappingsV1429Response | ConvertTo-JSON
```


[[Back to top]](#) 

