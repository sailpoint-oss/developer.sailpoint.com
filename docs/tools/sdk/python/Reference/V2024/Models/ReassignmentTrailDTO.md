---
id: v2024-reassignment-trail-dto
title: ReassignmentTrailDTO
pagination_label: ReassignmentTrailDTO
sidebar_label: ReassignmentTrailDTO
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ReassignmentTrailDTO', 'V2024ReassignmentTrailDTO'] 
slug: /tools/sdk/python/v2024/models/reassignment-trail-dto
tags: ['SDK', 'Software Development Kit', 'ReassignmentTrailDTO', 'V2024ReassignmentTrailDTO']
---

# ReassignmentTrailDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**previous_owner** | **str** | The ID of previous owner identity. | [optional] 
**new_owner** | **str** | The ID of new owner identity. | [optional] 
**reassignment_type** | **str** | The type of reassignment. | [optional] 
}

## Example

```python
from sailpoint.v2024.models.reassignment_trail_dto import ReassignmentTrailDTO

reassignment_trail_dto = ReassignmentTrailDTO(
previous_owner='ef38f94347e94562b5bb8424a56397d8',
new_owner='ef38f94347e94562b5bb8424a56397a3',
reassignment_type='AUTOMATIC_REASSIGNMENT'
)

```
[[Back to top]](#) 

