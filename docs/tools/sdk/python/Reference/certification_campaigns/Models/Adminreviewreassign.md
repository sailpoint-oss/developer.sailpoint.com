---
id: adminreviewreassign
title: Adminreviewreassign
pagination_label: Adminreviewreassign
sidebar_label: Adminreviewreassign
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Adminreviewreassign', 'Adminreviewreassign'] 
slug: /tools/sdk/python/certification-campaigns/models/adminreviewreassign
tags: ['SDK', 'Software Development Kit', 'Adminreviewreassign', 'Adminreviewreassign']
---

# Adminreviewreassign


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**certification_ids** | **[]str** | List of certification IDs to reassign | [optional] 
**reassign_to** | [**AdminreviewreassignReassignTo**](adminreviewreassign-reassign-to) |  | [optional] 
**reason** | **str** | Comment to explain why the certification was reassigned | [optional] 
}

## Example

```python
from sailpoint.certification_campaigns.models.adminreviewreassign import Adminreviewreassign

adminreviewreassign = Adminreviewreassign(
certification_ids=["af3859464779471211bb8424a563abc1","af3859464779471211bb8424a563abc2","af3859464779471211bb8424a563abc3"],
reassign_to=sailpoint.certification_campaigns.models.adminreviewreassign_reassign_to.adminreviewreassign_reassignTo(
                    id = 'ef38f94347e94562b5bb8424a56397d8', 
                    type = 'IDENTITY', ),
reason='reassigned for some reason'
)

```
[[Back to top]](#) 

