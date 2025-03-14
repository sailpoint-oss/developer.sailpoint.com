---
id: sod-recipient
title: SodRecipient
pagination_label: SodRecipient
sidebar_label: SodRecipient
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'SodRecipient', 'SodRecipient'] 
slug: /tools/sdk/python/v3/models/sod-recipient
tags: ['SDK', 'Software Development Kit', 'SodRecipient', 'SodRecipient']
---

# SodRecipient

SOD policy recipient.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'IDENTITY' ] | SOD policy recipient DTO type. | [optional] 
**id** | **str** | SOD policy recipient's identity ID. | [optional] 
**name** | **str** | SOD policy recipient's display name. | [optional] 
}

## Example

```python
from sailpoint.v3.models.sod_recipient import SodRecipient

sod_recipient = SodRecipient(
type='IDENTITY',
id='2c7180a46faadee4016fb4e018c20642',
name='Michael Michaels'
)

```
[[Back to top]](#) 

