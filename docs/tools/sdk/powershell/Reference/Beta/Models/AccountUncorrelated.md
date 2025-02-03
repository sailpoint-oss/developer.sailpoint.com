---
id: beta-account-uncorrelated
title: AccountUncorrelated
pagination_label: AccountUncorrelated
sidebar_label: AccountUncorrelated
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccountUncorrelated', 'BetaAccountUncorrelated'] 
slug: /tools/sdk/powershell/beta/models/account-uncorrelated
tags: ['SDK', 'Software Development Kit', 'AccountUncorrelated', 'BetaAccountUncorrelated']
---


# AccountUncorrelated

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Identity** |  [**AccountUncorrelatedIdentity**](account-uncorrelated-identity) |  | [required]
**Source** |  [**AccountUncorrelatedSource**](account-uncorrelated-source) |  | [required]
**Account** |  [**AccountUncorrelatedAccount**](account-uncorrelated-account) |  | [required]
**EntitlementCount** |  Pointer to **Int32** | The number of entitlements associated with this account. | [optional] 

## Examples

- Prepare the resource
```powershell
$AccountUncorrelated = Initialize-PSSailpoint.BetaAccountUncorrelated  -Identity null `
 -Source null `
 -Account null `
 -EntitlementCount 0
```

- Convert the resource to JSON
```powershell
$AccountUncorrelated | ConvertTo-JSON
```


[[Back to top]](#) 

