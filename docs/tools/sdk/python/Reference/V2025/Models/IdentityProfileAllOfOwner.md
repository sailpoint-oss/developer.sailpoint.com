---
id: v2025-identity-profile-all-of-owner
title: IdentityProfileAllOfOwner
pagination_label: IdentityProfileAllOfOwner
sidebar_label: IdentityProfileAllOfOwner
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'IdentityProfileAllOfOwner', 'V2025IdentityProfileAllOfOwner'] 
slug: /tools/sdk/python/v2025/models/identity-profile-all-of-owner
tags: ['SDK', 'Software Development Kit', 'IdentityProfileAllOfOwner', 'V2025IdentityProfileAllOfOwner']
---

# IdentityProfileAllOfOwner

Identity profile's owner.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'IDENTITY' ] | Owner's object type. | [optional] 
**id** | **str** | Owner's ID. | [optional] 
**name** | **str** | Owner's name. | [optional] 
}

## Example

```python
from sailpoint.v2025.models.identity_profile_all_of_owner import IdentityProfileAllOfOwner

identity_profile_all_of_owner = IdentityProfileAllOfOwner(
type='IDENTITY',
id='2c9180835d191a86015d28455b4b232a',
name='William Wilson'
)

```
[[Back to top]](#) 

