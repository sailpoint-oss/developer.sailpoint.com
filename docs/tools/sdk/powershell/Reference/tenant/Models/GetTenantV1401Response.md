---
id: get-tenant-v1401-response
title: GetTenantV1401Response
pagination_label: GetTenantV1401Response
sidebar_label: GetTenantV1401Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'GetTenantV1401Response', 'GetTenantV1401Response'] 
slug: /tools/sdk/powershell/tenant/models/get-tenant-v1401-response
tags: ['SDK', 'Software Development Kit', 'GetTenantV1401Response', 'GetTenantV1401Response']
---


# GetTenantV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarError** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$GetTenantV1401Response = Initialize-GetTenantV1401Response  -VarError JWT validation failed: JWT is expired
```

- Convert the resource to JSON
```powershell
$GetTenantV1401Response | ConvertTo-JSON
```


[[Back to top]](#) 

