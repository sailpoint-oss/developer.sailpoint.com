---
id: beta-multi-host-sources-account-correlation-config
title: MultiHostSourcesAccountCorrelationConfig
pagination_label: MultiHostSourcesAccountCorrelationConfig
sidebar_label: MultiHostSourcesAccountCorrelationConfig
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'MultiHostSourcesAccountCorrelationConfig', 'BetaMultiHostSourcesAccountCorrelationConfig'] 
slug: /tools/sdk/python/beta/models/multi-host-sources-account-correlation-config
tags: ['SDK', 'Software Development Kit', 'MultiHostSourcesAccountCorrelationConfig', 'BetaMultiHostSourcesAccountCorrelationConfig']
---

# MultiHostSourcesAccountCorrelationConfig

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
from sailpoint.beta.models.multi_host_sources_account_correlation_config import MultiHostSourcesAccountCorrelationConfig

multi_host_sources_account_correlation_config = MultiHostSourcesAccountCorrelationConfig(
type='ACCOUNT_CORRELATION_CONFIG',
id='2c9180855d191c59015d28583727245a',
name='Directory [source-62867] Account Correlation'
)

```
[[Back to top]](#) 

