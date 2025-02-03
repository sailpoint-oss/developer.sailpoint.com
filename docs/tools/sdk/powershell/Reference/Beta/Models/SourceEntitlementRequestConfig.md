---
id: beta-source-entitlement-request-config
title: SourceEntitlementRequestConfig
pagination_label: SourceEntitlementRequestConfig
sidebar_label: SourceEntitlementRequestConfig
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SourceEntitlementRequestConfig', 'BetaSourceEntitlementRequestConfig'] 
slug: /tools/sdk/powershell/beta/models/source-entitlement-request-config
tags: ['SDK', 'Software Development Kit', 'SourceEntitlementRequestConfig', 'BetaSourceEntitlementRequestConfig']
---


# SourceEntitlementRequestConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccessRequestConfig** | [**EntitlementAccessRequestConfig**](entitlement-access-request-config) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$SourceEntitlementRequestConfig = Initialize-PSSailpoint.BetaSourceEntitlementRequestConfig  -AccessRequestConfig null
```

- Convert the resource to JSON
```powershell
$SourceEntitlementRequestConfig | ConvertTo-JSON
```


[[Back to top]](#) 

