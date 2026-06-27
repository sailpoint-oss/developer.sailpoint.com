---
id: updatestreamconfigresponse
title: Updatestreamconfigresponse
pagination_label: Updatestreamconfigresponse
sidebar_label: Updatestreamconfigresponse
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Updatestreamconfigresponse', 'Updatestreamconfigresponse'] 
slug: /tools/sdk/python/shared-signals-framework-ssf/models/updatestreamconfigresponse
tags: ['SDK', 'Software Development Kit', 'Updatestreamconfigresponse', 'Updatestreamconfigresponse']
---

# Updatestreamconfigresponse

Stream configuration response including updatedAt (for PATCH/PUT). Same JSON shape as GET single stream plus updatedAt.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**stream_id** | **str** | Unique stream identifier. | [optional] 
**iss** | **str** | Issuer (transmitter) URL. | [optional] 
**aud** | **str** | Audience for the stream. | [optional] 
**delivery** | [**Deliveryresponse**](deliveryresponse) |  | [optional] 
**events_supported** | **[]str** | Event types supported by the transmitter. Use CAEP event-type URIs in the form: `https://schemas.openid.net/secevent/caep/event-type/{event-type}` (e.g. session-revoked).  | [optional] 
**events_requested** | **[]str** | Event types requested by the receiver. Use CAEP event-type URIs in the form: `https://schemas.openid.net/secevent/caep/event-type/{event-type}` (e.g. session revoke).  | [optional] 
**events_delivered** | **[]str** | Event types currently being delivered (intersection of supported and requested). | [optional] 
**description** | **str** | Optional stream description. | [optional] 
**inactivity_timeout** | **int** | Inactivity timeout in seconds (optional). | [optional] 
**min_verification_interval** | **int** | Minimum verification interval in seconds (optional). | [optional] 
**updated_at** | **datetime** | Timestamp of the last configuration update. | [optional] 
}

## Example

```python
from sailpoint.shared_signals_framework_ssf.models.updatestreamconfigresponse import Updatestreamconfigresponse

updatestreamconfigresponse = Updatestreamconfigresponse(
stream_id='550e8400-e29b-41d4-a716-446655440000',
iss='https://tenant.sailpoint.com',
aud='https://receiver.example.com',
delivery=sailpoint.shared_signals_framework_ssf.models.deliveryresponse.deliveryresponse(
                    method = 'urn:ietf:rfc:8935', 
                    endpoint_url = 'https://receiver.example.com/ssf/events', ),
events_supported=[https://schemas.openid.net/secevent/caep/event-type/{event-type}],
events_requested=[https://schemas.openid.net/secevent/caep/event-type/{event-type}],
events_delivered=[https://schemas.openid.net/secevent/caep/event-type/{event-type}],
description='Production event stream',
inactivity_timeout=3600,
min_verification_interval=300,
updated_at='2025-02-11T14:30Z'
)

```
[[Back to top]](#) 

