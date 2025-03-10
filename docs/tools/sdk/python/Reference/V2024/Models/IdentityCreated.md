---
id: v2024-identity-created
title: IdentityCreated
pagination_label: IdentityCreated
sidebar_label: IdentityCreated
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'IdentityCreated', 'V2024IdentityCreated'] 
slug: /tools/sdk/python/v2024/models/identity-created
tags: ['SDK', 'Software Development Kit', 'IdentityCreated', 'V2024IdentityCreated']
---

# IdentityCreated


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identity** | [**IdentityCreatedIdentity**](identity-created-identity) |  | [required]
**attributes** | **map[string]object** | The attributes assigned to the identity. Attributes are determined by the identity profile. | [required]
}

## Example

```python
from sailpoint.v2024.models.identity_created import IdentityCreated

identity_created = IdentityCreated(
identity=sailpoint.v2024.models.identity_created_identity.IdentityCreated_identity(
                    type = 'IDENTITY', 
                    id = '2c7180a46faadee4016fb4e018c20642', 
                    name = 'Michael Michaels', ),
attributes={firstname=John}
)

```
[[Back to top]](#) 

