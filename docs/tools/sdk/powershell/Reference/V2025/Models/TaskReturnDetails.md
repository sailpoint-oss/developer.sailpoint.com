---
id: v2025-task-return-details
title: TaskReturnDetails
pagination_label: TaskReturnDetails
sidebar_label: TaskReturnDetails
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'TaskReturnDetails', 'V2025TaskReturnDetails'] 
slug: /tools/sdk/powershell/v2025/models/task-return-details
tags: ['SDK', 'Software Development Kit', 'TaskReturnDetails', 'V2025TaskReturnDetails']
---


# TaskReturnDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | Display name of the TaskReturnDetails | [required]
**AttributeName** | **String** | Attribute the TaskReturnDetails is for | [required]

## Examples

- Prepare the resource
```powershell
$TaskReturnDetails = Initialize-V2025TaskReturnDetails  -Name label `
 -AttributeName identityCount
```

- Convert the resource to JSON
```powershell
$TaskReturnDetails | ConvertTo-JSON
```


[[Back to top]](#) 

