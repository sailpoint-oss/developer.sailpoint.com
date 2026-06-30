---
id: workflowexecutionhistory
title: Workflowexecutionhistory
pagination_label: Workflowexecutionhistory
sidebar_label: Workflowexecutionhistory
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Workflowexecutionhistory', 'Workflowexecutionhistory'] 
slug: /tools/sdk/powershell/workflows/models/workflowexecutionhistory
tags: ['SDK', 'Software Development Kit', 'Workflowexecutionhistory', 'Workflowexecutionhistory']
---


# Workflowexecutionhistory

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Definition** | [**SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0 |  | [optional] 
**History** | [**SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0 |  | [optional] 
**Trigger** | [**SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0 |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Workflowexecutionhistory = Initialize-Workflowexecutionhistory  -Definition null `
 -History null `
 -Trigger null
```

- Convert the resource to JSON
```powershell
$Workflowexecutionhistory | ConvertTo-JSON
```


[[Back to top]](#) 

