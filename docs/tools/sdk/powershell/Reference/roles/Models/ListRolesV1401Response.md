---
id: list-roles-v1401-response
title: ListRolesV1401Response
pagination_label: ListRolesV1401Response
sidebar_label: ListRolesV1401Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ListRolesV1401Response', 'ListRolesV1401Response'] 
slug: /tools/sdk/powershell/roles/models/list-roles-v1401-response
tags: ['SDK', 'Software Development Kit', 'ListRolesV1401Response', 'ListRolesV1401Response']
---


# ListRolesV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarError** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$ListRolesV1401Response = Initialize-ListRolesV1401Response  -VarError JWT validation failed: JWT is expired
```

- Convert the resource to JSON
```powershell
$ListRolesV1401Response | ConvertTo-JSON
```


[[Back to top]](#) 

