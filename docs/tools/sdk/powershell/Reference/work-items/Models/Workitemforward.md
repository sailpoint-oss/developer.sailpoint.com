---
id: workitemforward
title: Workitemforward
pagination_label: Workitemforward
sidebar_label: Workitemforward
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Workitemforward', 'Workitemforward'] 
slug: /tools/sdk/powershell/workitems/models/workitemforward
tags: ['SDK', 'Software Development Kit', 'Workitemforward', 'Workitemforward']
---


# Workitemforward

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TargetOwnerId** | **String** | The ID of the identity to forward this work item to. | [required]
**Comment** | **String** | Comments to send to the target owner | [required]
**SendNotifications** | **Boolean** | If true, send a notification to the target owner. | [optional] [default to $true]

## Examples

- Prepare the resource
```powershell
$Workitemforward = Initialize-Workitemforward  -TargetOwnerId 2c9180835d2e5168015d32f890ca1581 `
 -Comment I'm going on vacation. `
 -SendNotifications true
```

- Convert the resource to JSON
```powershell
$Workitemforward | ConvertTo-JSON
```


[[Back to top]](#) 

