---
id: workitemssummary
title: Workitemssummary
pagination_label: Workitemssummary
sidebar_label: Workitemssummary
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Workitemssummary', 'Workitemssummary'] 
slug: /tools/sdk/powershell/workitems/models/workitemssummary
tags: ['SDK', 'Software Development Kit', 'Workitemssummary', 'Workitemssummary']
---


# Workitemssummary

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Open** | **Int32** | The count of open work items | [optional] 
**Completed** | **Int32** | The count of completed work items | [optional] 
**Total** | **Int32** | The count of total work items | [optional] 

## Examples

- Prepare the resource
```powershell
$Workitemssummary = Initialize-Workitemssummary  -Open 29 `
 -Completed 1 `
 -Total 30
```

- Convert the resource to JSON
```powershell
$Workitemssummary | ConvertTo-JSON
```


[[Back to top]](#) 

