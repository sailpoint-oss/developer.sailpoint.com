---
id: v2024-tenant-ui-metadata-item-update-request
title: TenantUiMetadataItemUpdateRequest
pagination_label: TenantUiMetadataItemUpdateRequest
sidebar_label: TenantUiMetadataItemUpdateRequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'TenantUiMetadataItemUpdateRequest', 'V2024TenantUiMetadataItemUpdateRequest'] 
slug: /tools/sdk/powershell/v2024/models/tenant-ui-metadata-item-update-request
tags: ['SDK', 'Software Development Kit', 'TenantUiMetadataItemUpdateRequest', 'V2024TenantUiMetadataItemUpdateRequest']
---


# TenantUiMetadataItemUpdateRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IframeWhiteList** | **String** | Parameter that organizational administrators can adjust to permit another domain to encapsulate IDN within an iframe. If you would like to reset the value use ""null"". It will only allow include into iframe non authenticated portions of the product, such as password reset. | [optional] 
**UsernameLabel** | **String** | Descriptor for the username input field. If you would like to reset the value use ""null"". | [optional] 
**UsernameEmptyText** | **String** | Placeholder text displayed in the username input field. If you would like to reset the value use ""null"". | [optional] 

## Examples

- Prepare the resource
```powershell
$TenantUiMetadataItemUpdateRequest = Initialize-V2024TenantUiMetadataItemUpdateRequest  -IframeWhiteList http://example.com http://example2.com `
 -UsernameLabel Email `
 -UsernameEmptyText Please provide your work email address...
```

- Convert the resource to JSON
```powershell
$TenantUiMetadataItemUpdateRequest | ConvertTo-JSON
```


[[Back to top]](#) 

