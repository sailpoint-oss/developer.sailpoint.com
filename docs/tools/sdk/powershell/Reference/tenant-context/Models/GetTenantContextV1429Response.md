---
id: get-tenant-context-v1429-response
title: GetTenantContextV1429Response
pagination_label: GetTenantContextV1429Response
sidebar_label: GetTenantContextV1429Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'GetTenantContextV1429Response', 'GetTenantContextV1429Response'] 
slug: /tools/sdk/powershell/tenantcontext/models/get-tenant-context-v1429-response
tags: ['SDK', 'Software Development Kit', 'GetTenantContextV1429Response', 'GetTenantContextV1429Response']
---


# GetTenantContextV1429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$GetTenantContextV1429Response = Initialize-GetTenantContextV1429Response  -Message  Rate Limit Exceeded 
```

- Convert the resource to JSON
```powershell
$GetTenantContextV1429Response | ConvertTo-JSON
```


[[Back to top]](#) 

