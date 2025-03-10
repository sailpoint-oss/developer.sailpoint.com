---
id: v2024-source-manager-correlation-rule
title: SourceManagerCorrelationRule
pagination_label: SourceManagerCorrelationRule
sidebar_label: SourceManagerCorrelationRule
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'SourceManagerCorrelationRule', 'V2024SourceManagerCorrelationRule'] 
slug: /tools/sdk/python/v2024/models/source-manager-correlation-rule
tags: ['SDK', 'Software Development Kit', 'SourceManagerCorrelationRule', 'V2024SourceManagerCorrelationRule']
---

# SourceManagerCorrelationRule

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
from sailpoint.v2024.models.source_manager_correlation_rule import SourceManagerCorrelationRule

source_manager_correlation_rule = SourceManagerCorrelationRule(
type='RULE',
id='2c918085708c274401708c2a8a760001',
name='Example Rule'
)

```
[[Back to top]](#) 

