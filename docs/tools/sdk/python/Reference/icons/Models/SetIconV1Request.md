---
id: set-icon-v1-request
title: SetIconV1Request
pagination_label: SetIconV1Request
sidebar_label: SetIconV1Request
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'SetIconV1Request', 'SetIconV1Request'] 
slug: /tools/sdk/python/icons/models/set-icon-v1-request
tags: ['SDK', 'Software Development Kit', 'SetIconV1Request', 'SetIconV1Request']
---

# SetIconV1Request


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**image** | **bytearray** | file with icon. Allowed mime-types ['image/png', 'image/jpeg'] | [required]
}

## Example

```python
from sailpoint.icons.models.set_icon_v1_request import SetIconV1Request

set_icon_v1_request = SetIconV1Request(
image='[B@69ce2f62'
)

```
[[Back to top]](#) 

