---
id: rightsetdto
title: Rightsetdto
pagination_label: Rightsetdto
sidebar_label: Rightsetdto
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Rightsetdto', 'Rightsetdto'] 
slug: /tools/sdk/python/custom-user-levels/models/rightsetdto
tags: ['SDK', 'Software Development Kit', 'Rightsetdto', 'Rightsetdto']
---

# Rightsetdto

A RightSetDTO represents a collection of rights that assigned to capability or scope, enabling them to possess specific rights to access corresponding APIs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The unique identifier of the RightSet. | [optional] 
**name** | **str** | The human-readable name of the RightSet. | [optional] 
**description** | **str** | A human-readable description of the RightSet. | [optional] 
**category** | **str** | The category of the RightSet. | [optional] 
**rights** | **[]str** | Right is the most granular unit that determines specific API permissions, this is a list of rights associated with the RightSet. | [optional] 
**right_set_ids** | **[]str** | List of unique identifiers for related RightSets, current RightSet contains rights from these RightSets. | [optional] 
**ui_assignable_child_right_set_ids** | **[]str** | List of unique identifiers for UI-assignable child RightSets, used to build UI components. | [optional] 
**ui_assignable** | **bool** | Indicates whether the RightSet is UI-assignable. | [optional] [default to False]
**translated_name** | **str** | The translated name of the RightSet. | [optional] 
**translated_description** | **str** | The translated description of the RightSet. | [optional] 
**parent_id** | **str** | The unique identifier of the parent RightSet for UI Assignable RightSet. | [optional] 
}

## Example

```python
from sailpoint.custom_user_levels.models.rightsetdto import Rightsetdto

rightsetdto = Rightsetdto(
id='idn:ui-right-set-example',
name='Right Set Name',
description='This is a description of the RightSet.',
category='identity',
rights=["idn:ui-right-set-example:read","idn:ui-right-set-example:write"],
right_set_ids=["idn:ui-right-set-example-update","idn:ui-right-set-example-delete"],
ui_assignable_child_right_set_ids=["idn:ui-right-set-example-detail","idn:ui-right-set-example-management"],
ui_assignable=True,
translated_name='Translated Right Set Name',
translated_description='This is a translated description of the RightSet.',
parent_id='idn:ui-parent-example'
)

```
[[Back to top]](#) 

