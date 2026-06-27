---
id: identityattributeschanged
title: Identityattributeschanged
pagination_label: Identityattributeschanged
sidebar_label: Identityattributeschanged
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Identityattributeschanged', 'Identityattributeschanged'] 
slug: /tools/sdk/python/triggers/models/identityattributeschanged
tags: ['SDK', 'Software Development Kit', 'Identityattributeschanged', 'Identityattributeschanged']
---

# Identityattributeschanged


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identity** | [**IdentityattributeschangedIdentity**](identityattributeschanged-identity) |  | [required]
**changes** | [**[]IdentityattributeschangedChangesInner**](identityattributeschanged-changes-inner) | A list of one or more identity attributes that changed on the identity. | [required]
}

## Example

```python
from sailpoint.triggers.models.identityattributeschanged import Identityattributeschanged

identityattributeschanged = Identityattributeschanged(
identity=sailpoint.triggers.models.identityattributeschanged_identity.identityattributeschanged_identity(
                    type = 'IDENTITY', 
                    id = '2c7180a46faadee4016fb4e018c20642', 
                    name = 'Michael Michaels', ),
changes=[
                    sailpoint.triggers.models.identityattributeschanged_changes_inner.identityattributeschanged_changes_inner(
                        attribute = 'department', 
                        old_value = sales, 
                        new_value = marketing, )
                    ]
)

```
[[Back to top]](#) 

