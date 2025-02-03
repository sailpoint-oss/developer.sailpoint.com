---
id: beta-account-correlated
title: AccountCorrelated
pagination_label: AccountCorrelated
sidebar_label: AccountCorrelated
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccountCorrelated', 'BetaAccountCorrelated'] 
slug: /tools/sdk/powershell/beta/models/account-correlated
tags: ['SDK', 'Software Development Kit', 'AccountCorrelated', 'BetaAccountCorrelated']
---


# AccountCorrelated

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Identity** | [**AccountCorrelatedIdentity**](account-correlated-identity) |  | [required]
**Source** | [**AccountCorrelatedSource**](account-correlated-source) |  | [required]
**Account** | [**AccountCorrelatedAccount**](account-correlated-account) |  | [required]
**Attributes** | [**map[string]AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | The attributes associated with the account.  Attributes are unique per source. | [required]
**EntitlementCount** | **Int32** | The number of entitlements associated with this account. | [optional] 

## Examples

- Prepare the resource
```powershell
$AccountCorrelated = Initialize-PSSailpoint.BetaAccountCorrelated  -Identity null `
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

