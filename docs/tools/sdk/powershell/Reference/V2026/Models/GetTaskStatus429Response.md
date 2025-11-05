---
id: v2026-get-task-status429-response
title: GetTaskStatus429Response
pagination_label: GetTaskStatus429Response
sidebar_label: GetTaskStatus429Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'GetTaskStatus429Response', 'V2026GetTaskStatus429Response'] 
slug: /tools/sdk/powershell/v2026/models/get-task-status429-response
tags: ['SDK', 'Software Development Kit', 'GetTaskStatus429Response', 'V2026GetTaskStatus429Response']
---


# GetTaskStatus429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | [**SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$GetTaskStatus429Response = Initialize-V2026GetTaskStatus429Response  -Message  Rate Limit Exceeded 
```

- Convert the resource to JSON
```powershell
$GetTaskStatus429Response | ConvertTo-JSON
```


[[Back to top]](#) 

