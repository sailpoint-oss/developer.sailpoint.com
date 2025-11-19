---
id: v2025-provisioning-completed-requester
title: ProvisioningCompletedRequester
pagination_label: ProvisioningCompletedRequester
sidebar_label: ProvisioningCompletedRequester
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ProvisioningCompletedRequester', 'V2025ProvisioningCompletedRequester'] 
slug: /tools/sdk/python/v2025/models/provisioning-completed-requester
tags: ['SDK', 'Software Development Kit', 'ProvisioningCompletedRequester', 'V2025ProvisioningCompletedRequester']
---

# ProvisioningCompletedRequester

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
from sailpoint.v2025.models.provisioning_completed_requester import ProvisioningCompletedRequester

provisioning_completed_requester = ProvisioningCompletedRequester(
type='IDENTITY',
id='2c7180a46faadee4016fb4e018c20648',
name='William Wilson'
)

```
[[Back to top]](#) 

