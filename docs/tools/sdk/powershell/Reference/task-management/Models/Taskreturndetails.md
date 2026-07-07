---
id: taskreturndetails
title: Taskreturndetails
pagination_label: Taskreturndetails
sidebar_label: Taskreturndetails
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Taskreturndetails', 'Taskreturndetails'] 
slug: /tools/sdk/powershell/taskmanagement/models/taskreturndetails
tags: ['SDK', 'Software Development Kit', 'Taskreturndetails', 'Taskreturndetails']
---


# Taskreturndetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | Display name of the TaskReturnDetails | [required]
**AttributeName** | **String** | Attribute the TaskReturnDetails is for | [required]

## Examples

- Prepare the resource
```powershell
$Taskreturndetails = Initialize-Taskreturndetails  -Name label `
 -AttributeName identityCount
```

- Convert the resource to JSON
```powershell
$Taskreturndetails | ConvertTo-JSON
```


[[Back to top]](#) 

