---
id: put-identity-collector-v1409-response
title: PutIdentityCollectorV1409Response
pagination_label: PutIdentityCollectorV1409Response
sidebar_label: PutIdentityCollectorV1409Response
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'PutIdentityCollectorV1409Response', 'PutIdentityCollectorV1409Response'] 
slug: /tools/sdk/python/data-access-security/models/put-identity-collector-v1409-response
tags: ['SDK', 'Software Development Kit', 'PutIdentityCollectorV1409Response', 'PutIdentityCollectorV1409Response']
---

# PutIdentityCollectorV1409Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**detail_code** | **str** | Fine-grained error code providing more detail of the error. | [optional] 
**tracking_id** | **str** | Unique tracking id for the error. | [optional] 
**messages** | [**[]PutIdentityCollectorV1409ResponseMessagesInner**](put-identity-collector-v1409-response-messages-inner) | Generic localized reason for error. | [optional] 
}

## Example

```python
from sailpoint.data_access_security.models.put_identity_collector_v1409_response import PutIdentityCollectorV1409Response

put_identity_collector_v1409_response = PutIdentityCollectorV1409Response(
detail_code='409.1 Conflict',
tracking_id='e7eab60924f64aa284175b9fa3309599',
messages=[
                    sailpoint.data_access_security.models.put_identity_collector_v1_409_response_messages_inner.putIdentityCollectorV1_409_response_messages_inner(
                        locale = 'en-US', 
                        locale_origin = 'DEFAULT', 
                        text = 'An identity collector with the same name already exists.', )
                    ]
)

```
[[Back to top]](#) 

