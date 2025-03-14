---
id: identity-profiles-connections
title: IdentityProfilesConnections
pagination_label: IdentityProfilesConnections
sidebar_label: IdentityProfilesConnections
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'IdentityProfilesConnections', 'IdentityProfilesConnections'] 
slug: /tools/sdk/python/v3/models/identity-profiles-connections
tags: ['SDK', 'Software Development Kit', 'IdentityProfilesConnections', 'IdentityProfilesConnections']
---

# IdentityProfilesConnections


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | ID of the IdentityProfile this reference applies | [optional] 
**name** | **str** | Human-readable display name of the IdentityProfile to which this reference applies | [optional] 
**identity_count** | **int** | The Number of Identities managed by this IdentityProfile | [optional] 
}

## Example

```python
from sailpoint.v3.models.identity_profiles_connections import IdentityProfilesConnections

identity_profiles_connections = IdentityProfilesConnections(
id='76cfddb62818416f816bc494410f46c4',
name='ODS-Identity-Profile',
identity_count=100
)

```
[[Back to top]](#) 

