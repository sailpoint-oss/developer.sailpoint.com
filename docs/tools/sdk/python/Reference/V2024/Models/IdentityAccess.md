---
id: v2024-identity-access
title: IdentityAccess
pagination_label: IdentityAccess
sidebar_label: IdentityAccess
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'IdentityAccess', 'V2024IdentityAccess'] 
slug: /tools/sdk/python/v2024/models/identity-access
tags: ['SDK', 'Software Development Kit', 'IdentityAccess', 'V2024IdentityAccess']
---

# IdentityAccess


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The unique ID of the referenced object. | [optional] 
**name** | **str** | The human readable name of the referenced object. | [optional] 
**display_name** | **str** |  | [optional] 
**description** | **str** | Description of access item. | [optional] 
**type** | **str** | Type of the access item. | [optional] 
**source** | [**Reference**](reference) |  | [optional] 
**owner** | [**DisplayReference**](display-reference) |  | [optional] 
**revocable** | **bool** |  | [optional] 
**privileged** | **bool** |  | [optional] 
**attribute** | **str** |  | [optional] 
**value** | **str** |  | [optional] 
**standalone** | **bool** |  | [optional] 
**disabled** | **bool** |  | [optional] 
}

## Example

```python
from sailpoint.v2024.models.identity_access import IdentityAccess

identity_access = IdentityAccess(
id='2c91808568c529c60168cca6f90c1313',
name='John Doe',
display_name='John Q. Doe',
description='',
type='ROLE',
source=sailpoint.v2024.models.reference.Reference(
                    id = '2c91808568c529c60168cca6f90c1313', 
                    name = 'John Doe', ),
owner=,
revocable=True,
privileged=False,
attribute='memberOf',
value='CN=Buyer,OU=Groups,OU=Demo,DC=seri,DC=sailpointdemo,DC=com',
standalone=False,
disabled=True
)

```
[[Back to top]](#) 

