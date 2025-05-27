---
id: beta-entitlement-request-config
title: EntitlementRequestConfig
pagination_label: EntitlementRequestConfig
sidebar_label: EntitlementRequestConfig
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'EntitlementRequestConfig', 'BetaEntitlementRequestConfig'] 
slug: /tools/sdk/powershell/beta/models/entitlement-request-config
tags: ['SDK', 'Software Development Kit', 'EntitlementRequestConfig', 'BetaEntitlementRequestConfig']
---


# EntitlementRequestConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccessRequestConfig** | [**EntitlementAccessRequestConfig**](entitlement-access-request-config) |  | [optional] 
**RevocationRequestConfig** | [**EntitlementRevocationRequestConfig**](entitlement-revocation-request-config) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$EntitlementRequestConfig = Initialize-BetaEntitlementRequestConfig  -AccessRequestConfig null `
 -RevocationRequestConfig null
```

- Convert the resource to JSON
```powershell
$EntitlementRequestConfig | ConvertTo-JSON
```


[[Back to top]](#) 

