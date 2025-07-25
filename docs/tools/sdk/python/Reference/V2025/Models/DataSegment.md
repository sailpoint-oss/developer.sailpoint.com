---
id: v2025-data-segment
title: DataSegment
pagination_label: DataSegment
sidebar_label: DataSegment
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'DataSegment', 'V2025DataSegment'] 
slug: /tools/sdk/python/v2025/models/data-segment
tags: ['SDK', 'Software Development Kit', 'DataSegment', 'V2025DataSegment']
---

# DataSegment


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The segment's ID. | [optional] 
**name** | **str** | The segment's business name. | [optional] 
**created** | **datetime** | The time when the segment is created. | [optional] 
**modified** | **datetime** | The time when the segment is modified. | [optional] 
**description** | **str** | The segment's optional description. | [optional] 
**scopes** | [**[]Scope**](scope) | List of Scopes that are assigned to the segment | [optional] 
**member_selection** | [**[]Ref**](ref) | List of Identities that are assigned to the segment | [optional] 
**member_filter** | [**VisibilityCriteria**](visibility-criteria) |  | [optional] 
**membership** | [**MembershipType**](membership-type) |  | [optional] 
**enabled** | **bool** | This boolean indicates whether the segment is currently active. Inactive segments have no effect. | [optional] [default to False]
**published** | **bool** | This boolean indicates whether the segment is being applied to the accounts. If unpublished its being actively modified to until published | [optional] [default to False]
}

## Example

```python
from sailpoint.v2025.models.data_segment import DataSegment

data_segment = DataSegment(
id='0f11f2a4-7c94-4bf3-a2bd-742580fe3bde',
name='segment-xyz',
created='2020-01-01T00:00Z',
modified='2020-01-01T00:00Z',
description='This segment represents xyz',
scopes=[{scope=ENTITLEMENT, visibility=SELECTION, scopeFilter=null, scopeSelection=[{type=ENTITLEMENT, id=34d73f611449463ea4fdcf02cda0c397}]}],
member_selection=[{type=IDENTITY, id=29cb6c061da843ea8be4b3125f248f2a}, {type=IDENTITY, id=f7b1b8a35fed4fd4ad2982014e137e19}],
member_filter=sailpoint.v2025.models.visibility_criteria.Visibility Criteria(
                    expression = sailpoint.v2025.models.expression.Expression(
                        operator = 'EQUALS', 
                        attribute = 'location', 
                        value = sailpoint.v2025.models.value.Value(
                            type = 'STRING', ), 
                        children = [], ), ),
membership='ALL',
enabled=True,
published=True
)

```
[[Back to top]](#) 

