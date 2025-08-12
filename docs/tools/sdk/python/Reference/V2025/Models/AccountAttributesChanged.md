---
id: v2025-account-attributes-changed
title: AccountAttributesChanged
pagination_label: AccountAttributesChanged
sidebar_label: AccountAttributesChanged
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccountAttributesChanged', 'V2025AccountAttributesChanged'] 
slug: /tools/sdk/python/v2025/models/account-attributes-changed
tags: ['SDK', 'Software Development Kit', 'AccountAttributesChanged', 'V2025AccountAttributesChanged']
---

# AccountAttributesChanged


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identity** | [**AccountAttributesChangedIdentity**](account-attributes-changed-identity) |  | [required]
**source** | [**AccountAttributesChangedSource**](account-attributes-changed-source) |  | [required]
**account** | [**AccountAttributesChangedAccount**](account-attributes-changed-account) |  | [required]
**changes** | [**[]AccountAttributesChangedChangesInner**](account-attributes-changed-changes-inner) | A list of attributes that changed. | [required]
}

## Example

```python
from sailpoint.v2025.models.account_attributes_changed import AccountAttributesChanged

account_attributes_changed = AccountAttributesChanged(
identity=sailpoint.v2025.models.account_attributes_changed_identity.AccountAttributesChanged_identity(
                    type = 'IDENTITY', 
                    id = '2c7180a46faadee4016fb4e018c20642', 
                    name = 'Michael Michaels', ),
source=sailpoint.v2025.models.account_attributes_changed_source.AccountAttributesChanged_source(
                    id = '4e4d982dddff4267ab12f0f1e72b5a6d', 
                    type = 'SOURCE', 
                    name = 'Corporate Active Directory', ),
account=sailpoint.v2025.models.account_attributes_changed_account.AccountAttributesChanged_account(
                    id = '52170a74-ca89-11ea-87d0-0242ac130003', 
                    uuid = '1cb1f07d-3e5a-4431-becd-234fa4306108', 
                    name = 'john.doe', 
                    native_identity = 'cn=john.doe,ou=users,dc=acme,dc=com', 
                    type = ACCOUNT, ),
changes=[
                    sailpoint.v2025.models.account_attributes_changed_changes_inner.AccountAttributesChanged_changes_inner(
                        attribute = 'sn', 
                        old_value = doe, 
                        new_value = ryans, )
                    ]
)

```
[[Back to top]](#) 

