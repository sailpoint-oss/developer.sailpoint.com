---
id: v2024-source-account-correlation-rule
title: SourceAccountCorrelationRule
pagination_label: SourceAccountCorrelationRule
sidebar_label: SourceAccountCorrelationRule
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'SourceAccountCorrelationRule', 'V2024SourceAccountCorrelationRule'] 
slug: /tools/sdk/python/v2024/models/source-account-correlation-rule
tags: ['SDK', 'Software Development Kit', 'SourceAccountCorrelationRule', 'V2024SourceAccountCorrelationRule']
---

# SourceAccountCorrelationRule

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
from sailpoint.v2024.models.source_account_correlation_rule import SourceAccountCorrelationRule

source_account_correlation_rule = SourceAccountCorrelationRule(
type='RULE',
id='2c918085708c274401708c2a8a760001',
name='Example Rule'
)

```
[[Back to top]](#) 

