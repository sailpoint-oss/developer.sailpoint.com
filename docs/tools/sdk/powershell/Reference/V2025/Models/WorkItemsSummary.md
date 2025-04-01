---
id: v2025-work-items-summary
title: WorkItemsSummary
pagination_label: WorkItemsSummary
sidebar_label: WorkItemsSummary
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'WorkItemsSummary', 'V2025WorkItemsSummary'] 
slug: /tools/sdk/powershell/v2025/models/work-items-summary
tags: ['SDK', 'Software Development Kit', 'WorkItemsSummary', 'V2025WorkItemsSummary']
---


# WorkItemsSummary

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Open** | **Int32** | The count of open work items | [optional] 
**Completed** | **Int32** | The count of completed work items | [optional] 
**Total** | **Int32** | The count of total work items | [optional] 

## Examples

- Prepare the resource
```powershell
$WorkItemsSummary = Initialize-PSSailpoint.V2025WorkItemsSummary  -Open 29 `
 -Completed 1 `
 -Total 30
```

- Convert the resource to JSON
```powershell
$WorkItemsSummary | ConvertTo-JSON
```


[[Back to top]](#) 

