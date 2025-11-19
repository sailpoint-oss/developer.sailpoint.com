---
id: beta-entitlement-request-config1
title: EntitlementRequestConfig1
pagination_label: EntitlementRequestConfig1
sidebar_label: EntitlementRequestConfig1
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'EntitlementRequestConfig1', 'BetaEntitlementRequestConfig1'] 
slug: /tools/sdk/powershell/beta/models/entitlement-request-config1
tags: ['SDK', 'Software Development Kit', 'EntitlementRequestConfig1', 'BetaEntitlementRequestConfig1']
---


# EntitlementRequestConfig1

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
$EntitlementRequestConfig1 = Initialize-BetaEntitlementRequestConfig1  -AllowEntitlementRequest true `
 -RequestCommentsRequired false `
 -DeniedCommentsRequired false `
 -GrantRequestApprovalSchemes entitlementOwner, sourceOwner, manager, workgroup:2c918084660f45d6016617daa9210584
```

- Convert the resource to JSON
```powershell
$EntitlementRequestConfig1 | ConvertTo-JSON
```


[[Back to top]](#) 

