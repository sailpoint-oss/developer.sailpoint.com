---
id: multihostintegrations-manager-correlation-rule
title: MultihostintegrationsManagerCorrelationRule
pagination_label: MultihostintegrationsManagerCorrelationRule
sidebar_label: MultihostintegrationsManagerCorrelationRule
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'MultihostintegrationsManagerCorrelationRule', 'MultihostintegrationsManagerCorrelationRule'] 
slug: /tools/sdk/python/multi-host-integration/models/multihostintegrations-manager-correlation-rule
tags: ['SDK', 'Software Development Kit', 'MultihostintegrationsManagerCorrelationRule', 'MultihostintegrationsManagerCorrelationRule']
---

# MultihostintegrationsManagerCorrelationRule

Reference to the ManagerCorrelationRule. Only use this rule when a simple filter isn't sufficient.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'RULE' ] | Type of object being referenced. | [optional] 
**id** | **str** | Rule ID. | [optional] 
**name** | **str** | Rule's human-readable display name. | [optional] 
}

## Example

```python
from sailpoint.multi_host_integration.models.multihostintegrations_manager_correlation_rule import MultihostintegrationsManagerCorrelationRule

multihostintegrations_manager_correlation_rule = MultihostintegrationsManagerCorrelationRule(
type='RULE',
id='2c918085708c274401708c2a8a760001',
name='Example Rule'
)

```
[[Back to top]](#) 

