---
id: beta-identity-sync-job
title: IdentitySyncJob
pagination_label: IdentitySyncJob
sidebar_label: IdentitySyncJob
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'IdentitySyncJob', 'BetaIdentitySyncJob'] 
slug: /tools/sdk/python/beta/models/identity-sync-job
tags: ['SDK', 'Software Development Kit', 'IdentitySyncJob', 'BetaIdentitySyncJob']
---

# IdentitySyncJob


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Job ID. | [required]
**status** |  **Enum** [  'QUEUED',    'IN_PROGRESS',    'SUCCESS',    'ERROR' ] | The job status. | [required]
**payload** | [**IdentitySyncPayload**](identity-sync-payload) |  | [required]
}

## Example

```python
from sailpoint.beta.models.identity_sync_job import IdentitySyncJob

identity_sync_job = IdentitySyncJob(
id='0f11f2a4-7c94-4bf3-a2bd-742580fe3bde',
status='IN_PROGRESS',
payload=sailpoint.beta.models.identity_sync_payload.Identity Sync Payload(
                    type = 'SYNCHRONIZE_IDENTITY_ATTRIBUTES', 
                    data_json = '{"identityId":"2c918083746f642c01746f990884012a"}', )
)

```
[[Back to top]](#) 

