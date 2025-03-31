---
id: v2024-reassignment-reference
title: ReassignmentReference
pagination_label: ReassignmentReference
sidebar_label: ReassignmentReference
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ReassignmentReference', 'V2024ReassignmentReference'] 
slug: /tools/sdk/python/v2024/models/reassignment-reference
tags: ['SDK', 'Software Development Kit', 'ReassignmentReference', 'V2024ReassignmentReference']
---

# ReassignmentReference


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The ID of item or identity being reassigned. | [required]
**type** |  **Enum** [  'TARGET_SUMMARY',    'ITEM',    'IDENTITY_SUMMARY' ] | The type of item or identity being reassigned. | [required]
}

## Example

```python
from sailpoint.v2024.models.reassignment_reference import ReassignmentReference

reassignment_reference = ReassignmentReference(
id='ef38f94347e94562b5bb8424a56397d8',
type='ITEM'
)

```
[[Back to top]](#) 

