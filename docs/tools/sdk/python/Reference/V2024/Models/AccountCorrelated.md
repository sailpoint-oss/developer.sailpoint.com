---
id: v2024-account-correlated
title: AccountCorrelated
pagination_label: AccountCorrelated
sidebar_label: AccountCorrelated
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccountCorrelated', 'V2024AccountCorrelated'] 
slug: /tools/sdk/python/v2024/models/account-correlated
tags: ['SDK', 'Software Development Kit', 'AccountCorrelated', 'V2024AccountCorrelated']
---

# AccountCorrelated


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identity** | [**AccountCorrelatedIdentity**](account-correlated-identity) |  | [required]
**source** | [**AccountCorrelatedSource**](account-correlated-source) |  | [required]
**account** | [**AccountCorrelatedAccount**](account-correlated-account) |  | [required]
**attributes** | **map[string]object** | The attributes associated with the account.  Attributes are unique per source. | [required]
**entitlement_count** | **int** | The number of entitlements associated with this account. | [optional] 
}

## Example

```python
from sailpoint.v2024.models.account_correlated import AccountCorrelated

account_correlated = AccountCorrelated(
identity=sailpoint.v2024.models.account_correlated_identity.AccountCorrelated_identity(
                    type = 'IDENTITY', 
                    id = '2c7180a46faadee4016fb4e018c20642', 
                    name = 'Michael Michaels', ),
source=sailpoint.v2024.models.account_correlated_source.AccountCorrelated_source(
                    type = 'SOURCE', 
                    id = '2c9180835d191a86015d28455b4b232a', 
                    name = 'HR Active Directory', ),
account=sailpoint.v2024.models.account_correlated_account.AccountCorrelated_account(
                    type = 'ACCOUNT', 
                    id = '98da47c31df444558c211f9b205184f6', 
                    name = 'Brian Mendoza', 
                    native_identity = 'cn=john.doe,ou=users,dc=acme,dc=com', 
                    uuid = '1cb1f07d-3e5a-4431-becd-234fa4306108', ),
attributes={sn=doe, givenName=john, memberOf=[cn=g1,ou=groups,dc=acme,dc=com, cn=g2,ou=groups,dc=acme,dc=com, cn=g3,ou=groups,dc=acme,dc=com]},
entitlement_count=0
)

```
[[Back to top]](#) 

