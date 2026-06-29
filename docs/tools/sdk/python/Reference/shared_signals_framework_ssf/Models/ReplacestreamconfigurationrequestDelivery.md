---
id: replacestreamconfigurationrequest-delivery
title: ReplacestreamconfigurationrequestDelivery
pagination_label: ReplacestreamconfigurationrequestDelivery
sidebar_label: ReplacestreamconfigurationrequestDelivery
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ReplacestreamconfigurationrequestDelivery', 'ReplacestreamconfigurationrequestDelivery'] 
slug: /tools/sdk/python/shared-signals-framework-ssf/models/replacestreamconfigurationrequest-delivery
tags: ['SDK', 'Software Development Kit', 'ReplacestreamconfigurationrequestDelivery', 'ReplacestreamconfigurationrequestDelivery']
---

# ReplacestreamconfigurationrequestDelivery


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**method** | **str** | Delivery method (only push is supported). | [required]
**endpoint_url** | **str** | Receiver endpoint URL for push delivery. | [required]
**authorization_header** | **str** | Authorization header value for delivery requests. | [optional] 
}

## Example

```python
from sailpoint.shared_signals_framework_ssf.models.replacestreamconfigurationrequest_delivery import ReplacestreamconfigurationrequestDelivery

replacestreamconfigurationrequest_delivery = ReplacestreamconfigurationrequestDelivery(
method='urn:ietf:rfc:8935',
endpoint_url='https://receiver.example.com/ssf/events',
authorization_header='Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9...'
)

```
[[Back to top]](#) 

