---
id: beta-multi-host-sources-account-correlation-rule
title: MultiHostSourcesAccountCorrelationRule
pagination_label: MultiHostSourcesAccountCorrelationRule
sidebar_label: MultiHostSourcesAccountCorrelationRule
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'MultiHostSourcesAccountCorrelationRule', 'BetaMultiHostSourcesAccountCorrelationRule'] 
slug: /tools/sdk/python/beta/models/multi-host-sources-account-correlation-rule
tags: ['SDK', 'Software Development Kit', 'MultiHostSourcesAccountCorrelationRule', 'BetaMultiHostSourcesAccountCorrelationRule']
---

# MultiHostSourcesAccountCorrelationRule

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
from sailpoint.beta.models.multi_host_sources_account_correlation_rule import MultiHostSourcesAccountCorrelationRule

multi_host_sources_account_correlation_rule = MultiHostSourcesAccountCorrelationRule(
type='RULE',
id='2c918085708c274401708c2a8a760001',
name='Example Rule'
)

```
[[Back to top]](#) 

