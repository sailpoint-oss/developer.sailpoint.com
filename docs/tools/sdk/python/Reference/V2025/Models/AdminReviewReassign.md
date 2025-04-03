---
id: v2025-admin-review-reassign
title: AdminReviewReassign
pagination_label: AdminReviewReassign
sidebar_label: AdminReviewReassign
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AdminReviewReassign', 'V2025AdminReviewReassign'] 
slug: /tools/sdk/python/v2025/models/admin-review-reassign
tags: ['SDK', 'Software Development Kit', 'AdminReviewReassign', 'V2025AdminReviewReassign']
---

# AdminReviewReassign


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**certification_ids** | **[]str** | List of certification IDs to reassign | [optional] 
**reassign_to** | [**AdminReviewReassignReassignTo**](admin-review-reassign-reassign-to) |  | [optional] 
**reason** | **str** | Comment to explain why the certification was reassigned | [optional] 
}

## Example

```python
from sailpoint.v2025.models.admin_review_reassign import AdminReviewReassign

admin_review_reassign = AdminReviewReassign(
certification_ids=[af3859464779471211bb8424a563abc1, af3859464779471211bb8424a563abc2, af3859464779471211bb8424a563abc3],
reassign_to=sailpoint.v2025.models.admin_review_reassign_reassign_to.AdminReviewReassign_reassignTo(
                    id = 'ef38f94347e94562b5bb8424a56397d8', 
                    type = 'IDENTITY', ),
reason='reassigned for some reason'
)

```
[[Back to top]](#) 

