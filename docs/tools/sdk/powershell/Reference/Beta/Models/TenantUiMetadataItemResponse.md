---
id: beta-tenant-ui-metadata-item-response
title: TenantUiMetadataItemResponse
pagination_label: TenantUiMetadataItemResponse
sidebar_label: TenantUiMetadataItemResponse
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'TenantUiMetadataItemResponse', 'BetaTenantUiMetadataItemResponse'] 
slug: /tools/sdk/powershell/beta/models/tenant-ui-metadata-item-response
tags: ['SDK', 'Software Development Kit', 'TenantUiMetadataItemResponse', 'BetaTenantUiMetadataItemResponse']
---


# TenantUiMetadataItemResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IframeWhiteList** | **String** | Parameter that organizational administrators can adjust to permit another domain to encapsulate IDN within an iframe. If you would like to reset the value use ""null"". It will only allow include into iframe non authenticated portions of the product, such as password reset. | [optional] 
**UsernameLabel** | **String** | Descriptor for the username input field. If you would like to reset the value use ""null"". | [optional] 
**UsernameEmptyText** | **String** | Placeholder text displayed in the username input field. If you would like to reset the value use ""null"". | [optional] 

## Examples

- Prepare the resource
```powershell
$TenantUiMetadataItemResponse = Initialize-PSSailpoint.BetaTenantUiMetadataItemResponse  -IframeWhiteList http://example.com http://example2.com `
 -UsernameLabel Email `
 -UsernameEmptyText Please provide your work email address...
```

- Convert the resource to JSON
```powershell
$TenantUiMetadataItemResponse | ConvertTo-JSON
```


[[Back to top]](#) 

