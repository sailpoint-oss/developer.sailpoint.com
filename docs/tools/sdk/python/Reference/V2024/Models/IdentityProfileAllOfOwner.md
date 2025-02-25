---
id: v2024-identity-profile-all-of-owner
title: IdentityProfileAllOfOwner
pagination_label: IdentityProfileAllOfOwner
sidebar_label: IdentityProfileAllOfOwner
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'IdentityProfileAllOfOwner', 'V2024IdentityProfileAllOfOwner'] 
slug: /tools/sdk/python/v2024/models/identity-profile-all-of-owner
tags: ['SDK', 'Software Development Kit', 'IdentityProfileAllOfOwner', 'V2024IdentityProfileAllOfOwner']
---

# IdentityProfileAllOfOwner

The owner of the Identity Profile.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'IDENTITY' ] | Type of the object to which this reference applies | [optional] 
**id** | **str** | ID of the object to which this reference applies | [optional] 
**name** | **str** | Human-readable display name of the object to which this reference applies | [optional] 
}

## Example

```python
from sailpoint.v2024.models.identity_profile_all_of_owner import IdentityProfileAllOfOwner

identity_profile_all_of_owner = IdentityProfileAllOfOwner(
type='IDENTITY',
id='2c9180835d191a86015d28455b4b232a',
name='William Wilson'
)

```
[[Back to top]](#) 

