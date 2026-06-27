---
id: spconfigimportjobstatus
title: Spconfigimportjobstatus
pagination_label: Spconfigimportjobstatus
sidebar_label: Spconfigimportjobstatus
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Spconfigimportjobstatus', 'Spconfigimportjobstatus'] 
slug: /tools/sdk/python/sp-config/models/spconfigimportjobstatus
tags: ['SDK', 'Software Development Kit', 'Spconfigimportjobstatus', 'Spconfigimportjobstatus']
---

# Spconfigimportjobstatus


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**job_id** | **str** | Unique id assigned to this job. | [required]
**status** |  **Enum** [  'NOT_STARTED',    'IN_PROGRESS',    'COMPLETE',    'CANCELLED',    'FAILED' ] | Status of the job. | [required]
**type** |  **Enum** [  'EXPORT',    'IMPORT' ] | Type of the job, either export or import. | [required]
**expiration** | **datetime** | The time until which the artifacts will be available for download. | [optional] 
**created** | **datetime** | The time the job was started. | [required]
**modified** | **datetime** | The time of the last update to the job. | [required]
**message** | **str** | This message contains additional information about the overall status of the job. | [optional] 
**completed** | **datetime** | The time the job was completed. | [optional] 
}

## Example

```python
from sailpoint.sp_config.models.spconfigimportjobstatus import Spconfigimportjobstatus

spconfigimportjobstatus = Spconfigimportjobstatus(
job_id='3469b87d-48ca-439a-868f-2160001da8c1',
status='COMPLETE',
type='IMPORT',
expiration='2021-05-11T22:23:16Z',
created='2021-05-11T22:23:16Z',
modified='2021-05-11T22:23:16Z',
message='Download import results for details.',
completed='2021-05-11T22:23:16Z'
)

```
[[Back to top]](#) 

