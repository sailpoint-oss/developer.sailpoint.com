---
id: beforeprovisioningruledto
title: Beforeprovisioningruledto
pagination_label: Beforeprovisioningruledto
sidebar_label: Beforeprovisioningruledto
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Beforeprovisioningruledto', 'Beforeprovisioningruledto'] 
slug: /tools/sdk/python/sim-integrations/models/beforeprovisioningruledto
tags: ['SDK', 'Software Development Kit', 'Beforeprovisioningruledto', 'Beforeprovisioningruledto']
---

# Beforeprovisioningruledto

Before Provisioning Rule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'RULE' ] | Before Provisioning Rule DTO type. | [optional] 
**id** | **str** | Before Provisioning Rule ID. | [optional] 
**name** | **str** | Rule display name. | [optional] 
}

## Example

```python
from sailpoint.sim_integrations.models.beforeprovisioningruledto import Beforeprovisioningruledto

beforeprovisioningruledto = Beforeprovisioningruledto(
type='RULE',
id='048eb3d55c5a4758bd07dccb87741c78',
name='Before Provisioning Airtable Rule'
)

```
[[Back to top]](#) 

