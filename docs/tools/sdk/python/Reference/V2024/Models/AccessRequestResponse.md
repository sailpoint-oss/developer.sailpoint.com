---
id: v2024-access-request-response
title: AccessRequestResponse
pagination_label: AccessRequestResponse
sidebar_label: AccessRequestResponse
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccessRequestResponse', 'V2024AccessRequestResponse'] 
slug: /tools/sdk/python/v2024/models/access-request-response
tags: ['SDK', 'Software Development Kit', 'AccessRequestResponse', 'V2024AccessRequestResponse']
---

# AccessRequestResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**new_requests** | [**[]AccessRequestTracking**](access-request-tracking) | A list of new access request tracking data mapped to the values requested. | [optional] 
**existing_requests** | [**[]AccessRequestTracking**](access-request-tracking) | A list of existing access request tracking data mapped to the values requested.  This indicates access has already been requested for this item. | [optional] 
}

## Example

```python
from sailpoint.v2024.models.access_request_response import AccessRequestResponse

access_request_response = AccessRequestResponse(
new_requests=[{requestedFor=899fd612ecfc4cf3bf48f14d0afdef89, requestedItemsDetails=[{type=ENTITLEMENT, id=779c6fd7171540bba1184e5946112c28}], attributesHash=-1928438224, accessRequestIds=[5d3118c518a44ec7805450d53479ccdb]}],
existing_requests=[{requestedFor=899fd612ecfc4cf3bf48f14d0afdef89, requestedItemsDetails=[{type=ROLE, id=779c6fd7171540bbc1184e5946112c28}], attributesHash=2843118224, accessRequestIds=[5d3118c518a44ec7805450d53479ccdc]}]
)

```
[[Back to top]](#) 

