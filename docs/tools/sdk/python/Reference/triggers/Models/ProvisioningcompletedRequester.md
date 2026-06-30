---
id: provisioningcompleted-requester
title: ProvisioningcompletedRequester
pagination_label: ProvisioningcompletedRequester
sidebar_label: ProvisioningcompletedRequester
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ProvisioningcompletedRequester', 'ProvisioningcompletedRequester'] 
slug: /tools/sdk/python/triggers/models/provisioningcompleted-requester
tags: ['SDK', 'Software Development Kit', 'ProvisioningcompletedRequester', 'ProvisioningcompletedRequester']
---

# ProvisioningcompletedRequester

Provisioning requester's identity.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'IDENTITY' ] | Provisioning requester's DTO type. | [required]
**id** | **str** | Provisioning requester's identity ID. | [required]
**name** | **str** | Provisioning owner's human-readable display name. | [required]
}

## Example

```python
from sailpoint.triggers.models.provisioningcompleted_requester import ProvisioningcompletedRequester

provisioningcompleted_requester = ProvisioningcompletedRequester(
type='IDENTITY',
id='2c7180a46faadee4016fb4e018c20648',
name='William Wilson'
)

```
[[Back to top]](#) 

