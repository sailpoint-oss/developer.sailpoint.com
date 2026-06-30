---
id: get-classify-machine-account-from-source-status-v1401-response
title: GetClassifyMachineAccountFromSourceStatusV1401Response
pagination_label: GetClassifyMachineAccountFromSourceStatusV1401Response
sidebar_label: GetClassifyMachineAccountFromSourceStatusV1401Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'GetClassifyMachineAccountFromSourceStatusV1401Response', 'GetClassifyMachineAccountFromSourceStatusV1401Response'] 
slug: /tools/sdk/powershell/classifysource/models/get-classify-machine-account-from-source-status-v1401-response
tags: ['SDK', 'Software Development Kit', 'GetClassifyMachineAccountFromSourceStatusV1401Response', 'GetClassifyMachineAccountFromSourceStatusV1401Response']
---


# GetClassifyMachineAccountFromSourceStatusV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarError** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$GetClassifyMachineAccountFromSourceStatusV1401Response = Initialize-GetClassifyMachineAccountFromSourceStatusV1401Response  -VarError JWT validation failed: JWT is expired
```

- Convert the resource to JSON
```powershell
$GetClassifyMachineAccountFromSourceStatusV1401Response | ConvertTo-JSON
```


[[Back to top]](#) 

