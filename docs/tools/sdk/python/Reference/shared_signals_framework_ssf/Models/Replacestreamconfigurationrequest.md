---
id: replacestreamconfigurationrequest
title: Replacestreamconfigurationrequest
pagination_label: Replacestreamconfigurationrequest
sidebar_label: Replacestreamconfigurationrequest
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Replacestreamconfigurationrequest', 'Replacestreamconfigurationrequest'] 
slug: /tools/sdk/python/shared-signals-framework-ssf/models/replacestreamconfigurationrequest
tags: ['SDK', 'Software Development Kit', 'Replacestreamconfigurationrequest', 'Replacestreamconfigurationrequest']
---

# Replacestreamconfigurationrequest

Request body for PUT /ssf/streams (full replace).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**stream_id** | **str** | ID of the stream to replace. | [required]
**delivery** | [**ReplacestreamconfigurationrequestDelivery**](replacestreamconfigurationrequest-delivery) |  | [required]
**events_requested** | **[]str** | Event types the receiver wants. Use CAEP event-type URIs. | [optional] 
**description** | **str** | Optional human-readable description of the stream. | [optional] 
}

## Example

```python
from sailpoint.shared_signals_framework_ssf.models.replacestreamconfigurationrequest import Replacestreamconfigurationrequest

replacestreamconfigurationrequest = Replacestreamconfigurationrequest(
stream_id='550e8400-e29b-41d4-a716-446655440000',
delivery=,
events_requested=["https://schemas.openid.net/secevent/caep/event-type/session-revoked"],
description='Production event stream'
)

```
[[Back to top]](#) 

