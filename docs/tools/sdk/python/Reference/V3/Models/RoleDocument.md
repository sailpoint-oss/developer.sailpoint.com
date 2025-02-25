---
id: role-document
title: RoleDocument
pagination_label: RoleDocument
sidebar_label: RoleDocument
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'RoleDocument', 'RoleDocument'] 
slug: /tools/sdk/python/v3/models/role-document
tags: ['SDK', 'Software Development Kit', 'RoleDocument', 'RoleDocument']
---

# RoleDocument

Role

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The unique ID of the referenced object. | [required]
**name** | **str** | The human readable name of the referenced object. | [required]
**type** | [**DocumentType**](document-type) |  | [required]
**description** | **str** | Access item's description. | [optional] 
**created** | **datetime** | ISO-8601 date-time referring to the time when the object was created. | [optional] 
**modified** | **datetime** | ISO-8601 date-time referring to the time when the object was last modified. | [optional] 
**synced** | **datetime** | ISO-8601 date-time referring to the date-time when object was queued to be synced into search database for use in the search API.   This date-time changes anytime there is an update to the object, which triggers a synchronization event being sent to the search database.  There may be some delay between the `synced` time and the time when the updated data is actually available in the search API.  | [optional] 
**enabled** | **bool** | Indicates whether the access item is currently enabled. | [optional] [default to False]
**requestable** | **bool** | Indicates whether the access item can be requested. | [optional] [default to True]
**request_comments_required** | **bool** | Indicates whether comments are required for requests to access the item. | [optional] [default to False]
**owner** | [**BaseAccessAllOfOwner**](base-access-all-of-owner) |  | [optional] 
**access_profiles** | [**[]BaseAccessProfile**](base-access-profile) | Access profiles included with the role. | [optional] 
**access_profile_count** | **int** | Number of access profiles included with the role. | [optional] 
**tags** | **[]str** | Tags that have been applied to the object. | [optional] 
**segments** | [**[]BaseSegment**](base-segment) | Segments with the role. | [optional] 
**segment_count** | **int** | Number of segments with the role. | [optional] 
**entitlements** | [**[]BaseEntitlement**](base-entitlement) | Entitlements included with the role. | [optional] 
**entitlement_count** | **int** | Number of entitlements included with the role. | [optional] 
}

## Example

```python
from sailpoint.v3.models.role_document import RoleDocument

role_document = RoleDocument(
id='2c91808568c529c60168cca6f90c1313',
name='John Doe',
type='identity',
description='The admin role',
created='2018-06-25T20:22:28.104Z',
modified='2018-06-25T20:22:28.104Z',
synced='2018-06-25T20:22:33.104Z',
enabled=True,
requestable=True,
request_comments_required=False,
owner=sailpoint.v3.models.base_access_all_of_owner.BaseAccess_allOf_owner(
                    type = 'IDENTITY', 
                    id = '2c9180a46faadee4016fb4e018c20639', 
                    name = 'Support', 
                    email = 'cloud-support@sailpoint.com', ),
access_profiles=[
                    sailpoint.v3.models.base_access_profile.BaseAccessProfile(
                        id = '2c91809c6faade77016fb4f0b63407ae', 
                        name = 'Admin Access', )
                    ],
access_profile_count=1,
tags=[TAG_1, TAG_2],
segments=[
                    sailpoint.v3.models.base_segment.BaseSegment(
                        id = 'b009b6e3-b56d-41d9-8735-cb532ea0b017', 
                        name = 'Test Segment', )
                    ],
segment_count=1,
entitlements=[
                    sailpoint.v3.models.base_entitlement.BaseEntitlement(
                        has_permissions = False, 
                        description = 'Cloud engineering', 
                        attribute = 'memberOf', 
                        value = 'CN=Cloud Engineering,DC=sailpoint,DC=COM', 
                        schema = 'group', 
                        privileged = False, 
                        id = '2c918084575812550157589064f33b89', 
                        name = 'CN=Cloud Engineering,DC=sailpoint,DC=COM', )
                    ],
entitlement_count=3
)

```
[[Back to top]](#) 

