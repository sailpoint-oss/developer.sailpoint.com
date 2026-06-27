---
id: accountuncorrelated
title: Accountuncorrelated
pagination_label: Accountuncorrelated
sidebar_label: Accountuncorrelated
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Accountuncorrelated', 'Accountuncorrelated'] 
slug: /tools/sdk/python/triggers/models/accountuncorrelated
tags: ['SDK', 'Software Development Kit', 'Accountuncorrelated', 'Accountuncorrelated']
---

# Accountuncorrelated


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identity** | [**AccountuncorrelatedIdentity**](accountuncorrelated-identity) |  | [required]
**source** | [**AccountuncorrelatedSource**](accountuncorrelated-source) |  | [required]
**account** | [**AccountuncorrelatedAccount**](accountuncorrelated-account) |  | [required]
**entitlement_count** | **int** | The number of entitlements associated with this account. | [optional] 
}

## Example

```python
from sailpoint.triggers.models.accountuncorrelated import Accountuncorrelated

accountuncorrelated = Accountuncorrelated(
identity=sailpoint.triggers.models.accountuncorrelated_identity.accountuncorrelated_identity(
                    type = 'IDENTITY', 
                    id = '2c3780a46faadee4016fb4e018c20652', 
                    name = 'Allen Albertson', ),
source=sailpoint.triggers.models.accountuncorrelated_source.accountuncorrelated_source(
                    type = 'SOURCE', 
                    id = '2c6180835d191a86015d28455b4b231b', 
                    name = 'Corporate Directory', ),
account=sailpoint.triggers.models.accountuncorrelated_account.accountuncorrelated_account(
                    type = 'ACCOUNT', 
                    id = '4dd497e3723e439991cb6d0e478375dd', 
                    name = 'Sadie Jensen', 
                    native_identity = 'cn=john.doe,ou=users,dc=acme,dc=com', 
                    uuid = '1cb1f07d-3e5a-4431-becd-234fa4306108', ),
entitlement_count=0
)

```
[[Back to top]](#) 

