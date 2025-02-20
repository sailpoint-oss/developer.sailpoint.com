---
id: access-review-reassignment
title: AccessReviewReassignment
pagination_label: AccessReviewReassignment
sidebar_label: AccessReviewReassignment
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccessReviewReassignment', 'AccessReviewReassignment'] 
slug: /tools/sdk/python/v3/models/access-review-reassignment
tags: ['SDK', 'Software Development Kit', 'AccessReviewReassignment', 'AccessReviewReassignment']
---

# AccessReviewReassignment


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reassign** | [**[]ReassignReference**](reassign-reference) |  | [required]
**reassign_to** | **str** | The ID of the identity to which the certification is reassigned | [required]
**reason** | **str** | The reason comment for why the reassign was made | [required]
}

## Example

```python
from sailpoint.v3.models.access_review_reassignment import AccessReviewReassignment

access_review_reassignment = AccessReviewReassignment(
reassign=[
                    sailpoint.v3.models.reassign_reference.ReassignReference(
                        id = 'ef38f94347e94562b5bb8424a56397d8', 
                        type = 'ITEM', )
                    ],
reassign_to='ef38f94347e94562b5bb8424a56397d8',
reason='reassigned for some reason'
)

```
[[Back to top]](#) 

