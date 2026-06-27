---
id: lookupstep
title: Lookupstep
pagination_label: Lookupstep
sidebar_label: Lookupstep
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Lookupstep', 'Lookupstep'] 
slug: /tools/sdk/python/work-reassignment/models/lookupstep
tags: ['SDK', 'Software Development Kit', 'Lookupstep', 'Lookupstep']
---

# Lookupstep

The definition of an Identity according to the Reassignment Configuration service

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reassigned_to_id** | **str** | The ID of the Identity who work is reassigned to | [optional] 
**reassigned_from_id** | **str** | The ID of the Identity who work is reassigned from | [optional] 
**reassignment_type** | [**Reassignmenttypeenum**](reassignmenttypeenum) |  | [optional] 
}

## Example

```python
from sailpoint.work_reassignment.models.lookupstep import Lookupstep

lookupstep = Lookupstep(
reassigned_to_id='869320b6b6f34a169b6178b1a865e66f',
reassigned_from_id='51948a8f306a4e7a9a6f8f5d032fa59e',
reassignment_type='AUTOMATIC_REASSIGNMENT'
)

```
[[Back to top]](#) 

