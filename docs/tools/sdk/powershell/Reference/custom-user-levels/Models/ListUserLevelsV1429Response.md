---
id: list-user-levels-v1429-response
title: ListUserLevelsV1429Response
pagination_label: ListUserLevelsV1429Response
sidebar_label: ListUserLevelsV1429Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ListUserLevelsV1429Response', 'ListUserLevelsV1429Response'] 
slug: /tools/sdk/powershell/customuserlevels/models/list-user-levels-v1429-response
tags: ['SDK', 'Software Development Kit', 'ListUserLevelsV1429Response', 'ListUserLevelsV1429Response']
---


# ListUserLevelsV1429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$ListUserLevelsV1429Response = Initialize-ListUserLevelsV1429Response  -Message  Rate Limit Exceeded 
```

- Convert the resource to JSON
```powershell
$ListUserLevelsV1429Response | ConvertTo-JSON
```


[[Back to top]](#) 

