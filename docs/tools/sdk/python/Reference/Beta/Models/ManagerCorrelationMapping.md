---
id: beta-manager-correlation-mapping
title: ManagerCorrelationMapping
pagination_label: ManagerCorrelationMapping
sidebar_label: ManagerCorrelationMapping
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ManagerCorrelationMapping', 'BetaManagerCorrelationMapping'] 
slug: /tools/sdk/python/beta/models/manager-correlation-mapping
tags: ['SDK', 'Software Development Kit', 'ManagerCorrelationMapping', 'BetaManagerCorrelationMapping']
---

# ManagerCorrelationMapping


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_attribute_name** | **str** | Name of the attribute to use for manager correlation. The value found on the account attribute will be used to lookup the manager's identity. | [optional] 
**identity_attribute_name** | **str** | Name of the identity attribute to search when trying to find a manager using the value from the accountAttribute. | [optional] 
}

## Example

```python
from sailpoint.beta.models.manager_correlation_mapping import ManagerCorrelationMapping

manager_correlation_mapping = ManagerCorrelationMapping(
account_attribute_name='manager',
identity_attribute_name='manager'
)

```
[[Back to top]](#) 

