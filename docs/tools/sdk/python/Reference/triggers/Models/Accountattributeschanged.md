---
id: accountattributeschanged
title: Accountattributeschanged
pagination_label: Accountattributeschanged
sidebar_label: Accountattributeschanged
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Accountattributeschanged', 'Accountattributeschanged'] 
slug: /tools/sdk/python/triggers/models/accountattributeschanged
tags: ['SDK', 'Software Development Kit', 'Accountattributeschanged', 'Accountattributeschanged']
---

# Accountattributeschanged


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identity** | [**AccountattributeschangedIdentity**](accountattributeschanged-identity) |  | [required]
**source** | [**AccountattributeschangedSource**](accountattributeschanged-source) |  | [required]
**account** | [**AccountattributeschangedAccount**](accountattributeschanged-account) |  | [required]
**changes** | [**[]AccountattributeschangedChangesInner**](accountattributeschanged-changes-inner) | A list of attributes that changed. | [required]
}

## Example

```python
from sailpoint.triggers.models.accountattributeschanged import Accountattributeschanged

accountattributeschanged = Accountattributeschanged(
identity=sailpoint.triggers.models.accountattributeschanged_identity.accountattributeschanged_identity(
                    type = 'IDENTITY', 
                    id = '2c7180a46faadee4016fb4e018c20642', 
                    name = 'Michael Michaels', ),
source=sailpoint.triggers.models.accountattributeschanged_source.accountattributeschanged_source(
                    id = '4e4d982dddff4267ab12f0f1e72b5a6d', 
                    type = 'SOURCE', 
                    name = 'Corporate Active Directory', ),
account=sailpoint.triggers.models.accountattributeschanged_account.accountattributeschanged_account(
                    id = '52170a74-ca89-11ea-87d0-0242ac130003', 
                    uuid = '1cb1f07d-3e5a-4431-becd-234fa4306108', 
                    name = 'john.doe', 
                    native_identity = 'cn=john.doe,ou=users,dc=acme,dc=com', 
                    type = 'ACCOUNT', ),
changes=[
                    sailpoint.triggers.models.accountattributeschanged_changes_inner.accountattributeschanged_changes_inner(
                        attribute = 'sn', 
                        old_value = doe, 
                        new_value = ryans, )
                    ]
)

```
[[Back to top]](#) 

