---
id: v2024-object-mapping-response
title: ObjectMappingResponse
pagination_label: ObjectMappingResponse
sidebar_label: ObjectMappingResponse
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ObjectMappingResponse', 'V2024ObjectMappingResponse'] 
slug: /tools/sdk/python/v2024/models/object-mapping-response
tags: ['SDK', 'Software Development Kit', 'ObjectMappingResponse', 'V2024ObjectMappingResponse']
---

# ObjectMappingResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object_mapping_id** | **str** | Id of the object mapping | [optional] 
**object_type** |  **Enum** [  'ACCESS_PROFILE',    'ACCESS_REQUEST_CONFIG',    'ATTR_SYNC_SOURCE_CONFIG',    'AUTH_ORG',    'CAMPAIGN_FILTER',    'ENTITLEMENT',    'FORM_DEFINITION',    'GOVERNANCE_GROUP',    'IDENTITY',    'IDENTITY_OBJECT_CONFIG',    'IDENTITY_PROFILE',    'LIFECYCLE_STATE',    'NOTIFICATION_TEMPLATE',    'PASSWORD_POLICY',    'PASSWORD_SYNC_GROUP',    'PUBLIC_IDENTITIES_CONFIG',    'ROLE',    'RULE',    'SEGMENT',    'SERVICE_DESK_INTEGRATION',    'SOD_POLICY',    'SOURCE',    'TAG',    'TRANSFORM',    'TRIGGER_SUBSCRIPTION',    'WORKFLOW' ] | Type of the object the mapping value applies to | [optional] 
**json_path** | **str** | JSONPath expression denoting the path within the object where the mapping value should be applied | [optional] 
**source_value** | **str** | Original value at the jsonPath location within the object | [optional] 
**target_value** | **str** | Value to be assigned at the jsonPath location within the object | [optional] 
**enabled** | **bool** | Whether or not this object mapping is enabled | [optional] [default to False]
**created** | **str** | Object mapping creation timestamp | [optional] 
**modified** | **str** | Object mapping latest update timestamp | [optional] 
}

## Example

```python
from sailpoint.v2024.models.object_mapping_response import ObjectMappingResponse

object_mapping_response = ObjectMappingResponse(
object_mapping_id='3d6e0144-963f-4bd6-8d8d-d77b4e507ce4',
object_type='IDENTITY',
json_path='$.name',
source_value='My Governance Group Name',
target_value='My New Governance Group Name',
enabled=False,
created='2024-03-19T23:18:53.732Z',
modified='2024-03-19T23:18:53.732Z'
)

```
[[Back to top]](#) 

