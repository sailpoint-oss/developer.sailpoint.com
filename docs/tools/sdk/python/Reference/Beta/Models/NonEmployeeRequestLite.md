---
id: beta-non-employee-request-lite
title: NonEmployeeRequestLite
pagination_label: NonEmployeeRequestLite
sidebar_label: NonEmployeeRequestLite
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'NonEmployeeRequestLite', 'BetaNonEmployeeRequestLite'] 
slug: /tools/sdk/python/beta/models/non-employee-request-lite
tags: ['SDK', 'Software Development Kit', 'NonEmployeeRequestLite', 'BetaNonEmployeeRequestLite']
---

# NonEmployeeRequestLite


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Non-Employee request id. | [optional] 
**requester** | [**IdentityReferenceWithId**](identity-reference-with-id) |  | [optional] 
}

## Example

```python
from sailpoint.beta.models.non_employee_request_lite import NonEmployeeRequestLite

non_employee_request_lite = NonEmployeeRequestLite(
id='ac10e21c-931c-1ef2-8193-1c51e7ff0003',
requester=sailpoint.beta.models.identity_reference_with_id.Identity Reference With Id(
                    type = 'IDENTITY', 
                    id = '5168015d32f890ca15812c9180835d2e', )
)

```
[[Back to top]](#) 

