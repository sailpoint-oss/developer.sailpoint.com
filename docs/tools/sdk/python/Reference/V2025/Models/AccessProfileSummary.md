---
id: v2025-access-profile-summary
title: AccessProfileSummary
pagination_label: AccessProfileSummary
sidebar_label: AccessProfileSummary
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccessProfileSummary', 'V2025AccessProfileSummary'] 
slug: /tools/sdk/python/v2025/models/access-profile-summary
tags: ['SDK', 'Software Development Kit', 'AccessProfileSummary', 'V2025AccessProfileSummary']
---

# AccessProfileSummary

This is a summary representation of an access profile.

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
}

## Example

```python
from sailpoint.v2025.models.access_profile_summary import AccessProfileSummary

access_profile_summary = AccessProfileSummary(
id='2c91808568c529c60168cca6f90c1313',
name='John Doe',
display_name='John Q. Doe',
description='',
type='ACCESS_PROFILE',
source=sailpoint.v2025.models.reference.Reference(
                    id = '2c91808568c529c60168cca6f90c1313', 
                    name = 'John Doe', ),
owner=,
revocable=True
)

```
[[Back to top]](#) 

