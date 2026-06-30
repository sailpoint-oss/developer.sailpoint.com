---
id: createstreamrequest
title: Createstreamrequest
pagination_label: Createstreamrequest
sidebar_label: Createstreamrequest
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Createstreamrequest', 'Createstreamrequest'] 
slug: /tools/sdk/python/shared-signals-framework-ssf/models/createstreamrequest
tags: ['SDK', 'Software Development Kit', 'Createstreamrequest', 'Createstreamrequest']
---

# Createstreamrequest

Request body for POST /ssf/streams (create stream).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**delivery** | [**Createstreamdeliveryrequest**](createstreamdeliveryrequest) |  | [required]
**events_requested** | **[]str** | Optional list of event types the receiver wants. Use CAEP event-type URIs in the form: `https://schemas.openid.net/secevent/caep/event-type/{event-type}` (e.g. session revoke).  | [optional] 
**description** | **str** | Optional human-readable description of the stream. | [optional] 
}

## Example

```python
from sailpoint.shared_signals_framework_ssf.models.createstreamrequest import Createstreamrequest

createstreamrequest = Createstreamrequest(
delivery=sailpoint.shared_signals_framework_ssf.models.createstreamdeliveryrequest.createstreamdeliveryrequest(
                    method = 'urn:ietf:rfc:8935', 
                    endpoint_url = 'https://receiver.example.com/ssf/events', 
                    authorization_header = 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9...', ),
events_requested=["https://schemas.openid.net/secevent/caep/event-type/session-revoked"],
description='Production event stream'
)

```
[[Back to top]](#) 

