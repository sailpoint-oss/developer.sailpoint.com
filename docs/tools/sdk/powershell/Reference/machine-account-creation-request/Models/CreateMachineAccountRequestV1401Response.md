---
id: create-machine-account-request-v1401-response
title: CreateMachineAccountRequestV1401Response
pagination_label: CreateMachineAccountRequestV1401Response
sidebar_label: CreateMachineAccountRequestV1401Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'CreateMachineAccountRequestV1401Response', 'CreateMachineAccountRequestV1401Response'] 
slug: /tools/sdk/powershell/machineaccountcreationrequest/models/create-machine-account-request-v1401-response
tags: ['SDK', 'Software Development Kit', 'CreateMachineAccountRequestV1401Response', 'CreateMachineAccountRequestV1401Response']
---


# CreateMachineAccountRequestV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarError** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$CreateMachineAccountRequestV1401Response = Initialize-CreateMachineAccountRequestV1401Response  -VarError JWT validation failed: JWT is expired
```

- Convert the resource to JSON
```powershell
$CreateMachineAccountRequestV1401Response | ConvertTo-JSON
```


[[Back to top]](#) 

