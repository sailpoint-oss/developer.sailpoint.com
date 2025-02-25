---
id: v2024-source-sync-payload
title: SourceSyncPayload
pagination_label: SourceSyncPayload
sidebar_label: SourceSyncPayload
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'SourceSyncPayload', 'V2024SourceSyncPayload'] 
slug: /tools/sdk/python/v2024/models/source-sync-payload
tags: ['SDK', 'Software Development Kit', 'SourceSyncPayload', 'V2024SourceSyncPayload']
---

# SourceSyncPayload


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | Payload type. | [required]
**data_json** | **str** | Payload type. | [required]
}

## Example

```python
from sailpoint.v2024.models.source_sync_payload import SourceSyncPayload

source_sync_payload = SourceSyncPayload(
type='SYNCHRONIZE_SOURCE_ATTRIBUTES',
data_json='{"sourceId":"2c918083746f642c01746f990884012a"}'
)

```
[[Back to top]](#) 

