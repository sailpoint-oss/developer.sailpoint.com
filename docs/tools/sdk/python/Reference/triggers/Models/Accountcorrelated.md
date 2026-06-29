---
id: accountcorrelated
title: Accountcorrelated
pagination_label: Accountcorrelated
sidebar_label: Accountcorrelated
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Accountcorrelated', 'Accountcorrelated'] 
slug: /tools/sdk/python/triggers/models/accountcorrelated
tags: ['SDK', 'Software Development Kit', 'Accountcorrelated', 'Accountcorrelated']
---

# Accountcorrelated


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identity** | [**AccountcorrelatedIdentity**](accountcorrelated-identity) |  | [required]
**source** | [**AccountcorrelatedSource**](accountcorrelated-source) |  | [required]
**account** | [**AccountcorrelatedAccount**](accountcorrelated-account) |  | [required]
**attributes** | **map[string]object** | The attributes associated with the account.  Attributes are unique per source. | [required]
**entitlement_count** | **int** | The number of entitlements associated with this account. | [optional] 
}

## Example

```python
from sailpoint.triggers.models.accountcorrelated import Accountcorrelated

accountcorrelated = Accountcorrelated(
identity=sailpoint.triggers.models.accountcorrelated_identity.accountcorrelated_identity(
                    type = 'IDENTITY', 
                    id = '2c7180a46faadee4016fb4e018c20642', 
                    name = 'Michael Michaels', ),
source=sailpoint.triggers.models.accountcorrelated_source.accountcorrelated_source(
                    type = 'SOURCE', 
                    id = '2c9180835d191a86015d28455b4b232a', 
                    name = 'HR Active Directory', ),
account=sailpoint.triggers.models.accountcorrelated_account.accountcorrelated_account(
                    type = 'ACCOUNT', 
                    id = '98da47c31df444558c211f9b205184f6', 
                    name = 'Brian Mendoza', 
                    native_identity = 'cn=john.doe,ou=users,dc=acme,dc=com', 
                    uuid = '1cb1f07d-3e5a-4431-becd-234fa4306108', ),
attributes={"sn":"doe","givenName":"john","memberOf":["cn=g1,ou=groups,dc=acme,dc=com","cn=g2,ou=groups,dc=acme,dc=com","cn=g3,ou=groups,dc=acme,dc=com"]},
entitlement_count=0
)

```
[[Back to top]](#) 

