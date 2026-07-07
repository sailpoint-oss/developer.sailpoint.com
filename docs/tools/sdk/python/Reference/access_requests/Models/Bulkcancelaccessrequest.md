---
id: bulkcancelaccessrequest
title: Bulkcancelaccessrequest
pagination_label: Bulkcancelaccessrequest
sidebar_label: Bulkcancelaccessrequest
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Bulkcancelaccessrequest', 'Bulkcancelaccessrequest'] 
slug: /tools/sdk/python/access-requests/models/bulkcancelaccessrequest
tags: ['SDK', 'Software Development Kit', 'Bulkcancelaccessrequest', 'Bulkcancelaccessrequest']
---

# Bulkcancelaccessrequest

Request body payload for bulk cancel access request endpoint.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_request_ids** | **[]str** | List of access requests ids to cancel the pending requests | [required]
**comment** | **str** | Reason for cancelling the pending access request. | [required]
}

## Example

```python
from sailpoint.access_requests.models.bulkcancelaccessrequest import Bulkcancelaccessrequest

bulkcancelaccessrequest = Bulkcancelaccessrequest(
access_request_ids=["2c9180835d2e5168015d32f890ca1581","2c9180835d2e5168015d32f890ca1582"],
comment='I requested this role by mistake.'
)

```
[[Back to top]](#) 

