---
id: v2024-identity-profile-all-of-authoritative-source
title: IdentityProfileAllOfAuthoritativeSource
pagination_label: IdentityProfileAllOfAuthoritativeSource
sidebar_label: IdentityProfileAllOfAuthoritativeSource
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'IdentityProfileAllOfAuthoritativeSource', 'V2024IdentityProfileAllOfAuthoritativeSource'] 
slug: /tools/sdk/python/v2024/models/identity-profile-all-of-authoritative-source
tags: ['SDK', 'Software Development Kit', 'IdentityProfileAllOfAuthoritativeSource', 'V2024IdentityProfileAllOfAuthoritativeSource']
---

# IdentityProfileAllOfAuthoritativeSource


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'SOURCE' ] | Type of the object to which this reference applies | [optional] 
**id** | **str** | ID of the object to which this reference applies | [optional] 
**name** | **str** | Human-readable display name of the object to which this reference applies | [optional] 
}

## Example

```python
from sailpoint.v2024.models.identity_profile_all_of_authoritative_source import IdentityProfileAllOfAuthoritativeSource

identity_profile_all_of_authoritative_source = IdentityProfileAllOfAuthoritativeSource(
type='SOURCE',
id='2c9180835d191a86015d28455b4b232a',
name='HR Active Directory'
)

```
[[Back to top]](#) 

