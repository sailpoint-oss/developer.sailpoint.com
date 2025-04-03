---
id: v2025-sp-config-export-job
title: SpConfigExportJob
pagination_label: SpConfigExportJob
sidebar_label: SpConfigExportJob
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'SpConfigExportJob', 'V2025SpConfigExportJob'] 
slug: /tools/sdk/python/v2025/models/sp-config-export-job
tags: ['SDK', 'Software Development Kit', 'SpConfigExportJob', 'V2025SpConfigExportJob']
---

# SpConfigExportJob


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**job_id** | **str** | Unique id assigned to this job. | [required]
**status** |  **Enum** [  'NOT_STARTED',    'IN_PROGRESS',    'COMPLETE',    'CANCELLED',    'FAILED' ] | Status of the job. | [required]
**type** |  **Enum** [  'EXPORT',    'IMPORT' ] | Type of the job, either export or import. | [required]
**expiration** | **datetime** | The time until which the artifacts will be available for download. | [required]
**created** | **datetime** | The time the job was started. | [required]
**modified** | **datetime** | The time of the last update to the job. | [required]
**description** | **str** | Optional user defined description/name for export job. | [optional] 
}

## Example

```python
from sailpoint.v2025.models.sp_config_export_job import SpConfigExportJob

sp_config_export_job = SpConfigExportJob(
job_id='3469b87d-48ca-439a-868f-2160001da8c1',
status='COMPLETE',
type='IMPORT',
expiration='2021-05-11T22:23:16Z',
created='2021-05-11T22:23:16Z',
modified='2021-05-11T22:23:16Z',
description='ETS configuration objects from Acme-Solar sandbox'
)

```
[[Back to top]](#) 

