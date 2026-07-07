---
id: requesteditemdetails
title: Requesteditemdetails
pagination_label: Requesteditemdetails
sidebar_label: Requesteditemdetails
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Requesteditemdetails', 'Requesteditemdetails'] 
slug: /tools/sdk/python/access-requests/models/requesteditemdetails
tags: ['SDK', 'Software Development Kit', 'Requesteditemdetails', 'Requesteditemdetails']
---

# Requesteditemdetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'ACCESS_PROFILE',    'ENTITLEMENT',    'ROLE' ] | The type of access item requested. | [optional] 
**id** | **str** | The id of the access item requested. | [optional] 
}

## Example

```python
from sailpoint.access_requests.models.requesteditemdetails import Requesteditemdetails

requesteditemdetails = Requesteditemdetails(
type='ENTITLEMENT',
id='779c6fd7171540bba1184e5946112c28'
)

```
[[Back to top]](#) 

