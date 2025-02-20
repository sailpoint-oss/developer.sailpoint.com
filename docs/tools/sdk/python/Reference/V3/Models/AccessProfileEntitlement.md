---
id: access-profile-entitlement
title: AccessProfileEntitlement
pagination_label: AccessProfileEntitlement
sidebar_label: AccessProfileEntitlement
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccessProfileEntitlement', 'AccessProfileEntitlement'] 
slug: /tools/sdk/python/v3/models/access-profile-entitlement
tags: ['SDK', 'Software Development Kit', 'AccessProfileEntitlement', 'AccessProfileEntitlement']
---

# AccessProfileEntitlement

EntitlementReference

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The unique ID of the referenced object. | [optional] 
**name** | **str** | The human readable name of the referenced object. | [optional] 
**display_name** | **str** |  | [optional] 
**type** | [**DtoType**](dto-type) |  | [optional] 
**description** | **str** |  | [optional] 
**source** | [**Reference**](reference) |  | [optional] 
**privileged** | **bool** |  | [optional] 
**attribute** | **str** |  | [optional] 
**value** | **str** |  | [optional] 
**standalone** | **bool** |  | [optional] 
}

## Example

```python
from sailpoint.v3.models.access_profile_entitlement import AccessProfileEntitlement

access_profile_entitlement = AccessProfileEntitlement(
id='2c91808568c529c60168cca6f90c1313',
name='John Doe',
display_name='John Q. Doe',
type='IDENTITY',
description='',
source=sailpoint.v3.models.reference.Reference(
                    id = '2c91808568c529c60168cca6f90c1313', 
                    name = 'John Doe', ),
privileged=False,
attribute='memberOf',
value='CN=Buyer,OU=Groups,OU=Demo,DC=seri,DC=sailpointdemo,DC=com',
standalone=False
)

```
[[Back to top]](#) 

