---
id: beta-entitlement-owner
title: EntitlementOwner
pagination_label: EntitlementOwner
sidebar_label: EntitlementOwner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'EntitlementOwner', 'BetaEntitlementOwner'] 
slug: /tools/sdk/powershell/beta/models/entitlement-owner
tags: ['SDK', 'Software Development Kit', 'EntitlementOwner', 'BetaEntitlementOwner']
---


# EntitlementOwner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **String** | The owner id for the entitlement | [optional] 
**Name** |  Pointer to **String** | The owner name for the entitlement | [optional] 
**Type** |  Pointer to  **Enum** [  "IDENTITY" ] | The type of the owner. Initially only type IDENTITY is supported | [optional] 

## Examples

- Prepare the resource
```powershell
$EntitlementOwner = Initialize-PSSailpoint.BetaEntitlementOwner  -Id 2a2fdacca5e345f18bf7970cfbb8fec2 `
 -Name identity 1 `
 -Type IDENTITY
```

- Convert the resource to JSON
```powershell
$EntitlementOwner | ConvertTo-JSON
```


[[Back to top]](#) 

