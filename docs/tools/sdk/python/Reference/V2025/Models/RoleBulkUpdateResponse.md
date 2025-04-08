---
id: v2025-role-bulk-update-response
title: RoleBulkUpdateResponse
pagination_label: RoleBulkUpdateResponse
sidebar_label: RoleBulkUpdateResponse
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'RoleBulkUpdateResponse', 'V2025RoleBulkUpdateResponse'] 
slug: /tools/sdk/python/v2025/models/role-bulk-update-response
tags: ['SDK', 'Software Development Kit', 'RoleBulkUpdateResponse', 'V2025RoleBulkUpdateResponse']
---

# RoleBulkUpdateResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | ID of the task which is executing the bulk update. This also used in to the bulk-update/** API to track status. | [optional] 
**type** | **str** | Type of the bulk update object. | [optional] 
**status** |  **Enum** [  'CREATED',    'PRE_PROCESS',    'PRE_PROCESS_COMPLETED',    'POST_PROCESS',    'COMPLETED',    'CHUNK_PENDING',    'CHUNK_PROCESSING' ] | The status of the bulk update request, could also checked by getBulkUpdateStatus API | [optional] 
**created** | **datetime** | Time when the bulk update request was created | [optional] 
}

## Example

```python
from sailpoint.v2025.models.role_bulk_update_response import RoleBulkUpdateResponse

role_bulk_update_response = RoleBulkUpdateResponse(
id='2c9180867817ac4d017817c491119a20',
type='Role',
status='CREATED',
created='2020-10-08T18:33:52.029Z'
)

```
[[Back to top]](#) 

