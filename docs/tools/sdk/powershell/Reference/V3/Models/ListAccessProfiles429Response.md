---
id: list-access-profiles429-response
title: ListAccessProfiles429Response
pagination_label: ListAccessProfiles429Response
sidebar_label: ListAccessProfiles429Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ListAccessProfiles429Response', 'ListAccessProfiles429Response'] 
slug: /tools/sdk/powershell/v3/models/list-access-profiles429-response
tags: ['SDK', 'Software Development Kit', 'ListAccessProfiles429Response', 'ListAccessProfiles429Response']
---


# ListAccessProfiles429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | [**SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$ListAccessProfiles429Response = Initialize-ListAccessProfiles429Response  -Message  Rate Limit Exceeded 
```

- Convert the resource to JSON
```powershell
$ListAccessProfiles429Response | ConvertTo-JSON
```


[[Back to top]](#) 

