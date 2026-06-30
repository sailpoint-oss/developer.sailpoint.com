---
id: sourcesyncjob
title: Sourcesyncjob
pagination_label: Sourcesyncjob
sidebar_label: Sourcesyncjob
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Sourcesyncjob', 'Sourcesyncjob'] 
slug: /tools/sdk/python/sources/models/sourcesyncjob
tags: ['SDK', 'Software Development Kit', 'Sourcesyncjob', 'Sourcesyncjob']
---

# Sourcesyncjob


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Job ID. | [required]
**status** |  **Enum** [  'QUEUED',    'IN_PROGRESS',    'SUCCESS',    'ERROR' ] | The job status. | [required]
**payload** | [**Sourcesyncpayload**](sourcesyncpayload) |  | [required]
}

## Example

```python
from sailpoint.sources.models.sourcesyncjob import Sourcesyncjob

sourcesyncjob = Sourcesyncjob(
id='0f11f2a4-7c94-4bf3-a2bd-742580fe3bde',
status='IN_PROGRESS',
payload=sailpoint.sources.models.source_sync_payload.Source Sync Payload(
                    type = 'SYNCHRONIZE_SOURCE_ATTRIBUTES', 
                    data_json = '{"sourceId":"2c918083746f642c01746f990884012a"}', )
)

```
[[Back to top]](#) 

