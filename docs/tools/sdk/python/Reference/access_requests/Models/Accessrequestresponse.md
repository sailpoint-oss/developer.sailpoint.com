---
id: accessrequestresponse
title: Accessrequestresponse
pagination_label: Accessrequestresponse
sidebar_label: Accessrequestresponse
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Accessrequestresponse', 'Accessrequestresponse'] 
slug: /tools/sdk/python/access-requests/models/accessrequestresponse
tags: ['SDK', 'Software Development Kit', 'Accessrequestresponse', 'Accessrequestresponse']
---

# Accessrequestresponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**new_requests** | [**[]Accessrequesttracking**](accessrequesttracking) | A list of new access request tracking data mapped to the values requested. | [optional] 
**existing_requests** | [**[]Accessrequesttracking**](accessrequesttracking) | A list of existing access request tracking data mapped to the values requested.  This indicates access has already been requested for this item. | [optional] 
}

## Example

```python
from sailpoint.access_requests.models.accessrequestresponse import Accessrequestresponse

accessrequestresponse = Accessrequestresponse(
new_requests=[{"requestedFor":"899fd612ecfc4cf3bf48f14d0afdef89","requestedItemsDetails":[{"type":"ENTITLEMENT","id":"779c6fd7171540bba1184e5946112c28"}],"attributesHash":-1928438224,"accessRequestIds":["5d3118c518a44ec7805450d53479ccdb"]}],
existing_requests=[{"requestedFor":"899fd612ecfc4cf3bf48f14d0afdef89","requestedItemsDetails":[{"type":"ROLE","id":"779c6fd7171540bbc1184e5946112c28"}],"attributesHash":2843118224,"accessRequestIds":["5d3118c518a44ec7805450d53479ccdc"]}]
)

```
[[Back to top]](#) 

