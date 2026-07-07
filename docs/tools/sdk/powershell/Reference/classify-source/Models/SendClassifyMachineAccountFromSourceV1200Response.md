---
id: send-classify-machine-account-from-source-v1200-response
title: SendClassifyMachineAccountFromSourceV1200Response
pagination_label: SendClassifyMachineAccountFromSourceV1200Response
sidebar_label: SendClassifyMachineAccountFromSourceV1200Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SendClassifyMachineAccountFromSourceV1200Response', 'SendClassifyMachineAccountFromSourceV1200Response'] 
slug: /tools/sdk/powershell/classifysource/models/send-classify-machine-account-from-source-v1200-response
tags: ['SDK', 'Software Development Kit', 'SendClassifyMachineAccountFromSourceV1200Response', 'SendClassifyMachineAccountFromSourceV1200Response']
---


# SendClassifyMachineAccountFromSourceV1200Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccountsSubmittedForProcessing** | **Int32** | Returns the number of all the accounts from source submitted for processing. | [optional] 

## Examples

- Prepare the resource
```powershell
$SendClassifyMachineAccountFromSourceV1200Response = Initialize-SendClassifyMachineAccountFromSourceV1200Response  -AccountsSubmittedForProcessing 100
```

- Convert the resource to JSON
```powershell
$SendClassifyMachineAccountFromSourceV1200Response | ConvertTo-JSON
```


[[Back to top]](#) 

