---
id: v2025-access-model-metadata-bulk-update-response
title: AccessModelMetadataBulkUpdateResponse
pagination_label: AccessModelMetadataBulkUpdateResponse
sidebar_label: AccessModelMetadataBulkUpdateResponse
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccessModelMetadataBulkUpdateResponse', 'V2025AccessModelMetadataBulkUpdateResponse'] 
slug: /tools/sdk/python/v2025/models/access-model-metadata-bulk-update-response
tags: ['SDK', 'Software Development Kit', 'AccessModelMetadataBulkUpdateResponse', 'V2025AccessModelMetadataBulkUpdateResponse']
---

# AccessModelMetadataBulkUpdateResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | ID of the task which is executing the bulk update. | [optional] 
**type** | **str** | Type of the bulk update object. | [optional] 
**status** |  **Enum** [  'CREATED',    'PRE_PROCESS',    'PRE_PROCESS_COMPLETED',    'POST_PROCESS',    'COMPLETED',    'CHUNK_PENDING',    'CHUNK_PROCESSING',    'RE_PROCESSING',    'PRE_PROCESS_FAILED',    'FAILED' ] | The status of the bulk update request, only list unfinished request's status. | [optional] 
**created** | **datetime** | Time when the bulk update request was created | [optional] 
}

## Example

```python
from sailpoint.v2025.models.access_model_metadata_bulk_update_response import AccessModelMetadataBulkUpdateResponse

access_model_metadata_bulk_update_response = AccessModelMetadataBulkUpdateResponse(
id='2c9180867817ac4d017817c491119a20',
type='Role',
status='CREATED',
created='2020-10-08T18:33:52.029Z'
)

```
[[Back to top]](#) 

