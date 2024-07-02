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
**Attributes** |  [map[string] **Any**] | The attributes associated with the account.  Attributes are unique per source. | 
**EntitlementCount** |  Pointer to **Int32** | The number of entitlements associated with this account. | [optional] 

## Examples

- Prepare the resource
```powershell
$AccountCorrelated = Initialize-BetaAccountCorrelated  -Identity null `
 -Source null `
 -Account null `
 -Attributes {sn=doe, givenName=john, memberOf=[cn=g1,ou=groups,dc=acme,dc=com, cn=g2,ou=groups,dc=acme,dc=com, cn=g3,ou=groups,dc=acme,dc=com]} `
 -EntitlementCount 0
```

- Convert the resource to JSON
```powershell
$AccountCorrelated | ConvertTo-JSON
```


[[Back to top]](#) 

