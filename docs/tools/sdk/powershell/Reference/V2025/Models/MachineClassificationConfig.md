---
id: v2025-machine-classification-config
title: MachineClassificationConfig
pagination_label: MachineClassificationConfig
sidebar_label: MachineClassificationConfig
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'MachineClassificationConfig', 'V2025MachineClassificationConfig'] 
slug: /tools/sdk/powershell/v2025/models/machine-classification-config
tags: ['SDK', 'Software Development Kit', 'MachineClassificationConfig', 'V2025MachineClassificationConfig']
---


# MachineClassificationConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Enabled** | **Boolean** | Indicates whether Classification is enabled for a Source | [optional] [default to $false]
**ClassificationMethod** |  **Enum** [  "SOURCE",    "CRITERIA" ] | Classification Method | [optional] 
**Criteria** | [**MachineClassificationCriteriaLevel1**](machine-classification-criteria-level1) |  | [optional] 
**Created** | **System.DateTime** | Date the config was created | [optional] 
**Modified** | **System.DateTime** | Date the config was last updated | [optional] 

## Examples

- Prepare the resource
```powershell
$MachineClassificationConfig = Initialize-V2025MachineClassificationConfig  -Enabled true `
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

