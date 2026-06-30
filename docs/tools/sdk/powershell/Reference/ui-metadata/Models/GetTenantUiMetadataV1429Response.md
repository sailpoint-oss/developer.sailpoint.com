---
id: get-tenant-ui-metadata-v1429-response
title: GetTenantUiMetadataV1429Response
pagination_label: GetTenantUiMetadataV1429Response
sidebar_label: GetTenantUiMetadataV1429Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'GetTenantUiMetadataV1429Response', 'GetTenantUiMetadataV1429Response'] 
slug: /tools/sdk/powershell/uimetadata/models/get-tenant-ui-metadata-v1429-response
tags: ['SDK', 'Software Development Kit', 'GetTenantUiMetadataV1429Response', 'GetTenantUiMetadataV1429Response']
---


# GetTenantUiMetadataV1429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$GetTenantUiMetadataV1429Response = Initialize-GetTenantUiMetadataV1429Response  -Message  Rate Limit Exceeded 
```

- Convert the resource to JSON
```powershell
$GetTenantUiMetadataV1429Response | ConvertTo-JSON
```


[[Back to top]](#) 

