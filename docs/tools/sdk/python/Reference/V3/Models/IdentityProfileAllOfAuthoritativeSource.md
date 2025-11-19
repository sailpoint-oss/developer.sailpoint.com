---
id: identity-profile-all-of-authoritative-source
title: IdentityProfileAllOfAuthoritativeSource
pagination_label: IdentityProfileAllOfAuthoritativeSource
sidebar_label: IdentityProfileAllOfAuthoritativeSource
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'IdentityProfileAllOfAuthoritativeSource', 'IdentityProfileAllOfAuthoritativeSource'] 
slug: /tools/sdk/python/v3/models/identity-profile-all-of-authoritative-source
tags: ['SDK', 'Software Development Kit', 'IdentityProfileAllOfAuthoritativeSource', 'IdentityProfileAllOfAuthoritativeSource']
---

# IdentityProfileAllOfAuthoritativeSource


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'SOURCE' ] | Authoritative source's object type. | [optional] 
**id** | **str** | Authoritative source's ID. | [optional] 
**name** | **str** | Authoritative source's name. | [optional] 
}

## Example

```python
from sailpoint.v3.models.identity_profile_all_of_authoritative_source import IdentityProfileAllOfAuthoritativeSource

identity_profile_all_of_authoritative_source = IdentityProfileAllOfAuthoritativeSource(
type='SOURCE',
id='2c9180835d191a86015d28455b4b232a',
name='HR Active Directory'
)

```
[[Back to top]](#) 

