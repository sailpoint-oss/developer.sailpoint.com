---
id: beta-multi-host-integrations-owner
title: MultiHostIntegrationsOwner
pagination_label: MultiHostIntegrationsOwner
sidebar_label: MultiHostIntegrationsOwner
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'MultiHostIntegrationsOwner', 'BetaMultiHostIntegrationsOwner'] 
slug: /tools/sdk/python/beta/models/multi-host-integrations-owner
tags: ['SDK', 'Software Development Kit', 'MultiHostIntegrationsOwner', 'BetaMultiHostIntegrationsOwner']
---

# MultiHostIntegrationsOwner

Reference to identity object who owns the source.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'IDENTITY' ] | Type of object being referenced. | [optional] 
**id** | **str** | Owner identity's ID. | [optional] 
**name** | **str** | Owner identity's human-readable display name. | [optional] 
}

## Example

```python
from sailpoint.beta.models.multi_host_integrations_owner import MultiHostIntegrationsOwner

multi_host_integrations_owner = MultiHostIntegrationsOwner(
type='IDENTITY',
id='2c91808568c529c60168cca6f90c1313',
name='MyName'
)

```
[[Back to top]](#) 

