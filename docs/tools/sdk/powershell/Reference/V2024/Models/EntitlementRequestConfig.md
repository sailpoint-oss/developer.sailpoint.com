---
id: v2024-entitlement-request-config
title: EntitlementRequestConfig
pagination_label: EntitlementRequestConfig
sidebar_label: EntitlementRequestConfig
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'EntitlementRequestConfig', 'V2024EntitlementRequestConfig'] 
slug: /tools/sdk/powershell/v2024/models/entitlement-request-config
tags: ['SDK', 'Software Development Kit', 'EntitlementRequestConfig', 'V2024EntitlementRequestConfig']
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
$EntitlementRequestConfig = Initialize-V2024EntitlementRequestConfig  -AccessRequestConfig null `
 -RevocationRequestConfig null
```

- Convert the resource to JSON
```powershell
$EntitlementRequestConfig | ConvertTo-JSON
```


[[Back to top]](#) 

