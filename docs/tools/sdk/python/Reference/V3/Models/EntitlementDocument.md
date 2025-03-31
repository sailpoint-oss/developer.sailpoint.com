---
id: entitlement-document
title: EntitlementDocument
pagination_label: EntitlementDocument
sidebar_label: EntitlementDocument
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'EntitlementDocument', 'EntitlementDocument'] 
slug: /tools/sdk/python/v3/models/entitlement-document
tags: ['SDK', 'Software Development Kit', 'EntitlementDocument', 'EntitlementDocument']
---

# EntitlementDocument

Entitlement

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | ID of the referenced object. | [required]
**name** | **str** | The human readable name of the referenced object. | [required]
**modified** | **datetime** | ISO-8601 date-time referring to the time when the object was last modified. | [optional] 
**synced** | **str** | ISO-8601 date-time referring to the date-time when object was queued to be synced into search database for use in the search API.   This date-time changes anytime there is an update to the object, which triggers a synchronization event being sent to the search database.  There may be some delay between the `synced` time and the time when the updated data is actually available in the search API.  | [optional] 
**display_name** | **str** | Entitlement's display name. | [optional] 
**source** | [**EntitlementDocumentAllOfSource**](entitlement-document-all-of-source) |  | [optional] 
**segments** | [**[]BaseSegment**](base-segment) | Segments with the entitlement. | [optional] 
**segment_count** | **int** | Number of segments with the role. | [optional] 
**requestable** | **bool** | Indicates whether the entitlement is requestable. | [optional] [default to False]
**cloud_governed** | **bool** | Indicates whether the entitlement is cloud governed. | [optional] [default to False]
**created** | **datetime** | ISO-8601 date-time referring to the time when the object was created. | [optional] 
**privileged** | **bool** | Indicates whether the entitlement is privileged. | [optional] [default to False]
**tags** | **[]str** | Tags that have been applied to the object. | [optional] 
**attribute** | **str** | Attribute information for the entitlement. | [optional] 
**value** | **str** | Value of the entitlement. | [optional] 
**source_schema_object_type** | **str** | Source schema object type of the entitlement. | [optional] 
**var_schema** | **str** | Schema type of the entitlement. | [optional] 
**hash** | **str** | Read-only calculated hash value of an entitlement. | [optional] 
**attributes** | **map[string]object** | Attributes of the entitlement. | [optional] 
**truncated_attributes** | **[]str** | Truncated attributes of the entitlement. | [optional] 
**contains_data_access** | **bool** | Indicates whether the entitlement contains data access. | [optional] [default to False]
**manually_updated_fields** | [**EntitlementDocumentAllOfManuallyUpdatedFields**](entitlement-document-all-of-manually-updated-fields) |  | [optional] 
**permissions** | [**[]EntitlementDocumentAllOfPermissions**](entitlement-document-all-of-permissions) |  | [optional] 
}

## Example

```python
from sailpoint.v3.models.entitlement_document import EntitlementDocument

entitlement_document = EntitlementDocument(
id='2c91808375d8e80a0175e1f88a575222',
name='john.doe',
modified='2018-06-25T20:22:28.104Z',
synced='',
display_name='Admin',
source=sailpoint.v3.models.entitlement_document_all_of_source.EntitlementDocument_allOf_source(
                    id = '2c91808b6e9e6fb8016eec1a2b6f7b5f', 
                    name = 'ODS-HR-Employees', 
                    type = 'SOURCE', ),
segments=[
                    sailpoint.v3.models.base_segment.BaseSegment(
                        id = 'b009b6e3-b56d-41d9-8735-cb532ea0b017', 
                        name = 'Test Segment', )
                    ],
segment_count=1,
requestable=False,
cloud_governed=False,
created='2018-06-25T20:22:28.104Z',
privileged=False,
tags=[TAG_1, TAG_2],
attribute='groups',
value='1733ff75-441e-4327-9bfc-3ac445fd8cd1',
source_schema_object_type='group',
var_schema='group',
hash='c6fab95235584cca98a454a2f51e5683bc77d6a0',
attributes={ },
truncated_attributes=[
                    ''
                    ],
contains_data_access=True,
manually_updated_fields=sailpoint.v3.models.entitlement_document_all_of_manually_updated_fields.EntitlementDocument_allOf_manuallyUpdatedFields(
                    description = False, 
                    display_name = False, ),
permissions=[
                    sailpoint.v3.models.entitlement_document_all_of_permissions.EntitlementDocument_allOf_permissions(
                        target = 'SYS.GV_$TRANSACTION', 
                        rights = [
                            'SELECT'
                            ], )
                    ]
)

```
[[Back to top]](#) 

