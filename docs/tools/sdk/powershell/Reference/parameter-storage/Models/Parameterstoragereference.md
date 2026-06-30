---
id: parameterstoragereference
title: Parameterstoragereference
pagination_label: Parameterstoragereference
sidebar_label: Parameterstoragereference
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Parameterstoragereference', 'Parameterstoragereference'] 
slug: /tools/sdk/powershell/parameterstorage/models/parameterstoragereference
tags: ['SDK', 'Software Development Kit', 'Parameterstoragereference', 'Parameterstoragereference']
---


# Parameterstoragereference

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
$Parameterstoragereference = Initialize-Parameterstoragereference  -Id 4018c3ec-2714-42b5-92e8-232b17333b52 `
 -ConsumerId sp-workflow-config `
 -ParameterId 58de858b-83d9-4563-9e15-7393594c684a `
 -Name Workflow 6d3d0677-b6fb-470c-b931-89195bedcebe `
 -UsageHint {"workflowId": "6d3d0677-b6fb-470c-b931-89195bedcebe"}
```

- Convert the resource to JSON
```powershell
$Parameterstoragereference | ConvertTo-JSON
```


[[Back to top]](#) 

