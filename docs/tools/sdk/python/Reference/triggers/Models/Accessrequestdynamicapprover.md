---
id: accessrequestdynamicapprover
title: Accessrequestdynamicapprover
pagination_label: Accessrequestdynamicapprover
sidebar_label: Accessrequestdynamicapprover
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Accessrequestdynamicapprover', 'Accessrequestdynamicapprover'] 
slug: /tools/sdk/python/triggers/models/accessrequestdynamicapprover
tags: ['SDK', 'Software Development Kit', 'Accessrequestdynamicapprover', 'Accessrequestdynamicapprover']
---

# Accessrequestdynamicapprover


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_request_id** | **str** | The unique ID of the access request object. Can be used with the [access request status endpoint](https://developer.sailpoint.com/idn/api/beta/list-access-request-status) to get the status of the request.  | [required]
**requested_for** | [**[]Accessitemrequestedfordto**](accessitemrequestedfordto) | Identities access was requested for. | [required]
**requested_items** | [**[]AccessrequestdynamicapproverRequestedItemsInner**](accessrequestdynamicapprover-requested-items-inner) | The access items that are being requested. | [required]
**requested_by** | [**Accessitemrequesterdto**](accessitemrequesterdto) |  | [required]
}

## Example

```python
from sailpoint.triggers.models.accessrequestdynamicapprover import Accessrequestdynamicapprover

accessrequestdynamicapprover = Accessrequestdynamicapprover(
access_request_id='4b4d982dddff4267ab12f0f1e72b5a6d',
requested_for=[
                    sailpoint.triggers.models.accessitemrequestedfordto.accessitemrequestedfordto(
                        type = 'IDENTITY', 
                        id = '2c4180a46faadee4016fb4e018c20626', 
                        name = 'Robert Robinson', )
                    ],
requested_items=[
                    sailpoint.triggers.models.accessrequestdynamicapprover_requested_items_inner.accessrequestdynamicapprover_requestedItems_inner(
                        id = '2c91808b6ef1d43e016efba0ce470904', 
                        name = 'Engineering Access', 
                        description = 'Engineering Access', 
                        type = 'ACCESS_PROFILE', 
                        operation = 'Add', 
                        comment = 'William needs this access for his day to day job activities.', )
                    ],
requested_by=sailpoint.triggers.models.accessitemrequesterdto.accessitemrequesterdto(
                    type = 'IDENTITY', 
                    id = '2c7180a46faadee4016fb4e018c20648', 
                    name = 'William Wilson', )
)

```
[[Back to top]](#) 

