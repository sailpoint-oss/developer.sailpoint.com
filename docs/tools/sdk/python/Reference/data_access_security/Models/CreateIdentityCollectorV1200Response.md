---
id: create-identity-collector-v1200-response
title: CreateIdentityCollectorV1200Response
pagination_label: CreateIdentityCollectorV1200Response
sidebar_label: CreateIdentityCollectorV1200Response
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'CreateIdentityCollectorV1200Response', 'CreateIdentityCollectorV1200Response'] 
slug: /tools/sdk/python/data-access-security/models/create-identity-collector-v1200-response
tags: ['SDK', 'Software Development Kit', 'CreateIdentityCollectorV1200Response', 'CreateIdentityCollectorV1200Response']
---

# CreateIdentityCollectorV1200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** | The unique identifier of the created identity collector. | [optional] 
**name** | **str** | The display name of the created identity collector. | [optional] 
}

## Example

```python
from sailpoint.data_access_security.models.create_identity_collector_v1200_response import CreateIdentityCollectorV1200Response

create_identity_collector_v1200_response = CreateIdentityCollectorV1200Response(
id=12345,
name='Active Directory Identity Collector'
)

```
[[Back to top]](#) 

