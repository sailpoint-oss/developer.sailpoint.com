---
id: v2024-machine-classification-config
title: MachineClassificationConfig
pagination_label: MachineClassificationConfig
sidebar_label: MachineClassificationConfig
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'MachineClassificationConfig', 'V2024MachineClassificationConfig'] 
slug: /tools/sdk/powershell/v2024/models/machine-classification-config
tags: ['SDK', 'Software Development Kit', 'MachineClassificationConfig', 'V2024MachineClassificationConfig']
---


# MachineClassificationConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Enabled** | **Boolean** | Indicates if the Classification is enabled for a Source | [optional] [default to $false]
**ClassificationMethod** |  **Enum** [  "SOURCE" ] | Classification Method | [optional] 
**Criteria** | **String** | A classification criteria object | [optional] 
**Created** | **System.DateTime** | Time when the config was created | [optional] 
**Modified** | **System.DateTime** | Time when the config was last updated | [optional] 

## Examples

- Prepare the resource
```powershell
$MachineClassificationConfig = Initialize-PSSailpoint.V2024MachineClassificationConfig  -Enabled true `
 -ClassificationMethod SOURCE `
 -Criteria null `
 -Created 2017-07-11T18:45:37.098Z `
 -Modified 2018-06-25T20:22:28.104Z
```

- Convert the resource to JSON
```powershell
$MachineClassificationConfig | ConvertTo-JSON
```


[[Back to top]](#) 

