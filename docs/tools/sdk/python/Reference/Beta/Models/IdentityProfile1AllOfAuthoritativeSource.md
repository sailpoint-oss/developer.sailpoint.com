---
id: beta-identity-profile1-all-of-authoritative-source
title: IdentityProfile1AllOfAuthoritativeSource
pagination_label: IdentityProfile1AllOfAuthoritativeSource
sidebar_label: IdentityProfile1AllOfAuthoritativeSource
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'IdentityProfile1AllOfAuthoritativeSource', 'BetaIdentityProfile1AllOfAuthoritativeSource'] 
slug: /tools/sdk/python/beta/models/identity-profile1-all-of-authoritative-source
tags: ['SDK', 'Software Development Kit', 'IdentityProfile1AllOfAuthoritativeSource', 'BetaIdentityProfile1AllOfAuthoritativeSource']
---

# IdentityProfile1AllOfAuthoritativeSource


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'SOURCE' ] | Type of the object to which this reference applies | [optional] 
**id** | **str** | ID of the object to which this reference applies | [optional] 
**name** | **str** | Human-readable display name of the object to which this reference applies | [optional] 
}

## Example

```python
from sailpoint.beta.models.identity_profile1_all_of_authoritative_source import IdentityProfile1AllOfAuthoritativeSource

identity_profile1_all_of_authoritative_source = IdentityProfile1AllOfAuthoritativeSource(
type='SOURCE',
id='2c9180835d191a86015d28455b4b232a',
name='HR Active Directory'
)

```
[[Back to top]](#) 

