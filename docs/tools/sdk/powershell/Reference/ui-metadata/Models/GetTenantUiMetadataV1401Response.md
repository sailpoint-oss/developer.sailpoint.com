---
id: get-tenant-ui-metadata-v1401-response
title: GetTenantUiMetadataV1401Response
pagination_label: GetTenantUiMetadataV1401Response
sidebar_label: GetTenantUiMetadataV1401Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'GetTenantUiMetadataV1401Response', 'GetTenantUiMetadataV1401Response'] 
slug: /tools/sdk/powershell/uimetadata/models/get-tenant-ui-metadata-v1401-response
tags: ['SDK', 'Software Development Kit', 'GetTenantUiMetadataV1401Response', 'GetTenantUiMetadataV1401Response']
---


# GetTenantUiMetadataV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarError** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$GetTenantUiMetadataV1401Response = Initialize-GetTenantUiMetadataV1401Response  -VarError JWT validation failed: JWT is expired
```

- Convert the resource to JSON
```powershell
$GetTenantUiMetadataV1401Response | ConvertTo-JSON
```


[[Back to top]](#) 

