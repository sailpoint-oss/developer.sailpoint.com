---
id: work-items-count
title: WorkItemsCount
pagination_label: WorkItemsCount
sidebar_label: WorkItemsCount
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'WorkItemsCount'] 
slug: /tools/sdk/powershell/v3/models/work-items-count
tags: ['SDK', 'Software Development Kit', 'WorkItemsCount']
---


# WorkItemsCount

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Count** |  Pointer to **Int32** | The count of work items | [optional] 

## Examples

- Prepare the resource
```powershell
$WorkItemsCount = Initialize-PSSailpoint.V3WorkItemsCount  -Count 29
```

- Convert the resource to JSON
```powershell
$WorkItemsCount | ConvertTo-JSON
```


[[Back to top]](#) 

