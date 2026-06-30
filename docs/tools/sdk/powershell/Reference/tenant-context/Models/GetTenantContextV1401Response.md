---
id: get-tenant-context-v1401-response
title: GetTenantContextV1401Response
pagination_label: GetTenantContextV1401Response
sidebar_label: GetTenantContextV1401Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'GetTenantContextV1401Response', 'GetTenantContextV1401Response'] 
slug: /tools/sdk/powershell/tenantcontext/models/get-tenant-context-v1401-response
tags: ['SDK', 'Software Development Kit', 'GetTenantContextV1401Response', 'GetTenantContextV1401Response']
---


# GetTenantContextV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarError** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$GetTenantContextV1401Response = Initialize-GetTenantContextV1401Response  -VarError JWT validation failed: JWT is expired
```

- Convert the resource to JSON
```powershell
$GetTenantContextV1401Response | ConvertTo-JSON
```


[[Back to top]](#) 

