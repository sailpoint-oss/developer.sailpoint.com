---
id: v2025-access-item-ref
title: AccessItemRef
pagination_label: AccessItemRef
sidebar_label: AccessItemRef
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccessItemRef', 'V2025AccessItemRef'] 
slug: /tools/sdk/python/v2025/models/access-item-ref
tags: ['SDK', 'Software Development Kit', 'AccessItemRef', 'V2025AccessItemRef']
---

# AccessItemRef


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | ID of the access item to retrieve the recommendation for. | [optional] 
**type** |  **Enum** [  'ENTITLEMENT',    'ACCESS_PROFILE',    'ROLE' ] | Access item's type. | [optional] 
}

## Example

```python
from sailpoint.v2025.models.access_item_ref import AccessItemRef

access_item_ref = AccessItemRef(
id='2c938083633d259901633d2623ec0375',
type='ENTITLEMENT'
)

```
[[Back to top]](#) 

