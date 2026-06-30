---
id: set-icon-v1429-response
title: SetIconV1429Response
pagination_label: SetIconV1429Response
sidebar_label: SetIconV1429Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SetIconV1429Response', 'SetIconV1429Response'] 
slug: /tools/sdk/powershell/icons/models/set-icon-v1429-response
tags: ['SDK', 'Software Development Kit', 'SetIconV1429Response', 'SetIconV1429Response']
---


# SetIconV1429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$SetIconV1429Response = Initialize-SetIconV1429Response  -Message  Rate Limit Exceeded 
```

- Convert the resource to JSON
```powershell
$SetIconV1429Response | ConvertTo-JSON
```


[[Back to top]](#) 

