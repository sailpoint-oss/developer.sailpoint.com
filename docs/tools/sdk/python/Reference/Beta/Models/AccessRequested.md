---
id: beta-access-requested
title: AccessRequested
pagination_label: AccessRequested
sidebar_label: AccessRequested
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccessRequested', 'BetaAccessRequested'] 
slug: /tools/sdk/python/beta/models/access-requested
tags: ['SDK', 'Software Development Kit', 'AccessRequested', 'BetaAccessRequested']
---

# AccessRequested


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_request** | [**AccessRequestResponse1**](access-request-response1) |  | [optional] 
**identity_id** | **str** | the identity id | [optional] 
**event_type** | **str** | the event type | [optional] 
**dt** | **str** | the date of event | [optional] 
}

## Example

```python
from sailpoint.beta.models.access_requested import AccessRequested

access_requested = AccessRequested(
access_request=sailpoint.beta.models.access_request_response_1.AccessRequestResponse_1(
                    requester_id = '2c91808a77ff216301782327a50f09bf', 
                    requester_name = 'Bing C', 
                    items = [{operation=Add, accessItemType=role, name=Role-1, decision=APPROVED, description=The role descrition, sourceId=8a80828f643d484f01643e14202e206f, sourceName=Source1, approvalInfos=[{name=John Snow, id=8a80828f643d484f01643e14202e2000, status=Approved}]}], ),
identity_id='8a80828f643d484f01643e14202e206f',
event_type='AccessRequested',
dt='2019-03-08T22:37:33.901Z'
)

```
[[Back to top]](#) 

