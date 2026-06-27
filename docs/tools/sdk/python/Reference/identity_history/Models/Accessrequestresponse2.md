---
id: accessrequestresponse2
title: Accessrequestresponse2
pagination_label: Accessrequestresponse2
sidebar_label: Accessrequestresponse2
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Accessrequestresponse2', 'Accessrequestresponse2'] 
slug: /tools/sdk/python/identity-history/models/accessrequestresponse2
tags: ['SDK', 'Software Development Kit', 'Accessrequestresponse2', 'Accessrequestresponse2']
---

# Accessrequestresponse2


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**requester_id** | **str** | the requester Id | [optional] 
**requester_name** | **str** | the requesterName | [optional] 
**items** | [**[]Accessrequestitemresponse**](accessrequestitemresponse) |  | [optional] 
}

## Example

```python
from sailpoint.identity_history.models.accessrequestresponse2 import Accessrequestresponse2

accessrequestresponse2 = Accessrequestresponse2(
requester_id='2c91808a77ff216301782327a50f09bf',
requester_name='Bing C',
items=[{"operation":"Add","accessItemType":"role","name":"Role-1","decision":"APPROVED","description":"The role descrition","sourceId":"8a80828f643d484f01643e14202e206f","sourceName":"Source1","approvalInfos":[{"name":"John Snow","id":"8a80828f643d484f01643e14202e2000","status":"Approved"}]}]
)

```
[[Back to top]](#) 

