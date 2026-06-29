---
id: sodrecipient
title: Sodrecipient
pagination_label: Sodrecipient
sidebar_label: Sodrecipient
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Sodrecipient', 'Sodrecipient'] 
slug: /tools/sdk/python/sod-policies/models/sodrecipient
tags: ['SDK', 'Software Development Kit', 'Sodrecipient', 'Sodrecipient']
---

# Sodrecipient

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
from sailpoint.sod_policies.models.sodrecipient import Sodrecipient

sodrecipient = Sodrecipient(
type='IDENTITY',
id='2c7180a46faadee4016fb4e018c20642',
name='Michael Michaels'
)

```
[[Back to top]](#) 

