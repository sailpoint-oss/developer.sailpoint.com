---
id: v2024-non-employee-request-lite
title: NonEmployeeRequestLite
pagination_label: NonEmployeeRequestLite
sidebar_label: NonEmployeeRequestLite
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'NonEmployeeRequestLite', 'V2024NonEmployeeRequestLite'] 
slug: /tools/sdk/python/v2024/models/non-employee-request-lite
tags: ['SDK', 'Software Development Kit', 'NonEmployeeRequestLite', 'V2024NonEmployeeRequestLite']
---

# NonEmployeeRequestLite


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Non-Employee request id. | [optional] 
**requester** | [**NonEmployeeIdentityReferenceWithId**](non-employee-identity-reference-with-id) |  | [optional] 
}

## Example

```python
from sailpoint.v2024.models.non_employee_request_lite import NonEmployeeRequestLite

non_employee_request_lite = NonEmployeeRequestLite(
id='ac110005-7156-1150-8171-5b292e3e0084',
requester=sailpoint.v2024.models.non_employee_identity_reference_with_id.NonEmployeeIdentityReferenceWithId(
                    type = 'IDENTITY', 
                    id = '5168015d32f890ca15812c9180835d2e', )
)

```
[[Back to top]](#) 

