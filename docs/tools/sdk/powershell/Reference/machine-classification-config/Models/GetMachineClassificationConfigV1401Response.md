---
id: get-machine-classification-config-v1401-response
title: GetMachineClassificationConfigV1401Response
pagination_label: GetMachineClassificationConfigV1401Response
sidebar_label: GetMachineClassificationConfigV1401Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'GetMachineClassificationConfigV1401Response', 'GetMachineClassificationConfigV1401Response'] 
slug: /tools/sdk/powershell/machineclassificationconfig/models/get-machine-classification-config-v1401-response
tags: ['SDK', 'Software Development Kit', 'GetMachineClassificationConfigV1401Response', 'GetMachineClassificationConfigV1401Response']
---


# GetMachineClassificationConfigV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarError** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$GetMachineClassificationConfigV1401Response = Initialize-GetMachineClassificationConfigV1401Response  -VarError JWT validation failed: JWT is expired
```

- Convert the resource to JSON
```powershell
$GetMachineClassificationConfigV1401Response | ConvertTo-JSON
```


[[Back to top]](#) 

