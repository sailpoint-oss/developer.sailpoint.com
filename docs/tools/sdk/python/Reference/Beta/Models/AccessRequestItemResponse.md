---
id: beta-access-request-item-response
title: AccessRequestItemResponse
pagination_label: AccessRequestItemResponse
sidebar_label: AccessRequestItemResponse
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccessRequestItemResponse', 'BetaAccessRequestItemResponse'] 
slug: /tools/sdk/python/beta/models/access-request-item-response
tags: ['SDK', 'Software Development Kit', 'AccessRequestItemResponse', 'BetaAccessRequestItemResponse']
---

# AccessRequestItemResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**operation** | **str** | the access request item operation | [optional] 
**access_item_type** | **str** | the access item type | [optional] 
**name** | **str** | the name of access request item | [optional] 
**decision** |  **Enum** [  'APPROVED',    'REJECTED' ] | the final decision for the access request | [optional] 
**description** | **str** | the description of access request item | [optional] 
**source_id** | **str** | the source id | [optional] 
**source_name** | **str** | the source Name | [optional] 
**approval_infos** | [**[]ApprovalInfoResponse**](approval-info-response) |  | [optional] 
}

## Example

```python
from sailpoint.beta.models.access_request_item_response import AccessRequestItemResponse

access_request_item_response = AccessRequestItemResponse(
operation='Add',
access_item_type='role',
name='Role-1',
decision='APPROVED',
description='The role descrition',
source_id='8a80828f643d484f01643e14202e206f',
source_name='Source1',
approval_infos=[{name=John Snow, id=8a80828f643d484f01643e14202e2000, status=Approved}]
)

```
[[Back to top]](#) 

