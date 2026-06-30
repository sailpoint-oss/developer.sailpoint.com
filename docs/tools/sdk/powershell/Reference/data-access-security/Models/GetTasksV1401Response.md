---
id: get-tasks-v1401-response
title: GetTasksV1401Response
pagination_label: GetTasksV1401Response
sidebar_label: GetTasksV1401Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'GetTasksV1401Response', 'GetTasksV1401Response'] 
slug: /tools/sdk/powershell/dataaccesssecurity/models/get-tasks-v1401-response
tags: ['SDK', 'Software Development Kit', 'GetTasksV1401Response', 'GetTasksV1401Response']
---


# GetTasksV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarError** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$GetTasksV1401Response = Initialize-GetTasksV1401Response  -VarError JWT validation failed: JWT is expired
```

- Convert the resource to JSON
```powershell
$GetTasksV1401Response | ConvertTo-JSON
```


[[Back to top]](#) 

