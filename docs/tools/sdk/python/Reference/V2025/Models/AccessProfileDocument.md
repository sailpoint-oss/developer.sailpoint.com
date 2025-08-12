---
id: v2025-access-profile-document
title: AccessProfileDocument
pagination_label: AccessProfileDocument
sidebar_label: AccessProfileDocument
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccessProfileDocument', 'V2025AccessProfileDocument'] 
slug: /tools/sdk/python/v2025/models/access-profile-document
tags: ['SDK', 'Software Development Kit', 'AccessProfileDocument', 'V2025AccessProfileDocument']
---

# AccessProfileDocument

More complete representation of an access profile.  

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Access item's description. | [optional] 
**created** | **datetime** | ISO-8601 date-time referring to the time when the object was created. | [optional] 
**modified** | **datetime** | ISO-8601 date-time referring to the time when the object was last modified. | [optional] 
**synced** | **datetime** | ISO-8601 date-time referring to the date-time when object was queued to be synced into search database for use in the search API.   This date-time changes anytime there is an update to the object, which triggers a synchronization event being sent to the search database.  There may be some delay between the `synced` time and the time when the updated data is actually available in the search API.  | [optional] 
**enabled** | **bool** | Indicates whether the access item is currently enabled. | [optional] [default to False]
**requestable** | **bool** | Indicates whether the access item can be requested. | [optional] [default to True]
**request_comments_required** | **bool** | Indicates whether comments are required for requests to access the item. | [optional] [default to False]
**owner** | [**BaseAccessOwner**](base-access-owner) |  | [optional] 
**id** | **str** | Access profile's ID. | [required]
**name** | **str** | Access profile's name. | [required]
**source** | [**AccessProfileDocumentAllOfSource**](access-profile-document-all-of-source) |  | [optional] 
**entitlements** | [**[]BaseEntitlement**](base-entitlement) | Entitlements the access profile has access to. | [optional] 
**entitlement_count** | **int** | Number of entitlements. | [optional] 
**segments** | [**[]BaseSegment**](base-segment) | Segments with the access profile. | [optional] 
**segment_count** | **int** | Number of segments with the access profile. | [optional] 
**tags** | **[]str** | Tags that have been applied to the object. | [optional] 
**apps** | [**[]AccessApps**](access-apps) | Applications with the access profile | [optional] 
}

## Example

```python
from sailpoint.v2025.models.access_profile_document import AccessProfileDocument

access_profile_document = AccessProfileDocument(
description='Admin access',
created='2018-06-25T20:22:28.104Z',
modified='2018-06-25T20:22:28.104Z',
synced='2018-06-25T20:22:33.104Z',
enabled=True,
requestable=True,
request_comments_required=False,
owner=sailpoint.v2025.models.base_access_owner.BaseAccess_owner(
                    type = 'IDENTITY', 
                    id = '2c9180a46faadee4016fb4e018c20639', 
                    name = 'Support', 
                    email = 'cloud-support@sailpoint.com', ),
id='2c9180825a6c1adc015a71c9023f0818',
name='Cloud Eng',
source=sailpoint.v2025.models.access_profile_document_all_of_source.AccessProfileDocument_allOf_source(
                    id = 'ff8081815757d4fb0157588f3d9d008f', 
                    name = 'Employees', ),
entitlements=[
                    sailpoint.v2025.models.base_entitlement.BaseEntitlement(
                        has_permissions = False, 
                        description = 'Cloud engineering', 
                        attribute = 'memberOf', 
                        value = 'CN=Cloud Engineering,DC=sailpoint,DC=COM', 
                        schema = 'group', 
                        privileged = False, 
                        id = '2c918084575812550157589064f33b89', 
                        name = 'CN=Cloud Engineering,DC=sailpoint,DC=COM', )
                    ],
entitlement_count=5,
segments=[
                    sailpoint.v2025.models.base_segment.BaseSegment(
                        id = 'b009b6e3-b56d-41d9-8735-cb532ea0b017', 
                        name = 'Test Segment', )
                    ],
segment_count=1,
tags=[TAG_1, TAG_2],
apps=[
                    sailpoint.v2025.models.access_apps.AccessApps(
                        id = '2c91808568c529c60168cca6f90c1313', 
                        name = 'Travel and Expense', 
                        description = 'Travel and Expense Application', 
                        owner = sailpoint.v2025.models.access_apps_owner.AccessApps_owner(
                            type = 'IDENTITY', 
                            id = '2c9180a46faadee4016fb4e018c20639', 
                            name = 'John Doe', 
                            email = 'john.doe@sailpoint.com', ), )
                    ]
)

```
[[Back to top]](#) 

