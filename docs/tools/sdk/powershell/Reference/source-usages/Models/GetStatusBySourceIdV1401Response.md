---
id: get-status-by-source-id-v1401-response
title: GetStatusBySourceIdV1401Response
pagination_label: GetStatusBySourceIdV1401Response
sidebar_label: GetStatusBySourceIdV1401Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'GetStatusBySourceIdV1401Response', 'GetStatusBySourceIdV1401Response'] 
slug: /tools/sdk/powershell/sourceusages/models/get-status-by-source-id-v1401-response
tags: ['SDK', 'Software Development Kit', 'GetStatusBySourceIdV1401Response', 'GetStatusBySourceIdV1401Response']
---


# GetStatusBySourceIdV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarError** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$GetStatusBySourceIdV1401Response = Initialize-GetStatusBySourceIdV1401Response  -VarError JWT validation failed: JWT is expired
```

- Convert the resource to JSON
```powershell
$GetStatusBySourceIdV1401Response | ConvertTo-JSON
```


[[Back to top]](#) 

