---
id: list-machine-identities-v1429-response
title: ListMachineIdentitiesV1429Response
pagination_label: ListMachineIdentitiesV1429Response
sidebar_label: ListMachineIdentitiesV1429Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ListMachineIdentitiesV1429Response', 'ListMachineIdentitiesV1429Response'] 
slug: /tools/sdk/powershell/machineidentities/models/list-machine-identities-v1429-response
tags: ['SDK', 'Software Development Kit', 'ListMachineIdentitiesV1429Response', 'ListMachineIdentitiesV1429Response']
---


# ListMachineIdentitiesV1429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$ListMachineIdentitiesV1429Response = Initialize-ListMachineIdentitiesV1429Response  -Message  Rate Limit Exceeded 
```

- Convert the resource to JSON
```powershell
$ListMachineIdentitiesV1429Response | ConvertTo-JSON
```


[[Back to top]](#) 

