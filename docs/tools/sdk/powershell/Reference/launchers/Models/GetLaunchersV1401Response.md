---
id: get-launchers-v1401-response
title: GetLaunchersV1401Response
pagination_label: GetLaunchersV1401Response
sidebar_label: GetLaunchersV1401Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'GetLaunchersV1401Response', 'GetLaunchersV1401Response'] 
slug: /tools/sdk/powershell/launchers/models/get-launchers-v1401-response
tags: ['SDK', 'Software Development Kit', 'GetLaunchersV1401Response', 'GetLaunchersV1401Response']
---


# GetLaunchersV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarError** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$GetLaunchersV1401Response = Initialize-GetLaunchersV1401Response  -VarError JWT validation failed: JWT is expired
```

- Convert the resource to JSON
```powershell
$GetLaunchersV1401Response | ConvertTo-JSON
```


[[Back to top]](#) 

