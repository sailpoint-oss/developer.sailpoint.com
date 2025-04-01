---
id: v2025-source-sync-job
title: SourceSyncJob
pagination_label: SourceSyncJob
sidebar_label: SourceSyncJob
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'SourceSyncJob', 'V2025SourceSyncJob'] 
slug: /tools/sdk/python/v2025/models/source-sync-job
tags: ['SDK', 'Software Development Kit', 'SourceSyncJob', 'V2025SourceSyncJob']
---

# SourceSyncJob


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Job ID. | [required]
**status** |  **Enum** [  'QUEUED',    'IN_PROGRESS',    'SUCCESS',    'ERROR' ] | The job status. | [required]
**payload** | [**SourceSyncPayload**](source-sync-payload) |  | [required]
}

## Example

```python
from sailpoint.v2025.models.source_sync_job import SourceSyncJob

source_sync_job = SourceSyncJob(
id='0f11f2a4-7c94-4bf3-a2bd-742580fe3bde',
status='IN_PROGRESS',
payload=sailpoint.v2025.models.source_sync_payload.SourceSyncPayload(
                    type = 'SYNCHRONIZE_SOURCE_ATTRIBUTES', 
                    data_json = '{"sourceId":"2c918083746f642c01746f990884012a"}', )
)

```
[[Back to top]](#) 

