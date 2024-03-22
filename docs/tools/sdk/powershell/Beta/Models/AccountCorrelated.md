---
id: account-correlated
title: AccountCorrelated
pagination_label: AccountCorrelated
sidebar_label: AccountCorrelated
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'AccountCorrelated'] 
slug: /tools/sdk/powershell/beta/models/account-correlated
tags: ['SDK', 'Software Development Kit', 'AccountCorrelated']
---


# AccountCorrelated

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Identity** |  [**AccountCorrelatedIdentity**](account-correlated-identity) |  | 
**Source** |  [**AccountCorrelatedSource**](account-correlated-source) |  | 
**Account** |  [**AccountCorrelatedAccount**](account-correlated-account) |  | 
**Attributes** |  [**map[string]AnyType**](any-type) | The attributes associated with the account.  Attributes are unique per source. | 
**EntitlementCount** |  Pointer to **Int32** | The number of entitlements associated with this account. | [optional] 

## Examples

- Prepare the resource
```powershell
$AccountCorrelated = Initialize-PSSailpointBetaAccountCorrelated  -Identity null `
 -Source null `
 -Account null `
 -Attributes {sn&#x3D;doe, givenName&#x3D;john, memberOf&#x3D;[cn&#x3D;g1,ou&#x3D;groups,dc&#x3D;acme,dc&#x3D;com, cn&#x3D;g2,ou&#x3D;groups,dc&#x3D;acme,dc&#x3D;com, cn&#x3D;g3,ou&#x3D;groups,dc&#x3D;acme,dc&#x3D;com]} `
 -EntitlementCount 0
```

- Convert the resource to JSON
```powershell
$AccountCorrelated | ConvertTo-JSON
```


[[Back to top]](#) 

