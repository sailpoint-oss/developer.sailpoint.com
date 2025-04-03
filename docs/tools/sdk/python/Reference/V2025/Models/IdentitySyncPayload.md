---
id: v2025-identity-sync-payload
title: IdentitySyncPayload
pagination_label: IdentitySyncPayload
sidebar_label: IdentitySyncPayload
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'IdentitySyncPayload', 'V2025IdentitySyncPayload'] 
slug: /tools/sdk/python/v2025/models/identity-sync-payload
tags: ['SDK', 'Software Development Kit', 'IdentitySyncPayload', 'V2025IdentitySyncPayload']
---

# IdentitySyncPayload


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | Payload type. | [required]
**data_json** | **str** | Payload type. | [required]
}

## Example

```python
from sailpoint.v2025.models.identity_sync_payload import IdentitySyncPayload

identity_sync_payload = IdentitySyncPayload(
type='SYNCHRONIZE_IDENTITY_ATTRIBUTES',
data_json='{"identityId":"2c918083746f642c01746f990884012a"}'
)

```
[[Back to top]](#) 

