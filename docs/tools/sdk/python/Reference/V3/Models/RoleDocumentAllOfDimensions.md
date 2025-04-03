---
id: role-document-all-of-dimensions
title: RoleDocumentAllOfDimensions
pagination_label: RoleDocumentAllOfDimensions
sidebar_label: RoleDocumentAllOfDimensions
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'RoleDocumentAllOfDimensions', 'RoleDocumentAllOfDimensions'] 
slug: /tools/sdk/python/v3/models/role-document-all-of-dimensions
tags: ['SDK', 'Software Development Kit', 'RoleDocumentAllOfDimensions', 'RoleDocumentAllOfDimensions']
---

# RoleDocumentAllOfDimensions


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Unique ID of the dimension. | [optional] 
**name** | **str** | Name of the dimension. | [optional] 
**description** | **str** | Description of the dimension. | [optional] 
**entitlements** | [**[]RoleDocumentAllOfEntitlements1**](role-document-all-of-entitlements1) | Entitlements included with the role. | [optional] 
**access_profiles** | [**[]BaseAccessProfile**](base-access-profile) | Access profiles included in the dimension. | [optional] 
}

## Example

```python
from sailpoint.v3.models.role_document_all_of_dimensions import RoleDocumentAllOfDimensions

role_document_all_of_dimensions = RoleDocumentAllOfDimensions(
id='b3c28992ba964a40a7598978139d1ced',
name='Manager Austin Branch',
description='Managers located at the Austin branch',
entitlements=[
                    null
                    ],
access_profiles=[
                    sailpoint.v3.models.base_access_profile.BaseAccessProfile(
                        id = '2c91809c6faade77016fb4f0b63407ae', 
                        name = 'Admin Access', )
                    ]
)

```
[[Back to top]](#) 

