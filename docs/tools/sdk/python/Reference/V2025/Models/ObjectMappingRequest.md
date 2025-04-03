---
id: v2025-object-mapping-request
title: ObjectMappingRequest
pagination_label: ObjectMappingRequest
sidebar_label: ObjectMappingRequest
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ObjectMappingRequest', 'V2025ObjectMappingRequest'] 
slug: /tools/sdk/python/v2025/models/object-mapping-request
tags: ['SDK', 'Software Development Kit', 'ObjectMappingRequest', 'V2025ObjectMappingRequest']
---

# ObjectMappingRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object_type** |  **Enum** [  'ACCESS_PROFILE',    'ACCESS_REQUEST_CONFIG',    'ATTR_SYNC_SOURCE_CONFIG',    'AUTH_ORG',    'CAMPAIGN_FILTER',    'ENTITLEMENT',    'FORM_DEFINITION',    'GOVERNANCE_GROUP',    'IDENTITY',    'IDENTITY_OBJECT_CONFIG',    'IDENTITY_PROFILE',    'LIFECYCLE_STATE',    'NOTIFICATION_TEMPLATE',    'PASSWORD_POLICY',    'PASSWORD_SYNC_GROUP',    'PUBLIC_IDENTITIES_CONFIG',    'ROLE',    'RULE',    'SEGMENT',    'SERVICE_DESK_INTEGRATION',    'SOD_POLICY',    'SOURCE',    'TAG',    'TRANSFORM',    'TRIGGER_SUBSCRIPTION',    'WORKFLOW' ] | Type of the object the mapping value applies to, must be one from enum | [required]
**json_path** | **str** | JSONPath expression denoting the path within the object where the mapping value should be applied | [required]
**source_value** | **str** | Original value at the jsonPath location within the object | [required]
**target_value** | **str** | Value to be assigned at the jsonPath location within the object | [required]
**enabled** | **bool** | Whether or not this object mapping is enabled | [optional] [default to False]
}

## Example

```python
from sailpoint.v2025.models.object_mapping_request import ObjectMappingRequest

object_mapping_request = ObjectMappingRequest(
object_type='IDENTITY',
json_path='$.name',
source_value='My Governance Group Name',
target_value='My New Governance Group Name',
enabled=False
)

```
[[Back to top]](#) 

