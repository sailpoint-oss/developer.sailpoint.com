---
id: access-profile-document
title: AccessProfileDocument
pagination_label: AccessProfileDocument
sidebar_label: AccessProfileDocument
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccessProfileDocument', 'AccessProfileDocument'] 
slug: /tools/sdk/python/v3/models/access-profile-document
tags: ['SDK', 'Software Development Kit', 'AccessProfileDocument', 'AccessProfileDocument']
---

# AccessProfileDocument

More complete representation of an access profile.  

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Access profile's ID. | [required]
**name** | **str** | Access profile's name. | [required]
**description** | **str** | Access item's description. | [optional] 
**created** | **datetime** | ISO-8601 date-time referring to the time when the object was created. | [optional] 
**modified** | **datetime** | ISO-8601 date-time referring to the time when the object was last modified. | [optional] 
**synced** | **datetime** | ISO-8601 date-time referring to the date-time when object was queued to be synced into search database for use in the search API.   This date-time changes anytime there is an update to the object, which triggers a synchronization event being sent to the search database.  There may be some delay between the `synced` time and the time when the updated data is actually available in the search API.  | [optional] 
**enabled** | **bool** | Indicates whether the access item is currently enabled. | [optional] [default to False]
**requestable** | **bool** | Indicates whether the access item can be requested. | [optional] [default to True]
**request_comments_required** | **bool** | Indicates whether comments are required for requests to access the item. | [optional] [default to False]
**owner** | [**BaseAccessAllOfOwner**](base-access-all-of-owner) |  | [optional] 
**type** |  **Enum** [  'accessprofile',    'accountactivity',    'account',    'aggregation',    'entitlement',    'event',    'identity',    'role' ] | Access profile's document type.  This enum represents the currently supported document types. Additional values may be added in the future without notice. | [required]
**source** | [**AccessProfileDocumentAllOfSource**](access-profile-document-all-of-source) |  | [optional] 
**entitlements** | [**[]BaseEntitlement**](base-entitlement) | Entitlements the access profile has access to. | [optional] 
**entitlement_count** | **int** | Number of entitlements. | [optional] 
**tags** | **[]str** | Tags that have been applied to the object. | [optional] 
}

## Example

```python
from sailpoint.v3.models.access_profile_document import AccessProfileDocument

access_profile_document = AccessProfileDocument(
id='2c9180825a6c1adc015a71c9023f0818',
name='Cloud Eng',
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
type='accessprofile',
source=sailpoint.v3.models.access_profile_document_all_of_source.AccessProfileDocument_allOf_source(
                    id = 'ff8081815757d4fb0157588f3d9d008f', 
                    name = 'Employees', ),
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
entitlement_count=5,
tags=[TAG_1, TAG_2]
)

```
[[Back to top]](#) 

