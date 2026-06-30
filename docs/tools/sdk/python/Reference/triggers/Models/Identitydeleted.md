---
id: identitydeleted
title: Identitydeleted
pagination_label: Identitydeleted
sidebar_label: Identitydeleted
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Identitydeleted', 'Identitydeleted'] 
slug: /tools/sdk/python/triggers/models/identitydeleted
tags: ['SDK', 'Software Development Kit', 'Identitydeleted', 'Identitydeleted']
---

# Identitydeleted


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identity** | [**IdentitydeletedIdentity**](identitydeleted-identity) |  | [required]
**attributes** | **map[string]object** | The attributes assigned to the identity. Attributes are determined by the identity profile. | [required]
}

## Example

```python
from sailpoint.triggers.models.identitydeleted import Identitydeleted

identitydeleted = Identitydeleted(
identity=sailpoint.triggers.models.identitydeleted_identity.identitydeleted_identity(
                    type = 'IDENTITY', 
                    id = '2c7180a46faadee4016fb4e018c20642', 
                    name = 'Michael Michaels', ),
attributes={"firstname":"John"}
)

```
[[Back to top]](#) 

