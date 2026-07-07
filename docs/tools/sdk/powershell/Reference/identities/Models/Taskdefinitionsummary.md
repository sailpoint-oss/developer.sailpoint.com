---
id: taskdefinitionsummary
title: Taskdefinitionsummary
pagination_label: Taskdefinitionsummary
sidebar_label: Taskdefinitionsummary
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Taskdefinitionsummary', 'Taskdefinitionsummary'] 
slug: /tools/sdk/powershell/identities/models/taskdefinitionsummary
tags: ['SDK', 'Software Development Kit', 'Taskdefinitionsummary', 'Taskdefinitionsummary']
---


# Taskdefinitionsummary

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | System-generated unique ID of the TaskDefinition | [required]
**UniqueName** | **String** | Name of the TaskDefinition | [required]
**Description** | **String** | Description of the TaskDefinition | [required]
**ParentName** | **String** | Name of the parent of the TaskDefinition | [required]
**Executor** | **String** | Executor of the TaskDefinition | [required]
**Arguments** | [**map[string]AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | Formal parameters of the TaskDefinition, without values | [required]

## Examples

- Prepare the resource
```powershell
$Taskdefinitionsummary = Initialize-Taskdefinitionsummary  -Id 2c91808475b4334b0175e1dff64b63c5 `
 -UniqueName Cloud Account Aggregation `
 -Description Aggregates from the specified application. `
 -ParentName Cloud Account Aggregation `
 -Executor sailpoint.task.ServiceTaskExecutor `
 -Arguments {"mantisExecutor":"com.sailpoint.mantis.sources.task.AccountAggregationTask","eventClassesCsv":"sailpoint.thunderbolt.events.AggregationEvents","serviceClass":"sailpoint.thunderbolt.service.AggregationService","serviceMethod":"accountAggregationTask"}
```

- Convert the resource to JSON
```powershell
$Taskdefinitionsummary | ConvertTo-JSON
```


[[Back to top]](#) 

