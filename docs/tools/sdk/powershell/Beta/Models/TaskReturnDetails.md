---
id: task-return-details
title: TaskReturnDetails
pagination_label: TaskReturnDetails
sidebar_label: TaskReturnDetails
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'TaskReturnDetails'] 
slug: /tools/sdk/powershell/beta/models/task-return-details
tags: ['SDK', 'Software Development Kit', 'TaskReturnDetails']
---


# TaskReturnDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** |  **String** | Display name of the TaskReturnDetails | 
**AttributeName** |  **String** | Attribute the TaskReturnDetails is for | 

## Examples

- Prepare the resource
```powershell
$TaskReturnDetails = Initialize-BetaTaskReturnDetails  -Name label `
 -AttributeName identityCount
```

- Convert the resource to JSON
```powershell
$TaskReturnDetails | ConvertTo-JSON
```


[[Back to top]](#) 

