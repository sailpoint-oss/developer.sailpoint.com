---
id: send-classify-machine-account-v1200-response
title: SendClassifyMachineAccountV1200Response
pagination_label: SendClassifyMachineAccountV1200Response
sidebar_label: SendClassifyMachineAccountV1200Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SendClassifyMachineAccountV1200Response', 'SendClassifyMachineAccountV1200Response'] 
slug: /tools/sdk/powershell/machineaccountclassify/models/send-classify-machine-account-v1200-response
tags: ['SDK', 'Software Development Kit', 'SendClassifyMachineAccountV1200Response', 'SendClassifyMachineAccountV1200Response']
---


# SendClassifyMachineAccountV1200Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IsMachine** | **Boolean** | Indicates if account is classified as machine | [optional] [default to $false]

## Examples

- Prepare the resource
```powershell
$SendClassifyMachineAccountV1200Response = Initialize-SendClassifyMachineAccountV1200Response  -IsMachine true
```

- Convert the resource to JSON
```powershell
$SendClassifyMachineAccountV1200Response | ConvertTo-JSON
```


[[Back to top]](#) 

