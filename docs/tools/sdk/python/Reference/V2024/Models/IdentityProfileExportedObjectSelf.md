---
id: v2024-identity-profile-exported-object-self
title: IdentityProfileExportedObjectSelf
pagination_label: IdentityProfileExportedObjectSelf
sidebar_label: IdentityProfileExportedObjectSelf
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'IdentityProfileExportedObjectSelf', 'V2024IdentityProfileExportedObjectSelf'] 
slug: /tools/sdk/python/v2024/models/identity-profile-exported-object-self
tags: ['SDK', 'Software Development Kit', 'IdentityProfileExportedObjectSelf', 'V2024IdentityProfileExportedObjectSelf']
---

# IdentityProfileExportedObjectSelf

Self block for exported object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'ACCESS_PROFILE',    'ACCESS_REQUEST_CONFIG',    'ATTR_SYNC_SOURCE_CONFIG',    'AUTH_ORG',    'CAMPAIGN_FILTER',    'FORM_DEFINITION',    'GOVERNANCE_GROUP',    'IDENTITY_OBJECT_CONFIG',    'IDENTITY_PROFILE',    'LIFECYCLE_STATE',    'NOTIFICATION_TEMPLATE',    'PASSWORD_POLICY',    'PASSWORD_SYNC_GROUP',    'PUBLIC_IDENTITIES_CONFIG',    'ROLE',    'RULE',    'SEGMENT',    'SERVICE_DESK_INTEGRATION',    'SOD_POLICY',    'SOURCE',    'TAG',    'TRANSFORM',    'TRIGGER_SUBSCRIPTION',    'WORKFLOW' ] | Exported object's DTO type. | [optional] 
**id** | **str** | Exported object's ID. | [optional] 
**name** | **str** | Exported object's display name. | [optional] 
}

## Example

```python
from sailpoint.v2024.models.identity_profile_exported_object_self import IdentityProfileExportedObjectSelf

identity_profile_exported_object_self = IdentityProfileExportedObjectSelf(
type='SOURCE',
id='2c9180835d191a86015d28455b4b232a',
name='HR Active Directory'
)

```
[[Back to top]](#) 

