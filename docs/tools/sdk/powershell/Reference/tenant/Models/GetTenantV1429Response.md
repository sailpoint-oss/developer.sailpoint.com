---
id: get-tenant-v1429-response
title: GetTenantV1429Response
pagination_label: GetTenantV1429Response
sidebar_label: GetTenantV1429Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'GetTenantV1429Response', 'GetTenantV1429Response'] 
slug: /tools/sdk/powershell/tenant/models/get-tenant-v1429-response
tags: ['SDK', 'Software Development Kit', 'GetTenantV1429Response', 'GetTenantV1429Response']
---


# GetTenantV1429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$GetTenantV1429Response = Initialize-GetTenantV1429Response  -Message  Rate Limit Exceeded 
```

- Convert the resource to JSON
```powershell
$GetTenantV1429Response | ConvertTo-JSON
```


[[Back to top]](#) 

