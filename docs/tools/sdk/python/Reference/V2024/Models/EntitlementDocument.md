---
id: v2024-entitlement-document
title: EntitlementDocument
pagination_label: EntitlementDocument
sidebar_label: EntitlementDocument
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'EntitlementDocument', 'V2024EntitlementDocument'] 
slug: /tools/sdk/python/v2024/models/entitlement-document
tags: ['SDK', 'Software Development Kit', 'EntitlementDocument', 'V2024EntitlementDocument']
---

# EntitlementDocument

Entitlement

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [required]
**name** | **str** |  | [required]
**type** | [**DocumentType**](document-type) |  | [required]
**modified** | **datetime** | ISO-8601 date-time referring to the time when the object was last modified. | [optional] 
**synced** | **str** | ISO-8601 date-time referring to the date-time when object was queued to be synced into search database for use in the search API.   This date-time changes anytime there is an update to the object, which triggers a synchronization event being sent to the search database.  There may be some delay between the `synced` time and the time when the updated data is actually available in the search API.  | [optional] 
**display_name** | **str** | Entitlement's display name. | [optional] 
**source** | [**EntitlementDocumentAllOfSource**](entitlement-document-all-of-source) |  | [optional] 
**segments** | [**[]BaseSegment**](base-segment) | Segments with the role. | [optional] 
**segment_count** | **int** | Number of segments with the role. | [optional] 
**requestable** | **bool** | Indicates whether the entitlement is requestable. | [optional] [default to False]
**cloud_governed** | **bool** | Indicates whether the entitlement is cloud governed. | [optional] [default to False]
**created** | **datetime** | ISO-8601 date-time referring to the time when the object was created. | [optional] 
**privileged** | **bool** | Indicates whether the entitlement is privileged. | [optional] [default to False]
**identity_count** | **int** | Number of identities who have access to the entitlement. | [optional] 
**tags** | **[]str** | Tags that have been applied to the object. | [optional] 
}

## Example

```python
from sailpoint.v2024.models.entitlement_document import EntitlementDocument

entitlement_document = EntitlementDocument(
id='2c91808375d8e80a0175e1f88a575222',
name='john.doe',
type='identity',
modified='2018-06-25T20:22:28.104Z',
synced='',
display_name='Admin',
source=sailpoint.v2024.models.entitlement_document_all_of_source.EntitlementDocument_allOf_source(
                    id = '2c91808b6e9e6fb8016eec1a2b6f7b5f', 
                    name = 'ODS-HR-Employees', ),
segments=[
                    sailpoint.v2024.models.base_segment.BaseSegment(
                        id = 'b009b6e3-b56d-41d9-8735-cb532ea0b017', 
                        name = 'Test Segment', )
                    ],
segment_count=1,
requestable=False,
cloud_governed=False,
created='2018-06-25T20:22:28.104Z',
privileged=False,
identity_count=3,
tags=[TAG_1, TAG_2]
)

```
[[Back to top]](#) 

