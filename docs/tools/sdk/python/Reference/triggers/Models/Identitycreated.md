---
id: identitycreated
title: Identitycreated
pagination_label: Identitycreated
sidebar_label: Identitycreated
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Identitycreated', 'Identitycreated'] 
slug: /tools/sdk/python/triggers/models/identitycreated
tags: ['SDK', 'Software Development Kit', 'Identitycreated', 'Identitycreated']
---

# Identitycreated


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identity** | [**IdentitycreatedIdentity**](identitycreated-identity) |  | [required]
**attributes** | **map[string]object** | The attributes assigned to the identity. Attributes are determined by the identity profile. | [required]
}

## Example

```python
from sailpoint.triggers.models.identitycreated import Identitycreated

identitycreated = Identitycreated(
identity=sailpoint.triggers.models.identitycreated_identity.identitycreated_identity(
                    type = 'IDENTITY', 
                    id = '2c7180a46faadee4016fb4e018c20642', 
                    name = 'Michael Michaels', ),
attributes={"firstname":"John"}
)

```
[[Back to top]](#) 

