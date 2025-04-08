---
id: requested-item-details
title: RequestedItemDetails
pagination_label: RequestedItemDetails
sidebar_label: RequestedItemDetails
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'RequestedItemDetails', 'RequestedItemDetails'] 
slug: /tools/sdk/python/v3/models/requested-item-details
tags: ['SDK', 'Software Development Kit', 'RequestedItemDetails', 'RequestedItemDetails']
---

# RequestedItemDetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'ACCESS_PROFILE',    'ENTITLEMENT',    'ROLE' ] | The type of access item requested. | [optional] 
**id** | **str** | The id of the access item requested. | [optional] 
}

## Example

```python
from sailpoint.v3.models.requested_item_details import RequestedItemDetails

requested_item_details = RequestedItemDetails(
type='ENTITLEMENT',
id='779c6fd7171540bba1184e5946112c28'
)

```
[[Back to top]](#) 

