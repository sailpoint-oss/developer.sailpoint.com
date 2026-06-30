---
id: requestonbehalfofconfigv1
title: Requestonbehalfofconfigv1
pagination_label: Requestonbehalfofconfigv1
sidebar_label: Requestonbehalfofconfigv1
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Requestonbehalfofconfigv1', 'Requestonbehalfofconfigv1'] 
slug: /tools/sdk/python/access-requests/models/requestonbehalfofconfigv1
tags: ['SDK', 'Software Development Kit', 'Requestonbehalfofconfigv1', 'Requestonbehalfofconfigv1']
---

# Requestonbehalfofconfigv1


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_request_on_behalf_of_anyone_by_anyone** | **bool** | If this is true, anyone can request access for anyone. | [optional] [default to False]
**allow_request_on_behalf_of_employee_by_manager** | **bool** | If this is true, a manager can request access for his or her direct reports. | [optional] [default to False]
}

## Example

```python
from sailpoint.access_requests.models.requestonbehalfofconfigv1 import Requestonbehalfofconfigv1

requestonbehalfofconfigv1 = Requestonbehalfofconfigv1(
allow_request_on_behalf_of_anyone_by_anyone=True,
allow_request_on_behalf_of_employee_by_manager=True
)

```
[[Back to top]](#) 

