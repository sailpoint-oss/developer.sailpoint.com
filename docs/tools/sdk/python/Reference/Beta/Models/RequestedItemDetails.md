---
id: beta-requested-item-details
title: RequestedItemDetails
pagination_label: RequestedItemDetails
sidebar_label: RequestedItemDetails
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'RequestedItemDetails', 'BetaRequestedItemDetails'] 
slug: /tools/sdk/python/beta/models/requested-item-details
tags: ['SDK', 'Software Development Kit', 'RequestedItemDetails', 'BetaRequestedItemDetails']
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
from sailpoint.beta.models.requested_item_details import RequestedItemDetails

requested_item_details = RequestedItemDetails(
type='ENTITLEMENT',
id='779c6fd7171540bba1184e5946112c28'
)

```
[[Back to top]](#) 

