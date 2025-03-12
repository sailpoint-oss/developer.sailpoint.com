---
id: access-request-tracking
title: AccessRequestTracking
pagination_label: AccessRequestTracking
sidebar_label: AccessRequestTracking
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccessRequestTracking', 'AccessRequestTracking'] 
slug: /tools/sdk/python/v3/models/access-request-tracking
tags: ['SDK', 'Software Development Kit', 'AccessRequestTracking', 'AccessRequestTracking']
---

# AccessRequestTracking


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**requested_for** | **str** | The identity id in which the access request is for. | [optional] 
**requested_items_details** | [**[]RequestedItemDetails**](requested-item-details) | The details of the item requested. | [optional] 
**attributes_hash** | **str** | a hash representation of the access requested, useful for longer term tracking client side. | [optional] 
**access_request_ids** | **[]str** | a list of access request identifiers, generally only one will be populated, but high volume requested may result in multiple ids. | [optional] 
}

## Example

```python
from sailpoint.v3.models.access_request_tracking import AccessRequestTracking

access_request_tracking = AccessRequestTracking(
requested_for='2c918084660f45d6016617daa9210584',
requested_items_details={
"type": "ENTITLEMENT", 
"id": "779c6fd7171540bba1184e5946112c28" 
 },
attributes_hash='-1928438224',
access_request_ids=[5d3118c518a44ec7805450d53479ccdb]
)

```
[[Back to top]](#) 

