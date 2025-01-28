---
id: v2024-tenant-ui-metadata-item-response
title: TenantUiMetadataItemResponse
pagination_label: TenantUiMetadataItemResponse
sidebar_label: TenantUiMetadataItemResponse
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'TenantUiMetadataItemResponse', 'V2024TenantUiMetadataItemResponse'] 
slug: /tools/sdk/powershell/v2024/models/tenant-ui-metadata-item-response
tags: ['SDK', 'Software Development Kit', 'TenantUiMetadataItemResponse', 'V2024TenantUiMetadataItemResponse']
---


# TenantUiMetadataItemResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IframeWhiteList** |  Pointer to **String** | Parameter that organizational administrators can adjust to permit another domain to encapsulate IDN within an iframe. If you would like to reset the value use ""null"". It will only allow include into iframe non authenticated portions of the product, such as password reset. | [optional] 
**UsernameLabel** |  Pointer to **String** | Descriptor for the username input field. If you would like to reset the value use ""null"". | [optional] 
**UsernameEmptyText** |  Pointer to **String** | Placeholder text displayed in the username input field. If you would like to reset the value use ""null"". | [optional] 

## Examples

- Prepare the resource
```powershell
$TenantUiMetadataItemResponse = Initialize-PSSailpoint.V2024TenantUiMetadataItemResponse  -IframeWhiteList http://example.com http://example2.com `
 -UsernameLabel Email `
 -UsernameEmptyText Please provide your work email address...
```

- Convert the resource to JSON
```powershell
$TenantUiMetadataItemResponse | ConvertTo-JSON
```


[[Back to top]](#) 

