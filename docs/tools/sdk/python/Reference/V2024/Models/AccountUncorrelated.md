---
id: v2024-account-uncorrelated
title: AccountUncorrelated
pagination_label: AccountUncorrelated
sidebar_label: AccountUncorrelated
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccountUncorrelated', 'V2024AccountUncorrelated'] 
slug: /tools/sdk/python/v2024/models/account-uncorrelated
tags: ['SDK', 'Software Development Kit', 'AccountUncorrelated', 'V2024AccountUncorrelated']
---

# AccountUncorrelated


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identity** | [**AccountUncorrelatedIdentity**](account-uncorrelated-identity) |  | [required]
**source** | [**AccountUncorrelatedSource**](account-uncorrelated-source) |  | [required]
**account** | [**AccountUncorrelatedAccount**](account-uncorrelated-account) |  | [required]
**entitlement_count** | **int** | The number of entitlements associated with this account. | [optional] 
}

## Example

```python
from sailpoint.v2024.models.account_uncorrelated import AccountUncorrelated

account_uncorrelated = AccountUncorrelated(
identity=sailpoint.v2024.models.account_uncorrelated_identity.AccountUncorrelated_identity(
                    type = 'IDENTITY', 
                    id = '2c3780a46faadee4016fb4e018c20652', 
                    name = 'Allen Albertson', ),
source=sailpoint.v2024.models.account_uncorrelated_source.AccountUncorrelated_source(
                    type = 'SOURCE', 
                    id = '2c6180835d191a86015d28455b4b231b', 
                    name = 'Corporate Directory', ),
account=sailpoint.v2024.models.account_uncorrelated_account.AccountUncorrelated_account(
                    type = ACCOUNT, 
                    id = '4dd497e3723e439991cb6d0e478375dd', 
                    name = 'Sadie Jensen', 
                    native_identity = 'cn=john.doe,ou=users,dc=acme,dc=com', 
                    uuid = '1cb1f07d-3e5a-4431-becd-234fa4306108', ),
entitlement_count=0
)

```
[[Back to top]](#) 

