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
**AllowEntitlementRequest** | **Boolean** | If this is true, entitlement requests are allowed. | [optional] [default to $false]
**RequestCommentsRequired** | **Boolean** | If this is true, comments are required to submit entitlement requests. | [optional] [default to $false]
**DeniedCommentsRequired** | **Boolean** | If this is true, comments are required to reject entitlement requests. | [optional] [default to $false]
**GrantRequestApprovalSchemes** | **String** | Approval schemes for granting entitlement request. This can be empty if no approval is needed. Multiple schemes must be comma-separated. The valid schemes are ""entitlementOwner"", ""sourceOwner"", ""manager"" and ""`workgroup:{id}`"". You can use multiple governance groups (workgroups).  | [optional] [default to "sourceOwner"]

## Examples

- Prepare the resource
```powershell
$EntitlementRequestConfig = Initialize-PSSailpoint.V2024EntitlementRequestConfig  -AllowEntitlementRequest true `
 -RequestCommentsRequired false `
 -DeniedCommentsRequired false `
 -GrantRequestApprovalSchemes entitlementOwner, sourceOwner, manager, workgroup:2c918084660f45d6016617daa9210584
```

- Convert the resource to JSON
```powershell
$EntitlementRequestConfig | ConvertTo-JSON
```


[[Back to top]](#) 

