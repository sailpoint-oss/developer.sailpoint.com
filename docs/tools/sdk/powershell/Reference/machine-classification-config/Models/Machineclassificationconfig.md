---
id: machineclassificationconfig
title: Machineclassificationconfig
pagination_label: Machineclassificationconfig
sidebar_label: Machineclassificationconfig
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Machineclassificationconfig', 'Machineclassificationconfig'] 
slug: /tools/sdk/powershell/machineclassificationconfig/models/machineclassificationconfig
tags: ['SDK', 'Software Development Kit', 'Machineclassificationconfig', 'Machineclassificationconfig']
---


# Machineclassificationconfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Enabled** | **Boolean** | Indicates whether Classification is enabled for a Source | [optional] [default to $false]
**ClassificationMethod** |  **Enum** [  "SOURCE",    "CRITERIA" ] | Classification Method | [optional] 
**Criteria** | [**Machineclassificationcriterialevel1**](machineclassificationcriterialevel1) |  | [optional] 
**Created** | **System.DateTime** | Date the config was created | [optional] 
**Modified** | **System.DateTime** | Date the config was last updated | [optional] 

## Examples

- Prepare the resource
```powershell
$Machineclassificationconfig = Initialize-Machineclassificationconfig  -Enabled true `
 -ClassificationMethod SOURCE `
 -Criteria null `
 -Created 2017-07-11T18:45:37.098Z `
 -Modified 2018-06-25T20:22:28.104Z
```

- Convert the resource to JSON
```powershell
$Machineclassificationconfig | ConvertTo-JSON
```


[[Back to top]](#) 

