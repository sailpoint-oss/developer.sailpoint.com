---
id: workgroupbulkdeleterequest
title: Workgroupbulkdeleterequest
pagination_label: Workgroupbulkdeleterequest
sidebar_label: Workgroupbulkdeleterequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Workgroupbulkdeleterequest', 'Workgroupbulkdeleterequest'] 
slug: /tools/sdk/powershell/governancegroups/models/workgroupbulkdeleterequest
tags: ['SDK', 'Software Development Kit', 'Workgroupbulkdeleterequest', 'Workgroupbulkdeleterequest']
---


# Workgroupbulkdeleterequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Ids** | **[]String** | List of IDs of Governance Groups to be deleted. | [optional] 

## Examples

- Prepare the resource
```powershell
$Workgroupbulkdeleterequest = Initialize-Workgroupbulkdeleterequest  -Ids ["567a697e-885b-495a-afc5-d55e1c23a302","c7b0f7b2-1e78-4063-b294-a555333dacd2"]
```

- Convert the resource to JSON
```powershell
$Workgroupbulkdeleterequest | ConvertTo-JSON
```


[[Back to top]](#) 

