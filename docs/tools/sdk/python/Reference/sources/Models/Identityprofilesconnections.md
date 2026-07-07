---
id: identityprofilesconnections
title: Identityprofilesconnections
pagination_label: Identityprofilesconnections
sidebar_label: Identityprofilesconnections
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Identityprofilesconnections', 'Identityprofilesconnections'] 
slug: /tools/sdk/python/sources/models/identityprofilesconnections
tags: ['SDK', 'Software Development Kit', 'Identityprofilesconnections', 'Identityprofilesconnections']
---

# Identityprofilesconnections


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | ID of the IdentityProfile this reference applies | [optional] 
**name** | **str** | Human-readable display name of the IdentityProfile to which this reference applies | [optional] 
**identity_count** | **int** | The Number of Identities managed by this IdentityProfile | [optional] 
}

## Example

```python
from sailpoint.sources.models.identityprofilesconnections import Identityprofilesconnections

identityprofilesconnections = Identityprofilesconnections(
id='76cfddb62818416f816bc494410f46c4',
name='ODS-Identity-Profile',
identity_count=100
)

```
[[Back to top]](#) 

