---
id: source-account-correlation-config
title: SourceAccountCorrelationConfig
pagination_label: SourceAccountCorrelationConfig
sidebar_label: SourceAccountCorrelationConfig
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'SourceAccountCorrelationConfig', 'SourceAccountCorrelationConfig'] 
slug: /tools/sdk/python/v3/models/source-account-correlation-config
tags: ['SDK', 'Software Development Kit', 'SourceAccountCorrelationConfig', 'SourceAccountCorrelationConfig']
---

# SourceAccountCorrelationConfig

Reference to account correlation config object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'ACCOUNT_CORRELATION_CONFIG' ] | Type of object being referenced. | [optional] 
**id** | **str** | Account correlation config ID. | [optional] 
**name** | **str** | Account correlation config's human-readable display name. | [optional] 
}

## Example

```python
from sailpoint.v3.models.source_account_correlation_config import SourceAccountCorrelationConfig

source_account_correlation_config = SourceAccountCorrelationConfig(
type='ACCOUNT_CORRELATION_CONFIG',
id='2c9180855d191c59015d28583727245a',
name='Directory [source-62867] Account Correlation'
)

```
[[Back to top]](#) 

