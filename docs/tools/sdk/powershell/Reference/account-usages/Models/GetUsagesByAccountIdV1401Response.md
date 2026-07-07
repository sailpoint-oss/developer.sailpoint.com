---
id: get-usages-by-account-id-v1401-response
title: GetUsagesByAccountIdV1401Response
pagination_label: GetUsagesByAccountIdV1401Response
sidebar_label: GetUsagesByAccountIdV1401Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'GetUsagesByAccountIdV1401Response', 'GetUsagesByAccountIdV1401Response'] 
slug: /tools/sdk/powershell/accountusages/models/get-usages-by-account-id-v1401-response
tags: ['SDK', 'Software Development Kit', 'GetUsagesByAccountIdV1401Response', 'GetUsagesByAccountIdV1401Response']
---


# GetUsagesByAccountIdV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarError** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$GetUsagesByAccountIdV1401Response = Initialize-GetUsagesByAccountIdV1401Response  -VarError JWT validation failed: JWT is expired
```

- Convert the resource to JSON
```powershell
$GetUsagesByAccountIdV1401Response | ConvertTo-JSON
```


[[Back to top]](#) 

