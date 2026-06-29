---
id: spconfigjob
title: Spconfigjob
pagination_label: Spconfigjob
sidebar_label: Spconfigjob
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Spconfigjob', 'Spconfigjob'] 
slug: /tools/sdk/python/sp-config/models/spconfigjob
tags: ['SDK', 'Software Development Kit', 'Spconfigjob', 'Spconfigjob']
---

# Spconfigjob


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**job_id** | **str** | Unique id assigned to this job. | [required]
**status** |  **Enum** [  'NOT_STARTED',    'IN_PROGRESS',    'COMPLETE',    'CANCELLED',    'FAILED' ] | Status of the job. | [required]
**type** |  **Enum** [  'EXPORT',    'IMPORT' ] | Type of the job, either export or import. | [required]
**expiration** | **datetime** | The time until which the artifacts will be available for download. | [optional] 
**created** | **datetime** | The time the job was started. | [required]
**modified** | **datetime** | The time of the last update to the job. | [required]
}

## Example

```python
from sailpoint.sp_config.models.spconfigjob import Spconfigjob

spconfigjob = Spconfigjob(
job_id='3469b87d-48ca-439a-868f-2160001da8c1',
status='COMPLETE',
type='IMPORT',
expiration='2021-05-11T22:23:16Z',
created='2021-05-11T22:23:16Z',
modified='2021-05-11T22:23:16Z'
)

```
[[Back to top]](#) 

