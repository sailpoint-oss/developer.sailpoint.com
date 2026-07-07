---
id: multihostintegrations-account-correlation-rule
title: MultihostintegrationsAccountCorrelationRule
pagination_label: MultihostintegrationsAccountCorrelationRule
sidebar_label: MultihostintegrationsAccountCorrelationRule
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'MultihostintegrationsAccountCorrelationRule', 'MultihostintegrationsAccountCorrelationRule'] 
slug: /tools/sdk/python/multi-host-integration/models/multihostintegrations-account-correlation-rule
tags: ['SDK', 'Software Development Kit', 'MultihostintegrationsAccountCorrelationRule', 'MultihostintegrationsAccountCorrelationRule']
---

# MultihostintegrationsAccountCorrelationRule

Reference to a rule that can do COMPLEX correlation. Only use this rule when you can't use accountCorrelationConfig.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'RULE' ] | Type of object being referenced. | [optional] 
**id** | **str** | Rule ID. | [optional] 
**name** | **str** | Rule's human-readable display name. | [optional] 
}

## Example

```python
from sailpoint.multi_host_integration.models.multihostintegrations_account_correlation_rule import MultihostintegrationsAccountCorrelationRule

multihostintegrations_account_correlation_rule = MultihostintegrationsAccountCorrelationRule(
type='RULE',
id='2c918085708c274401708c2a8a760001',
name='Example Rule'
)

```
[[Back to top]](#) 

