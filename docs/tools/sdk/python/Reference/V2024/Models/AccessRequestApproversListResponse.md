---
id: v2024-access-request-approvers-list-response
title: AccessRequestApproversListResponse
pagination_label: AccessRequestApproversListResponse
sidebar_label: AccessRequestApproversListResponse
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccessRequestApproversListResponse', 'V2024AccessRequestApproversListResponse'] 
slug: /tools/sdk/python/v2024/models/access-request-approvers-list-response
tags: ['SDK', 'Software Development Kit', 'AccessRequestApproversListResponse', 'V2024AccessRequestApproversListResponse']
---

# AccessRequestApproversListResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Approver id. | [optional] 
**email** | **str** | Email of the approver. | [optional] 
**name** | **str** | Name of the approver. | [optional] 
**approval_id** | **str** | Id of the approval item. | [optional] 
**type** | **str** | Type of the object returned. In this case, the value for this field will always Identity. | [optional] 
}

## Example

```python
from sailpoint.v2024.models.access_request_approvers_list_response import AccessRequestApproversListResponse

access_request_approvers_list_response = AccessRequestApproversListResponse(
id='id12345',
email='jdoe@sailpoint.com',
name='John Doe',
approval_id='ap12345',
type='Identity'
)

```
[[Back to top]](#) 

