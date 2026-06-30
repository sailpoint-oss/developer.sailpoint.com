---
id: list-triggers-v1429-response
title: ListTriggersV1429Response
pagination_label: ListTriggersV1429Response
sidebar_label: ListTriggersV1429Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ListTriggersV1429Response', 'ListTriggersV1429Response'] 
slug: /tools/sdk/powershell/triggers/models/list-triggers-v1429-response
tags: ['SDK', 'Software Development Kit', 'ListTriggersV1429Response', 'ListTriggersV1429Response']
---


# ListTriggersV1429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$ListTriggersV1429Response = Initialize-ListTriggersV1429Response  -Message  Rate Limit Exceeded 
```

- Convert the resource to JSON
```powershell
$ListTriggersV1429Response | ConvertTo-JSON
```


[[Back to top]](#) 

