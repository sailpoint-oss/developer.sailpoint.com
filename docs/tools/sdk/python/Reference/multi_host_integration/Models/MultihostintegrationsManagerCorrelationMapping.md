---
id: multihostintegrations-manager-correlation-mapping
title: MultihostintegrationsManagerCorrelationMapping
pagination_label: MultihostintegrationsManagerCorrelationMapping
sidebar_label: MultihostintegrationsManagerCorrelationMapping
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'MultihostintegrationsManagerCorrelationMapping', 'MultihostintegrationsManagerCorrelationMapping'] 
slug: /tools/sdk/python/multi-host-integration/models/multihostintegrations-manager-correlation-mapping
tags: ['SDK', 'Software Development Kit', 'MultihostintegrationsManagerCorrelationMapping', 'MultihostintegrationsManagerCorrelationMapping']
---

# MultihostintegrationsManagerCorrelationMapping


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_attribute_name** | **str** | Name of the attribute to use for manager correlation. The value found on the account attribute will be used to lookup the manager's identity. | [optional] 
**identity_attribute_name** | **str** | Name of the identity attribute to search when trying to find a manager using the value from the accountAttribute. | [optional] 
}

## Example

```python
from sailpoint.multi_host_integration.models.multihostintegrations_manager_correlation_mapping import MultihostintegrationsManagerCorrelationMapping

multihostintegrations_manager_correlation_mapping = MultihostintegrationsManagerCorrelationMapping(
account_attribute_name='manager',
identity_attribute_name='manager'
)

```
[[Back to top]](#) 

