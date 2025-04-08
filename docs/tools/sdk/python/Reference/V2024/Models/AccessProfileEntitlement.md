---
id: v2024-access-profile-entitlement
title: AccessProfileEntitlement
pagination_label: AccessProfileEntitlement
sidebar_label: AccessProfileEntitlement
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccessProfileEntitlement', 'V2024AccessProfileEntitlement'] 
slug: /tools/sdk/python/v2024/models/access-profile-entitlement
tags: ['SDK', 'Software Development Kit', 'AccessProfileEntitlement', 'V2024AccessProfileEntitlement']
---

# AccessProfileEntitlement

EntitlementReference

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The unique ID of the referenced object. | [optional] 
**name** | **str** | The human readable name of the referenced object. | [optional] 
**display_name** | **str** |  | [optional] 
**description** | **str** | Description of access item. | [optional] 
**source** | [**Reference**](reference) |  | [optional] 
**type** | **str** | Type of the access item. | [optional] 
**privileged** | **bool** |  | [optional] 
**attribute** | **str** |  | [optional] 
**value** | **str** |  | [optional] 
**standalone** | **bool** |  | [optional] 
}

## Example

```python
from sailpoint.v2024.models.access_profile_entitlement import AccessProfileEntitlement

access_profile_entitlement = AccessProfileEntitlement(
id='2c91808568c529c60168cca6f90c1313',
name='John Doe',
display_name='John Q. Doe',
description='',
source=sailpoint.v2024.models.reference.Reference(
                    id = '2c91808568c529c60168cca6f90c1313', 
                    name = 'John Doe', ),
type='ENTITLEMENT',
privileged=False,
attribute='memberOf',
value='CN=Buyer,OU=Groups,OU=Demo,DC=seri,DC=sailpointdemo,DC=com',
standalone=False
)

```
[[Back to top]](#) 

