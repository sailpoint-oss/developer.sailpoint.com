---
id: v2024-sp-config-message
title: SpConfigMessage
pagination_label: SpConfigMessage
sidebar_label: SpConfigMessage
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'SpConfigMessage', 'V2024SpConfigMessage'] 
slug: /tools/sdk/python/v2024/models/sp-config-message
tags: ['SDK', 'Software Development Kit', 'SpConfigMessage', 'V2024SpConfigMessage']
---

# SpConfigMessage

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
from sailpoint.v2024.models.sp_config_message import SpConfigMessage

sp_config_message = SpConfigMessage(
key='UNKNOWN_REFERENCE_RESOLVER',
text='Unable to resolve reference for object [type: IDENTITY, id: 2c91808c746e9c9601747d6507332ecz, name: random identity]',
details={details=message details}
)

```
[[Back to top]](#) 

