---
id: spconfigmessage2
title: Spconfigmessage2
pagination_label: Spconfigmessage2
sidebar_label: Spconfigmessage2
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Spconfigmessage2', 'Spconfigmessage2'] 
slug: /tools/sdk/python/sp-config/models/spconfigmessage2
tags: ['SDK', 'Software Development Kit', 'Spconfigmessage2', 'Spconfigmessage2']
---

# Spconfigmessage2

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
from sailpoint.sp_config.models.spconfigmessage2 import Spconfigmessage2

spconfigmessage2 = Spconfigmessage2(
key='UNKNOWN_REFERENCE_RESOLVER',
text='Unable to resolve reference for object [type: IDENTITY, id: 2c91808c746e9c9601747d6507332ecz, name: random identity]',
details={"details":"message details"}
)

```
[[Back to top]](#) 

