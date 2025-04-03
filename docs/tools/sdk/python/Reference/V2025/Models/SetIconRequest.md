---
id: v2025-set-icon-request
title: SetIconRequest
pagination_label: SetIconRequest
sidebar_label: SetIconRequest
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'SetIconRequest', 'V2025SetIconRequest'] 
slug: /tools/sdk/python/v2025/models/set-icon-request
tags: ['SDK', 'Software Development Kit', 'SetIconRequest', 'V2025SetIconRequest']
---

# SetIconRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**image** | **bytearray** | file with icon. Allowed mime-types ['image/png', 'image/jpeg'] | [required]
}

## Example

```python
from sailpoint.v2025.models.set_icon_request import SetIconRequest

set_icon_request = SetIconRequest(
image='\x00\x00\x00\x02'
)

```
[[Back to top]](#) 

