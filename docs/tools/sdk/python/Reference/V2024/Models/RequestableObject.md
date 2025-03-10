---
id: v2024-requestable-object
title: RequestableObject
pagination_label: RequestableObject
sidebar_label: RequestableObject
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'RequestableObject', 'V2024RequestableObject'] 
slug: /tools/sdk/python/v2024/models/requestable-object
tags: ['SDK', 'Software Development Kit', 'RequestableObject', 'V2024RequestableObject']
---

# RequestableObject


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Id of the requestable object itself | [optional] 
**name** | **str** | Human-readable display name of the requestable object | [optional] 
**created** | **datetime** | The time when the requestable object was created | [optional] 
**modified** | **datetime** | The time when the requestable object was last modified | [optional] 
**description** | **str** | Description of the requestable object. | [optional] 
**type** | [**RequestableObjectType**](requestable-object-type) |  | [optional] 
**request_status** | [**RequestableObjectRequestStatus**](requestable-object-request-status) |  | [optional] 
**identity_request_id** | **str** | If *requestStatus* is *PENDING*, indicates the id of the associated account activity. | [optional] 
**owner_ref** | [**IdentityReferenceWithNameAndEmail**](identity-reference-with-name-and-email) |  | [optional] 
**request_comments_required** | **bool** | Whether the requester must provide comments when requesting the object. | [optional] 
}

## Example

```python
from sailpoint.v2024.models.requestable_object import RequestableObject

requestable_object = RequestableObject(
id='2c9180835d2e5168015d32f890ca1581',
name='Applied Research Access',
created='2017-07-11T18:45:37.098Z',
modified='2018-06-25T20:22:28.104Z',
description='Access to research information, lab results, and schematics.',
type='ACCESS_PROFILE',
request_status=,
identity_request_id='',
owner_ref=sailpoint.v2024.models.identity_reference_with_name_and_email.IdentityReferenceWithNameAndEmail(
                    type = 'IDENTITY', 
                    id = '5168015d32f890ca15812c9180835d2e', 
                    name = 'Alison Ferguso', 
                    email = 'alison.ferguso@identitysoon.com', ),
request_comments_required=False
)

```
[[Back to top]](#) 

