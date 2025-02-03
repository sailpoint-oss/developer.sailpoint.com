---
id: work-item-forward
title: WorkItemForward
pagination_label: WorkItemForward
sidebar_label: WorkItemForward
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'WorkItemForward', 'WorkItemForward'] 
slug: /tools/sdk/powershell/v3/models/work-item-forward
tags: ['SDK', 'Software Development Kit', 'WorkItemForward', 'WorkItemForward']
---


# WorkItemForward

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TargetOwnerId** | **String** | The ID of the identity to forward this work item to. | [required]
**Comment** | **String** | Comments to send to the target owner | [required]
**SendNotifications** | **Boolean** | If true, send a notification to the target owner. | [optional] [default to $true]

## Examples

- Prepare the resource
```powershell
$WorkItemForward = Initialize-PSSailpoint.V3WorkItemForward  -TargetOwnerId 2c9180835d2e5168015d32f890ca1581 `
 -Comment I&#39;m going on vacation. `
 -SendNotifications true
```

- Convert the resource to JSON
```powershell
$WorkItemForward | ConvertTo-JSON
```


[[Back to top]](#) 

