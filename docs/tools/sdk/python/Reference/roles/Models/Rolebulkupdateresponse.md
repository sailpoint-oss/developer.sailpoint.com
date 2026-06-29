---
id: rolebulkupdateresponse
title: Rolebulkupdateresponse
pagination_label: Rolebulkupdateresponse
sidebar_label: Rolebulkupdateresponse
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Rolebulkupdateresponse', 'Rolebulkupdateresponse'] 
slug: /tools/sdk/python/roles/models/rolebulkupdateresponse
tags: ['SDK', 'Software Development Kit', 'Rolebulkupdateresponse', 'Rolebulkupdateresponse']
---

# Rolebulkupdateresponse


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
from sailpoint.roles.models.rolebulkupdateresponse import Rolebulkupdateresponse

rolebulkupdateresponse = Rolebulkupdateresponse(
id='2c9180867817ac4d017817c491119a20',
type='Role',
status='CREATED',
created='2020-10-08T18:33:52.029Z'
)

```
[[Back to top]](#) 

