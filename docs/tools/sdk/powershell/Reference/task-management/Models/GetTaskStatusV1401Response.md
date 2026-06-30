---
id: get-task-status-v1401-response
title: GetTaskStatusV1401Response
pagination_label: GetTaskStatusV1401Response
sidebar_label: GetTaskStatusV1401Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'GetTaskStatusV1401Response', 'GetTaskStatusV1401Response'] 
slug: /tools/sdk/powershell/taskmanagement/models/get-task-status-v1401-response
tags: ['SDK', 'Software Development Kit', 'GetTaskStatusV1401Response', 'GetTaskStatusV1401Response']
---


# GetTaskStatusV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarError** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$GetTaskStatusV1401Response = Initialize-GetTaskStatusV1401Response  -VarError JWT validation failed: JWT is expired
```

- Convert the resource to JSON
```powershell
$GetTaskStatusV1401Response | ConvertTo-JSON
```


[[Back to top]](#) 

