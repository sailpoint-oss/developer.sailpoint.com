---
id: v2024-role-get-all-bulk-update-response
title: RoleGetAllBulkUpdateResponse
pagination_label: RoleGetAllBulkUpdateResponse
sidebar_label: RoleGetAllBulkUpdateResponse
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'RoleGetAllBulkUpdateResponse', 'V2024RoleGetAllBulkUpdateResponse'] 
slug: /tools/sdk/python/v2024/models/role-get-all-bulk-update-response
tags: ['SDK', 'Software Development Kit', 'RoleGetAllBulkUpdateResponse', 'V2024RoleGetAllBulkUpdateResponse']
---

# RoleGetAllBulkUpdateResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | ID of the task which is executing the bulk update. This also used in to the bulk-update/** API to track status. | [optional] 
**type** | **str** | Type of the bulk update object. | [optional] 
**status** |  **Enum** [  'CREATED',    'PRE_PROCESS',    'POST_PROCESS',    'CHUNK_PENDING',    'CHUNK_PROCESSING' ] | The status of the bulk update request, only list unfinished request's status, the status could also checked by getBulkUpdateStatus API | [optional] 
**created** | **datetime** | Time when the bulk update request was created | [optional] 
}

## Example

```python
from sailpoint.v2024.models.role_get_all_bulk_update_response import RoleGetAllBulkUpdateResponse

role_get_all_bulk_update_response = RoleGetAllBulkUpdateResponse(
id='2c9180867817ac4d017817c491119a20',
type='Role',
status='CREATED',
created='2020-10-08T18:33:52.029Z'
)

```
[[Back to top]](#) 

