---
id: v2026-get-task-status401-response
title: GetTaskStatus401Response
pagination_label: GetTaskStatus401Response
sidebar_label: GetTaskStatus401Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'GetTaskStatus401Response', 'V2026GetTaskStatus401Response'] 
slug: /tools/sdk/powershell/v2026/models/get-task-status401-response
tags: ['SDK', 'Software Development Kit', 'GetTaskStatus401Response', 'V2026GetTaskStatus401Response']
---


# GetTaskStatus401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarError** | [**SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$GetTaskStatus401Response = Initialize-V2026GetTaskStatus401Response  -VarError JWT validation failed: JWT is expired
```

- Convert the resource to JSON
```powershell
$GetTaskStatus401Response | ConvertTo-JSON
```


[[Back to top]](#) 

