---
id: requestonbehalfofconfigv2
title: Requestonbehalfofconfigv2
pagination_label: Requestonbehalfofconfigv2
sidebar_label: Requestonbehalfofconfigv2
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Requestonbehalfofconfigv2', 'Requestonbehalfofconfigv2'] 
slug: /tools/sdk/python/access-requests/models/requestonbehalfofconfigv2
tags: ['SDK', 'Software Development Kit', 'Requestonbehalfofconfigv2', 'Requestonbehalfofconfigv2']
---

# Requestonbehalfofconfigv2


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_request_on_behalf_of_anyone_by_anyone** | **bool** | If this is true, anyone can request access for anyone. | [optional] [default to False]
**allow_request_on_behalf_of_employee_by_manager** | **bool** | If this is true, a manager can request access for his or her direct reports. | [optional] [default to False]
}

## Example

```python
from sailpoint.access_requests.models.requestonbehalfofconfigv2 import Requestonbehalfofconfigv2

requestonbehalfofconfigv2 = Requestonbehalfofconfigv2(
allow_request_on_behalf_of_anyone_by_anyone=True,
allow_request_on_behalf_of_employee_by_manager=True
)

```
[[Back to top]](#) 

