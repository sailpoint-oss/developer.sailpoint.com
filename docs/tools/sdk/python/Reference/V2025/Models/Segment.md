---
id: v2025-segment
title: Segment
pagination_label: Segment
sidebar_label: Segment
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Segment', 'V2025Segment'] 
slug: /tools/sdk/python/v2025/models/segment
tags: ['SDK', 'Software Development Kit', 'Segment', 'V2025Segment']
---

# Segment


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The segment's ID. | [optional] 
**name** | **str** | The segment's business name. | [optional] 
**created** | **datetime** | The time when the segment is created. | [optional] 
**modified** | **datetime** | The time when the segment is modified. | [optional] 
**description** | **str** | The segment's optional description. | [optional] 
**owner** | [**OwnerReferenceSegments**](owner-reference-segments) |  | [optional] 
**visibility_criteria** | [**SegmentVisibilityCriteria**](segment-visibility-criteria) |  | [optional] 
**active** | **bool** | This boolean indicates whether the segment is currently active. Inactive segments have no effect. | [optional] [default to False]
}

## Example

```python
from sailpoint.v2025.models.segment import Segment

segment = Segment(
id='0f11f2a4-7c94-4bf3-a2bd-742580fe3bde',
name='segment-xyz',
created='2020-01-01T00:00Z',
modified='2020-01-01T00:00Z',
description='This segment represents xyz',
owner=sailpoint.v2025.models.owner_reference_segments.OwnerReferenceSegments(
                    type = 'IDENTITY', 
                    id = '2c9180a46faadee4016fb4e018c20639', 
                    name = 'support', ),
visibility_criteria=,
active=True
)

```
[[Back to top]](#) 

