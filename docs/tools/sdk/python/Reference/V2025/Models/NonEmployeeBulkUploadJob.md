---
id: v2025-non-employee-bulk-upload-job
title: NonEmployeeBulkUploadJob
pagination_label: NonEmployeeBulkUploadJob
sidebar_label: NonEmployeeBulkUploadJob
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'NonEmployeeBulkUploadJob', 'V2025NonEmployeeBulkUploadJob'] 
slug: /tools/sdk/python/v2025/models/non-employee-bulk-upload-job
tags: ['SDK', 'Software Development Kit', 'NonEmployeeBulkUploadJob', 'V2025NonEmployeeBulkUploadJob']
---

# NonEmployeeBulkUploadJob


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The bulk upload job's ID. (UUID) | [optional] 
**source_id** | **str** | The ID of the source to bulk-upload non-employees to. (UUID) | [optional] 
**created** | **datetime** | The date-time the job was submitted. | [optional] 
**modified** | **datetime** | The date-time that the job was last updated. | [optional] 
**status** |  **Enum** [  'PENDING',    'IN_PROGRESS',    'COMPLETED',    'ERROR' ] | Returns the following values indicating the progress or result of the bulk upload job. \"PENDING\" means the job is queued and waiting to be processed. \"IN_PROGRESS\" means the job is currently being processed. \"COMPLETED\" means the job has been completed without any errors. \"ERROR\" means the job failed to process with errors.  | [optional] 
}

## Example

```python
from sailpoint.v2025.models.non_employee_bulk_upload_job import NonEmployeeBulkUploadJob

non_employee_bulk_upload_job = NonEmployeeBulkUploadJob(
id='2c91808568c529c60168cca6f90cffff',
source_id='2c91808568c529c60168cca6f90c1313',
created='2019-08-23T18:52:59.162Z',
modified='2019-08-23T18:52:59.162Z',
status='PENDING'
)

```
[[Back to top]](#) 

