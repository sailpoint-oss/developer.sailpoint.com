---
id: identityprofile-all-of-authoritative-source
title: IdentityprofileAllOfAuthoritativeSource
pagination_label: IdentityprofileAllOfAuthoritativeSource
sidebar_label: IdentityprofileAllOfAuthoritativeSource
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'IdentityprofileAllOfAuthoritativeSource', 'IdentityprofileAllOfAuthoritativeSource'] 
slug: /tools/sdk/python/identity-profiles/models/identityprofile-all-of-authoritative-source
tags: ['SDK', 'Software Development Kit', 'IdentityprofileAllOfAuthoritativeSource', 'IdentityprofileAllOfAuthoritativeSource']
---

# IdentityprofileAllOfAuthoritativeSource


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'SOURCE' ] | Authoritative source's object type. | [optional] 
**id** | **str** | Authoritative source's ID. | [optional] 
**name** | **str** | Authoritative source's name. | [optional] 
}

## Example

```python
from sailpoint.identity_profiles.models.identityprofile_all_of_authoritative_source import IdentityprofileAllOfAuthoritativeSource

identityprofile_all_of_authoritative_source = IdentityprofileAllOfAuthoritativeSource(
type='SOURCE',
id='2c9180835d191a86015d28455b4b232a',
name='HR Active Directory'
)

```
[[Back to top]](#) 

