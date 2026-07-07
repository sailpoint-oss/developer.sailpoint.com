---
id: accountcorrelated
title: Accountcorrelated
pagination_label: Accountcorrelated
sidebar_label: Accountcorrelated
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Accountcorrelated', 'Accountcorrelated'] 
slug: /tools/sdk/powershell/triggers/models/accountcorrelated
tags: ['SDK', 'Software Development Kit', 'Accountcorrelated', 'Accountcorrelated']
---


# Accountcorrelated

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Identity** | [**AccountcorrelatedIdentity**](accountcorrelated-identity) |  | [required]
**Source** | [**AccountcorrelatedSource**](accountcorrelated-source) |  | [required]
**Account** | [**AccountcorrelatedAccount**](accountcorrelated-account) |  | [required]
**Attributes** | [**map[string]AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | The attributes associated with the account.  Attributes are unique per source. | [required]
**EntitlementCount** | **Int32** | The number of entitlements associated with this account. | [optional] 

## Examples

- Prepare the resource
```powershell
$Accountcorrelated = Initialize-Accountcorrelated  -Identity null `
 -Source null `
 -Account null `
 -Attributes {"sn":"doe","givenName":"john","memberOf":["cn=g1,ou=groups,dc=acme,dc=com","cn=g2,ou=groups,dc=acme,dc=com","cn=g3,ou=groups,dc=acme,dc=com"]} `
 -EntitlementCount 0
```

- Convert the resource to JSON
```powershell
$Accountcorrelated | ConvertTo-JSON
```


[[Back to top]](#) 

