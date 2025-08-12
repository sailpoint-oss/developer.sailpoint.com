---
id: v2025-send-classify-machine-account-from-source200-response
title: SendClassifyMachineAccountFromSource200Response
pagination_label: SendClassifyMachineAccountFromSource200Response
sidebar_label: SendClassifyMachineAccountFromSource200Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SendClassifyMachineAccountFromSource200Response', 'V2025SendClassifyMachineAccountFromSource200Response'] 
slug: /tools/sdk/powershell/v2025/models/send-classify-machine-account-from-source200-response
tags: ['SDK', 'Software Development Kit', 'SendClassifyMachineAccountFromSource200Response', 'V2025SendClassifyMachineAccountFromSource200Response']
---


# SendClassifyMachineAccountFromSource200Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccountsSubmittedForProcessing** | **Int32** | Returns the number of all the accounts from source submitted for processing. | [optional] 

## Examples

- Prepare the resource
```powershell
$SendClassifyMachineAccountFromSource200Response = Initialize-V2025SendClassifyMachineAccountFromSource200Response  -AccountsSubmittedForProcessing 100
```

- Convert the resource to JSON
```powershell
$SendClassifyMachineAccountFromSource200Response | ConvertTo-JSON
```


[[Back to top]](#) 

