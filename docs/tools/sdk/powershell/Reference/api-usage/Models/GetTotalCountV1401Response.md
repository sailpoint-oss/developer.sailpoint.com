---
id: get-total-count-v1401-response
title: GetTotalCountV1401Response
pagination_label: GetTotalCountV1401Response
sidebar_label: GetTotalCountV1401Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'GetTotalCountV1401Response', 'GetTotalCountV1401Response'] 
slug: /tools/sdk/powershell/apiusage/models/get-total-count-v1401-response
tags: ['SDK', 'Software Development Kit', 'GetTotalCountV1401Response', 'GetTotalCountV1401Response']
---


# GetTotalCountV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarError** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$GetTotalCountV1401Response = Initialize-GetTotalCountV1401Response  -VarError JWT validation failed: JWT is expired
```

- Convert the resource to JSON
```powershell
$GetTotalCountV1401Response | ConvertTo-JSON
```


[[Back to top]](#) 

