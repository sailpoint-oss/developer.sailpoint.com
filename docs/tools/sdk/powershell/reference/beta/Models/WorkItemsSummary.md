---
id: beta-work-items-summary
title: WorkItemsSummary
pagination_label: WorkItemsSummary
sidebar_label: WorkItemsSummary
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'WorkItemsSummary', 'BetaWorkItemsSummary'] 
slug: /tools/sdk/powershell/beta/models/work-items-summary
tags: ['SDK', 'Software Development Kit', 'WorkItemsSummary', 'BetaWorkItemsSummary']
---


# WorkItemsSummary

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Open** |  Pointer to **Int32** | The count of open work items | [optional] 
**Completed** |  Pointer to **Int32** | The count of completed work items | [optional] 
**Total** |  Pointer to **Int32** | The count of total work items | [optional] 

## Examples

- Prepare the resource
```powershell
$WorkItemsSummary = Initialize-PSSailpoint.BetaWorkItemsSummary  -Open 29 `
 -Completed 1 `
 -Total 30
```

- Convert the resource to JSON
```powershell
$WorkItemsSummary | ConvertTo-JSON
```


[[Back to top]](#) 

