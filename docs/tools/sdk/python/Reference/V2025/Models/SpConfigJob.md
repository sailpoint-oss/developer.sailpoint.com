---
id: v2025-sp-config-job
title: SpConfigJob
pagination_label: SpConfigJob
sidebar_label: SpConfigJob
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'SpConfigJob', 'V2025SpConfigJob'] 
slug: /tools/sdk/python/v2025/models/sp-config-job
tags: ['SDK', 'Software Development Kit', 'SpConfigJob', 'V2025SpConfigJob']
---

# SpConfigJob


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**job_id** | **str** | Unique id assigned to this job. | [required]
**status** |  **Enum** [  'NOT_STARTED',    'IN_PROGRESS',    'COMPLETE',    'CANCELLED',    'FAILED' ] | Status of the job. | [required]
**type** |  **Enum** [  'EXPORT',    'IMPORT' ] | Type of the job, either export or import. | [required]
**expiration** | **datetime** | The time until which the artifacts will be available for download. | [required]
**created** | **datetime** | The time the job was started. | [required]
**modified** | **datetime** | The time of the last update to the job. | [required]
}

## Example

```python
from sailpoint.v2025.models.sp_config_job import SpConfigJob

sp_config_job = SpConfigJob(
job_id='3469b87d-48ca-439a-868f-2160001da8c1',
status='COMPLETE',
type='IMPORT',
expiration='2021-05-11T22:23:16Z',
created='2021-05-11T22:23:16Z',
modified='2021-05-11T22:23:16Z'
)

```
[[Back to top]](#) 

