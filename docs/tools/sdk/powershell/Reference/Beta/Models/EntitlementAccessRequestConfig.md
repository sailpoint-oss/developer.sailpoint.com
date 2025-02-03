---
id: beta-entitlement-access-request-config
title: EntitlementAccessRequestConfig
pagination_label: EntitlementAccessRequestConfig
sidebar_label: EntitlementAccessRequestConfig
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'EntitlementAccessRequestConfig', 'BetaEntitlementAccessRequestConfig'] 
slug: /tools/sdk/powershell/beta/models/entitlement-access-request-config
tags: ['SDK', 'Software Development Kit', 'EntitlementAccessRequestConfig', 'BetaEntitlementAccessRequestConfig']
---


# EntitlementAccessRequestConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ApprovalSchemes** | [**[]EntitlementApprovalScheme**](entitlement-approval-scheme) | Ordered list of approval steps for the access request. Empty when no approval is required. | [optional] 
**RequestCommentRequired** | **Boolean** | If the requester must provide a comment during access request. | [optional] [default to $false]
**DenialCommentRequired** | **Boolean** | If the reviewer must provide a comment when denying the access request. | [optional] [default to $false]

## Examples

- Prepare the resource
```powershell
$EntitlementAccessRequestConfig = Initialize-PSSailpoint.BetaEntitlementAccessRequestConfig  -ApprovalSchemes null `
 -RequestCommentRequired true `
 -DenialCommentRequired false
```

- Convert the resource to JSON
```powershell
$EntitlementAccessRequestConfig | ConvertTo-JSON
```


[[Back to top]](#) 

