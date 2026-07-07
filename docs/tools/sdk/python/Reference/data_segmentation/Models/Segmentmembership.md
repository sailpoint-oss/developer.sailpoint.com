---
id: segmentmembership
title: Segmentmembership
pagination_label: Segmentmembership
sidebar_label: Segmentmembership
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Segmentmembership', 'Segmentmembership'] 
slug: /tools/sdk/python/data-segmentation/models/segmentmembership
tags: ['SDK', 'Software Development Kit', 'Segmentmembership', 'Segmentmembership']
---

# Segmentmembership

Contains the segments and types that an identity is associated with

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**segments** | **[]str** | List of segment ids that the identity is associated with. | [optional] 
**all_access_scopes** | [**[]Scopetype**](scopetype) | They type of scopes that are assigned to the identity. | [optional] 
**refresh_by** | **datetime** | Date time string that lets you know when the membership data is going to be refreshed. | [optional] 
}

## Example

```python
from sailpoint.data_segmentation.models.segmentmembership import Segmentmembership

segmentmembership = Segmentmembership(
segments=[
                    '0f11f2a4-7c94-4bf3-a2bd-742580fe3bde'
                    ],
all_access_scopes=[
                    'ALL'
                    ],
refresh_by='2020-01-01T00:00Z'
)

```
[[Back to top]](#) 

