---
id: send-classify-machine-account-v1429-response
title: SendClassifyMachineAccountV1429Response
pagination_label: SendClassifyMachineAccountV1429Response
sidebar_label: SendClassifyMachineAccountV1429Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SendClassifyMachineAccountV1429Response', 'SendClassifyMachineAccountV1429Response'] 
slug: /tools/sdk/powershell/machineaccountclassify/models/send-classify-machine-account-v1429-response
tags: ['SDK', 'Software Development Kit', 'SendClassifyMachineAccountV1429Response', 'SendClassifyMachineAccountV1429Response']
---


# SendClassifyMachineAccountV1429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$SendClassifyMachineAccountV1429Response = Initialize-SendClassifyMachineAccountV1429Response  -Message  Rate Limit Exceeded 
```

- Convert the resource to JSON
```powershell
$SendClassifyMachineAccountV1429Response | ConvertTo-JSON
```


[[Back to top]](#) 

