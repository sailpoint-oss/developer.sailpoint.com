---
id: list-user-levels-v1401-response
title: ListUserLevelsV1401Response
pagination_label: ListUserLevelsV1401Response
sidebar_label: ListUserLevelsV1401Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ListUserLevelsV1401Response', 'ListUserLevelsV1401Response'] 
slug: /tools/sdk/powershell/customuserlevels/models/list-user-levels-v1401-response
tags: ['SDK', 'Software Development Kit', 'ListUserLevelsV1401Response', 'ListUserLevelsV1401Response']
---


# ListUserLevelsV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarError** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$ListUserLevelsV1401Response = Initialize-ListUserLevelsV1401Response  -VarError JWT validation failed: JWT is expired
```

- Convert the resource to JSON
```powershell
$ListUserLevelsV1401Response | ConvertTo-JSON
```


[[Back to top]](#) 

