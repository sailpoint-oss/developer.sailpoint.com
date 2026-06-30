---
id: spconfigmessage
title: Spconfigmessage
pagination_label: Spconfigmessage
sidebar_label: Spconfigmessage
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Spconfigmessage', 'Spconfigmessage'] 
slug: /tools/sdk/python/identity-profiles/models/spconfigmessage
tags: ['SDK', 'Software Development Kit', 'Spconfigmessage', 'Spconfigmessage']
---

# Spconfigmessage

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
from sailpoint.identity_profiles.models.spconfigmessage import Spconfigmessage

spconfigmessage = Spconfigmessage(
key='UNKNOWN_REFERENCE_RESOLVER',
text='Unable to resolve reference for object [type: IDENTITY, id: 2c91808c746e9c9601747d6507332ecz, name: random identity]',
details={"details":"message details"}
)

```
[[Back to top]](#) 

