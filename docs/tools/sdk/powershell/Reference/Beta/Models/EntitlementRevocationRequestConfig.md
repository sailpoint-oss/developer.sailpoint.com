---
id: beta-entitlement-revocation-request-config
title: EntitlementRevocationRequestConfig
pagination_label: EntitlementRevocationRequestConfig
sidebar_label: EntitlementRevocationRequestConfig
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'EntitlementRevocationRequestConfig', 'BetaEntitlementRevocationRequestConfig'] 
slug: /tools/sdk/powershell/beta/models/entitlement-revocation-request-config
tags: ['SDK', 'Software Development Kit', 'EntitlementRevocationRequestConfig', 'BetaEntitlementRevocationRequestConfig']
---


# EntitlementRevocationRequestConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ApprovalSchemes** | [**[]EntitlementApprovalScheme**](entitlement-approval-scheme) | Ordered list of approval steps for the access request. Empty when no approval is required. | [optional] 

## Examples

- Prepare the resource
```powershell
$EntitlementRevocationRequestConfig = Initialize-BetaEntitlementRevocationRequestConfig  -ApprovalSchemes null
```

- Convert the resource to JSON
```powershell
$EntitlementRevocationRequestConfig | ConvertTo-JSON
```


[[Back to top]](#) 

