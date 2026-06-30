---
id: createstreamdeliveryrequest
title: Createstreamdeliveryrequest
pagination_label: Createstreamdeliveryrequest
sidebar_label: Createstreamdeliveryrequest
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Createstreamdeliveryrequest', 'Createstreamdeliveryrequest'] 
slug: /tools/sdk/python/shared-signals-framework-ssf/models/createstreamdeliveryrequest
tags: ['SDK', 'Software Development Kit', 'Createstreamdeliveryrequest', 'Createstreamdeliveryrequest']
---

# Createstreamdeliveryrequest

Full delivery configuration. method and endpoint_url are required.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**method** | **str** | Delivery method (only push is supported). | [required]
**endpoint_url** | **str** | Receiver endpoint URL for push delivery. | [required]
**authorization_header** | **str** | Authorization header value for delivery requests. | [optional] 
}

## Example

```python
from sailpoint.shared_signals_framework_ssf.models.createstreamdeliveryrequest import Createstreamdeliveryrequest

createstreamdeliveryrequest = Createstreamdeliveryrequest(
method='urn:ietf:rfc:8935',
endpoint_url='https://receiver.example.com/ssf/events',
authorization_header='Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9...'
)

```
[[Back to top]](#) 

