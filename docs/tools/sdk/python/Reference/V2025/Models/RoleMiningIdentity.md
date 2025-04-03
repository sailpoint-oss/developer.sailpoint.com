---
id: v2025-role-mining-identity
title: RoleMiningIdentity
pagination_label: RoleMiningIdentity
sidebar_label: RoleMiningIdentity
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'RoleMiningIdentity', 'V2025RoleMiningIdentity'] 
slug: /tools/sdk/python/v2025/models/role-mining-identity
tags: ['SDK', 'Software Development Kit', 'RoleMiningIdentity', 'V2025RoleMiningIdentity']
---

# RoleMiningIdentity


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Id of the identity | [optional] 
**name** | **str** | Name of the identity | [optional] 
**attributes** | **map[string]str** |  | [optional] 
}

## Example

```python
from sailpoint.v2025.models.role_mining_identity import RoleMiningIdentity

role_mining_identity = RoleMiningIdentity(
id='2c9180877212632a017228d5934525e6',
name='Allene Abernathy-Welch',
attributes={jobTitle=SQL Developer, department=IT, location=NYC, firstName=Allene}
)

```
[[Back to top]](#) 

