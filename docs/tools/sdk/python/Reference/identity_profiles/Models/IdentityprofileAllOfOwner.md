---
id: identityprofile-all-of-owner
title: IdentityprofileAllOfOwner
pagination_label: IdentityprofileAllOfOwner
sidebar_label: IdentityprofileAllOfOwner
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'IdentityprofileAllOfOwner', 'IdentityprofileAllOfOwner'] 
slug: /tools/sdk/python/identity-profiles/models/identityprofile-all-of-owner
tags: ['SDK', 'Software Development Kit', 'IdentityprofileAllOfOwner', 'IdentityprofileAllOfOwner']
---

# IdentityprofileAllOfOwner

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
from sailpoint.identity_profiles.models.identityprofile_all_of_owner import IdentityprofileAllOfOwner

identityprofile_all_of_owner = IdentityprofileAllOfOwner(
type='IDENTITY',
id='2c9180835d191a86015d28455b4b232a',
name='William Wilson'
)

```
[[Back to top]](#) 

