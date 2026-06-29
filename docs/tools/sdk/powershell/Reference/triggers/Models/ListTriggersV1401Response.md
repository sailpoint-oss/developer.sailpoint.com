---
id: list-triggers-v1401-response
title: ListTriggersV1401Response
pagination_label: ListTriggersV1401Response
sidebar_label: ListTriggersV1401Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ListTriggersV1401Response', 'ListTriggersV1401Response'] 
slug: /tools/sdk/powershell/triggers/models/list-triggers-v1401-response
tags: ['SDK', 'Software Development Kit', 'ListTriggersV1401Response', 'ListTriggersV1401Response']
---


# ListTriggersV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarError** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$ListTriggersV1401Response = Initialize-ListTriggersV1401Response  -VarError JWT validation failed: JWT is expired
```

- Convert the resource to JSON
```powershell
$ListTriggersV1401Response | ConvertTo-JSON
```


[[Back to top]](#) 

