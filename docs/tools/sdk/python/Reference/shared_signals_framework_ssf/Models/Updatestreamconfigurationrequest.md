---
id: updatestreamconfigurationrequest
title: Updatestreamconfigurationrequest
pagination_label: Updatestreamconfigurationrequest
sidebar_label: Updatestreamconfigurationrequest
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Updatestreamconfigurationrequest', 'Updatestreamconfigurationrequest'] 
slug: /tools/sdk/python/shared-signals-framework-ssf/models/updatestreamconfigurationrequest
tags: ['SDK', 'Software Development Kit', 'Updatestreamconfigurationrequest', 'Updatestreamconfigurationrequest']
---

# Updatestreamconfigurationrequest

Request body for PATCH /ssf/streams (partial update).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**stream_id** | **str** | ID of the stream to update. | [required]
**delivery** | [**Deliveryrequest**](deliveryrequest) |  | [optional] 
**events_requested** | **[]str** | Event types the receiver wants. Use CAEP event-type URIs. | [optional] 
**description** | **str** | Optional human-readable description of the stream. | [optional] 
}

## Example

```python
from sailpoint.shared_signals_framework_ssf.models.updatestreamconfigurationrequest import Updatestreamconfigurationrequest

updatestreamconfigurationrequest = Updatestreamconfigurationrequest(
stream_id='550e8400-e29b-41d4-a716-446655440000',
delivery=sailpoint.shared_signals_framework_ssf.models.deliveryrequest.deliveryrequest(
                    method = 'urn:ietf:rfc:8935', 
                    endpoint_url = 'https://receiver.example.com/ssf/events', 
                    authorization_header = 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9...', ),
events_requested=["https://schemas.openid.net/secevent/caep/event-type/session-revoked"],
description='Updated production event stream configuration'
)

```
[[Back to top]](#) 

