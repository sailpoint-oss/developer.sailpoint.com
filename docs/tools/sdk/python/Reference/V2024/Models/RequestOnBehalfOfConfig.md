---
id: v2024-request-on-behalf-of-config
title: RequestOnBehalfOfConfig
pagination_label: RequestOnBehalfOfConfig
sidebar_label: RequestOnBehalfOfConfig
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'RequestOnBehalfOfConfig', 'V2024RequestOnBehalfOfConfig'] 
slug: /tools/sdk/python/v2024/models/request-on-behalf-of-config
tags: ['SDK', 'Software Development Kit', 'RequestOnBehalfOfConfig', 'V2024RequestOnBehalfOfConfig']
---

# RequestOnBehalfOfConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_request_on_behalf_of_anyone_by_anyone** | **bool** | If this is true, anyone can request access for anyone. | [optional] [default to False]
**allow_request_on_behalf_of_employee_by_manager** | **bool** | If this is true, a manager can request access for his or her direct reports. | [optional] [default to False]
}

## Example

```python
from sailpoint.v2024.models.request_on_behalf_of_config import RequestOnBehalfOfConfig

request_on_behalf_of_config = RequestOnBehalfOfConfig(
allow_request_on_behalf_of_anyone_by_anyone=True,
allow_request_on_behalf_of_employee_by_manager=True
)

```
[[Back to top]](#) 

