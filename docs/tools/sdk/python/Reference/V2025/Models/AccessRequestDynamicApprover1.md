---
id: v2025-access-request-dynamic-approver1
title: AccessRequestDynamicApprover1
pagination_label: AccessRequestDynamicApprover1
sidebar_label: AccessRequestDynamicApprover1
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccessRequestDynamicApprover1', 'V2025AccessRequestDynamicApprover1'] 
slug: /tools/sdk/python/v2025/models/access-request-dynamic-approver1
tags: ['SDK', 'Software Development Kit', 'AccessRequestDynamicApprover1', 'V2025AccessRequestDynamicApprover1']
---

# AccessRequestDynamicApprover1


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The unique ID of the identity to add to the approver list for the access request. | [required]
**name** | **str** | The name of the identity to add to the approver list for the access request. | [required]
**type** |  **Enum** [  'IDENTITY',    'GOVERNANCE_GROUP' ] | The type of object being referenced. | [required]
}

## Example

```python
from sailpoint.v2025.models.access_request_dynamic_approver1 import AccessRequestDynamicApprover1

access_request_dynamic_approver1 = AccessRequestDynamicApprover1(
id='2c91808b6ef1d43e016efba0ce470906',
name='Adam Adams',
type=IDENTITY
)

```
[[Back to top]](#) 

