---
id: beta-identity-attributes-changed
title: IdentityAttributesChanged
pagination_label: IdentityAttributesChanged
sidebar_label: IdentityAttributesChanged
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'IdentityAttributesChanged', 'BetaIdentityAttributesChanged'] 
slug: /tools/sdk/python/beta/models/identity-attributes-changed
tags: ['SDK', 'Software Development Kit', 'IdentityAttributesChanged', 'BetaIdentityAttributesChanged']
---

# IdentityAttributesChanged


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identity** | [**IdentityAttributesChangedIdentity**](identity-attributes-changed-identity) |  | [required]
**changes** | [**[]IdentityAttributesChangedChangesInner**](identity-attributes-changed-changes-inner) | A list of one or more identity attributes that changed on the identity. | [required]
}

## Example

```python
from sailpoint.beta.models.identity_attributes_changed import IdentityAttributesChanged

identity_attributes_changed = IdentityAttributesChanged(
identity=sailpoint.beta.models.identity_attributes_changed_identity.IdentityAttributesChanged_identity(
                    type = 'IDENTITY', 
                    id = '2c7180a46faadee4016fb4e018c20642', 
                    name = 'Michael Michaels', ),
changes=[
                    sailpoint.beta.models.identity_attributes_changed_changes_inner.IdentityAttributesChanged_changes_inner(
                        attribute = 'department', 
                        old_value = sales, 
                        new_value = marketing, )
                    ]
)

```
[[Back to top]](#) 

