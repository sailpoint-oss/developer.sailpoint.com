---
id: deliveryrequest
title: Deliveryrequest
pagination_label: Deliveryrequest
sidebar_label: Deliveryrequest
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Deliveryrequest', 'Deliveryrequest'] 
slug: /tools/sdk/python/shared-signals-framework-ssf/models/deliveryrequest
tags: ['SDK', 'Software Development Kit', 'Deliveryrequest', 'Deliveryrequest']
---

# Deliveryrequest

Delivery configuration for PATCH /ssf/streams (partial update). All fields are optional; only provided fields are updated.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**method** | **str** | Delivery method (optional for PATCH). | [optional] 
**endpoint_url** | **str** | Receiver endpoint URL (optional for PATCH). | [optional] 
**authorization_header** | **str** | Optional authorization header value. | [optional] 
}

## Example

```python
from sailpoint.shared_signals_framework_ssf.models.deliveryrequest import Deliveryrequest

deliveryrequest = Deliveryrequest(
method='urn:ietf:rfc:8935',
endpoint_url='https://receiver.example.com/ssf/events',
authorization_header='Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9...'
)

```
[[Back to top]](#) 

