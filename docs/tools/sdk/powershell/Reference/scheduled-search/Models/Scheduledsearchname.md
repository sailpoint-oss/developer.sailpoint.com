---
id: scheduledsearchname
title: Scheduledsearchname
pagination_label: Scheduledsearchname
sidebar_label: Scheduledsearchname
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Scheduledsearchname', 'Scheduledsearchname'] 
slug: /tools/sdk/powershell/scheduledsearch/models/scheduledsearchname
tags: ['SDK', 'Software Development Kit', 'Scheduledsearchname', 'Scheduledsearchname']
---


# Scheduledsearchname

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | The name of the scheduled search.  | [optional] 
**Description** | **String** | The description of the scheduled search.  | [optional] 

## Examples

- Prepare the resource
```powershell
$Scheduledsearchname = Initialize-Scheduledsearchname  -Name Daily disabled accounts `
 -Description Daily disabled accounts
```

- Convert the resource to JSON
```powershell
$Scheduledsearchname | ConvertTo-JSON
```


[[Back to top]](#) 

