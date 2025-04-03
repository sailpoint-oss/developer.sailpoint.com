---
id: v2025-sp-config-message1
title: SpConfigMessage1
pagination_label: SpConfigMessage1
sidebar_label: SpConfigMessage1
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'SpConfigMessage1', 'V2025SpConfigMessage1'] 
slug: /tools/sdk/python/v2025/models/sp-config-message1
tags: ['SDK', 'Software Development Kit', 'SpConfigMessage1', 'V2025SpConfigMessage1']
---

# SpConfigMessage1

Message model for Config Import/Export.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** | Message key. | [required]
**text** | **str** | Message text. | [required]
**details** | **map[string]object** | Message details if any, in key:value pairs. | [required]
}

## Example

```python
from sailpoint.v2025.models.sp_config_message1 import SpConfigMessage1

sp_config_message1 = SpConfigMessage1(
key='UNKNOWN_REFERENCE_RESOLVER',
text='Unable to resolve reference for object [type: IDENTITY, id: 2c91808c746e9c9601747d6507332ecz, name: random identity]',
details={details=message details}
)

```
[[Back to top]](#) 

