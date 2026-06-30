---
id: reviewreassign
title: Reviewreassign
pagination_label: Reviewreassign
sidebar_label: Reviewreassign
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Reviewreassign', 'Reviewreassign'] 
slug: /tools/sdk/python/certifications/models/reviewreassign
tags: ['SDK', 'Software Development Kit', 'Reviewreassign', 'Reviewreassign']
---

# Reviewreassign


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reassign** | [**[]Reassignreference**](reassignreference) |  | [required]
**reassign_to** | **str** | The ID of the identity to which the certification is reassigned | [required]
**reason** | **str** | The reason comment for why the reassign was made | [required]
}

## Example

```python
from sailpoint.certifications.models.reviewreassign import Reviewreassign

reviewreassign = Reviewreassign(
reassign=[
                    sailpoint.certifications.models.reassign_reference.Reassign Reference(
                        id = 'ef38f94347e94562b5bb8424a56397d8', 
                        type = 'ITEM', )
                    ],
reassign_to='ef38f94347e94562b5bb8424a56397d8',
reason='reassigned for some reason'
)

```
[[Back to top]](#) 

