---
id: v2024-reassign-reference
title: ReassignReference
pagination_label: ReassignReference
sidebar_label: ReassignReference
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ReassignReference', 'V2024ReassignReference'] 
slug: /tools/sdk/python/v2024/models/reassign-reference
tags: ['SDK', 'Software Development Kit', 'ReassignReference', 'V2024ReassignReference']
---

# ReassignReference


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The ID of item or identity being reassigned. | [required]
**type** |  **Enum** [  'TARGET_SUMMARY',    'ITEM',    'IDENTITY_SUMMARY' ] | The type of item or identity being reassigned. | [required]
}

## Example

```python
from sailpoint.v2024.models.reassign_reference import ReassignReference

reassign_reference = ReassignReference(
id='ef38f94347e94562b5bb8424a56397d8',
type='ITEM'
)

```
[[Back to top]](#) 

