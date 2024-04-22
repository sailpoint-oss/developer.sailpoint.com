---
id: work-items-count
title: WorkItemsCount
pagination_label: WorkItemsCount
sidebar_label: WorkItemsCount
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'WorkItemsCount'] 
slug: /tools/sdk/powershell/beta/models/work-items-count
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
$WorkItemsCount = Initialize-BetaWorkItemsCount  -Count 29
```

- Convert the resource to JSON
```powershell
$WorkItemsCount | ConvertTo-JSON
```


[[Back to top]](#) 

