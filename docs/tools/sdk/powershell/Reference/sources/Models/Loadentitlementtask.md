---
id: loadentitlementtask
title: Loadentitlementtask
pagination_label: Loadentitlementtask
sidebar_label: Loadentitlementtask
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Loadentitlementtask', 'Loadentitlementtask'] 
slug: /tools/sdk/powershell/sources/models/loadentitlementtask
tags: ['SDK', 'Software Development Kit', 'Loadentitlementtask', 'Loadentitlementtask']
---


# Loadentitlementtask

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | System-generated unique ID of the task this taskStatus represents | [optional] 
**Type** | **String** | Type of task this task represents | [optional] 
**UniqueName** | **String** | The name of the task | [optional] 
**Description** | **String** | The description of the task | [optional] 
**Launcher** | **String** | The user who initiated the task | [optional] 
**Created** | **System.DateTime** | The creation date of the task | [optional] 
**Returns** | [**[]LoadentitlementtaskReturnsInner**](loadentitlementtask-returns-inner) | Return values from the task | [optional] 

## Examples

- Prepare the resource
```powershell
$Loadentitlementtask = Initialize-Loadentitlementtask  -Id ef38f94347e94562b5bb8424a56397d8 `
 -Type QUARTZ `
 -UniqueName Cloud Group Aggregation `
 -Description Aggregate from the specified application `
 -Launcher John Doe `
 -Created 2020-07-11T21:23:15Z `
 -Returns [{"displayLabel":"TASK_OUT_ACCOUNT_GROUP_AGGREGATION_APPLICATIONS","attributeName":"applications"},{"displayLabel":"TASK_OUT_ACCOUNT_GROUP_AGGREGATION_TOTAL","attributeName":"total"},{"displayLabel":"TASK_OUT_ACCOUNT_GROUP_AGGREGATION_CREATED","attributeName":"groupsCreated"},{"displayLabel":"TASK_OUT_ACCOUNT_GROUP_AGGREGATION_UPDATED","attributeName":"groupsUpdated"},{"displayLabel":"TASK_OUT_ACCOUNT_GROUP_AGGREGATION_DELETED","attributeName":"groupsDeleted"}]
```

- Convert the resource to JSON
```powershell
$Loadentitlementtask | ConvertTo-JSON
```


[[Back to top]](#) 

