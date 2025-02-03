---
id: beta-task-return-details
title: TaskReturnDetails
pagination_label: TaskReturnDetails
sidebar_label: TaskReturnDetails
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'TaskReturnDetails', 'BetaTaskReturnDetails'] 
slug: /tools/sdk/powershell/beta/models/task-return-details
tags: ['SDK', 'Software Development Kit', 'TaskReturnDetails', 'BetaTaskReturnDetails']
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
$TaskReturnDetails = Initialize-PSSailpoint.BetaTaskReturnDetails  -Name label `
 -AttributeName identityCount
```

- Convert the resource to JSON
```powershell
$TaskReturnDetails | ConvertTo-JSON
```


[[Back to top]](#) 

