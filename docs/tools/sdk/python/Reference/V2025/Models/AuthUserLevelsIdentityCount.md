---
id: v2025-auth-user-levels-identity-count
title: AuthUserLevelsIdentityCount
pagination_label: AuthUserLevelsIdentityCount
sidebar_label: AuthUserLevelsIdentityCount
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AuthUserLevelsIdentityCount', 'V2025AuthUserLevelsIdentityCount'] 
slug: /tools/sdk/python/v2025/models/auth-user-levels-identity-count
tags: ['SDK', 'Software Development Kit', 'AuthUserLevelsIdentityCount', 'V2025AuthUserLevelsIdentityCount']
---

# AuthUserLevelsIdentityCount


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The unique identifier of the user level. | [optional] 
**count** | **int** | Number of identities having this user level. | [optional] 
}

## Example

```python
from sailpoint.v2025.models.auth_user_levels_identity_count import AuthUserLevelsIdentityCount

auth_user_levels_identity_count = AuthUserLevelsIdentityCount(
id='idn:access-request-administrator',
count=10
)

```
[[Back to top]](#) 

