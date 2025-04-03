---
id: jit-configuration
title: JITConfiguration
pagination_label: JITConfiguration
sidebar_label: JITConfiguration
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'JITConfiguration', 'JITConfiguration'] 
slug: /tools/sdk/python/v3/models/jit-configuration
tags: ['SDK', 'Software Development Kit', 'JITConfiguration', 'JITConfiguration']
---

# JITConfiguration


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | The indicator for just-in-time provisioning enabled | [optional] [default to False]
**source_id** | **str** | the sourceId that mapped to just-in-time provisioning configuration | [optional] 
**source_attribute_mappings** | **map[string]str** | A mapping of identity profile attribute names to SAML assertion attribute names | [optional] 
}

## Example

```python
from sailpoint.v3.models.jit_configuration import JITConfiguration

jit_configuration = JITConfiguration(
enabled=False,
source_id='2c9180857377ed2901739c12a2da5ac8',
source_attribute_mappings={firstName=okta.firstName, lastName=okta.lastName, email=okta.email}
)

```
[[Back to top]](#) 

