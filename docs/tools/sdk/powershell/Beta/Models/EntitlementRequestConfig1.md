---
id: entitlement-request-config1
title: EntitlementRequestConfig1
pagination_label: EntitlementRequestConfig1
sidebar_label: EntitlementRequestConfig1
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'EntitlementRequestConfig1'] 
slug: /tools/sdk/powershell/beta/models/entitlement-request-config1
tags: ['SDK', 'Software Development Kit', 'EntitlementRequestConfig1']
---


# EntitlementRequestConfig1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AllowEntitlementRequest** |  Pointer to **Boolean** | Flag for allowing entitlement request. | [optional] 
**RequestCommentsRequired** |  Pointer to **Boolean** | Flag for requiring comments while submitting an entitlement request. | [optional] [default to $false]
**DeniedCommentsRequired** |  Pointer to **Boolean** | Flag for requiring comments while rejecting an entitlement request. | [optional] [default to $false]
**GrantRequestApprovalSchemes** |  Pointer to **String** | Approval schemes for granting entitlement request. This can be empty if no approval is needed. Multiple schemes must be comma-separated. The valid schemes are &quot;&quot;entitlementOwner&quot;&quot;, &quot;&quot;sourceOwner&quot;&quot;, &quot;&quot;manager&quot;&quot; and &quot;&quot;workgroup:{id}&quot;&quot;. Multiple workgroups (governance groups) can be used.  | [optional] [default to "sourceOwner"]

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

