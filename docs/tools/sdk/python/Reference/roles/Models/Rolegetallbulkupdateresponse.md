---
id: rolegetallbulkupdateresponse
title: Rolegetallbulkupdateresponse
pagination_label: Rolegetallbulkupdateresponse
sidebar_label: Rolegetallbulkupdateresponse
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Rolegetallbulkupdateresponse', 'Rolegetallbulkupdateresponse'] 
slug: /tools/sdk/python/roles/models/rolegetallbulkupdateresponse
tags: ['SDK', 'Software Development Kit', 'Rolegetallbulkupdateresponse', 'Rolegetallbulkupdateresponse']
---

# Rolegetallbulkupdateresponse


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
from sailpoint.roles.models.rolegetallbulkupdateresponse import Rolegetallbulkupdateresponse

rolegetallbulkupdateresponse = Rolegetallbulkupdateresponse(
id='2c9180867817ac4d017817c491119a20',
type='Role',
status='CREATED',
created='2020-10-08T18:33:52.029Z'
)

```
[[Back to top]](#) 

