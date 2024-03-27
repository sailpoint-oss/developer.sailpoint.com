---
id: account-uncorrelated
title: AccountUncorrelated
pagination_label: AccountUncorrelated
sidebar_label: AccountUncorrelated
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'AccountUncorrelated'] 
slug: /tools/sdk/powershell/beta/models/account-uncorrelated
tags: ['SDK', 'Software Development Kit', 'AccountUncorrelated']
---


# AccountUncorrelated

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Identity** |  [**AccountUncorrelatedIdentity**](account-uncorrelated-identity) |  | 
**Source** |  [**AccountUncorrelatedSource**](account-uncorrelated-source) |  | 
**Account** |  [**AccountUncorrelatedAccount**](account-uncorrelated-account) |  | 
**EntitlementCount** |  Pointer to **Int32** | The number of entitlements associated with this account. | [optional] 

## Examples

- Prepare the resource
```powershell
$AccountUncorrelated = Initialize-PSSailpointBetaAccountUncorrelated  -Identity null `
 -Source null `
 -Account null `
 -EntitlementCount 0
```

- Convert the resource to JSON
```powershell
$AccountUncorrelated | ConvertTo-JSON
```


[[Back to top]](#) 

