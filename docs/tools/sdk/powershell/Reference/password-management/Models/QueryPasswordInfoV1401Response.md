---
id: query-password-info-v1401-response
title: QueryPasswordInfoV1401Response
pagination_label: QueryPasswordInfoV1401Response
sidebar_label: QueryPasswordInfoV1401Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'QueryPasswordInfoV1401Response', 'QueryPasswordInfoV1401Response'] 
slug: /tools/sdk/powershell/passwordmanagement/models/query-password-info-v1401-response
tags: ['SDK', 'Software Development Kit', 'QueryPasswordInfoV1401Response', 'QueryPasswordInfoV1401Response']
---


# QueryPasswordInfoV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarError** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$QueryPasswordInfoV1401Response = Initialize-QueryPasswordInfoV1401Response  -VarError JWT validation failed: JWT is expired
```

- Convert the resource to JSON
```powershell
$QueryPasswordInfoV1401Response | ConvertTo-JSON
```


[[Back to top]](#) 

