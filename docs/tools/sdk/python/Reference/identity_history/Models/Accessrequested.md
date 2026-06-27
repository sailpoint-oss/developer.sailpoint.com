---
id: accessrequested
title: Accessrequested
pagination_label: Accessrequested
sidebar_label: Accessrequested
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Accessrequested', 'Accessrequested'] 
slug: /tools/sdk/python/identity-history/models/accessrequested
tags: ['SDK', 'Software Development Kit', 'Accessrequested', 'Accessrequested']
---

# Accessrequested


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_request** | [**Accessrequestresponse2**](accessrequestresponse2) |  | [required]
**identity_id** | **str** | the identity id | [optional] 
**event_type** | **str** | the event type | [optional] 
**date_time** | **str** | the date of event | [optional] 
}

## Example

```python
from sailpoint.identity_history.models.accessrequested import Accessrequested

accessrequested = Accessrequested(
access_request=sailpoint.identity_history.models.access_request_response.Access Request Response(
                    requester_id = '2c91808a77ff216301782327a50f09bf', 
                    requester_name = 'Bing C', 
                    items = [{"operation":"Add","accessItemType":"role","name":"Role-1","decision":"APPROVED","description":"The role descrition","sourceId":"8a80828f643d484f01643e14202e206f","sourceName":"Source1","approvalInfos":[{"name":"John Snow","id":"8a80828f643d484f01643e14202e2000","status":"Approved"}]}], ),
identity_id='8a80828f643d484f01643e14202e206f',
event_type='AccessRequested',
date_time='2019-03-08T22:37:33.901Z'
)

```
[[Back to top]](#) 

