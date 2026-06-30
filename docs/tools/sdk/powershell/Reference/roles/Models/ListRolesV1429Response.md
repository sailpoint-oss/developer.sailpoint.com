---
id: list-roles-v1429-response
title: ListRolesV1429Response
pagination_label: ListRolesV1429Response
sidebar_label: ListRolesV1429Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ListRolesV1429Response', 'ListRolesV1429Response'] 
slug: /tools/sdk/powershell/roles/models/list-roles-v1429-response
tags: ['SDK', 'Software Development Kit', 'ListRolesV1429Response', 'ListRolesV1429Response']
---


# ListRolesV1429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$ListRolesV1429Response = Initialize-ListRolesV1429Response  -Message  Rate Limit Exceeded 
```

- Convert the resource to JSON
```powershell
$ListRolesV1429Response | ConvertTo-JSON
```


[[Back to top]](#) 

