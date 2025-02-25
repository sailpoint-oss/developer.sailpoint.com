---
id: beta-set-icon-request
title: SetIconRequest
pagination_label: SetIconRequest
sidebar_label: SetIconRequest
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'SetIconRequest', 'BetaSetIconRequest'] 
slug: /tools/sdk/python/beta/models/set-icon-request
tags: ['SDK', 'Software Development Kit', 'SetIconRequest', 'BetaSetIconRequest']
---

# SetIconRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**image** | **bytearray** | file with icon. Allowed mime-types ['image/png', 'image/jpeg'] | [required]
}

## Example

```python
from sailpoint.beta.models.set_icon_request import SetIconRequest

set_icon_request = SetIconRequest(
image='\x00\x00\x00\x02'
)

```
[[Back to top]](#) 

