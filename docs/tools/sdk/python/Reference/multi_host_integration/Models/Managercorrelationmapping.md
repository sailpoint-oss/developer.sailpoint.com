---
id: managercorrelationmapping
title: Managercorrelationmapping
pagination_label: Managercorrelationmapping
sidebar_label: Managercorrelationmapping
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Managercorrelationmapping', 'Managercorrelationmapping'] 
slug: /tools/sdk/python/multi-host-integration/models/managercorrelationmapping
tags: ['SDK', 'Software Development Kit', 'Managercorrelationmapping', 'Managercorrelationmapping']
---

# Managercorrelationmapping


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_attribute_name** | **str** | Name of the attribute to use for manager correlation. The value found on the account attribute will be used to lookup the manager's identity. | [optional] 
**identity_attribute_name** | **str** | Name of the identity attribute to search when trying to find a manager using the value from the accountAttribute. | [optional] 
}

## Example

```python
from sailpoint.multi_host_integration.models.managercorrelationmapping import Managercorrelationmapping

managercorrelationmapping = Managercorrelationmapping(
account_attribute_name='manager',
identity_attribute_name='manager'
)

```
[[Back to top]](#) 

