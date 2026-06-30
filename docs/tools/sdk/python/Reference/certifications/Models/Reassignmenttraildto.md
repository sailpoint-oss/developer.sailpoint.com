---
id: reassignmenttraildto
title: Reassignmenttraildto
pagination_label: Reassignmenttraildto
sidebar_label: Reassignmenttraildto
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Reassignmenttraildto', 'Reassignmenttraildto'] 
slug: /tools/sdk/python/certifications/models/reassignmenttraildto
tags: ['SDK', 'Software Development Kit', 'Reassignmenttraildto', 'Reassignmenttraildto']
---

# Reassignmenttraildto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**previous_owner** | **str** | The ID of previous owner identity. | [optional] 
**new_owner** | **str** | The ID of new owner identity. | [optional] 
**reassignment_type** | **str** | The type of reassignment. | [optional] 
}

## Example

```python
from sailpoint.certifications.models.reassignmenttraildto import Reassignmenttraildto

reassignmenttraildto = Reassignmenttraildto(
previous_owner='ef38f94347e94562b5bb8424a56397d8',
new_owner='ef38f94347e94562b5bb8424a56397a3',
reassignment_type='AUTOMATIC_REASSIGNMENT'
)

```
[[Back to top]](#) 

