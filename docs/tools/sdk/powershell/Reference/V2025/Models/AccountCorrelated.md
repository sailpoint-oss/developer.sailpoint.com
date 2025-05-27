---
id: v2025-account-correlated
title: AccountCorrelated
pagination_label: AccountCorrelated
sidebar_label: AccountCorrelated
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccountCorrelated', 'V2025AccountCorrelated'] 
slug: /tools/sdk/powershell/v2025/models/account-correlated
tags: ['SDK', 'Software Development Kit', 'AccountCorrelated', 'V2025AccountCorrelated']
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
$AccountCorrelated = Initialize-V2025AccountCorrelated  -Identity null `
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

