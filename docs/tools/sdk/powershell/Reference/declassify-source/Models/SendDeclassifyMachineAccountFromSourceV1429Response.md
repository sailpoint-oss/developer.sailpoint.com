---
id: send-declassify-machine-account-from-source-v1429-response
title: SendDeclassifyMachineAccountFromSourceV1429Response
pagination_label: SendDeclassifyMachineAccountFromSourceV1429Response
sidebar_label: SendDeclassifyMachineAccountFromSourceV1429Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SendDeclassifyMachineAccountFromSourceV1429Response', 'SendDeclassifyMachineAccountFromSourceV1429Response'] 
slug: /tools/sdk/powershell/declassifysource/models/send-declassify-machine-account-from-source-v1429-response
tags: ['SDK', 'Software Development Kit', 'SendDeclassifyMachineAccountFromSourceV1429Response', 'SendDeclassifyMachineAccountFromSourceV1429Response']
---


# SendDeclassifyMachineAccountFromSourceV1429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$SendDeclassifyMachineAccountFromSourceV1429Response = Initialize-SendDeclassifyMachineAccountFromSourceV1429Response  -Message  Rate Limit Exceeded 
```

- Convert the resource to JSON
```powershell
$SendDeclassifyMachineAccountFromSourceV1429Response | ConvertTo-JSON
```


[[Back to top]](#) 

