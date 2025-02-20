---
id: v2024-lookup-step
title: LookupStep
pagination_label: LookupStep
sidebar_label: LookupStep
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'LookupStep', 'V2024LookupStep'] 
slug: /tools/sdk/python/v2024/models/lookup-step
tags: ['SDK', 'Software Development Kit', 'LookupStep', 'V2024LookupStep']
---

# LookupStep

The definition of an Identity according to the Reassignment Configuration service

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reassigned_to_id** | **str** | The ID of the Identity who work is reassigned to | [optional] 
**reassigned_from_id** | **str** | The ID of the Identity who work is reassigned from | [optional] 
**reassignment_type** | [**ReassignmentTypeEnum**](reassignment-type-enum) |  | [optional] 
}

## Example

```python
from sailpoint.v2024.models.lookup_step import LookupStep

lookup_step = LookupStep(
reassigned_to_id='869320b6b6f34a169b6178b1a865e66f',
reassigned_from_id='51948a8f306a4e7a9a6f8f5d032fa59e',
reassignment_type='AUTOMATIC_REASSIGNMENT'
)

```
[[Back to top]](#) 

