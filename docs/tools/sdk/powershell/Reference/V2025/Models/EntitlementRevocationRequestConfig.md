---
id: v2025-entitlement-revocation-request-config
title: EntitlementRevocationRequestConfig
pagination_label: EntitlementRevocationRequestConfig
sidebar_label: EntitlementRevocationRequestConfig
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'EntitlementRevocationRequestConfig', 'V2025EntitlementRevocationRequestConfig'] 
slug: /tools/sdk/powershell/v2025/models/entitlement-revocation-request-config
tags: ['SDK', 'Software Development Kit', 'EntitlementRevocationRequestConfig', 'V2025EntitlementRevocationRequestConfig']
---


# EntitlementRevocationRequestConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ApprovalSchemes** | [**[]EntitlementApprovalScheme**](entitlement-approval-scheme) | Ordered list of approval steps for the access request. Empty when no approval is required. | [optional] 

## Examples

- Prepare the resource
```powershell
$EntitlementRevocationRequestConfig = Initialize-V2025EntitlementRevocationRequestConfig  -ApprovalSchemes null
```

- Convert the resource to JSON
```powershell
$EntitlementRevocationRequestConfig | ConvertTo-JSON
```


[[Back to top]](#) 

