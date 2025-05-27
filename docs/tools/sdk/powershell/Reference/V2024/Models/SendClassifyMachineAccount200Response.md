---
id: v2024-send-classify-machine-account200-response
title: SendClassifyMachineAccount200Response
pagination_label: SendClassifyMachineAccount200Response
sidebar_label: SendClassifyMachineAccount200Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SendClassifyMachineAccount200Response', 'V2024SendClassifyMachineAccount200Response'] 
slug: /tools/sdk/powershell/v2024/models/send-classify-machine-account200-response
tags: ['SDK', 'Software Development Kit', 'SendClassifyMachineAccount200Response', 'V2024SendClassifyMachineAccount200Response']
---


# SendClassifyMachineAccount200Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IsMachine** | **Boolean** | Indicates if account is classified as machine | [optional] [default to $false]

## Examples

- Prepare the resource
```powershell
$SendClassifyMachineAccount200Response = Initialize-V2024SendClassifyMachineAccount200Response  -IsMachine true
```

- Convert the resource to JSON
```powershell
$SendClassifyMachineAccount200Response | ConvertTo-JSON
```


[[Back to top]](#) 

