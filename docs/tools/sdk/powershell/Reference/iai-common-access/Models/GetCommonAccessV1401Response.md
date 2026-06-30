---
id: get-common-access-v1401-response
title: GetCommonAccessV1401Response
pagination_label: GetCommonAccessV1401Response
sidebar_label: GetCommonAccessV1401Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'GetCommonAccessV1401Response', 'GetCommonAccessV1401Response'] 
slug: /tools/sdk/powershell/iaicommonaccess/models/get-common-access-v1401-response
tags: ['SDK', 'Software Development Kit', 'GetCommonAccessV1401Response', 'GetCommonAccessV1401Response']
---


# GetCommonAccessV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarError** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$GetCommonAccessV1401Response = Initialize-GetCommonAccessV1401Response  -VarError JWT validation failed: JWT is expired
```

- Convert the resource to JSON
```powershell
$GetCommonAccessV1401Response | ConvertTo-JSON
```


[[Back to top]](#) 

