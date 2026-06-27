---
id: identityprofileexportedobject-self
title: IdentityprofileexportedobjectSelf
pagination_label: IdentityprofileexportedobjectSelf
sidebar_label: IdentityprofileexportedobjectSelf
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'IdentityprofileexportedobjectSelf', 'IdentityprofileexportedobjectSelf'] 
slug: /tools/sdk/python/identity-profiles/models/identityprofileexportedobject-self
tags: ['SDK', 'Software Development Kit', 'IdentityprofileexportedobjectSelf', 'IdentityprofileexportedobjectSelf']
---

# IdentityprofileexportedobjectSelf

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
from sailpoint.identity_profiles.models.identityprofileexportedobject_self import IdentityprofileexportedobjectSelf

identityprofileexportedobject_self = IdentityprofileexportedobjectSelf(
type='SOURCE',
id='2c9180835d191a86015d28455b4b232a',
name='HR Active Directory'
)

```
[[Back to top]](#) 

