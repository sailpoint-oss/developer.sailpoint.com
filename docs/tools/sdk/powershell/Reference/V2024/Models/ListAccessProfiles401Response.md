---
id: v2024-list-access-profiles401-response
title: ListAccessProfiles401Response
pagination_label: ListAccessProfiles401Response
sidebar_label: ListAccessProfiles401Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ListAccessProfiles401Response', 'V2024ListAccessProfiles401Response'] 
slug: /tools/sdk/powershell/v2024/models/list-access-profiles401-response
tags: ['SDK', 'Software Development Kit', 'ListAccessProfiles401Response', 'V2024ListAccessProfiles401Response']
---


# ListAccessProfiles401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarError** | [**SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$ListAccessProfiles401Response = Initialize-PSSailpoint.V2024ListAccessProfiles401Response  -VarError JWT validation failed: JWT is expired
```

- Convert the resource to JSON
```powershell
$ListAccessProfiles401Response | ConvertTo-JSON
```


[[Back to top]](#) 

