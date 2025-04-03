---
id: v2024-access-request-response1
title: AccessRequestResponse1
pagination_label: AccessRequestResponse1
sidebar_label: AccessRequestResponse1
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccessRequestResponse1', 'V2024AccessRequestResponse1'] 
slug: /tools/sdk/python/v2024/models/access-request-response1
tags: ['SDK', 'Software Development Kit', 'AccessRequestResponse1', 'V2024AccessRequestResponse1']
---

# AccessRequestResponse1


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**requester_id** | **str** | the requester Id | [optional] 
**requester_name** | **str** | the requesterName | [optional] 
**items** | [**[]AccessRequestItemResponse**](access-request-item-response) |  | [optional] 
}

## Example

```python
from sailpoint.v2024.models.access_request_response1 import AccessRequestResponse1

access_request_response1 = AccessRequestResponse1(
requester_id='2c91808a77ff216301782327a50f09bf',
requester_name='Bing C',
items=[{operation=Add, accessItemType=role, name=Role-1, decision=APPROVED, description=The role descrition, sourceId=8a80828f643d484f01643e14202e206f, sourceName=Source1, approvalInfos=[{name=John Snow, id=8a80828f643d484f01643e14202e2000, status=Approved}]}]
)

```
[[Back to top]](#) 

