---
id: multihostintegrations-account-correlation-config
title: MultihostintegrationsAccountCorrelationConfig
pagination_label: MultihostintegrationsAccountCorrelationConfig
sidebar_label: MultihostintegrationsAccountCorrelationConfig
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'MultihostintegrationsAccountCorrelationConfig', 'MultihostintegrationsAccountCorrelationConfig'] 
slug: /tools/sdk/python/multi-host-integration/models/multihostintegrations-account-correlation-config
tags: ['SDK', 'Software Development Kit', 'MultihostintegrationsAccountCorrelationConfig', 'MultihostintegrationsAccountCorrelationConfig']
---

# MultihostintegrationsAccountCorrelationConfig

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
from sailpoint.multi_host_integration.models.multihostintegrations_account_correlation_config import MultihostintegrationsAccountCorrelationConfig

multihostintegrations_account_correlation_config = MultihostintegrationsAccountCorrelationConfig(
type='ACCOUNT_CORRELATION_CONFIG',
id='2c9180855d191c59015d28583727245a',
name='Directory [source-62867] Account Correlation'
)

```
[[Back to top]](#) 

