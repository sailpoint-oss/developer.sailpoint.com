---
id: v2024-deploy-response
title: DeployResponse
pagination_label: DeployResponse
sidebar_label: DeployResponse
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'DeployResponse', 'V2024DeployResponse'] 
slug: /tools/sdk/python/v2024/models/deploy-response
tags: ['SDK', 'Software Development Kit', 'DeployResponse', 'V2024DeployResponse']
---

# DeployResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**job_id** | **str** | Unique id assigned to this job. | [optional] 
**status** |  **Enum** [  'NOT_STARTED',    'IN_PROGRESS',    'COMPLETE',    'CANCELLED',    'FAILED' ] | Status of the job. | [optional] 
**type** |  **Enum** [  'CONFIG_DEPLOY_DRAFT' ] | Type of the job, will always be CONFIG_DEPLOY_DRAFT for this type of job. | [optional] 
**message** | **str** | Message providing information about the outcome of the deploy process. | [optional] 
**requester_name** | **str** | The name of the user that initiated the deploy process. | [optional] 
**file_exists** | **bool** | Whether or not a results file was created and stored for this deploy. | [optional] [default to True]
**created** | **datetime** | The time the job was started. | [optional] 
**modified** | **datetime** | The time of the last update to the job. | [optional] 
**completed** | **datetime** | The time the job was completed. | [optional] 
**draft_id** | **str** | The id of the draft that was used for this deploy. | [optional] 
**draft_name** | **str** | The name of the draft that was used for this deploy. | [optional] 
**cloud_storage_status** |  **Enum** [  'SYNCED',    'NOT_SYNCED',    'SYNC_FAILED' ] | Whether this deploy results file has been transferred to a customer storage location. | [optional] 
}

## Example

```python
from sailpoint.v2024.models.deploy_response import DeployResponse

deploy_response = DeployResponse(
job_id='07659d7d-2cce-47c0-9e49-185787ee565a',
status='COMPLETE',
type='CONFIG_DEPLOY_DRAFT',
message='Deploy creation message',
requester_name='requester.name',
file_exists=True,
created='2021-05-11T22:23:16Z',
modified='2021-05-11T22:23:16Z',
completed='2021-05-11T22:23:16Z',
draft_id='07659d7d-2cce-47c0-9e49-185787ee565a',
draft_name='Draft Name',
cloud_storage_status='SYNCED'
)

```
[[Back to top]](#) 

