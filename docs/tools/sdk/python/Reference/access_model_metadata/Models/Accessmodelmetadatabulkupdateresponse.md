---
id: accessmodelmetadatabulkupdateresponse
title: Accessmodelmetadatabulkupdateresponse
pagination_label: Accessmodelmetadatabulkupdateresponse
sidebar_label: Accessmodelmetadatabulkupdateresponse
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Accessmodelmetadatabulkupdateresponse', 'Accessmodelmetadatabulkupdateresponse'] 
slug: /tools/sdk/python/access-model-metadata/models/accessmodelmetadatabulkupdateresponse
tags: ['SDK', 'Software Development Kit', 'Accessmodelmetadatabulkupdateresponse', 'Accessmodelmetadatabulkupdateresponse']
---

# Accessmodelmetadatabulkupdateresponse


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
from sailpoint.access_model_metadata.models.accessmodelmetadatabulkupdateresponse import Accessmodelmetadatabulkupdateresponse

accessmodelmetadatabulkupdateresponse = Accessmodelmetadatabulkupdateresponse(
id='2c9180867817ac4d017817c491119a20',
type='Role',
status='CREATED',
created='2020-10-08T18:33:52.029Z'
)

```
[[Back to top]](#) 

