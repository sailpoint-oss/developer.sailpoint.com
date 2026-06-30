---
id: servicedesksource
title: Servicedesksource
pagination_label: Servicedesksource
sidebar_label: Servicedesksource
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Servicedesksource', 'Servicedesksource'] 
slug: /tools/sdk/python/sim-integrations/models/servicedesksource
tags: ['SDK', 'Software Development Kit', 'Servicedesksource', 'Servicedesksource']
---

# Servicedesksource

Source for Service Desk integration template.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'SOURCE' ] | DTO type of source for service desk integration template. | [optional] 
**id** | **str** | ID of source for service desk integration template. | [optional] 
**name** | **str** | Human-readable name of source for service desk integration template. | [optional] 
}

## Example

```python
from sailpoint.sim_integrations.models.servicedesksource import Servicedesksource

servicedesksource = Servicedesksource(
type='SOURCE',
id='2c9180835d191a86015d28455b4b232a',
name='HR Active Directory'
)

```
[[Back to top]](#) 

