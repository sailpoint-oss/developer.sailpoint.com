---
id: v2025-entitlement-request-config
title: EntitlementRequestConfig
pagination_label: EntitlementRequestConfig
sidebar_label: EntitlementRequestConfig
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'EntitlementRequestConfig', 'V2025EntitlementRequestConfig'] 
slug: /tools/sdk/powershell/v2025/models/entitlement-request-config
tags: ['SDK', 'Software Development Kit', 'EntitlementRequestConfig', 'V2025EntitlementRequestConfig']
---


# EntitlementRequestConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccessRequestConfig** | [**EntitlementAccessRequestConfig**](entitlement-access-request-config) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$EntitlementRequestConfig = Initialize-PSSailpoint.V2025EntitlementRequestConfig  -AccessRequestConfig null
```

- Convert the resource to JSON
```powershell
$EntitlementRequestConfig | ConvertTo-JSON
```


[[Back to top]](#) 

