---
id: taskresultresponse
title: Taskresultresponse
pagination_label: Taskresultresponse
sidebar_label: Taskresultresponse
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Taskresultresponse', 'Taskresultresponse'] 
slug: /tools/sdk/powershell/identities/models/taskresultresponse
tags: ['SDK', 'Software Development Kit', 'Taskresultresponse', 'Taskresultresponse']
---


# Taskresultresponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **String** | the type of response reference | [optional] 
**Id** | **String** | the task ID | [optional] 
**Name** | **String** | the task name (not used in this endpoint, always null) | [optional] 

## Examples

- Prepare the resource
```powershell
$Taskresultresponse = Initialize-Taskresultresponse  -Type TASK_RESULT `
 -Id 78733556-9ea3-4f59-bf69-e5cd92b011b4 `
 -Name null
```

- Convert the resource to JSON
```powershell
$Taskresultresponse | ConvertTo-JSON
```


[[Back to top]](#) 

