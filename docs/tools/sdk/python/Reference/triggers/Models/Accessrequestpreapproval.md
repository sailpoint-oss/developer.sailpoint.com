---
id: accessrequestpreapproval
title: Accessrequestpreapproval
pagination_label: Accessrequestpreapproval
sidebar_label: Accessrequestpreapproval
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Accessrequestpreapproval', 'Accessrequestpreapproval'] 
slug: /tools/sdk/python/triggers/models/accessrequestpreapproval
tags: ['SDK', 'Software Development Kit', 'Accessrequestpreapproval', 'Accessrequestpreapproval']
---

# Accessrequestpreapproval


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_request_id** | **str** | The unique ID of the access request. | [required]
**requested_for** | [**[]Accessitemrequestedfordto**](accessitemrequestedfordto) | Identities access was requested for. | [required]
**requested_items** | [**[]AccessrequestpreapprovalRequestedItemsInner**](accessrequestpreapproval-requested-items-inner) | Details of the access items being requested. | [required]
**requested_by** | [**Accessitemrequesterdto**](accessitemrequesterdto) |  | [required]
}

## Example

```python
from sailpoint.triggers.models.accessrequestpreapproval import Accessrequestpreapproval

accessrequestpreapproval = Accessrequestpreapproval(
access_request_id='2c91808b6ef1d43e016efba0ce470904',
requested_for=[
                    sailpoint.triggers.models.accessitemrequestedfordto.accessitemrequestedfordto(
                        type = 'IDENTITY', 
                        id = '2c4180a46faadee4016fb4e018c20626', 
                        name = 'Robert Robinson', )
                    ],
requested_items=[
                    sailpoint.triggers.models.accessrequestpreapproval_requested_items_inner.accessrequestpreapproval_requestedItems_inner(
                        id = '2c91808b6ef1d43e016efba0ce470904', 
                        name = 'Engineering Access', 
                        description = 'Access to engineering database', 
                        type = 'ACCESS_PROFILE', 
                        operation = 'Add', 
                        comment = 'William needs this access to do his job.', )
                    ],
requested_by=sailpoint.triggers.models.accessitemrequesterdto.accessitemrequesterdto(
                    type = 'IDENTITY', 
                    id = '2c7180a46faadee4016fb4e018c20648', 
                    name = 'William Wilson', )
)

```
[[Back to top]](#) 

