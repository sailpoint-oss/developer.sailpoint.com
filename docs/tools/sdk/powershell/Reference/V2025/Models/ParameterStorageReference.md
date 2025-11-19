---
id: v2025-parameter-storage-reference
title: ParameterStorageReference
pagination_label: ParameterStorageReference
sidebar_label: ParameterStorageReference
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ParameterStorageReference', 'V2025ParameterStorageReference'] 
slug: /tools/sdk/powershell/v2025/models/parameter-storage-reference
tags: ['SDK', 'Software Development Kit', 'ParameterStorageReference', 'V2025ParameterStorageReference']
---


# ParameterStorageReference

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The ID of the reference | [required]
**ConsumerId** | **String** | The ID of the consumer holding the reference | [required]
**ParameterId** | **String** | The ID of the parameter that the reference is pointing to. | [required]
**Name** | **String** | The human-readable name of the reference | [required]
**UsageHint** | **String** | The hint string used to validate the reference | [optional] 

## Examples

- Prepare the resource
```powershell
$ParameterStorageReference = Initialize-V2025ParameterStorageReference  -Id 4018c3ec-2714-42b5-92e8-232b17333b52 `
 -ConsumerId sp-workflow-config `
 -ParameterId 58de858b-83d9-4563-9e15-7393594c684a `
 -Name Workflow 6d3d0677-b6fb-470c-b931-89195bedcebe `
 -UsageHint {"workflowId": "6d3d0677-b6fb-470c-b931-89195bedcebe"}
```

- Convert the resource to JSON
```powershell
$ParameterStorageReference | ConvertTo-JSON
```


[[Back to top]](#) 

