---
id: set-icon-v1401-response
title: SetIconV1401Response
pagination_label: SetIconV1401Response
sidebar_label: SetIconV1401Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SetIconV1401Response', 'SetIconV1401Response'] 
slug: /tools/sdk/powershell/icons/models/set-icon-v1401-response
tags: ['SDK', 'Software Development Kit', 'SetIconV1401Response', 'SetIconV1401Response']
---


# SetIconV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarError** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$SetIconV1401Response = Initialize-SetIconV1401Response  -VarError JWT validation failed: JWT is expired
```

- Convert the resource to JSON
```powershell
$SetIconV1401Response | ConvertTo-JSON
```


[[Back to top]](#) 

