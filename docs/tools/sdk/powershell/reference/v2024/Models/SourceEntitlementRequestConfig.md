---
id: v2024-source-entitlement-request-config
title: SourceEntitlementRequestConfig
pagination_label: SourceEntitlementRequestConfig
sidebar_label: SourceEntitlementRequestConfig
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SourceEntitlementRequestConfig'] 
slug: /tools/sdk/powershell/v2024/models/source-entitlement-request-config
tags: ['SDK', 'Software Development Kit', 'SourceEntitlementRequestConfig']
---


# SourceEntitlementRequestConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccessRequestConfig** |  Pointer to [**EntitlementAccessRequestConfig**](entitlement-access-request-config) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$SourceEntitlementRequestConfig = Initialize-PSSailpoint.V2024SourceEntitlementRequestConfig  -AccessRequestConfig null
```

- Convert the resource to JSON
```powershell
$SourceEntitlementRequestConfig | ConvertTo-JSON
```


[[Back to top]](#) 

