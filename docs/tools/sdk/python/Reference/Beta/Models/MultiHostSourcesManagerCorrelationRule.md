---
id: beta-multi-host-sources-manager-correlation-rule
title: MultiHostSourcesManagerCorrelationRule
pagination_label: MultiHostSourcesManagerCorrelationRule
sidebar_label: MultiHostSourcesManagerCorrelationRule
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'MultiHostSourcesManagerCorrelationRule', 'BetaMultiHostSourcesManagerCorrelationRule'] 
slug: /tools/sdk/python/beta/models/multi-host-sources-manager-correlation-rule
tags: ['SDK', 'Software Development Kit', 'MultiHostSourcesManagerCorrelationRule', 'BetaMultiHostSourcesManagerCorrelationRule']
---

# MultiHostSourcesManagerCorrelationRule

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
from sailpoint.beta.models.multi_host_sources_manager_correlation_rule import MultiHostSourcesManagerCorrelationRule

multi_host_sources_manager_correlation_rule = MultiHostSourcesManagerCorrelationRule(
type='RULE',
id='2c918085708c274401708c2a8a760001',
name='Example Rule'
)

```
[[Back to top]](#) 

