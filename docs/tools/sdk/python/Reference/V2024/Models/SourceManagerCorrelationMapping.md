---
id: v2024-source-manager-correlation-mapping
title: SourceManagerCorrelationMapping
pagination_label: SourceManagerCorrelationMapping
sidebar_label: SourceManagerCorrelationMapping
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'SourceManagerCorrelationMapping', 'V2024SourceManagerCorrelationMapping'] 
slug: /tools/sdk/python/v2024/models/source-manager-correlation-mapping
tags: ['SDK', 'Software Development Kit', 'SourceManagerCorrelationMapping', 'V2024SourceManagerCorrelationMapping']
---

# SourceManagerCorrelationMapping


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_attribute_name** | **str** | Name of the attribute to use for manager correlation. The value found on the account attribute will be used to lookup the manager's identity. | [optional] 
**identity_attribute_name** | **str** | Name of the identity attribute to search when trying to find a manager using the value from the accountAttribute. | [optional] 
}

## Example

```python
from sailpoint.v2024.models.source_manager_correlation_mapping import SourceManagerCorrelationMapping

source_manager_correlation_mapping = SourceManagerCorrelationMapping(
account_attribute_name='manager',
identity_attribute_name='manager'
)

```
[[Back to top]](#) 

